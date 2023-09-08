import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import AccountComponent from "../../pages/account";
import ProductComponent from "../../pages/product";



export const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <ProductComponent /> ,
        children: [
        { path: "account", element: <AccountComponent /> },
        { path: "product", element: <ProductComponent /> },
    ]},
    ]);
    return routes;
};

// export const AppRoutes = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<Account />}></Route>
//             <Route path="/account" element={<Account />}></Route>
//             <Route path="/product" element={<Product />}></Route>
//         </Routes>
        
//     );
// }
