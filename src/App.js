import React, { Component } from 'react';

import './style.css';
import Image from './Image';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            countImages: 1
        };
    }

    renderImages() {
        let images = [];

        for(let i = 0; i < this.state.countImages; i++) {
            images.push(i);
        }

        return images.map((image) => {
            return <Image key={image} />;
        });
    }

    handleChange(event) {
        if(event.target.value && event.target.value > 0) {
            this.setState({countImages: event.target.value});
        }
    }

    render() {
        return (
            <div className='app'>
                <input type='text' onChange={this.handleChange} />
                {this.renderImages()}
            </div>
        );
    }
}

export default App;