# Loom - Video Recording & Sharing Platform

A modern video recording and sharing platform built with Next.js, featuring video upload, thumbnail management, and screen recording capabilities.

## 🚀 Features

- **Video Recording**: Built-in screen and camera recording functionality
- **Video Upload**: Upload videos with custom thumbnails
- **Thumbnail Management**: Upload and manage video thumbnails
- **User Authentication**: Secure authentication system
- **Modern UI**: Clean, responsive interface built with Tailwind CSS
- **Database Integration**: Robust data management with type safety

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: Xata (Serverless PostgreSQL)
- **Schema Validation**: Drizzle ORM
- **Authentication**: Better Auth
- **Language**: TypeScript

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- npm or yarn or pnpm
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/loom.git
   cd loom
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
   # Xata Database
   XATA_API_KEY=your_xata_api_key
   XATA_DATABASE_URL=your_xata_database_url
   
   # Better Auth
   BETTER_AUTH_SECRET=your_auth_secret
   BETTER_AUTH_URL=http://localhost:3000
   
   # Next.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   
   # File Upload (if using cloud storage)
   UPLOAD_SECRET=your_upload_secret
   ```

4. **Set up Xata Database**
   
   Install Xata CLI:
   ```bash
   npm install -g @xata.io/cli
   ```
   
   Initialize Xata:
   ```bash
   xata auth login
   xata init
   ```

5. **Run database migrations**
   ```bash
   npm run db:push
   # or
   npx drizzle-kit push:pg
   ```

6. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
loom/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── api/              # API routes
│   └── globals.css       # Global styles
├── components/           # Reusable React components
│   ├── ui/              # UI components
│   ├── auth/            # Authentication components
│   └── video/           # Video-related components
├── lib/                 # Utility functions and configurations
│   ├── auth.ts         # Better Auth configuration
│   ├── db.ts           # Database configuration
│   └── utils.ts        # Utility functions
├── schema/             # Drizzle schema definitions
├── public/             # Static assets
└── types/              # TypeScript type definitions
```

## 🎥 Usage

### Recording Videos
1. Navigate to the dashboard
2. Click "Record Video"
3. Choose between screen recording or camera recording
4. Start recording and manage your session
5. Save and upload your recording

### Uploading Videos
1. Go to "Upload Video" section
2. Select your video file
3. Upload a custom thumbnail (optional)
4. Add title and description
5. Save your video

### Managing Content
- View all your videos in the dashboard
- Edit video details and thumbnails
- Share videos with generated links
- Delete unwanted content

## 🔐 Authentication

The application uses Better Auth for secure user authentication with features like:
- Email/password authentication
- Social login options
- Session management
- Protected routes

## 💾 Database Schema

Key database tables managed by Drizzle ORM:
- `users` - User account information
- `videos` - Video metadata and file references
- `thumbnails` - Thumbnail image data
- `sessions` - User session management

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository to Vercel
   - Set environment variables in Vercel dashboard
   - Deploy automatically on push

3. **Set up production database**
   - Update Xata database URL for production
   - Run migrations in production environment

### Environment Variables for Production
Make sure to set all environment variables in your deployment platform:
- `XATA_API_KEY`
- `XATA_DATABASE_URL`
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL` (your production URL)
- `NEXTAUTH_SECRET`

## 🛠️ Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:push      # Push schema changes
npm run db:studio    # Open database studio
npm run db:generate  # Generate migrations

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:
- Check the [Issues](https://github.com/yourusername/loom/issues) page
- Create a new issue with detailed information
- Join our community discussions

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Xata for the serverless database solution
- Drizzle team for the excellent ORM
- Better Auth for authentication solutions
- Tailwind CSS for the utility-first styling

---

**Happy coding! 🎉**