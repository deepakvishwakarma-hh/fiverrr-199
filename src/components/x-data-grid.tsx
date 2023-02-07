import axios from 'axios';
import Loading from './Loading';
import { Box } from '@mui/material'
import SelectComponent from './select';
import Paper from '@mui/material/Paper';
import { useQuery } from 'react-query'
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import TableContainer from '@mui/material/TableContainer';
// date formet convertor
function convertToYYMMDD(date: Date) {
  const K = new Date(date)
  var year = K.toLocaleString("default", { year: "numeric" });
  var month = K.toLocaleString("default", { month: "2-digit" });
  var day = K.toLocaleString("default", { day: "2-digit" });
  return `${year}${month}${day}`
}

const XDataGrid = () => {
  const [symbol, setSymbol] = useState<string>('')
  const [start, setStart] = useState<Date>(new Date) // for current data
  const [end, setEnd] = useState<Date>(new Date) // for current data



  const FetchList = async () => {
    const {
      data: { data },
    } = await axios.get(`http://159.89.228.210:6541/v1/equity-price`, {
      params: {
        symbol,
        start: convertToYYMMDD(start), //20221001,
        end: convertToYYMMDD(end) // 20221130
      },
    });
    return data;
  };


  const symbols = useQuery('symbols', () =>
    fetch('http://159.89.228.210:6541/v1/equity-symbols').then(res =>
      res.json()
    )
  )
  const posts = useQuery(["posts", symbol, start, end], FetchList);


  if (symbols.status !== 'success') {
    return <Loading />
  }

  return (
    <>

      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <DesktopDatePicker
          value={start}
          label="Start"
          inputFormat="YYYY-MM-DD"
          onChange={(newValue) => { setStart(newValue as Date) }}
          renderInput={(params) => <TextField {...params} />} />

        {<SelectComponent {...{ symbol, setSymbol, symbols }} />}

        <DesktopDatePicker
          label="End"
          value={end}
          inputFormat="YYYY-MM-DD"
          onChange={(newValue) => { setEnd(newValue as Date) }}
          renderInput={(params) => <TextField {...params} />} />
      </Box>

      <Box>
        <TableContainer component={Paper} sx={{ marginY: 5 }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="table">
            <TableHead>
              <TableRow sx={{ background: "black", }}>
                <TableCell align='right'><Typography variant='h6' color={'white'}>Date</Typography></TableCell>
                <TableCell align="right"><Typography variant='h6' color={'white'}>Open</Typography></TableCell>
                <TableCell align="right"><Typography variant='h6' color={'white'}>High</Typography></TableCell>
                <TableCell align="right"><Typography variant='h6' color={'white'}>Low</Typography></TableCell>
                <TableCell align="right"><Typography variant='h6' color={'white'}>Close</Typography></TableCell>
                <TableCell align="right"><Typography variant='h6' color={'white'}>Volume</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.data && posts.data.map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">{row.Date}</TableCell>
                  <TableCell align="right">{row.Open}</TableCell>
                  <TableCell align="right">{row.High}</TableCell>
                  <TableCell align="right">{row.Low}</TableCell>
                  <TableCell align="right">{row.Close}</TableCell>
                  <TableCell align="right">{row.Volume}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {posts.status == 'loading' && <Loading />}
        </TableContainer>
      </Box>
    </>
  )
}

export default XDataGrid