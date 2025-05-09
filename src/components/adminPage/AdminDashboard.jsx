import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FaUserCircle,
  FaUsers,
  FaCalendarCheck,
  FaSignOutAlt,
  FaThLarge,
  FaBars,
  FaTimes,
  FaBox,
  FaWarehouse,
  FaShip,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [data, setData] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(sampleData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(sampleData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const colors = [
    "#3B82F6",
    "#22C55E",
    "#A855F7",
    "#EF4444",
    "#F97316",
    "#10B981",
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border-t-2 border-b-2 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex bg-gray-100 h-screen text-black">
      {/* Mobile Header */}
      <div className="md:hidden top-0 right-0 left-0 z-10 fixed flex justify-end bg-white shadow-md p-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="focus:outline-none text-gray-700"
        >
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-md p-5 flex flex-col justify-between z-20 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:right-0 md:translate-x-0 md:w-1/4`}
      >
        <div className="overflow-y-auto">
          <h2 className="flex items-center mb-6 p-4 font-bold text-lg">
            <FaUserCircle className="mr-3 text-blue-500 text-4xl" /> Admin
          </h2>
          <nav className="space-y-2">
            <Link
              to="/AdminDashboard"
              className="flex items-center space-x-2 bg-gray-200 p-2 rounded-md font-semibold"
              onClick={() => setSidebarOpen(false)}
            >
              <FaThLarge size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/admin/customers"
              className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md text-gray-700"
              onClick={() => setSidebarOpen(false)}
            >
              <FaUsers size={20} />
              <span>Customers</span>
            </Link>
            <Link
              to="/admin/store"
              className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md text-gray-700"
              onClick={() => setSidebarOpen(false)}
            >
              <FaWarehouse size={20} />
              <span>Store</span>
            </Link>
            <Link
              to="/admin/shipments"
              className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md text-gray-700"
              onClick={() => setSidebarOpen(false)}
            >
              <FaShip size={20} />
              <span>Shipments</span>
            </Link>
          </nav>
        </div>
        <Link
          to="/"
          className="flex items-center space-x-2 hover:bg-red-50 p-2 rounded-md text-red-500"
          onClick={() => setSidebarOpen(false)}
        >
          <FaSignOutAlt size={20} />
          <span>Log out</span>
        </Link>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="md:hidden z-10 fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 mt-16 md:mt-0 md:ml-0 p-6 overflow-y-auto">
        {/* Stats Cards with White Background */}
        <div className="gap-4 grid grid-cols-1 md:grid-cols-4">
          <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
            <FaUsers size={32} className="mr-4 text-blue-500" />
            <div>
              <p className="text-gray-500 text-sm">Total Customers</p>
              <p className="font-bold text-2xl">{data.totalCustomers || 0}</p>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
            <FaBox size={32} className="mr-4 text-green-500" />
            <div>
              <p className="text-gray-500 text-sm">Total Products</p>
              <p className="font-bold text-2xl">{data.totalProducts || 0}</p>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
            <FaShip size={32} className="mr-4 text-purple-500" />
            <div>
              <p className="text-gray-500 text-sm">Total Shipments</p>
              <p className="font-bold text-2xl">{data.totalShipments || 0}</p>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
            <FaWarehouse size={32} className="mr-4 text-red-500" />
            <div>
              <p className="text-gray-500 text-sm">Inventory Items</p>
              <p className="font-bold text-2xl">{data.totalInventory || 0}</p>
            </div>
          </div>
        </div>

        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-6">
          {/* Pie Chart - Product Distribution */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="mb-2 font-bold text-lg">Product Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.productStats}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data.productStats?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, props) => [
                    value,
                    `${name}: ${((props.payload.percent || 0) * 100).toFixed(
                      1
                    )}%`,
                  ]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart - Shipment Status */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="mb-2 font-bold text-lg">Shipment Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.shipmentStatus}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="value"
                  name="Count"
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Shipments List */}
        <div className="bg-white shadow-md mt-6 p-4 rounded-lg">
          <h3 className="mb-4 font-bold text-lg">Recent Shipments</h3>
          <div className="overflow-x-auto">
            <table className="border w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 border text-left">Tracking ID</th>
                  <th className="p-3 border text-left">Destination</th>
                  <th className="p-3 border text-left">Items</th>
                  <th className="p-3 border text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.shipments?.map((shipment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 border">{shipment.trackingId}</td>
                    <td className="p-3 border">{shipment.destination}</td>
                    <td className="p-3 border">{shipment.items}</td>
                    <td className="p-3 border">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          index % 3 === 0
                            ? "bg-green-100 text-green-800"
                            : index % 3 === 1
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {index % 3 === 0
                          ? "Delivered"
                          : index % 3 === 1
                          ? "In Transit"
                          : "Processing"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sample data for the dashboard
const sampleData = {
  totalCustomers: 245,
  totalProducts: 187,
  totalShipments: 56,
  totalInventory: 342,
  productStats: [
    { name: "Agricultural", value: 35 },
    { name: "Machinery", value: 25 },
    { name: "Automotive", value: 20 },
    { name: "Construction", value: 15 },
    { name: "Other", value: 5 },
  ],
  shipmentStatus: [
    { name: "Processing", value: 12 },
    { name: "In Transit", value: 8 },
    { name: "Delivered", value: 5 },
    { name: "Pending", value: 3 },
  ],
  shipments: [
    {
      trackingId: "ALK-2023-001",
      destination: "Djibouti",
      items: "Agricultural Equipment",
    },
    {
      trackingId: "ALK-2023-002",
      destination: "Kenya",
      items: "Construction Materials",
    },
    {
      trackingId: "ALK-2023-003",
      destination: "South Africa",
      items: "Automotive Parts",
    },
    {
      trackingId: "ALK-2023-004",
      destination: "Nigeria",
      items: "Agricultural Products",
    },
    {
      trackingId: "ALK-2023-005",
      destination: "Egypt",
      items: "Industrial Machinery",
    },
  ],
};

export default AdminDashboard;
