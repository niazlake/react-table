import {TableBody, TableCell, TableRow} from "@material-ui/core";
import React, {useMemo} from "react";
import {NEWEST} from "./Table";

const getFormattedDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'}).format(new Date(date))
}


const TABLE_ROW_STYLES = {'&:last-child td, &:last-child th': {border: 0}};

export const TableListBody = (props) => {
    const {tableList, sort} = props;

    const SortList = (list, type) => useMemo(() => (
        type === NEWEST ? list.sort((a, b) => b.timestamp - a.timestamp) : list.sort((a, b) => a.timestamp - b.timestamp)
    ), [list, type])

    const list = SortList(tableList, sort);

    return (
        <TableBody>
            {list.map((row) => (
                <TableRow
                    key={row.id}
                    sx={TABLE_ROW_STYLES}
                >
                    <TableCell component="th" scope="row">
                        {getFormattedDate(row.timestamp)}
                    </TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.diff[0].oldValue}</TableCell>
                    <TableCell align="right">{row.diff[0].newValue}</TableCell>
                </TableRow>
            ))}
        </TableBody>)
}

export default TableListBody;