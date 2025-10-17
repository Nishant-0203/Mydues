<div align="center">

# 💰 Mydues

### Split expenses smartly with friends

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Convex](https://img.shields.io/badge/Convex-Database-FF4785?style=for-the-badge)](https://convex.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge)](https://clerk.com/)

*Track shared expenses, split bills with precision, and settle up effortlessly with your friends, roommates, and family.*

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Documentation](#-documentation)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 💸 Smart Expense Splitting
- **Multiple split types**: Equal, percentage, or exact amounts
- **Category tracking**: 20+ expense categories (food, travel, utilities, etc.)
- **One-on-one & group expenses**: Track with individuals or entire groups
- **Receipt details**: Add descriptions, dates, and notes

</td>
<td width="50%">

### 👥 Group Management
- **Create unlimited groups**: Roommates, trips, events, and more
- **Role-based access**: Admin and member permissions
- **Member tracking**: See who joined when
- **Group balances**: Real-time debt calculations

</td>
</tr>
<tr>
<td width="50%">

### 💳 Settlement System
- **Easy payments**: Record settlements between users
- **Settlement history**: Track all past payments
- **Automated calculations**: Know exactly who owes what
- **Related expenses**: Link settlements to specific expenses

</td>
<td width="50%">

### 📊 Smart Dashboard
- **Balance overview**: See all your debts and credits at a glance
- **Expense summaries**: Monthly spending charts with Recharts
- **Quick actions**: Add expenses or settle up in one click
- **Group overview**: All your groups in one place

</td>
</tr>
<tr>
<td width="50%">

### 🤖 AI-Powered Insights
- **Monthly reports**: AI-generated spending analysis via Google Gemini
- **Personalized recommendations**: Get actionable financial advice
- **Spending patterns**: Identify trends and unusual expenses
- **Category breakdown**: See where your money goes

</td>
<td width="50%">

### 🔔 Smart Notifications
- **Payment reminders**: Daily automated emails for outstanding debts
- **Real-time updates**: Toast notifications for all actions
- **Email summaries**: Monthly spending insights delivered to your inbox
- **Customizable alerts**: Stay on top of your finances

</td>
</tr>
</table>

---

## 🚀 Tech Stack

<table>
<tr>
<td align="center" width="20%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br><strong>Next.js 15</strong>
<br><sub>App Router + RSC</sub>
</td>
<td align="center" width="20%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br><strong>React 19</strong>
<br><sub>Latest features</sub>
</td>
<td align="center" width="20%">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="48" height="48" alt="Tailwind" />
<br><strong>Tailwind CSS 4</strong>
<br><sub>Modern styling</sub>
</td>
<td align="center" width="20%">
<img src="https://avatars.githubusercontent.com/u/127933885?s=48&v=4" width="48" height="48" alt="Convex" />
<br><strong>Convex</strong>
<br><sub>Backend + DB</sub>
</td>
<td align="center" width="20%">
<img src="https://avatars.githubusercontent.com/u/49538330?s=48&v=4" width="48" height="48" alt="Clerk" />
<br><strong>Clerk</strong>
<br><sub>Authentication</sub>
</td>
</tr>
</table>

### Core Technologies

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15, React 19, Tailwind CSS 4, shadcn/ui, Radix UI, Framer Motion |
| **Backend** | Convex (serverless backend & database), Inngest (background jobs) |
| **Authentication** | Clerk (OAuth, email/password, session management) |
| **AI & Email** | Google Gemini API, Resend (transactional emails) |
| **Form Handling** | React Hook Form, Zod (validation) |
| **UI Components** | Lucide Icons, Recharts, React Day Picker, Sonner (toasts) |
| **Build Tools** | Turbopack, ESLint, PostCSS |

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** 20+ and npm/yarn/pnpm
- **Clerk** account ([clerk.com](https://clerk.com))
- **Convex** account ([convex.dev](https://convex.dev))
- **Resend** API key ([resend.com](https://resend.com))
- **Google Gemini** API key ([ai.google.dev](https://ai.google.dev))
- **Inngest** account ([inngest.com](https://inngest.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nishant-0203/Mydues.git
   cd Mydues
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   
   ```env
   # 🔐 Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
   CLERK_SECRET_KEY=sk_test_xxxxx
   
   # 🗄️ Convex Database
   NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
   
   # 📧 Resend Email Service
   RESEND_API_KEY=re_xxxxx
   
   # 🤖 Google Gemini AI
   GEMINI_API_KEY=AIzaSyxxxxx
   
   # ⚡ Inngest (optional - for local testing)
   INNGEST_SIGNING_KEY=signkey-xxxxx
   INNGEST_EVENT_KEY=your-event-key
   ```

4. **Initialize Convex**
   ```bash
   npx convex dev
   ```
   This will:
   - Create your Convex deployment
   - Generate the database schema
   - Provide your `NEXT_PUBLIC_CONVEX_URL`

5. **Configure Clerk**
   - Create a Clerk application
   - Enable email/password authentication
   - Add your Clerk keys to `.env.local`
   - Configure redirect URLs in Clerk dashboard

6. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

### 🌱 Seed Database (Optional)

To populate your database with sample data:

```bash
npx convex run seed:seedDatabase
```

This creates:
- Sample users
- Test groups
- Example expenses
- Mock settlements

---

## 📜 NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔐 Authentication & Security

**Clerk** handles authentication with route protection via `middleware.js`. Protected routes (`/dashboard`, `/expenses`, `/contacts`, `/groups`, `/person`, `/settlements`) require authentication. Public routes: `/`, `/sign-in`, `/sign-up`.

---

## 🗄️ Database Schema (Convex)

### Tables

#### 👤 **users**
```javascript
{
  name: string,
  email: string,
  tokenIdentifier: string,
  imageUrl?: string
}
```
**Indexes:** `by_token`, `by_email`, `by_name`  
**Search:** `search_name`, `search_email`

#### 💰 **expenses**
```javascript
{
  description: string,
  amount: number,
  category?: string,
  date: timestamp,
  paidByUserId: Id<"users">,
  splitType: "equal" | "percentage" | "exact",
  splits: [{
    userId: Id<"users">,
    amount: number,
    paid: boolean
  }],
  groupId?: Id<"groups">,
  createdBy: Id<"users">
}
```
**Indexes:** `by_group`, `by_user_and_group`, `by_date`

#### 👥 **groups**
```javascript
{
  name: string,
  description?: string,
  createdBy: Id<"users">,
  members: [{
    userId: Id<"users">,
    role: "admin" | "member",
    joinedAt: timestamp
  }]
}
```

#### 💳 **settlements**
```javascript
{
  amount: number,
  note?: string,
  date: timestamp,
  paidByUserId: Id<"users">,
  receivedByUserId: Id<"users">,
  groupId?: Id<"groups">,
  relatedExpenseIds?: Id<"expenses">[],
  createdBy: Id<"users">
}
```
**Indexes:** `by_group`, `by_user_and_group`, `by_reciever_and_group`, `by_date`

---

## ⚡ Background Jobs (Inngest)

### 📬 Daily Payment Reminders (`0 10 * * *`)
Sends automated emails to users with outstanding debts via Resend API.

### 📊 Monthly Spending Insights (`0 8 1 * *`)
AI-powered spending analysis using Google Gemini. Generates personalized monthly reports with category breakdowns, spending patterns, and recommendations.

**Setup:** Deploy app → Configure endpoint at Inngest dashboard → Enable cron permissions

---

## 🎨 UI & Styling

**Tailwind CSS 4** with PostCSS plugin for modern styling. **shadcn/ui** components built with Radix UI for accessibility. Purple/Blue gradient theme with Inter font. Includes Accordion, Avatar, Badge, Button, Calendar, Card, Dialog, Input, Select, Tabs, and more.

---

## � Expense Categories

Supports 20+ categories: 🍕 Food & Drink, ☕ Coffee, 🛒 Groceries, 🛍️ Shopping, ✈️ Travel, 🚗 Transportation, 🏠 Housing, 🎬 Entertainment, 🎟️ Tickets, 📡 Utilities, 💧 Water, 🎓 Education, 🏥 Health, ❤️ Personal, 🎁 Gifts, 📱 Technology, 💳 Bills & Fees, 👶 Baby & Kids, 🎵 Music, 📚 Books, 💼 General

---

## 🚀 Deployment

**Recommended Stack:** Vercel (Frontend) + Convex (DB) + Clerk (Auth) + Resend (Email) + Inngest (Cron)

**Steps:** Deploy to Vercel → Add env vars → Run `npx convex deploy` → Configure Clerk redirects → Set Inngest endpoint

**Checklist:** ✅ Environment variables ✅ Clerk redirects ✅ Convex deployed ✅ Inngest verified ✅ Cron jobs enabled

---

<div align="center">

## 📝 License

**Proprietary** — All rights reserved. Private project not licensed for public use.

---

**Built with ❤️ using Next.js, Convex, and modern web technologies**

⭐ Star this repo if you find it helpful!

</div>


