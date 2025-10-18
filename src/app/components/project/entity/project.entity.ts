export interface Project {
    creationDate: Date;
    name: string;
    dueDate: string;
    description: string;
    id: string;
}

export const projects: Project[] = [
  {
    id: "ABCDE",
    creationDate: new Date('2025-01-10'),
    name: 'Inventory Management System',
    dueDate: '2025-03-15',
    description: 'A system to track stock levels, purchases, and deliveries.'
  },
  {
    id: "ABCDEX",
    creationDate: new Date('2025-02-05'),
    name: 'Customer Portal',
    dueDate: '2025-05-01',
    description: 'A self-service web portal for customers to view orders and invoices.'
  },
  {
    id: "PRJ001",
    creationDate: new Date('2025-03-01'),
    name: 'Employee Scheduling App',
    dueDate: '2025-06-10',
    description: 'An app to manage employee shifts, availability, and attendance.'
  },
  {
    id: "PRJ002",
    creationDate: new Date('2025-03-20'),
    name: 'Expense Tracker',
    dueDate: '2025-06-30',
    description: 'A financial tracking tool to record, categorize, and visualize company expenses.'
  },
  {
    id: "PRJ003",
    creationDate: new Date('2025-04-02'),
    name: 'Quality Control Dashboard',
    dueDate: '2025-07-15',
    description: 'A dashboard for monitoring laboratory test quality metrics and audit logs.'
  },
  {
    id: "PRJ004",
    creationDate: new Date('2025-04-18'),
    name: 'Data Integration Service',
    dueDate: '2025-08-05',
    description: 'A backend service to synchronize data between internal systems and external APIs.'
  }
];