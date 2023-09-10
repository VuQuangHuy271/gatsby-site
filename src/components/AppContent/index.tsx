import React from "react";
import { AppRoutes } from "../AppRoutes";
import { Outlet} from "react-router-dom";

export const AppContent = () => {
  return (
    <div className="main-content" style={{width: '100%', height: '100%'}}>
      <AppRoutes/>
    </div>
  );
}


