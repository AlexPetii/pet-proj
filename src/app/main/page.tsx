export default function Main() {
  return (
    <nav className="bg-gray-800">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          <a
            href="/main"
            className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            Main
          </a>
          <a
            href="/test"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Test
          </a>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3">
          <a
            href="/main"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Dashboard
          </a>
          <a
            href="/test"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
