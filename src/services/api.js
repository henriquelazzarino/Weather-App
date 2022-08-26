const KEY = '22cc72297be44cfdb1534451222008';

const fetchData = async (city) => {
  const URL = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
  const fetchResponse = await fetch(URL);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
