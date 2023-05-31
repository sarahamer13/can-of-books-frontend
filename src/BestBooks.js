import React from 'react';
// eslint-disable-next-line no-unused-vars
import DisplayBooks from './DisplayBooks.js';
import axios from 'axios';
import AddForm from './AddForm.js';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import UpdateBook from './UpdateBook';
import MyImage from './images/pile-colorful-books-desktop (1).jpg'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      noBooks: false,
      showUpdateForm: false,
      show: false,
      selectedBook: null,
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
  updateBooks = async (bookToUpdate) => {
    const url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`
    await axios.put(url, bookToUpdate);
    const updatedBookArr = this.state.books.map(oldBook=> oldBook._id === bookToUpdate._id ? bookToUpdate : oldBook);
    this.setState({books: updatedBookArr})
}

   setBook = function (book) {
  this.setState({
    selectedBook: book,
    showUpdateForm: true,
  })
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
                  <img className= 'd-block w-100' style={{height: '500px' }} src ={MyImage}alt={`${book.title}`}/>
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>Status: {book.status}</p>
                    <Button className="reactButton" variant='warning' onClick={()=>this.deleteBooks(book)}>Delete Book</Button>
                    <Button className='reactButton' variant ="secondary" onClick={()=> this.setBook(book)}>Update Book</Button>
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

            {this.state.showUpdateForm && (
         <UpdateBook
          book={this.state.selectedBook}
          updateBooks={this.updateBooks}
        />
      )}
      
      </>
    );
  }
}

export default BestBooks;

