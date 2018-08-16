import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Search extends Component {
    state = {
        searchTerm: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    //this needs to go to nyt api
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm) {
            // API.saveArticle({
            //     title: this.state.title,
            //     url: this.state.url,
            //     date: this.state.date
            // })
            //     .then(res => this.loadSaved())
            //     .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        Search
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Search terms:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                                    value={this.state.searchTerm}
                                    onChange={this.handleInputChange}
                                    name="searchTerm"
                                    placeholder="Search terms (required)">
                                </textarea>
                            </div>
                            {/* <div className="form-group">
                                <label for="exampleFormControlSelect1">Example select</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div> */}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;