# 🧩 FreeERP

**FreeERP** is a modular and lightweight **ERP frontend** built with **Angular 18**.  
It aims to provide a flexible foundation for business process automation, including task management, project tracking, and workflow control — all within a clean, responsive interface.

---

## 🚀 Features

- ⚙️ **Modular Architecture** — Built with Angular standalone components for high scalability.  
- 💼 **Task and Project Management** — Create, view, and manage tasks with real-time updates.  
- 🧭 **Signal-based State Management** — Uses Angular Signals for reactive and efficient UI updates.  
- 🎨 **Modern UI** — Clean, responsive design with smooth animations and CSS transitions.  
- 🔍 **Type-safe Data Handling** — Strong TypeScript and Enum usage for consistent data modeling.  
- 🧪 **Fully Tested** — Unit tests with Jasmine and Karma; E2E-ready architecture.  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Angular 18** | Main frontend framework |
| **TypeScript** | Type-safe development |
| **RxJS / Signals** | State and reactivity management |
| **HTML / SCSS** | UI structure and styling |
| **Jasmine / Karma** | Unit testing |
| **E2E Framework (Customizable)** | For end-to-end testing setup |

---
## Project Structure
free-erp/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── project/
│ │ │ │ ├── entity/ # Entities and project-related models
│ │ │ │ ├── project-main/ # Main project management page
│ │ │ │ ├── project-overview/ # Project detail and overview component
│ │ │ │ └── projects-dashboard/ # Dashboard showing all projects
│ │ │ │
│ │ │ ├── service/ # Shared business logic and data services
│ │ │ ├── store/ # Signal-based state management
│ │ │ ├── task/ # Task creation and management components
│ │ │ └── ui/ # UI utilities (modals, toasts, dropdowns, etc.)
│ │ │
│ │ ├── routes.ts # Application routing configuration
│ │
│ ├── assets/ # Static assets (icons, images, etc.)
│ ├── styles/ # Global SCSS styles and variables
│ ├── main.ts # Application bootstrap entry
│ ├── index.html # Main HTML entry point
│ └── environments/ # Environment configuration files
│
├── angular.json # Angular workspace configuration
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── README.md # Project documentation
└── dist/ # Production build output                       # Production build output
---

## 💻 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/free-erp.git
cd free-erp

