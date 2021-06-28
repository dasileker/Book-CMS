import React from 'react';

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horor',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <div className='enter-group'>
      <input type='text' />
    </div>

    <div className='enter-group'>
      <select name='book-categories' id='categories'>
        {
          bookCategories.map(category => (
            <option key={`key-${category}`} value={category}>
              {category}
            </option>
          ))
        }
      </select>
    </div>
    <button type='button'>Submit</button>

  </form>
);

export default BooksForm;