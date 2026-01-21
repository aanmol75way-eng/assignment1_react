# React + TypeScript + Vite


src
1. components             # Reusable UI components
   I)Header.tsx           # Top navigation bar
   II) Sidebar.tsx         # Dashboard side navigation
2. layouts                # Page structure wrappers
   I) PublicLayout.tsx    # Public pages layout (Home, About, Services)
   II) AuthLayout.tsx      # Authentication pages layout (Login, Register)
   III) DashboardLayout.tsx # Protected dashboard layout
3. pages                  # Route-level screens
   I)Home.tsx
   II) About.tsx
   III) Services.tsx
   IV)Contact.tsx
   V) Login.tsx
   VI) Register.tsx
   VII) Dashboard.tsx
   VII) NotFound.tsx        # 404 pag
4.index.css                 # Global styles and theme variables
  I) main.tsx                # Application entry point
  II)router.tsx              # Centralized routing configuration
