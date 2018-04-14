import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList () {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                className="list-group-item"
                onClick= {() => {this.props.selectBook(book)}}
                >{book.title}</li>
            );    
        });
    }

    render () {
        return (
            <ul class="list-group col-sm-4">
                {this.renderList()}
            </ul>
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