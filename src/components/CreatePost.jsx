import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../components/InputField';
import '../css/PostNew.css';

export default function CreatePost(props) {
  const { fields, submitBtnText, onSubmitNew, onChange } = props;

  const handleChange = (name, value) => onChange(name, value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitNew();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {fields.map((o) => (
        <InputField {...o} onChange={handleChange} key={o.name} />
      ))}
      <button type="submit">{submitBtnText}</button>
    </form>
  );
}

CreatePost.defaultProps = {
  fields: [],
  submitBtnText: 'Добавить',
};

CreatePost.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  submitBtnText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
