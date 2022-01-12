import React from 'react';
import { Link } from 'gatsby';
import { useHeaderItems } from '../../util/HeaderItems';
import logo from '../../../../site/src/images/headerLogo.png';
import './Header.css';
import { Link as MDSLink } from '@innovaccer/design-system';

const Header = ({ relativePagePath }) => {
  const items = useHeaderItems();
  return (
    <div
      id="mainHeader"
      className='header bg-light d-flex w-100 position-sticky py-2 px-5'
    >
      <Link to='/' className='HeaderLink ml-0 pt-5'>
        <img src={logo} width="290px" height="28px" />
      </Link>
      <div >
        {items.map(({ link, label }, index) => {
          const isExternal =
            link.startsWith('http://') ||
            link.startsWith('https://');

          if (isExternal) {
            return (
              <MDSLink
                key={index}
                href={link}
                className="HeaderLink HeaderLink--default"
                target="_blank"
              >
                {label}
              </MDSLink>
            )
          }
          return (
            <Link
              key={index}
              to={link}
              className={`HeaderLink ${relativePagePath.includes(
                label.toLowerCase()
              )
                ? 'HeaderLink--active'
                : ''
                } ${relativePagePath.includes(
                  label.toLowerCase()
                )
                  ? 'HeaderLink--active'
                  : 'HeaderLink--default'
                }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
