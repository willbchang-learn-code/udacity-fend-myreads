import React from 'react'
import {Link} from 'react-router-dom'
import Library from '../component/Library'

const Home = () =>
    <>
        <header><h1>MyReads</h1></header>
        <Library/>
        <Link className="create-book" to='/search'>
            <button>Add a book</button>
        </Link>
    </>


export default Home
