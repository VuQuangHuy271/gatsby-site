import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Row, Select, Space, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';


export default function ProductComponent() {
  interface DataType {
    id: number;
    description: string;
    name: string;
    fund: string;
    accountType: string;
    tenor: number[];
    rate: number[];
    interestRateDescription: string[];
    rolloverModes: string[];
    repaymentFrequencies: string[];
    repaymentModes: string[];
  }

  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  type FieldType = {
    name: string;
    description: string;
    fund: string;
    dateEnd: Date;
    dateStart: Date;
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    setOpen(true);
  };

  const onFundChange = (value: string) => {
    form.setFieldsValue({ fund: { value } });
  };

  const handleClick = (id: number) => {
    setOpen(true)
    if (id !== 0) {
      const value = data.find(x => x.id === id)
      form.setFieldsValue({ name: value?.description, description: value?.description, fund: value?.fund.fullName });
    }
  };

  const Submit = async () => {
    console.log('Success:', form.getFieldsValue());

    form.resetFields();
    setOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Fund',
      dataIndex: 'fund',
      key: 'fund',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Account Type',
      dataIndex: 'accountType',
      key: 'accountType',
    },
    {
      title: "Interest Rate",
      key: 'interestRate',
      children: [
        {
          title: 'Tenor',
          dataIndex: 'tenor',
          key: 'tenor',
          render: (items: number[]) => (
            <>
              {items.map((item) => (
                <p color="blue" key={item}>
                  {item}
                </p>
              ))}
            </>
          )
        },
        {
          title: 'Rate',
          dataIndex: 'rate',
          key: 'rate',
          render: (items: number[]) => (
            <>
              {items.map((item) => (
                <p color="blue" key={item}>
                  {item}
                </p>
              ))}
            </>
          )
        },
        {
          title: 'Description',
          dataIndex: 'interestRateDescription',
          key: 'interestRateDescription',
          render: (items: string[]) => (
            <>
              {items.map((item) => (
                <p color="blue" key={item}>
                  {item}
                </p>
              ))}
            </>
          )
        },
      ]
    },
    {
      title: 'RolloverModes',
      dataIndex: 'rolloverModes',
      key: 'rolloverModes',
      render: (items: string[]) => (
        <>
          {items.map((item) => (
            <p color="blue" key={item}>
              {item}
            </p>
          ))}
        </>
      )
    },
    {
      title: 'RepaymentFrequencies',
      dataIndex: 'repaymentFrequencies',
      key: 'repaymentFrequencies',
      width: '10%',
      render: (items: string[]) => (
        <>
          {items.map((item) => (
            <p color="blue" key={item}>
              {item}
            </p>
          ))}
        </>
      )
    },
    {
      title: 'RepaymentModes',
      dataIndex: 'repaymentModes',
      key: 'repaymentModes',
      width: '10%',
      render: (items: string[]) => (
        <>
          {items.map((item) => (
            <p color="blue" key={item}>
              {item}
            </p>
          ))}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleClick(record.id)} style={{ border: 'none' }}>
            Edit
          </Button>
          <Button onClick={() => showDeleteConfirm(record.id)} type="dashed" style={{ color: 'red', border: 'none' }}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      description: "Savings Plan 1",
      fund: {
        fullName: "Fund 1 Full Name"
      },
      accountType: {
        id: 1,
        description: "Savings account (Tai khoan tiet kiem)"
      },
      interestRates: [
        {
          id: 1,
          tenor: 0,
          rate: 0.1,
          description: "Demand (Khong ky han)"
        },
        {
          id: 2,
          tenor: 14,
          rate: 0.3,
          description: "14 days"
        },
        {
          id: 3,
          tenor: 30,
          rate: 3.3,
          description: "1 month"
        },
        {
          id: 4,
          tenor: 180,
          rate: 5,
          description: "6 months"
        },
        {
          id: 5,
          tenor: 365,
          rate: 6.3,
          description: "1 year"
        }
      ],
      repaymentFrequencies: [
        {
          id: 1,
          description: "At maturity"
        },
        {
          id: 2,
          description: "Quarterly"
        },
        {
          id: 3,
          description: "Yearly"
        }
      ],
      repaymentModes: [
        {
          id: 1,
          description: "Added to the balance of this account"
        },
        {
          id: 2,
          description: "Paid into your main account"
        }
      ],
      rolloverModes: [
        {
          id: 1,
          description: "Do not roll over"
        },
        {
          id: 2,
          description: "The principal is to be rolled over with interest into a new deposit (Xoay vong so tien goc va lai)"
        }
      ]
    },
    {
      id: 2,
      description: "Savings Plan 2",
      fund: {
        fullName: "Fund 2 Full Name"
      },
      accountType: {
        id: 1,
        description: "Savings account (Tai khoan tiet kiem)"
      },
      interestRates: [
        {
          id: 6,
          tenor: 30,
          rate: 4.3,
          description: "1 month"
        }
      ],
      repaymentFrequencies: [
        {
          id: 4,
          description: "Monthly"
        },
      ],
      repaymentModes: [
        {
          id: 4,
          description: "Added to the balance of this account"
        },
        {
          id: 5,
          description: "Paid into your main account"
        }
      ],
      rolloverModes: [
        {
          id: 5,
          description: "Only the principal is to be rolled over into a new deposit (Xoay vong so tien goc)"
        }
      ]
    },
    {
      id: 3,
      description: "Savings Plan 2",
      fund: {
        fullName: "Fund 2 Full Name"
      },
      accountType: {
        id: 1,
        description: "Savings account (Tai khoan tiet kiem)"
      },
      interestRates: [
        {
          id: 7,
          tenor: 365,
          rate: 6.9,
          description: "1 year"
        }
      ],
      repaymentFrequencies: [
        {
          id: 5,
          description: "Monthly"
        },
        {
          id: 6,
          description: "Yearly"
        }
      ],
      repaymentModes: [
        {
          id: 3,
          description: "Paid into your main account"
        }
      ],
      rolloverModes: [
        {
          id: 3,
          description: "Only the principal is to be rolled over into a new deposit (Xoay vong so tien goc)"
        },
        {
          id: 4,
          description: "Do not roll over"
        }
      ]
    }
  ];

  return (
    <Space size={5} direction="vertical" style={{ width: '98%', height: '90%' }}>
      <Typography.Title level={3}>Products</Typography.Title>
      <button onClick={() => handleClick(0)} style={{ float: 'right' }}>Add</button>
      <Modal
        title="Add Product"
        open={open}
        style={
          {
            minWidth: 1024,
            width: '100%'
          }
        }
        onCancel={handleCancel}
        footer={null}
      >

        <Form
          name="add"
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}
          style={{  }}
          onFinish={Submit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row>
            <Form.Item<FieldType>
              label="Name"
              name="name"
              style={{width: '50%'}}
              rules={[
                {
                  required: true, message: 'Please input your name!'
                },
                {
                  min: 6, message: 'Please input your name > 6'
                },
                {
                  max: 8, message: 'Please input your name < 8'
                },

              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="description"
              name="description"
              style={{width: '50%'}}
              rules={[
                {
                  required: true, message: 'Please input your description!'
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: 'Description can only include letters and numbers.',
                },
              ]}
            >
              <Input style={{width: 300}}/>
            </Form.Item>
          </Row>
          <Row>
          <Form.Item name="fund" label="Fund" style={{width: '50%'}} rules={[{ required: true }]}>
            <Select
              placeholder="Select Fund"
              onChange={onFundChange}
              allowClear
            >
              {
                data.map(x => (<Select.Option value={x.fund.fullName}>{x.fund.fullName}</Select.Option>))
              }
            </Select>
          </Form.Item>
          </Row>

          
          <Row>
            <Form.Item<FieldType> name="dateStart" label="Date Start" style={{width: '50%'}}>
              <DatePicker
                placeholder="Select Date Start"
                onChange={(date) =>  form.setFieldsValue({ dataStart: date })}
                name="dateStart"
                format="YYYY-MM-DD"
              />
            </Form.Item>
            <Form.Item<FieldType> name="dateEnd" label="Date end" style={{width: '50%'}}>
              <DatePicker
                placeholder="Select Date end"
                onChange={(date) =>  form.setFieldsValue({ dataStart: date })}
                name="dateEnd"
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Row>
          <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

      </Modal>
      <Table
        columns={columns}
        dataSource={
          data.map((item) => {
            return (
              {
                id: item.id,
                description: item.description,
                name: item.description,
                fund: item.fund.fullName,
                accountType: item.accountType.description,
                tenor: item.interestRates.map(x => x.tenor),
                rate: item.interestRates.map(x => x.rate),
                interestRateDescription: item.interestRates.map(x => x.description),
                rolloverModes: item.rolloverModes.map(x => x.description),
                repaymentFrequencies: item.repaymentFrequencies.map(x => x.description),
                repaymentModes: item.repaymentModes.map(x => x.description)
              }
            )
          })
        }
        rowKey={"id"}
      />
    </Space>
  )
}

function showDeleteConfirm(id: number) {
  const { confirm } = Modal;
  confirm({
    title: 'Are you sure delete this product?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log(id);
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}
