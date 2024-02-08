import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment} from "@fortawesome/free-regular-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" id="card" style={{width: "18rem",height:"26rem"}}>
          <img src={imageUrl?imageUrl:"https://media.istockphoto.com/id/1387606902/vector/latest-news-label-with-megaphone-breaking-news-announce-loudspeaker-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=3u2wix939RRD52zitMt5WcWQJvL_HRyDrR4Pyryz0h4="  }style={{height:"10rem"}} alt={title} />
          <div className="card-body" style={{height:"12rem"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary my-3">
                Read More...
            </a>
            <div className="container d-flex justify-content-around">
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faShareFromSquare} />
            </div>
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default NewsItem;
