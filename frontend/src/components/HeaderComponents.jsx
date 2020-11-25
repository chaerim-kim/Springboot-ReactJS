import React, { Component } from 'react';

// a code to design a header part of a webpage
class HeaderComponents extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className = "navbar navbar-expand-md navbar-dark bg-dark" >
                        <div><a href = "https://chaerim-kim.github.io" className="navbar-brand">
                            User Management App
                        </a>
                        </div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponents;