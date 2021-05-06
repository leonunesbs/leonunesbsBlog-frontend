import React, { useEffect, useState } from "react";
import {
  Button,
  Fade,
  Flex,
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
  const smallButtonColor = useColorModeValue(
    "rgba(0,0,0,0.1)",
    "rgba(255,255,255,0.1)"
  );
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

  const handleClick = () => {
    toggleColorMode();
  };

  return (
    <>
      <Flex display={["flex", "none"]}>
        <Button
          p={0}
          bgColor="transparent"
          _active={{ bgColor: smallButtonColor }}
          _hover={{ bgColor: smallButtonColor }}
          _focus={{}}
          color={color}
          isActive={false}
          onClick={handleClick}
        >
          <Icon as={colorMode === "light" ? FiMoon : FiSun} w={4} h={4} />
        </Button>
      </Flex>
      <Flex display={["none", "flex"]}>
        <FormControl display="flex" alignItems="center" p={1}>
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
      </Flex>
    </>
  );
}

export default ColorModeSwitch;
