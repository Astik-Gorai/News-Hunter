import React, { Component } from 'react'
import './NewsItem.css';

export class NewsItem extends Component {
  render() {
    let { title,descriptiion,imageUrl,url}=this.props;
    
    return (
      <div className="card">
        <img src={imageUrl} alt=""/>
        <div className="container">
            <h4><b>{title}</b></h4>
            <h6>{descriptiion}</h6>
            {/* <button onClick={redirect}>Read Now</button> */}
            <a className="abc" href={url} target="_blank">Read More</a>
            
        </div>
        
        </div>
    )
  }
}

export default NewsItem
