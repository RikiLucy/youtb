import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import Index from './components/index';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';

//material-ui
import MuiThemeProvider from  '../node_modules/material-ui/styles/MuiThemeProvider';
import IconMenu from '../node_modules/material-ui/IconMenu';
import IconButton from '../node_modules/material-ui/IconButton';
import MenuItem from '../node_modules/material-ui/MenuItem';
import MoreVertIcon from '../node_modules/material-ui/svg-icons/navigation/more-vert';




class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
          <div>
          <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
              <MenuItem primaryText="Главная" containerElement={<Link to="/"/>}/>
              <MenuItem primaryText="Поиск" containerElement={<Link to="/list"/>}/>
              <MenuItem primaryText="Просмотр" containerElement={<Link to="/watch"/>}/>
          </IconMenu>

          <Switch>
              <Route exact path ="/" component={() => (<Index tab="test"/>)}/>
              <Route exact path="/list/:search?" component={VideoList}/>
              <Route exact path="/watch/:id?" component={VideoDetail}/>
          </Switch>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
