import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import Shelves from "./Shelves";
import Search from "./Search";
// import axios from 'axios';
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  // technically: add to, change or remove from a shelf
  moveBook = (targetBook, targetDestination) => { // eslint-disable-line
    BooksAPI.update(targetBook, targetDestination).then(response => { // eslint-disable-line

    })
  }

  render() {
    return(
      <div className="app">
        <Route exact path="/" render={() => <Shelves books={this.state.books} />} />

        <Route exact path="/search" render={() => <Search />} />
      </div>
    )
  }
}

export default BooksApp
