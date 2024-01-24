import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className='flex bg-[#fafafa] w-screen'>
      <Sidebar />
      <div className='metrics-container '>
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
