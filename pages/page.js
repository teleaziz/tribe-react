import React from 'react';
import Head from 'next/head';
import { builder, BuilderComponent } from '@builder.io/react';
// Allow interactive widgets in the editor (importing registers the react components)
import '@builder.io/widgets';
import Nav from '../components/nav';

const BUILDER_API_KEY = '073680d998ed4e79834480ca32359926';
builder.init(BUILDER_API_KEY);

class CatchallPage extends React.Component {
  static async getInitialProps({ res, req, asPath }) {
    // Get the upcoming route full location path and set that for Builder.io page targeting
    const path = asPath.split('?')[0];
    builder.setUserAttributes({ urlPath: path });

    const [page, header, footer] = await Promise.all([
      // 'page' is the model name for your pages. If you made a new model with a different name,
      // such as 'my-page', use `builder.get('my-page', ...)
      builder.get('page', { req, res }).promise(),
      // 'header' is the model name for your header
      builder.get('header', { req, res }).promise(),
      // 'footer' is the model name for your footer
      builder.get('footer', { req, res }).promise(),
    ]);

    if (res && !page) {
      res.statusCode = 404;
    }
    return { builderPage: page, header, footer };
  }

  render() {
    const { builderPage, header, footer } = this.props;
    return (
      <>
        <Nav />
    { header && <BuilderComponent name="header" content={header} /> }
        <div>
          {builderPage ? (
            <>
              <Head>
                <title>{builderPage.data.title}</title>
              </Head>
              <BuilderComponent name="page" content={builderPage} />
            </>
          ) : (
            <div>Page not found!</div>
          )}
      { footer && <BuilderComponent name="footer" content={footer} /> }
        </div>
      </>
    );
  }
}

export default CatchallPage;
