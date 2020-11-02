import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
export default function Header(props) {
    return (
        <div className='header'>
            <h1>Hello {props.name}</h1>
            <Link to='/logout'>Logout</Link>
        </div>
    )
}
