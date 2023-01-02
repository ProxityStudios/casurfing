import Link from 'next/link';
import routes from '@/utils/routes';

function Header() {
  return (
    <header className="container mx-auto">
      <nav className="h-16 flex items-center justify-between">
        <Link href={routes.getHome()}>{'<'} Back</Link>
        <div>
          <Link href={routes.getProfile()}>Profile</Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
