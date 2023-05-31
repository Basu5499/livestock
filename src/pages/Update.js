import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed]=useState("");
  const [sex, setSex ] = useState("");
  const [intId, setIntId] = useState("");
  const [status,setStatus]=useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setId(localStorage.getItem("name", name));
    localStorage.getItem("type", type);
    localStorage.getItem("breed", breed);
    localStorage.getItem("sex", sex);
    localStorage.getItem("intId", intId);
    localStorage.getItem("status", status);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://64745e697de100807b1ac11a.mockapi.io/live/livestock/${id}`, {
        name: name,
        type: type,
        breed: breed,
        sex: sex,
        intId: intId,
        status: status
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
       <label className="form-label">Animal Type</label>
       
       <select  className="form-control" onChange={(e) => setType(e.target.value)}  value={type}>
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
         className="form-control"  value={breed}
         onChange={(e) => setBreed(e.target.value)}
       />
       </div>
       <br></br>
    <div>
    <label className="form-label">Sex</label>
    <select className="form-control"  value={sex}
         onChange={(e) => setSex(e.target.value)}>
     <option>Select</option>
     <option>Male</option>
     <option>Female</option>
    </select>
    <label className="form-label">Internal Id</label>
       <input
         type="text"
         className="form-control"  value={intId}
         onChange={(e) => setIntId(e.target.value)}
       />
       <label className="form-label">Status</label>
       <select className="form-control" onChange={(e) => setStatus(e.target.value)}  value={status}>
       <option>Select</option>
       <option>Active</option>
       <option>For Sale</option>
       <option>Lost</option>
       <option>Sick</option>
       <option>Sold</option>
       </select>
    </div>


        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};

export default Update;