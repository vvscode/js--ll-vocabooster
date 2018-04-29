import React from 'react';
import ReactDOM from 'react-dom/server';

import chunks from './chunk-manifest.json'; // eslint-disable-line import/no-unresolved
import Html from '../Html';

export default function initialRender(req, res, next) {
  try {
    const css = new Set();
    const data = {};
    data.styles = [{ id: 'css', cssText: [...css].join('') }];
    const scripts = new Set();
    const addChunk = chunk => {
      if (chunks[chunk]) {
        chunks[chunk].forEach(asset => scripts.add(asset));
      } else if (__DEV__) {
        throw new Error(`Chunk with name '${chunk}' cannot be found`);
      }
    };
    addChunk('client');

    data.scripts = Array.from(scripts);
    data.app = {
      // you could pass some info from server side to client side
    };
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
}
