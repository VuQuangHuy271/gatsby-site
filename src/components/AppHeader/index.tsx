import React from "react";
import { Dropdown, Image, MenuProps, Space, Typography } from "antd";
import { DownOutlined } from '@ant-design/icons';

export const AppHeader = () => {
  const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">Ho So</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Logout',
      key: '3',
    },
  ];
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DSW54utMSZ6J1F9luVr6YYDoRZ-FQYCL3w&usqp=CAU"
      ></Image>
      <Typography.Title>Dashboard</Typography.Title>
      <div>
      <div className="info" style={{paddingRight: 30}}>
      <Space >
      <Image
          width={40}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DSW54utMSZ6J1F9luVr6YYDoRZ-FQYCL3w&usqp=CAU"
        ></Image>
          <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Vu Huy
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Space>
        
      </div>
      </div>
    </div>
  );
}
