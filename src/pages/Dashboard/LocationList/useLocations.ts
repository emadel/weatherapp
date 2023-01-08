interface GeoLocation {
  name: string;
  state?: string;
  country: string;
}

export const useLocations = (): GeoLocation[] => {
  // TODO hardcoding a list of cities to look up for now.
  // TODO add current location as a city

  return [
    { name: 'London', country: 'GB' },
    { name: 'Berlin', country: 'DE' },
  ];
};
