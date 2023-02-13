import React, { useState } from "react";
import axios from 'axios';

const Formpage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Name: ${name} Age: ${age}`);
    const saveData = async (name, age) => {
        try {
          const response = await axios.post("http://15.207.19.45:3000/save-data", {
            name,
            age
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      
      saveData(name,age);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={event => setAge(event.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Formpage;
