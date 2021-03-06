import React, { Component } from 'react';
import {Card, CardHeader, CardText} from '../../node_modules/material-ui/Card';
import { Redirect } from 'react-router-dom';
import SearchBar from './searchBar';


class index extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            redirect: false
        }
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
                </CardText>
                { this.state.redirect && (<Redirect to={'/list/' + this.refs.search.getValue()} />)}
            </Card>
        );
    }
}

export default index;
