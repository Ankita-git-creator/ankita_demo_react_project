import BannerAfterSec from "@/components/BannerAfterSec/BannerAfterSec";
import BannerSec from "@/components/BannerSec/BannerSec";
import FeatureSec from "@/components/FeatureSec/FeatureSec";
import Outdoor from "@/components/Outdoor/Outdoor";
import UseApp from "@/components/UseApp/UseApp";
import { useLandingDetails } from "@/hooks/react-query/query-hooks/landingQuery.hooks";
import Wrapper from "@/layout/wrapper/Wrapper";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

export default function Home() {
  const { data: landingInfo, isLoading, refetch } = useLandingDetails(false);
  console.log("landingInfo", landingInfo);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Wrapper>
      <BannerSec labelValue={landingInfo?.banner_text_1}>
        <Typography>{landingInfo?.banner_text_2}</Typography>
      </BannerSec>
      <BannerAfterSec />
      <UseApp />
      <FeatureSec />
      <Outdoor />
    </Wrapper>
  );
}
