/* eslint-disable import/no-anonymous-default-export */
import colors from './colors';

  export const darkTheme = {
    mode: "dark",
    colors: {
      background: colors.veryDarkBlue,
      element: colors.darkBlue,
      text: colors.white,
      skeletonBackground: colors.darkBlue,
      shimmer: {
        background: colors.darkBlueL25,
        shadow1: colors.darkBlueL25,
        shadow2: colors.darkBlueL24,
        shadow3: colors.darkBlueL23,
      }
    }
  }

  export const lightTheme = {
    mode: "light",
    colors: {
      background: colors.veryLightGray,
      element: colors.white,
      text: colors.veryDarkBlue2,
      input: colors.darkGray,
      skeletonBackground: colors.lightgray,
      shimmer: {
        background: colors.lightgrayL79,
        shadow1: colors.lightgrayL79,
        shadow2: colors.lightgrayL80,
        shadow3: colors.lightgrayL81,
      }
    }
  }