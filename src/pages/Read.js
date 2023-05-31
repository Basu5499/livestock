import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Read.css'

const Read = () => {
  const [data, setData] = useState([]);
  // const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://64745e697de100807b1ac11a.mockapi.io/live/livestock")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64745e697de100807b1ac11a.mockapi.io/live/livestock/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, type, breed, sex, intId, status) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("type", type);
    localStorage.setItem("breed", breed);
    localStorage.setItem("sex", sex);
    localStorage.setItem("intId", intId);
    localStorage.setItem("status", status);
   
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        {/* <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        /> */}
      </div>
      <div className="d-flex justify-content-between m-3">
        <h2 className="head">Read Operation</h2>
        <Link to="/animal">
          <button className="create">Create</button>
        </Link>
      </div>
      <table >
        <thead>
          <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Name</th>
            <th scope="col">Animal Type</th>
            <th scope="col">Breed</th>
            <th scope="col">Sex</th>
            <th scope="col">Internal Id</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.type}</td>
                  <td>{eachData.breed}</td>
                  <td>{eachData.sex}</td>
                  <td>{eachData.intId}</td>
                  <td>{eachData.status}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="edit"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.type,
                            eachData.breed,
                            eachData.sex,
                            eachData.intId,
                            eachData.status
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;