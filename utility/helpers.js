import { format, getDaysInMonth, getDaysInYear, intervalToDuration, isValid } from 'date-fns';
import { drawerPages } from '../components/constants';

export const downloadFile = (data, filename) => {
  const blob = new Blob([data], { type: 'text/json' });
  const link = document.createElement('a');

  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.dataset.downloadurl = ['text/json', link.download, link.href].join(':');

  const evt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  link.dispatchEvent(evt);
  link.remove()
}

export const eventsColors = {
  'Meteorite': '#f8e8b7',
  'Mega_Grumblo': '#e6b471',
  'Glacial_Guild': '#65b8d6',
  'Snake_Swarm': '#3f9c61',
  'Angry_Frogs': '#f6b5f8'
}
export const getClosestDate = (date, hours = 0, every) => {
  // Get the current date
  const currentDate = new Date(date.getTime());

// Add 6 hours to the current date
  currentDate.setHours(currentDate.getHours() + hours);

// Get the current time
  const currentTime = currentDate.getTime();
  const offSet = currentDate.getTimezoneOffset()

// Define the target hours
  const every6 = [6, 18, 0, 12];
  const every1 = new Array(24).fill(1)?.map((_, index) => index);
  const targetHours = every === 1 ? every1 : every6;

// Calculate the timestamps for the target hours
  const targetTimestamps = targetHours.map(targetHour => {
    const targetDate = new Date(currentDate);
    targetDate.setHours(targetHour, 0, 0, 0);
    return targetDate.getTime() - offSet * 60 * 1000;
  });

// Find the closest timestamp
  const closestTimestamp = targetTimestamps.reduce((prev, curr) => {
    const prevDiff = Math.abs(currentTime - prev);
    const currDiff = Math.abs(currentTime - curr);
    return currDiff < prevDiff ? curr : prev;
  });

// Create a new Date object from the closest timestamp
  return new Date(closestTimestamp);
}

export const
  number2letter = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const tryToParse = (str) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return str;
  }
};

export const findNameCombination = (arr, str) => {
  if (!arr) return [];
  let result = [];

  function find(str, combination) {
    if (str === '') {
      result.push(combination);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (str?.startsWith(arr[i]?.name)) {
        find(str.slice(arr[i]?.name?.length), [...combination, arr[i]]);
      }
    }
  }

  find(str, []);

  return result.flat();
}

export const createArrayOfArrays = (array) => {
  return array?.map((object) => {
    if (!Array.isArray(object)) {
      delete object?.length;
    }
    return Object.values(object);
  });
};

export const createIndexedArray = (object) => {
  const highest = Math.max(...Object.keys(object));
  let result = [];
  for (let i = 0; i <= highest; i++) {
    if (object?.[i]) {
      result[i] = object?.[i];
    } else {
      result[i] = {};
    }
  }
  return result;
};

export const growth = (func, level, x1, x2, shouldRound = true) => {
  let result;
  switch (func) {
    case 'add':
      if (x2 !== 0) {
        result = (((x1 + x2) / x2 + 0.5 * (level - 1)) / (x1 / x2)) * level * x1;
      } else {
        result = level * x1;
      }
      break;
    case 'decay':
      result = (level * x1) / (level + x2);
      break;
    case 'intervalAdd':
      result = x1 + Math.floor(level / x2);
      break;
    case 'decayMulti':
      result = 1 + (level * x1) / (level + x2);
      break;
    case 'bigBase':
      result = x1 + x2 * level;
      break;
    case 'special1':
      result = 100 - (level * x1) / (level + x2);
      break;
    default:
      result = 0;
  }
  return shouldRound ? round(result) : result;
};

export const lavaLog = (num) => {
  return Math.log(Math.max(num, 1)) / 2.303;
};

export const round = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

export const cloneObject = (data) => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (err) {
    return data;
  }
};

export const cleanUnderscore = (str) => {
  try {
    if (!str) return '';
    return String(str)?.replace(/_/g, ' ');
  } catch (err) {
    console.log(`Error in cleanUnderscore for ${str}`, err);
  }
};

export const getNumberWithOrdinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export const kFormatter = (num, digits = 1) => {
  if (num === undefined) return null;
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'Q' },
    { value: 1e18, symbol: 'QQ' }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};

