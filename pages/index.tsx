import {
  AppBar,
  Button,
  Divider,
  Fade,
  Link,
  Slide,
  Typography,
  Unstable_Grid2 as Grid,
  Zoom,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import backGround from "../public/Exchange-Student-Vector.jpg";
import kangaroo from "../public/kangaroo.jpg";
import { Container, Stack } from "@mui/system";
import Contacto from "../components/Contacto";
import { deepPurple, pink, blueGrey } from "@mui/material/colors";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";

const Home: NextPage = () => {
  const backColor = deepPurple[100];

  return (
    <>
      <Head>
        <title>English School Center</title>
      </Head>
      <AppBar sx={{ p: 2, backgroundColor: backColor }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={true} timeout={1000}>
            <Grid container sx={{ width: "25vw" }}>
              <Grid sm={12} md={4}>
                <Typography align="center" color="blue" variant="h5">
                  English
                </Typography>
              </Grid>
              <Grid sm={12} md={4}>
                <Typography
                  align="center"
                  color="red"
                  variant="h5"
                  component="div"
                >
                  School
                </Typography>
              </Grid>
              <Grid sm={12} md={4}>
                <Typography align="center" color="white" variant="h5">
                  Center
                </Typography>
              </Grid>
            </Grid>
          </Zoom>

          <Stack direction="row" justifySelf="flex-end" sx={{ pr: 4 }} spacing={2}>
            <Fade in={true} timeout={1000}>
              <Link href="mailto:englishschoolcenteresc@gmail.com">
                <Button variant="outlined">
                  <MailIcon />
                </Button>
              </Link>
            </Fade>
            <Fade in={true} timeout={2000}>
              <Link href="https://www.facebook.com/englishschoolcenter/">
                <Button variant="outlined">
                  <FacebookIcon />
                </Button>
              </Link>
            </Fade>
          </Stack>
        </Stack>
      </AppBar>
      <Container
        sx={{
          maxHeight: "100vh",
          maxWidth: "100vw",
          mt: "15vh",
        }}
      >
        <Grid container spacing={2} sx={{ minHeight: "60vh", p: 4 }}>
          <Grid
            sm={12}
            md={9}
            sx={{
              maxHeight: "70vh",
              maxWidth: "100vw",
            }}
          >
            <Image
              alt="The house from the offer."
              src={backGround}
              height={1100}
            />
          </Grid>
          <Grid sm={12} md={3}>
            <Grid container>
              <Grid sx={{ p: 4 }} xs={12}>
                <Typography variant="h6" color="A100">
                  Aprende Inglés en La Mesa Cundinamarca con los mejores métodos
                  de las escuelas australianas.
                </Typography>
              </Grid>
              <Grid xs={12} container justifyContent="center">
                <Image alt="Kangaroo" src={kangaroo} height={100} width={100} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Fade in={true} timeout={3000}>
              <PhoneIcon fontSize="large" color="action" />
            </Fade>
            <Typography align="center" variant="h4" color="grey">
              {" "}
              Contáctanos: 3172407551
            </Typography>
          </Stack>
          <Typography align="center" variant="h4" color="grey">
            {" "}
            Visítanos: Cl. 8, La Mesa, Cundinamarca, Colombia
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
