/**
 * Created by Administrator on 12/23.
 */
import {createStore, applyMiddleware} from 'redux'
import {reducer} from '../commpoment/testRedux/actions'


const store = createStore(reducer, applyMiddleware(thunk));
export default store
