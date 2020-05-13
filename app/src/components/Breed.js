import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'


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
        <div>
            <h5>{props.item} </h5>
            {!image && <p>loading..</p>}
            <img src={image} />
            
        </div>
    )
}
