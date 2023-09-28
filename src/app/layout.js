import './globals.css';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'First App',
  description: 'Live code by Dea Afrizal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/postingan">Postingan</Link>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
