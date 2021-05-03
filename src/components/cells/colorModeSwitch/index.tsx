import React, { useEffect, useState } from "react";
import {
  Icon,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

function ColorModeSwitch() {
  const color = useColorModeValue("gray.700", "gray.50");

  const [userColorMode, setUserColorMode] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  // Checks colorMode and sets Switch value
  useEffect(() => {
    if (colorMode === "light") {
      setUserColorMode(true);
    } else {
      setUserColorMode(false);
    }
  }, [colorMode]);
  return (
    <>
      <Icon as={FiMoon} w={4} h={4} color={color} />
      <Switch
        id="color-mode-select"
        size="md"
        mx={2}
        colorScheme=""
        onChange={toggleColorMode}
        isChecked={userColorMode}
      />
      <Icon as={FiSun} w={4} h={4} color={color} />
    </>
  );
}

export default ColorModeSwitch;
