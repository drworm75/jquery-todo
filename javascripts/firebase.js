var FbApi = (() => {
	let todos = [];

	return {
		todoGetter : () => {
			return todos;
		},
		setTodos : (newArray) => {
			todos = newArray;
		},
		setSingleTodo: (newObject) => {
			todos.push(newObject);
		},	
		setChecked: (itemid) => {
			const position = itemid.split("item")[1]; // ['', 0]
			todos[position].isCompleted = !todos[position].isCompleted;

		}
	};

})(FbApi || {});


