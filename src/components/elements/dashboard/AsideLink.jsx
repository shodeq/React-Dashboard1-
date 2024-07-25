/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AsideLink({href, children}) {
    const location = useLocation();
    const isActive = location.pathname === href;
    return(
        <Link 
        to={href}
        className={`flex items-center px-6 py-2 mt-4 text-gray-100 bg-opacity-25" ${isActive ? 'bg-gray-700' : 'bg-gray-900"'}`}>
            {children}
                        </Link>
    );
}