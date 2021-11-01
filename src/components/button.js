import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const Btn = ({ children, variant, disabled, onClick }) => {
    return (
        <Button
            variant={variant}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default Btn;

Btn.defaultProps = {
    variant: 'contained',
    disabled: false,
    children: '',
};

Btn.propTypes = {
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
