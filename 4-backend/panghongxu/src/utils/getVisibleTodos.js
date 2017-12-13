const getVisibleTodos = (
	todolist,
	filter
) => {
	switch (filter) {
		case 'all':
			return todolist;
		case 'active':
			return todolist.filter(
				t => t.status==="complete"
			);
		case 'completed':
			return todolist.filter(
				t => t.status==="active"
			);
		default:
			return todolist;
	}
}

export default getVisibleTodos;