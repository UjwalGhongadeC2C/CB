import { StyleSheet} from 'react-native';
import COLORS from '../Theme/ColorConstants';


const DRAWER_STYLES = StyleSheet.create({
   
    drawerScroll: {
        marginTop: 10,
    },

    headerContainer: {
        flex: 1,
        // height: 150,
    },

    headerView: {
        paddingTop: 50,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        height: 150,

        flexDirection: 'row',
        flexWrap: 'wrap'
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },

    headerInnerViews: {
        flex: 1,
    },
  

    profilePicImg: {
        marginTop:20,
        marginLeft: 35,
        borderRadius: 25,
        width: 50,
        height: 50,
    },

    userNameText: {
       
        paddingLeft: 2,
        color:COLORS.lightBlue,
        width: 100,
        marginTop:25,
        fontSize:15,
        textAlign:'left',
        
    },

    userRoleText: {
        paddingBottom: 2,
        paddingLeft: 2,
        color:COLORS.lightBlue,
        width: 100,
        paddingTop: 5,
        fontSize:10,
        textAlign:'left',
    },

    bottomLine: {
        marginTop: 5,
        paddingLeft: 2,
        paddingRight: 2,
        height: 1,
        backgroundColor: COLORS.lightBlue
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