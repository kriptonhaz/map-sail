import { IShipResponse } from "@/interfaces/ais.interface";
import API from "./base";

export const getAllShipPosition = async (): Promise<IShipResponse> => {
  const { data } = await API().request<IShipResponse>({
    url: `/ais/position`,
    method: "GET",
  });

  return data;
};
