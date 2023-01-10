import React, { Component, useState } from 'react';
//import { createUseStyles } from 'react-jss'
import '../../node_modules/fundamental-styles/dist/fundamental-styles.css';
import { Title, TitleLevel } from '@ui5/webcomponents-react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    
  }
  
  
  render() {
    return (
        <Title level={TitleLevel.H3} style={{ marginTop: '20px', textAlign:"center"}}>Welcome to the Home Page!</Title>
      );
  }

}


