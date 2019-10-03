import { NavigationActions } from 'react-navigation';
import { StackActions} from 'react-navigation'

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function goBackwards(options) {
    _navigator.dispatch(
      NavigationActions.back({
        options
      })
    );
  }

  function goToRoot(options) {
    
    _navigator.dispatch(
       StackActions.popToTop({
           options
        })
    );
  }

  function pushScreen(routeName, params) {
    
    _navigator.dispatch(
       StackActions.push({
        routeName,
        params
        })
    );
  }

  function popScreen(number, immediate) {
    
    _navigator.dispatch(
       StackActions.pop({
           number,
           immediate
        })
    );
  }

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  goBackwards,
  goToRoot,
  pushScreen,
  popScreen

};