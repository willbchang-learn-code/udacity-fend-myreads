import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Book from '../component/Book'
import * as action from '../redux/action'

const Search = () => {
    const dispatch = useDispatch()
    const {searchedBooks} = useSelector(state => state)

    let timeout = null
    const addOrEmptyBooks = event => {
        event.persist()
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            event.target.value !== ''
                ? dispatch(action.asyncAddSearchedBooks(event.target.value))
                : dispatch(action.deleteSearchedBooks())
        }, 1000)
    }


    return <main className="search-books">
        <nav className="search-books-bar">
            <Link to='/'>
                <button className="close-search">Back</button>
            </Link>
            <input className="search-books-input-wrapper"
                   onChange={addOrEmptyBooks}
                   type="text"
                   placeholder="Search by title or author"/>

        </nav>
        <section className="search-books-results">
            <ol className="books">{
                searchedBooks.map(book => <Book book={book} key={book.id + Date.now()}/>)
            }</ol>
        </section>
    </main>

}

export default Search
