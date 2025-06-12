'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import Link from 'next/link';

export default function NotFound() {
    return (
        <DashboardLayout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <Link
                    href="/"
                    className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                >
                    ပင်မစာမျက်နှာကို ပြန်သွားမည်
                </Link>
            </div>
        </DashboardLayout>
    );
}
