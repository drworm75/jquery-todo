$(document).ready(function() {
	$('#new-item').click(() => {
		$('.list-container').addClass('hide');
		$('.new-container').removeClass('hide');
	});

	$('#list-items').click(() => {
		$('.new-container').addClass('hide');
		$('.list-container').removeClass('hide');
	});

	FbApi.getTodos().then(() => {
		FbApi.writeDom();
		countTask();

	})
	.catch((error) => {
		console.log("getTodosError", error);
	});

	//add todo
	$('#add-todo-button').click(() => {
		let newTodo = {
			isCompleted: false,
			task: $('#add-todo-text').val()
		};

		console.log("newTodo",newTodo);
		FbApi.addTodo(newTodo).then(() => {
			console.log('called');
			$('#add-todo-text').val("");
			$('.new-container').addClass('hide');
			$('.list-container').removeClass('hide');
			FbApi.writeDom();
			countTask();
		}).catch((error) => {
			console.log("addTodo error", error);
		});
	});




	//delete todo




	//edit todo 




	//complete todos
	$('.main-container').on('click', 'input[type="checkbox"]', (event) => {
		console.log("event", event.target.id);
		FbApi.checker(event.target.id).then(() => {
			FbApi.writeDom();
			countTask();
		}).catch((error) => {
			console.log("checker error", error);
		});
	});


	let countTask = () => {
		let remainingTask = $('#incomplete-tasks li').length;
		$('#counter').hide().fadeIn(3000).html(remainingTask);
	};

}); 

