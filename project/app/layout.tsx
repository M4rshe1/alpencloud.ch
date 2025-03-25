import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Home, Info, Server, Users } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AlpenCloud - Premium WordPress Hosting',
  description: 'Swiss quality WordPress hosting solutions with unmatched reliability and performance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-red-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-red-400">
                  AlpenCloud
                </Link>
              </div>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-red-400 flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-red-400 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  About
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-red-400 flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  Services
                </Link>
                <Link href="/team" className="text-gray-300 hover:text-red-400 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Team
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 border-t border-red-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <p className="text-gray-400">© 2025 AlpenCloud. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}