'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

interface LogoSwitcherProps {
  image?: string;
  imageDark?: string;
}

export function LogoSwitcher({ image, imageDark }: LogoSwitcherProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Wait for component to mount to access the theme
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until client-side
  if (!mounted) {
    return (
      <Image
        src='https://cdn.sanity.io/images/v700z5ue/production/872176b75935dcbf54bdcb8d633847a4b9d28dec-333x100.webp'
        alt='alliant offers expert business and tax consulting solutions helping American businesses take full advantage of tax credits, incentives, and deductions.'
        width={200}
        height={60}
        priority={true}
        className='cursor-pointer self-center dark:bg-gray-400'
      />
    );
  }

  let src;
  let className;

  switch (resolvedTheme) {
    case 'dark':
      src = `${imageDark || 'https://cdn.sanity.io/images/v700z5ue/production/a3e55fb5b16d9622643b923b09381595459764e2-333x100.webp'}`;
      className = 'cursor-pointer self-center bg-none';
      break;
    case 'light':
      src = `${image || 'https://cdn.sanity.io/images/v700z5ue/production/872176b75935dcbf54bdcb8d633847a4b9d28dec-333x100.webp'}`;
      className = 'cursor-pointer self-center bg-none';
      break;
    default:
      src =
        'https://cdn.sanity.io/images/v700z5ue/production/872176b75935dcbf54bdcb8d633847a4b9d28dec-333x100.webp';
      className = 'cursor-pointer self-center bg-white';
      break;
  }

  return (
    <Image
      src={src}
      alt='alliant offers expert business and tax consulting solutions helping American businesses take full advantage of tax credits, incentives, and deductions.'
      width={200}
      height={60}
      priority={true}
      className={className}
    />
  );
}
