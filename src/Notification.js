import React from "react";
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from "@mui/material/Paper";
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import Divider from "@mui/material/Divider";
import Skeleton from '@mui/material/Skeleton';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

// check
// check2
// check 3
// finall check
function Notification() {

    const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [notificationData, setNotificationData] = useState([{
      NotificationId: 1,
      Message: "New message ",
      Time: "08:00",
    },
    {
      NotificationId: 2,
      Message: "Meeting reminder",
      Time: "09:30",
    },
    {
      NotificationId: 3,
      Message: "Check Message",
      Time: "12:45",
    },
    {
      NotificationId: 4,
      Message: "Order Success",
      Time: "14:20",
    },
    {
      NotificationId: 5,
      Message: "Package delivered",
      Time: "16:00",
    },
    {
      NotificationId: 6,
      Message: "Friend request accepted",
      Time: "18:10",
    },
    {
      NotificationId: 7,
      Message: "Low battery",
      Time: "19:30",
    },
    {
      NotificationId: 8,
      Message: "System update available",
      Time: "21:00",
    },
    {
      NotificationId: 9,
      Message: "New message from whatsapp",
      Time: "22:15",
    },
    {
      NotificationId: 10,
      Message: "You have 1 missed call",
      Time: "23:45",
    },
    {
      NotificationId: 1,
      Message: "New message ",
      Time: "08:00",
    },
    {
      NotificationId: 2,
      Message: "Meeting reminder",
      Time: "09:30",
    },
    {
      NotificationId: 3,
      Message: "Check Message",
      Time: "12:45",
    },
    {
      NotificationId: 4,
      Message: "Order Success",
      Time: "14:20",
    },
    {
      NotificationId: 5,
      Message: "Package delivered",
      Time: "16:00",
    },
    {
      NotificationId: 6,
      Message: "Friend request accepted",
      Time: "18:10",
    },
    {
      NotificationId: 7,
      Message: "Low battery",
      Time: "19:30",
    },
    {
      NotificationId: 8,
      Message: "System update available",
      Time: "21:00",
    },
    {
      NotificationId: 9,
      Message: "New message from whatsapp",
      Time: "22:15",
    },
    {
      NotificationId: 10,
      Message: "You have 1 missed call",
      Time: "23:45",
    },
    ]);

    const [profileData, setProfileData] = useState([{
        "ProfileId": 1,
        "Name": "Name1",
        "EmailId": "abc@xyz.com"

    }])

    const NotificationDropdown = () => {
        return (
          <Box sx={{ maxHeight: '400px', overflow: 'auto' }}>
          {notificationData.map((notification, index) => (
            <Box key={notification.NotificationId}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2">{notification.Message}</Typography>
                <IconButton onClick={() => closeNotification(index)} sx={{ marginLeft: 'auto'}}>
                  <CloseIcon sx={{ width: '20px', height : '20px' }} />
                </IconButton>
              </Box>
              <Typography variant="body2">{notification.Time}</Typography>
              <Divider sx={{ margin: '8px 0', borderColor: '#555' }} />
            </Box>
            
          ))}<Button>Load more</Button>
        </Box>
        )
      }
    
      const ProfileDropdown = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px' }}>
      {profileData.map((profile, index) => (
        <Box key={profile.ProfileId} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar alt="Profile Picture" src="" sx={{ marginBottom: '10px' }} />
          <Typography variant="h4" sx={{ marginBottom: '7px' }}>{profile.Name}</Typography>
          <Typography variant="body2">{profile.EmailId}</Typography>
        </Box>
      ))}
    </Box>
  );
}

    
      const closeNotification = (index) => {
        const updatedNotifications = notificationData.filter(
          (notification, i) => i !== index
        );
        setNotificationData(updatedNotifications);
      };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "70px",
        right: "40px",
        zIndex: 1,
      }}
    >
      <IconButton
        id="notification-icon"
        size="large"
        aria-label="show notifications"
        color="inherit"
        onClick={() => setNotificationMenuOpen(!notificationMenuOpen)}
      >
        <NotificationsIcon />
      </IconButton>

      <IconButton
        id="profile-icon"
        size="large"
        aria-label="show profile"
        color="inherit"
        onClick={() => setProfileMenuOpen(!profileMenuOpen)}
        sx={{ marginLeft: "20px" }}
      >
        <AccountCircleIcon />
      </IconButton>

      <Popper
        sx={{ borderRadius: "20px" }}
        open={notificationMenuOpen}
        anchorEl={document.getElementById("notification-icon")}
        placement="bottom-end"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ borderRadius: "10px", padding: "10px" }}>
              <ClickAwayListener
                onClickAway={() => setNotificationMenuOpen(false)}
              >
                <NotificationDropdown />
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Popper
        sx={{ borderRadius: "20px" }}
        open={profileMenuOpen}
        anchorEl={document.getElementById("profile-icon")}
        placement="bottom-end"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ borderRadius: "10px", padding: "10px" }}>
              <ClickAwayListener onClickAway={() => setProfileMenuOpen(false)}>
                <ProfileDropdown />
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}

export default Notification;
