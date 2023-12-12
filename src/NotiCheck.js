import React from "react";
import { TextField, Switch, FormControlLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
// import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Alert from "@mui/material/Alert";
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from "@mui/material/Paper";
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';


function JsonValidator() {
  const [jsonInput, setJsonInput] = useState("");
  const [filters, setFilters] = useState({
    acceptNonQuotedNames: false,
    acceptNANValues: false,
    acceptSingleQuotes: false,
    acceptLeadingZeros: false,
  });
  const [validationResult, setValidationResult] = useState({
    isValid: false,
  });
  const [open, setOpen] = useState(false);
  const [selectedEncoding, setSelectedEncoding] = useState("UTF-8");
  const [severityChange, setSeverityChange] = useState("success");
  const [notifications, setNotifications] = useState([]);
const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);

  
  
  function NotificationDropdown() {
    return (
      <div>
        <p>Notification 1</p>
        <p>Notification 2</p>
        <p>Notification 3</p>
      </div>
    )
  }
  






  const EncodingChange = (event) => {
    setSelectedEncoding(event.target.value);
  };




  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const message = () => {
    return validationResult.isValid ? "Valid JSON" : "Not a valid Json";
  };

  const jsonInputChange = (event) => {
    setJsonInput(event.target.value);
  };

  const switchChange = (name) => {
    setFilters({
      ...filters,
      [name]: !filters[name],
    });
  };

  const chooseFile = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileText = await file.text();
      setJsonInput(fileText);
    }
  };

  const validateJson = () => {
    try {
      let json = jsonInput;
      if (filters.acceptNonQuotedNames) {
        json = json.replace(/([{,]\s*)(\w+)(:)/g, '$1"$2"$3');
      }
      if (filters.acceptNANValues) {
        json = json.replace(/NaN/g, "null");
      }
      if (filters.acceptSingleQuotes) {
        json = json.replace(/'/g, '"');
      }
      if (filters.acceptLeadingZeros) {
        json = json.replace(/\b0+(\d+)\b/g, "$1");
      }
      JSON.parse(json);
      setValidationResult({ isValid: true });
      setOpen(true);
      setSeverityChange("success");
    } catch (error) {
      setValidationResult({ isValid: false });
      setOpen(true);
      setSeverityChange("error");
    }
  };

  const encodingOptions = [
    "ISO-8859-1 (Latin Alphabet No.1)",
    "ISO-8859-2 (Latin Alphabet No.2)",
    "ISO-8859-3 (Latin Alphabet No.3)",
    "ISO-8859-4 (Latin Alphabet No.4)",
    "ISO-8859-5 (Latin/Cyrillic Alphabet)",
    "ISO-8859-6 (Latin/Arabic Alphabet)",
    "ISO-8859-7 (Latin/Greek Alphabet)",
    "ISO-8859-8 (Latin/Hebrew Alphabet)",
    "ISO-8859-9 (Latin Alphabet No.5)",
    "ISO-8859-13 (Latin Alphabet No.7)",
    "ISO-8859-15 (Latin Alphabet No.9)",
    "UTF-8",
    "UTF-16",
    "UTF-16(Big-Endian)",
    "UTF-16(Little-Endian)",
    "UTF-32(Little-Endian)",
    "UTF-32",
    "UTF-32(Big-Endian)",
    "UTF-32(Little-Endian)",
    "US-ASCII",
    "windows-1250(Windows Eastern European)",
    "windows-1251 (Windows Cyrillic)",
    "windows-1252 (Windows Latin-1)",
    "windows-1253 (Windows Greek)",
    "windows-1254 (Windows Turkish)",
    "windows-1255 (Windows Hebrew)",
    "windows-1256 (Windows Arabic)",
    "windows-1257 (Windows Baltic)",
    "windows-1256 (Windows Vietnamese)",
  ];

  return (
    

    <Grid sx={{ paddingLeft: "250px", paddingRight: "30px" }}>
      
      <Box sx={{ textAlign: "center", fontSize: "50px" }}>Json Validator</Box>
      
      {/* {validationResult.isValid ? (
        <Box sx={{ color: "green", fontSize: "20px" }}>Valid JSON</Box>
      ) : (
        <Box sx={{ color: "red", fontSize: "20px" }}>Not a valid Json</Box>
      )} */}

      <Box className="copyPaste" sx={{ textAlign: "left", marginTop: "30px" }}>
        <p>Option 1: Copy-Paste Your JSON here</p>
        <TextField
          label="Copy - paste your JSON here"
          variant="outlined"
          value={jsonInput}
          multiline
          style={{ width: "100%" }}
          onChange={jsonInputChange}
        ></TextField>
      </Box>

      <Box sx={{ display: "flex", marginTop: "30px" }}>
        <Box sx={{ textAlign: "left", marginTop: "10px" }}>
          <Typography variant="body1">
            Option 2: Or upload your JSON file
          </Typography>
          <Box>
            <Input
              type="file"
              inputProps={{ accept: ".json" }}
              onChange={chooseFile}
            />
          </Box>
        </Box>
        <Box sx={{ marginLeft: "200px", marginTop: "10px" }}>
          <Typography variant="body1">File encoding</Typography>
          <FormControl sx={{ width: "100px", height: "50px" }}>
            {/* <InputLabel>File encoding</InputLabel> */}
            <Select
              value={selectedEncoding}
              onChange={EncodingChange}
              sx={{ width: "150px", height: "40px" }}
            >
              {encodingOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridGap: 2,
          gridTemplateColumns: "300px 300px",
          marginTop: "30px",
        }}
      >
        <Grid container>
          <Grid item>
            <FormControlLabel
              control={
                <Switch
                  checked={filters.acceptNonQuotedNames}
                  onChange={() => switchChange("acceptNonQuotedNames")}
                />
              }
              label="Accept non-quoted names"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Switch
                  checked={filters.acceptNANValues}
                  onChange={() => switchChange("acceptNANValues")}
                />
              }
              label="Accept NAN value"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <FormControlLabel
              control={
                <Switch
                  checked={filters.acceptSingleQuotes}
                  onChange={() => switchChange("acceptSingleQuotes")}
                />
              }
              label="Accept single-quotes"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Switch
                  checked={filters.acceptLeadingZeros}
                  onChange={() => switchChange("acceptLeadingZeros")}
                />
              }
              label="Accept leading zeroes"
            />
          </Grid>
        </Grid>
      </Box>
      
      <Button
        variant="contained"
        onClick={validateJson}
        sx={{ marginTop: "30px" }}
      >
        Validate Json
      </Button>




      <Box
  sx={{
    position: "absolute",
    top: "70px",
    right: "40px",
    zIndex: 2,
  }}
