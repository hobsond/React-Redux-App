import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {BrowserRouter,Route,Switch,} from 'react-router-dom'
import {store} from './reducers/reducer'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import {getBreeds} from './actions/getAllBreeds'
import Landing from './components/Landing'
import Nav from './components/Nav'
import './App.css';
import Home from './components/Home';
import BreedProfile from './components/BreedProfile'

const override = css`
  display: block;
  
  margin: 10% auto 0 auto;
  border-color: lightcoral;
`;
 

function App(props) {
  useEffect(()=>{props.getBreeds()},[])
  
  return (
      <div className='App'>
       < ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={props.state.fetching}
          />

        
          {props.state.fetching ? 
          <div>
            <p>loading .</p>
       
          </div> :
          <BrowserRouter>
          <Nav />
            <Route path='/:id/profile'>
              <BreedProfile />
            </Route>

            <Route path='/allbreeds'>
              <Landing/>
            </Route>
            <Route exact path='/'>
              <Home/>
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
