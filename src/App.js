import React from "react";
import { Main } from "./Components/Main";
import {Routes, Route} from 'react-router-dom'
import { Disnep } from "./Components/Disnep";

import "./Components/style.css";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/:_id' element={<Disnep/>}/>
    </Routes>
    </>
  );
}

export default App;
