/* eslint-disable react-hooks/exhaustive-deps */
/*It returns value and setValue so that it will work exactly the same as useState */

import {useState,useEffect } from 'react'

//function that gets the saved values from local storageand lw mafesh saved values it will return the initalValue
const getSavedData = (key , initalValue) =>{
    const savedValue = JSON.parse(localStorage.getItem(key));
    //if we where previosly on this page and we saved some values we want to return them
    if(savedValue) return savedValue;
    //as this hook work exactly as useState and useState can take function as an input so when need to check if the initalValue is a function and call it 
    if(initalValue instanceof Function) return initalValue();
    //if all of the above is false it will return the initalValue
    return initalValue;
}



const useLocalStorage = (key ,initalValue) => {

    //we use a function inside as we dont want to call JSON.parse(localStorage...) evey time we render our component as it is slow so it will only be called once when the component first load
   const [value , setValue] = useState(() => {
        return getSavedData(key, initalValue);
   })
   
   //to store the value in localstorage
   useEffect(() => {
    localStorage.setItem(key,JSON.stringify(value))
   },[value])
   
   
   return [value, setValue]
}

export default useLocalStorage


//To use this hook in any component just use it like useState  EX:
//                         useLocalStorage(key  , initalValue)
//const [name , setName] = useLocalStorage('name', '')