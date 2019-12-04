import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { BookEditComponent } from '../books/book-edit/book-edit.component';
import { BookDetailComponent } from '../books/book-detail/book-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BooksComponent, children: [
    {path: '', redirectTo: '/books', pathMatch: 'full'},
    {path: 'new', component:BookEditComponent},
    {path: ':id', component: BookDetailComponent},
    {path: ':id/edit', component:BookEditComponent}
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
