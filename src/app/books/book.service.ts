import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: string [] = [];

  constructor() { }

  AddBook(book: Book)
  {

  }

  DeleteBook(book: Book)
  {

  }

  GetBooks()
  {

  }

  GetBook(name: string)
  {

  }
}
