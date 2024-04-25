import React, { useState } from "react";

const Multipleform = () => {
  // const initialValue={
  //   naam: "",
  //   FatherNAme: "",
  //   email: "",
  //   password: "",
  //   dobday: "1",
  //   dobMonth: "jan",
  //   dobYear: "1905",
  //   gender: "",
  // }
  const [detail,setDetail]=useState([]);
  const [formData, setFormData] = useState({
    naam: "",
    FatherNAme: "",
    email: "",
    password: "",
    dobday: "1",
    dobMonth: "jan",
    dobYear: "1905",
    gender: "",
  });
  const [checkData,setCheckData]=useState('');

  function Handler(e) {
    //  const name=e.target.name;
    //  const value=e.target.value;
    const { name, value } = e.target;
    if(name==='gender'){
      setCheckData(value);
    }

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function HandleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if(formData.password ==='' || formData.naam==='' || formData.email==='') {
      alert('Please Fill in All the Information To get Sign-up')
      return}
    setDetail([...detail,formData])
    setFormData({
      naam: "",
      FatherNAme: "",
      email: "",
      password: "",
      dobday: "1",
      dobMonth: "jan",
      dobYear: "1905",
      gender: "",
    })
    
    setCheckData('')
    
  }
  return (
    <>
      <h1>Signup</h1>
      <form className="Form" onSubmit={HandleSubmit}>
        <div className="he">
          <input
            type="text"
            name="naam"
            placeholder="FirstName"
            onChange={Handler}
            value={formData.naam}
          />
          <input
            type="text"
            name="FatherNAme"
            placeholder="Father Name"
            onChange={Handler}
            value={formData.FatherNAme}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={Handler}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="New Password"
          onChange={Handler}
          value={formData.password}
        />
        <div className="hehe2">
          <p>Date Of Birth</p>
          <select value={formData.dobday} name="dobday" onChange={Handler}>
            {Array.from({ length: 31 }, (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select  value={formData.dobMonth} name="dobMonth" onChange={Handler}>
            {Array.from({ length: 12 }, (_, i) => {
              const monthIndex = i;
              const monthName = new Date(0, monthIndex).toLocaleDateString(
                "en",
                { month: "short" }
              );
              return (
                <option key={monthIndex} value={monthName}>
                  {monthName}
                </option>
              );
            })}
          </select>
          <select  value={formData.dobYear} name="dobYear" onChange={Handler}>
            {Array.from({ length: 2025 - 1905 }, (_, i) => {
              const year = 1905 + i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div className="heh">
          <div>
            <span>female </span>
            <input
              type="radio"
              name="gender"
              value='female'
              onChange={Handler}
              checked={checkData==='female'}
/>
          </div>
          <div>
            <span>Male </span>
            <input type="radio" name="gender"   checked={checkData==='Male'} value="Male" onChange={Handler} />
          </div>
          <div>
            <span>Custom</span>
            <input
              type="radio"
              name="gender"
              value="Custom"
              onChange={Handler}
              checked={checkData==='Custom'}
            />
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
      <div>
          <table>
          <tr>
          <th>Name</th>
          <th>FatherName</th>
          <th>Email Address</th>
          <th>PAssword</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          </tr>
          {detail.map((x)=>(
            <>
          <tr>
            <td>{x.naam}</td>
            <td>{x.FatherNAme}</td>
            <td>{x.email}</td>
            <td>{x.password}</td>
            <td>{x.dobday}/{x.dobMonth}/{x.dobYear}</td>
            <td>{x.gender}</td>
        </tr>
            </>
          ))
        }
        </table>
      </div>
    </>
  );
};

export default Multipleform;
