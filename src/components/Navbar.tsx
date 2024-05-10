
function Navbar() {

    return (
        <nav
   className=" flex items-center justify-between mx-auto text-blue-gray-900">
    <a href="/"
      className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
      <img src="src/assets/logo.png" className="min-w-[50%]"/>
    </a>
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li
          className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">

          <a href="/home" className="flex items-center">
            HOME
          </a>
        </li>
        <li
          className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">

          <a href="/services" className="flex items-center">
            SERVICES
          </a>
        </li>
        <li
          className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
  
          <a href="contact" className="flex items-center">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
    <div className="flex items-center gap-x-1">
        <a className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
        type="button" href="/login">Log In</a>
        <a className="hidden select-none rounded-lg bg-gradient-to-tr from-[#57BDDD] to-[#62c2df] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
        type="button" href="/signup">Sign in</a>
    </div>
    <button
      className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
</nav> 
    )
}

export default Navbar
