import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ReactSelect from 'react-select';

const Select = ({ ...props }) => {
  const theme = useContext(ThemeContext);

  const setOptionBg = ({ isSelected, isFocused }) => {
    const colors = theme.colors.select;

    if (isSelected && isFocused) {
      return colors.optionFocusedAndSelectedBg;
    }
    if (isSelected) {
      return colors.optionSelectedBg;
    }
    if (isFocused) {
      return colors.optionFocusedBg;
    }
  };

  const customStyles = {
    container: provided => ({
      ...provided,
    }),
    placeholder: provided => ({
      ...provided,
      color: theme.colors.textPlaceholder,
      fontWeight: 600,
    }),
    input: provided => ({
      ...provided,
      color: theme.colors.text,
      cursor: 'text',
    }),
    singleValue: provided => ({
      ...provided,
      color: theme.colors.text,
      cursor: 'text',
    }),
    valueContainer: provided => ({
      ...provided,
      cursor: 'text',
    }),
    indicatorSeparator: () => {},
    menu: provided => ({
      ...provided,
      backgroundColor: theme.colors.element,
      boxShadow: theme.shadowElement,
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? 600 : 'initial',
      color: theme.colors.text,
      backgroundColor: setOptionBg(state),
      '&:active': {
        backgroundColor: theme.colors.select.optionActiveBg,
      },
      opacity: state.isFocused ? 0.8 : 1,
      cursor: 'pointer',
    }),
    control: (provided, state) => ({
      ...provided,
      height: '60px',
      backgroundColor: theme.colors.element,
      border: 'none',
      borderRadius: '5px',
      paddingLeft: '5px',
      fontSize: '1em',
      transition: 'none',
      boxShadow: state.isFocused ? `0 0 0 1px ${theme.colors.focusBorder}` : theme.shadowElement,
      cursor: 'pointer',
    }),
  };

  return <ReactSelect styles={customStyles} {...props} />;
};

export default Select;
