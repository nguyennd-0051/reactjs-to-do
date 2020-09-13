import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../redux/modules/authenticate';
import propsToJS from '../../shared/prop-to-js';
import './login.scss';

const Login = (props) => {
    const { handleLogin } = props;

    const onFinish = values => {
        handleLogin(values);
    };

    return (
        <>
            <div className='login'>
                <div className='login__box'>
                    <Form
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type: 'email',
                                    message: 'Please use valid email address'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = null;

const mapDispatchToProps = {
    handleLogin: login
}

export default connect(mapStateToProps, mapDispatchToProps)(propsToJS(Login));
