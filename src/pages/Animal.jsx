import React, { Component } from 'react';
import '/home/basu/Downloads/Livestock/src/pages/Animal.css';

class Animal extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Add Animal Details',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let breed = this.refs.breed.value;
    let sex =this.refs.sex.value;
    let dob =this.refs.dob.value;

    if(this.state.act === 0){   //new
      let data = {
        name, breed, sex,dob
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].breed = breed;
      datas[index].sex=sex;
      datas[index].dob=dob;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.breed.value = data.breed;
    this.refs.sex.value = data.sex;
    this.refs.dob.value = data.dob;
    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2 className='title'>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <h3>Basic Information</h3>
          <br></br>
          <label>Animal Name<input type="text" ref="name" placeholder="Animal name" className="formField" required/></label>
          <label className='label1'>Breed<input type="text" ref="breed" placeholder="Breed" className="formField" /></label>
          <label className='label1'>Sex
            <select className="formField" ref="sex">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select></label>
     <div className='div2'>
          <label>Date Of Birth<input type="date" ref="dob"  className="formField" /></label>
          </div>
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
      
        <pre>
        <table>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Breed</th>
                        <th>Sex</th>
                        <th>Date Of Birth</th>
                    </tr>
                    </table>
          {datas.map((data, i) =>
            <li key={i} className="myList">
                    <table>
                    <tr>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.breed}</td>
                        <td>{data.sex}</td>
                        <td>{data.dob}</td>
                    
              <div className='bb'>
              <button onClick={()=>this.fRemove(i)} className="myListButton">Delete </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton1">Edit </button>
              </div>
              </tr>
              </table>
             
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default Animal;
