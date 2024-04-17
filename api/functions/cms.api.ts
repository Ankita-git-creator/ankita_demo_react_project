import { TermsAndPrivacy } from "@/interface/cms.interfaces";
import axiosInstance from "../axiosInstance";
import ApiRequest from "../axiosInstance/request";
import { baseUrl, endpoints } from "../endpoints";

export const fetchAboutUs = async () => {
  try {
    const res = await ApiRequest.get(endpoints.cms.about);
    return res;
  } catch (error) {
    return error;
  }
};

// Faq
export const faqQuery = () => {
  try {
    const res = ApiRequest.get(endpoints.cms.faq);

    return res;
  } catch (error) {
    return error;
  }
};

// terms-conditions
export const GetTermsDetails = async () => {
  const res = await axiosInstance.get<TermsAndPrivacy>(
    `${baseUrl}/${endpoints.cms.terms_conditions}`
  );
  return res;
};

// privacy-policy
export const GetPrivacyDetails = async () => {
  const res = await axiosInstance.get<TermsAndPrivacy>(
    `${baseUrl}/${endpoints.cms.privacy_policy}`
  );
  return res;
};
