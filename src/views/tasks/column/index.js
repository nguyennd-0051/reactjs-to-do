import React from 'react';
import { Collapse, Button } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Droppable } from 'react-beautiful-dnd';
import propsToJS from '../../../shared/prop-to-js';
import Task from './task';

const { Panel } = Collapse;

const renderExtra = () => (
    <>
        <Button>
            <PlusOutlined onClick={event => {
                event.stopPropagation()
            }} />
        </Button>
        <Button>
            <EditOutlined onClick={event => {
                event.stopPropagation()
            }} />
        </Button>
        <Button>
            <DeleteOutlined onClick={event => {
                event.stopPropagation()
            }} />
        </Button>
    </>
)
const Column = props => {
    console.log(props);
    const { column, tasks } = props;

    return (
        <>
            <Collapse>
                <Panel
                    header={column.title}
                    key={column.id}
                    extra={renderExtra()}
                    className='tasks__column--panel'
                >
                    <Droppable
                        droppableId={column.id}
                    >
                        {provided => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {
                                    tasks.map((task, index) => (
                                        <Task key={task.id} task={task} index={index} />
                                    ))
                                }
                            </div>
                        )}
                    </Droppable>
                </Panel>
            </Collapse>
        </>
    )
}

export default propsToJS(Column);