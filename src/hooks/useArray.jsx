import {useState} from 'react'

//this hooks makes it easier to {setArray , push , remove ,filter ,update ,clear} this from an array as you wont have to worry about that you have to take in the previou array filter and other boilerplate code that you have to wright over and over again for every array so this hook bascially makes you just save your array and its initalValue and just give you really simple functions that you can use to update the state

const useArray = (defaultValue) => {
    
    const [array, setArray] = useState(defaultValue)

    //add the element that you pass to the end of the array
    const push = (element) => {
      setArray(prev => [...prev, element])
    }
  
    const filter = (callback) => {
      setArray(prev => prev.filter(callback))
    }
    
    //update the value at position that you define with an new element
    const update = (index, newElement) => {
    //index start from 0
      setArray(prev => [
        ...prev.slice(0, index),
        newElement,
        ...prev.slice(index + 1, prev.length),
      ])
    }
  
    const  remove=(index) => {
      setArray(prev => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)])
    }
  
    const  clear=() => {
      setArray([])
    }
  
    return { array, set: setArray, push, filter, update, remove, clear }  
    
}

export default useArray;
//to use it use it just destructure { array, setArray, push, filter, update, remove, clear } = useArray([initalValue])