import { StyleSheet, Dimensions} from 'react-native';

import COLORS from '../Util/Theme/ColorConstants';
const window = Dimensions.get('window');

const MigrationTypesStyle = StyleSheet.create({

  MainContainer: {
    alignItems: "center",
    height: window.height - 85,
    backgroundColor: "white",
  },

  countView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.appBlueTheme,
    marginBottom: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
  },

  nameStyle: {
    marginTop: 10,
    width: 130,
    color: "black",
    fontSize: 13,
    textAlign: "center"
  },

  countText: {
    color: 'white',
    fontSize: 14,
    textAlign: "center",
    fontWeight: 'bold',
  },

collectionCellView: {
    margin: 10,
    backgroundColor: "white",
    width: 150,
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    shadowColor: "lightgray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    zIndex: 2
  },

  imageThumbnail: {
    alignItems: "center",
    height: 80,
    width: 80,
    borderRadius: 10
  },

  nameStyle: {
    marginTop: 10,
    width: 130,
    color: "black",
    fontSize: 13,
    textAlign: "center",
    fontWeight: 'bold',
  },

  flatListWrapperStyle: {
    justifyContent: "space-between"
  },
});

export default MigrationTypesStyle;