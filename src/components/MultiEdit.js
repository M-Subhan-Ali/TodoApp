import React, { useState } from "react";

const MultiEdit = () => {
  const [data, setData] = useState({
    name: "subhan",
    number: "",
    email: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [detail,setDetail]=useState([]);
  const[edit,SetEdit]=useState(null);

  function handleSubmit(event) {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value }
    });
  }

  function Handler(e){
   e.preventDefault();
   if(edit!==null){
    const update=[...detail];
    update[edit]=data;
    SetEdit(null)
   
  }else{
    if(data.name !==""){
      setDetail([...detail,data])
      

    }

   }
   setData( {name: "subhan",
   number: "",
   email: "",
   city: "",
   state: "",
   pincode: "",})
   console.log(data);
  }
  function Delete(i){
    console.log(i);
    setDetail(detail.filter((x,ai)=>ai!==i) )
  }
function Edit(x,i){
  SetEdit(i);
  setData(x);
}

  return (
    <>
      <form onSubmit={Handler}>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          onChange={handleSubmit}
          value={data.name}
          name="name"
          placeholder="Name"
        />
        <br></br>
        <label>Number</label>
        <br></br>
        <input
          type="number"
          onChange={handleSubmit}
          value={data.number}
          name="number"
          placeholder="Contact No"
        />
        <br></br>
        <label>Email</label>
        <br></br>
        <input
          type="email"
          onChange={handleSubmit}
          value={data.email}
          name="email"
          placeholder="Email"
        />
        <br></br>
        <label>City</label>
        <br></br>
        <input
          type="text"
          onChange={handleSubmit}
          value={data.city}
          name="city"
          placeholder="City"
        />
        <br></br>
        <label>State</label>
        <br></br>
        <input
          type="text"
          onChange={handleSubmit}
          value={data.state}
          name="state"
          placeholder="state"
        />
        <br></br>
        <label>PinCode</label>
        <br></br>
        <input
          type="number"
          onChange={handleSubmit}
          value={data.pincode}
          name="pincode"
          placeholder="PinCode"
        />
         <button>Submit</button>

        <br></br>
      </form>

      <table>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Email</th>
          <th>City</th>
          <th>State</th>
          <th>PinCode</th>
        </tr>
        {detail.map((x,i)=>(
        <tr key={i}>
          <td>{x.name}</td>
          <td>{x.number}</td>
          <td>{x.email}</td>
          <td>{x.city}</td>
          <td>{x.state}</td>
          <td>{x.pincode}</td>
          <button onClick={()=>Delete(i)}>delete</button>
          <button onClick={()=>Edit(x,i)}>Edit</button>
        </tr>)
        )
        }
      </table>
    </>
  );
};

export default MultiEdit;
