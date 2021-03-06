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
import Products from './pages/Products';
import EditProduct from "./pages/EditProduct";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
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
                <Route path="/ecommerce" element={<Protected><ECommerce /></Protected>} />
                <Route path="/" element={<Protected><ECommerce /></Protected>} />

                {/* Pages */}
                
                <Route path="/employees" element={<Protected><Employees /></Protected>} />
                <Route path="/products" element={<Protected><Products /></Protected>} />
                <Route path="/edit-product/:id" element={<Protected><EditProduct /></Protected>} />
                <Route path="/orders" element={<Protected><Orders /></Protected>} />
                <Route path="/customers" element={<Protected><Customers /></Protected>} />
                <Route path="/login" element={<Protected><Login /></Protected>} />
                <Route path="/callback" element={<Protected><Callback /></Protected>} />

                {/* Apps */}
                <Route path="/kanban" element={<Protected><Kanban /></Protected>} />
                <Route path="/editor" element={<Protected><Editor /></Protected>} />
                <Route path="/calendar" element={<Protected><Calendar /></Protected>} />
                <Route path="/color-picker" element={<Protected><ColorPicker /></Protected>} />
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
