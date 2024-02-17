import React ,{useState,useEffect} from 'react';

const DataFetching=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        .then(data=>{setData(data)})
    },[])
    return(
        <div>
        <h1>Fetching Data using useEffectHook</h1>
        <ol>
           {data.map(item=>(
           <li key={item.id}>{item.title}</li>
           )) }
         
       </ol>
       </div>
    )
}
export default DataFetching