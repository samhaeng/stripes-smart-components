/**
 * Reset Button
 *
 * A disapearable button with a delay
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import Icon from '@folio/stripes-components/lib/Icon';
import Button from '@folio/stripes-components/lib/Button';

const ResetButton = ({ id, label, onClick, visible, delay, duration, ...rest }) => {
  const defaultStyle = {
    'transition': `max-height ${duration}ms ease-in-out`,
    'transition-delay': `${delay}ms`,
    'max-height': 0,
    'overflow': 'hidden',
  };

  const transitionStyles = {
    entering: { 'max-height': 0 },
    entered: { 'max-height': '1000px' },
  };

  return (
    <Transition in={visible} timeout={duration}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <Button buttonStyle="none" paddingSide0 onClick={onClick} id={id} {...rest}>
            <Icon size="small" icon="clearX" />
            {label}
          </Button>
        </div>
      )}
    </Transition>
  );
};

ResetButton.defaultProps = {
  delay: 500,
  duration: 500,
};

ResetButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.node,
  visible: PropTypes.bool,
  delay: PropTypes.number,
  duration: PropTypes.number,
};

export default ResetButton;
