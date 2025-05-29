import "../globals.css";
import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <Link href="/">Kristen Su</Link>
      <div className="nav-bar">
        <Link href="/#projects">Projects</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#blog">Blog</Link>
      </div>
    </div>
  );
}