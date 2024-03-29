import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })
const serif = Lora({ subsets: ['latin'], weight: '400', variable: '--font-serif' })

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
		<html lang="en">
			<body className={cn('dark antialiased', inter.className, serif.variable)}>{children}</body>
		</html>
	)
}
