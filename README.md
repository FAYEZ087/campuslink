# 🎓 Hallway

> **The exclusive 1-on-1 video chat platform for verified college students across India.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3FCF8E?logo=supabase)](https://supabase.com/)

Hallway is a Next.js-based web application that enables random video chat exclusively for verified college and university students. Built with safety, privacy, and meaningful connections in mind.

---

## ✨ Features

### 🎯 Core Functionality
| Feature | Description |
|---------|-------------|
| 🛡️ **Verified Students Only** | Authentication through official `.edu`, `.ac.in`, or `.in` email addresses |
| 🎯 **Interest-Based Matching** | Connect with peers who share your interests and hobbies |
| 📹 **HD Video Chat** | Crystal clear, low-latency video calls powered by WebRTC (simple-peer) |
| 💬 **Real-time Messaging** | Instant text chat during video calls using Socket.io |
| 🔒 **End-to-End Encryption** | All communications are fully encrypted for privacy |

### 🚀 Enhanced Experience
- 📚 **Study Together Mode** — Find accountability partners and study buddies
- 🎯 **Campus Filters** — Match with students from your university or explore across India
- 🌙 **Night Owl Badge** — Earn badges for late-night activity
- 📅 **Events & Hackathons** — Discover student-run events near you
- 🔥 **Connection Streaks** — Build daily streaks and unlock achievement badges
- 🏆 **Gamification** — Earn rewards and badges for engagement

### 🔐 Safety & Security
- 🚩 **1-Tap Reporting** — Report inappropriate behavior instantly during calls
- ⚡ **Instant Block** — Block users permanently with one tap
- 🛡️ **24/7 Moderation** — Dedicated trust & safety team reviews all reports
- 🔐 **Privacy-First** — End-to-end encryption on all communications

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **pnpm** (recommended) or npm
- **Supabase** account for authentication and database
- **Socket.io server** for real-time matching ([hallway-server](../hallway-server))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FAYEZ087/hallway.git
   cd hallway
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Socket.io Server
   NEXT_PUBLIC_SOCKET_URL=your_socket_server_url
   ```

4. **Set up Supabase database**

   Run the SQL migration in your Supabase SQL Editor:
   ```bash
   # Copy contents of supabase-profiles-migration.sql
   # Paste and run in Supabase Dashboard → SQL Editor
   ```

   This creates:
   - `profiles` table with user information
   - Row Level Security (RLS) policies
   - Auto-trigger for profile creation on signup
   - Storage bucket for avatars

5. **Start the development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Radix UI](https://www.radix-ui.com/) | Accessible UI primitives |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Form handling & validation |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |

### Backend & Services
| Service | Purpose |
|---------|---------|
| [Supabase Auth](https://supabase.com/docs/guides/auth) | Magic link authentication |
| [Supabase Database](https://supabase.com/docs/guides/database) | PostgreSQL with RLS |
| [Supabase Storage](https://supabase.com/docs/guides/storage) | Profile photo storage |
| [Socket.io](https://socket.io/) | Real-time matching & signaling |
| [simple-peer](https://github.com/feross/simple-peer) | WebRTC peer connections |

### Analytics
| Tool | Purpose |
|------|---------|
| [Vercel Analytics](https://vercel.com/analytics) | Web analytics |

---

## 📁 Project Structure

```
hallway/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Landing page & auth flow
│   ├── match/                    # Matching & chat interface
│   ├── setup/                    # Profile setup page
│   └── auth/callback/            # OAuth callback handler
├── components/                   # React components
│   ├── landing-page.tsx          # Marketing landing page
│   ├── auth-screen.tsx           # Email authentication
│   ├── interest-selection.tsx    # Interest picker
│   ├── chat-room.tsx             # Video chat interface
│   └── ui/                       # Reusable UI components (shadcn/ui)
├── hooks/                        # Custom React hooks
├── lib/                          # Utilities and helpers
│   └── supabase.ts               # Supabase client configuration
├── public/                       # Static assets
├── styles/                       # Global styles
└── supabase-profiles-migration.sql  # Database schema
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server at `localhost:3000` |
| `pnpm build` | Create optimized production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint for code quality |

---

## 🗄️ Database Schema

### Profiles Table

```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  real_name TEXT,                    -- User's full name (private)
  display_name TEXT,                 -- Public display name
  college TEXT,                      -- University/college name
  profile_photo_url TEXT,            -- Avatar URL from storage
  interests TEXT[],                  -- Array of user interests
  is_profile_complete BOOLEAN,       -- Profile setup status
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/FAYEZ087/hallway)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy!

### Environment Variables for Production

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |
| `NEXT_PUBLIC_SOCKET_URL` | Your Socket.io server URL |

---

## 🔐 Security & Privacy

| Measure | Implementation |
|---------|----------------|
| **Email Verification** | Only official university emails (`.edu`, `.ac.in`, `.in`) allowed |
| **Authentication** | Secure magic link authentication via Supabase |
| **RLS Policies** | Row-level security ensures users can only access their own data |
| **E2E Encryption** | WebRTC peer-to-peer connections are encrypted |
| **Content Moderation** | Report system with 24/7 review team |
| **No Data Selling** | User data is never shared or sold |

---

## 🛠️ Troubleshooting

<details>
<summary><strong>Video/audio not working?</strong></summary>

- Ensure you've granted camera and microphone permissions
- Check that you're using HTTPS (required for WebRTC in production)
- Try a different browser (Chrome/Edge recommended)
</details>

<details>
<summary><strong>Can't connect to other users?</strong></summary>

- Verify the Socket.io server is running
- Check firewall settings aren't blocking WebRTC
- Ensure STUN/TURN servers are configured for NAT traversal
</details>

<details>
<summary><strong>Authentication issues?</strong></summary>

- Verify your email domain ends in `.edu`, `.ac.in`, or `.in`
- Check spam folder for magic link emails
- Ensure Supabase environment variables are correct
</details>

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact & Support

| Purpose | Email |
|---------|-------|
| General Inquiries | hello@hallwaychat.online |
| Trust & Safety | safety@hallwaychat.online |
| Technical Support | support@hallwaychat.online |
| Privacy Requests | privacy@hallwaychat.online |

### Follow Us
- **Twitter/X:** [@hallway_chat_](https://twitter.com/hallway_chat_)
- **Instagram:** [@hallwaychat_online](https://www.instagram.com/hallwaychat_online)

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 🙏 Acknowledgments

- Built with ❤️ by [Fayez](https://github.com/FAYEZ087)
- UI components powered by [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Infrastructure by [Vercel](https://vercel.com/) & [Supabase](https://supabase.com/)

---

<div align="center">

**Made with 🤝 for students, by students.**

[Website](https://hallwaychat.online) · [Report Bug](https://github.com/FAYEZ087/hallway/issues) · [Request Feature](https://github.com/FAYEZ087/hallway/issues)

</div>
