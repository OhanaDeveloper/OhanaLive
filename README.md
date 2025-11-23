# Ohana Live

A modern recovery community platform connecting people through technology, conversation, and shared experience.

## About

Ohana Live is a digital space where technology and recovery meet. We host nightly meetings from 11 PM – 3 AM Pacific, creating a place for connection, raw honesty, and community support.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern utility-first styling
- **Three.js** - 3D graphics and interactive experiences
- **Framer Motion** - Smooth animations
- **Zustand** - Lightweight state management
- **React Query** - Data fetching and caching

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/
│   ├── (sections)/      # Route groups for different sections
│   │   ├── home/
│   │   ├── about/
│   │   ├── contact/
│   │   └── projects/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── home/            # Home-specific components
│   └── layout/          # Layout components
├── lib/                 # Utilities and helpers
├── store/               # State management
├── styles/              # Additional styles
└── types/               # TypeScript type definitions
```

## Features

- **Live Meeting Countdown** - Real-time countdown to next meeting
- **Responsive Design** - Optimized for all devices
- **Modern UI/UX** - Clean, accessible interface
- **Interactive Elements** - Engaging user experience
- **Community Focused** - Built for connection and support

## Development

This project uses:
- ESLint for code quality
- Prettier for code formatting
- TypeScript for type safety

## License

Private - All Rights Reserved
