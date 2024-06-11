import {createStore} from 'redux'
import mobilereducer from '../reducers/ismobilereducer'

const store =createStore(mobilereducer);
export default store;