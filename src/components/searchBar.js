import React, { Component } from 'react';
import AutoComplete from '../../node_modules/material-ui/AutoComplete';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class searchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            videos: ['123', '234']
        };

        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.clickSearch = this.clickSearch.bind(this);

    }

    clickSearch() {
        if (window.location.pathname !== '/'){
            this.setState({ redirect: true});
        }
    }

    handleChange(value) {
        let req = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + value + '&type=video&key=AIzaSyA2hgYchwsDaNkju_P1oaF16zRL5c6UfSA';
        axios.get(req)
            .then(res => {
                let autocomplete = res.data.items;
                let videoList = [];
                autocomplete.forEach((item, i, autocomplete) => {
                    autocomplete.push(item.snippet.title);
                    videoList.push({
                        id: item.id.videoId,
                        preview: item.snippet.thumbnails.high.url,
                        title: item.snippet.title,
                        desc: item.snippet.description
                    });
                });

                console.log(res);
                this.setState({
                    videos: autocomplete
                });
                this.props.onUserInput(videoList);
            });
    }

    componentDidMount(){
        if (window.location.pathname === '/list'){
            this.refs.search.focus();
        }
    }


    render() {
        return (
            <div onClick={() => this.clickSearch()}>
            <AutoComplete
                dataSource = {this.state.videos}
                hintText = 'Название видео'
                ref = 'search'
                onUpdateInput={this.handleChange}
                filter={AutoComplete.caseInsensitiveFilter}
                fullWidth={true}
                maxSearchResults={4}
            />
            { this.state.redirect && (<Redirect to={'/list'} />)}
            </div>

        );
    }
}

export default searchBar;
