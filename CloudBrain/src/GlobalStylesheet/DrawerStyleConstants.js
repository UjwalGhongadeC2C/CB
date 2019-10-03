import { StyleSheet} from 'react-native';
import COLORS from '../Util/Theme/ColorConstants';


const DRAWER_STYLES = StyleSheet.create({
   
    drawerScroll: {
        marginTop: 10,
    },

    headerContainer: {
        flex: 1,
    },

    headerView: {
        paddingTop: 50,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        height: 150,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    headerInnerViews: {
        flex: 1,
    },
  

    profilePicImg: {
        marginTop:15,
        marginLeft: 35,
        width: 55,
        height: 55,
    },

    userNameText: {
              
        color:COLORS.DrawerText,
        width: 100,
        marginTop:25,
        fontSize:15,
        textAlign:'left',
    },

    userRoleText: {
        paddingBottom: 2,
       
        color:COLORS.DrawerText,
        width: 100,
        paddingTop: 5,
        fontSize:10,
        textAlign:'left',
    },

    bottomLine: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        height: 1,
        backgroundColor: 'lightgray',
    },

    logoutButtonContainer: {
        marginLeft: 18,
        paddingTop: 5
    },

    logoutButtonText: {
        color: COLORS.lightBlue,
        fontSize:15,
        textAlign:'left',
        fontWeight: "bold"
    }

});

export default DRAWER_STYLES;