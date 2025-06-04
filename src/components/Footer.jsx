import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-6 mt-12 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-center md:text-left text-gray-800 text-sm">
          © 2025 XYZ Vinç Hizmetleri. Tüm hakları saklıdır.
        </p>
        <p className="text-center md:text-right mb-4 md:mb-0 text-gray-800 text-sm">
          Telefon: 0 (530) 000 00 00 • E-posta: info@xyzvinc.com
        </p>
        <div className="flex space-x-4 text-gray-800 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
