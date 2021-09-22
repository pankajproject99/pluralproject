import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz.js';
import reportWebVitals from './reportWebVitals';

const authors = [
  {
    name: 'Mark Twin',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  }
];

const state = {
  turnData: {
    author: authors[0],
    books: authors[0].books
  }
};

ReactDOM.render(<AuthorQuiz {...state} />
  , document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
