import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Smile-Ease',
  description: 'Direct-to-consumer dental aligners solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar */}
        <nav className="bg-gray-200 p-4 flex justify-center gap-8">
          <Link href="/" className="hover:text-blue-500 font-semibold">Home</Link>
          <Link href="/about" className="hover:text-blue-500 font-semibold">About</Link>
          <Link href="/products" className="hover:text-blue-500 font-semibold">Products</Link>
          <Link href="/contact" className="hover:text-blue-500 font-semibold">Contact</Link>
        </nav>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
