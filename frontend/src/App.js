import Admin from "./components/admin";
import Student from "./components/student";
import FacultyTest from "./components/FacultyTest";
import Results from "./components/results";
import TextGenerator from "./components/Textgenerator";
import ResultDownload from "./components/ResultDownload";
import Test from "./components/test";
import Room from "./components/room";
import Home from "./components/home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/forgotpassword";
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App(){
  return(
  <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/room' element={<Room/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/forgotpassword' element={<ForgotPassword/>} />
      <Route path='/create-room' element={<Admin/>} />
      <Route path='/student' element={<Student/>} />
      <Route path='/Faculttest' element={<FacultyTest/>}/>
      <Route path='/Results' element={<Results/>}/>
      <Route path='/selftest' element={<TextGenerator/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='Results-Download' element={<ResultDownload/>}/>
    </Routes>
  </Router>
  );
}
export default App;