/**
 * Created by Administrator on 12/23.
 */
import {
	createActions
	, handleActions
} from 'redux-actions'
import {get_in_theaters} from '../../api/doubanApi'

const actions = createActions(
	{
		DEL: (num = 1) => ({num})
		, GET_LISTDATA: get_in_theaters
	}
	, 'INCREMENT'
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
	},
	[actions.getListdata]: (state, action) => ({
		...state, listData: action.payload
	})
}, {
	counter: 0,
	listData: []
});

export {
	reducer
	, actions
}
