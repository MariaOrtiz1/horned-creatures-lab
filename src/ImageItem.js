import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.zoo.title}</h2>
                <img src={this.props.zoo.url} alt={this.props.zoo.title} className="rendered-image"/>
                <p>Keyword: {this.props.zoo.keyword}</p>
                <p>Description: {this.props.zoo.description}</p>
                <p>Horns: {this.props.zoo.horns}</p>
            </div>
        )
    }
}
