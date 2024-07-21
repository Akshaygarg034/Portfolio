import styled from "styled-components";
import ConfigStars from "../config/config-stars.json";
import ConfigMolecules from "../config/config-molecules.json";
import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = (props) => {
  let config;
  switch (props.type) {
    case "contact":
      config = ConfigStars;
      break;
    case "main":
      config = ConfigMolecules;
      break;
    default:
      config = {};
  }

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        options={config}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </Box>
  );
};

export default ParticlesComponent;