import React from 'react';
import { renderEmail } from 'react-html-email';
import { assertPropTypes } from 'check-prop-types';
import { IntlProvider } from 'react-intl';
import moment from 'moment-timezone';
import log from 'loglevel';
import { messages } from '../translations';

function validatePropTypes(component, props = {}) {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  assertPropTypes(component.propTypes, props, 'prop', component.name);
}

export function isLanguageInAvailableArray(language) {
  const availableLanguages = [
    'en',
    'de',
    'es',
    'fr',
    'it',
    'pt',
    'zh-hans',
    'zh-hant',
  ];
  if (!availableLanguages.includes(language)) {
    log.warn('No language found in options - defaulting to "en"');
    return 'en';
  }
  return language;
}

export function validateTimeZoneFormat(timezone) {
  if (!moment.tz.zone(timezone)) {
    log.warn(
      'No timeZone found in options - defaulting to "America/Los_Angeles"',
    );
    return 'America/Los_Angeles';
  }
  return timezone;
}

export function validateOptions({ language, currency, timeZone }) {
  return {
    language: isLanguageInAvailableArray(language),
    currency: currency || 'USD',
    timeZone: validateTimeZoneFormat(timeZone),
  };
}

export function wrapRenderFunction(Component) {
  return function render(
    props,
    options = {
      language: 'en',
      currency: 'USD',
      timeZone: 'America/Los_Angeles',
    },
  ) {
    const validatedOptions = validateOptions(options);
    const propsAndOptions = {
      ...props,
      ...options,
    };
    validatePropTypes(Component, propsAndOptions);
    const { language } = validatedOptions;
    return renderEmail(
      <IntlProvider locale={language} messages={messages[language]}>
        <Component {...propsAndOptions} />
      </IntlProvider>,
    );
  };
}
