// This renders the picture and other key elements such as keyword and stuff
// This is for visuals 
import './ImageItems.css';
import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="group">
                <h2>{this.props.zoo.title}</h2>
                <img src={this.props.zoo.url} alt={this.props.zoo.title} className="rendered-image" width="200px" height="200px"/>
                <div className="animal-text">
                <p className="title-print">Keyword: {this.props.zoo.keyword}</p>
                <p className="description-print">Description: {this.props.zoo.description}</p>
                <p className="horns-print">Horns: {this.props.zoo.horns}</p>
                </div>
            </div>
        )
    }
}
