import React from 'react';
// eslint-disable-next-line no-unused-vars
import DisplayBooks from './DisplayBooks.js';
import axios from 'axios';
import AddForm from './AddForm.js';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      noBooks: false,
      showUpdateForm: false,
      show: false,
    };

  }

  componentDidMount() {
    this.getBooks();
  }

  showModal = () => {
    this.setState({
      show: true
    })
  }

  hideModal = () => {
    this.setState({
      show: false
    })


  }
  getBooks = async () => {
    try {
      // console.log(process.env.REACT_APP_SERVER)
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      // console.log(response.data)
      this.setState({ books: response.data });
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  postBooks = async (newBook) => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/books`
      const response = await axios.post(url, newBook);
      // console.log(response.data);
      this.setState({ books: [...this.state.books, response.data] })
    }
    catch (err) {
      console.error(err);
    }
  }

  deleteBooks = async (deletedBooks) => {
    
    console.log('book has been deleted')
    const url = `${process.env.REACT_APP_SERVER}/books/${deletedBooks._id}`
    await axios.delete(url);
    const updatedBooks = this.state.books.filter(book => book._id !== deletedBooks._id);
    this.setState({ books: updatedBooks });
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <div>
            <button onClick={this.showModal}>Add Book</button> 
            <br />
            <Carousel interval={null}>
              {this.state.books.map((book) => (
                <Carousel.Item  key={book._id}>
                  <img className= 'd-block w-100' style={{height: '500px' }} src ='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'alt={`${book.title}`}/>
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>Status: {book.status}</p>
                    <Button variant='primary' onClick={()=>this.deleteBooks(book)}>Delete Book</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ) : (
          <h3>Sorry, no books found</h3>
        )}
            <AddForm postBooks={this.postBooks} hideModal={this.hideModal}
             show={this.state.show}/>
      
      </>
    );
  }
}

export default BestBooks;

