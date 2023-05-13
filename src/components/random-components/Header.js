import Link from 'next/link';
import HeaderDropdown from './HeaderDropdown.js'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const Header = () => {
  const user = useUser();
  return (
    <header className="bg-gray-900 text-white py-4 px-8 mb-4">
      <div>
        <div className="hidden sm:flex justify-between">
          <Link href="/">
            <p className="text-l font-bold text-xl hover:text-blue-500">Home</p>
          </Link>
          <h1 className="text-2xl font-bold">Dungeon Master ToolBox</h1>
          <HeaderDropdown />
          <Link href={user ? "/logout" : "/login"}>
            <p className="text-l font-bold text-xl hover:text-blue-500">{user ? "Logout" : "Login"}</p>
          </Link>
        </div>
        <div className="sm:hidden grid grid-col-1 text-center space-y-4">
          <h1 className="text-4xl font-bold">Dungeon Master ToolBox</h1>
          <div className="flex space-x-2 justify-between">
            <Link href="/">
              <p className="w-full sm:w-1/4 text-l font-bold text-xl hover:text-blue-500">Home</p>
            </Link>
            <HeaderDropdown />
            <Link href={user ? "/logout" : "/login"}>
              <p className="text-l font-bold text-xl hover:text-blue-500">{user ? "Logout" : "Login"}</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;