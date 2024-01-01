/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import CityItem from "../CityItem/CityItem";
import Loading from "../../Loading/Loading";
import Message from "../../Message/Message";

// eslint-disable-next-line react/prop-types
export default function CityList({ data, loading }) {
  if (loading === true) return <Loading />;
  console.log(data);

  if (!data.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );
  return (
    <ul className={styles.cityList}>
      {/*  eslint-disable-next-line react/prop-types */}
      {data ? (
        data.map((city) => <CityItem city={city} key={city.id} />)
      ) : (
        <p>No cargo nada</p>
      )}
    </ul>
  );
}
