
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'RESQ360 | The Future of Emergency Response',
  description: 'Automatic accident detection. Instant alerts. Multi-stakeholder coordination. Saving lives within the golden hour.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
