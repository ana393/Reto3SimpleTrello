const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Learn React" },
    "task-2": { id: "task-2", content: "Do a project with react hooks" },
    "task-3": { id: "task-3", content: "do a trello-like project" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "planning",
      tasksOrder: ["task-1", "task-2"],
      isEditing: false,
    },
    "column-2": {
      "column-2": {
        id: "column-2",
        title: "planning",
        tasksOrder: ["task-3"],
        isEditing: false,
      },
    },
    columnsOrder: ["column-1", "column-2"],
  },
};
export default initialData;
