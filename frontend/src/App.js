import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar } from "./components";
import {
  ECommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  ColorPicker,
  Editor,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import Protected from "./components/Protected";

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
                <Route path="/admin/ecommerce" element={<Protected><ECommerce /></Protected>} />
                <Route path="/admin" element={<Protected><ECommerce /></Protected>} />

                {/* Pages */}
                
                <Route path="/admin/employees" element={<Protected><Employees /></Protected>} />
                <Route path="/admin/products" element={<Protected><Employees /></Protected>} />
                <Route path="/admin/orders" element={<Protected><Orders /></Protected>} />
                <Route path="/admin/customers" element={<Protected><Customers /></Protected>} />
                <Route path="/admin/login" element={<Protected><Login /></Protected>} />
                <Route path="/admin/callback" element={<Protected><Callback /></Protected>} />

                {/* Apps */}
                <Route path="/admin/kanban" element={<Protected><Kanban /></Protected>} />
                <Route path="/admin/editor" element={<Protected><Editor /></Protected>} />
                <Route path="/admin/calendar" element={<Protected><Calendar /></Protected>} />
                <Route path="/admin/color-picker" element={<Protected><ColorPicker /></Protected>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
