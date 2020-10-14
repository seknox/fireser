import * as React from 'react';
import Svg, { LinearGradient, Stop, Path, Circle } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <LinearGradient
        id="prefix__a"
        x1={-46.004}
        x2={-32.933}
        y1={634.121}
        y2={647.192}
        gradientTransform="matrix(32 0 0 -32 1519 20757)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} />
        <Stop offset={0.507} />
        <Stop offset={0.99} />
      </LinearGradient>
      <Path
        fill="url(#prefix__a)"
        d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"
      />
      <LinearGradient
        id="prefix__b"
        x1={-42.297}
        x2={-36.64}
        y1={637.828}
        y2={643.485}
        gradientTransform="matrix(32 0 0 -32 1519 20757)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} />
        <Stop offset={0.507} />
        <Stop offset={0.99} />
      </LinearGradient>
      <Path
        fill="url(#prefix__b)"
        d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"
      />
      <LinearGradient
        id="prefix__c"
        x1={-35.546}
        x2={-34.792}
        y1={644.579}
        y2={645.333}
        gradientTransform="matrix(32 0 0 -32 1519 20757)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} />
        <Stop offset={0.507} />
        <Stop offset={0.99} />
      </LinearGradient>
      <Circle cx={393.6} cy={118.4} r={17.056} fill="url(#prefix__c)" />
    </Svg>
  );
}

export default SvgComponent;
