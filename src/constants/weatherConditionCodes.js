import thunderstorm from "../assets/images/thunderstorm.png";
import rain from "../assets/images/rain.png";
import rainDay from "../assets/images/rain-day.png";
import rainNight from "../assets/images/rain-night.png";
import snow from "../assets/images/snow.png";
import mist from "../assets/images/mist.png";
import clearDay from "../assets/images/clear-day.png";
import clearNight from "../assets/images/clear-night.png";
import cloudsDay from "../assets/images/clouds-day.png";
import cloudsNight from "../assets/images/clouds-night.png";
import clouds from "../assets/images/clouds.png";
import cloudsOvercast from "../assets/images/clouds-overcast.png";

const groupThunderstorm = {
  200: {
    day: thunderstorm,
    night: thunderstorm,
  },
  201: {
    day: thunderstorm,
    night: thunderstorm,
  },
  202: {
    day: thunderstorm,
    night: thunderstorm,
  },
  210: {
    day: thunderstorm,
    night: thunderstorm,
  },
  211: {
    day: thunderstorm,
    night: thunderstorm,
  },
  212: {
    day: thunderstorm,
    night: thunderstorm,
  },
  221: {
    day: thunderstorm,
    night: thunderstorm,
  },
  230: {
    day: thunderstorm,
    night: thunderstorm,
  },
  231: {
    day: thunderstorm,
    night: thunderstorm,
  },
  232: {
    day: thunderstorm,
    night: thunderstorm,
  },
};

const groupDrizzle = {
  300: {
    day: rain,
    night: rain,
  },
  301: {
    day: rain,
    night: rain,
  },
  302: {
    day: rain,
    night: rain,
  },
  310: {
    day: rain,
    night: rain,
  },
  311: {
    day: rain,
    night: rain,
  },
  312: {
    day: rain,
    night: rain,
  },
  313: {
    day: rain,
    night: rain,
  },
  314: {
    day: rain,
    night: rain,
  },
  321: {
    day: rain,
    night: rain,
  },
};

const groupRain = {
  500: {
    day: rainDay,
    night: rainNight,
  },
  501: {
    day: rainDay,
    night: rainNight,
  },
  502: {
    day: rainDay,
    night: rainNight,
  },
  503: {
    day: rainDay,
    night: rainNight,
  },
  504: {
    day: rainDay,
    night: rainNight,
  },
  511: {
    day: snow,
    night: snow,
  },
  520: {
    day: rain,
    night: rain,
  },
  521: {
    day: rain,
    night: rain,
  },
  522: {
    day: rain,
    night: rain,
  },
  531: {
    day: rain,
    night: rain,
  },
};

const groupSnow = {
  600: {
    day: snow,
    night: snow,
  },
  601: {
    day: snow,
    night: snow,
  },
  602: {
    day: snow,
    night: snow,
  },
  611: {
    day: snow,
    night: snow,
  },
  612: {
    day: snow,
    night: snow,
  },
  613: {
    day: snow,
    night: snow,
  },
  615: {
    day: snow,
    night: snow,
  },
  616: {
    day: snow,
    night: snow,
  },
  620: {
    day: snow,
    night: snow,
  },
  621: {
    day: snow,
    night: snow,
  },
  622: {
    day: snow,
    night: snow,
  },
};

const groupAtmosphere = {
  701: {
    day: mist,
    night: mist,
  },
  711: {
    day: mist,
    night: mist,
  },
  721: {
    day: mist,
    night: mist,
  },
  731: {
    day: mist,
    night: mist,
  },
  741: {
    day: mist,
    night: mist,
  },
  751: {
    day: mist,
    night: mist,
  },
  761: {
    day: mist,
    night: mist,
  },
  762: {
    day: mist,
    night: mist,
  },
  771: {
    day: mist,
    night: mist,
  },
  781: {
    day: mist,
    night: mist,
  },
};

const groupClear = {
  800: {
    day: clearDay,
    night: clearNight,
  },
};

const groupClouds = {
  801: {
    day: cloudsDay,
    night: cloudsNight,
  },
  802: {
    day: clouds,
    night: clouds,
  },
  803: {
    day: cloudsOvercast,
    night: cloudsOvercast,
  },
  804: {
    day: cloudsOvercast,
    night: cloudsOvercast,
  },
};

const weatherConditionCodes = [
  groupThunderstorm,
  groupDrizzle,
  groupRain,
  groupSnow,
  groupAtmosphere,
  groupClear,
  groupClouds,
];

export default weatherConditionCodes;
