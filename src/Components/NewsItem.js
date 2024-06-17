import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "20rem" }}>
          <img src={!imgurl?"https://www.livemint.com/lm-img/img/2024/01/15/1600x900/ANI-20240115159-0_1705324707133_1705324719050.jpg":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
