import REGIONS from "../data/regions";

export const getRegionByCode = (regionCode: string) =>
  Object.values(REGIONS).find(({ code }) => code === regionCode);
