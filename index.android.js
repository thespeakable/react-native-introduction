import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import picBird from './assets/bird_view.jpg'

export default class FirstApp extends Component {

  constructor(){
    super()
    this.state = {
      color: 'rgba(222,228,232,0.5)',
      borderColor: 'rgba(222,228,232,1)',
      text1: '',
      text2: ''
    }
    this.opacityChange = this.opacityChange.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
  }
  //function to handle the change in the opacity of the SignUp and LogIn
  opacityChange(color){
    this.setState(color)
  }
  //function to handle the change in the borderColor of the TextInput
  inputHandler(borderColor){
    this.setState(borderColor)
  }

  render() {
    return (
    <View style = {styles.container}>
        {/*holds the code to the topnav area*/}
        <View style ={styles.topNav}>
          <Image source = {picBird} style = {styles.pic}>
          <Text style = {[styles.picText, {color:this.state.color}]} onPress = {()=>this.opacityChange('rgba(222,228,232,1)')}>SIGN UP</Text>
          <Text style = {[styles.picText, {color:this.state.color}]} onPress ={()=>this.opacityChange('rgba(222,228,232,1)')}>LOG IN</Text>
          </Image>
        </View>
        {/*holds the code for the main body*/}
        <View style = {styles.mainBody}>
          <Text style = {[{fontSize:20},{flexDirection:'row'}]}>Log In </Text>
          <ScrollView>
          <TextInput 
            style = {styles.inputText} 
            onPress = {()=>this.inputHandler('rgba(0, 97, 255,0.7)')}
            onChangeText = {(text1)=>this.setState({text1})}/>
          <TextInput
            style = {styles.inputText} 
            onPress = {()=>this.inputHandler('rgba(0, 97, 255,0.7)')}
            onChangeText = {(text2)=>this.setState({text2})}/>
          <Text>
          {this.state.text1}{this.state.text2}
          </Text>
          </ScrollView>
        </View>
        {/*holds the code for the bottom nav*/}
        <View style = {styles.bottomNav}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'rgba(222,228,232,0.5)'
  },
  topNav:{
    flex:3/7,
    flexDirection:'column'
  },
  mainBody:{
    //padding: 20,
    marginTop:50,
    alignItems:'center',
    //textAlign:'auto',
    flex:7/14
  },
  bottomNav:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*(1/14),
    backgroundColor:'rgba(10,10,12,1)'
  },
  pic:{
    flexDirection:'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*(3/7),
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  picText:{
    color:'white',
    fontSize:20,
    width:100,
    padding:5,
    //margin:5,
    justifyContent:'space-around',
    textAlign:'center',
    //backgroundColor:'rgba(255,255,255,.7)'
  },
  inputText:{
    justifyContent:'center',
    height:40,
    borderRadius:0,
    borderWidth:3,
    borderColor:'rgba(10,10,12,1)',
    marginBottom:20,
    width: Dimensions.get('window').width*(8/10)
  }
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
