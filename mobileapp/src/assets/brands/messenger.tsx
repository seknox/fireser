import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        fill="#1E88E5"
        d="M256 0C114.624 0 0 106.112 0 237.024c0 74.592 37.216 141.12 95.392 184.576V512l87.168-47.84c23.264 6.432 47.904 9.92 73.44 9.92 141.376 0 256-106.112 256-237.024C512 106.112 397.376 0 256 0z"
      />
      <Path
        fill="#FAFAFA"
        d="M281.44 319.2l-65.184-69.536-127.2 69.536L228.96 170.656l66.784 69.536 125.632-69.536z"
      />
    </Svg>
  );
}

export default SvgComponent;
