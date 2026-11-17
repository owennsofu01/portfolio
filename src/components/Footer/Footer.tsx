import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const pages = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/owen-nsofu-93169b300", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Owen123Nsofu", label: "GitHub" },
  { icon: FaFacebook, href: "https://web.facebook.com/profile.php?id=100078009960924", label: "Facebook" },
];

export const Footer = () => (
  <footer className="bg-teal-950 text-gray-400 px-4 sm:px-6 lg:px-8 border-t border-white/10">
    <div className="max-w-6xl mx-auto py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <Link to="/" className="text-lg font-bold text-white">Owen Nsofu</Link>
        <p className="mt-3 max-w-xs text-sm leading-relaxed">
          Software engineer building web and mobile products from Lusaka, Zambia.
        </p>
        <div className="mt-5 flex gap-1 -ml-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:text-white hover:bg-white/5 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">Pages</p>
        <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
          {pages.map((p) => (
            <li key={p.href}>
              <Link to={p.href} className="hover:text-white transition-colors">{p.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">Contact</p>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="mailto:owennsofu01@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
              <FaEnvelope className="text-teal-300" aria-hidden="true" /> owennsofu01@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+260764670944" className="flex items-center gap-3 hover:text-white transition-colors">
              <FaPhone className="text-teal-300" aria-hidden="true" /> +260 764 670 944
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-teal-300" aria-hidden="true" /> Lusaka, Zambia
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-6xl mx-auto py-6 border-t border-white/10 text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Owen Nsofu. All rights reserved.
    </div>
  </footer>
);
