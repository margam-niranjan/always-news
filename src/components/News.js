import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-05&to=2024-02-05&sortBy=popularity&apiKey=2a7100da321349d78b7846cafe930ee2&page=1&pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles})

  }

   handleNextClick=async()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    } 
    else{
        let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-05&to=2024-02-05&sortBy=popularity&apiKey=2a7100da321349d78b7846cafe930ee2&page=${this.state.page+1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles})
        this.setState({
            totalResults :parsedData.totalResults,
            page:this.state.page+1,
        })
    }
}
   handlePrevClick=async()=>{
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-05&to=2024-02-05&country=in&sortBy=popularity&apiKey=2a7100da321349d78b7846cafe930ee2&page=${this.state.page-1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles})
    this.setState({
        totalResults :parsedData.totalResults,
        page:this.state.page-1,
    })
  }


  render() {
    return (
      <div className="container my-3">
        <h2>AlwaysNews - Top Headlines
        </h2>
        
        <div className="row">
        {this.state.articles && this.state.articles.map((element)=>{
             return <div className="col-md-3" key={element.url}>
             <NewsItem
               title={element.title&&(element.title.length>18)?(element.title.slice(0,18)+"..."):element.title}
               description={element.description&&(element.description.length>88)?(element.description.slice(0,88)+"..."):element.description}
               imageUrl={element.urlToImage}
               newsUrl={element.url}
             />
           </div>

        })}
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-lg btn-dark "  onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-lg btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
         
        </div>
      </div>
    );
  }
}

export default News;
