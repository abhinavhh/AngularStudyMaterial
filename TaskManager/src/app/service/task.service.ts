import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskServive{

    tasks: Task[] = [
        {
        id: 1,
        title: 'Design homepage wireframe',
        description: 'Create initial wireframes for the new marketing homepage.',
        status: 'in_progress',
        priority: 'high',
        dueDate: '2025-09-10',
        tags: ['design', 'frontend'],
        createdAt: '2025-08-20T10:30:00.000Z',
        updatedAt: '2025-08-25T12:15:00.000Z',
        subtasks: [
            { id: 101, title: 'Header layout', done: true },
            { id: 102, title: 'Hero section', done: false }
        ]
        },
        {
        id: 2,
        title: 'Set up JSON Server for dev',
        description: 'Install and configure json-server with db.json and scripts.',
        status: 'todo',
        priority: 'medium',
        dueDate: '2025-09-05',
        tags: ['devops'],
        createdAt: '2025-08-22T09:00:00.000Z'
        },
        {
        id: 3,
        title: 'Implement authentication',
        description: 'Add login/register pages, JWT handling on backend or Firebase auth.',
        status: 'blocked',
        priority: 'high',
        dueDate: '2025-09-01',
        tags: ['backend', 'auth'],
        createdAt: '2025-08-18T08:20:00.000Z'
        },
        {
        id: 4,
        title: 'Write unit tests for Tasks service',
        description: 'Cover CRUD operations with Jasmine + Karma / Jest.',
        status: 'todo',
        priority: 'low',
        tags: ['testing'],
        createdAt: '2025-08-26T14:00:00.000Z'
        },
        {
        id: 5,
        title: 'Create task details page',
        description: 'Show full task info + edit form using reactive forms.',
        status: 'in_progress',
        priority: 'medium',
        dueDate: '2025-09-12',
        tags: ['frontend'],
        createdAt: '2025-08-24T11:30:00.000Z',
        updatedAt: '2025-08-28T16:45:00.000Z'
        },
        {
        id: 6,
        title: 'Migrate tasks to Firebase (optional)',
        description: 'Evaluate Firestore structure and implement migration script.',
        status: 'todo',
        priority: 'medium',
        createdAt: '2025-08-30T07:50:00.000Z'
        },
        {
        id: 7,
        title: 'Release v0.1',
        description: 'Prepare release notes and deploy to staging.',
        status: 'done',
        priority: 'high',
        createdAt: '2025-08-10T10:00:00.000Z',
        updatedAt: '2025-08-15T18:30:00.000Z',
        tags: ['release']
        },
        {
        id: 8,
        title: 'Customer feedback review',
        description: 'Collect feedback from beta users and create tasks.',
        status: 'todo',
        priority: 'low',
        tags: ['research'],
        createdAt: '2025-08-29T12:00:00.000Z'
        }
    ];
    
    getTasks() {

    }

    getTaskById(id: string) {

    }

    createTask() {

    }

    updateTask() {

    }

    deleteTask() {

    }
}