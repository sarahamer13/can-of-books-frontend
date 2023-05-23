import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DisplayBooks from './DisplayBooks.js';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount() {
    this.getBooks();
  }

  async getBooks() {
    try {
      const response = await axios.get('http://localhost:3001/getBooks');
      this.setState({ books: response.data })
    } catch (err) {
      console.error(err);
    }
  }
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 && this.state.books.map((books, idx) => (
          <h1>Book Carousel coming soon</h1>
          
        ))}
      </>
    )
  }
}

export default BestBooks;
