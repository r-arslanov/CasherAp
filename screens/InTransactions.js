import React from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  ScrollViewBase,
} from 'react-native';

import { REST } from "../utils/REST";

export class InTransactions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          isLoading   : true,
          isErrorLoad : false,
          data        : [],
          showChanger : false,
          showTrans   : false,
          needUpdate  : true
        };
    }
  componentDidMount(){
    this.setState(this.fetchData());
  }

    fetchData(){
      let data = REST.getTrans(0, (result)=>{
        {
          return{
            data : result,
            isLoading : false
          };
        }
      });
      // console.log(data);
      return data;
    }

    renderItems(){
      console.log(this.state.data);
    }

    render () {
      return (
        <ScrollView style={styles.container}>
          {this.renderItems()}
            {/*<Text>{'It is \"In stransactions" page'}</Text>*/}
        </ScrollView>

      );
    }
  }

  const styles = StyleSheet.create({
    container:{
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 5
    }
  });