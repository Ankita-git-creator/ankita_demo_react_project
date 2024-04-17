import { GetPrivacyDetails, GetTermsDetails } from "@/api/functions/cms.api";
import { useQuery } from "react-query";
import {
  GET_PRIVACY_DETAILS,
  GET_TERMS_DETAILS
} from "../query-keys/cmsQuery.keys";

// terms-condition

export const useTermsDetails = (
  enabled: boolean = false,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([GET_TERMS_DETAILS], GetTermsDetails, {
    enabled,
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data ?? []
  });

//   privacy-policy

export const usePrivacyDetails = (
  enabled: boolean = false,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([GET_PRIVACY_DETAILS], GetPrivacyDetails, {
    enabled,
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data ?? []
  });
