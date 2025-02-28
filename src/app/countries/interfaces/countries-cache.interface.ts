import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface countriesCache{
  byCapital: byCapitalCache,
  byCountry: byCountryCache,
  byRegion:  byRegionCache
}

interface byCapitalCache {
  countries: Country[],
  term: string
}

interface byCountryCache{
  countries: Country[],
  term: string
}

interface byRegionCache{
  countries: Country[],
  region?: Region
}
