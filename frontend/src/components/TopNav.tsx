'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="top-nav">
        <ul className="font-mono lowercase list-none flex justify-between w-[300px]">
          {[
            { href: '/work', label: 'Work' },
            // { href: '/blog', label: 'Blog' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }, index) => (
            <li
              key={index}
              className={`top-nav-item ${
                pathname === href ? 'top-nav-item__active' : ''
              }`}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
