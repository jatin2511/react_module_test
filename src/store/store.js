import {createStore} from 'redux'
import mobilereducer from '../reducers/ismobilereducer'
import notereducer from '../reducers/notereducer'
import { combineReducers } from 'redux';
const rootreducer=combineReducers({
    ismobile:mobilereducer,
    notedisplay:notereducer
})
const store =createStore(rootreducer);
export default store;