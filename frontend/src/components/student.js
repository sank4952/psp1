import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './student.css'; 
function Student() {
    const [code, setCode] = useState();
    const [rollNo, setRollNo] = useState('');
    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            console.log(rollNo);
            const response = await axios.post('http://localhost:5000/auth', { code, rollNo });
            if (response.status === 200) {
                navigate('/FacultTest', { state: { rollno:rollNo, code, topic: response.data.topic, maxque: response.data.maxque } });
            } else if (response.status === 201) {
                console.log("Student exists");
            }
        } catch (error) {
            console.error('Error:', error.response.data);
        }
    }
    return (
        <div className="student-container6">
            <center><label><h1 className="okay">Student Details </h1></label><br/></center>
            
            
            <label>Enter Roll Number  </label>
            <input type="text" onChange={(e) => setRollNo(e.target.value)} placeholder="Roll Number"/><br/>
            <label>Enter the code  </label>
            <input type="text" onChange={(e) => setCode(e.target.value)} placeholder="Room Code"/><br/>
            <button onClick={handleClick}>Enter Test</button>
        </div>
    )
}
export default Student;
