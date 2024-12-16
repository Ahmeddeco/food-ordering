import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	preload: true,
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.className}  antialiased container`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
