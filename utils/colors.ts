export const colors = {
  blue: '#2582e7',
  lightBlue: '#edf5ff',
  lightWhite: '#f8fcfc',
  grey: '#8593a1',
  darkGrey: '#37383c',
  lightGrey: '#f2f4f5',
  lightGrey2: '#d3d3d3',
  dark: '#38393d',
  orange: '#d67802',
  green: '#28c38a',
  successGreen: '#4caf50',
  lightGreen: '#98e2c7',
  darkGreen: '#1c8d63',
  red: '#ee6044',
}

enum COLORS_ENUM {
  BLUE = 'blue',
  GREY = 'grey',
  DARK_GREY = 'dark_grey',
  LIGHT_GREY = 'light_grey',
  DARK = 'dark',
  GREEN = 'green',
  ORANGE = 'orange',
  RED = 'red',
  LIGHT_WHITE = 'light_white',
}

export const COLOR: { [key: string]: string } = {
  [COLORS_ENUM.BLUE]: colors.blue,
  [COLORS_ENUM.DARK]: colors.dark,
  [COLORS_ENUM.DARK_GREY]: colors.darkGrey,
  [COLORS_ENUM.LIGHT_GREY]: colors.lightGrey,
  [COLORS_ENUM.GREEN]: colors.green,
  [COLORS_ENUM.GREY]: colors.grey,
  [COLORS_ENUM.ORANGE]: colors.orange,
  [COLORS_ENUM.RED]: colors.red,
  [COLORS_ENUM.LIGHT_WHITE]: colors.lightWhite,
}
