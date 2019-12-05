import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book [] = [
    new Book("Pyhton for Dummies", "Learn to code python", "url"),
    new Book("SQL", "Queries for your database", "url"),
  ];

  constructor() { }

  AddBook(book: Book)
  {
    this.books.push(book);
  }

  DeleteBook(book: Book)
  {
    this.books.pop();
  }

  GetBooks()
  {
    return this.books.slice();
  }

  GetBook(name: string)
  {
    return this.books[name];
  } 
}
