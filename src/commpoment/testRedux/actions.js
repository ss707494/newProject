/**
 * Created by Administrator on 12/23.
 */
import {
    createActions
    , handleActions
} from 'redux-actions'

const actions = createActions(
    {
        DEL: (num=1) => ({num})
    }
    ,'INCREMENT'
    , 'ADD_ONE'
);

const reducer = handleActions({
    [actions.increment]: (state, action) => ({
        counter: state.counter + action.payload
    }),
    [actions.addOne]: (state, action) => ({
        counter: state.counter + 1
    }),
    [actions.del]: (state, action) => {

        return ({
            counter: state.counter - action.payload
        })
    }


}, { counter: 0 });

export {
    reducer
    , actions
}
