import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
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
      setUserColorMode(false);
    } else {
      setUserColorMode(true);
    }
  }, [colorMode]);
  return (
    <FormControl display="flex" alignItems="center" p={1} mr={2}>
      <FormLabel htmlFor="color-mode-select" mb="0" display="none">
        Color mode switch
      </FormLabel>
      <Icon as={FiSun} w={4} h={4} color={color} />
      <Switch
        id="color-mode-select"
        size="md"
        mx={2}
        colorScheme="blue"
        onChange={toggleColorMode}
        isChecked={userColorMode}
      />
      <Icon as={FiMoon} w={4} h={4} color={color} />
    </FormControl>
  );
}

export default ColorModeSwitch;
