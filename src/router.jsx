
import{
    createBrowserRouter,
    Route,
    createRoutesFromElements,
}from "react-router-dom"
import DashboardMainLayout from "./components/layouts/dashboard/DashboardMainLayout"
import Dashboard from "./pages/dashboard/Dashboard"
import DashboardUiElements from "./pages/dashboard/DashboardUiElements"
import DashboardTables from "./pages/dashboard/DashboardTables"
import DashboardForms from "./pages/dashboard/DashboardForms"


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout/>}>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="dashboard/Ui" element={<DashboardUiElements/>}/>
            <Route path="dashboard/Tables" element={<DashboardTables/>}/>
            <Route path="dashboard/Forms" element={<DashboardForms/>}/>
        </Route>
    )
)