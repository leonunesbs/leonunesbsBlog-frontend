import { Flex, useColorMode } from "@chakra-ui/react";
import React from "react";

function LinkedinBadge() {
  const { colorMode } = useColorMode();

  const dataVersion = "v1";
  const dataSize = "small";
  const dataLocale = "pt_BR";
  const dataType = "vertical";
  const dataVanity = "leonunesbs";

  return (
    <>
      {/* LinkedIn Badge */}
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
      />
      <Flex
        d={colorMode !== "dark" && "none"}
        className="LI-profile-badge"
        data-version={dataVersion}
        data-size={dataSize}
        data-locale={dataLocale}
        data-type={dataType}
        data-theme="dark"
        data-vanity={dataVanity}
      >
        <a
          className="LI-simple-link"
          href="https://br.linkedin.com/in/leonunesbs?trk=profile-badge"
        >
          Leonardo N.
        </a>
      </Flex>
      <Flex
        d={colorMode !== "light" && "none"}
        className="LI-profile-badge"
        data-version={dataVersion}
        data-size={dataSize}
        data-locale={dataLocale}
        data-type={dataType}
        data-theme="light"
        data-vanity={dataVanity}
      >
        <a
          className="LI-simple-link"
          href="https://br.linkedin.com/in/leonunesbs?trk=profile-badge"
        >
          Leonardo N.
        </a>
      </Flex>
    </>
  );
}

export default LinkedinBadge;
