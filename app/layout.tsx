import React from 'react';
import Navbar from './components/layout/Navbar'; 
// 👇 Updated this path to match your folder structure perfectly!
import Footer from './components/home/Footer'; 
import './globals.css';

export const metadata = {
  title: 'Arunaa Aalayam Silks',
  description: 'Premium Luxury Silk Sarees Delivered Securely',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-[#1c0307] text-white min-h-screen flex flex-col antialiased">
        {/* Persistent Global Navigation Bar */}
        <Navbar />
        
        {/* Main body viewport container that grows to push the footer down */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Persistent Global Footer */}
        <Footer />
      </body>
    </html>
  );
}