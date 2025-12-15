import React from "react";

export default function Hero(props) {
  return (
    <div className="relative w-full">
      {/* HERO IMAGE */}
      <div
        className={`
          w-full relative
          ${props.cName === "hero" ? "h-screen" : "h-[80vh]"}
        `}
      >
        <img
          src={props.heroImg}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* HERO TEXT */}
      <div
        className="
          absolute top-[55%] left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-full px-6 md:px-12
          text-center
        "
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          {props.title}
        </h1>

        <p className="mt-4 text-lg md:text-2xl font-extrabold text-white">
          {props.text}
        </p>

        {props.buttonText && (
          <a
            href={props.url}
            className="
              inline-block mt-6
              px-6 py-3
              bg-white text-black
              font-semibold
              rounded-lg
              hover:bg-black hover:text-white
              transition duration-300
            "
          >
            {props.buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
