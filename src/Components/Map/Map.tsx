import React, { Component, CSSProperties } from "react";
import MapGL, {
  NavigationControl,
  FullscreenControl,
  ViewState,
} from "react-map-gl";
import Pin from "./Pin";

export interface Props {
  name: string;
  latitude: number;
  longitude: number;
}

interface State {
  viewport: ViewState;
}

const fullscreenControlStyle: CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  padding: "10px",
};

const navStyle: CSSProperties = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

class Map extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 18,
        bearing: 0,
        pitch: 0,
      },
    };
  }

  componentDidMount() {
    const { latitude, longitude } = this.props;

    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: latitude,
        longitude: longitude,
      },
    });
  }

  _updateViewport = (viewport: ViewState) => {
    this.setState({ viewport });
  };

  render() {
    const { viewport } = this.state;
    const { latitude, longitude } = this.props;
    console.log(process.env.REACT_APP_MAPBOX_TOKEN);
    return (
      <MapGL
        {...viewport}
        width="100%"
        height="25vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Pin {...{ latitude, longitude }} />

        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>
    );
  }
}

export default Map;
