import ProgressBar from '../components/ProgressBar';

import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList
} from 'react-native';

const barWidth = Dimensions.get('screen').width - 30;

const renderItem = ({item, index, separator}) => (
    <View style={styles.container}>
        <Text style={styles.label}>
            {item.category}
        </Text>
        <ProgressBar progress={item.percent} height={7} backgroundColor="#4a0072" />
    </View>
);

export function HomeListView(props) { 
    let data = props.data.data;
    data.all.forEach((element, idx) => {
        data.all[idx].sum_num = parseFloat(element.sum_num);
        data.all[idx].max = (!props.isInput) ? parseFloat(data.out.sum_num) : parseFloat(data.in.sum_num);
        data.all[idx].percent = parseFloat(element.sum_num * 100 / element.max);
    });
    return (
        <FlatList 
            data={data.all}
            renderItem={renderItem}
            keyExtractor={(item) => item.category}
        />
    );
}
const styles = StyleSheet.create({
     
  container: {
    /* flex: 1,*/
    width: barWidth,
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