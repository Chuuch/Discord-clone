import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Discord 2.0',
	description: 'Full-stack Discord Clone',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider appearance={{
			baseTheme: dark
		}}>
			<html lang="en">
				<body className={font.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
