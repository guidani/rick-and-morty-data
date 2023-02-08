import { Button, HStack, Spacer } from "@chakra-ui/react";

type InfoProps = {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
};

type Props = {
  onClick: any;
  data: InfoProps;
};

export const Pagination = ({ onClick, data }: Props) => {
  let hasPrev = data.prev;
  let hasNext = data.next;
  return (
    <HStack w="100%" my="2">
      <Spacer />
      <Button
        onClick={() => onClick((prev: number) => prev - 1)}
        disabled={hasPrev == null ? true : false}
      >
        Anterior
      </Button>
      <Button
        onClick={() => onClick((prev: number) => prev + 1)}
        disabled={hasNext ? false : true}
      >
        Próximo
      </Button>
    </HStack>
  );
};