>
  <IconButton
    id="notification-icon"
    size="large"
    aria-label="show notifications"
    color="inherit"
    onClick={() => setOpen(!open)}  // Toggle the Snackbar directly
  >
    <NotificationsIcon />
  </IconButton>
  <Snackbar
    anchorOrigin={{
      vertical: "top",       // Adjusted to appear at the top
      horizontal: "right",
    }}
    open={open}
    onClose={handleClose}
    autoHideDuration={6000}
    anchorReference="anchorEl"   // Specify that the anchor is an element
    anchorEl={document.getElementById("notification-icon")}
  >
    <Alert onClose={handleClose} severity={severityChange} sx={{ width: "100%" }}>
      {message()}
    </Alert>
  </Snackbar>
</Box>









      {/* <Box
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
          // style={{ backgroundColor: "green" }}
        >
          <NotificationsIcon />
        </IconButton>
        <Popper
  open={notificationMenuOpen}
  anchorEl={document.getElementById("notification-icon")}
  placement="bottom-end"
  transition
>
  {({ TransitionProps }) => (
    <Fade {...TransitionProps} timeout={350}>
      <Paper>
        <ClickAwayListener onClickAway={() => setNotificationMenuOpen(false)}>
          <NotificationDropdown />
        </ClickAwayListener>
      </Paper>
    </Fade>
  )}
</Popper>
      </Box> */}
      



      {/* <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        <Alert
          onClose={handleClose}
          severity={severityChange}
          sx={{ width: "100%" }}
        >
          {message()}
        </Alert> */}
        {/* <SnackbarContent
          message={message()}
          sx={{
            backgroundColor: validationResult.isValid ? "green" : "red",
          }}
        /> */}
     {/* </Snackbar> */}
      
    </Grid>
  );
}

export default JsonValidator;
