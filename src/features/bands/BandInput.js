import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");
 
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onBandSubmit(name)
    setName("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' name='name' value={name} onChange={handleChange}/>
          <input value='add band' type='submit'/>
        </label>
      </form>
    </div>
  );
}

export default BandInput;
