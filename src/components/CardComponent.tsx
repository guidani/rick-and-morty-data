import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CustomBadge } from "./CustomBadge";

type TOrigin = {
  name: string;
}

type TLocation = {
  name: string;
}


export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status?: string;
  species?: string;
  gender?: string;
  origin: TOrigin;
  location: TLocation;
}

export const CardComponent = ({
  id,
  name,
  status,
  image,
  species,
  gender,
  origin,
  location,
}: ICharacter) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={name} />
      <Box p={2}>
        <Flex justifyContent="space-between">
          <Text>Name</Text>
          <Text>{name}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Status:</Text>
          <CustomBadge status={status} />
        </Flex>
        {/* Modal */}
        <Button onClick={onOpen} colorScheme="brand" w="full" mt="1">
          Ver mais
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader alignSelf="center">{name}</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <Image src={image} alt={name} alignSelf="center" />
              <Flex justifyContent="space-between">
                <Text>Status:</Text>
                <CustomBadge status={status} />
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Specie:</Text>
                <Text>{species}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Gender:</Text>
                <Text>{gender}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Origin:</Text>
                <Text>{origin?.name}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Location:</Text>
                <Text>{location?.name}</Text>
              </Flex>
            </ModalBody>
            {/*  */}
            <ModalFooter>
              <Button colorScheme="red" onClick={onClose} w="full">
                Close
              </Button>
              {/* <Button variant="ghost">Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};
