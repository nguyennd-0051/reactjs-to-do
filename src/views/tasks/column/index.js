import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Popover, Button } from 'antd';
import {PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import propsToJS from '../../../shared/prop-to-js';

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
    const { column } = props;

    return (
        <>
            <Collapse>
                <Panel
                    header={column.title}
                    key={column.id}
                    extra={renderExtra()}
                    className='tasks__column--panel'
                >
                    <p>asdad</p>
                </Panel>
            </Collapse>
        </>
    )
}

export default propsToJS(Column);