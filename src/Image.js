import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            catImage: null
        };
    }
    
    componentDidMount() {
        const self = this;

        fetch('https://aws.random.cat/meow')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                self.setState({
                    catImage: data.file
                });
            })
            .catch(function(error) {
                console.log('error', error);
            });
    }
    
    render() {
        return (
            <div className='image'>
                {this.state.catImage ? <img src={this.state.catImage} alt={this.state.catImage} /> : 'LOADING' }
            </div>
        );
    }
}

export default Image;