import React, { Component } from 'react';
import './style.css'


class NewsItem extends Component {
    state = {}
    render() {
        return (
            <div className="item-div" >
                <img src={this.props.urlToImage} ></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <div>
                    <span>{this.props.author}</span>
                </div>
                <a href={this.props.url} ></a>
            </div>
        );
    }
}

export default NewsItem;