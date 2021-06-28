import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => {
  <table>
    <tr>
      <th>BookID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
  </table>
}