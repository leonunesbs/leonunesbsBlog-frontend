import { useColorModeValue, useTheme } from "@chakra-ui/react";

function LogoNoText() {
  const themeComponent = useTheme();
  const bg = useColorModeValue(
    themeComponent.colors.gray[800],
    themeComponent.colors.gray[200]
  );
  const brand = useColorModeValue(
    themeComponent.colors.brand[500],
    themeComponent.colors.brand[300]
  );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.53 71.31">
      <g id="logo-light-notext">
        <path
          id="L"
          style={{ fill: brand }}
          d="M42.53.17,42.61,0H34a1.27,1.27,0,0,0-1.15.73L.13,69.34a1.28,1.28,0,0,0,1.14,1.83l39.12.14A1.28,1.28,0,0,0,41.67,70V63.14H13.4Z"
        />
        <path
          id="N"
          style={{ fill: bg }}
          d="M71.53,69.54a1.28,1.28,0,0,1-1.29,1.28h-7A1.28,1.28,0,0,1,62,70L44,19.35a1.28,1.28,0,0,0-2.49.49c.2,4.13.3,8,.3,11.56V60.45H33.5l0-34.79L45.08.23Z"
        />
      </g>
    </svg>
  );
}

export default LogoNoText;
