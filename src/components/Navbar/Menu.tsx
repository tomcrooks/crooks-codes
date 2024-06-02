import React, { useState } from 'react';

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log('toggleMenu called');
    setShowMenu(!showMenu);
  };

  return (  
    <>
        <menu className="hidden pt-4 md:flex md:items-center md:justify-between md:pt-0">
			<li><a href="/experience" className="md:mx-4 py-2 hover:text-purple-700">Experience</a></li>
			<li><a href="/projects" className="md:mx-4 py-2 hover:text-purple-700">Projects</a></li>
			<li><a href="/about" className="md:mx-4 py-2 hover:text-purple-700">About</a></li>
			<li><a href="/contact" className="md:mx-4 py-2 hover:text-purple-700">Contact</a></li>
        </menu>
		<div className={`block ${showMenu ? '' : 'md:hidden'}`}>
			{showMenu ? (
				<button className="relative z-50 p-3 cursor-pointer" id="cross-button" onClick={toggleMenu}>
					<span className="block w-6 h-0.5 bg-white transform rotate-45 absolute" style={{top: 'calc(50% - 0.25rem)', left: 'calc(50% - 3rem)'}}></span>
					<span className="block w-6 h-0.5 bg-white transform -rotate-45 absolute" style={{top: 'calc(50% - 0.25rem)', left: 'calc(50% - 3rem)'}}></span>
				</button>
			) : (
				<button className="relative z-50 p-3 cursor-pointer" id="mobile-menu" onClick={toggleMenu}>
					<span className="block w-6 h-0.5 bg-white mb-1.5"></span>
					<span className="block w-6 h-0.5 bg-white mb-1.5"></span>
					<span className="block w-6 h-0.5 bg-white"></span>
				</button>
			)}
		</div>
		<div className={`flex justify-center items-center fixed top-0 left-0 z-40 w-full h-full bg-black transform transition-transform duration-200 ease-in-out ${showMenu ? 'translate-y-0' : '-translate-y-full'}`}>
			<menu className="flex flex-col justify-center items-center pt-4 space-y-8 hover:space-y-14">
				<li><a href="/experience" className="hover:text-purple-700">Experience</a></li>
				<li><a href="/projects" className="hover:text-purple-700">Projects</a></li>
				<li><a href="/about" className="hover:text-purple-700">About</a></li>
				<li><a href="/contact" className="hover:text-purple-700">Contact</a></li>
			</menu>
		</div>
    </>
  )
}

export default Menu;
