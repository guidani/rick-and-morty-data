import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  return (
    <Box
      color="#212121"
      bg={"brand.500"}
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={4}
    >
      <HStack>
        <Text>Desenvolvido por Guilherme Daniel</Text>
        <Link href="https://www.linkedin.com/in/guilherme-daniel/" isExternal>
          <FiLinkedin />
        </Link>
        <Link href="https://github.com/guidani" isExternal>
          <FiGithub />
        </Link>
      </HStack>
    </Box>
  );
};
