"use client";

import Link from 'next/link';
import { BiStar } from 'react-icons/bi';
import routes from '@/utils/routes';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const __conv = [
  { id: "1", name: "Conversation 1" },
  { id: "2", name: "Conversation 2" },
  { id: "3", name: "Conversation 3" },
  { id: "4", name: "Conversation 4" },
  { id: "5", name: "Conversation 5" },
  { id: "6", name: "Conversation 6" }
]

function Sidebar() {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <aside
      tabIndex={0}
      className="min-w-[300px] border-2 border-black/20 col-span-3 bg-black/40 rounded-l-xl rounded-r duration-150 ease-linear focus-visible:bg-black/50 focus-visible:ring focus-visible:ring-teal-500"
    >
      <div className="mx-auto px-4">
        <div className="h-10 mt-3 p-1 w-full bg-black/50 rounded-lg flex items-center justify-center">
          <button
            type="button"
            onClick={() => setCurrentTab(0)}
            className={`flex items-center justify-center hover:bg-white/5 cursor-pointer rounded-lg text-sm font-bold w-full h-full duration-150 ease-in-out focus-visible:ring focus-visible:ring-teal-500 ${currentTab === 0 && "bg-white/10"}`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setCurrentTab(1)}
            className={`flex items-center justify-center hover:bg-white/5 cursor-pointer rounded-lg text-sm font-bold w-full h-full duration-150 ease-in-out focus-visible:ring focus-visible:ring-teal-500 ${currentTab === 1 && "bg-white/10"}`}
          >
            <BiStar size={16} className="mr-1" />
            Favorites
          </button>
        </div>
      </div>

      <hr className="mx-auto w-10/12 h-px border-none bg-white/10 my-4" />

      <div className="mx-auto px-4">
        {currentTab === 0 && <div className="flex flex-col divide-y divide-white/10 bg-black/80 rounded-lg">
          {__conv.map((c, i) => <Link
            key={c.id}
            href={routes.getConversation(c.id)}
            className={`h-20 p-3 duration-150 focus-visible:ring ease-out focus-visible:ring-teal-500 hover:bg-white/5 ${pathname === routes.getConversation(c.id) && "bg-white/10"} ${i === 0 && "!rounded-t-lg"} ${__conv.length - 1 === i && "!rounded-b-lg"}`}
          >
            {c.name}
          </Link>)}
        </div>}
        {currentTab === 1 && <div className="flex flex-col divide-y divide-white/10 bg-black/80 rounded-lg">
          {__conv.map((c, i) => <Link
            key={c.id}
            href={routes.getConversation(c.id)}
            className={`h-20 p-3 duration-150 focus-visible:ring ease-out focus-visible:ring-teal-500 hover:bg-white/5 ${pathname === routes.getConversation(c.id) && "bg-white/10"} ${i === 0 && "!rounded-t-lg"} ${__conv.length - 1 === i && "!rounded-b-lg"}`}
            >
            <BiStar size={16} className="mr-1" />
            {c.name}
          </Link>)}
        </div>}
      </div>
    </aside>
  );
}

export default Sidebar;
