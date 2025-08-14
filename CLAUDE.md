# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 18 + TypeScript template project with Ant Design, Jotai for state management, and React Router for routing. It includes a complete login flow and basic application structure.

## Common Development Commands

- Start development server: `yarn start`
- Build for production: `yarn build`
- Serve built files: `yarn serve`
- Lint code: `yarn lint`
- Fix linting issues: `yarn lint-fix`
- Clean build directory: `yarn clean`

## Code Architecture

### Frontend Stack
- React 18 with TypeScript
- Ant Design for UI components
- Jotai for state management
- React Router for routing
- Axios for HTTP requests
- Webpack for bundling

### Project Structure
- `src/` - Main source code
  - `components/` - Reusable UI components
  - `layouts/` - Page layout components
  - `pages/` - Page components
  - `router/` - Routing configuration
  - `services/` - API service functions
  - `store/` - Global state management with Jotai
  - `utils/` - Utility functions
  - `hooks/` - Custom React hooks

### Key Patterns

1. **API Requests**: All API calls use Axios through `src/utils/axios.ts` which provides request/response interceptors and standardized response types (`Result<T>` and `Pager<T>`).

2. **API Request Organization**: All API requests should be defined in the `services/` directory with appropriate service files.

3. **Request Utilities**: When making requests and handling asynchronous operations, prefer using tools from the `ahooks` library.

4. **State Management**: Uses Jotai atoms for global state management. User state is managed in `src/store/user.ts`.

5. **Routing**: Uses React Router with a centralized configuration in `src/router/routerConfig.tsx`.

6. **Authentication**: Login flow with token management and automatic redirect for authenticated routes.

## TypeScript Type Design

- Interface return data wrapper structures and pagination wrapper structures use `Result` and `Pager` TypeScript types
- APIs use POST method calls, with interface paths unified as '/cosy/deleteDept' where deleteDept is the backend JS filename without version and suffix