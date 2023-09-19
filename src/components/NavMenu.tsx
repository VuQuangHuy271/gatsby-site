import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu, Row } from 'antd';
import { navigate } from "gatsby";
import Sider from 'antd/es/layout/Sider';
import Layout from './Layout';
type MenuItem = Required<MenuProps>['items'][number];


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <AppstoreOutlined />),
  getItem('Fund', '2', <ShopOutlined />),
  getItem('Product', '3', <ShoppingCartOutlined />),

  getItem('Account', 'sub1', <UserOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('User', 'sub2', <UserOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

export const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="NavMenu">
      {/* <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ textAlign: 'center', width: 60 }}> */}
      <Sider  collapsed={collapsed} style={{ textAlign: 'center', width: 60 }}>
        <div style={{ width: '100%' }}>
          <div className="demo-logo-vertical" />
          <Menu
            style={{ paddingRight: 10, border: 0 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            onClick={(item) => {
              //item.key
              navigate(item.key);
            }}
            items={[
              {
                label: "Dashboard",
                icon: <AppstoreOutlined />,
                key: "/",
              },
              {
                label: "Fund",
                key: "/fund",
                icon: <ShopOutlined />,
              },
              {
                label: "Product",
                key: "/product",
                icon: <ShoppingCartOutlined />,
              },
              {
                label: "Account",
                key: "/account",
                icon: <UserOutlined />,
              },
              {
                label: "User",
                key: "/user",
                icon: <UserOutlined />,
              },
              {
                label: "Test",
                key: "/product",
                icon: <ShoppingCartOutlined />,
                children: [
                  {
                    label: "Option 1",
                    key: "/product",
                    icon: <ShoppingCartOutlined />,
                  },
                  {
                    label: "Option 2",
                    key: "/",
                    icon: <ShoppingCartOutlined />,
                  }
                ]
              },
            ]}
          />
          <div style={{ position: 'fixed', zIndex: 0, bottom: 0, left: 0, padding: 10 }}>
            <Button onClick={toggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </div>
        </div>
      </Sider>

    </div>
  );
}

