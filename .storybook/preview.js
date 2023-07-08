import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import { messages } from '../src/translations';
import requireContext from 'require-context.macro';

const req = requireContext('../src', true, /stories.js/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator((storyFn) => {
  return (
    <IntlProvider locale="en" messages={messages.en}>
      {storyFn()}
    </IntlProvider>
  );
});

configure(loadStories, module);
