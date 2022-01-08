import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'

export class News extends Component {
    constructor() {
        super()
        this.state = {
            article: [],
            page:1,
            hasMore:true
        }
    }
    capitalise(a)
    {
        return a[0].toUpperCase()+a.slice(1)
    }
    componentDidMount = async () => {
        this.props.changeProgress(10)
        let url = 'https://newsapi.org/v2/top-headlines?category='+this.props.category+'&country=in&apiKey='+this.props.newsapi+'&pagesize=10&page='+this.state.page
        let x = await fetch(url)
        this.props.changeProgress(40)
        let data = await x.json()
        this.props.changeProgress(70)
        await this.setState({
            article: [...this.state.article,...data.articles],
            hasMore:Math.ceil(data.totalResults/10)>this.state.page,
            page:this.state.page+1
        })
        document.title="News - "+this.capitalise(this.props.category)
        this.props.changeProgress(100)
    }
    render() {
        return (
            <div className="container my-3">
                <div>
                    <InfiniteScroll className="row"
                        dataLength={this.state.article.length}
                        next={this.componentDidMount}
                        hasMore={this.state.hasMore}
                        loader={<h4><Spinner/></h4>}
                        endMessage={
                            <b className='container text-success'><i>Yay! You have seen it all</i></b>
                        }
                    >
                        {this.state.article.map((e) => {
                            return (e.urlToImage && e.title && e.description ? <NewsItem e={e} key={e.url} /> : "")
                        })}
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default News
