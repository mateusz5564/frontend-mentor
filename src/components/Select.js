import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import ReactSelect from "react-select";

const Select = ({ ...props }) => {
  const theme = useContext(ThemeContext);

  const customStyles = {
    container: provided => ({
      ...provided,
      marginBottom: "20px",
    }),
    placeholder: provided => ({
      ...provided,
      color: theme.colors.textPlaceholder,
      fontWeight: 600,
    }),
    input: provided => ({
      ...provided,
      color: theme.colors.text,
    }),
    singleValue: provided => ({
      ...provided,
      color: theme.colors.text,
    }),
    indicatorSeparator: () => {},
    menu: provided => ({
      ...provided,
      backgroundColor: theme.colors.element,
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? 600 : "initial",
      color: theme.colors.text,
      backgroundColor: setOptionBg(state),
      "&:active": {
        backgroundColor: theme.colors.select.optionActiveBg,
      },
      opacity: state.isFocused ? 0.8 : 1,
    }),
    control: provided => ({
      ...provided,
      height: "60px",
      backgroundColor: theme.colors.element,
      border: "none",
      borderRadius: "5px",
      paddingLeft: "5px",
      fontSize: "1em",
    }),
  };

  const setOptionBg = ({ isSelected, isFocused }) => {
    const colors = theme.colors.select;

    if (isSelected && isFocused) {
      return colors.optionFocusedAndSelectedBg;
    } else if (isSelected) {
      return colors.optionSelectedBg;
    } else if (isFocused) {
      return colors.optionFocusedBg;
    }
  };

  return <ReactSelect styles={customStyles} {...props} />;
};

export default Select;
