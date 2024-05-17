'use client';
import SideNav from '@/app/ui/dashboard/sidenav';
import Link from 'next/link';
import AcmeLogo from '../ui/acme-logo';
import { GlobeAltIcon, BellIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import profile from '@/public/Ellipse.png';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';

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
  const [hidden, setHidden] = useState('hidden');

  function handleActive() {
    if (true) {
      setHidden('block');
    }
  }
  // function handleHide() {
  //   if (false) {
  //     setHidden('hidden');
  //   }
  // }
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
            <BellIcon className="mt-[0.4rem] w-7 text-white" />
          </li>
          <li>
            <Example />
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Example() {
  return (
    <div className="w-25 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10   data-[focus]:outline-1 data-[focus]:outline-white">
          <Image src={profile} alt="profile" className="h-9 w-9" />
          <ChevronDownIcon className="w-8 fill-white/60" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="h-52 w-52 origin-top-right rounded-l-xl border border-white/5 bg-white p-1 text-sm/6  text-black [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                <PencilIcon className=" w-8 fill-black/30" />
                Edit
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘E
                </kbd>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                <Square2StackIcon className=" w-8 fill-black/30" />
                Duplicate
                <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                  ⌘D
                </kbd>
              </button>
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                <ArchiveBoxXMarkIcon className="w-8 fill-black/30" />
                Archive
                <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                  ⌘A
                </kbd>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                <TrashIcon className="w-8 fill-black/30" />
                Delete
                <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                  ⌘D
                </kbd>
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
