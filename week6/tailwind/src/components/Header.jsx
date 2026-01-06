import "./Header.css";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header text-6xl font-mono">
      <h1 className="text-blue-400">My App</h1>
      <Nav />
    </header>
  );
}
