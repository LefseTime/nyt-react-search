import React, { Component } from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";

class Search extends Component {
    state = {
        searchTerm: "",
        articles: [],
        title: "",
        url: "",
        date: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })

    //this needs to go to nyt api
    handleFormSubmit = event => {
        event.preventDefault();
            // buildQueryURL = () => {
                
            //     // const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&query=" + {this.state.searchTerm};
            //     const queryParams = { "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" };
                
            //     // Grab text the user typed into the search input, add to the queryParams object
            //     queryParams.q = {searchTerm : this.state.searchTerm};
              
            //     // Logging the URL so we have access to it for troubleshooting
            //     console.log("---------------\nURL: " + queryURL + "\n---------------");
            //     console.log(queryURL + $.param(queryParams));
            //     return queryURL + $.param(queryParams);
            //   }
            //   $.ajax({
            //     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?",
            //     method: "GET"
            //   }).then(
            //     //   res.response.docs[].web_url
            //     //   res.response.docs[].pub_date
            //     //   res.response.docs[].headline.main
            //   );
            // // API.saveArticle({
            // //     title: this.state.title,
            // //     url: this.state.url,
            // //     date: this.state.date
            // // })
            // //     .then(res => this.loadSaved())
            // //     .catch(err => console.log(err));
        
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

                {this.state.articles.length ? (
                    <div className="card">
                    <div className="card-header text-center">
                        Results
                    </div>
                    <div className="card-body">
                        
                    </div>
                </div>



                ) : (
                    <h1></h1>
                )}
            </div>
        )
    }
}

export default Search;