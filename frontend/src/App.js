import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  ECommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Line,
  Editor,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000S" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/admin/ecommerce" element={<ECommerce />} />
              <Route path="/admin" element={<ECommerce />} />

              {/* Pages */}
              <Route path="/admin/employees" element={<Employees />} />
              <Route path="/admin/orders" element={<Orders />} />
              <Route path="/admin/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/admin/kanban" element={<Kanban />} />
              <Route path="/admin/editor" element={<Editor />} />
              <Route path="/admin/calendar" element={<Calendar />} />
              <Route path="/admin/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/admin/area" element={<Area />} />
              <Route path="/admin/line" element={<Line />} />
              <Route path="/admin/bar" element={<Bar />} />
              <Route path="/admin/pie" element={<Pie />} />
              <Route path="/admin/financial" element={<Financial />} />
              <Route path="/admin/color-mapping" element={<ColorMapping />} />
              <Route path="/admin/pyramid" element={<Pyramid />} />
              <Route path="/admin/stacked" element={<Stacked />} />
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
