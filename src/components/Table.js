import {Table, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import TableListBody from "./TableListBody";
import Status from "./Status";
import FetchDataButton from "./FetchButton";


export const NEWEST = 'asc';
export const OLDEST = 'desc';

const TABLE_STYLES = {minWidth: 650};
const BOX_STYLES = {
    'text-align': 'center',
    p: 2,
}

export const TableList = (props) => {
    const [sortType, setSortType] = useState(NEWEST);
    const {tableDataList, status, fetchData} = props;

    const toggleDateSort = () => {
        setSortType(sortType === NEWEST ? OLDEST : NEWEST);
    }

    return (
        <>
            <TableContainer data-testid="tableContainer">
                <Table sx={TABLE_STYLES} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell data-testid="clickSort" onClick={toggleDateSort}>Date ({sortType === NEWEST ? 'Newest': 'Oldest'})</TableCell>
                            <TableCell align="right">User ID</TableCell>
                            <TableCell align="right">Old Value</TableCell>
                            <TableCell align="right">New Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableListBody tableList={tableDataList} sort={sortType}/>
                </Table>
            </TableContainer>
            <Box sx={BOX_STYLES}>
                <Status status={status}/>
                <FetchDataButton fetchData={fetchData} status={status}/>
            </Box>
        </>
    )
}

export default TableList;