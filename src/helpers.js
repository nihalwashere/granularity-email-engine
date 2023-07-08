import React from 'react';
import isISODate from 'is-iso-date';
import { createPropType } from 'react-custom-proptypes';

export const generateKey = (pre, index) => `${pre}_${index}`;

export const updateObjectValue = (originalObject, key, newValue) => {
  const objectName = originalObject;
  const newObj = { ...objectName };
  objectName[key] = newValue;
  return newObj;
};

export const interpolate = (originalString, argumentArray) => {
  const regex = /%s/;
  const replaceFunction = (string, argument) => string.replace(regex, argument);
  return argumentArray.reduce(replaceFunction, originalString);
};

export const linesToParagraphs = (...nodes) =>
  nodes
    .map((node) =>
      typeof node === 'string'
        ? node.split('\n').map((text) => <p key={text}>{text}</p>)
        : node,
    )
    .reduce((elements, node) => elements.concat(node), []);

export const isoDateString = createPropType((prop) => isISODate(prop));
