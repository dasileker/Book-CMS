import { CREATE_BOOK, DELETE_BOOK } from "../action-type";

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const deleteBook = book => ({
  type: DELETE_BOOK,
  book,
});