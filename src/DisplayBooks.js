import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class DisplayBooks extends React.Component {

  render() {
    return (
      <>
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>{this.props.status}</p>
        </Carousel.Caption>
      </>
    )
  }
}


export default DisplayBooks;