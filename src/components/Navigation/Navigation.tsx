import React, { useEffect } from "react";

function Navigation() {
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      console.log(event);
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-10 w-full p-[2.5vw] flex flex-row items-center justify-between text-primary">
      <span className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 208.3 27.7"
          className="aspect-[3/1.5] w-[150px] fill-primary cursor-pointer"
        >
          <path d="M0,24.1h11.7c5.5,0,8.7-2.3,8.7-6.8c0-2.8-1.7-4.5-4.1-5.3c2-0.9,3.4-2.6,3.4-5.3c0-3.5-2.2-5.9-7.5-5.9H0V24.1z M13.1,7.9 c0,1.6-1,2.4-3.2,2.4H6.4V5.5h3.5C12.1,5.5,13.1,6.3,13.1,7.9z M13.8,16.9c0,1.7-1,2.4-3.3,2.4H6.4v-4.9h4.2 C12.8,14.4,13.8,15.2,13.8,16.9z"></path>
          <path d="M38.2,24.1h6.7L36.8,0.7h-8.4l-8.1,23.4h6.5l1.2-3.8h9.1L38.2,24.1z M32.5,5.9l2.9,9.5h-5.9L32.5,5.9z"></path>
          <path d="M55.1,24.5c6.3,0,10.3-3,10.3-7.7c0-3.8-2.5-5.8-6.5-6.6l-5.1-1c-2-0.4-2.6-1-2.6-2.1S52.4,5,54.5,5c2.4,0,4.1,1,4.2,3.1H65 c0-5.6-4.7-7.8-10.5-7.8c-5.6,0-9.7,2.8-9.7,7.3c0,3.8,2.5,5.8,6.5,6.6l5.1,1c2,0.4,2.6,1,2.6,2.1c0,1.5-1.4,2.3-3.7,2.3 c-2.6,0-4.5-1.3-4.6-3.8h-6.3C44.6,21.3,48.1,24.5,55.1,24.5z"></path>
          <path d="M67.3,24.1h6.4V0.7h-6.4V24.1z"></path>
          <path d="M82,12.4c0-3.9,2.1-6.8,5.6-6.8c2.9,0,4.7,1.7,5.1,3.7h6.7c-0.6-6.1-5.8-9.1-11.7-9.1C80,0.2,75.4,5,75.4,12.3 s4.5,12.1,12.3,12.1c6,0,11.2-2.9,11.8-9.1h-6.7c-0.4,2.1-2.1,3.7-5.1,3.7C84.1,19.2,82,16.3,82,12.4z"></path>
          <path d="M113.7,0h-5.2l-10,27.7h5.2L113.7,0z"></path>
          <path d="M137.8,12.4c0-6.6-3.6-11.7-12.8-11.7h-9.8v23.4h9.8C134.2,24.1,137.8,19,137.8,12.4z M131.2,12.4c0,4.6-2.6,6.3-6.2,6.3 h-3.3V6.1h3.3C128.6,6.1,131.2,7.8,131.2,12.4z"></path>
          <path d="M139.5,24.1H158v-5.3h-12.2v-4h10.7V9.7h-10.7V6.1h11.9V0.7h-18.2V24.1z"></path>
          <path d="M180,8.9c0-5.9-3.8-8.1-9.6-8.1h-10.1v23.4h6.4V17h3.8C176.2,17,180,14.8,180,8.9z M173.4,8.9c0,2.3-1.1,3.2-3.7,3.2h-3.1 V5.6h3.1C172.3,5.6,173.4,6.6,173.4,8.9z"></path>
          <path d="M181,6.2h7.4v17.9h6.4V6.2h7.4V0.7H181V6.2z"></path>
          <path d="M203.5,23.7c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8s4.8,2.1,4.8,4.8C208.3,21.5,206.1,23.7,203.5,23.7z M203.5,14.9 c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S205.7,14.9,203.5,14.9z"></path>
          <path d="M204,17.2h-1.4v1.6h1.4c0.5,0,0.7-0.3,0.7-0.8C204.7,17.5,204.4,17.2,204,17.2z M203.9,16.4c1.2,0,1.8,0.5,1.8,1.6 c0,0.6-0.3,1.1-0.9,1.3l1.2,1.8h-1.2l-1.1-1.6h-1.2v1.6h-1.1v-4.7H203.9z"></path>
        </svg>
      </span>
      <ul className="w-fit h-fit flex flex-row items-center justify-center gap-4">
        <li className="hover:cursor-pointer">WORK</li>
        <li className="hover:cursor-pointer">ABOUT</li>
        <li className="hover:cursor-pointer">NEWS</li>
        <li className="hover:cursor-pointer">THINKING</li>
        <li className="hover:cursor-pointer">CAREERS</li>
        <li className="hover:cursor-pointer">CONTACT</li>
      </ul>
      <span className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 10"
          className="fill-primary w-8 h-8 hover:cursor-pointer overflow-visible"
        >
          <circle
            cx="2.5"
            cy="2.5"
            r="2.5"
            className="transition-transform group-hover:-translate-x-1"
          ></circle>
          <circle cx="10.5" cy="2.5" r="2.5"></circle>
          <circle
            cx="18.5"
            cy="2.5"
            r="2.5"
            className="transition-transform group-hover:translate-x-1"
          ></circle>
        </svg>
      </span>
    </nav>
  );
}

export default Navigation;
