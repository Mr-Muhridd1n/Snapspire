import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-800 w-full px-9 py-15">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-white">Snapspire</h1>
          <div className="flex gap-3 mb-5">
            <div
              className="border-2 rounded-full p-3 text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              <FaFacebookF />
            </div>
            <div
              className="border-2 rounded-full p-3 text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              <FaInstagram />
            </div>
            <div
              className="border-2 rounded-full p-3 text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              <FaTiktok />
            </div>
            <div
              className="border-2 rounded-full p-3 text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              <FaYoutube />
            </div>
          </div>
          <p className="text-white font-semibold">
            &copy; 2025 Build width Slider Revolution
          </p>
        </div>
        <div className="text-gray-500 flex flex-col max-w-80 gap-2">
          <h3 className="text-white text-2xl">Contact</h3>
          <a href="mailto:test@gmail.com">test@gmail.com</a>
          <a href="tel:+998911111111" className="mb-4">
            +998 91 111 11 11
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            sed!
          </p>
        </div>
        <div className="text-gray-500 flex flex-col gap-2 w-80">
          <h3 className="text-white text-2xl">Sitemap</h3>
          <Link to="/">About</Link>
          <Link to="/">Features</Link>
          <Link to="/">Team</Link>
          <Link to="/">Free Image</Link>
        </div>
      </div>
    </footer>
  );
};
