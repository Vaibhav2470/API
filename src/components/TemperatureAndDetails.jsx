import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather
}) {
  // Guard clause for missing data
  if (!weather) {
    return <p className="text-white text-center">Loading weather...</p>;
  }

  const {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  } = weather;

  // Guard clause for incomplete data
  if (
    temp == null || feels_like == null || temp_min == null ||
    temp_max == null || sunrise == null || sunset == null || timezone == null
  ) {
    return <p className="text-white text-center">Weather data is incomplete.</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex font-light text-sm items-center justify-center">
          <UilTemperature size={18} className="mr-1" />
          Real feel:
          <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
          <UilTear size={18} className="mr-1" />
          Humidity:
          <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
          <UilWind size={18} className="mr-1" />
          Wind:
          <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
