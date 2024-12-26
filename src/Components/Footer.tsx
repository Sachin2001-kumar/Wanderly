import { Link } from "react-scroll";
import { Footer_contact, Footer_LINKS } from "./Data";
// import { Footer_Social } from "./Data";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[8%] md:flex-row">
          <a href="/" className="mb-10">
            <img
              src="/src/assets/hilink-logo.svg"
              alt="Hilink Logo"
              width={74}
              height={29}
            />
          </a>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 ">
            {Footer_LINKS.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-500 items-baseline">
                  {column.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to="/"
                        className="text-gray-600 hover:text-gray-800 cursor-pointer"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5 items-start">
              {Footer_contact.map((column) => (
                <FooterColumn key={column.title} title={column.title}>
                  <div className="flex flex-col gap-5 items-start">
                    {column.links.map((link) => (
                      <div key={link.label} className="flex flex-row gap-2">
                        <p className="whitespace-nowrap font-medium">
                          {link.label}:
                        </p>
                        <p className="medium-14 whitespace-nowrap text-blue-70">
                          {link.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </FooterColumn>
              ))}
            </div>

            <div className="flex flex-col gap-5 items-start">
              <h4 className="text-black font-bold text-lg">Social</h4>
              <div className="flex flex-row gap-5 cursor-pointer pb-1.5">
                <img
                  src="src/assets/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="transition-transform transform hover:scale-110"
                />
                <img
                  src="src/assets/youtube.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="transition-transform transform hover:scale-110"
                />
                <img
                  src="src/assets/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="transition-transform transform hover:scale-110"
                />
                <img
                  src="src/assets/wordpress.svg"
                  alt="WordPress"
                  width={20}
                  height={20}
                  className="transition-transform transform hover:scale-110"
                />
                <img
                  src="src/assets/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="transition-transform transform hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-black font-bold text-lg">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
