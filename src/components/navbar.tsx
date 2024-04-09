import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <text className="text-white hover:color-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</text>
                </Link>
                /
                <Link href="/about">
                  <text className="text-white hover:color-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</text>
                </Link>
                /
                <Link href="/contact">
                  <text className="text-white hover:color-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</text>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
