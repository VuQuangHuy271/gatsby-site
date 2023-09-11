import React, { useState } from "react";
import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { redirect } from "react-router-dom";
import { navigate } from "gatsby";

export const NavMenu = () => {
    return (
        <div className="NavMenu">
            <Menu
                className="SideMenuVertical"
                mode="vertical"
                onClick={(item) => {
                    //item.key
                    redirect(item.key);
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
                ]}
            ></Menu>
        </div>
    );
}

