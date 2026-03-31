import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-blue-200/60 to-white mt-30">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          <a href="#">
            <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
          </a>
          <div>
            <p className="text-slate-950 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">Support</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">Pricing</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">Affiliate</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-950 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a className="hover:text-blue-600 transition">Company</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">Blogs</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">Community</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">Careers</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">About</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-950 font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a className="hover:text-blue-600 transition">Privacy</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60">
            Making every customer feel valued—no matter the size of your
            audience.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <a
              href="https://github.com/Neerajkr-jha"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github size-5 hover:text-blue-500"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.04A9.36 9.36 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.31 2.74-1.04 2.74-1.04.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.75-4.57 5 .36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.16.59.67.48A10.26 10.26 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jha-neerajyk"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin size-5 hover:text-blue-500"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://x.com/jha_neeraj29"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter size-5 hover:text-blue-500"
                aria-hidden="true"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube size-6 hover:text-blue-500"
                aria-hidden="true"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>
          <p className="mt-3 text-center">
            © 2025 <a>resume.</a>
          </p>
        </div>
      </footer>

      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
    </>
  );
}

export default Footer;
