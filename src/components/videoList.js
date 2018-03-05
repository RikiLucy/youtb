import React, { Component } from 'react';
import SearchBar from './searchBar';
import { Card, CardHeader, CardText } from '../../node_modules/material-ui/Card';
import VideoListItem from './videoListItem';
import { GridList } from 'material-ui/GridList';



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
                    <GridList
                        cellHeight={375}
                        // style={styles.gridList}
                        cols={5}
                        padding={2}
                    >
                        {this.state.filterText.map((item) => (
                            <VideoListItem
                                key={item.id}
                                id={item.id}
                                preview={item.preview}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </GridList>


                </CardText>
            </Card>
        );
    }
}

export default videoList;
