import React, { Component } from 'react';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className = "book-shop container">
      <p className = "book-shop-title">Book Shop </p>
      <div className = "row">
      <div clasName = "col-xs-12 col-md-4">
      <BookList />
      </div>
      <div clasName = "col-xs-12 col-md-8">
      <BookDetail />
      </div> 
       </div>
         
      </div>
    );
  }
}
