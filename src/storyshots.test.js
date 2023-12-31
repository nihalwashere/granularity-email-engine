import initStoryshots from '@storybook/addon-storyshots';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

initStoryshots({
  renderer: mount,
  serializer: toJSON,
});
