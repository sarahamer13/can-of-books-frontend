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

  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    try {
      console.log(process.env.REACT_APP_SERVER)
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      console.log(response.data)
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
          <Carousel style={{ height: '400px' }} >
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <p>Status: {book.status}</p>
                </div>
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
