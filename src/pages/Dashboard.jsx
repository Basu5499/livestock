import React from 'react';
import './Dashboard.css'
import pic from '/home/basu/Downloads/Livestock/src/images/i1.jpg'

const Dashboard = () => {
    return (
        <>
           <form>
  <button className='b1'>Search</button>
  <input type='text'  placeholder='Search' className='search'/>
 
</form>
    <img src={pic} alt='' className='pic'/>
        </>
    );
};

export default Dashboard;