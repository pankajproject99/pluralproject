import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz.js';
import reportWebVitals from './reportWebVitals';
import { shuffle, sample } from 'underscore';

const authors = [
  {
    name: 'Mark Twin',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'The Adventures of Huckleberry Finn',
      'Life on the Mississipi',
      'Roughing on old'  ]
  },
  {
  name: 'Joseph Conrad',
  imageUrl: 'images/authors/josephconrad.png',
  imageSource: 'Wikimedia Commons',
  books: ['Hear of Darskness',
    'Roughing on Joseph'  ]
  },
  {
  name: 'J.K Rowliing',
  imageUrl: 'images/authors/jkrowling.jpg',
  imageSource: 'Wikimedia Commons',
  books: ['Harry Potter',
    'Roughing on Rowling'  ]
  },
  {
  name: 'Charles Dicken',
  imageUrl: 'images/authors/charlesdickens.jpg',
  imageSource: 'Wikimedia Commons',
  books: ['Harry Charles',
    'Roughing on Charles'  ]
  }
];

function getTurnData(authors){
  const allBooks = authors.reduce(function(p, c, i){
    return p.concat(c.books);
  },[]);
  const fourRandomeBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomeBooks);

  return {
    books: fourRandomeBooks,
    author: authors.find((author) => 
        author.books.some((title) => 
          title === answer))
  }
}


const state = {
  turnData: getTurnData(authors)
};

ReactDOM.render(<AuthorQuiz {...state} />
  , document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
