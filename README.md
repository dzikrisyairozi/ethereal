# Ethereal - Web3 NFT Marketplace

A modern, production-ready Web3 NFT marketplace built with Next.js 15, Tailwind CSS, shadcn/ui, and TypeScript.

![Hero Section Screenshot]

## 🚀 Key Features

- ⚡️ Next.js 15 with App Router & Server Components
- 💅 Polished UI with shadcn/ui & Tailwind CSS
- 🌙 Dark/Light mode with smooth transitions
- 🎭 Framer Motion animations
- 🔗 Web3 wallet integration
- 📱 Fully responsive design
- 🎨 Beautiful animated backgrounds
- 🔍 TypeScript for type safety

## 🛠 Quick Start

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ethereal.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Start development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 🎨 Design Decisions

- **Animation Philosophy**: Smooth, staged animations for better UX
- **Component Architecture**: Modular, reusable components with shadcn/ui
- **Performance**: Server Components where possible, client components when needed
- **Theme**: Dynamic color system with smooth transitions
- **Layout**: Responsive grid system with mobile-first approach

## 📁 Project Structure

```
ethereal/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   │   ├── [sections]# Section components
│   │   ├── ui/       # shadcn/ui components
│   │   └── wallet/   # Web3 wallet componentss
│   ├── providers/    # Context providers
│   └── lib/          # Utility functions
```

## 🧰 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Web3**: wagmi & viem
- **Type Safety**: TypeScript

## 📜 Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.
