import React, { Component } from 'react';
import News from './News';



class Br extends Component {
    state = {}
    render() {
        return (
            <div>
                <News fetch="https://newsapi.org/v2/top-headlines?country=br&apiKey=fa168a8960ee4bf0911fbf6759ae54c7" />
            </div>
        );
    }
}

export default Br;