import React from 'react';
import BookForm from '../container/BookForm';
import BookList from '../container/BookList';
import Header from './Header';
import './App.css';

const App = () => (
  <div className="Bookstore-CMS">
    <div className="page-container">
      <Header />
      <div className="content-container">
        <BookList />
        <BookForm />
      </div>
    </div>
  </div>
);

export default App;
