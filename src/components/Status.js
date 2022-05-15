import Box from "@material-ui/core/Box";
import {CircularProgress} from "@material-ui/core";
import React from "react";

const BOX_CIRCULAR_STYLES = {mt: 1};
const BOX_TEXT_STYLES = {mt: 1, mb: 1};

export const Status = (props) => {
    const {status} = props;
    if (status === 'LOADING') {
        return (
            <Box sx={BOX_CIRCULAR_STYLES}>
                <CircularProgress data-testid="progress" color="primary"/>
            </Box>
        )
    } else if (status === 'ERROR') {
        return (
            <Box sx={BOX_TEXT_STYLES}>
                <span color="error">We had problems fetching your data. Please try again.</span>
            </Box>
        )
    }
    return null
}

export default Status;
