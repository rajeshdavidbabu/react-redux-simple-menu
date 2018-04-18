import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';
import './book_list.css';

class BookList extends Component {
    renderList () {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick= {() => {this.props.selectBook(book)}}
                >{book.title}</li>
            );    
        });
    }

    render () {
        return (
            <div>
            <div className = "book-list-holder col-xs-12 col-md-4">
            
            <div className = "book-list">
            <div className = "book-list-title">Book List</div>
            <ul>
                {this.renderList()}
            </ul>
           </div>
           </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    // Whats is returned from here is returned as props for this book list component
    return {
        books: state.books
    }
}

// Whatever is returned from here appears inside props of the book list
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called then we need to dispatch the results to all the reducers in the application
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)