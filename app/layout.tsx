import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Modal from '@/components/modals/Modal';
import ClientOnly from '@/components/ClientOnly';
import { Navbar } from '@/components/navbar/Navbar';
import RegisterModal from '@/components/modals/RegisterModal';
import LoginModal from '@/components/modals/LoginModal';
import ToastProvider from '@/app/ToastProvider/ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}
            <ClientOnly>
				<ToastProvider/>
                <RegisterModal />
				<LoginModal/>
                <Navbar />
            </ClientOnly>
			</body>
        </html>
    );
}
