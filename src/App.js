import React, { Component } from 'react'
import { Navbar } from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = {
      y:true,
      progress:10
    }
  }
  changeProgress=(progress)=>{
    this.setState({ progress:progress})
  }
  newsapi=process.env.REACT_APP_NEWS_API
  submit(x) {
    console.log(x+this.state.y)
    this.setState({
      y:false
    })
    console.log(x+this.state.y)
  }
  render() {
    return (
      <>
        <Router>
        <LoadingBar
        color='yellow'
        progress={this.state.progress}
        onLoaderFinished={() => this.setState({Progress:0})}
      />
          <Navbar submit={this.submit} />
          <Routes>
            <Route exact path="/" element={<News changeProgress={this.changeProgress} newsapi={this.newsapi} key={"general"} category={"general"} />} />
            <Route exact path="/business" element={<News changeProgress={this.changeProgress} newsapi={this.newsapi} key={"business"} category={"business"} />} />
            <Route exact path="/entertainment" element={<News changeProgress={this.changeProgress} newsapi={this.newsapi} key={"entertainment"} category={"entertainment"} />} />
            <Route exact path="/general" element={<News changeProgress={this.changeProgress} newsapi={this.newsapi} key={"general"} category={"general"} />} />
            <Route exact path="/health" element={<News changeProgress={this.changeProgress} newsapi={this.newsapi} key={"health"} category={"health"} />} />
            <Route exact path="/science" element={<News changeProgress={this.changeProgress} newsapi={this.newsapi} key={"science"} category={"science"} />} />
            <Route exact path="/sports" element={<News changeProgress={this.changeProgress} newsapi={this.newsapi} key={"sports"} category={"sports"} />} />
            <Route exact path="/technology" element={<News changeProgress={this.changeProgress} newsapi={this.newsapi} key={"technology"} category={"technology"} />} />
          </Routes>
        </Router>
      </>
    )
  }
}
