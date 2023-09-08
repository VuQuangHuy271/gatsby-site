import { Button, Form, Input, Select } from 'antd';
import React, { useState } from 'react'

export const AddProduct = () => {
    const [form] = Form.useForm();

    type FieldType = {
        name?: string;
        description?: string;
        fund?: string;
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onFundChange = (value: string) => {
        switch (value) {
            case 'fund1':
                form.setFieldsValue({ note: 'fund1' });
                break;
            case 'fund2':
                form.setFieldsValue({ note: 'fund2' });
                break;
            case 'other':
                form.setFieldsValue({ note: 'fund3' });
                break;
            default:
        }
    };

    return (
        <Form
            name="add"
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 10 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item name="fund" label="Fund" rules={[{ required: true }]}>
                <Select
                    placeholder="Select Fund"
                    onChange={onFundChange}
                    allowClear
                >
                    <Select.Option value="fund1">Fund 1</Select.Option>
                    <Select.Option value="fund2">Fund 2</Select.Option>
                    <Select.Option value="other">Other</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.fund !== currentValues.fund}
            >
                {({ getFieldValue }) =>
                    getFieldValue('fund') === 'other' ? (
                        <Form.Item name="otherFund" label="Customize Fund" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>

            <Form.Item<FieldType>
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input your description!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}


