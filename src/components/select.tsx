import React from 'react'
import 'react-virtualized/styles.css';
import List from 'react-virtualized/dist/commonjs/List';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

interface props {
    symbols: any,
    symbol: string,
    setSymbol: React.Dispatch<React.SetStateAction<string>>
}

const SelectComponent: React.FC<props> = ({ symbol, symbols, setSymbol }) => {
    const list = symbols.data.data.Symbol
    const rowRenderer = ({ key, index, style }: { key: string; index: number; style: object }) => {
        const value = list[index]
        return (
            <MenuItem onClick={(data: any) => { setSymbol(data.target.innerText) }} key={key} value={value} style={style}>
                {value}
            </MenuItem>
        )

    }

    return (
        <FormControl sx={{ width: '200px' }} >
            <InputLabel id="symbol-select-label">Symbol</InputLabel>
            <Select
                id="symbol"
                value={symbol}
                label="symbol"
                defaultValue={"INYT"}
                placeholder="Symbols"
                labelId="symbol-select-label"
                renderValue={(value) => (value ? list.find((option: string) => option === value) : '')}
            >

                <List
                    width={300}
                    height={200}
                    rowHeight={40}
                    rowCount={list.length}
                    rowRenderer={rowRenderer} />

            </Select>
        </FormControl>
    )
}
export default SelectComponent




