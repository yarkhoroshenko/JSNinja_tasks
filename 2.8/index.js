function tasks (arr) {
	var taskBoard = [];
	var task;
	var taskNames;
	function sortTasks(a, b) {
		var fin1 = a.start + a.duration;
		var fin2 = b.start + b.duration; 
		if (fin1 > fin2) return -1;
		if (fin1 < fin2) return 1;
	}
	arr.sort(sortTasks);
	while (arr.length !== 0) {
		task = arr.pop();
		taskBoard.push(task.name);
		while (arr.length !== 0 && arr[arr.length - 1].start <= (task.start + task.duration)) {
			arr.pop();
		}
	}
	return taskBoard;
}

window.tasks = tasks;

console.log(
	tasks(
		[{ name: 'Task1', start: 0, duration: 10 }, 
		{ name: 'Task2', start: 15, duration: 20 }, 
		{ name: 'Task3', start: 0, duration: 10 }, 
		{ name: 'Task4', start: 5, duration: 20 }, 
		{ name: 'Task5', start: 25, duration: 20 }, 
		{ name: 'Task6', start: 10, duration: 20 }, 
		{ name: 'Task7', start: 15, duration: 10 }, 
		{ name: 'Task8', start: 5, duration: 30 }, 
		{ name: 'Task9', start: 35, duration: 2 }])
	);