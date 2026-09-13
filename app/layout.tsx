import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA',
  description:
    'Grounded, evidence-based psychotherapy for adults, entrepreneurs, and high-achieving professionals navigating anxiety, trauma, and burnout in Santa Monica and across California.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="maya">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='19' stroke='%231e3a42' stroke-width='1' opacity='0.35'/%3E%3Cpath d='M20 8 C14 8 9 13 9 20 C9 26 13 31 20 32 C27 31 31 26 31 20 C31 13 26 8 20 8Z' stroke='%231e3a42' stroke-width='1.2' fill='none' opacity='0.8'/%3E%3Cpath d='M20 32 L20 16' stroke='%231e3a42' stroke-width='1.1' stroke-linecap='round' opacity='0.7'/%3E%3Cpath d='M14 22 C14 22 16 19 20 19 C24 19 26 22 26 22' stroke='%23c9874a' stroke-width='1.1' stroke-linecap='round' fill='none' opacity='0.9'/%3E%3C/svg%3E"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Caveat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
