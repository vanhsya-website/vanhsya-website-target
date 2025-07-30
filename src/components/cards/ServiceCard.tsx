import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: Props) {
  return (
    <Link href={href} className='card-base p-8 flex flex-col gap-4'>
      <div className='text-3xl'>{icon}</div>
      <h3>{title}</h3>
      <p className='text-neutral-600'>{description}</p>
      <span className='mt-auto text-accent-600 font-medium'>Learn more →</span>
    </Link>
  );
}
