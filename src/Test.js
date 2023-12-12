import React from "react";
import { TextField, Switch, FormControlLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import SnackbarContent from '@mui/material/SnackbarContent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function JsonValMain() {
  const [jsonInput, setJsonInput] = useState("");
  const [filters, setFilters] = useState({
    acceptNonQuotedNames: false,
    acceptNANValues: false,
    acceptSingleQuotes: false,
    acceptLeadingZeros: false,
  });
  const [outError, setOutError] = useState ('');
  const [validationResult, setValidationResult] = useState({
    isValid: false});

//file encoding
const [selectedEncoding, setSelectedEncoding] = useState("UTF-8");

const handleEncodingChange = (event) => {
  setSelectedEncoding(event.target.value);
 };
 
 const chooseFile = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      setJsonInput(event.target.result);
    };
    reader.readAsText(file, selectedEncoding);
  }
 };
 

  // const [open, setOpen] = useState(false);
  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpen(false);
  //  };

  const jsonInputChange = (event) => {
    setJsonInput(event.target.value);
  }

  const switchChange = (name) => {
    setFilters({
      ...filters,
      [name]: !filters[name],
    });
  };

  // const chooseFile = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const fileText = await file.text();
  //     setJsonInput(fileText);

  //   console.log(fileText + "filechk");

  //     // validateJson(fileText);
  //   }
  // };



  const validateJson = () => {
    try {
      let json = jsonInput;
      if (filters.acceptNonQuotedNames) {
        json = json.replace(/([{,]\s*)(\w+)(:)/g, '$1"$2"$3');
      }
      if (filters.acceptNANValues) {
        json = json.replace(/NaN/g, 'null');
      }
      if (filters.acceptSingleQuotes) {
        json = json.replace(/'/g, '"');
      }
      if (filters.acceptLeadingZeros) {
        json = json.replace(/\b0+(\d+)\b/g, '$1');
      }
      JSON.parse(json);
      setValidationResult({ isValid: true });
      notifySuccess()

      // setOpen(true);

    } catch (error) {
      // setOpen(true);
      notifyError()


      setOutError(String(error.message));
      console.log(error + "errrrrrrror")

      // setValidationResult({ isValid: false });
      if (error instanceof SyntaxError) {
        setValidationResult({ isValid: false });
      } else {
        throw error;
      }

    }

  };
//   const message = () => {
//  return validationResult.isValid 
//    ? "Valid JSON"       
//    : `Not a valid Json: ${outError}`;
// }

const encodingOptions = [
  'UTF-8',
  'UTF-16',
  'UTF-16(Big-Edition)',
  'UTF-32(Little-Endian)',
  'UTF-32(Big-Endian)',
  'UTF-32(Little-Endian)',
  'US-ASCII',
  'windows-1250(Windows Eastern European)',
  'windows-1251 (Windows Cyrillic)',
  'windows-1252 (Windows Latin-1)',
  'windows-1253 (Windows Greek)',
  'windows-1254 (Windows Turkish)',
  'windows-1255 (Windows Hebrew)',
  'windows-1256 (Windows Arabic)',
  'windows-1257 (Windows Baltic)',
  'windows-1256 (Windows Vietnamese)',
 ];
 
 const notifySuccess = () => toast.success('Valid JSON', {
position: "bottom-right",
autoClose: 6000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
const notifyError = () =>toast.error('Not a valid JSON', {
  position: "bottom-right",
  autoClose: 6000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });
  
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', fontSize: '50px' }}>Json Validator</Box>

      <br></br>

      <Box sx={{marginTop: "30px"}}>
        <p sx={{textAlign: "left"}}>Option 1: Copy-Paste Your JSON here</p>
        <TextField
          label="Copy - paste your JSON here"
          variant="outlined"
          value={jsonInput}
          multiline
          style={{ width: "100%" }}
          onChange={jsonInputChange}
        ></TextField>
      </Box>

      <Box sx={{ display: 'flex', marginTop: "30px"}}>
        <Box>
          <Typography variant="body1">Option 2: Or upload your JSON file</Typography>
          <Box>
            <Input
              type="file"
              accept=".json"
              onChange={chooseFile}
            />
          </Box>
        </Box>
        <Box sx={{ marginLeft: '200px' }}>
          <Typography variant="body1">File encoding</Typography>

          <FormControl sx={{ width: "100px", height: "50px" }}>
      {/* <InputLabel>File encoding</InputLabel> */}
      <Select value={selectedEncoding} onChange={handleEncodingChange} sx={{width: "150px", height: "40px"}}>
        {encodingOptions.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>



          {/* <FormControl sx={{ width: '100px', height: '50px' }}>
            <InputLabel>File encoding</InputLabel>
            <Select value='UTF-8'>
              <MenuItem value="UTF-8">UTF-8</MenuItem>
              <MenuItem value="UTF-16">UTF-16</MenuItem>
              <MenuItem value="UTF-16(Big-Edition)">UTF-16(Big-Edition)</MenuItem>
            </Select>
          </FormControl> */}
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridGap: 2, gridTemplateColumns: '300px 300px', }}>
        <Grid container>
          <Grid item>
            <FormControlLabel
              control={<Switch checked={filters.acceptNonQuotedNames} onChange={() => switchChange('acceptNonQuotedNames')} />}
              label="Accept non-quoted names"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch checked={filters.acceptNANValues} onChange={() => switchChange('acceptNANValues')} />}
              label="Accept NAN value"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <FormControlLabel
              control={<Switch checked={filters.acceptSingleQuotes} onChange={() => switchChange('acceptSingleQuotes')} />}
              label="Accept single-quotes"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch checked={filters.acceptLeadingZeros} onChange={() => switchChange('acceptLeadingZeros')} />}
              label="Accept leading zeroes"
            />
          </Grid>
        </Grid>
      </Box>

      <Button variant="contained" onClick={validateJson}>
        Validate Json
      </Button>
      <ToastContainer
position="bottom-right"
autoClose={6000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>


<div>
        <button onClick={notifySuccess}>Notify!</button>
        
      </div>



      {/* <Snackbar
 anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
 open={open}
 onClose={handleClose}
 autoHideDuration={6000}
>
 <SnackbarContent
   message={message()}
   style={{
     backgroundColor: validationResult.isValid ? 'green' : 'red',
   }}
 />
</Snackbar> */}




    </Container>
  );
}

export default JsonValMain;
