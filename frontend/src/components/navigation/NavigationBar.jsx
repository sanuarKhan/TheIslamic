

export function NavigationBar() {
  const navItems = [
    { label: "Home", className: "grow text-black" },
    { label: "Quran", className: "" },
    { label: "Hadith", className: "" },
    { label: "Salah", className: "" },
    { label: "I-Wall", className: "" },
    { label: "Donars", className: "" },
    { label: "About Us", className: "grow shrink w-[91px]" },
  ];

  return (
    <nav
      className="flex gap-10 px-11 py-4 text-xl font-bold text-center text-black rounded-xl bg-green-200 bg-opacity-60 max-md:px-5 max-md:max-w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map((item, index) => (
        <button
          key={index}
          className={item.className}
          tabIndex={0}
          role="menuitem"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
