import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Generhey extends Component {
  render() {
    console.log(this.props.note)
    console.log(this.props.date)
    return (
      <View key={this.props.keyval} style={styles.note}>

        <Text style={styles.noteText}>{this.props.val.note}</Text> 

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}> 
          <Text style = {this.deleteButton}> - </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  note:{
    flexDirection:'row',
    position:'relative',
    padding:20,
    borderBottomWidth:2,
    borderBottomColor:'#9B9A9B',
    alignItems:'center',
    paddingTop:10,
  },

  noteText:{
    color:'#C5000D',
    paddingRight:100,
    fontSize:30,
    fontWeight:'bold',
  },

  noteDelete:{
    left:300,
    position:'absolute',
    padding:10,
  },

  deleteButton:{
    color:'#fff',
    fontSize:10,
    fontWeight:'bold',
  }


});

