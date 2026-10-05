import * as React from 'react';
import {
  footerColumns,
  footerContact,
  footerSocial,
  footerBottom,
} from '../data/footerData';
import Image from 'next/image';

const FooterHeading: React.FC<{ text: string }> = ({ text }) => (
  <div className="footer-heading">
    <h4>{text}</h4>
    <span className="footer-line" />
  </div>
);

export const Footernew: React.FC = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-grid">
        {footerColumns.map((col) => (
          <div className="footer-col" key={col.id}>
            <FooterHeading text={col.title} />
            <ul className="footer-links">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col">
          <FooterHeading text={footerContact.title} />
          <ul className="footer-contact">
            {footerContact.items.map(({ id, icon: Icon, label, value, href }) => (
              <li key={id}>
                <a href={href} className="footer-contact-item">
                  <span className="footer-icon-box">
                    <Icon />
                  </span>
                  <span className="footer-contact-text">
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                </a>
              </li>
            ))}
          </ul>
                <div className="footer-social-wrap">


            <FooterHeading text={footerSocial.title} />

      <div className="footer-social">

  {footerSocial.items.map(({ id, image, name, href }) => (
    <a key={id} href={href} aria-label={name} className="footer-social-link">
      <Image src={image} alt={name} width={24} height={24} />
    </a>
  ))}
</div>
</div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>{footerBottom.copyright}</p>
        <div className="footer-legal">
          {footerBottom.legalLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footernew;