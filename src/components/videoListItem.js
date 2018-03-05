import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';
import { Redirect } from 'react-router-dom';



class videoListItem extends Component {

    constructor(props){
        super(props);
        this.watchVideo = this.watchVideo.bind(this);
        this.state = {
            redirect: false
        }
    }

    watchVideo(){
        if (window.location.pathname === '/list'){
            this.setState({ redirect: true});
        }
        console.log(this.props.id);
    }

    render() {
        return (
            <GridTile
                cols={1}
            >
                <div onClick={() => this.watchVideo()} style={{cursor: 'pointer'}}>
                    <img width={340} src={this.props.preview} alt={this.props.title} />
                    <div style={{color: 'black', fontSize: '16px'}}>{this.props.title}</div>
                    <br/>
                    <i style={{fontSize: '14px', color: '#7f7070'}}> {this.props.desc}</i>
                </div>
                { this.state.redirect && (<Redirect to={'/watch/' + this.props.id} />)}
            </GridTile>
            );
    }
}

export default videoListItem;
