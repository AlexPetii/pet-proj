export default function TestPage() {
  return (
    <nav className="bg-gray-800">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          <a
            href="/main"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            Main
          </a>
          <a
            href="/test"
            className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Test
          </a>
          {/* <a className="text-white font-medium px-3 py-2 text-sm">x</a> */}
        </div>
      </div>
    </nav>
  );
}
