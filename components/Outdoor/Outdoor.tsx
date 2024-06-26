import { useLandingDetails } from "@/hooks/react-query/query-hooks/landingQuery.hooks";
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";

export const OutdoorWrap = styled(Box)`
  .outDoor_outr {
    background-color: ${primaryColors.secondary};
    padding: 52px 65px;

    border-radius: 50px;
    @media (max-width: 599px) {
      padding: 25px;
    }
    h2 {
      margin-bottom: 10px;
      span {
        color: ${primaryColors.primary};
        display: inline-block;
        font-weight: 700;
      }
    }
    .out_lft {
      margin-top: 55px;
      @media (max-width: 899px) {
        margin-top: 0px;
        margin-bottom: 25px;
      }
      p {
        max-width: 500px;
      }
    }
  }
  .form_grp {
    margin-bottom: 15px;
    button {
      padding: 26px 45px;
      @media (max-width: 600px) {
        padding: 20px 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`;

export default function Outdoor() {
  const { data: landingInfo, isLoading, refetch } = useLandingDetails(false);
  console.log("landingInfo", landingInfo);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <OutdoorWrap>
      <Container fixed>
        <Box className="outDoor_outr">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box className="out_lft">
                <Typography variant="h2">
                  <span>Get in touch </span> with Outdoor Ninja
                </Typography>
                <Typography variant="body1">
                  {landingInfo?.contact_content}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <form>
                <Box className="out_rgt">
                  <Box className="form_grp">
                    <InputFieldCommon placeholder="Full Name" />
                  </Box>
                  <Box className="form_grp">
                    <InputFieldCommon placeholder="Email Address" />
                  </Box>
                  <Box className="form_grp">
                    <InputFieldCommon placeholder="Description" />
                  </Box>
                  <Box className="form_grp">
                    <CustomButtonPrimary
                      color="primary"
                      type="submit"
                      variant="contained"
                    >
                      <Typography variant="body1">Submit</Typography>
                    </CustomButtonPrimary>
                  </Box>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </OutdoorWrap>
  );
}
