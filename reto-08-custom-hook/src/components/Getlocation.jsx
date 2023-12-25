import { useState } from "react";
import { useGeolocation } from "./useGeolocation";

export default function GetLocation() {
  const [request, setRequest] = useState(0);
  const { position, error, isLoading, GetPosition } = useGeolocation();

  function handleCount() {
    setRequest((value) => value + 1);
    GetPosition();
  }

  return (
    <section>
      <button onClick={handleCount}>Get my position</button>

      {isLoading && <p>Loading ...</p>}
      {error && <p>{error}</p>}

      {position ? (
        <>
          <p>
            Your GPS position:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.openstreetmap.org/#map=16/${position.lat}/${position.long}`}
            >
              {position.lat}, {position.long}
            </a>
          </p>
          <p>{`Your request position ${request} times`}</p>
        </>
      ) : (
        ""
      )}
    </section>
  );
}
