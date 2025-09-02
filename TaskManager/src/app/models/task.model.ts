// models/task.model.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'done' | 'blocked';
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  subtasks?: { id: number; title: string; done: boolean }[];
}
