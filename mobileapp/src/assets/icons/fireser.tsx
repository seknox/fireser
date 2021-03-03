import * as React from "react"
import Svg, { SvgProps, Defs, LinearGradient, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 66.146 66.146"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={30.736}
          x2={31.404}
          y1={62.939}
          y2={6.812}
          gradientTransform="matrix(1 0 0 .997 0 .055)"
          gradientUnits="userSpaceOnUse"
        />
      </Defs>
      <Path
        fill="#00f"
        d="M28.9 1.865s3.712 5.682.164 13.149c-3.548 7.466-5.321 7.098-6.927 11.806-1.606 4.707.628 8.586-1.556 8.743-2.182.158-3.405-6.077-2.415-10.126l.99-4.05s-6.503 5.975-6.74 20.3c-.237 14.327 11.79 22.937 22.73 21.398 10.938-1.538 17.751-14.123 17.517-24.537-.234-10.414-8.207-15.914-8.207-15.914s3.413 6.956-.61 9.757c-4.022 2.801-4.404-2.793-3.89-11.654C40.469 11.877 28.9 1.865 28.9 1.865"
      />
      <Path
        fill="url(#prefix__a)"
        d="M29.434 18.45s2.225 6.687-3.672 14.434c-5.897 7.748-10.231 14.929-3.983 23.759 6.247 8.83 15.22 7.347 20.857 1.658 5.637-5.689 2.1-14.616.06-18.053-2.042-3.438-3.766-4.376-3.766-4.376s1.165 11.808-5.161 9.52c-3.17-1.145-3.233-6.298-1.434-11.904 2.472-7.705-2.9-15.039-2.9-15.039"
      />
    </Svg>
  )
}

export default SvgComponent