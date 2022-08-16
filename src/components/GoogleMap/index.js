import React from "react";

import './style.css';

const GoogleMap = () => {
  return (
<div className='googleMap'>
<img
src={`${process.env.PUBLIC_URL}/assets/images/map/Map.png`}
alt="google-map"
/>
</div>
  );
};

export default GoogleMap;
