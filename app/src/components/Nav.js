import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavComp = styled.nav `
    background:lightblue;
    display:flex;
    /* justify-content:space-between; */
    padding:1%;
    width:60%;
    margin:0 auto;

    .link{
        text-decoration:none;
        color:white;
        padding:1.2%;
        margin: 0 4% 0 0;
        transition:all ease-in .7;
        &:hover{
            color:yellow;
        }

    }

`

export default function Nav() {
    return (
        <NavComp>
            <Link className='link' to='/allbreeds'>
                All Breeds
            </Link>

            <Link className='link' to='/'>
                Home
            </Link>
            
        </NavComp>
    )
}
