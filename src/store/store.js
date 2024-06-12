import {createStore} from 'redux'
import mobilereducer from '../reducers/ismobilereducer'
import notereducer from '../reducers/notereducer'
import { combineReducers } from 'redux';
import noteinitializer from '../reducers/noteinitializer'
const rootreducer=combineReducers({
    ismobile:mobilereducer,
    notedisplay:notereducer,
    Notes:noteinitializer
})
const store =createStore(rootreducer);
export default store;