export const numberWithCommas = (x) => {
  if (x === null || x === undefined) return '';
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const pascalCase = (str) => {
  return str
    ?.split(/_/g)
    .map((word) => word.toLowerCase().charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('_');
};

export const getCoinsArray = (coins) => {
  let n = coins;
  const ret = new Map();
  let i = 18;
  do {
    const expo = Math.pow(10, i);
    if (n > expo) {
      const num = Math.floor(n / expo);
      ret.set(Math.round(i / 2) + 1, num);
      n = n % expo;
    }
    i -= 2;
  } while (i >= 0);

  if (ret.size === -0) {
    ret.set(1, 0);
  }
  return Array.from(ret);
};

export const getBitIndex = (e) => {
  let temp = e, num = 0;
  for (let i = 0; i < 4; i++) {
    if (temp > 1e18) {
      temp = temp / 1e18
      num += 1;
    }
  }
  return num;
}
export const notateNumber = (e, s) => {
  if (s === 'bits') {
    if (1e4 > e) {
      return Math.floor(e);
    }
    if (1e5 > e) {
      return Math.floor((e) / 100) / 10 + 'K'
    }
    if (1e6 > e) {
      return Math.floor(e / 1e3) + 'K';
    }
    if (1e7 > e) {
      return Math.floor((e) / 1e4) / 100 + 'M';
    }
    if (1e8 > e) {
      return Math.floor((e) / 1e5) / 10 + 'M'
    }
    if (1e9 > e) {
      return Math.floor((e) / 1e6) + 'M'
    }
    if (1e10 > e) {
      return Math.floor((e) / 1e7) / 100 + 'B';
    }
    if (1e11 > e) {
      return Math.floor((e) / 1e8) / 10 + 'B'
    }
    if (1e12 > e) {
      return Math.floor((e) / 1e9) + 'B'
    }
    if (1e13 > e) {
      return Math.floor((e) / 1e10) / 100 + 'T'
    }
    if (1e14 > e) {
      return Math.floor((e) / 1e11) / 10 + 'T'
    }
    if (1e15 > e) {
      return Math.floor((e) / 1e12) + 'T'
    }
    if (1e16 > e) {
      return Math.floor(e / 1e13) / 100 + 'Q'
    }
    if (1e17 > e) {
      return Math.floor((e) / 1e14) / 10 + 'Q'
    }
    if (1e18 > e) {
      return Math.floor(e / 1e15) + 'Q'
    }
  }
  return 'Whole' === s ? (1e4 > e ? '' + Math.floor(e)
      : 1e6 > e ? Math.floor(e / 1e3) + 'K'
        : 1e7 > e ? Math.floor(e / 1e5) / 10 + 'M'
          : 1e9 > e ? Math.floor(e / 1e6) + 'M'
            : 1e10 > e ? Math.floor(e / 1e8) / 10 + 'B'
              : Math.floor(e / 1e9) + 'B')
    : 'MultiplierInfo' === s ? (0 === (10 * e) % 10 ? Math.round(e) + '.00'
        : 0 === (100 * e) % 10 ? Math.round(10 * e) / 10 + '0'
          : Math.round(100 * e) / 100 + '')
      : 'Micro' === s ? (10 < e ? '' + Math.round(e)
          : 0.1 < e ? '' + Math.round(10 * e) / 10
            : 0.01 < e ? '' + Math.round(100 * e) / 100
              : '' + Math.round(1e3 * e) / 1e3)
        : 100 > e ? ('Small' === s ? (1 > e ? '' + Math.round(100 * e) / 100
              : '' + Math.round(10 * e) / 10)
            : 'Smallish' === s ? (10 > e ? '' + Math.round(10 * e) / 10
                : '' + Math.round(e))
              : 'Smaller' === s ? (10 > e ? '' + Math.round(100 * e) / 100
                  : '' + Math.round(10 * e) / 10)
                : '' + Math.floor(e))
          : 1e3 > e ? '' + Math.floor(e)
            : 1e4 > e ? ('Bigish' === s ? '' + Math.floor(e)
                : Math.ceil(e / 10) / 100 + 'K')
              : 1e5 > e ? Math.ceil(e / 100) / 10 + 'K'
                : 1e6 > e ? Math.ceil(e / 1e3) + 'K'
                  : 1e7 > e ? Math.ceil(e / 1e4) / 100 + 'M'
                    : 1e8 > e ? Math.ceil(e / 1e5) / 10 + 'M'
                      : 1e10 > e ? Math.ceil(e / 1e6) + 'M'
                        : 1e13 > e ? Math.ceil(e / 1e9) + 'B'
                          : 1e16 > e ? Math.ceil(e / 1e12) + 'T'
                            : 1e19 > e ? Math.ceil(e / 1e15) + 'Q'
                              : 1e22 > e ? Math.ceil(e / 1e18) + 'QQ'
                                : 1e24 > e ? Math.ceil(e / 1e21) + 'QQQ'
                                  : Math.floor((e / Math.pow(10, Math.floor(lavaLog(e)))) * 100) / 100 + ('E' + Math.floor(lavaLog(e)))
}

export const constellationIndexes = (str) => {
  const indexes = { _: 0, a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
  return str
    ?.split('')
    ?.map((char) => indexes?.[char])
    .sort((a, b) => a - b)
    .join(',');
};

export const worlds = {
  0: 'Blunder Hills',
  1: 'Yum Yum Desert',
  2: 'Frostbite Tundra',
  3: 'Hyperion Nebula',
  4: 'Smolderin\' Plateau'
};

export const getDuration = (start, end) => {
  try {
    const parsedStartTime = new Date(start);
    const parsedEndTime = new Date(end);
    let duration = intervalToDuration({ start: parsedStartTime, end: parsedEndTime });
    if (duration?.years) {
      const daysInYear = getDaysInYear(new Date());
      duration.days = duration.days + daysInYear * duration?.years;
    }
    if (duration?.months) {
      const daysInMonth = getDaysInMonth(new Date());
      duration.days = duration.days + daysInMonth * duration?.months;
    }
    return duration;
  } catch (err) {
    console.error('getDuration -> Error occurred when trying to format date', start, end);
    return {};
  }
};

export const fillArrayToLength = (length, array, defaultValue = {}) => {
  return [...new Array(length)].map((item, index) => {
    return array ? array?.[index] || defaultValue : defaultValue;
  });
};

export const splitTime = (numberOfHours) => {
  const days = Math.floor(numberOfHours / 24);
  const remainder = numberOfHours % 24;
  const hours = Math.floor(remainder);
  const minutes = Math.floor(60 * (remainder - hours));
  return `${days}d:${hours}h:${minutes}m`;
};

export const randomFloatBetween = function (e, t) {
  return e <= t ? e + Math.random() * (t - e) : t + Math.random() * (e - t)
}

export const flatten = (obj, out) => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] == 'object') {
      out = flatten(obj[key], out) //recursively call for nested
    } else {
      out[key] = obj[key] //direct assign for values
    }
  });
  return out;
}

