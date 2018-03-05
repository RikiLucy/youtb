import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// AIzaSyA2hgYchwsDaNkju_P1oaF16zRL5c6UfSA

import Index from './components/index';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';

//material-ui
import MuiThemeProvider from  '../node_modules/material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from '../node_modules/material-ui/Tabs';
import IconMenu from '../node_modules/material-ui/IconMenu';
import IconButton from '../node_modules/material-ui/IconButton';
import MenuItem from '../node_modules/material-ui/MenuItem';
import MoreVertIcon from '../node_modules/material-ui/svg-icons/navigation/more-vert';




class App extends Component {

  constructor(props) {
      super(props);
  }

  handleChange = (value) => {
    this.setState({
        value: value
    });
  };



  render() {
    return (
      <MuiThemeProvider>
          {/*<Tabs*/}
          {/*>*/}
             {/*<Tab value='a' label="Поиск" containerElement={<Link to="/"/>} />*/}
             {/*<Tab value='b' label="Результат" containerElement={<Link to="/list"/>} />*/}
             {/*<Tab value='c' label="Просмотр" containerElement={<Link to="/watch"/>} />*/}
          {/*</Tabs>*/}
          <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
              <MenuItem primaryText="Главная" containerElement={<Link to="/"/>}/>
              <MenuItem primaryText="Результат" containerElement={<Link to="/list"/>}/>
              <MenuItem primaryText="Просмотр" containerElement={<Link to="/watch"/>}/>
          </IconMenu>

          <Switch>
              <Route exact path ="/" component={() => (<Index tab="test"/>)}/>
              <Route exact path="/list/:search?" component={VideoList}/>
              <Route exact path="/watch/:id?" component={VideoDetail}/>
          </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
