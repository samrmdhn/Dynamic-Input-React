import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [totalField, setTotalField] = useState(1);
  const [fieldData, setFieldData] = useState([{ name: "", age: "" }]);

  const handleTotal = () => {
    updateField();
  };

  const updateField = () => {
    let cloneFieldData = [];

    for (let i = 0; i < totalField; i++) {
      cloneFieldData.push({ name: "", age: "" });
    }

    setFieldData(cloneFieldData);
  };

  const handleName = (e, index) => {
    const cloneFieldData = [...fieldData];
    cloneFieldData[index].name = e.target.value;
    setFieldData(cloneFieldData);
  };

  const handleAge = (e, index) => {
    const cloneFieldData = [...fieldData];
    cloneFieldData[index].age = e.target.value;
    setFieldData(cloneFieldData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fieldData);
  };

  return (
    <div className="App">
      <div>Total Input</div>
      <input type="text" onChange={(e) => setTotalField(e.target.value)} />
      <button onClick={handleTotal}>Save</button>

      <form onSubmit={handleSubmit}>
        {fieldData.map((field, index) => {
          return (
            <div>
              <div>
                <div style={{ textAlign: "left" }}>Person {index + 1}</div>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => handleName(e, index)}
                />
                <input
                  type="text"
                  placeholder="Age"
                  onChange={(e) => handleAge(e, index)}
                />
              </div>
            </div>
          );
        })}

        <button type="submit">Submit</button>
      </form>

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
