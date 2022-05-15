import Button from "@material-ui/core/Button";
import React from "react";

export const FetchDataButton = (props) => {
    const {fetchData, status} = props;
    return (status !== 'LOADING' &&
        <Button data-testid="fetchButton" variant="contained" color="primary" onClick={fetchData}>
            {status === 'ERROR' ? 'Retry' : 'Load more'}
        </Button>)
}
export default FetchDataButton;