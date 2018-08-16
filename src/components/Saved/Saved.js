import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Saved extends Component {
    state = {
        articles: [],
        title: "",
        author: "",
        synopsis: ""
    };

    componentDidMount() {
        this.loadSaved();
    }

    loadSaved = () => {
        API.getArticles()
            .then(res =>
                this.setState({ articles: res.data, title: "", url: "", date: "" })
            )
            .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadSaved())
            .catch(err => console.log(err));
    };


    render() {
        return (
            <header>
                <h2 className="jumbotron text-center">This is the saved thingy.</h2>
            </header>
        );
    }
}

export default Saved;