# iCalendar - Online Scheduling Platform

iCalendar is a modern SaaS platform that simplifies appointment scheduling by providing users with personalized booking pages integrated with Google Calendar.

## 🌟 Features

### For Service Providers
- **Custom Booking Page**: Create a personalized scheduling page with your profile and availability
- **Google Calendar Integration**: Seamlessly sync with Google Calendar to manage appointments
- **Automated Scheduling**: Reduce manual work with automatic appointment confirmations
- **Dashboard**: Manage your profile, appointments, and settings
- **Pro Plan Features**: 
  - Stripe payment integration
  - Enhanced customization options
  - Advanced analytics

### For Clients
- **Easy Booking Process**: Simple interface to schedule appointments
- **Google Meet Integration**: Automatic video conference links for virtual meetings
- **Email Notifications**: Receive confirmations and reminders
- **Multiple Payment Options**: Secure payments through Stripe (Pro plan)

## 🛠️ Technology Stack

- **Frontend**:
  - Next.js 13+ (App Router)
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components
  - React Hook Form
  - Zod validation

- **Backend**:
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL
  - NextAuth.js for authentication

- **Integrations**:
  - Google Calendar API
  - Google Meet
  - Stripe Payment Gateway

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
STRIPE_API_KEY=
```

4. Run the development server:

```bash
pnpm dev
```
## 💻 Environment Setup

### Prerequisites
- Node.js 16+
- PostgreSQL database
- Google Cloud Platform account
- Stripe account (for payment processing)

## 🔒 Security Features

- Secure authentication with NextAuth.js
- Data encryption
- GDPR compliant data handling
- Secure payment processing through Stripe

## 📱 Responsive Design

The platform is fully responsive and works seamlessly across:
- Desktop browsers
- Tablets
- Mobile devices

## 🌐 Localization

- Currently available in Portuguese
- Prepared for multi-language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Authors

Developed by [Wired3 Tech](https://wired3.tech)

---

For more information, visit [icalendar.online](https://icalendar.online)