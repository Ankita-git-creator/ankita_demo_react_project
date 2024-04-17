import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { LandingDetails } from "@/interface/landing.interfaces";
import { useQuery } from "react-query";
import { GET_LANDING_DETAILS } from "../query-keys/landingQuery.keys";

const getLandingDetails = async () => {
  const res = await axiosInstance.get<LandingDetails>(
    `${endpoints.landing.home}`
  );
  return res;
};

export const useLandingDetails = (
  enabled: boolean = false,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([GET_LANDING_DETAILS], getLandingDetails, {
    enabled,
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data ?? []
  });
