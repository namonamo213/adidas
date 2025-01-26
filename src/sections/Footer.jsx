import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer id="contact" className="max-container">
      <div className="flex flex-col flex-wrap justify-between items-start gap-20">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="text-white mt-6 max-w-xs">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
        </div>
        <div className="flex gap-5">
          {socialMedia.map((icon) => (
            <div
              className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              key={icon.alt}
            >
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>

        <div className="flex flex-1 gap-10 justify-between text-white">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat font-bold">{section.title}</h4>

              <ul>
                {section.links.map((link) => (
                  <li className="font font-montserrat">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-6 justify-between items-center">
        <div className="flex text-white info-text gap-2">
          <img src={copyrightSign} alt="" />
          <p>All rights reserved</p>
        </div>
        <p className="text-white info-text">Terms And Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
