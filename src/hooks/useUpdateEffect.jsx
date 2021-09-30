/* eslint-disable react-hooks/exhaustive-deps */

//this hooks is an inhanced way of using useEffect(()=>{},[]) as this will run on first render along with on every time this dependance change but what this hook does is it will make it only run when the depances change without running on the first render

import {useEffect,useRef} from 'react'

const useUpdateEffect = (callBack, dependence) => {
//ref does not make your componet to update when it gets change and return and object
    const isThisFirstRender = useRef(true);

    useEffect(() => {
    
    if(isThisFirstRender.current){
        isThisFirstRender.current=false;
        return
    }
    
    return callBack()
    
    },dependence)
    
    return callBack();

}

export default useUpdateEffect

//to use this hook use it just like useEffect pass it a function that you want it to run only when the dependace as an array that you pass next change EX:

//const [count, setCount] = useState(10)
//useUpdateEffect(() => console.log('dep changed') ,[count] )