import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {books, searchedBooks, categories}from './reducer'


export const store = createStore(combineReducers({
    books,
    searchedBooks,
    categories
}), applyMiddleware(thunk))

store.subscribe(() => console.log('Current State is: ', store.getState()))
