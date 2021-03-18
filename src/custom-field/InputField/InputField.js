import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup } from 'reactstrap';
import './InputField.scss'

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
}

function InputField(props) {
  const {
    field, form,
    type, label, placeholder, disabled,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      <div className="field">
        {label && <label className="field-label" htmlFor={name}>{label}</label>}
        <input
          className="field-input"
          id={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...field}
        />
        <div className="validate-message">
          {showError ? errors[name] : ""}
        </div>
      </div>
    </FormGroup>
  );
}

export default InputField;
