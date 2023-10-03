// src/pages/dashboard.tsx
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/Rightbar';
import UserTable from '../components/UserTable';

function Dashboard() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-1/2 p-5">
        <UserTable />
      </div>
      <Rightbar />
    </div>
  );
}

export default Dashboard;
