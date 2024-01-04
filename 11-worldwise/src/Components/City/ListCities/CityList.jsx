/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import CityItem from "../CityItem/CityItem";
import Loading from "../../Loading/Loading";
import Message from "../../Message/Message";
import { useCiti } from "../../../Contexts/CityContext";

export default function CityList() {
  const { cities, isLoading } = useCiti();

  if (isLoading === true) return <Loading />;

  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );
  return (
    <ul className={styles.cityList}>
      {/*  eslint-disable-next-line react/prop-types */}
      {cities.map((city) => (
        <CityItem cityData={city} key={city.id} />
      ))}
    </ul>
  );
}
