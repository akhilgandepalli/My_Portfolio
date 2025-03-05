import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import InfoIcon from "@mui/icons-material/Info";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <img
              src="original-31d2f5788177a4406844c2e0c5b8a86e.webp"
              style={{ height: "24px", padding: "0 5px" }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "#00204a",
                fontFamily: "revert-layer",
                fontWeight: 600,
              }}
            >
              Portfolio
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              
              alignItems: "center",
              width: { md: "200px" },
              border: {md:"1px solid gray"},
              borderRadius: 5,
              padding: { xs: "0", md: "4px 12px 4px 24px" },
            }}
          >
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                fontSize: "16px",
                color: "#000",
              }}
            >
              Akhil Gandepalli
            </Typography>

            <IconButton
              aria-label="Menu button"
              onClick={toggleDrawer(true)}
              sx={{
                p: "2px",
                // border: {md:"1px solid"},
                height: "30px",
                "&:hover": { border: "none" },
              }}
            >
              <InfoIcon
                sx={{
                  color: "#00204a",
                  fontSize: "28px",
                  "&:hover": {
                    border: "none",
                    fontSize: "32px",
                    color: "#004197",
                  },
                }}
              />
            </IconButton>
            <Drawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem sx={{ display: "flex", justifyContent: "center",paddingBottom:2,marginBottom:2,borderBottom:'1px solid gray' }}>
                  <img src="public/mypic.jpg" style={{ width: "140px", borderRadius:50 }} />
                </MenuItem>
                <MenuItem>
                  <strong>Name:&nbsp;&nbsp;</strong>Akhil Gandepalli
                </MenuItem>
                <MenuItem>
                  <strong>Email:&nbsp;&nbsp;</strong>akhilgandepalli@gmail.com
                </MenuItem>
                <MenuItem>
                  <strong>Alt Email:&nbsp;&nbsp;</strong>akhilgandepalli2@gmail.com
                </MenuItem>
                <MenuItem>
                  <strong>Mobile:&nbsp;&nbsp;</strong>+91 9398871358
                </MenuItem>
                <MenuItem>
                  <strong>Alt no:&nbsp;&nbsp;</strong>+91 8186090833
                </MenuItem>
                <MenuItem>
                  <strong>Location:&nbsp;&nbsp;</strong>Visakhpatnam
                </MenuItem>

                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="success" variant="contained" fullWidth
                  onClick={()=>window.open("public/resume/AkhilGandepalliResume latest.pdf")}
                  >
                    Resume
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
          {/* <Box sx={{ display: 'flex', gap: 1 }}>
           
          </Box> */}
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
