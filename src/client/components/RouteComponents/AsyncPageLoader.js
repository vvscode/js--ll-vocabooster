import Loadable from 'react-loadable';
import { setTitle } from 'client/utils/window';

import Loading from './Loading';

const DEFAULT_TITLE = 'Lingualeo VocaBooster';
const TITLE_PREFIX = '[Lingualeo VocaBooster]: ';
const TITLE_POSTFIX = ' *';

const PageComponent = path =>
  // https://github.com/jamiebuilds/react-loadable
  Loadable({
    loader: (...args) =>
      import(`client/routes/${path}`)
        // it also handles async `action` hooks
        .then(({ default: action }) => action(...args))
        .then(({ component, title }) => {
          let newTitle;
          if (!title) {
            newTitle = DEFAULT_TITLE;
          } else {
            newTitle = `${TITLE_PREFIX}${title}${TITLE_POSTFIX}`;
          }
          setTitle(newTitle);
          return component;
        }),
    loading: Loading,
  });

export default PageComponent;
