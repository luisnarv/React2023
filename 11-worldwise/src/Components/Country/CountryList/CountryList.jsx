/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import Loading from "../../Loading/Loading";
import CountryItem from "../CountryItem/CountryItem";

export default function CountryList({ data, loading }) {
  if (loading === true) return <Loading />;
  console.log(data);

  const countries = data.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((city) => (
        <CountryItem country={city} key={city.country} />
      ))}
    </ul>
  );
}
