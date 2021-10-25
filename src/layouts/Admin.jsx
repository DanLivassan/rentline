import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./sb-admin-2.min.css";
import "./custom.css";
import "./fontawesome-free/css/all.css";
const AdminLayout = (props) => {
  const createNavLinks = (routes) => {
    return routes?.map((route, key) => {
      return (
        <li className="nav-item" key={key}>
          <Link className="nav-link" to={route.layout + route.path}>
            <i className={route.icon}></i>
            <span>{route.name}</span>
          </Link>
        </li>
      );
    });
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div id="wrapper">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-phone"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            RENTLINE <sup>1</sup>
          </div>
        </a>
        <hr className="sidebar-divider my-0"></hr>
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <hr className="sidebar-divider"></hr>
        <div className="sidebar-heading">Gerencia</div>
        {createNavLinks(props.routes)}
      </ul>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Switch>{getRoutes(props.routes)}</Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
