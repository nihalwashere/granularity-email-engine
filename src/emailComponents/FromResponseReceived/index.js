import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Email } from 'react-html-email';
import moment from 'moment-timezone';
import { variables } from '../../styleGuide';
import { injectIntlComponent } from '../injectIntlComponent';
import { QUESTION_TYPE } from '../../enums/QuestionType';

const styles = {
  emailHeader: {
    fontFamily: variables.fontFamily.helvetica,
    fontSize: '24px',
    lineHeight: '130%',
    color: variables.color.black,
    marginTop: '4px',
    marginBottom: '10px',
    paddingTop: '26px',
    textAlign: 'left',
  },
  bodyText: {
    color: variables.color.grey,
    fontFamily: variables.fontFamily.helvetica,
    fontSize: '16px',
    lineHeight: '150%',
    textAlign: 'left',
  },
  questionText: {
    marginBottom: '4px',
    fontFamily: variables.fontFamily.helvetica,
    fontSize: '14px',
  },
  answerText: {
    fontFamily: variables.fontFamily.helvetica,
    fontSize: '16px',
  },
  noResponseText: {
    fontFamily: variables.fontFamily.helvetica,
    fontSize: '16px',
    color: '#4f4747',
  },
  noResponseStatement: {
    fontFamily: variables.fontFamily.helvetica,
    fontSize: '12px',
    color: '#4f4747',
  },
  responseRow: {
    marginTop: '12px',
    marginBottom: '12px',
    textAlign: 'left',
  },
};

const renderAnswer = (response) => {
  if (response.type === QUESTION_TYPE.STATEMENT) {
    return 'This is a statement, hence no response will be recorded.';
  }

  if (response.type === QUESTION_TYPE.DATE) {
    return moment(response.answer).format('LLL');
  }

  if (
    response.type === QUESTION_TYPE.MULTIPLE_CHOICE ||
    response.type === QUESTION_TYPE.DROPDOWN
  ) {
    if (!response.answer.length) {
      return 'No Response';
    }

    return response.answer.toString();
  }

  if (!response.answer) {
    return 'No Response';
  }

  return response.answer;
};

class RenderingFormResponseReceivedEmail extends Component {
  render() {
    const { intl, formTitle, data } = this.props;

    const emailTitle = intl.formatMessage({
      id: 'some-id',
      defaultMessage: 'Your form just received a new response!',
    });

    return (
      <Email title={emailTitle} width="100%">
        <h1 style={styles.emailHeader}>
          <FormattedMessage id="some-id" defaultMessage="Hey there," />
        </h1>

        <p style={styles.bodyText}>
          <FormattedMessage
            id="some-id"
            defaultMessage="Your form {formTitle} received a new response."
            values={{ formTitle }}
          />
        </p>

        <p>
          {data.map((response) => (
            <div key={response.id} style={styles.responseRow}>
              <span style={styles.questionText}>
                {response.number}) {response.questionValue}
              </span>

              <br />

              <span
                style={
                  // eslint-disable-next-line
                  response.type === 'statement'
                    ? styles.noResponseStatement
                    : response.answer
                    ? styles.answerText
                    : styles.noResponseText
                }
              >
                {renderAnswer(response)}
              </span>
            </div>
          ))}
        </p>
      </Email>
    );
  }
}

RenderingFormResponseReceivedEmail.defaultProps = {
  intl: {},
};

RenderingFormResponseReceivedEmail.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
  formTitle: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default injectIntlComponent(RenderingFormResponseReceivedEmail);
