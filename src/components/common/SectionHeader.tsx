import { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <header className={`mb-12 ${alignment} max-w-3xl`}>
      {eyebrow && <p className='mb-3 eyebrow'>{eyebrow}</p>}
      <h2 className='mb-4'>{title}</h2>
      {subtitle && <p className='lead'>{subtitle}</p>}
    </header>
  );
}
