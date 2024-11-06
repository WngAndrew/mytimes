// /src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './global_components/NavBar';
import HomePage from './global_components/HomePage';
import Wordle from './wordle/components/Wordle';
import Crossword from './crossword/components/Crossword';
import Connections from './connections/src/components/App/Connections.js';
import Sudoku from './sudoku/components/Sudoku.js'
import Present from './present/Present'
import './App.css';

function App() {
  return (
    <Router>
      <NavBar /> 
      {/* Routes*/}
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/crossword" element={<Crossword />} />
        <Route path="/connections" element={ <Connections />}/>
        <Route path="/sudoku" element={<Sudoku />}/>
        <Route path="/present" element={<Present /> }/>
      </Routes>
    </Router>
  );
}

export default App;
