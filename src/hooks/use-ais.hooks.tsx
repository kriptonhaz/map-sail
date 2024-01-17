import { getAllShipPosition } from "@/api/ais.api";
import { useQuery } from "@tanstack/react-query";

export const useAisHook = () => {
  const listAllShip = () =>
    useQuery({
      queryKey: ["ais-all-ship"],
      queryFn: () => getAllShipPosition(),
      refetchInterval: 30000,
    });

  return {
    listAllShip,
  };
};
