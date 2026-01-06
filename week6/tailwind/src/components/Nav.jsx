export default function NavBar() {
  return (
    <nav className="flex justify-center">
      <a
        href="#"
        className="text-base m-2 rounded-2xl border-2 border-indigo-800 bg-sky-400 p-4 hover:bg-amber-400"
      >
        Home
      </a>
      <a
        href="#"
        className="text-base m-2 rounded-2xl border-2 border-indigo-800 bg-sky-400 p-4 hover:bg-amber-400"
      >
        About
      </a>
      <a
        href="#"
        className="text-base m-2 rounded-2xl border-2 border-indigo-800 bg-sky-400 p-4 hover:bg-amber-400"
      >
        Contact
      </a>
    </nav>
  );
}
