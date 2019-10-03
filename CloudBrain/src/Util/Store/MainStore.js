import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import combineReducers from '../Reducers/MainReducer';
import saga from '../Saga/Saga';

const sagaMiddleware = createSagaMiddleware();

function MainStore(initialState = fromJS({})) {
	// console.log(sagas)
	const middlewares = [ sagaMiddleware ];

	const enhancers = [ applyMiddleware(...middlewares) ];

	// if (__DEV__) {
	//   enhancers.push(devTools());
	// }

	const store = createStore(combineReducers, compose(...enhancers));

	console.log(store);

	// Extensions
	sagaMiddleware.run(saga, store.dispatch);
	// const rootTask = sagaMiddleware.run(sagas, store.dispatch);
	// rootTask.done.catch(function (err) {
	//     console.log("Error in Sagas", err);
	// });
	return store;
}

export default MainStore;


