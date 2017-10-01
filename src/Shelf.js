import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


class Shelf extends React.Component {

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.section}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf

Shelf.propTypes = {
  section: PropTypes.string.isRequired
}
