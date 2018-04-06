import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Title from './application';

const renderApp = (App) => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('[data-js="application"]')
  );
};

renderApp(Title);

if (module.hot) {
  module.hot.accept('./application', () => {
    const NextApp = require('./application').default;
    renderApp(NextApp);
  });
}
