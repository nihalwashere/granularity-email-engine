import { injectIntl } from 'react-intl';

export const injectIntlComponent = (Component) => {
  const InjectIntlComponent = injectIntl(Component);
  InjectIntlComponent.propTypes = Component.propTypes;
  return InjectIntlComponent;
};
