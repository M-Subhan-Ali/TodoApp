import './App.css';
import React, { useState } from 'react';
import Multipleform from '../src/components/Multipleform';
// import Edit from '../src/components/Edit.js';
import MultiEdit from './components/MultiEdit.js';

function App() {
//  const [data,setData]=useState('hehe');
//  const [store,setStore]=useState([]);
//  const [edit,setEdit]=useState(null)
  
//  function handler(e){
//    e.preventDefault();
//    if(edit!==null){
//     const updating=[...store];
//     updating[edit]=data;
//     setStore(updating);
//     setData('');
//     setEdit(null)
//    }else{
//    if(data!==""){
//    setStore([...store,data])
//    setData('')
//   }
// }
//   }
 
//   function deleteHandler(i){
//     setStore(store.filter((_,f)=>f!==i))
  
//     // const updatehandler=[...store];
//     // updatehandler.splice(i,1);
//     // setStore(updatehandler);
//   }

//   function EditHandler(i){
//     setEdit(i);
//     setData(store[i])
//     // setData(store[i]);
//     // console.log(store[i]);
    
//   }
  return (
    <>
    <MultiEdit/>
    {/*<Multipleform/>*/}
    {/* <form onSubmit={handler}>
    <input  type='text'  value={data} onChange={(e)=>setData(e.target.value)}/>
    <button >{edit !==null ? 'save':'Add'}</button>
    </form>
    <ul>
      {store.map((d,i)=>
    <li key={i}>{d}  
     <button onClick={()=>deleteHandler(i)}>&times;</button>
     <button onClick={()=>EditHandler(i)}>Edit</button>
    </li>
      )} 
    </ul> */}
    {/* {<Edit/>} */}
    </>
  );
}

export default App;















// function App() {
//   const [data,setData]=useState({name:"",time:0})
//   function handler(e){
//    e.preventDefault(); 
//   }
//   return (
//     <>
//     <form onSubmit={(e)=>handler(e)}>
//     <input type="text" value={data.name} onChange={(e)=>setData.name(e.target.value)} />
//     <ul>
//       <li>{data.name}</li>
//     </ul>
//     </form>
//     </>
//   );
// }

// export default App;
