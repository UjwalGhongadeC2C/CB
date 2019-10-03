import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList
} from "react-native";
import MigrationTypesStyle from "../GlobalStylesheet/MigrationTypesStyle";

import COLORS from "../Util/Theme/ColorConstants";
import NavigationService from "../Util/Navigation/NavigationService";

import AsyncStorage from "@react-native-community/async-storage";
import ACTION_TYPES from "../Util/Actions/ActionTypes";
import CONST from "../Util/Constants";
import { connect } from "react-redux";

import { getAllNotificationsAction } from "../Util/Actions/ActionsCreators";

export default class Migration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNetworkConnected: false,
      isActivityLoading: false,
      prevProp: null,
      migrationTypesArr: [],
      dataSource: [],
      currentActionType: ""
    };
  }

  static navigationOptions = {
    title: "Migration Notifications",
    headerLeft: (
      <TouchableOpacity
        onPress={() => NavigationService.navigate("DashboardObj")}
      >
        <Image
          source={require("../resources/Images/arrow-left.png")}
          style={{ width: 20, height: 30, marginLeft: 5 }}
        />
      </TouchableOpacity>
    )
  };

  render() {
  
    return (
      <View style={MigrationTypesStyle.MainContainer}>
        <FlatList
          data={this.state.migrationTypesArr}
          columnWrapperStyle={MigrationTypesStyle.flatListWrapperStyle}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={MigrationTypesStyle.collectionCellView}
              onPress={() => this.onPressFlatlistItem(item.arrOfSimilarType)}
            >
              <View style={MigrationTypesStyle.countView}>
                <Text style={MigrationTypesStyle.countText}>{item.count}</Text>
              </View>
              <Text style={MigrationTypesStyle.nameStyle}>
                {item.migration_type}
              </Text>
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  onPressFlatlistItem(selectedItem) {
    this.props.navigation.navigate('migrationDetailObj', {selectedMigrationType: selectedItem})
  }


  componentDidMount() {
    this.onPressFlatlistItem = this.onPressFlatlistItem.bind(this);
    this.getMigrationData();
  }

  getMigrationData() {
    var postData = {
      // Req. Params body ======= imp ======= //Currently temporary
      user_name: "admin",
      group_id: "2"
    };
    this.setState({ currentActionType: ACTION_TYPES.GET_ALL_NOTIFICATIONS });
    this.props.getAllNotificationsAction(postData);
  }

  static getDerivedStateFromProps(props, state) {
    //1.-----------------------Handle Response for Notifications-----------------------
    if (state.prevProp == props || state.currentActionType == "") {
      return {
        prevProp: props,
        isActivityLoading: false
      };
    } else {
      if (
        state.currentActionType == ACTION_TYPES.GET_ALL_NOTIFICATIONS &&
        props.getAllNotificationsResp != null
      ) {
        if (
          props.getAllNotificationsResp.headerResponse != null &&
          props.getAllNotificationsResp.headerResponse.status == 200
        ) {
          //To Do PK
          let dataSourceObjects = props.getAllNotificationsResp.data.list;

          //Code to find --Similar Migration Type --Similar Migration types count --Objects for Similar Migration type
          const typesArr = dataSourceObjects
              .map(dataItem => dataItem.migration_type) // get all media types
              .filter(
                (migration_type, index, array) =>
                  array.indexOf(migration_type) === index
              ), // filter out duplicates
            counts = typesArr.map(migration_type => ({
              migration_type: migration_type,
              count: dataSourceObjects.filter(
                item => item.migration_type === migration_type
              ).length,
              arrOfSimilarType: dataSourceObjects.filter(
                item => item.migration_type === migration_type
              )
            }));

          return {
            isNetworkConnected: true,
            isActivityLoading: false,
            prevProp: props,
            dataSource: dataSourceObjects,
            migrationTypesArr: counts
          };
        } else if (props.getAllNotificationsResp.headerResponse == null) {
          return {
            prevProp: props,
            dataSource: [],
            dataSourceCount: 0
          };
        } else {
          if (props.getAllNotificationsResp.headerResponse.status == 400) {
            Alert.alert(props.getAllNotificationsResp.data.error.message);
          } else if (
            props.getAllNotificationsResp.headerResponse.status == 401
          ) {
            Alert.alert(props.getAllNotificationsResp.data.error.message);
          } else if (
            props.getAllNotificationsResp.headerResponse.status == 500
          ) {
            Alert.alert("Internal Server Error");
          }

          return {
            isActivityLoading: false,
            prevProp: props,
            dataSource: [],
            dataSourceCount: 0
          };
        }
      }
    }

    return null;
  }
}

const mapStateToProps = ({ migrationReducer }) => {
  const { getAllNotificationsResp } = migrationReducer;

  return {
    getAllNotificationsResp: getAllNotificationsResp
  };
};

module.exports = connect(
  mapStateToProps,
  {
    getAllNotificationsAction
  }
)(Migration);
