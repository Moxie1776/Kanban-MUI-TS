type initialDataType = {
  tasks: TasksProp[];
  columns: ColumnsProp[];
  columnOrder: string[];
};

export interface TasksProp {
  id: string;
  content: string;
}
export interface ColumnsProp {
  id: string;
  title: string;
  taskIds: string[];
}

const initialData: initialDataType = {
  tasks: [
    { id: 'task-1', content: 'Take out the garbage' },
    { id: 'task-2', content: 'Watch my favorite show' },
    { id: 'task-3', content: 'Charge my phone' },
    { id: 'task-4', content: 'Cook dinner' },
    { id: 'task-5', content: 'Do dishes' },
    { id: 'task-6', content: 'Make love' },
  ],
  columns: [
    {
      id: 'column-1',
      title: 'To do 1',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    {
      id: 'column-2',
      title: 'To do 2',
      taskIds: ['task-5', 'task-6'],
    },
  ],
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2'],
};

export default initialData;
