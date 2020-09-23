import * as API from '../BooksAPI'

export const CHANGE_BOOKSHELF = 'CHANGE_BOOK_SHELF'
export const ADD_SEARCHED_BOOKS = 'ADD_SEARCHED_BOOKS'
export const DELETE_SEARCHED_BOOKS = 'DELETE_SEARCHED_BOOKS'
export const ADD_BOOKS = 'ADD_BOOKS'


export const addBooks = books => ({
    type: ADD_BOOKS,
    books,
})

export const asyncAddBooks = () => dispatch => {
    API.getAll().then(books => dispatch(addBooks(books)))
}

export const changeBookshelf = (id, shelf) => ({
    type: CHANGE_BOOKSHELF,
    id,
    shelf,
})

export const asyncChangeBookshelf = event => dispatch => {
    const id = event.target.parentNode.parentNode.id
    const shelf = event.target.value
    dispatch(changeBookshelf(id, shelf))
    API.update(id, shelf)
        .catch(() => dispatch(changeBookshelf(id, shelf)))
}

export const addSearchedBooks = searchedBooks => ({
    type: ADD_SEARCHED_BOOKS,
    searchedBooks,
})

export const asyncAddSearchedBooks = keyword => async dispatch => {
    const searchedBooks = await API.search(keyword)
    const bookshelf = await API.getAll()

    if (searchedBooks.error) return alert(searchedBooks.error)

    dispatch(addSearchedBooks(searchedBooks.map(book =>
        bookshelf.find(aBook => book.id === aBook.id) || book
    )))
}

export const deleteSearchedBooks = () => ({
    type: DELETE_SEARCHED_BOOKS,
})
