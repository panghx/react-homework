import { combineReducers } from 'redux';

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
};

const todos = ({todoList = [],inputValue="",bottonStatus="all"}, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				todoList,
				inputValue,
				bottonStatus,
				
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(t =>
				todo(t, action)
			);
		default:
			return state;
	}
};

const visibilityFilter = (
	state = 'all',
	action
) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
};

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

export default todoApp;