import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './style.css'

class News extends Component {
    state = {
        dataState: [],
    }
    componentDidMount() {
        fetch(this.props.fetch)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ dataState: data.articles })
            });
        console.log(this.state.dataState);
    }



    render() {
        const mapArray = this.state.dataState.map((el, i) => {
            return <NewsItem title={el.title} urlToImage={el.urlToImage} description={el.description} author={el.author} url={el.url} />
        })
        return (
            <section className="news-sec" >
                {mapArray}
                {/* <button onClick={this.fetchData} ></button> */}
            </section>
        );
    }
}

export default News;