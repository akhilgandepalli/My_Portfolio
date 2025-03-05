import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

const ProjectCard = ({ projects }) => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
        gap: 2,
        marginTop: "20px",
        padding: 2,
        border: "1px solid",
        borderRadius: 3,
        bgcolor: "#D9EAFD",
      }}
    >
      {projects.map((project, i) => (
        <Card
          key={i}
          sx={{
            maxWidth: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // alignItems: "flex-st",
          }}
          elevation={5}
        >
          <CardMedia
            key={"image" + i}
            component="img"
            alt={project.title}
            height="160"
            image={project.image}
          />
          <CardContent key={"cardcontent" + i}>
            <Typography
              key={"projecttitle" + i}
              gutterBottom
              variant="h6"
              component="div"
            >
              {project.title}
            </Typography>
            <Typography
              key={"projectdesc" + i}
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {project.desc}
            </Typography>
          </CardContent>
          <CardActions
            key={"cardactions" + i}
            sx={{ padding: "0 20px 20px 18px" }}
          >
            <Link
              key={"github" + i}
              color="primary"
              href={project.gitHub}
              underline="hover"
              target="_blank"
              sx={{ marginRight: 2 }}
            >
              GitHub
            </Link>
            <Link
              key={"livelink" + i}
              color="secondary"
              href={project.liveLink}
              underline="hover"
              target="_blank"
            >
              Live Link
            </Link>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ProjectCard;
