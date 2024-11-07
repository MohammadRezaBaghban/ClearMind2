import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    { name: "Home", link: "/" },
    { name: "About", link: "#" },
    { name: "Blog", link: "/blogs" },
  ];

  return (
    <div className="container mx-auto py-8 flex items-center justify-between xl:pl-0 lg:pl-8 pl-4 xl:pr-0 lg:pr-8 ">
      {/* Logo */}
      <a href="/">
        <svg className="" width="52" height="33" viewBox="0 0 52 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.1077 32.1308C40.2551 32.1308 51.7238 20.6633 51.7238 6.51748C51.7238 4.50681 51.4921 2.55024 51.0539 0.673034C49.2971 0.292318 47.4732 0.0917969 45.6024 0.0917969C31.4551 0.0917969 19.9863 11.5593 19.9863 25.7051C19.9863 27.7158 20.218 29.6723 20.6562 31.5495C22.413 31.9303 24.2369 32.1308 26.1077 32.1308Z"
            fill="#7272E2"
          />
          <path
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.1081 32.1308C11.9608 32.1308 0.492029 20.6633 0.492029 6.51748C0.492029 4.51885 0.720972 2.57368 1.15406 0.706764C2.95796 0.304171 4.83362 0.0917969 6.75889 0.0917969C20.9063 0.0917969 32.375 11.5593 32.375 25.7051C32.375 27.7037 32.1461 29.6489 31.713 31.5158C29.9091 31.9184 28.0334 32.1308 26.1081 32.1308Z"
            fill="#7272E2"
          />
          <path
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.8702 25.708C38.3728 29.7038 32.4501 32.1308 25.9605 32.1308C19.4709 32.1308 13.5482 29.7038 9.05078 25.708C13.5482 21.7122 19.4709 19.2852 25.9605 19.2852C32.4501 19.2852 38.3728 21.7122 42.8702 25.708Z"
            fill="#7272E2"
          />
        </svg>
      </a>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center">
        <ul className="flex items-center gap-x-6">
          {nav.map((item, index) => (
            <a key={index} href={item.link}>
              <li className="hover:text-[#6666B3] text-[#252C39] cursor-pointer">{item.name}</li>
            </a>
          ))}
        </ul>
        <a href="/contactUs">
          <button className="bg-[#6666B3] py-[9px] px-6 rounded-md text-white font-semibold ml-8">Contact Us</button>
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden flex items-center pr-4">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg width="24" height="24" fill="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center py-8 lg:hidden">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 focus:outline-none">
            <svg width="24" height="24" fill="currentColor">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <ul className="flex flex-col gap-y-6 mt-8 items-center">
            {nav.map((item, index) => (
              <a key={index} href={item.link}>
                <li className="text-[#252C39] text-lg font-semibold hover:text-[#6666B3]">{item.name}</li>
              </a>
            ))}
          </ul>
          <a href="/contactUs" className="mt-6">
            <button className="bg-[#6666B3] py-[9px] px-6 rounded-md text-white font-semibold">Contact Us</button>
          </a>
        </div>
      )}
    </div>
  );
}
