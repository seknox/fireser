import * as React from 'react';
import Svg, { SvgProps, Image } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 256 262"
      preserveAspectRatio="xMidYMid"
    >
      <Image
        width={282.296}
        height={281.276}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAMAAABIw9uxAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEXz8/Pzz8Tzp5HzuqrL 35+92YLZ573zUyXzfVqfykOBvAbznIO11XKf2PJDuvFyyfL61HP8yUX336CBzvIFpvD/ugj52IO9 4vP25r7///8wcQ+eAAAAAWJLR0QZ7G61iAAAAAd0SU1FB+QEEgsoICT3q2MAAA8eSURBVHja7dRL EoJAEETBkY+CCgooev+TegV7MYsO8l2horIUSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIk SZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIO3KlR2trI0l2vtJ2rAdBclLYhsvR4 Vdp6AAgAAACAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA QAAAAAAEAAAAQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQA AUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABAAAAEAAAAAABAAAAEAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuBEAAAAAAQAAABAAAAAAAUAAEAAEAAFAABAA BAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAE AAFAABAABAABQAAQAAQAAABAAAAAAAQAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAgAAAAAAIAAAAgAAAAAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgA AoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAAAgAAAAAAI AAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAEAAAAQAAAAAAE AAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQA AUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAAAAABAAAAEAAAAAABAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAACAAAAIAAAAAACAACgAAgAAgAAoAAIAAIAAKAACAACAAC gAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKA ACAAAAAAAgAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA AAAQAAAAAAEAAAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQA AUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAAAAAEAAAAQAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACAAAAAAAoAbAUAAEAAEAAFAABAA BAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAE AAFAABAABAABQAAQAAAAAAEAAAAQAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAACAAAAIAAAAAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAI AAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAAAAAAAgAAACAA AAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwIAAAAgAAAAAAIAAAAg AAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAA CAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAAAAAIAAAAgAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAQAAAAAAEAAAAQAAQAAQAAUAAEAAEAAFAABAABAABQAAQ AAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAA BAABAAAAEAAAAAABAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAA AIAAAAAACAAAAIAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAI AAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAgAAACAAAAAAAgAAACAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAQAAABAAAAAAAUAAEAAEAAFAABAA BAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAE AAFAABAABAABQAAQAAQAANSoHZS2W2Tp+6i0dUWSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmS JEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJP3XNCttj8jSz0VpW6sBsL2Utjmy 9PJW2nYACAAAAIAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AABAAAAAAAQAAABAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAA BAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAEAAAAQAAAAAAEAAAAQAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4EQAAAAABAAAAEAAAAAABQAAQAAQAAUAA EAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQ AAQAAUAAEAAEAAFAABAABAAAAEAAAAAABAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAACAAAAAAAgAAACAAAAAAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAA CAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAACAAAAA AAgAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAQAAABAAAAA AAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAA BAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAAAAAEAAAAQAAAAAAEAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAIAAAAgAAAAAAIAAKAACAACAACgAAgAAgAAoAAIAAI AAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgA AoAAIAAAAAACAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AQAAABAAAAAAAQAAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAA BAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAAAAAAAQAAABAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAIAAAAAACgBsBQAAQAAQAAUAA EAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQ AAQAAUAAEAAEAAFAABAAAAAAAQAAABAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAIAAAAgAAAAAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAg AAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAAAAACAAAA IAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AgAAACAAAAAAAgAA ACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAA IAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAAAAAAAgAAACAAAAAAAgAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAABAAAAAAAQAAABAABAABAABQAAQAAQAAUAAEAAEAAFA ABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAA EAAEAAEAAAAQAAAAAAEAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI AAAAgAAAAAAIAAAAgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAg AAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACAAAAIAAAAAACAAAAIAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAABAAAAEAAAAAABQAAQAAQAAUAA EAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQ AAQAAUAAEAAEAAFAABAABAAA1OizKW1TZOl1V9q+RZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIk SZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZKkA/cDwJ7PmkABLLQAAAAldEVY dGRhdGU6Y3JlYXRlADIwMjAtMDQtMThUMTE6NDA6MzIrMDA6MDD4EWKnAAAAJXRFWHRkYXRlOm1v ZGlmeQAyMDIwLTA0LTE4VDExOjQwOjMyKzAwOjAwiUzaGwAAAABJRU5ErkJggg=="
        x={-12.203}
        y={-10.541}
      />
    </Svg>
  );
}

export default SvgComponent;
