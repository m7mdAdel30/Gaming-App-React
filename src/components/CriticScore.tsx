import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let colorScore =
    score >= 90
      ? "blue"
      : score >= 80
      ? "green"
      : score > 75
      ? "orange"
      : "red";
  return (
    <Badge
      colorScheme={colorScore}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
