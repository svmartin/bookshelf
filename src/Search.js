import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
    }
  }


  updateQuery = (query) => {// eslint-disable-line
    this.setState(
      { query: query }
    );

    if (query) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          console.log("what went wrong: ", books.error)
        }
        this.setState({ results: books })
      })
    } else {
      this.setState({ results: [] })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input

            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          { this.state.results.length > 0 && (
            <ol className="books-grid">

              {/* map over search results here */}
              {this.state.results.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                        }}
                      />
                    </div>
                    <div className="book-title">{book.title}</div>
                  </div>
                </li>
              ))}

            </ol>
          )} {/**/}
          { this.state.results === 0 && (
            <h1>0 results returned.</h1>
          )}
        </div>
      </div>
    )
  }
}

export default Search