import React from 'react'
import { Box } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
const Loading = () => {
    return (<Box sx={{ width: '100%', height: '300px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
        <CircularProgress />
    </Box>)
}

export default Loading