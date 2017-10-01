import React from 'react'
import PropTypes from 'prop-types'


class Shelf extends React.Component {

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.section}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 188,
                      backgroundImage:
                      'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
                    }}
                  />
                  <ChangeShelf />
                </div>
                <div className="book-title">Enders Game</div>
                <div className="book-authors">Orson Scott Card</div>
              </div>
            </li>
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
