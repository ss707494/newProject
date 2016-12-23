/**
 * Created by Administrator on 12/23.
 */
import {createStore, applyMiddleware} from 'redux'
import {reducer} from '../commpoment/testRedux/actions'
import thunk from 'redux-thunk'


const store = createStore(reducer, applyMiddleware(thunk));
export default store
