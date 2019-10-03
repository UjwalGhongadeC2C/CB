import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import ProviderReducer from './ProviderReducer';
import MigrationReducer from './MigrationReducer';

export default combineReducers({
  loginReducer: LoginReducer,
  providerReducer: ProviderReducer,
  migrationReducer: MigrationReducer
});