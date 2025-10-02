# React + TypeScript + Vite

# Invoice App

A simple invoice app built with **React + Vite**.  
Implements Firebase authentication, mock APIs with MSW, real-time updates, and responsive UI based on the provided Figma design.

---

## Features

**Authentication** — Signup/Login with Firebase (Email/Password or Google)  
**Dashboard** — Invoice stats, recent invoices, and activities  
**Invoice Details** — Sender & customer info, payment info, line items, activity feed  
**Mock Backend** — API requests handled with [MSW](https://mswjs.io/)  
**Real-time updates** — Socket-based events for invoice updates (optional)  
**Testing** — Unit & integration tests with Vitest + React Testing Library  
**Responsive** — Works on desktop & mobile  
-**Error handling** — Invalid URLs, loading states

````js
1. Clone the repo
```bash
git clone <your-repo-url>
cd <repo>
````

2. Install dependencies

```bash
npm install

```

3. Setup environment variables

```bash
VITE_FIREBASE_API_KEY=AIzaSyDQhEZ2OGyPTw7Jr1H2zg6DDQUbom5mpgo
VITE_FIREBASE_AUTH_DOMAIN=invoiceapp-41af8.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=invoiceapp-41af8
VITE_FIREBASE_STORAGE_BUCKET=invoiceapp-41af8.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=931722537485
VITE_FIREBASE_APP_ID=1:931722537485:web:a3a753de689f26c77ec344
VITE_FIREBASE_MEASUREMENT_ID=G-DBRLQ9LQ7F
NODE_ENV=development

```

4. Run the project

```bash
npm run dev
```

5. Run tests:

```bash
npm run test
```

```

```
