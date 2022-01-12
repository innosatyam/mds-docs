import React, { useEffect } from 'react';
import {
  Heading,
  Tabs,
  Tab,
} from '@innovaccer/design-system';
import { navigate } from 'gatsby';

const ComponentsContainer = ({
  children,
  pageTitle,
  relativePagePath,
  tabs,
  pageDescription,
}) => {
  const page = relativePagePath.split('/');
  const pageName = page[page.length - 1].split('.')[0];

  const getTabSlug = (tabIndex) => {
    const tabName = tabs[tabIndex];
    let tabSlug = '';
    if (tabName.length) {
      tabSlug = tabName.toLowerCase().replace(/\s/g, '-');
    }
    return tabSlug;
  };

  const activeTab =
    tabs && tabs.length
      ? tabs.findIndex(
        (tab, index) =>
          getTabSlug(index) === pageName.toLowerCase()
      )
      : '';

  const [activeIndex, setActiveIndex] = React.useState(
    activeTab || 0
  );

  const onTabChangeHandler = (tabIndex) => {
    const nextTabSlug = getTabSlug(tabIndex);
    const pagePath = relativePagePath.split('/');
    const pages = pagePath.slice(0, pagePath.length - 1);
    const path = `${pages.join('/')}/${nextTabSlug}/`;
    navigate(path);
    setActiveIndex(tabIndex);
  };

  return (
    <>
      <Heading>{pageTitle}</Heading>
      <p>{pageDescription}</p>
      {tabs && tabs.length && (
        <div className='mb-7 mt-4'>
          <Tabs
            activeIndex={activeIndex}
            onTabChange={onTabChangeHandler}
          >
            {tabs.map((tab, index) => (
              <Tab label={tab} key={index}></Tab>
            ))}
          </Tabs>
        </div>
      )}
      {children}
    </>
  );
};

export default ComponentsContainer;
