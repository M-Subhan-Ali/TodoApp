import React, { useState } from "react";

const Edit = () => {
  const [data, setData] = useState("hi");
  const [store, SetStore] = useState([]);
  const [edit,SetEdit]=useState(null);
  function Handler(e) {
    e.preventDefault();
    if(edit!==null){
        const updateItem=[...store];
        updateItem[edit]=data;
        SetStore(updateItem);
        SetEdit(null);
    }else{
        if(data!==''){
            SetStore([...store, data]);
        }
    }
    setData("");

  }

  function Delete(i){
    // console.log(i);
    // SetStore(store.filter((v,e)=>(e!==i) ))
    SetStore(store.filter((v,e)=>(v!==i)))
  }

  function Edit(v,i){
    SetEdit(i);
    setData(v);
  }
  return (
    <>
      <form onSubmit={(v) => Handler(v)}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button>save</button>
      </form>
      <ul>
        {store.map((v, i) => {
          return (
            <>
              <li key={i}>{v}
              <button onClick={()=>Delete(v)}>&times;</button>
              <button onClick={()=>Edit(v,i)}>edit</button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Edit;
