import ThemeButton from "./components/ThemeButton";

type NavItem = {
  name: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { name: "Home"},
  { name: "About"},
  { name: "Services"},
];

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-4 bg-gray-900 m-5 rounded-2xl">
        
        {/* Menu */}
        <ul className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                className={` px-4 py-2 rounded-md font-medium transition cursor-pointer active:border active:border-blue-500 active:text-blue-400 text-gray-300 hover:text-white"} `}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Icon */}
        <ThemeButton />
      </nav>

      {/* Page Content */}
      <main className="flex flex-col items-center justify-center mt-32 text-center">
        <h1 className="text-5xl font-bold mb-4">Home Page</h1>
        <p className="text-gray-400 text-lg">Welcome to our website!</p>
      </main>
    </div>
  )
}

export default App
