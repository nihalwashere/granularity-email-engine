import React from 'react';
import { storiesOf } from '@storybook/react';
import RenderingFormResponseReceivedEmail from './index';
import { wrapStoryComponentWithIntl } from '../wrapStoryComponent';

const props = {
  formTitle: 'Customer Feedback',
  data: [
    {
      id: 1,
      number: 1,
      type: 'text',
      questionValue: 'What is your name?',
      answer: 'Nihal',
    },
    {
      id: 2,
      number: 2,
      type: 'text',
      questionValue: 'Where do you work at?',
      answer: 'Granularity',
    },
    {
      id: 3,
      number: 3,
      type: 'text',
      questionValue: 'What is your work email?',
      answer: 'nihal@getgranularity.com',
    },
  ],
};

storiesOf('Emails/FormResponseReceived', module).add(
  'email',
  wrapStoryComponentWithIntl(() => (
    <RenderingFormResponseReceivedEmail {...props} /> // eslint-disable-line
  )),
);
