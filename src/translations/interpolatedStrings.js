import en from './original/en.json';
import { stringsToBeInterpolated } from './stringsToBeInterpolated';
import { updateObjectValue, interpolate } from '../helpers';

export const updateOriginalStringsArray = (originalStringsArray) => {
  Object.keys(stringsToBeInterpolated).map((key) => {
    const originalString = originalStringsArray[key] || en[key];
    const newValues = stringsToBeInterpolated[key];
    const interpolatedString = interpolate(originalString, newValues);

    return updateObjectValue(originalStringsArray, key, interpolatedString);
  });
};
