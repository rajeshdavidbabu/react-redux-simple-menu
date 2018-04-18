import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './book_detail.css';

class BookDetail extends Component {
    render () {
        
        if(!this.props.activeBook) {
            
           return (
                <div className ="book-detail-holder col-xs-12 col-md-8">
                <div className = "book-detail">
                <p className = "book-detail-title">Book Details</p>
                <div className = "book-detail-content">Select a Book </div>
                </div>
               </div>
            )
        }
        return (
             <div className ="book-detail-holder col-xs-12 col-md-8">
              <div className = "book-detail">
                <p className = "book-detail-title">Book Details</p>
                <p className = "book-detail-content"><strong>Title: </strong>
                {this.props.activeBook.title}</p>
                <p className = "book-detail-content"><strong>Author: </strong> {this.props.activeBook.author}</p>
                <p className = "book-detail-content"><strong>Publisher:</strong>{this.props.activeBook.publisher}</p>
             </div>
             </div>
        );
       
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    }
}

export default connect (mapStateToProps)(BookDetail)
