import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const links = [
  {
    href: 'https://facebook.com/YourShop',
    icon: Facebook,
    label: 'Facebook'
  },
  {
    href: 'https://instagram.com/YourShop',
    icon: Instagram,
    label: 'Instagram'
  },
  {
    href: 'https://tiktok.com/@YourShop',
    icon: MessageCircle,
    label: 'TikTok'
  }
];

const SocialLinks = () => (
  <div className="mt-4 flex gap-3">
    {links.map(({ href, icon: Icon, label }) => (
      <Link key={href} href={href} className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:scale-105 hover:text-primary" aria-label={label}>
        <Icon className="h-5 w-5" />
      </Link>
    ))}
  </div>
);

export default SocialLinks;
