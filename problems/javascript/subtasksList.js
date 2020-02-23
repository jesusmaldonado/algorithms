const tasks = [
  { id: 2, subTaskOf: 1, description: 'Brew coffee' },
  { id: 3, subTaskOf: 2, description: 'Boil water' },
  { id: 1, subTaskOf: null, description: 'Make breakfast' },
  { id: 4, subTaskOf: 2, description: 'Grind coffee beans' },
  { id: 5, subTaskOf: 2, description: 'Pour water over coffee grounds' }
];

class Task {
  constructor({id, description, subTaskOf}){
    this.id = id;
    this.subTaskOf = subTaskOf;
    this.description = description;
  }

  addChildren(task){
    if (!this.subTasks){
      this.subTasks = [];
    }
    this.subTasks.push(task);
  }
  includesTask(task){
    if (this.subTasks) {
      return this.subTasks.find(subTask => subTask.id === task.id);
    } else {
      return false;
    }
  }
}

function groupTasks(tasks) {
	const taskMap = {};
	tasks.forEach(({id, subTaskOf}) => {
		if (!taskMap[id]){
			taskMap[id] = [];
		}
    if (!taskMap[subTaskOf]) {
      taskMap[subTaskOf] = [];
    }
		if (subTaskOf){
			taskMap[subTaskOf].push(id);
		}
	});
	let resp = {};
  let taskClasses = tasks.map(task => new Task(task));
  for (let [key, subtaskIds] of Object.entries(taskMap)){
    if (subtaskIds.length){
        let subTasks = subtaskIds.map(tId => {
          let foundTask = taskClasses.find(task => {
            return String(task.id) === String(tId)
          });
          return foundTask;
        });
        let taskToAddSubChildrenTo = taskClasses.find(task => String(task.id) === String(key));
        subTasks.forEach((subTask) => {
          taskToAddSubChildrenTo.addChildren(subTask);
        });
    }
  }
  const a = taskClasses.filter((task) => {
    return !taskClasses.find(t => t.includesTask(task));
  })[0];
  const stringify = JSON.stringify(a);
  return JSON.parse(stringify);
}

console.log(groupTasks(tasks));
