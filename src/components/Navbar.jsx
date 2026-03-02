import { useState } from 'react'

const dropdowns = [
  {
    title: "Features",
    items: [
      { name: "Todo List", icon: "../src/assets/icon-todo.svg" },
      { name: "Calendar", icon: "../src/assets/icon-calendar.svg" },
      { name: "Reminders", icon: "../src/assets/icon-reminders.svg" },
      { name: "Planning", icon: "../src/assets/icon-planning.svg" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "History" },
      { name: "Our Team" },
      { name: "Blog" },
    ],
  },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // Track which dropdown is open (null = none, 0 = Features, 1 = Company)
  const [openDropdown, setOpenDropdown] = useState(null)

  function toggleDropdown(index) {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  function handleIsOpen() {
    setIsOpen(!isOpen)
    setOpenDropdown(null) // Reset dropdowns when closing mobile menu
  }

  return (
    <nav className="p-4 container mx-auto flex items-center justify-between max-w-7xl">
      <div className="flex items-center gap-14">
        <img src="../src/assets/logo.svg" alt="logo" />
        
        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10 text-gray-500">
          {dropdowns.map((dropdown, index) => (
            <li key={index} className="relative group cursor-pointer py-2">
              <span className="flex items-center gap-2 hover:text-black transition-colors">
                {dropdown.title}
                <img src="../src/assets/icon-arrow-down.svg" alt="" className="group-hover:rotate-180 transition-transform" />
              </span>
              
              {/* Desktop Hover Dropdown */}
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white p-4 rounded-xl shadow-2xl w-40 z-50">
                {dropdown.items.map((item, idx) => (
                  <li key={idx} className="p-2 hover:text-black flex items-center gap-3">
                    {item.icon && <img src={item.icon} alt="" className="w-4" />}
                    {item.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="cursor-pointer hover:text-black">Careers</li>
          <li className="cursor-pointer hover:text-black">About</li>
        </ul>
      </div>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden lg:flex items-center gap-8">
        <button className="text-gray-500 hover:text-black">Login</button>
        <button className="border-2 border-gray-500 rounded-xl px-5 py-2 text-gray-500 hover:text-black hover:border-black">Register</button>
      </div>

      {/* Hamburger Toggle */}
      <button onClick={handleIsOpen} className="lg:hidden z-50">
        <img 
          src={isOpen ? "../src/assets/icon-close-menu.svg" : "../src/assets/icon-menu.svg"} 
          alt="toggle menu" 
        />
      </button>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={handleIsOpen} />

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-40 p-6 pt-20 transform transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col gap-6 text-gray-500">
          {dropdowns.map((dropdown, index) => (
            <li key={index}>
              <button 
                onClick={() => toggleDropdown(index)} 
                className="flex items-center gap-4 hover:text-black w-full"
              >
                {dropdown.title}
                <img 
                  src={openDropdown === index ? "../src/assets/icon-arrow-up.svg" : "../src/assets/icon-arrow-down.svg"} 
                  alt="" 
                />
              </button>
              
              {/* Mobile Accordion Content */}
              <ul className={`${openDropdown === index ? "flex" : "hidden"} flex-col gap-4 pl-6 pt-4`}>
                {dropdown.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm">
                    {item.icon && <img src={item.icon} alt="" className="w-4" />}
                    {item.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">About</li>
        </ul>

        <div className="flex flex-col gap-4 mt-8">
          <button className="text-gray-500">Login</button>
          <button className="border-2 border-gray-500 rounded-xl py-2 text-gray-500">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar