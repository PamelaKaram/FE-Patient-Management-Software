import {Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';





const pres = () => {
    return (
        <main>
        <Button
            sx={{
                backgroundColor: "green",
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
            }}
        >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Pick a Date
        </Button>
       
    </main>


    );
};

export default pres;

