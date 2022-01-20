import React from 'react';
import Layout from '../components/Layout';
import LastModifiedDate from '../components/LastModifiedDate';

export default ({ pageContext, children, ...rest }) => {
  const { frontmatter = {}, titleType, relativePagePath } = pageContext;
  const { title, description, keywords, tabs, logos, showMobile = false } = frontmatter;
  return (
    <Layout
      pageTitle={title}
      titleType={titleType}
      pageDescription={description}
      pageKeywords={keywords}
      relativePagePath={relativePagePath}
      tabs={tabs}
      logos={logos}
      showMobile={showMobile}
      {...rest}
    >
      {children}
    </Layout>
  );
};
