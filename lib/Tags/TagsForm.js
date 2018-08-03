import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import stripesForm from '@folio/stripes-form';
import Button from '@folio/stripes-components/lib/Button';
import TextField from '@folio/stripes-components/lib/TextField';

class TagsForm extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
      intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
      }),
    }).isRequired,
    form: PropTypes.string,
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    submitting: PropTypes.bool,
    pristine: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }

  handleClickSubmit() {
    this.props.handleSubmit();
    this.props.reset();
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      this.handleClickSubmit();
    }
  }

  render() {
    const {
      form,
      pristine,
      submitting,
    } = this.props;

    const formatMsg = this.props.stripes.intl.formatMessage;

    return (
      <form>
        <Field
          name="tags"
          placeholder={formatMsg({ id: 'stripes-smart-components.enterATag' })}
          aria-label={formatMsg({ id: 'stripes-smart-components.tagsTextArea' })}
          fullWidth
          id="tags_textfield"
          component={TextField}
          onKeyDown={this.handleKeyDown}
        />
        <div style={{ textAlign: 'right' }}>
          <Button disabled={pristine || submitting} onClick={this.handleClickSubmit} aria-label={formatMsg({ id: 'stripes-smart-components.addTag' })}>
            <FormattedMessage id="stripes-smart-components.addTag" />
          </Button>
        </div>
      </form>
    );
  }
}

export default stripesForm({
  form: 'TagsForm',
  enableReinitialize: true,
})(TagsForm);
