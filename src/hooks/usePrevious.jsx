//what this hook do is that it return the previous value of a state
import {useRef} from 'react'

 const usePrevious = (value) => {
  const currentValue = useRef(value)  
    const previousValue = useRef()    
    
    if(currentValue !== value) {
        previousValue.current = currentValue.current;
        currentValue.current = value; 
    }
    
    return previousValue.current;
}

export default usePrevious;

//to use this hook make a useState then its value passit inside this hook
//const [count ,setCount]= useState(0)
//usePrevious(count);