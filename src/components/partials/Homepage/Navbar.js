import React, { Component } from 'react';

class Navbar extends Component {
    state = {
        color: '',
        padding:''
    }

    listenScrollEvent = e => {
        if (window.scrollY > 40) {
            this.setState({color: '#5d9cec', padding:'10px 0'})
        } else {
            this.setState({color: ''})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render(){
        return(
            <div style={{backgroundColor:this.state.color}} className="navbar navbar-custom sticky navbar-fixed-top" role="navigation" id="sticky-nav">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand logo" href="index.html">
                            You<span className="text-custom">&</span>me
                        </a>

                    </div>

                    <div className="navbar-collapse collapse" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li>
                                <a href="#features" className="nav-link">Features</a>
                            </li>
                            <li>
                                <a href="#pricing" className="nav-link">Plans</a>
                            </li>
                            <li>
                                <a href="#clients" className="nav-link">Clients</a>
                            </li>
                            <li>
                                <a href="">Login</a>
                            </li>
                            <li>
                                <a href="#" className="btn btn-white-bordered navbar-btn">Try for Free</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;