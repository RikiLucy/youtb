import React, { Component } from 'react';
import SearchBar from './searchBar';
import { Card, CardHeader, CardText } from '../../node_modules/material-ui/Card';
import { Redirect } from 'react-router-dom';



class videoDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect: false
        };
    }

    render() {
        return (
                <Card>
                    <CardHeader
                        title="Одностраничное приложение для поиска Youtube-видеозаписей на ReactJs"
                        subtitle="@RikiLucy"
                    >
                        <SearchBar />
                    </CardHeader>

                    <CardText>
                        <iframe id="ytplayer" type="text/html" width="720" height="405"
                                title={this.props.match.params.id}
                                src={ 'https://www.youtube.com/embed/' + this.props.match.params.id }
                                frameBorder="0" allowFullScreen />
                    </CardText>
                    { this.state.redirect && (<Redirect to={'/list'} />) }
                </Card>
        );
    }
}

export default videoDetail;
