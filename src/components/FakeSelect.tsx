import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface FakeSelect {
  options: Array<Option>;
  label: string;
  value: Option;
  placeholder: string;
  onChange: Function;
}

const FakeSelect = ({ options, label, value, placeholder, onChange }: FakeSelect) => {
  return (<div id='fake-select'>
    {value.label || value || label || placeholder }
    {options.map(option => <li key={option.value} onClick={() => onChange(option)}>{option.label}
      {label}
    </li>)}
  </div>);
};

FakeSelect.defaultProps = {
  options: [],
  label: '',
  value: false,
  placeholder: '- Seleccionar -',
  onChange: () => { },
}

import PropTypes from 'prop-types';
FakeSelect.propTypes = {
  options: PropTypes.object.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default FakeSelect;
