// ----------------------------------------------------------------------

export type KanbanState = {
  isLoading: boolean;
  error: Error | string | null;
  board: {
    cards: Record<string, KanbanCard>;
    columns: Record<string, KanbanColumn>;
    columnOrder: string[];
  };
};

export type CardComment = {
  id: string;
  avatar: string;
  name: string;
  createdAt: Date | string | number;
  messageType: 'image' | 'text';
  message: string;
};

export type Assignee = {
  id: string;
  avatar: string;
  name: string;
};

export type KanbanCard = { id: string; content: string };

export type KanbanColumn = {
  id: string;
  title: string;
  taskIds: string[];
};

export type KanbanBoard = {
  cards: KanbanCard[];
  columns: KanbanColumn[];
  columnOrder: string[];
};
