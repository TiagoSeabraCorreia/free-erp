
export enum TaskState {
  ONGOING = 'In Progress',
  DONE = 'Done',
  TODO = 'Todo'
}



export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskState;
  dueDate: string;
  assignedTo?: string;
  createdAt: Date;
}

export const tasks: Task[] = [
  {
    id: 'TSK001',
    projectId: 'PRJ006',
    title: 'Set up database schema',
    description: 'Create collections and indexes for project management.',
    status: TaskState.DONE,
    dueDate: '2025-02-10',
    createdAt: new Date('2025-01-05'),
  },
  {
    id: 'TSK002',
    projectId: 'PRJ006',
    title: 'Implement authentication',
    description: 'Add login and role-based access control.',
    status: TaskState.ONGOING,
    dueDate: '2025-02-28',
    createdAt: new Date('2025-01-12'),
  },
  {
    id: 'TSK003',
    projectId: 'PRJ006',
    title: 'Design API endpoints',
    description: 'Document REST API routes for task and project management.',
    status: TaskState.TODO,
    dueDate: '2025-03-05',
    createdAt: new Date('2025-01-15'),
  },
  {
    id: 'TSK004',
    projectId: 'PRJ006',
    title: 'Integrate email notifications',
    description: 'Send task update and deadline reminder emails using Nodemailer.',
    status: TaskState.TODO,
    dueDate: '2025-03-12',
    createdAt: new Date('2025-01-20'),
  },
  {
    id: 'TSK005',
    projectId: 'PRJ006',
    title: 'Implement activity logging',
    description: 'Track user activity for audit purposes in MongoDB.',
    status: TaskState.ONGOING,
    dueDate: '2025-03-01',
    createdAt: new Date('2025-01-22'),
  },
  {
    id: 'TSK006',
    projectId: 'PRJ006',
    title: 'Create project overview dashboard',
    description: 'Display project progress, members, and tasks in Angular.',
    status: TaskState.TODO,
    dueDate: '2025-03-15',
    createdAt: new Date('2025-01-25'),
  },
  {
    id: 'TSK007',
    projectId: 'PRJ006',
    title: 'Implement file uploads',
    description: 'Allow users to upload attachments for each task.',
    status: TaskState.TODO,
    dueDate: '2025-03-20',
    createdAt: new Date('2025-01-28'),
  },
  {
    id: 'TSK008',
    projectId: 'PRJ006',
    title: 'Add search functionality',
    description: 'Enable filtering and searching tasks by title, status, and user.',
    status: TaskState.ONGOING,
    dueDate: '2025-03-25',
    createdAt: new Date('2025-02-01'),
  },
  {
    id: 'TSK009',
    projectId: 'PRJ006',
    title: 'Configure CI/CD pipeline',
    description: 'Set up GitHub Actions for linting, testing, and deployment.',
    status: TaskState.TODO,
    dueDate: '2025-04-01',
    createdAt: new Date('2025-02-05'),
  },
  {
    id: 'TSK010',
    projectId: 'PRJ006',
    title: 'Create user profile page',
    description: 'Show user details, assigned tasks, and recent activity.',
    status: TaskState.ONGOING,
    dueDate: '2025-03-22',
    createdAt: new Date('2025-02-06'),
  },
  {
    id: 'TSK011',
    projectId: 'PRJ006',
    title: 'Implement project invitations',
    description: 'Allow project admins to invite new members via email.',
    status: TaskState.TODO,
    dueDate: '2025-04-05',
    createdAt: new Date('2025-02-08'),
  },
  {
    id: 'TSK012',
    projectId: 'PRJ006',
    title: 'Add dark mode support',
    description: 'Implement a theme toggle in the frontend.',
    status: TaskState.TODO,
    dueDate: '2025-04-10',
    createdAt: new Date('2025-02-10'),
  },
  {
    id: 'TSK013',
    projectId: 'PRJ006',
    title: 'Write unit tests for services',
    description: 'Cover business logic with Jest unit tests.',
    status: TaskState.ONGOING,
    dueDate: '2025-03-18',
    createdAt: new Date('2025-02-12'),
  },
  {
    id: 'TSK014',
    projectId: 'PRJ006',
    title: 'Conduct integration tests',
    description: 'Test communication between API and frontend.',
    status: TaskState.TODO,
    dueDate: '2025-04-15',
    createdAt: new Date('2025-02-15'),
  },
  {
    id: 'TSK015',
    projectId: 'PRJ006',
    title: 'Set up Docker environment',
    description: 'Containerize backend and frontend services for easier deployment.',
    status: TaskState.DONE,
    dueDate: '2025-02-25',
    createdAt: new Date('2025-01-10'),
  },
  {
    id: 'TSK016',
    projectId: 'PRJ006',
    title: 'Implement WebSocket notifications',
    description: 'Use NestJS WebSocket gateway for real-time updates.',
    status: TaskState.TODO,
    dueDate: '2025-04-12',
    createdAt: new Date('2025-02-18'),
  },
  {
    id: 'TSK017',
    projectId: 'PRJ006',
    title: 'Add task comments feature',
    description: 'Allow users to discuss progress on tasks with threaded comments.',
    status: TaskState.ONGOING,
    dueDate: '2025-03-30',
    createdAt: new Date('2025-02-20'),
  },
  {
    id: 'TSK018',
    projectId: 'PRJ006',
    title: 'Optimize database queries',
    description: 'Add indexes and review aggregation pipelines for performance.',
    status: TaskState.TODO,
    dueDate: '2025-04-08',
    createdAt: new Date('2025-02-22'),
  },
  {
    id: 'TSK019',
    projectId: 'PRJ006',
    title: 'Implement password reset',
    description: 'Add functionality for users to reset forgotten passwords securely.',
    status: TaskState.TODO,
    dueDate: '2025-03-28',
    createdAt: new Date('2025-02-25'),
  },
  {
    id: 'TSK020',
    projectId: 'PRJ006',
    title: 'Prepare documentation',
    description: 'Write README, API reference, and deployment guide.',
    status: TaskState.TODO,
    dueDate: '2025-04-20',
    createdAt: new Date('2025-02-28'),
  },
];