import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import propsToJS from '../../shared/prop-to-js';
import { getTasksState, fetchTasks } from '../../redux/modules/tasks';
import Column from './column';
import './tasks.scss';

const fakeDataTasks = [
    { id: 1, title: 'task 1', content: 'task 1' },
    { id: 2, title: 'task 2', content: 'task 2' },
    { id: 3, title: 'task 3', content: 'task 3' },
    { id: 4, title: 'task 4', content: 'task 4' },
    { id: 5, title: 'task 5', content: 'task 5' }
]

const columns = [
    { id: 1, title: 'Back log' },
    { id: 2, title: 'To do' },
]

const Tasks = (props) => {
    const { handleFetchTasks } = props;

    useEffect(() => {
        handleFetchTasks();
    }, []);

    const onDragEnd = (result) => {

    }

    return (
        <>
            <div className='tasks'>
                {
                    columns.map((item) => (
                        <Column key={item.id} column={item} className='tasks__column' />
                    ))
                }
            </div>
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