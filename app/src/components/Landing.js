import React from 'react'
import {connect} from 'react-redux'
import Breed from './Breed'
import styled from 'styled-components'

const Div = styled.div `
    display:flex;
    justify-content:space-between;
    /* flex-direction:column; */
    margin:0 auto;

    background:black;
    color:white;
    flex-wrap:wrap;
    width:80%;
   

`


 function Landing(props) {
    return (
        <Div>
            {props.breeds ? Object.keys(props.breeds).map(item=>{
                return <Breed className='breed' item ={item}/>
            }) : <p>loading ....</p>}
        </Div>
    )
}
const MSTP = state=>{
    return {
      breeds:state.breeds[0]
  
    }
  }
  export default connect(MSTP,)(Landing);
  