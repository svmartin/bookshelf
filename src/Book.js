import React from "react";

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage:
                'url("https://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
              }}
            />
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>
                  Move to...
                                  </option>
                <option value="currentlyReading">
                  Currently Reading
                                  </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">Enders Game</div>
          <div className="book-authors">Orson Scott Card</div>
        </div>
      </li>
    )
  }
}

export default Book