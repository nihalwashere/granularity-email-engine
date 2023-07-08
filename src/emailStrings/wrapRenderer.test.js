import {
  isLanguageInAvailableArray,
  validateOptions,
  validateTimeZoneFormat,
} from './wrapRenderer';

describe('Check if a passed language value is in an Array', () => {
  it('when we pass a language value that is in an available array, it should return to true', () => {
    expect(isLanguageInAvailableArray('de')).toEqual('de');
  });

  it('when we pass a language value that is not in an available array, it should return to value en', () => {
    expect(isLanguageInAvailableArray('nl')).toEqual('en');
  });
});

describe('Check if timezone format is valid', () => {
  it('when we pass valid timezone format, it should return to true', () => {
    expect(validateTimeZoneFormat('America/Tijuana')).toEqual(
      'America/Tijuana',
    );
  });

  it('when we pass valid timezone format, it should return to the default timezone America/Los_Angeles', () => {
    expect(validateTimeZoneFormat('random text')).toEqual(
      'America/Los_Angeles',
    );
  });
});

describe('Validate language, currency, and timeZone options', () => {
  it('when we pass a language value that is in an available array, it should return to correct language value', () => {
    expect(validateOptions({ language: 'de' })).toEqual({
      currency: 'USD',
      language: 'de',
      timeZone: 'America/Los_Angeles',
    });
  });

  it('when we pass a language value that is not in an available array, it should return to en', () => {
    expect(validateOptions({ language: 'nl' })).toEqual({
      currency: 'USD',
      language: 'en',
      timeZone: 'America/Los_Angeles',
    });
  });

  it('when we pass a correct timezone, it should return to the timezone that we passed', () => {
    expect(validateOptions({ timeZone: 'America/Tijuana' })).toEqual({
      currency: 'USD',
      language: 'en',
      timeZone: 'America/Tijuana',
    });
  });

  it('when we pass a wrong timezone format, it should return to the default timezone America/Los_Angeles', () => {
    expect(validateOptions({ timeZone: 'random text' })).toEqual({
      currency: 'USD',
      language: 'en',
      timeZone: 'America/Los_Angeles',
    });
  });
});
