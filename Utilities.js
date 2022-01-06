export const constantBags = [
  "InvBag1",
  "InvBag2",
  "InvBag3",
  "InvBag4",
  "InvBag5",
  "InvBag6",
  "InvBag7",
  "InvBag8",
  "InvBag21",
  "InvBag22",
  "InvBag23",
  "InvBag24",
  "InvBag25",
  "InvBag26",
  "InvBag100",
  "InvBag101",
  "InvBag102",
  "InvBag103",
  "InvBag104",
  "InvBag105",
  "InvBag106",
  "InvBag107",
  "InvBag108",
  "InvBag109",
  "InvBag110",
];
export const round = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
export const numberWithCommas = (num) => {
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const kFormatter = (num, digits = 1) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};
export const cleanUnderscore = (str) => {
  try {
    if (!str) return "";
    return String(str)?.replace(/_/g, " ");
  } catch (err) {
    console.log(`Error in cleanUnderscore for ${str}`, err);
  }
};
export const findItemInInventory = (arr, itemName) => {
  if (!itemName) return {};
  return arr.reduce((res, item) => {
    const { name, owner, amount } = item;
    if (name === itemName) {
      if (res?.[owner]) {
        return { ...res, [owner]: { amount: res?.[owner]?.amount + 1 } };
      } else {
        return { ...res, [owner]: { amount } };
      }
    }
    return res;
  }, {});
};
export const flattenCraftObject = (craft) => {
  const uniques = {};
  const tempCraft = JSON.parse(JSON.stringify(craft));

  const flatten = (innerCraft, unique) => {
    return innerCraft?.reduce((result, nextCraft) => {
      result.push(nextCraft);
      if (nextCraft.materials) {
        result = result.concat(flatten(nextCraft?.materials, unique));
        nextCraft.materials = [];
      }
      if (uniques[nextCraft?.itemName]) {
        uniques[nextCraft?.itemName].itemQuantity += nextCraft?.itemQuantity;
      } else {
        uniques[nextCraft?.itemName] = nextCraft;
      }
      return result;
    }, []);
  }

  flatten(tempCraft?.materials, uniques);
  return Object.values(uniques);
};
export const findQuantityOwned = (items, itemName) => {
  const inventoryItem = findItemInInventory(items, itemName);
  return Object.entries(inventoryItem)?.reduce((res, [owner, { amount }]) => {
    return {
      amount: res?.amount + amount,
      owner: [...res?.owner, owner]
    };
  }, { amount: 0, owner: [] });
}
export const splitTime = (numberOfHours) => {
  const days = Math.floor(numberOfHours / 24);
  const remainder = numberOfHours % 24;
  const hours = Math.floor(remainder);
  const minutes = Math.floor(60 * (remainder - hours));
  return `${days}d:${hours}h:${minutes}m`;
}
export const constellationIndexes = (str) => {
  const indexes = { _: 0, a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 }
  return str?.split('')?.map((char) => indexes?.[char]).sort((a, b) => a - b).join(',');
}
export const pascalCase = (str) => {
  return str?.split(/_/g).map((word) => word.toLowerCase().charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join('_');
}
export const getDeathNoteRank = (kills) => {
  return 25e3 > kills ? 0 : 1e5 > kills ? 1 : 25e4 > kills ? 2 : 5e5 > kills ? 3 : 1e6 > kills ? 4 : 5e6 > kills ? 5 : 1e8 > kills ? 7 : 10;
}

export const fields = [
  {
    name: "Activity",
    selected: true,
  },
  {
    name: "Equipment",
    selected: true,
  },
  {
    name: "Talents",
    selected: true,
  },
  {
    name: "Skills",
    selected: true,
  },
  {
    name: "Bags",
    selected: true,
  },
  {
    name: "Obols",
    selected: true,
  },
  {
    name: "Cards",
    selected: true,
  },
  {
    name: "Traps",
    selected: true,
  },
  {
    name: "Prayers",
    selected: true,
  },
  {
    name: "Star Sign",
    selected: true,
  },
  {
    name: "Printer Products",
    selected: true,
  },
  {
    name: "Equipped Bubbles",
    selected: true,
  },
  {
    name: "Anvil Products",
    selected: true,
  },
  {
    name: "Post Office",
    selected: true,
  },
];
export const screens = {
  characters: 0,
  account: 1,
  craftIt: 2,
  itemBrowser: 3,
  itemPlanner: 4,
  achievements: 5,
  shopStock: 6,
  quests: 7,
  cardSearch: 8,
  activeExpCalculator: 9
}
export const worlds = {
  0: 'Blunder Hills',
  1: 'Yum Yum Desert',
  2: 'Frostbite Tundra'
}
export const classColors = {
  Archer: "#51e406",
  Hunter: "#51e406",
  Bowman: "#51e406",
  Mage: "#dc3cdc",
  Shaman: "#dc3cdc",
  Wizard: "#dc3cdc",
  Warrior: "#ff9900",
  Barbarian: "#ff9900",
  Squire: "#ff9900",
  Beginner: "yellow",
  Journeyman: "yellow",
  Maestro: "yellow",
};

const isProd = process.env.NODE_ENV === "production";
export const breakpoint = 1350;
export const extVersion = '1.1.4';
export const prefix = isProd ? "/IdleonToolbox/" : "/";
