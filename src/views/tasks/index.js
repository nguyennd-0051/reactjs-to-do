import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import propsToJS from '../../shared/prop-to-js';
import {getTasksState, fetchTasks} from '../../redux/modules/tasks';

const Tasks = (props) => {
    const {handleFetchTasks} = props;

    useEffect(() => {
        handleFetchTasks();
    }, []);

    return (
        <>
            <p>This is tasks list</p>
        </>
    )
};

const mapStateToProps = (state) => {
    const tasks = getTasksState(state);

    return {
        tasks
    }
};

const mapDispatchToProps = {
    handleFetchTasks: fetchTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(propsToJS(Tasks));