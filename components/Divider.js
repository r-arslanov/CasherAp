// import React, { Component } from "react";
// import { View, StyleSheet, Switch, Text } from "react-native";

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export class Divider extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    const { lineHeight, lineColor, text, textWidth, marginUp, marginHr } = this.props;

    return(
      <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: marginHr, marginTop: marginUp}}>
        <View style={{flex: 1, height: lineHeight, backgroundColor: lineColor}} />
        <View>
          <Text style={{width: textWidth, textAlign: 'center'}}>{text}</Text>
        </View>
        <View style={{flex: 1, height: lineHeight, backgroundColor: lineColor}} />
      </View>
    );
  }

  static defaultProps = {
      marginHr: 5,
      marginUp: 10,
      lineHeight:3,
      lineColor:'black',
      textWidth:30
  }

}



// Divider.defaultProps = {
//   lineHeight:1,
//   lineColor:'black',
//   textWidth:50
// };

// module.exports.Divider =  new Divider();