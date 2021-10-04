import * as React from 'react';
import {SafeAreaView, View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {ProgressBar, Colors } from 'react-native-paper';

//user defined libraries
import { REST } from '../utils/REST';

import { HomeListView } from '../components/HomeListView';
import { AllList } from '../components/AllList';
// import ModalChanger  from "../components/ModalChanger";
import { Divider } from "../components/Divider";
// import ProgressBar from '../components/ProgressBar';


class HomeScreen extends React.Component{

    constructor(props){
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
        this.fetchData();
    }
    
    fetchData(){
        this.setState({needUpdate:false});
        try{
            REST.getMainData((result)=>{
                this.doneLoad(result);
            });
        }catch{
            console.log("error fetchong data");
            this.errLoading();
        }
    }

    doneLoad(result){
        this.setState(()=>{
          return{
            data : result,
            isLoading : false
          };
        });
      }
    
      errLoading(){
        this.setState(()=>{
          return {
            isLoading : false,
            isErrorLoad : true
          };
        });
      }


    renderContent(){
      if(this.state.isLoading)
        return <Text>{'Loading in progress...'}</Text>;
      else if(this.state.errLoading)
        return <Text>{'Loading in error'}</Text>;
      else if(this.state.data.success < 0)
        return <Text>{'Server error response'}</Text>;
      else
        return this.isOk();
    }

    isOk(){
      const prep = this.state.data.data;
      const cash_hand = prep.in.sum_num - prep.out.sum_num;
      const percent = (100 - (prep.out.sum_num * 100) / prep.in.sum_num)/100;
      // console.log('percent: ' + percent)
      return(
        <View>
          <Divider text={'Общее'} textWidth = {70} />
          <ProgressBar style={styles.progressBar} progress={percent} color={Colors.green300} ></ProgressBar> 
          <View style={styles.text_container}>
            <Text style={styles.text_hand}>{'Остаток: ' + cash_hand}</Text>
            <Text style={styles.text_all}>{'Всего с начала месяца: ' + prep.in.sum_num}</Text>
          </View>
          <Divider text={'Группы'} textWidth = {70} />
          <View>
            <AllList style={styles.container_list} items={this.state.data} isInput={false}></AllList>
            {/*<HomeListView data={this.state.data} isInput={false}/>*/}
          </View>
        </View>
        );

          {/*<Divider text={'Общее'} textWidth = {70} />
          <View style={styles.container}>
              <Text style={styles.label}>
                  {'Остаток: ' + cash_hand}
              </Text>
              <ProgressBar progress={percent} height={15} backgroundColor="#4a0072" />
          </View>
      
          <View style={styles.topTextStyle}>
            <Text style={{textAlign:'right'}}>{'Расоход: ' + prep.out.sum_num }</Text>
            <Text style={{textAlign:'right'}} >{'Доход: ' + prep.in.sum_num }</Text>
          </View>
          <Divider text={'Все группы'} textWidth = {70} />
          <HomeListView data={this.state.data} isInput={false}/>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {this.changeModal()}}
            style={styles.touchableOpacityStyle}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
              }}
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>
          */}
      ;
    }

    render(){
      return(
        <ScrollView style={styles.container}>
          {this.renderContent()}
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    paddingTop: StatusBar.currentHeight,
    marginTop: "auto",
    marginBottom: "auto",
    marginHorizontal: 5
  },
  progressBar:{
    height: 15,
    marginTop: 5 /* -15 */
  },

  text_container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  text_all:{
    alignSelf:'flex-end'
  },
  text_hand:{
    alignSelf:'flex-start'
  },
  
  container_list:{
    /*display: 'flex',*/
    height:'50%',
    marginTop: 10
  }

})

const styles_old = StyleSheet.create({
  containerStyle:{
    alignItems: 'center',
    marginTop: "auto",
    marginBottom: "auto",
    marginHorizontal: 5,
    
  },
  inViewStyle:{

  },
  topTextStyle:{
    
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  modalStyle:{
//    justifyContent: 'flex-end', 
//    margin: 15
  },
  modalViewStyle: {
    flex: 0.25, 
    marginTop: 'auto',
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
    backgroundColor: 'white',
    justifyContent: 'space-around', 
    alignItems: 'center',
  }
});
export default HomeScreen;