import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center items-center h-20 bg-white text-slate-900 border-t border-slate-300">
        <p className="text-center">
          made with ❤️ by{" "}
          <a
            href="https://rzkyfhrzi21.is-a.dev/"
            target="_blank"
            className="font-semibold text-blue-500"
          >
            Rizky Fahrezi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
