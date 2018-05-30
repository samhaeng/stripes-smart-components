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

const ResetButton = ({ id, label, onClick, className, visible, ...rest }) => {
  const maxHeightTransitionDelay = 750;
  const maxHeightTransitionDuration = 1000;
  const opacityTransitionDuration = maxHeightTransitionDuration - 400;
  const opacityTransitionDelay = maxHeightTransitionDelay - 100;

  const defaultStyle = {
    transition: `
      opacity ${opacityTransitionDuration}ms ease-in-out ${opacityTransitionDelay}ms,
      max-height ${maxHeightTransitionDuration}ms linear ${maxHeightTransitionDelay}ms
    `,
    maxHeight: 0,
    opacity: 0,
    overflow: 'hidden',
  };

  const transitionStyles = {
    entering: {
      maxHeight: 0,
      opacity: 0,
      overflow: 'hidden',
    },
    exiting: {
      transition: `
        opacity ${opacityTransitionDuration}ms ease-in-out ${maxHeightTransitionDelay + 600}ms,
        max-height ${maxHeightTransitionDuration}ms linear ${maxHeightTransitionDelay}ms
      `,
    },
    entered: {
      maxHeight: '250px',
      overflow: 'visible',
      opacity: 1
    },
  };

  return (
    <Transition in={visible} timeout={maxHeightTransitionDuration}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }} className={css.resetButtonRoot} >
          <Button buttonStyle="none" paddingSide0 onClick={onClick} id={id} {...rest} disabled={!visible} buttonClass={classnames(css.button, className)}>
            <Icon size="small" icon="clearX" />
            {label}
          </Button>
        </div>
      )}
    </Transition>
  );
};

ResetButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.node,
  visible: PropTypes.bool,
  className: PropTypes.string,
};

export default ResetButton;
