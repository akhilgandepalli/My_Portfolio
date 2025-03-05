import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
//import Typist from "react-typist";
//import "react-typist/dist/Typist.css";
import Typewriter from "typewriter-effect";

const Introduction = () => {
  const [typing, setTyping] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid gray",
        marginTop: "100px",
        padding: "20px 0",
        borderRadius: 2,
        bgcolor: "#F8FAFC",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{ fontFamily: "fantasy", color: "#00204a", textAlign: "center" }}
      >
        {typing ? (
          <Typewriter
            options={{
              strings: ["Hello, I am AKHIL GANDEPALLI"],
              autoStart: true,
              loop: true,
              delay: 100,
              pauseFor: 10000,
            }}
          />
        ) : (
          <span>Hello, I am AKHIL GANDEPALLI</span>
        )}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: "80%",
          margin: "30px 0",
          textIndent: "45px",
          textAlign: "justify",
        }}
      >
        I am a Front-End Developer with expertise in React.js and MUI,
        complemented by strong skills in MERN, SQL and Python. I previously worked as
        a Software Engineer at HCL Technologies and further enhanced my web
        development knowledge through multiple internships. With around one year
        of hands-on experience in front-end development, I am excited about the
        opportunity to contribute to your company and deliver impactful
        solutions. 
        <br />
        <br />
        Thank you for your time and consideration. I look forward to
        the opportunity to discuss how I can support your team.
      </Typography>
    </Box>
  );
};

export default Introduction;
