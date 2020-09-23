import {ADD_BOOKS, ADD_SEARCHED_BOOKS, CHANGE_BOOKSHELF, DELETE_SEARCHED_BOOKS} from './action'
import placeholderImage from '../icons/placeholder128x193.png'
import * as data from './data'

const fillProperty = book => ({
    ...book,
    imageLinks: {thumbnail: book.imageLinks?.thumbnail || placeholderImage},
    authors: book.authors || ['Unknown'],
    shelf: book.shelf || 'none'
})

export const books = (state = [], action) => {
    switch (action.type) {
        case CHANGE_BOOKSHELF:
            return state.map(book =>
                book.id === action.id ? {...book, shelf: action.shelf} : book
            )
        case ADD_BOOKS:
            return action.books.map(book => fillProperty(book))
        default:
            return state
    }
}

export const searchedBooks = (state = [], action) => {
    switch (action.type) {
        case DELETE_SEARCHED_BOOKS:
            return []
        case ADD_SEARCHED_BOOKS:
            return action.searchedBooks.map(book => fillProperty(book))
        default:
            return state
    }
}

export const categories = () => data.categories
