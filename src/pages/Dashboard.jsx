import React from 'react';
import pic from '/home/basu/Downloads/Livestock/src/images/I1.jpg'
import '/home/basu/Downloads/Livestock/src/pages/Animal.css';
const Dashboard = () => {
    return (
        <div>
           <img src={pic} className='pic' alt=''/>
        </div>
    );
};

export default Dashboard;