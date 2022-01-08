import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    constructor() {
        super()
        let x = window.location.pathname === "/" ? "Top Headlines" : window.location.pathname.split('/')[window.location.pathname.split('/').length-1];
        this.submit = this.submit.bind(this);
        this.state = {
            ChangeTheNewsHeading: x,
            desc:""
        }
    }
    submit(e)
    {
        e.preventDefault();
        this.props.submit("Hello")
    }
    render() {
        return (
            <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={() => { this.setState({ ChangeTheNewsHeading: "Top Headlines" }) }}>News - {this.state.ChangeTheNewsHeading}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Business" onClick={() => { this.setState({ ChangeTheNewsHeading: "Business" }) }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Entertainment" onClick={() => { this.setState({ ChangeTheNewsHeading: "Entertainment" }) }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" onClick={() => { this.setState({ ChangeTheNewsHeading: "General" }) }}>General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Health" onClick={() => { this.setState({ ChangeTheNewsHeading: "Health" }) }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Science" onClick={() => { this.setState({ ChangeTheNewsHeading: "Science" }) }}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Sports" onClick={() => { this.setState({ ChangeTheNewsHeading: "Sports" }) }}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Technology" onClick={() => { this.setState({ ChangeTheNewsHeading: "Technology" }) }}>Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={this.submit}>
                            <input className="form-control me-2" type="search" value={this.state.desc} onChange={(e)=>this.setState({desc:e.target.value})} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
