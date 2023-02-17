
import React, {useState} from "react";
import {Text} from "./text";



export const Input =({type, value,onChange, name })=>{
 
    const [px, setPX] = useState("");
    const [rem, setREM] = useState("");
  
    const calculatePX = (rem) => {
      return (rem / 16).toFixed(3);
    };
  
    const calculateREM = (px) => {
      return (px * 16).toFixed(3);
    };
  
    const handlePXChange = (e) => {
      let newValue = calculatePX(e.target.value);
      setPX(e.target.value);
      setREM(newValue);
    };
  
    const handleREMChange = (e) => {
      setREM(e.target.value);
      let newValue = calculateREM(e.target.value);
      setPX(newValue);
    };
  
    const flex = (alignItems, justifyContent, flexDirection) => {
        return { display: "flex", alignItems, justifyContent, flexDirection };
      };
    
    const inputStyle = {
        width: "350px",
        padding: "4px 20px",
        border: "1px solid #a2a1a1",
        outline: 0,
        height: "60px",
        fontSize: "1.5rem",
      };
    
      
return(
    <section
        style={{
          ...flex("center", "center", "column"),
          height: "83vh",
          padding: " 0 16px",
        }}
      >
        <Text type="h1"  style={{ padding: "0 0 20px 0" }}>PX to REM converter</Text>
        <section style={{ ...flex("center", "space-between"), width: "50%" }}>
          <div>
          <Text type="p">Pixels</Text>
            <input
              type="number"
              style={inputStyle}
              value={px}
              onChange={handlePXChange}
            />
          </div>
          <div>
          <Text type="p">REM</Text>
            <input
              type="number"
              style={inputStyle}
              value={rem}
              onChange={handleREMChange}
            />
          </div>
        </section>
        <Text > Calculation based on a root font-size of 16 pixel.</Text>
      
      </section>

);
};

