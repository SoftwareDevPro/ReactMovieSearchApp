
import React from 'react';
import './App.css';

import MovieSearch from "./components/MovieSearch";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <MovieSearch/>
    </div>
  );
}
