# React + TypeScript + Vite


src/
|  assets/                 # Static files (images, icons, fonts)
│
├── components/             # Reusable UI components
│   ├── Header.tsx          # Top navigation bar
│   └── Sidebar.tsx         # Dashboard side navigation
│
├── layouts/                # Page structure wrappers
│   ├── PublicLayout.tsx    # Public pages layout (Home, About, Services)
│   ├── AuthLayout.tsx      # Authentication pages layout (Login, Register)
│   └── DashboardLayout.tsx # Protected dashboard layout
│
├── pages/                  # Route-level screens
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Dashboard.tsx
│   └── NotFound.tsx        # 404 page
│              
│
├── index.css               # Global styles and theme variables
├── main.tsx                # Application entry point
└── router.tsx              # Centralized routing configuration
