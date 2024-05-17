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
  Popover,
  PopoverButton,
  PopoverPanel,
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
            <Notification />
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
    <Popover className={`mt-[0.3rem]`}>
      <PopoverButton className="grid grid-cols-2 content-center text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        <Image src={profile} alt="profile" className="h-9 w-9" />
        <ChevronDownIcon className="w-8 fill-white/60" />
      </PopoverButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          anchor="bottom end"
          className="mt-[6px] divide-y divide-white/5 rounded-xl bg-black text-sm/6 [--anchor-gap:var(--spacing-5)]"
        >
          <div className="p-3">
            <a
              className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Insights</p>
              <p className="text-white/50">Measure actions your users take</p>
            </a>
            <a
              className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Automations</p>
              <p className="text-white/50">Create your own targeted content</p>
            </a>
            <a
              className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Reports</p>
              <p className="text-white/50">Keep track of your growth</p>
            </a>
          </div>
          <div className="p-3">
            <a
              className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Documentation</p>
              <p className="text-white/50">
                Start integrating products and tools
              </p>
            </a>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

function Notification() {
  return (
    <Popover className={`mt-[0.7rem]`}>
      <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        <BellIcon className=" w-7 text-white" />
      </PopoverButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          anchor="bottom end"
          className="mt-[6px] divide-y divide-white/5 rounded-xl bg-black text-sm/6 [--anchor-gap:var(--spacing-5)]"
        >
          <div className="p-3">
            <a
              className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Insights</p>
              <p className="text-white/50">Measure actions your users take</p>
            </a>
            <a
              className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Automations</p>
              <p className="text-white/50">Create your own targeted content</p>
            </a>
            <a
              className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Reports</p>
              <p className="text-white/50">Keep track of your growth</p>
            </a>
          </div>
          <div className="p-3">
            <a
              className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Documentation</p>
              <p className="text-white/50">
                Start integrating products and tools
              </p>
            </a>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
