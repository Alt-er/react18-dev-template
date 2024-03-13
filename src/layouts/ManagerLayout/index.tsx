import { Outlet } from 'react-router-dom';

export default function ManagerLayout() {
    return (
        <div>
            <div>header</div>
            <div>
                <div>left</div>
                <Outlet />
            </div>
        </div>
    );
}
