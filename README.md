# Monorepo Resource Management Platform

A modern, scalable monorepo built with Turborepo, featuring advanced resource exploration and notification management capabilities. This platform demonstrates best practices for shared component libraries, responsive design, and efficient development workflows.

## ✨ Features

### 🔍 Resource Explorer
- **Advanced Filtering**: Filter shared resources by status (Stable, Beta, Planned) and tags
- **Dynamic Sorting**: Sort resources by title, status, or owner
- **Interactive UI**: Real-time filtering with visual feedback and hover effects
- **Mobile Responsive**: Optimized for all device sizes with adaptive layouts

### 🔔 Notification Center
- **Smart Notifications**: Display contextual notifications related to shared resources
- **Type Filtering**: Filter notifications by type (Update, Alert, Info)
- **Resource Linking**: Direct connections between notifications and relevant resources
- **Dismiss Management**: Interactive notification dismissal with state management

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Backdrop blur effects and translucent elements
- **Responsive Layouts**: Mobile-first approach with multiple breakpoints
- **Smooth Animations**: CSS transitions and hover effects
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🏗️ Architecture

### Project Structure
```
monorepo/
├── apps/
│   ├── docs/                 # Documentation app with Resource Explorer
│   │   ├── app/             # Next.js app router
│   │   ├── system/          # Feature components (Configuration/Assembly)
│   │   └── package.json
│   └── web/                 # Main web app with Notification Center
│       ├── app/             # Next.js app router
│       ├── system/          # Feature components (Configuration/Assembly)
│       └── package.json
├── packages/
│   ├── ui/                  # Shared UI components and utilities
│   │   ├── src/
│   │   │   ├── components/  # Reusable React components
│   │   │   ├── utils.ts     # Utility functions
│   │   │   └── shared-resources.ts
│   │   └── package.json
│   ├── eslint-config/       # ESLint configurations
│   └── typescript-config/   # TypeScript configurations
├── package.json
├── turbo.json              # Turborepo configuration
└── pnpm-workspace.yaml     # Workspace configuration
```

### Design Principles
- **Configuration/Assembly Pattern**: System folders contain feature assembly using shared components
- **Shared Component Library**: Centralized UI components with consistent theming
- **Type Safety**: 100% TypeScript coverage across all packages
- **Performance**: Optimized builds with Turborepo caching and Next.js optimizations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd monorepo
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development servers**
   ```bash
   pnpm dev
   ```

4. **Open applications**
   - Docs App: http://localhost:3000 (Resource Explorer)
   - Web App: http://localhost:3001 (Notification Center)

## 📦 Available Scripts

### Development
```bash
# Start all applications in development mode
pnpm dev

# Start specific app
pnpm dev --filter=docs
pnpm dev --filter=web

# Start with Turborepo (if installed globally)
turbo dev
turbo dev --filter=docs
```

### Building
```bash
# Build all applications
pnpm build

# Build specific app
pnpm build --filter=docs
pnpm build --filter=web

# Build with Turborepo
turbo build
turbo build --filter=docs
```

### Code Quality
```bash
# Lint all packages
pnpm lint

# Type checking
pnpm type-check

# Format code
pnpm format
```

## 🛠️ Technology Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with modern features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Development Tools
- **[Turborepo](https://turborepo.dev/)** - High-performance build system
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Prettier](https://prettier.io/)** - Code formatting
- **[pnpm](https://pnpm.io/)** - Fast, disk-efficient package manager

### UI & Styling
- **CSS Modules** - Scoped styling with modern CSS features
- **Responsive Design** - Mobile-first approach with fluid layouts
- **Glassmorphism** - Modern translucent UI effects
- **Custom Properties** - Consistent design tokens

## 📱 Responsive Design

The platform is fully responsive with breakpoints optimized for:
- **Mobile**: < 640px - Single column layouts, touch-friendly controls
- **Tablet**: 640px - 1024px - Balanced grids and navigation
- **Desktop**: > 1024px - Full feature layouts with hover states

## 🔧 Development Workflow

### Adding New Features
1. Create feature component in `apps/{app}/system/`
2. Import from shared UI package (`@repo/ui`)
3. Add responsive styles in component CSS modules
4. Update app page to include new feature
5. Test across all breakpoints

### Component Development
- Use shared components from `@repo/ui`
- Follow TypeScript strict mode
- Implement responsive design patterns
- Add proper accessibility attributes

### Code Quality
- Pre-commit hooks ensure code quality
- Automated linting and type checking
- Consistent formatting with Prettier
- Comprehensive test coverage (when implemented)

## 📚 Key Components

### Shared UI Library (`@repo/ui`)
- **Components**: Button, Card, Panel, Tag, Code
- **Utilities**: Filtering, sorting, formatting functions
- **Data**: Shared resource definitions and mock data
- **Styling**: Consistent design system and themes

### Feature Components
- **ResourceExplorer**: Advanced filtering and sorting interface
- **NotificationCenter**: Notification management with state handling

## 🚀 Deployment

### Build Optimization
- Turborepo remote caching for faster builds
- Next.js static generation and optimization
- Code splitting and lazy loading
- Image optimization and CDN integration

### Environment Setup
```bash
# Production build
pnpm build

# Preview production build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines
- Follow existing code style and patterns
- Add TypeScript types for new features
- Include responsive design considerations
- Update documentation for new features
- Test across different devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Turborepo](https://turborepo.dev/) for optimal performance
- UI inspired by modern design systems and glassmorphism trends
- Responsive design patterns from industry best practices
- TypeScript integration for robust development experience