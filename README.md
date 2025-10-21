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

## 💻 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/free-erp.git
cd free-erp


# 🧭 Project Structure
free-erp/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable and standalone UI components
│   │   ├── pages/               # Feature pages (Dashboard, Projects, Tasks, etc.)
│   │   ├── store/               # Signal-based UI and data stores
│   │   ├── services/            # Business logic and API interactions
│   │   ├── models/              # Entities, enums, and interfaces
│   │   └── app.config.ts        # Application-level configuration
│   │
│   ├── assets/                  # Static resources (images, icons, etc.)
│   ├── environments/            # Environment configuration files
│   ├── main.ts                  # Application bootstrap entry point
│   ├── styles/                  # Global styles and variables
│   └── index.html               # Main HTML file
│
├── .angular/                    # Angular build cache
├── angular.json                 # Angular project configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── README.md                    # Project documentation
└── dist/                        # Production build output