export const sections = [{ name: 'Activity' }, { name: 'Stats' }, { name: 'Bags' }, { name: 'Obols' },
  { name: 'Obols Stats' }, { name: 'Cards' }, { name: 'Skills' }, { name: 'Prayers' }, { name: 'Talents' },
  { name: 'Equipment' }, { name: 'Star Signs' }, { name: 'Post Office' }, { name: 'Anvil Details' },
  { name: 'Inventory' },
  { name: 'Equipped Bubbles' }, { name: 'Active Skills CD' }];

export const isProd = process.env.NODE_ENV === 'production';

export const getRandomNumbersArray = (length, max) => {
  const arr = [];
  while (arr.length < length) {
    const r = Math.floor(Math.random() * max);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
export const shouldDisplayDrawer = (pathname = '') => {
  return drawerPages.includes(pathname?.split('/').at(1))
}

export const getRealDateInMs = (ms, shouldFormat = true) => {
  let dateInMs = ms;
  // const date = new Date(ms);
  // if (date.isDstObserved()) {
  //   dateInMs -= 3600 * 1000;
  // }
  if (shouldFormat) {
    return isValid(new Date(dateInMs)) && format(dateInMs, 'dd/MM/yyyy HH:mm:ss')
  }
  return dateInMs;
}
export const prefix = isProd ? '/' : '/';

