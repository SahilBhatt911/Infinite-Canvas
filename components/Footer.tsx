import React from "react";

function Footer() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr,1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="#" className="mb-5 md:mb-6">
              <img
                src="https://relume-assets.s3.amazonaws.com/logo-image.svg"
                alt="Logo image"
                className="inline-block"
              />
            </a>
            <p className="mb-5 md:mb-6">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="max-w-md">
              <div className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4">
                <div className="relative flex size-full items-center">
                  <input
                    className="flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="focus-visible:ring-border-primary inline-flex gap-3 whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-5 py-2 items-center justify-center">
                  Subscribe
                </button>
              </div>
              <div>
                <p className="text-xs">
                  By subscribing you agree to with our
                  <a href="#" className="underline focus-visible:outline-none">
                    Privacy Policy
                  </a>
                  and provide consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Column One</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link One</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link Two</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link Three</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link Four</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link Five</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Column Two</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link Six</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link Seven</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link Eight</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link Nine</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>Link Ten</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Follow us</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="size-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                      </svg>
                    </span>
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="size-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                      </svg>
                    </span>
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        className="size-6 p-0.5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                    </span>
                    <span>X</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="size-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                      </svg>
                    </span>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 focus-visible:outline-none"
                  >
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="size-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                      </svg>
                    </span>
                    <span>Youtube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black"></div>
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-6 md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#" className="focus-visible:outline-none">
                Privacy Policy
              </a>
            </li>
            <li className="underline">
              <a href="#" className="focus-visible:outline-none">
                Terms of Service
              </a>
            </li>
            <li className="underline">
              <a href="#" className="focus-visible:outline-none">
                Cookies Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
