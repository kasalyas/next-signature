import regions from "../data/regions";

export const getRegionByCode = (regionCode) =>
  Object.values(regions).find(({ code }) => code === regionCode);
