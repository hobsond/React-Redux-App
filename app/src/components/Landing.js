import React from 'react'
import {connect} from 'react-redux'
import Breed from './Breed'


 function Landing(props) {
    return (
        <div>
            {props.breeds && Object.keys(props.breeds).map(item=>{
                return <Breed item ={item}/>
            })}
        </div>
    )
}
const MSTP = state=>{
    return {
      breeds:state.breeds[0]
  
    }
  }
  export default connect(MSTP,)(Landing);
  