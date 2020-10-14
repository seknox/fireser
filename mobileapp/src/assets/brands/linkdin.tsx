import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <G fill="#1976D2">
        <Path d="M0 160h114.496v352H0zM426.368 164.128c-1.216-.384-2.368-.8-3.648-1.152a74.218 74.218 0 00-4.64-.896c-6.08-1.216-12.736-2.08-20.544-2.08-66.752 0-109.088 48.544-123.04 67.296V160H160v352h114.496V320s86.528-120.512 123.04-32v224H512V274.464c0-53.184-36.448-97.504-85.632-110.336z" />
        <Circle cx={56} cy={56} r={56} />
      </G>
    </Svg>
  );
}

export default SvgComponent;
