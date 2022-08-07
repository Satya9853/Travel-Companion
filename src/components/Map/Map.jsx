import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlined from "@material-ui/icons/LocalActivityOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";

const Map = (props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAh7C3c-Js4Tf7M3G67Hv_oBIGBMdiPwkQ" }}
        defaultCenter={props.coordinates}
        center={props.coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          props.setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
