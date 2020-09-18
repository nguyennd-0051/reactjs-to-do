import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import propsToJS from '../../shared/prop-to-js';
import { getTasksState, fetchTasks } from '../../redux/modules/tasks';
import Column from './column';
import './tasks.scss';

const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favorte show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' }
    },
    columns: [
        {
            id: 'column-1',
            title: 'Back Log',
            taskIds: ['task-1', 'task-2']
        },
        {
            id: 'column-2',
            title: 'To do',
            taskIds: ['task-3', 'task-4']
        }
    ]
};

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
                <DragDropContext
                    onDragEnd={() => onDragEnd}
                >
                    {initialData.columns.map((column) => {
                        const tasks = column.taskIds.map(taskId => initialData.tasks[taskId]);
                        return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
                </DragDropContext>
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