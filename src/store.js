import {createStore} from 'redux';
import rootReducer from './Components/Reducers/index';

const store=createStore(rootReducer,);

export default store;