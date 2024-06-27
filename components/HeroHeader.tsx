import React from "react";

function HeroHeader() {
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1
            contentEditable
            className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-6xl"
          >
            Medium length hero heading goes here
          </h1>
          <p className="md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <button className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3">
              Button
            </button>
            <button className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3">
              Button
            </button>
          </div>
        </div>
        <div className="flex w-screen justify-start overflow-hidden">
          <div className="grid shrink-0 grid-cols-1 gap-y-4">
            <div className="grid w-full animate-marquee-top auto-cols-fr grid-cols-2 gap-4 self-center">
              <div className="grid w-full grid-flow-col gap-4">
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 1"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 2"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 3"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 4"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 5"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 6"
                  />
                </div>
              </div>
              <div className="grid w-full grid-flow-col gap-4">
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 1"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 2"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 3"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 4"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 5"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 6"
                  />
                </div>
              </div>
            </div>
            <div className="grid w-full animate-marquee-bottom grid-cols-2 gap-4 self-center">
              <div className="grid w-full grid-flow-col gap-4">
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 1"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 2"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 3"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 4"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 5"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 6"
                  />
                </div>
              </div>
              <div className="grid w-full grid-flow-col gap-4">
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 1"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 2"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 3"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 4"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 5"
                  />
                </div>
                <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroHeader;
    