import something = module("./tasks");

var tm = new something.myNs.TaskManager();

tm.addTask({ title: "Hallo Basta", completed: false});
tm.addTask({title: "Spring 2013", description: "Konferenz in Darmstadt", completed: false});
tm.addTask({title: "jawohl", completed: false});

var task = new something.myNs.Task("Ein Task");
tm.addTask(task);

tm.showTasks();