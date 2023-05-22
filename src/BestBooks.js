import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DisplayBooks from './DisplayBooks.js';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      noBooks: false
    };

    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  async getBooks() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      // console.log(this.state.books)
      console.log (response.data)
      this.setState({ books: response.data });
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <DisplayBooks
                  title={book.title}
                  description={book.description}
                  status={book.status}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>Sorry, no books found</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
