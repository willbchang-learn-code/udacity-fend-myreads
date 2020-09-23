import React, {useEffect} from 'react'
import Book from './Book'
import {useDispatch, useSelector} from 'react-redux'
import * as action from '../redux/action'


const Library = () => {
    const {books, categories} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(action.asyncAddBooks())
    }, [dispatch])


    return <main>{Object.entries(categories).map(([shelf, category]) =>
        shelf !== 'none' &&
        <BookShelf
            books={books}
            shelf={shelf}
            category={category}
            key={shelf}
        />
    )}</main>
}

const BookShelf = ({category, books, shelf}) =>
    <section className="bookshelf">
        <h2 className='category'>{category}</h2>
        <ol className="books">{
            books.map(book =>
                book.shelf === shelf && <Book key={book.id} book={book}/>
            )}
        </ol>
    </section>


export default Library
