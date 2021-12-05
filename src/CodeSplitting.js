export const fun=(a,b)=>{
   return a+b;
    }
   


    import React,{Suspense} from 'react'
import("./CodeSplitting").then((result)=>{
    console.warn(result.fun(22,33));
})

const Test=React.lazy(()=>import("./Test"))
 const App = () => {

    return (
        <Suspense fallback={<div>waiting...</div>}>
           <Test/> 
        </Suspense>
    )
}
export default App;