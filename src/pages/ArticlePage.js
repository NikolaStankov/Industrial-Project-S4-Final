import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import MediaDialog from "../components/MediaDialog";

const ArticlePage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <MovieIcon color="primary" />
      </IconButton>
      <MediaDialog open={open} onClose={handleClose} />
    </>
  );
};

export default ArticlePage;
