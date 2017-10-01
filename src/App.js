import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import Shelves from "./Shelves";
import Search from "./Search";
// import axios from 'axios';
import "./App.css";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
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
