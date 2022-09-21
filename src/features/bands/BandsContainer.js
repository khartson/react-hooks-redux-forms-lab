import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bandAdded } from './bandsSlice';

import BandInput from "./BandInput";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);
  
  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }
  return(
  <div>
      <BandInput onBandSubmit={handleBandSubmit}/>
      <ul>
        {bands.map((band)=> {
          return <li key={band}>{band}</li>
        })}
      </ul>
  </div>
  );
}
export default BandsContainer;
