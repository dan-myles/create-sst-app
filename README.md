## Dependencies

- Node v22.x
- pnpm V10.x
- AWS CLI (with [credentials](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html))
- SST Tunnel

## Structure

```
├── apps
│   ├── argus - Main TRPC API
    ├── vanguard - Authentication API / Handles oAuth callbacks
│   └── vapor - Next.js app
├── packages
│   ├── api - TRPC type definitions
│   ├── auth - Better auth configuration
│   ├── common -  Shared utilities
│   └── db - Drizzle database schema & client
├── tooling
│   ├── eslint - Shared ESLint configurations
│   ├── prettier - Shared Prettier configurations
│   └── typescript - Shared TypeScript configurations
│
├── sst.config.ts - SST configuration (here is all of our infrastructure)
```
