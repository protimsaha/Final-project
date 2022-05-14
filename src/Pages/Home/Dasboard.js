import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dasboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h1 className='text-4xl font-bold text-center text-gray-600'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Dashboard</Link></li>
                    <li><Link to='/dashboard/myreview'>My Reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dasboard;