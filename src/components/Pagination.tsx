import { Button, HStack } from "@chakra-ui/react";

export const Pagination = ({ onClick, data, ...rest }) => {
  let hasPrev = data.prev;
  let hasNext = data.next;
  return (
    <HStack>
      <Button
        onClick={() => onClick((prev) => prev - 1)}
        disabled={hasPrev == null ? true : false}
      >
        Anterior
      </Button>
      <Button
        onClick={() => onClick((prev) => prev + 1)}
        disabled={hasNext ? false : true}
      >
        Próximo
      </Button>
    </HStack>
  );
};
