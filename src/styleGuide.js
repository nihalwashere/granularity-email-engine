export const variables = {
  color: {
    white: '#FFFFFF',
    primary: '#36ACB2',
    black: '#29333D',
    borderLight: '#E2EDF3',
    grey: '#5C6670',
    green: '#17C27E',
    backgroundPrimary: '#FF9800',
    red: '#FD4759',
  },
  border: {
    borderLight: '1px solid #E9E9E9',
  },
  fontFamily: {
    helvetica: 'Helvetica',
  },
  marginBetweenComponents: {
    height: '24px',
  },
};

export const styleGuide = {
  bodyContainer: {
    border: variables.border.borderLight,
    padding: '28px 30px',
    background: variables.color.white,
    textAlign: 'center',
    fontFamily: variables.fontFamily.helvetica,
    fontSize: '100%',
  },
  heading: {
    fontSize: '30px',
    color: variables.color.black,
    marginBottom: '16px',
    textAlign: 'center',
  },
  bodyText: {
    lineHeight: '19px',
    fontSize: '14px',
    color: variables.color.black,
    textAlign: 'center',
  },
  buttonContainer: {
    background: variables.color.primary,
    display: 'inline-block',
    padding: '16px 40px',
    textAlign: 'center',
    margin: '20px',
    boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.15)',
  },
  button: {
    textTransform: 'uppercase',
    color: variables.color.white,
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '16px',
  },
};
