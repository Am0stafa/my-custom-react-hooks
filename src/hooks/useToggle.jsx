//it is used to toggle or change the value if you are using a useState of a boolean
import {useState} from 'react'

const useToggle = (initalValue) => {
    const [value , setValue] = useState(initalValue);
    
    //if we passed true or false it will return it but if we passed nothing it will work as toggle
    const toggle = (type) => {
        setValue((type) => {
          if (type instanceof 'boolean')
          return type
          else
          return !value
        })

    }
    
    return[value , toggle]


}

export default useToggle

//to use first initaliz it then use the function in one of two ways either by passing the value that you want to change to or use the function without () to use as a toggle EG:

//const [value , toggle] = useToggle(false)
//onClick={toggle} TO toggle between values
//onClick={() => toggle(true)} to change the value to true