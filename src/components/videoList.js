import React, { Component } from 'react';
import SearchBar from './searchBar';
import {Card, CardActions, CardHeader, CardText} from '../../node_modules/material-ui/Card';
import VideoListItem from './videoListItem';



class videoList extends Component {

    constructor(props, context) {
        super(props, context);
        console.log(this.props.match.params.search);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.state = {
            filterText: []
        }

    }

    handleUserInput(filterText){
        console.log(filterText);
        this.setState({
            filterText: filterText
        });
    }


    render() {
        return (
            <Card>
                <CardHeader title="Одностраничное приложение для поиска Youtube-видеозаписей на ReactJs"
                            subtitle="@RikiLucy">

                    <SearchBar
                        onUserInput={this.handleUserInput}
                    />
                </CardHeader>
                <CardText>
                    <VideoListItem list={this.state.filterText}/>

                </CardText>
            </Card>
        );
    }
}

export default videoList;
