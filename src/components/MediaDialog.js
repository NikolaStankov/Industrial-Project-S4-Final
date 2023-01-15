import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

import InstagramLogo from "../images/instagram_logo.png";
import FacebookLogo from "../images/facebook_logo.png";
import TwitterLogo from "../images/twitter_logo.png";
import TVLogo from "../images/tv_logo.jpg";

const MediaDialog = (props) => {
  return (
    <Dialog
      onClose={props.onClose}
      open={props.open}
      sx={{ padding: "10px", borderRadius: "40px" }}
    >
      <DialogTitle
        sx={{ background: "blue", color: "white", paddingInline: "40px", paddingBlock: "10px" }}
      >
        Compatible for:
      </DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem
          disableGutters
          sx={{ marginTop: "6px", paddingInline: "12px" }}
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                background: "transparent",
                width: 36,
                height: 36,
                marginInline: "4px",
              }}
            >
              <img
                src={InstagramLogo}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Instagram" />
        </ListItem>
        <ListItem
          disableGutters
          sx={{ marginTop: "6px", paddingInline: "12px" }}
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                background: "transparent",
                width: 36,
                height: 36,
                marginInline: "4px",
              }}
            >
              <img
                src={FacebookLogo}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Facebook" />
        </ListItem>
        <ListItem
          disableGutters
          sx={{ marginTop: "6px", paddingInline: "12px" }}
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                background: "transparent",
                width: 36,
                height: 36,
                marginInline: "4px",
              }}
            >
              <img
                src={TwitterLogo}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Twitter" />
        </ListItem>
        <ListItem
          disableGutters
          sx={{ marginTop: "6px", paddingInline: "12px" }}
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                background: "transparent",
                width: 36,
                height: 36,
                marginInline: "4px",
              }}
            >
              <img
                src={TVLogo}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="TV Boradcast" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default MediaDialog;
