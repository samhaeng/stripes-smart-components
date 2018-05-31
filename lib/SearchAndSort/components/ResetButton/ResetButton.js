/**
 * Reset Button
 *
 * A delayed disapearable button
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; /* eslint-disable-line import/no-extraneous-dependencies */
import { Transition } from 'react-transition-group'; /* eslint-disable-line import/no-extraneous-dependencies */
import Icon from '@folio/stripes-components/lib/Icon';
import Button from '@folio/stripes-components/lib/Button';
import css from './ResetButton.css';

const ResetButton = ({ id, label, onClick, className, visible, delay, duration, ...rest }) => {
  const defaultStyle = {
    'transition': `max-height ${duration}ms ease-in-out`,
    // 'transition-delay': `${delay}ms`,
    'max-height': 0,
    'overflow': 'hidden',
  };

  const transitionStyles = {
    entering: { 'max-height': 0 },
    entered: { 'max-height': '1000px' },
  };

  return (
    <Transition in={visible} timeout={delay}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }} className={css.resetButtonRoot}>
          <Button buttonStyle="none" paddingSide0 onClick={onClick} id={id} {...rest} disabled={!visible} buttonClass={classnames(css.button, className)}>
            <Icon size="small" icon="clearX" />
            {label}
          </Button>
        </div>
      )}
    </Transition>
  );
};

ResetButton.defaultProps = {
  delay: 1000,
  duration: 1000,
};

ResetButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.node,
  visible: PropTypes.bool,
  delay: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default ResetButton;
