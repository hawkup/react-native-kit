import { Colors } from "react-native-ui-lib";

import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";

export const decorators = [
  withBackgrounds,
  (StoryFn) => {
    Colors.loadColors({
      brand1: '#F2F3FF',
      brand2: '#D9E1FF',
      brand3: '#B5C7FF',
      brand4: '#8EABFF',
      brand5: '#618DFF',
      brand6: '#366EF4',
      brand7: '#0052D9',
      brand8: '#003CAB',
      brand9: '#002A7C',
      brand10: '#001A57',

      error1: '#FFF0ED',
      error2: '#FFD8D2',
      error3: '#FFB9B0',
      error4: '#FF9285',
      error5: '#F6685D',
      error6: '#D54941',
      error7: '#AD352F',
      error8: '#881F1C',
      error9: '#68070A',
      error10: '#490002',

      warning1: '#FFF1E9',
      warning2: '#FFD9C2',
      warning3: '#FFB98C',
      warning4: '#FA9550',
      warning5: '#E37318',
      warning6: '#BE5A00',
      warning7: '#954500',
      warning8: '#713300',
      warning9: '#532300',
      warning10: '#3B1700',

      success1: '#E3F9E9',
      success2: '#C6F3D7',
      success3: '#92DAB2',
      success4: '#56C08D',
      success5: '#2BA471',
      success6: '#008858',
      success7: '#006C45',
      success8: '#005334',
      success9: '#003B23',
      success10: '#002515',

      white1: '#FFFFFF',
      gray1: '#F3F3F3',
      gray2: '#EEEEEE',
      gray3: '#E7E7E7',
      gray4: '#DCDCDC',
      gray5: '#C5C5C5',
      gray6: '#A6A6A6',
      gray7: '#8B8B8B',
      gray8: '#777777',
      gray9: '#5E5E5E',
      gray10: '#4B4B4B',
      gray11: '#383838',
      gray12: '#2C2C2C',
      gray13: '#242424',
      gray14: '#181818'
    });

    Colors.loadSchemes({
      light: {
        brandLight: Colors.brand1,
        brandFocus: Colors.brand2,
        brandDisabled: Colors.brand3,
        brandHover: Colors.brand6,
        brandNormal: Colors.brand7,
        brandClick: Colors.brand8,

        errorLight: Colors.error1,
        errorFocus: Colors.error2,
        errorDisabled: Colors.error3,
        errorHover: Colors.error5,
        errorNormal: Colors.error6,
        errorClick: Colors.error7,

        warningLight: Colors.warning1,
        warningFocus: Colors.warning2,
        warningDisabled: Colors.warning3,
        warningHover: Colors.warning5,
        warningNormal: Colors.warning5,
        warningClick: Colors.warning6,

        successLight: Colors.success1,
        successFocus: Colors.success2,
        successDisabled: Colors.success3,
        successHover: Colors.success4,
        successNormal: Colors.success5,
        successClick: Colors.success6,

        fontGy4: 'rgba(0, 0, 0, 0.26)',
        fontGy3: 'rgba(0, 0, 0, 0.40)',
        fontGy2: 'rgba(0, 0, 0, 0.60)',
        fontGy1: 'rgba(0, 0, 0, 0.90)'
      },
      dark: {
        brandLight: Colors.brand1,
        brandFocus: Colors.brand2,
        brandDisabled: Colors.brand3,
        brandHover: Colors.brand6,
        brandNormal: Colors.brand7,
        brandClick: Colors.brand8,

        errorLight: Colors.error1,
        errorFocus: Colors.error2,
        errorDisabled: Colors.error3,
        errorHover: Colors.error5,
        errorNormal: Colors.error6,
        errorClick: Colors.error7,

        warningLight: Colors.warning1,
        warningFocus: Colors.warning2,
        warningDisabled: Colors.warning3,
        warningHover: Colors.warning5,
        warningNormal: Colors.warning5,
        warningClick: Colors.warning6,

        successLight: Colors.success1,
        successFocus: Colors.success2,
        successDisabled: Colors.success3,
        successHover: Colors.success4,
        successNormal: Colors.success5,
        successClick: Colors.success6,

        fontGy4: 'rgba(255, 255, 255, 0.22)',
        fontGy3: 'rgba(255, 255, 255, 0.35)',
        fontGy2: 'rgba(255, 255, 255, 0.55)',
        fontGy1: 'rgba(255, 255, 255, 1)'
      }
    });

    return <StoryFn />
  },
];

export const parameters = {
  backgrounds: {
    default: "plain",
    values: [
      { name: "plain", value: "white" },
      { name: "warm", value: "hotpink" },
      { name: "cool", value: "deepskyblue" },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
