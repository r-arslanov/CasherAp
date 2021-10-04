import React from 'react';

import {
    ScrollView,
    View,
    StyleSheet,
    Dimensions,
    Text,
    FlatList
  } from 'react-native';
import {ProgressBar, Colors } from 'react-native-paper';

const renderItem = ({item, index, separator}) => (
    <View style={styles.container}>
        <Text style={styles.label}>
            {item.category}
        </Text>
        <ProgressBar style={styles.progressBar} progress={item.percent} color={Colors.green300} />
        {/*<ProgressBar progress={item.percent} height={7} backgroundColor="#4a0072" />*/}
    </View>
);

export function AllList(props){
    let max = (!props.isInput) ? parseFloat(props.items.data.out.sum_num) : parseFloat(props.items.data.in.sum_num);
    let items = props.items.data.all;
    items.forEach((item, idx) => {
        items[idx].percent = parseFloat(item.sum_num * 100 / max)/100;
    });
    // console.log(items);
    return(
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.category}
        />
    );
}

const styles = StyleSheet.create({
     
    container: {
      /* flex: 1,*/
      /*width: , */
      backgroundColor: '#FFF',
      marginTop: 10,
      padding: 15,
    },
  
    label: {
        color: "#000",
        textAlign: "left",
        paddingBottom: 10,
    },
  
    });