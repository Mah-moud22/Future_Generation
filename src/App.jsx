// @ts-nocheck
import React from 'react'
import Students from './students/Students';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Courses from './courses/Courses';
import StuedntDetails from './students/Details';
import CourseDetails from './courses/Details';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students'>
          <Route index element={<Students />} />
          <Route path=':std_id' element={<StuedntDetails />} /> 
        </Route>
        <Route path='/courses'>
          <Route index element={<Courses />} />
          <Route path=':course_Name' element={<CourseDetails />} />
        </Route>
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
