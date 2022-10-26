import { Box, Card, Paper, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Stack } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import forest from "../public/forest.jpg"
import React from "react";

const Contacto = () => {
  const background = pink[100];
  return (
    <Paper sx={{ height: "50vh", backgroundImage: {forest}, p: 2 }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, p: 2 }}
        align="center"
      >
        Contacto
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row">
        <Typography>
          <MailOutlineIcon fontSize="large" />
        </Typography>
        <Typography>correoElectronico@gmail.com</Typography>
        </Stack>
        <Stack direction="row">
        <Typography>
          <MailOutlineIcon fontSize="large" />
        </Typography>
        <Typography>correoElectronico@gmail.com</Typography>
        </Stack>
        <Stack direction="row">
        <Typography>
          <MailOutlineIcon fontSize="large" />
        </Typography>
        <Typography>correoElectronico@gmail.com</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Contacto;
