import React, { Component } from 'react';

class videoListItem extends Component {

    constructor(props){
        super(props);
    }

    render() {
        if (this.props.list.data !== undefined){
            return (
                <h1> { this.props.list.data.items[0].snippet.title}</h1>
            );
        } else {
            return (
                <div>
                    <img src="" alt=""/>
                    <title></title>
                    <desc></desc>
                </div>
            );
        }

    }
}

export default videoListItem;
