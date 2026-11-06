# ClearFlow Platform

Shared multi-product backend foundation for ClearFlow.

## Initial foundation

- Payload CMS v3
- PostgreSQL
- TypeScript
- Official Payload MCP plugin
- Independent product PWAs connect to this shared backend.

## Repository layout

- `backend/`: shared Payload application
- `products/`: future product-specific PWA source trees
- `packages/`: future shared schemas and capabilities

## Deployment

The Payload backend will be deployed with Coolify. PostgreSQL will run as a separate persistent service in the same Coolify environment.

This repository contains the ClearFlow application built on Payload. It does not contain a fork of the Payload framework.
