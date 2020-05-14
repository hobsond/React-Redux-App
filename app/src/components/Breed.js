import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Link }from 'react-router-dom'
import BreedProfile from './BreedProfile'
const BreedComp = styled.div `
    padding:5%;
    font-size:1.6rem;
    margin:6% 2%;
    background:teal;
    width:60%
    h5{
        text-transform: uppercase;
    }
    img{
        display:none;
        max-width: 80%;
        object-fit:contain;
        width:70%;
        height:60%;

    };

    &:hover img{
        display:block;
    }
`


export default function Breed(props) {
    const [image,setImage]=useState('')
    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breed/${props.item}/images` )
        .then((res)=>{
            setTimeout(()=>{
                setImage(res.data.message[0])
            },500)
            console.log(image)
        })

    },[])
    return (
        <BreedComp>
            <h5>{props.item} </h5>
            {!image && <p>loading..</p>}
            <Link component={<BreedProfile item={props.item} img={image}  />} to={`/${props.item}/profile`} >See Photos</Link>
            {/* <img src={image} /> */}
            
        </BreedComp>
    )
}
