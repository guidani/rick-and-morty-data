import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

type StatProps = {
  label: string;
  data: any;
}

export const CustomStat = ({ label , data}: StatProps) => {
  return (
    <Stat p="2" border="1px" borderRadius="md" my="1" maxW="min-content">
      <StatLabel minWidth="max-content">{label}</StatLabel>
      <StatNumber>{data}</StatNumber>
    </Stat>
  );
};
