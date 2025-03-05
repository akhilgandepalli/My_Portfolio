import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectsData";

const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid gray",
        marginTop: "30px",
        padding: "20px",
        borderRadius: 2,
        bgcolor: "#F8FAFC",
      }}
    >
      <Typography variant="h5" sx={{ color: "#00204a", fontWeight: 600, paddingBottom:'10px' }}>
        My Projects
      </Typography>
      <Box sx={{ width: "100%", marginBottom: "24px" }}>
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          React JS:
        </Typography>
        <ProjectCard projects={projects["React"]} />
      </Box>
      <Box sx={{ width: "100%", marginBottom: "24px" }}>
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          Vanila JavaScript:
        </Typography>
        <ProjectCard projects={projects["Vanila JavaScript"]} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          UI Practice:
        </Typography>
        <ProjectCard projects={projects["UI Practice"]} />
      </Box>
    </Box>
  );
};

export default Projects;
