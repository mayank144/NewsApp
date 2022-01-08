/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
export class NewsItem extends Component {
    render() {
        return (
            <>
                <div className="col-md-4 my-3">
                    <div className="rounded-3 border border-secondary">
                        <span className="position-relative top-0 start-50 translate-middle badge rounded-pill bg-success">
                            {this.props.e.source.name?this.props.e.source.name:"Unknown"}
                        </span>
                        <img src={this.props.e.urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.e.title}</h5>
                            <p className="card-text">{this.props.e.description} <a rel="noreferrer" href={this.props.e.url} target="_blank" style={{textDecorationLine:'none',color:'darkred'}}><b>...read more</b></a></p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">written by <b>{this.props.e.author ? this.props.e.author : "..."}</b> {this.props.e.publishedAt ? new Date(this.props.e.publishedAt).toGMTString() : "..."}</small>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
