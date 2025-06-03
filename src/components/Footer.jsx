import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg:px-32 md:px16 px-8 border-t-[0.3px] border-[#babaff]">
      <div className="flex w-full justify-between items-center gap-4">
        <img className="h-10" src="/images/illu-text.png" alt="illu-text" />

        <img
          className="h-16 md:inline hidden"
          src="/public/images/illu-logo.png"
          alt="illu-logo"
        />

        <div className="flex gap-4">
          <a
            className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
            href="#"
          >
            <i class="bx bxl-linkedin-square"></i>{" "}
          </a>
          <a
            className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
            href="#"
          >
            <i class='bx bxl-facebook-square'></i>{" "}
          </a>
          <a
            className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
            href="#"
          >
            <i class='bx bxl-instagram'></i>{" "}
          </a>
          <a
            className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
            href="#"
          >
            <i class="bx bxl-discord"></i>{" "}
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <p className="text-sm hover:text-violet-600 duration-300 text-center">
          © 2025 Illuvium Inc. All rights reserved. <br /> Illuvium™ and its respective logos are trademarks of Illuvium Inc.

        </p>
      </div>
    </footer>
  );
};

export default Footer;
