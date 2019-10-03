import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import COLORS from "../Util/Theme/ColorConstants";
import DashboardGridFlatlist from "../GlobalStylesheet/DashboardGridFlatlist";

import AsyncStorage from "@react-native-community/async-storage";
import ACTION_TYPES from "../Util/Actions/ActionTypes";
import CONST from "../Util/Constants";
import { connect } from "react-redux";
import Spinner from '../Util/UI/Spinner';

import {
  getProviders,
  getVMSForProvider
} from "../Util/Actions/ActionsCreators";


export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNetworkConnected: false,
      isActivityLoading: false,
      prevProp: null,
      dataSource: [],
      dataSourceCount: 0,
      currentActionType: ""
    };

    this.onPressFlatlistItem = this.onPressFlatlistItem.bind(this);
  }
  static navigationOptions = {
    title: "Dashboard"
  };

  closeActivityIndicator = () =>
    this.setState({
      isActivityLoading: false
    });

  startActivityIndicator = () =>
    this.setState({
      isActivityLoading: true
    });

  render() {
    return (
      <View style={DashboardGridFlatlist.MainContainer}>
        <View style={{opacity: this.state.isActivityLoading ? 1.0 : 0.0, flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.45)', shadowColor : '#BCBCBC', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.7, zIndex: 999, marginTop:this.state.isActivityLoading ? 130.0 : 0.0, height : 110, width: 110,
    justifyContent: 'center',
    alignItems:'center'}}>
        <ActivityIndicator size={'large'}
        style={{flex: 1,
          alignSelf:'center'}
          } />
         </View>
        <FlatList
          data={this.state.dataSource}
          columnWrapperStyle={DashboardGridFlatlist.flatListWrapperStyle}
          renderItem={({ item }) => (
            // <TouchableOpacity style={styles.collectionCellView}
            //                   onPress={() => this.onPressFlatlistItem(item)}>
            <TouchableOpacity
              style={DashboardGridFlatlist.collectionCellView}
              onPress={() => this.onPressFlatlistItem(item.id)}
            >
              <Image style={DashboardGridFlatlist.imageThumbnail} source={item.src} />
              <Text style={DashboardGridFlatlist.nameStyle}>{item.name}</Text>
              <Text style={DashboardGridFlatlist.regionStyle}>{item.provider_region}</Text>
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  // onPressFlatlistItem(item) {
  //   this.props.navigation.navigate('providerDetailsObj', {selectedItem: item})
  // }

  getVms = async selectedId => {
    try {
      const value = await AsyncStorage.getItem(CONST.k_auth);
      //if(value !== null) {
      // value previously stored
      //console.log("value",value);

      var postData = {
        // Req. Params body ======= imp =======
        emsId: selectedId,
        authorisation: value
      };
      this.setState({ currentActionType: ACTION_TYPES.GET_VMS_FOR_PROVIDER, isActivityLoading : true });
      this.props.getVMSForProvider(postData);

      //}
    } catch (e) {
      // error reading value
    }
  };

  onPressFlatlistItem(selectedItem) {
    this.setState({ selectedItem });
    var ems_id = selectedItem.toString();
    this.getVms(ems_id);
  }

  componentDidMount() {
    this.setState({ isActivityLoading: true });
    this.getProvidersData(CONST.k_groupName);
  }

  getProvidersData = async val => {
    try {
      const value = await AsyncStorage.getItem(val);
      if (value !== null) {
        // value previously stored
        console.log("value", value);

        var postData = {
          // Req. Params body ======= imp =======
          groupName: value
        };
        this.setState({ currentActionType: ACTION_TYPES.GET_PROVIDERS });
        this.props.getProviders(postData);
      }
    } catch (e) {
      // error reading value
    }
  };

  static retrieveImage(itemName) {
    if (itemName.includes("azure")) {
      return require("../resources/Images/azure_logo.png");
    } else if (itemName.includes("alibaba") || itemName.includes("ali")) {
      return require("../resources/Images/alibaba_cloud.png");
    } else if (itemName.includes("aws")) {
      return require("../resources/Images/aws_logo.png");
    } else {
      return require("../resources/Images/google_cloud_logo.png");
    }
  }

  static getDerivedStateFromProps(props, state) {

    //1.-----------------------Handle Response for Providers-----------------------
    if (state.prevProp == props || state.currentActionType == ""){
      return{
        prevProp : props
       }
    }
    else {
      if ( state.currentActionType == ACTION_TYPES.GET_PROVIDERS &&  props.providerResp != null) {

        if (props.providerResp.headerResponse != null && props.providerResp.headerResponse.status == 200)
          {
            //To Do PK
            let dataSourceLength = props.providerResp.data.rows[0].cb_cloud_provider_count2.length
            let dataItems = props.providerResp.data.rows[0].cb_cloud_provider_count2

             let items = Array.apply(null, Array(dataSourceLength)).map((v, i) => {
                //return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
                return {
                  name: dataItems[i].name,
                  provider_region: dataItems[i].provider_region,
                  id: dataItems[i].id,
                  src: Dashboard.retrieveImage(dataItems[i].name.toLowerCase()) //require('../resources/Images/CloudbrainLogo.png') //
                }
              });

            return {
              isNetworkConnected: true,
              isActivityLoading: false,
              prevProp : props,
              dataSource : items,
              dataSourceCount : dataSourceLength
            }

            }
            else if (props.providerResp.headerResponse == null) {
              return{

                prevProp : props,
                dataSource : [],
                dataSourceCount : 0,

               }
            }
            else {
            if (props.providerResp.headerResponse.status == 400) {
                      Alert.alert(props.providerResp.data.error.message);
                    } else if (props.providerResp.headerResponse.status == 401) {
                      Alert.alert(props.providerResp.data.error.message);
                    } else if (props.providerResp.headerResponse.status == 500) {
                      Alert.alert("Internal Server Error");
                    }

                    return{
                      isActivityLoading: false,
                      prevProp : props,
                      dataSource : [],
                      dataSourceCount : 0
                     }
                  }
               }
    }

     //1.-----------------------Handle Response for Providers-----------------------

     if (state.prevProp == props || state.currentActionType == "") {
      return {
        prevProp: props
      };
    } else {
      if (
        state.currentActionType == ACTION_TYPES.GET_VMS_FOR_PROVIDER &&
        props.vmsForProviderResp != null
      ) {
        if (props.vmsForProviderResp.headerResponse != null &&
          props.vmsForProviderResp.headerResponse.status == 200) {
          //To Do PK
          //this.props.navigation.navigate('providerDetailsObj', {selectedVmsForProvider: vmsForProviderResp})
          props.navigation.navigate('providerDetailsObj', {selectedVmsForProvider: props.vmsForProviderResp})
  
          return {
            isNetworkConnected: true,
            isActivityLoading: false,
            prevProp: props,
          };
        } else if (props.vmsForProviderResp.headerResponse == null) {
          return {
            prevProp: props,
          };
        } else {
          if (props.vmsForProviderResp.headerResponse.status == 400) {
            Alert.alert(props.vmsForProviderResp.data.error.message);
          } else if (props.vmsForProviderResp.headerResponse.status == 401) {
            Alert.alert(props.vmsForProviderResp.data.error.message);
          } else if (props.vmsForProviderResp.headerResponse.status == 500) {
            Alert.alert("Internal Server Error");
          }
  
          return {
            isActivityLoading: false,
            prevProp: props,
          };
        }
      }
    }
   
    
    return null;
  }
}



const mapStateToProps = ({ providerReducer }) => {
  const { providerResp, vmsForProviderResp } = providerReducer;

  return {
    providerResp: providerResp,
    vmsForProviderResp: vmsForProviderResp
  };
};

module.exports = connect(
  mapStateToProps,
  {
    getProviders,
    getVMSForProvider
  }
)(Dashboard);


