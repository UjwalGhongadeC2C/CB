import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native'; 


export default class Collection extends React.Component {
    
    constructor() {
        super();
        this.state = {
          dataSource: {},
        };
      }
      componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(60)).map((v, i) => {
          return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
        });
        that.setState({
          dataSource: items,
        });
      }
  
    render() {
  
      return (
        <View style={styles.MainContainer}>
        
        <FlatList 
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 , backgroundColor: 'gray'}}>
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
        </View>
      );
    }
  }
  
  //<Image style={styles.imageThumbnail} source={{ uri: item.src }} />

  const styles = StyleSheet.create({
   
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
      },
      imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
      },
  });