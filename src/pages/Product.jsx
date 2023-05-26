import React, { useState } from 'react';

const Product = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log('Form submitted');
  };

  return (
    <div>
      <h1>Simple Form Application</h1>
      {!showForm && (
        <button onClick={handleButtonClick}>Show Form</button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Product;
