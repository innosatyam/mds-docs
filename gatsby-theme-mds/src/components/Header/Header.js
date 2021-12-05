import React from 'react';
import { Link } from 'gatsby';
import { useHeaderItems } from '../../util/HeaderItems';
import logo from '../../../../site/src/images/headerLogo.png';
import './Header.css';

const Header = ({ relativePagePath }) => {
  const items = useHeaderItems();
  return (
    <div
      id="mainHeader"
      className='header bg-light d-flex w-100 position-sticky py-2 px-5'
    >
      <Link to='/' className='HeaderLink ml-0 pt-5'>
        <img src={logo} height="28px" />
      </Link>
      <div >
        {items.map(({ link, label }, index) => {
          const isExternal =
            link.startsWith('http://') ||
            link.startsWith('https://');
          return (
            <Link
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
              target={isExternal && '_blank'}
            >
              {label}
            </Link>
          );
        })}
      </div>
      {/* <Input
        className='w-25 flex-grow-0 ml-auto'
        icon='search'
        name='input'
        placeholder='Search components, patterns, principles...'
      /> */}
    </div>
  );
};

export default Header;
