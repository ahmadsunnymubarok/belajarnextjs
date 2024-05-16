import SideNav from '@/app/ui/dashboard/sidenav';
import Link from 'next/link';
import AcmeLogo from '../ui/acme-logo';
import { GlobeAltIcon, BellIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import profile from '@/public/Ellipse.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="relative">
        <Topnav />
      </div>
      <div className=" flex-none  md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

function Topnav() {
  return (
    <nav className="fixed flex w-full justify-between bg-blue-500">
      <Link
        href="/"
        className="flex w-24 justify-around  md:w-64 md:justify-center"
      >
        <div className="hidden w-32 text-white md:block md:w-40">
          <AcmeLogo />
        </div>
        <div className="block text-white md:hidden">
          <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
        </div>
      </Link>

      <div className="flex  justify-end ">
        <ul className="display flex grid w-44 grid-cols-2 content-center">
          <li>
            <BellIcon className="mt-[0.4rem] w-7" />
          </li>
          <li>
            <Image src={profile} alt="profile" className="h-9 w-9" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

function UsetSettings() {
  return (
    <div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
