import React, { Component } from 'react';
import News from './News';



class Deutschland extends Component {
    state = {}
    render() {
        return (
            <div>
                <News fetch="https://newsapi.org/v2/top-headlines?country=de&apiKey=fa168a8960ee4bf0911fbf6759ae54c7" />
            </div>
        );
    }
}

export default Deutschland;