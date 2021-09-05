import React from 'react';
import PropTypes from 'prop-types';

var FakeSelect = function FakeSelect(_ref) {
  var options = _ref.options,
      label = _ref.label,
      value = _ref.value,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("div", {
    id: "fake-select"
  }, value.label || value || label || placeholder, options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option.value,
      onClick: function onClick() {
        return onChange(option);
      }
    }, option.label, label);
  }));
};

FakeSelect.defaultProps = {
  options: [],
  label: '',
  value: false,
  placeholder: '- Seleccionar -',
  onChange: function onChange() {}
};
FakeSelect.propTypes = {
  options: PropTypes.object.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export { FakeSelect as default };
//# sourceMappingURL=FakeSelect.js.map
