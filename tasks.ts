export module myNs {

	export interface ITask {
		title: string;
		description?: string;
		completed: bool;
	}

	// hi
	export class Task implements ITask {
		constructor(public title: string) {
			this.completed = true;
		}
		public completed: bool;
	}

	export interface ITaskManager {
		addTask: (task:ITask) => void;
		showTasks: () => void;
	}


	export class TaskManager implements ITaskManager {

		private tasks = [];

	 	addTask(task: ITask) {
			this.tasks.push(task.title);
		}

		showTasks() {
			this.tasks.forEach(function(task) {
				console.log(task);
			});
		}
	}
}