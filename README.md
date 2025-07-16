# 🌟 Rug Check

**Your trusted companion for navigating the crypto universe safely**

Rug Check is an AI-powered crypto analysis platform that helps users identify potential scams, rug pulls, and risky tokens before investing. Built with Next.js, TypeScript, and modern web technologies.

## ⚠️ **DEMO WARNING**

**This is a demonstration project for educational purposes only.**

- **NEVER use this in production with real funds**
- Private keys are stored in the database for demo purposes - this is **EXTREMELY UNSAFE** in real applications
- Always store private keys client-side only in production applications
- This project is for learning and demonstration purposes

## ✨ Features

- 🔍 **AI-Powered Token Analysis** - Analyze crypto tokens for potential risks
- 🛡️ **Rug Pull Detection** - Identify suspicious token behavior
- 🔐 **Wallet Management** - Generate and manage wallet keys (demo only)
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- 🚀 **Next.js 14** - Built with the latest Next.js features
- 🔑 **Authentication** - Google OAuth integration with Better Auth
- 📱 **Mobile Responsive** - Works seamlessly on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Authentication**: Better Auth
- **Icons**: Lucide React
- **Database**: (Configure your preferred database)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Google OAuth application (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rug-check.git
   cd rug-check
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
rug-check/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── onboarding/        # Onboarding flow
│   └── page.tsx           # Main landing page
├── components/            # Reusable components
│   └── ui/               # Shadcn/ui components
├── lib/                   # Utility functions and configs
├── public/               # Static assets
└── styles/               # Global styles
```

## 🎯 Key Features Explained

### Token Analysis
- Input any token contract address
- AI-powered risk assessment
- Community sentiment analysis
- Technical indicator evaluation

### Wallet Management (Demo)
- Generate new wallet keys
- Display public and private keys
- Copy keys to clipboard
- Security warnings and best practices

### Onboarding Flow
- Welcome screen with feature overview
- Wallet generation process
- Key management education
- Security best practices

## ⚙️ Configuration

### Authentication Setup
1. Create a Google OAuth application at [Google Cloud Console](https://console.cloud.google.com/)
2. Add your domain to authorized origins
3. Set redirect URI to `http://localhost:3000/api/auth/callback/google`
4. Copy Client ID and Secret to your `.env.local`

### Database Setup
Configure your preferred database and update the `DATABASE_URL` in your environment variables.

## 🔒 Security Considerations

### For Production Use:
- **NEVER store private keys on the server**
- Use client-side wallet generation only
- Implement proper session management
- Add rate limiting and CSRF protection
- Use HTTPS everywhere
- Implement proper input validation
- Add security headers

### Current Demo Limitations:
- Private keys stored in database (unsafe)
- No input validation on wallet generation
- No rate limiting on API endpoints
- Basic error handling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

**This software is provided "as is" for educational and demonstration purposes only.**

- **No Financial Advice**: This tool does not provide financial advice
- **No Guarantees**: Analysis results are not guaranteed to be accurate
- **Use at Your Own Risk**: Always do your own research before investing
- **Demo Only**: Do not use with real funds or production environments

## 🙋‍♂️ Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Review existing issues and discussions

## 🌟 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for beautiful styling
- [Shadcn/ui](https://ui.shadcn.com/) for the component library
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Better Auth](https://better-auth.com/) for authentication

---

**Made with ❤️ for the crypto community**

*Remember: Always DYOR (Do Your Own Research) before investing in any cryptocurrency!* 