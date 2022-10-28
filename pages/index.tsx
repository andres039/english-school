import {
  AppBar,
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  Link,
  Slide,
  Toolbar,
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
      <AppBar position="static" sx={{ backgroundColor: backColor }}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100vw" }}
          >
            <Zoom in={true} timeout={1000}>
              <Stack direction="row" spacing={1}>
                <Typography color="blue" variant="h5">
                  English
                </Typography>
                <Typography color="red" variant="h5">
                  School
                </Typography>
                <Typography color="white" variant="h5">
                  Center
                </Typography>
              </Stack>
            </Zoom>

            {/* <Stack direction="row" justifySelf="flex-end" sx={{ pr: 4 }} spacing={2}> */}
            <Stack direction="row">
              {/* <Fade in={true} timeout={1000}> */}
              <IconButton edge="end" size="large">
                <Link href="mailto:englishschoolcenteresc@gmail.com">
                  <MailIcon />
                </Link>
              </IconButton>
              {/* </Fade> */}
              {/* <Fade in={true} timeout={2000}> */}
              <IconButton size="large">
                <Link href="https://www.facebook.com/englishschoolcenter/">
                  <FacebookIcon />
                </Link>
              </IconButton>
            </Stack>
            {/* </Fade> */}
            {/* </Stack> */}
          </Stack>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          maxHeight: "100vh",
          maxWidth: "100vw",
          mt: "5vh",
        }}
      >
        <Grid container spacing={2} sx={{ minHeight: "60vh", p: 4 }}>
        <Slide in={true} direction="right" timeout={1000}>
          <Grid
            sm={12}
            md={9}
            sx={{
              maxHeight: "70vh",
              maxWidth: "100vw",
            }}
          >
            <Image
              alt="Books and a map of the world"
              src={backGround}
              height={1100}
            />
          </Grid>
          </Slide>
          <Grid sm={12} md={3}>
            <Grid container>
        <Slide in={true} direction="left" timeout={1000}>

              <Grid sx={{ p: 4 }} xs={12}>
                <Typography variant="h6" color="A100">
                  Aprende Inglés en La Mesa Cundinamarca con los mejores métodos
                  de las escuelas australianas.
                </Typography>
              </Grid>
              </Slide>
                <Slide in={true} direction="up" timeout={1000}>
              <Grid xs={12} container justifyContent="center">
                <Image alt="Kangaroo" src={kangaroo} height={100} width={100} />
              </Grid>
                </Slide>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 6 }}
          >
            <Typography align="center" variant="h5" color="grey">
              {" "}
              Contáctanos: 3172407551
            </Typography>
          </Stack>
          <Typography align="center" variant="h5" color="grey">
            {" "}
            Visítanos: Cl. 8, La Mesa, Cundinamarca, Colombia
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
