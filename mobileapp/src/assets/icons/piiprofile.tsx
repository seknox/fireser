import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={666.667}
      height={496.08}
      viewBox="0 0 666.667 496.08"
      {...props}
    >
      <Path
        fill="#f4f4f4"
        d="M480.564 237.197c0 83.69-67.844 151.533-151.533 151.533S177.5 320.887 177.5 237.197c0-83.69 67.842-151.533 151.531-151.533s151.533 67.844 151.533 151.533"
      />
      <Path
        fill="#e3e3e2"
        d="M331.306 62.341v1.333h-.667c-1.506.014-3 .026-4.493.08-1.48.04-2.96.092-4.427.187-1.56.08-3.12.185-4.666.307-3.894.318-7.747.76-11.574 1.333-53.933 8-99.933 40.667-126.12 86.133-.266.439-.52.894-.773 1.334-14.32 25.385-22.506 54.691-22.506 85.866v.279c0 .441 0 .893.013 1.333.28 31.348 8.84 60.76 23.587 86.146.253.44.52.894.786 1.334 28.8 48.588 80.413 82.133 139.973 85.8 2.627.16 5.267.266 7.92.306h.067c.44.014.88.014 1.32.014h.013c.147.013.294.013.44.013h1.107v1.333h-1.107l-.106-.013h-.267a174.013 174.013 0 01-20.2-1.32c-55.733-6.84-103.507-39.759-130.706-86.133l-.774-1.334c-14.88-25.866-23.4-55.84-23.4-87.758 0-31.148 8.107-60.428 22.32-85.866.24-.44.494-.882.747-1.334 25.066-43.948 68.466-76.16 119.706-86.133 2.6-.508 5.214-.948 7.84-1.333a177.136 177.136 0 0125.947-1.907"
      />
      <Path
        fill="#e3e3e2"
        d="M326.14 415.476v-1.333c96.626 0 175.235-78.61 175.235-175.233 0-96.625-78.61-175.234-175.234-175.234v-1.334c97.36 0 176.567 79.208 176.567 176.568 0 97.36-79.208 176.566-176.567 176.566M156.06 243.247h-1.334v-9.754h1.334v9.754M307.593 243.247h-1.334v-9.754h1.334v9.754"
      />
      <Path
        fill="#e3e3e2"
        d="M329.24 243.247h-1.334v-9.754h1.333v9.754M350.887 243.247h-1.333v-9.754h1.333v9.754M372.535 243.247h-1.333v-9.754h1.333v9.754M502.42 243.247h-1.333v-9.754h1.333v9.754"
      />
      <Path fill="#fcfdfd" d="M252.523 51h-11.322V39.678h11.322V51" />
      <Path fill="#4870c0" d="M110.946 348.831h23.07v-23.067h-23.07z" />
      <Path fill="#799bd7" d="M110.946 348.831h23.07v-23.067h-23.07z" />
      <Path
        fill="#4870c0"
        d="M122.296 290.338L92.242 320.39h11.32v28.44h13.027v-18.56h11.4v18.56h13.027v-28.44h11.333l-30.053-30.053M282.822 436.64L151.314 364.34H103.45v-1.333h48.207l.15.082 131.658 72.383-.643 1.17M95.325 206.7c.133 11.035 4.78 22.722 14.393 28.143a23.573 23.573 0 009.276 2.918c10.476 1.01 20.87-5.53 25.855-14.798 4.985-9.269 4.992-20.702 1.513-30.634-3.417-9.752-18.836-33.567-31.238-25.403-12.578 8.277-19.976 25.068-19.799 39.773"
      />
      <Path
        fill="#c7d9f2"
        d="M121.142 237.863c-.713 0-1.432-.033-2.146-.102a23.573 23.573 0 01-9.278-2.918c-9.613-5.421-14.26-17.108-14.393-28.144l-.003-.517c0-14.58 7.371-31.075 19.802-39.256 1.764-1.161 3.588-1.676 5.43-1.676 11.115 0 22.878 18.713 25.808 27.079 1.583 4.52 2.444 9.35 2.444 14.146-.002 5.743-1.24 11.438-3.957 16.488-4.644 8.635-13.981 14.902-23.707 14.9"
      />
      <Path
        fill="#4870c0"
        d="M101.424 219.577a.967.967 0 01-.918-.664c-1.458-4.444-2.2-9.619-2.2-15.38 0-7.122 2.391-14.41 6.727-20.522a.965.965 0 011.575 1.118c-4.107 5.788-6.37 12.678-6.37 19.404 0 5.556.707 10.528 2.102 14.777a.963.963 0 01-.616 1.217l-.3.05M115.75 234.509l-.248-.032c-5.817-1.542-10.273-5.334-13.242-11.271a.966.966 0 111.728-.863c2.71 5.42 6.75 8.875 12.009 10.267a.967.967 0 01-.247 1.899M121.664 235.24a.967.967 0 010-1.931c11.458 0 18.414-6.756 20.672-20.082a.973.973 0 011.113-.79.967.967 0 01.79 1.113c-2.405 14.19-10.211 21.69-22.575 21.69M143.844 209.867l-.079-.002a.965.965 0 01-.884-1.04c.137-1.69.208-3.47.208-5.292 0-5.119-1.324-10.362-3.828-15.162a.966.966 0 011.712-.893c2.648 5.075 4.047 10.627 4.047 16.055 0 1.876-.074 3.708-.215 5.448a.965.965 0 01-.961.886M138.548 186.169a.963.963 0 01-.815-.447c-2.424-3.81-5.553-7.11-8.813-9.29a.965.965 0 111.072-1.605c3.478 2.326 6.806 5.827 9.369 9.86a.965.965 0 01-.813 1.482M110.242 179.435a.965.965 0 01-.66-1.669c4.018-3.775 8.42-5.939 12.082-5.939 1.701 0 3.56.471 5.524 1.4a.966.966 0 01-.827 1.744c-1.703-.806-3.284-1.213-4.697-1.213-3.175 0-7.096 1.973-10.76 5.416a.963.963 0 01-.662.261"
      />
      <Path
        fill="#4870c0"
        d="M103.826 212.786a.965.965 0 01-.949-.788c-.475-2.552-.715-5.323-.715-8.236 0-14.981 11.875-26.255 19.574-26.255 1.936 0 4.136.711 6.365 2.054a.966.966 0 11-.997 1.654c-1.928-1.162-3.784-1.777-5.367-1.777-6.968 0-17.644 10.897-17.644 24.324 0 2.795.23 5.448.681 7.881a.967.967 0 01-.772 1.127l-.177.016M110.826 226.32a.964.964 0 01-.618-.225c-2.655-2.225-4.696-5.345-6.067-9.272a.967.967 0 011.823-.637c1.256 3.596 3.1 6.43 5.484 8.427a.967.967 0 01-.62 1.706M121.737 230.018c-2.707 0-5.205-.475-7.425-1.413a.966.966 0 01.75-1.78c1.983.838 4.228 1.262 6.675 1.262 15.352 0 17.645-15.24 17.645-24.325a.965.965 0 111.93 0c0 16.932-6.951 26.256-19.575 26.256M140.109 201.222a.965.965 0 01-.955-.836c-.836-6.185-3.953-12.196-8.553-16.493a.967.967 0 011.319-1.41c4.918 4.595 8.253 11.026 9.146 17.644a.964.964 0 01-.826 1.086l-.131.01"
      />
      <Path
        fill="#4870c0"
        d="M121.812 224.798c-9.744 0-15.796-7.973-15.796-20.807 0-5.024 1.778-10.065 5.005-14.193a.965.965 0 011.52 1.188c-2.961 3.792-4.595 8.41-4.595 13.005 0 11.819 5.183 18.875 13.866 18.875 2.665 0 4.992-.59 6.914-1.756a.965.965 0 111.002 1.65c-2.23 1.353-4.894 2.038-7.916 2.038M132.817 219.578a.967.967 0 01-.777-1.537c2.377-3.236 3.634-8.094 3.634-14.05 0-10.418-8.389-18.873-13.862-18.873-1.632 0-3.582.768-5.492 2.163a.967.967 0 01-1.14-1.56c2.273-1.658 4.565-2.534 6.632-2.534 6.212 0 15.793 8.934 15.793 20.804 0 6.371-1.385 11.624-4.01 15.194a.96.96 0 01-.778.393"
      />
      <Path
        fill="#4870c0"
        d="M114.305 216.309a.964.964 0 01-.724-.327c-2.392-2.708-3.71-6.885-3.71-11.761 0-8.268 6.605-15.354 12.013-15.354.913 0 1.884.211 2.881.626a.967.967 0 01-.743 1.784c-.76-.318-1.48-.479-2.138-.479-3.966 0-10.083 5.764-10.083 13.423 0 4.405 1.147 8.128 3.227 10.482a.967.967 0 01-.723 1.606M121.884 219.575c-1.69 0-3.256-.309-4.656-.92a.965.965 0 11.773-1.769c1.155.503 2.46.757 3.883.757 9.1 0 10.082-9.385 10.082-13.422 0-4.928-2.649-8.988-5.129-11.144a.967.967 0 011.267-1.458c3.628 3.155 5.793 7.866 5.793 12.602 0 9.614-4.49 15.354-12.013 15.354"
      />
      <Path
        fill="#4870c0"
        d="M121.957 214.354c-4.039 0-7.007-2.633-7.943-7.043a.966.966 0 111.89-.4c.742 3.503 2.949 5.512 6.053 5.512 4.647 0 6.303-4.118 6.303-7.972a.965.965 0 111.93 0c0 6.016-3.232 9.903-8.233 9.903M114.69 205.417a.966.966 0 01-.966-.966c0-5.578 4.426-9.904 8.233-9.904 2.939 0 6.088 2.552 7.488 6.067a.965.965 0 11-1.793.715c-1.084-2.719-3.587-4.85-5.695-4.85-2.837 0-6.301 3.678-6.301 7.972a.965.965 0 01-.966.966"
      />
      <Path
        fill="#4870c0"
        d="M122.03 209.133a4.457 4.457 0 01-4.452-4.452 4.457 4.457 0 014.454-4.454.967.967 0 010 1.932 2.524 2.524 0 00-2.523 2.522 2.525 2.525 0 002.521 2.521 2.525 2.525 0 002.522-2.521 2.493 2.493 0 00-.807-1.85.968.968 0 011.312-1.417 4.467 4.467 0 011.427 3.267 4.457 4.457 0 01-4.454 4.452M144.25 179.84l-.646-1.165 45.696-25.347.646 1.165-45.696 25.348M297.18 101.786l-45.545-25.265H151.28v-1.333h100.7l45.847 25.433-.646 1.165M146.588 90.318H92.354l4.77-19.809h44.696l4.768 19.81"
      />
      <Path fill="#799bd7" d="M92.354 90.318h54.234v-19.81H92.354z" />
      <Path
        fill="#4870c0"
        d="M119.47 54.693A6.847 6.847 0 11119.473 41a6.847 6.847 0 01-.001 13.693zm0-22.437c-8.298 0-15.032 6.733-15.032 15.032 0 8.306 15.032 30.185 15.032 30.185s15.034-21.879 15.034-30.185c0-8.299-6.734-15.032-15.032-15.032"
      />
      <Path
        fill="#fff"
        d="M94.184 82.705l7.333-.013 33.12-5.694h8.747l-.32-1.333-8.547.013-33.12 5.694h-6.893l-.32 1.333"
      />
      <Path fill="#4870c0" d="M504.845 96.732h58.328V38.404h-58.328z" />
      <Path fill="#799bd7" d="M504.845 96.732h58.328V38.404h-58.328z" />
      <Path fill="#f8f8f9" d="M557.78 91.349h-47.552V43.797h47.552V91.35" />
      <Path
        fill="#4870c0"
        d="M543.719 62.636c0 4.254-1.774 7.986-4.427 10.081-1.4 1.092-3.067 1.733-4.84 1.733s-3.44-.64-4.84-1.733c-2.653-2.095-4.427-5.827-4.427-10.081 0-6.519 1.174-11.814 9.267-11.814 8.027 0 9.267 5.295 9.267 11.814"
      />
      <Path
        fill="#4870c0"
        d="M552.639 88.024v3.333h-36.374v-3.333c0-6.334 3.68-10.588 10.24-11.402l1.24-.08a1.863 1.863 0 001.867-1.866v-1.959c1.4 1.092 3.067 1.733 4.84 1.733s3.44-.64 4.84-1.733v1.959c0 1.041.84 1.866 1.867 1.866l1.24.08c6.56.814 10.24 5.068 10.24 11.402M358.368 72.537l-.646-1.165 45.848-25.434h88.903v1.334h-88.558l-45.547 25.265M552.36 192.729h6.747c-5.747 5.986-14.027 11.893-21.894 17.866l-5.346 3.92-.12.08-5.2-4.346c-6.64-5.747-13.64-11.747-18.587-17.707h10.013l4.387-15.053 6.547 28.853L535 191.57l3.8 8.24 4.48-14.427 4.987 14.08 4.093-6.733"
      />
      <Path
        fill="#799bd7"
        d="M531.747 214.595l-5.2-4.346c-6.64-5.747-13.64-11.747-18.587-17.707h10.013l4.387-15.053 6.547 28.853L535 191.57l3.8 8.24 4.48-14.427 4.987 14.08 4.093-6.733h6.747c-5.747 5.986-14.027 11.893-21.894 17.866l-5.346 3.92-.12.08"
      />
      <Path
        fill="#4870c0"
        d="M560.533 189.849h-9.053l-2.84 4.68-5.453-15.4-4.667 15.04-3.6-7.814-5.587 13.534-6.8-29.907-5.72 19.68h-10.106c-6.2-8.013-8.28-15.893-.267-22.893 10.027-8.773 21.64-.6 27.52 4.706 6.2-4.92 19.81-14.99 30.253-1.893 5.246 6.577 2.094 13.733-3.68 20.267M492.473 192.629h-46.342l-.152-.084-79.528-44.116.648-1.165 79.376 44.031h45.998v1.334M552.332 330.406c0 6.468-4.453 12.134-13.6 13.854-1.84.347-3.867.532-6.08.532-1.187 0-2.387-.053-3.56-.173-6.107-.56-11.88-2.533-15.32-5.2l3.64-8.08c3.067 2.227 7.32 3.935 11.68 4.56 1.2.187 2.427.28 3.627.28 2.626 0 4.6-.359 6.013-.987 2.04-.878 2.933-2.306 2.933-3.985 0-1.773-1.133-2.933-2.933-3.815-2.387-1.172-5.973-1.826-9.64-2.732-7.027-1.733-14.387-4.4-14.387-13.4 0-6.773 4.694-12.56 14.387-14.053a32.597 32.597 0 015.16-.387c1.493 0 2.987.092 4.48.28 4.293.52 8.413 1.8 11.613 3.827l-3.306 8.145c-2.76-1.572-5.56-2.626-8.307-3.173a22.402 22.402 0 00-4.547-.465c-2.12 0-3.8.266-5.093.72-2.627.918-3.72 2.625-3.72 4.572 0 2 1.467 3.201 3.72 4.094 2.547 1.014 6.093 1.626 9.64 2.532 6.773 1.72 13.6 4.494 13.6 13.054"
      />
      <Path
        fill="#4870c0"
        d="M538.732 291.594v5.506a35.83 35.83 0 00-4.48-.28c-1.853 0-3.573.132-5.16.387v-5.613h9.64M538.732 344.26v5.212h-9.64v-4.853c1.173.12 2.373.173 3.56.173 2.213 0 4.24-.185 6.08-.532"
      />
      <Path
        fill="#799bd7"
        d="M529.092 297.207v-5.613h9.64v5.506a35.83 35.83 0 00-4.48-.28c-1.853 0-3.573.132-5.16.387M538.732 349.472h-9.64v-4.853c1.173.12 2.373.173 3.56.173 2.213 0 4.24-.185 6.08-.532v5.212"
      />
      <Path
        fill="#4870c0"
        d="M532.816 286.61l-110.277-62.65h-47.86v-1.334h48.212l.153.088 110.43 62.736-.658 1.16"
      />
      <Path fill="#f9b1bc" d="M338 458.667l10.756 2.05 6.124-31.597-13.878-1.653-3.002 31.2" />
      <Path
        fill="#1d2a30"
        d="M351 458.773l-14.277-4.43c-.547-.176-1.136.066-1.43.59l-6.39 11.086c-.544.925-.281 2.146.587 2.726.152.102.319.18.493.231 5.025 1.597 7.412 2.277 13.69 4.263 3.877 1.197 14.74 6.665 20.298 6.702 5.559.035 6.617-5.796 4.363-6.346-10.06-2.464-13.424-9.426-15.594-13.347a3.084 3.084 0 00-1.74-1.475"
      />
      <Path
        fill="#cecdcc"
        d="M351.871 444.645l1.435-7.4h.002l-1.437 7.4m-12.424-1.013l.493-5.125-.493 5.126"
      />
      <Path fill="#dd8f91" d="M351.871 444.645l-12.424-1.013.493-5.125 13.366-1.262-1.435 7.4" />
      <Path
        fill="#1d2a30"
        d="M345.898 184.307c5.448.907 9.658-1.146 12.593 3.623.979 1.59 2.277 8.719 2.816 10.593 6.73 23.415 20.53 101.76 16.57 145.435-3.53 38.906-19.515 92.81-19.515 92.81l-21.552 2.035s8.157-82.567 9.05-114.75c1.534-55.063-21.731-143.367-21.731-143.367l21.769 3.621"
      />
      <Path fill="#4870c0" d="M361.822 440.883l-26.938-1.239.844-10.868 26.88 2.357-.786 9.75" />
      <Path
        fill="#c1c0be"
        d="M345.928 319.584c-.134-12.166-.97-24.26-2.182-35.747 1.385 12.454 2.233 24.665 2.185 35.738l-.003.01"
      />
      <Path
        fill="#182124"
        d="M345.931 319.575c.048-11.073-.8-23.284-2.185-35.738l-.04-.372c1.304-20.38 1.14-38.151.298-52.952 3.983 25.888 7.796 67.135 1.927 89.062"
      />
      <Path fill="#f9b1bc" d="M296.03 452.9l12.284 2.347 5.752-30.95-13.373-2.095-4.663 30.698" />
      <Path
        fill="#1d2a30"
        d="M308.522 454.067l-12.441-7.024a.97.97 0 00-1.29.316l-7.605 10.79c-.624.974-.39 2.302.523 2.968l.205.131c4.37 2.364 6.604 3.28 12.023 6.384 3.38 1.955 11.83 7.816 16.486 10.432 4.658 2.616 8.37-3.25 6.598-4.757-7.711-6.914-11.403-13.188-13.022-17.456a3.487 3.487 0 00-1.477-1.786"
      />
      <Path
        fill="#cecdcc"
        d="M310.997 440.81l1.098-5.906-1.098 5.905m-12.763-2.424l-.032-.005 1.425-9.364.028.014-1.421 9.355"
      />
      <Path fill="#dd8f91" d="M310.997 440.81l-12.763-2.425 1.421-9.355 12.44 5.874-1.098 5.905" />
      <Path
        fill="#1d2a30"
        d="M336.988 179.66s15.34 54.169 2.64 143.066c-7.355 62.846-26.334 112.743-26.334 112.743l-15.79-7.455s4.198-70.486 7.497-99.043c6.757-58.497-3.374-106.673-4.738-131.798-.412-7.587 5.04-14.11 12.124-14.946l24.601-2.568"
      />
      <Path
        fill="#4870c0"
        d="M316.443 437.693l-22.706-4.48.49-9.258 25.39 4.821-3.174 8.919M309.647 456.36c1.542.224 4.268.788 4.712 1.707a.555.555 0 01-.058.52 1.18 1.18 0 01-.931.706c-.912.003-2.283-1.078-3.739-2.976zm4.214 3.304c.36-.177.658-.473.849-.844a1.123 1.123 0 00.07-1.039c-.714-1.5-5.195-2.006-5.697-2.064l-.246.107.012.285c1.012 1.406 3.005 3.704 4.569 3.61.15.004.299-.014.443-.055"
      />
      <Path
        fill="#4870c0"
        d="M312.389 453.335c.209-.096.432-.15.658-.164a.95.95 0 01.814.333c.282.321.205.541.162.679-.454.913-3.008 1.605-4.457 1.582a9.348 9.348 0 012.823-2.43zm.584 2.257a2.863 2.863 0 001.492-1.172 1.11 1.11 0 00-.25-1.293 1.512 1.512 0 00-1.194-.49c-1.791.088-4.062 3.048-4.158 3.175l-.032.252.18.179a8.55 8.55 0 003.962-.65M359.664 461.31a1.013 1.013 0 01.54.3.404.404 0 01.04.378 1.359 1.359 0 01-.813.896c-1.432.573-4.168-.7-5.61-1.479a17.227 17.227 0 015.847-.048zm-2.998 1.96a4.55 4.55 0 003 .142c.524-.193.93-.64 1.096-1.2a.89.89 0 00-.096-.897c-1.04-1.338-6.912-.395-7.587-.28l-.201.214.12.274a19.001 19.001 0 003.668 1.748"
      />
      <Path
        fill="#4870c0"
        d="M357.924 457.493l.188.09c.471.213.447.408.424.473-.124.924-3.077 2.48-5.018 2.893.697-1.153 2.6-3.998 4.406-3.454zm-4.968 4.066l.103-.012c1.74-.214 5.76-1.98 5.977-3.424.043-.307-.078-.739-.738-1.04-2.704-1.262-5.38 3.844-5.534 4.085l.03.267.162.124"
      />
      <Path
        fill="#f9b1bc"
        d="M446.93 132.317s1.014-7.46 1.92-7.188c.708.213 7.933-1.1 11.09-1.69a5.645 5.645 0 012.886.217l7.147 2.478a1.81 1.81 0 011.142 2.234l-1.284 4.268a1.813 1.813 0 01-1.495 1.272l-8.277 1.112a5.699 5.699 0 01-2.044-.1l-11.085-2.603"
      />
      <Path
        fill="#4870c0"
        d="M443.606 124.86l9.849-3.667s5.059 4.221 3.385 8.7c-1.673 4.477-4.07 4.916-4.07 4.916s-3.995 3.308-9.622.039c-5.626-3.271.458-9.988.458-9.988"
      />
      <Path
        fill="#4870c0"
        d="M356.178 106.426c9.632 3.068 34.289 11.306 45.921 15.798 3.423 1.322 13.55 1.257 22.883 1.19 5.28-.036 10.309-.073 13.724.14 2.57.163 7.038 2.179 7.038 2.179l-1.377 7.19s-1.35 3.282-4.299 3.867c-11.094 2.203-38.601 4.39-44.504 2.914-17.168-4.3-45.805-12.044-47.94-16.375-3.198-6.472 1.142-19.259 8.554-16.903"
      />
      <Path
        fill="#395eb4"
        d="M377.546 134.945l-15.866-5.12c0-2.295-.12-4.413-.32-6.361 6.252 6.814 16.186 11.48 16.186 11.48"
      />
      <Path
        fill="#f9b1bc"
        d="M204.697 146.369s-1.015-7.46-1.922-7.187c-.706.214-7.931-1.101-11.089-1.69a5.645 5.645 0 00-2.885.217l-7.15 2.479a1.81 1.81 0 00-1.14 2.232l1.286 4.268c.204.68.788 1.177 1.492 1.272l8.277 1.112a5.675 5.675 0 002.046-.1l11.085-2.603"
      />
      <Path
        fill="#4870c0"
        d="M212.067 136.586l-11.804.04s-4.286 3.174-2.038 7.392c2.246 4.219 5.365 5.308 5.365 5.308l8.803-2.245c5.81-5.821-.326-10.495-.326-10.495"
      />
      <Path
        fill="#4870c0"
        d="M305.627 123.157c-.268.773-1.268 1.747-2.826 2.853-1.334.947-3.067 2-5.108 3.107l-.012.013c-9.708 5.294-26.135 12.08-37.428 16.56-5.652 2.24-33.214 3.68-44.494 2.96-3-.186-4.772-3.265-4.772-3.265l-2.306-6.947s4.158-2.588 6.692-3.081c9.281-1.84 31.068-3.373 36.106-6.133 10.947-5.987 34.307-17.386 43.455-21.694 7.039-3.32 13.012 8.787 10.693 15.627"
      />
      <Path
        fill="#4870c0"
        d="M362.654 189.197c0 1.306-.282 2.574-1.042 3.733l-.545.815-.413.652-.068.026-61.625.402a2.453 2.453 0 01-.36-.268c-4.348-3.347-4.068-9.399-1.8-14.414 1.892-4.24 2.438-12.345 2.345-21.838-.107-9.521-.852-20.441-1.545-30.36-.64-9.121-.482-21.055-.482-21.055l.054-.093a151.781 151.781 0 0121.533-2.667c7.708-.466 15.428-.4 23.106.227 7.202.853 7.307.493 14.375 2.067l.039.04c.253.56 4 6.174 5.133 17 .2 1.948.321 4.066.321 6.36 0 .866-.013 1.76-.053 2.68-.187 4.853-.268 16.822-.841 42.093-.06 2.682-.292 5.374.466 7.946.64 2.175 1.402 4.48 1.402 6.654"
      />
      <Path
        fill="#c1c0be"
        d="M313.482 104.492a.032.032 0 00-.016-.006c.027 0 .087-.004.176-.009l-.16.015"
      />
      <Path
        fill="#395eb4"
        d="M336.026 124.26s-21.772-19.427-22.544-19.768l.16-.015c.943-.052 5.064-.297 5.064-.297l4.8 3.946a.653.653 0 00.047.039l11.393 9.39 6.853-13.122a.248.248 0 01.013-.027l4.987.482-10.773 19.372"
      />
      <Path
        fill="#c1c0be"
        d="M298.86 148.574a1.639 1.639 0 01-.006-.124l-.001-.044.006.168m-1.142-18.954l-.036-.49.002-.001.034.49"
      />
      <Path
        fill="#395eb4"
        d="M298.935 148.78c-.038 0-.064-.066-.076-.206l-.006-.168c-.096-3.23-.746-13.558-1.136-18.786l-.034-.491.01-.012c2.04-1.107 3.774-2.16 5.108-3.107.992 3.33-3.22 22.77-3.866 22.77"
      />
      <Path
        fill="#1d2a30"
        d="M341.812 104.406l-6.866 13.148-11.44-9.428a11.893 11.893 0 007.627 2.747c4.293 0 8.506-2.292 10.68-6.467"
      />
      <Path
        fill="#f9b1bc"
        d="M341.812 104.406c-2.173 4.175-6.386 6.467-10.68 6.467-2.666 0-5.373-.879-7.626-2.747l-4.8-3.946c5.253-4.92 3.933-18.547 2.547-26.014l14.093 7.694c.786 8.24-1.76 16.468 6.466 18.546"
      />
      <Path
        fill="#c1c0be"
        d="M336.448 100.033c-.472-1.183-.7-2.532-.812-3.995a.103.103 0 01.003.02c.323 2.028.596 3.244.81 3.975m-1.106-14.173l-.007-.004.008-.002v.006"
      />
      <Path
        fill="#dd8f91"
        d="M335.702 101.204c-7.95-.002-10.503-10.362-10.503-10.362.587-4.636 9.833-4.977 10.137-4.986l.007.004c-.017.16-.533 4.954.293 10.178.111 1.463.34 2.812.812 3.995.29.99.472 1.081.524 1.085a9.779 9.779 0 01-1.27.086"
      />
      <Path fill="#c1c0be" d="M336.982 101.118v-.001a.013.013 0 00.006-.001l-.006.002" />
      <Path fill="#dd8f91" d="M336.975 101.118h-.003l.01-.001v.001h-.007" />
      <Path
        fill="#f9b1bc"
        d="M315.093 73.794c5.05 11.38 6.938 16.3 15.037 20.086 12.185 5.693 25.048-2.994 23.51-15.638-1.386-11.393-9.4-28.07-22.523-28.47-9.376-.315-17.232 7.03-17.546 16.406a16.973 16.973 0 001.522 7.616"
      />
      <Path
        fill="#1d2a30"
        d="M313.935 85.237c20.55-2.25 6.284-24.307 23.72-33.81-4.54-8.022-17.296-8.974-31.345 1.72-11.928 9.077 7.625 32.09 7.625 32.09"
      />
      <Path
        fill="#1d2a30"
        d="M323.358 48.554s22.404 6.643 25.764 15.31c0 0 .866-18.04-7.1-18.516-7.968-.476-22.541-2.07-18.664 3.206"
      />
      <Path
        fill="#f9b1bc"
        d="M315.057 86.496a9.107 9.107 0 006.634 2.092c3.167-.307 3.615-3.414 1.78-5.81-1.648-2.17-5.293-4.558-8.024-3.13a4.093 4.093 0 00-.39 6.848"
      />
      <Path
        fill="#1d2a30"
        d="M333.96 70.484c.351.941 1.14 1.506 1.754 1.296.612-.21.84-1.184.488-2.127-.352-.941-1.142-1.507-1.755-1.296-.612.21-.84 1.184-.488 2.127M344.664 66.502c.367.942 1.142 1.507 1.77 1.298.626-.21.84-1.186.473-2.143s-1.127-1.507-1.755-1.297c-.626.21-.884 1.184-.488 2.142"
      />
      <Path
        fill="#f46778"
        d="M342.443 69.186a27.28 27.28 0 005.63 4.788 4.325 4.325 0 01-3.14 1.88l-2.49-6.668"
      />
      <Path
        fill="#1d2a30"
        d="M347.683 80.22l.079-.348-.002-.003-.346-.063c-2.108 1.471-4.42 1.996-6.87 1.759l-.334.07.038.313.032.021c3.702.745 6.89-1.403 7.403-1.75M330.143 63.605a.41.41 0 00.404-.079c1.084-.914 2.446-1.272 3.648-.957.207.064.448-.067.548-.296.097-.23.012-.473-.19-.543l-.009-.004c-1.45-.398-3.1.022-4.418 1.124-.19.155-.253.427-.143.615l.16.14M346.6 58.866a.475.475 0 00.276-.398.49.49 0 00-.44-.532h-.005a5.744 5.744 0 00-4.955 1.926.475.475 0 00.05.671l.03.024a.488.488 0 00.687-.09l.001-.003a4.81 4.81 0 014.1-1.55l.255-.048"
      />
      <Path
        fill="#4870c0"
        d="M361.643 199c-.488-.32-45.354 1.786-58.481 2.026-4.57.439-4.944-5.661-3.913-6.337l60.733-.33.07-.026.446-.652c.754 1.226 1.328 2.346 1.677 3.238.475 1.16-.532 2.082-.532 2.082"
      />
      <Path
        fill="#395eb4"
        d="M302.702 201.049c-2.907 0-3.925-2.822-3.928-4.724-.001-.803.179-1.443.475-1.636l60.733-.33.07-.026.446-.652c.754 1.226 1.328 2.346 1.677 3.238.09.223.127.436.127.636 0 .843-.659 1.446-.659 1.446a.653.653 0 00-.207-.026 13.18 13.18 0 00-.526-.008c-2.416 0-10.482.307-20.006.686-13.747.546-30.533 1.242-37.742 1.373a4.576 4.576 0 01-.46.023"
      />
    </Svg>
  );
}

export default SvgComponent;