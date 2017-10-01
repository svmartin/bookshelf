import React from "react";
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'

class Book extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")"
              }}
            />
            <ChangeShelf />
          </div>
          <div className="book-title">{this.props.book.title}</div>
        </div>
      </li>
    )
  }
}

Book.PropTypes = {
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired
}

export default Book
