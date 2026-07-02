# AGENTS.md

## Overview
A minimal Hello World web application built on the UiPath Coded Web App scaffold. It demonstrates the PKCE OAuth authentication gate and renders a simple greeting card once the user is signed in.

## Tech Stack
- React 18 + TypeScript
- Vite (with `base: './'` and `path-browserify` alias)
- Tailwind CSS
- `@uipath/uipath-typescript` SDK (PKCE OAuth via `AuthProvider` / `useAuth`)

## Features
- UiPath PKCE OAuth sign-in gate
- Authenticated view showing a centered "Hello, World!" card

## Project Structure
```
src/
  App.tsx          — Root component: AuthProvider wrapper + SignInGate with Hello World UI
  hooks/
    useAuth.tsx    — PKCE OAuth hook (AuthProvider, useAuth)
  main.tsx         — Vite entry point
uipath.json        — Client ID, scopes, org/tenant config (injected as meta tags by Vite plugin)
vite.config.ts     — Vite config with base './', globalThis alias, coded-apps plugin
```

## Data & Integrations
No external data sources or UiPath artifacts are used. Authentication relies on the UiPath identity service via PKCE OAuth configured in `uipath.json`.

## Conventions
- Tailwind utility classes for all styling; no separate CSS files beyond `index.css`
- Service classes instantiated via constructor DI (`new Service(sdk)`) inside components
- `useAuth()` is the sole source of the SDK instance

## Changelog

### 2026-07-02 — Initial build
Created a Hello World app: replaced the scaffold placeholder with a centered greeting card rendered inside the authenticated branch of `SignInGate`.