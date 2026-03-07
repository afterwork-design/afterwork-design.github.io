# AGENTS.md - Development Guidelines for This Project

## Project Overview
- **Type**: Next.js 11 website with React 17 and TypeScript
- **Purpose**: Design resources navigation site
- **Stack**: Next.js, React, TypeScript, Chakra UI, Emotion, Framer Motion

---

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run dev:debug` | Debug mode on port 3100 |
| `npm run build` | Build for production |
| `npm run export` | Static export (SSG) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

**Note**: This project has **no test suite** configured. Do not add tests unless explicitly requested.

---

## Code Style Guidelines

### TypeScript
- Strict mode is enabled in `tsconfig.json`
- Always define types for function parameters and return values
- Use `interface` for object shapes, `type` for unions/aliases

### Imports
- Use `src/` alias for internal imports: `import TopBox from "src/components/topBox"`
- Order: React imports → External libraries → Internal components → Internal utils/types
- Example:
  ```typescript
  import React from "react";
  import {Box, Image, Text} from "@chakra-ui/react";
  import TopBox from "src/components/topBox";
  import {H1} from "src/components/primitives";
  import {projects} from "src/server";
  import {LayoutPage} from "../typing";
  ```

### Formatting
- Use **4 spaces** for indentation (not tabs)
- Use semicolons at the end of statements
- Put opening brace on same line: `const Foo = () => {`
- Use Prettier defaults for all other formatting

### Naming Conventions
- **Components**: PascalCase (`ProjectBox`, `TopBox`, `MemberBox`)
- **Files**: PascalCase for components (`.tsx`), camelCase for utilities (`.ts`)
- **Hooks**: camelCase starting with `use` (`useLocalSetting`)
- **Constants**: camelCase (`localCache`, `databaseName`)
- **Interfaces**: PascalCase (`LayoutPage`, `DatabaseOperation`)

### Component Structure
```typescript
import React from "react";
import {Box, Text} from "@chakra-ui/react";

const ComponentName = () => {
    return (
        <Box>
            <Text>Content</Text>
        </Box>
    );
};

export default ComponentName;
```

### Error Handling
- Use try/catch for async operations that may fail
- Catch blocks should return sensible defaults or log errors
- Example:
  ```typescript
  try {
      return JSON.parse(json);
  } catch {
      return defaultValue;
  }
  ```

### Chakra UI Patterns
- Use Chakra components directly (Box, Flex, Text, HStack, VStack, etc.)
- Apply styles via props: `<Box m="20px" p="10px">`
- Use `mt`, `mb`, `ml`, `mr` for margins, `pt`, `pb`, `pl`, `pr` for paddings
- Use `_hover` for hover states: `_hover={{ bg: "blue.500" }}`

### React Patterns
- Use functional components with arrow functions
- Use `React.useState` or import `useState` directly
- Use `React.useEffect` or import `useEffect` directly
- Destructure props when possible
- Use `useCallback` for functions passed as props

### Server-Side Considerations
- Check `typeof window === "undefined"` for SSR/SSG compatibility
- Use deferred loading for localStorage access
- Example:
  ```typescript
  const [value, setValue] = React.useState<T>(() => {
      if (typeof window === "undefined" || defer) {
          return defaultValue; // SSR/SSG
      }
      // client-side logic
  });
  ```

---

## ESLint Configuration
- Extends `next/core-web-vitals`
- `img` element rule is disabled (`@next/next/no-img-element: off`)
- Run `npm run lint` before committing

---

## Directory Structure
```
src/
  components/    # React components
  hooks/         # Custom React hooks
  pages/         # Next.js pages (_app.tsx, _document.tsx, index.tsx)
  server/        # Static data (JSON files)
  util/          # Utility functions
  style/         # Global CSS
  typing.ts      # TypeScript type definitions
```

---

## Adding New Features
1. Create component in appropriate `src/components/` directory
2. Import and use in relevant page (`src/pages/`)
3. Run `npm run lint` to check for errors
4. Run `npm run build` to verify build succeeds
