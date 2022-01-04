import REGIONS from "../data/regions";

export const getRegionByCode = (regionCode) =>
  Object.values(REGIONS).find(({ code }) => code === regionCode);
