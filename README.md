# An invoice app built with React + TypeScript + Vite

---

## Features

**Authentication** — Signup/Login with Firebase (Email/Password or Google)  
**Dashboard** — Invoice stats, recent invoices, and activities  
**Invoice Details** — Sender & customer info, payment info, and invoice activities
**Mock Backend** — API requests handled with [MSW](https://mswjs.io/)  
**Testing** — Unit with Vitest + React Testing Library

**Responsive** — Works on desktop & mobile

1. Clone the repo

```bash
git clone <https://github.com/theyinda/Invoice-App.git>
cd <Invoice-App>

```

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

```

4. Run the project

```bash
npm run dev
```

5. Run tests:

```bash
npx vitest run
```

6. If you don't want to create a new account, You can sign up via google sso OR this test details below:

```bash
 You can login via google
   OR
emai: test1@gmail.com
password: 1234567
```

7. When you login successfully, it brings you to the dashboard page

![Dashboard Screenshot](/public/dashboard.png)

8. Click on any of the recent invoices to view the invoice details of that particular invoice clicked:

![Invoice Details Screenshot](/public/details.png)
