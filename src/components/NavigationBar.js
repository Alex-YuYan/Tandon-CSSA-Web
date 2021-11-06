import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LogoUrl from "./logo.png";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#57068c" }}>
        <Toolbar>
          <img src={LogoUrl} alt="logo" height="80" width="200" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NYU Tandon CSSA
          </Typography>
          <Button component={Link} to={""} color="inherit">
            首页
          </Button>
          <Button component={Link} to={"/activity"} color="inherit">
            活动
          </Button>
          <Button component={Link} to={"/studentservice"} color="inherit">
            学生服务
          </Button>
          <Button component={Link} to={"/about"} color="inherit">
            关于
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
