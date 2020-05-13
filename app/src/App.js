import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {store} from './reducers/reducer'
import {getBreeds} from './actions/getAllBreeds'
import Landing from './components/Landing'
import './App.css';

function App(props) {
  useEffect(()=>{props.getBreeds()},[])
  
  return (
      <div className='App'>

        
          {props.state.fetching ? 
          <div>
            <p>loading....</p>
          </div> :
          <BrowserRouter>
          
            <Route path='/'>
              <Landing/>
            </Route>

          </BrowserRouter>
          
          }

        

        

      </div>
    
  );
}
const MSTP = state=>{
  return {
    state:state

  }
}
export default connect(MSTP,{getBreeds})(App);
