import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import '/home/basu/Downloads/Livestock/src/pages/Animal.css'

const Animal = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed]=useState("");
  const [sex, setSex ] = useState("");
  const [intId, setIntId] = useState("");
  const [status,setStatus]=useState("");
 
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://64745e697de100807b1ac11a.mockapi.io/live/livestock", {
        name: name,
        type: type,
        breed: breed,
        sex: sex,
        intId: intId,
        status: status

      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2 className="head">Add Animal Details</h2>
       
      </div>
      <form className="form">
        <h3>Basic Information</h3>
        <div className="mb-3">
          <label className="form-label">Name</label>
       <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
     
          <label className="form-label">Animal Type</label>
       
         <select  className="form-control" onChange={(e) => setType(e.target.value)}>
          <option>Select</option>
            <option>Buffalo</option>
            <option>Cat</option>
            <option>Chicken</option>
            <option>Cow</option>
            <option>Dog</option>
            <option>Goat</option>
            <option>Sheep</option>
          </select>
          <label className="form-label">Breed</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setBreed(e.target.value)}
          />
          </div>
          <br></br>
       <div>
       <label className="form-label1">Sex</label>
       <select className="form-control"
            onChange={(e) => setSex(e.target.value)}>
        <option>Select</option>
        <option>Male</option>
        <option>Female</option>
       </select>
          <label className="form-l1">Status</label>
          <select className="form-control" onChange={(e) => setStatus(e.target.value)}>
          <option>Select</option>
          <option>Active</option>
          <option>For Sale</option>
          <option>Lost</option>
          <option>Sick</option>
          <option>Sold</option>
          </select><label className="form-label">Internal Id</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setIntId(e.target.value)}
          />
       </div>
<div className="btn1">
        <button type="submit" className="btn" onClick={handleSubmit}> Submit
        </button>
        <Link to="/read">
          <button className="btn">Show Data</button>
        </Link>
        </div>
      </form>
    </>
  );
};

export default Animal;