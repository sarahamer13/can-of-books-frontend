import React from "react";
import { Form, Container, Button } from "react-bootstrap";

class AddForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            title: e.target.title.value,
            description: e.target.description.value,
            status: e.target.status.checked
        }
        this.props.postBooks(newBook);
    }
    render() {
        return (
            <>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Title Name</Form.Label>
                            <Form.Control type="text" placeholder="Title of book..." />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Book Description</Form.Label>
                            <Form.Control type="text" placeholder="Description of book..." />
                        </Form.Group>
                        <Form.Group controlId="status">
                            <Form.Check type="checkbox" label="Book is available" />
                        </Form.Group>

                        <Button type="submit">Add Book</Button>
                    </Form>
                </Container>
            </>
        )
    }
}

export default AddForm;