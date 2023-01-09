interface GeoLocation {
  name: string;
  state?: string;
  country: string;
}

export const useLocations = (): GeoLocation[] => {
  // TODO hardcoding a list of cities to look up for now. Could expand this to be stateful (and load from local storage)
  // TODO add current location as a city

  return [
    { name: 'Oslo', country: 'NO' },
    { name: 'London', country: 'GB' },
    { name: 'Berlin', country: 'DE' },
  ];
};
