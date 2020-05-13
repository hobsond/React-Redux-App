import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {store} from './reducers/reducer'
import {getBreeds} from './actions/getAllBreeds'
import './App.css';

function App() {
  
  return (
      <div className='App'>
        <button onClick={getBreeds}>breeds</button>

      </div>
    
  );
}
const MSTP = state=>{
  return {
    breed:state
  }
}
export default connect(MSTP,{getBreeds})(App);
