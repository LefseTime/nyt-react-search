import React, { Component } from "react";
import API from "../../utils/API";
//import { Link } from "react-router-dom";

class Saved extends Component {
    state = {
        articles: [],
        title: "",
        url: "",
        date: ""
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
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        Saved
                    </div>
                    <div className="card-body">
                        <div className="card">
                            {this.state.articles.length ? (
                                <ul className="list-group list-group-flush">
                                    {this.state.articles.map(article => (
                                        <li className="list-group-item" key={article._id}>
                                                <a href={article.url} target="_blank">
                                                    Title: {article.title}
                                                </a>
                                            <span className="float-right text-danger" onClick={() => this.deleteArticle(article._id)}>
                                                x
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                    <p className="text-center">No Results to Display</p>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;