import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
/* import config from '../config'; */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired,
      }).isRequired,
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.shape({}).isRequired,
    children: PropTypes.string,
  };

  static defaultProps = {
    title: 'Lingualeo VocaBooster',
    styles: [],
    scripts: [],
    children: null,
  };

  render() {
    const { title, description, styles, scripts, app, children } = this.props;

    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {scripts.map(script => (
            <link key={script} rel="preload" href={script} as="script" />
          ))}
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          {/* Put thirdparty styles/scripts below  */}
          {/* <link rel="stylesheet" href="/thirdparty/..." /> */}
          {/* todo: find out why `import 'semantic-ui-css/semantic.min.css';` doesn't work */}
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />

          {/* eslint-disable react/no-danger */}
          {styles.map(style => (
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />
          ))}
          {/* eslint-enable react/no-danger */}
        </head>
        <body>
          {/* eslint-disable react/no-danger */}
          <div
            id="app"
            style={{ height: '100%', fontSize: '12px' }}
            dangerouslySetInnerHTML={{ __html: children }}
          />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {/* eslint-enable react/no-danger */}
          {scripts.map(script => <script key={script} src={script} />)}
        </body>
      </html>
    );
  }
}

export default Html;
