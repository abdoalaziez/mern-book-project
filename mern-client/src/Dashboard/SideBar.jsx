import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";


import profile from "../assets/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";

const SideBar = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="Flowbite logo" 
      className="w-16 h-16 rounded"
      >
        <p>
          {
            user?.displayName || "Demo User"
          }
        </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/Dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/Dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/Dashboard/manage" icon={HiInbox}>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
           Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiSupport}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar

