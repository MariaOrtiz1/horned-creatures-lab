import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (
            <div className="render-animals">
                {
                    this.props.zoo.map((animal, i) => <ImageItem zoo={animal} key={i} />)
                }
            </div>
        )
    }
}
