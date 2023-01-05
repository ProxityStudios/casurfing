import Link from 'next/link';
import routes from '@/utils/routes';
import { FaChevronLeft } from "react-icons/fa";

function Header() {
  return (
    <header className="container mx-auto">
      <nav className="h-16 flex items-center justify-between">
        <Link className='hover:text-teal-400 flex items-center text-teal-300 focus-visible:ring duration-150 focus-visible:ring-teal-500 rounded pr-2' href={routes.getHome()}><FaChevronLeft size={18} /> <span className='font-bold'>Back</span></Link>
        <div>
          <Link className='hover:text-teal-400 flex items-center text-teal-300 focus-visible:ring duration-150 focus-visible:ring-teal-500 rounded pr-2' href={routes.getProfile()}>Profile</Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
