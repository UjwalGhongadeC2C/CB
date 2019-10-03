import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

import MigrationDetailStyles from "../GlobalStylesheet/MigrationDetailStyles";
import NavigationService from '../Util/Navigation/NavigationService';


export default class MigrationDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNetworkConnected: false,
      isActivityLoading: false,
      prevProp: null,
      passedDataSource: [],
      currentActionType: "",
      
    };
  }

  componentDidMount() {
    console.log('navigation param', this.props.navigation.state.params.selectedMigrationType);
    this.setState({passedDataSource: this.props.navigation.state.params.selectedMigrationType});
  }

 

  static navigationOptions = {
    title: "Migration Details",
    headerLeft: (

      <TouchableOpacity  onPress={() => NavigationService.navigate('migrationObj')}>
           <Image
             source={require('../resources/Images/arrow-left.png')}
             style={{ width: 20, height: 30, marginLeft: 5 }}
           />
  
      </TouchableOpacity>
           )
  };

  render() {
    return (
      <View style={MigrationDetailStyles.MainContainer}>
          <FlatList
          data={this.state.passedDataSource}
          columnWrapperStyle={MigrationDetailStyles.flatListWrapperStyle}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={MigrationDetailStyles.collectionCellView}>
              <View style={MigrationDetailStyles.sourceDestinationContainer}>
                  <Image style={MigrationDetailStyles.sourceThumbnail}></Image>
                  <Image style={MigrationDetailStyles.arrowImage}></Image>
                  <Image style={MigrationDetailStyles.destinationThumbnail}></Image>
              </View>
              <Text style={MigrationDetailStyles.instanceNameStyle}>{'abc'}</Text>
              <Text style={MigrationDetailStyles.dateTimeStyle}>{item.start_date}</Text>
              <View style={MigrationDetailStyles.progressViewContainer}>
                  <Image style={MigrationDetailStyles.progressImage}></Image>
                  <Text style={MigrationDetailStyles.progressPercent}>{item.status.progress}</Text>
              </View>
            
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

 
}
