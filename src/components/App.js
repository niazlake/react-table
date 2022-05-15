import React, {useState, useEffect, useCallback} from 'react';
import api from '../lib/api';
import Container from '@material-ui/core/Container';
import {
    Paper,
    Box
} from "@material-ui/core";
import {TableList} from "./Table";

const BOX_STYLES = {p: 2};

export const App = () => {
    const [usersTableList, setUsersTableList] = useState({
        status: null,
        data: [],
    });
    const [projectsTableList, setProjectsTableList] = useState({
        status: null,
        data: []
    });


    const fetchUsersData = useCallback(async () => {
        setUsersTableList(value => ({...value, status: 'LOADING'}));

        try {
            const result = await api.getUsersDiff();
            setUsersTableList(value => ({...value, data: value.data.concat(result.data), status: 'SUCCESS'}));
        } catch (error) {
            setUsersTableList(value => ({...value, status: 'ERROR'}));
        }
    }, []);

    const fetchProjectsData = useCallback(async () => {
        setProjectsTableList(value => ({...value, status: 'LOADING'}));

        try {
            const result = await api.getProjectsDiff();
            setProjectsTableList(value => ({...value, data: value.data.concat(result.data), status: 'SUCCESS'}));
        } catch (error) {
            setProjectsTableList(value => ({...value, status: 'ERROR'}));
        }
    }, []);

    useEffect(() => {
        fetchUsersData();
        fetchProjectsData();
    }, []);

    return (
        <>
            <Box sx={BOX_STYLES}>
                <Container data-testid="userTable" component={Paper} fixed>
                    <TableList tableDataList={usersTableList.data} status={usersTableList.status}
                               fetchData={fetchUsersData}/>
                </Container>
            </Box>
            <Box sx={BOX_STYLES}>
                <Container data-testid="projectTable" component={Paper} fixed>
                    <TableList tableDataList={projectsTableList.data} status={projectsTableList.status}
                               fetchData={fetchProjectsData}/>
                </Container>
            </Box>

        </>
    );
};

export default App;
