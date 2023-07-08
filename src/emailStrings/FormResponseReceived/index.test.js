import pretty from 'pretty';
import { stringOfFormResponseReceivedEmail } from './index';

describe('it should validate stuff', () => {
  it('when we pass all props correctly, we will get rendered string', () => {
    expect(
      pretty(
        stringOfFormResponseReceivedEmail({
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
        }),
      ),
    ).toMatchSnapshot();
  });

  it('when we dont pass anything we should get a validation error', () => {
    expect(() =>
      stringOfFormResponseReceivedEmail(),
    ).toThrowErrorMatchingSnapshot();
  });
});
