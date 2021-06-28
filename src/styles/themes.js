/* eslint-disable import/no-anonymous-default-export */
import colors from './colors';

  export const darkTheme = {
    mode: "dark",
    colors: {
      background: colors.veryDarkBlue,
      element: colors.darkBlue,
      text: colors.white,
      textPlaceholder: colors.whiteL75,
      skeletonBackground: colors.darkBlue,
      skeletonCardBackground: colors.darkBlueL20,
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
      textPlaceholder: colors.veryDarkBlue2L50,
      input: colors.darkGray,
      skeletonBackground: colors.lightgray,
      skeletonCardBackground: colors.lightgrayL90,
      shimmer: {
        background: colors.lightgrayL79,
        shadow1: colors.lightgrayL79,
        shadow2: colors.lightgrayL80,
        shadow3: colors.lightgrayL81,
      }
    }
  }