import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Saved from "../Saved";
import Search from "../Search";

class Home extends Component {
    state = {
        
    };

    componentDidMount() {
        
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.url) {
            API.saveArticle({
                title: this.state.title,
                url: this.state.url,
                date: this.state.date
            })
                .then(res => this.loadSaved())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <header>
                    <h1 className="jumbotron text-center">It werkssss!!!!</h1>
                </header>
                <Search />
                <Saved />
            </div>
        )
    }

    // render() {
    //   return (
    //     <Container fluid>
    //       <Row>
    //         <Col size="md-6">
    //           <Jumbotron>
    //             <h1>What Books Should I Read?</h1>
    //           </Jumbotron>
    //           <form>
    //             <Input
    //               value={this.state.title}
    //               onChange={this.handleInputChange}
    //               name="title"
    //               placeholder="Title (required)"
    //             />
    //             <Input
    //               value={this.state.author}
    //               onChange={this.handleInputChange}
    //               name="author"
    //               placeholder="Author (required)"
    //             />
    //             <TextArea
    //               value={this.state.synopsis}
    //               onChange={this.handleInputChange}
    //               name="synopsis"
    //               placeholder="Synopsis (Optional)"
    //             />
    //             <FormBtn
    //               disabled={!(this.state.author && this.state.title)}
    //               onClick={this.handleFormSubmit}
    //             >
    //               Submit Book
    //             </FormBtn>
    //           </form>
    //         </Col>
    //         <Col size="md-6 sm-12">
    //           <Jumbotron>
    //             <h1>Books On My List</h1>
    //             <BookCount numBooks={this.state.books.length} />
    //           </Jumbotron>
    //           {this.state.books.length ? (
    //             <List>
    //               {this.state.books.map(book => (
    //                 <ListItem key={book._id}>
    //                   <Link to={"/books/" + book._id}>
    //                     <strong>
    //                       {book.title} by {book.author}
    //                     </strong>
    //                   </Link>
    //                   <DeleteBtn onClick={() => this.deleteBook(book._id)} />
    //                 </ListItem>
    //               ))}
    //             </List>
    //           ) : (
    //             <h3>No Results to Display</h3>
    //           )}
    //         </Col>
    //       </Row>
    //     </Container>
    //   );
    // }
}

export default Home;