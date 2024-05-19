'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StarterForm from '@/components/StarterForm';

function Page() {
    const pathname = usePathname();

  return (
    <>
        <StarterForm method="login" route="/api/token/" />
    </>
  )
}

export default Page;
