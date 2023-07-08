import React from 'react';
import { IntlProvider } from 'react-intl';
import { messages } from '../translations';

export const wrapStoryComponentWithIntl = (storyRenderer) => () => (
  <IntlProvider locale="en" messages={messages.en}>
    {storyRenderer()}
  </IntlProvider>
);
