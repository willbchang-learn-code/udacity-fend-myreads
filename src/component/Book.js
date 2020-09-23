import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as action from '../redux/action'

const Book = ({book}) =>
    <li id={book.id} className='book'>
        <figure>
            <img className='cover'
                 src={book.imageLinks.thumbnail}
                 alt={book.title}
            />
            <CategorySelector shelf={book.shelf}/>
            <figcaption className='name'>{book.title}</figcaption>
            <figcaption className='author'>{book.authors.join(', ')}</figcaption>
        </figure>
    </li>

const CategorySelector = ({shelf}) => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state)

    const changeBookShelf = event =>
        dispatch(action.asyncChangeBookshelf(event))

    return <select onChange={changeBookShelf}
                   value={shelf}
                   className='category-selector'>
        <option value="move" disabled>Move to...</option>
        {
            Object.entries(categories).map(([status, category]) =>
                <option value={status} key={status}>{category}</option>
            )
        }
    </select>
}

export default Book
