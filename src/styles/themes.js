/* eslint-disable import/no-anonymous-default-export */
import colors from './colors';

export default {
  dark: {
    mode: "dark",
    colors: {
      background: colors.veryDarkBlue,
      element: colors.darkBlue,
      text: colors.white,
    }
  },
  light: {
    mode: "light",
    colors: {
      background: colors.veryLightGray,
      element: colors.white,
      text: colors.veryDarkBlue2,
      input: colors.darkGray,
    }
  }
}