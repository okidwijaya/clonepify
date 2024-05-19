'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StarterForm from '@/components/StarterForm';

function page() {
    const pathname = usePathname();

  return (
    <>
    <StarterForm route="/api/user/register/" method="register" />
    </>
  )
}

export default page;