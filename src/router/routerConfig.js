import BlankLayout from "@/layouts/BlankLayout";
import Home from "@/pages/Home";
import React from "react";
import { Navigate } from "react-router-dom";

// const MyCase = React.lazy(() => import("@/pages/Manager/MyCase"));
// const MyComs = React.lazy(() => import("@/pages/Manager/MyComs"));
// const MyData = React.lazy(() => import("@/pages/Manager/MyData"));
// const MyProject = React.lazy(() => import("@/pages/Manager/MyProject"));
// 异步加载会导致nav导航动画失效 暂时这样写
// import MyCase from "@/pages/Manager/MyCase";
// import MyComs from "@/pages/Manager/MyComs";
// import MyData from "@/pages/Manager/MyData";
// import MyProject from "@/pages/Manager/MyProject";

// import RouterTestComp1 from "@/pages/RouterTestComp1";
// import RouterTestHome from "@/pages/RouterTestHome";

// 异步加载组件，避免首页加载过慢
// const Manager = React.lazy(() => import("@/pages/Manager"));
// const ManagerLayout = React.lazy(() => import("@/layouts/ManagerLayout"));

// const DataSource = React.lazy(() => import("@/pages/Manager/MyData/DataSetManager/DataSource"));
// const CreateScreen = React.lazy(() => import("@/pages/Manager/MyProject/CreateScreen"));
// const Workspace = React.lazy(() => import("@/pages/Manager/Workspace"));
// const UserContent = React.lazy(() => import("@/pages/Manager/UserContent"));
// const Designer = React.lazy(() => import("@/pages/Designer"));
// const RendererWarpper = React.lazy(() => import("@/pages/RendererWarpper"));
// const ShareWarpper = React.lazy(() => import("@/pages/ShareWarpper"));
// const BlankLayout = React.lazy(() => import("@/layouts/BlankLayout"));
const NoFoundPage = React.lazy(() => import("@/pages/404"));

// 平级路由 只需要 path 和 element

// 嵌套路由 需要多一个children属性 , 并且父组件中必须渲染  <Outlet /> ,此时父节点的element相当于子节点的容器，可以实现布局

// api
// useParams 获取url参数
// const navigate = useNavigate(); 调整url 传参 navigate("/dd" , {replace:true,state:1})
// let location = useLocation(); 获取url 和参数 const {state} =location

export default [
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/home", // 主页
        element: <BlankLayout />,
        children: [
            { index: true, element: <Home /> },
            // { path: "/home/project", element: <MyProject /> },
        ],
    },
    // {
    //     path: "/manager", // 后台主页
    //     element: <ManagerLayout />,
    //     children: [
    //         { index: true, element: <MyProject /> },
    //         // { path: "/manager/project/:id", element: <MyProject /> },
    //         { path: "/manager/project", element: <MyProject /> },
    //         { path: "/manager/data", element: <MyData /> },
    //         { path: "/manager/com", element: <MyComs /> },
    //         { path: "/manager/case", element: <MyCase /> },
    //         // { path: "/manager/new/dataSource", element: <DataSource /> },
    //     ],
    // },
    // {
    //     path: "/manager/userContent", // 创建大屏页面,不需要后台主页的头
    //     element: <BlankLayout />,
    //     children: [{ index: true, element: <UserContent /> }],
    // },
    // {
    //     path: "/manager/workspace", // 创建大屏页面,不需要后台主页的头
    //     element: <BlankLayout />,
    //     children: [{ index: true, element: <Workspace /> }],
    // },
    // {
    //     path: "/manager/createScreen/:type", // 创建大屏页面,不需要后台主页的头
    //     element: <BlankLayout />,
    //     children: [{ index: true, element: <CreateScreen /> }],
    // },
    // {
    //     path: "/manager/new/dataSource", // 创建大屏页面,不需要后台主页的头
    //     element: <BlankLayout />,
    //     children: [
    //         { index: true, element: <DataSource /> },
    //         { path: "/manager/new/dataSource/:id", element: <DataSource /> },
    //     ],
    // },
    // {
    //     path: "/designer",
    //     element: <BlankLayout />,
    //     children: [
    //         { path: "/designer/:id", element: <Designer /> },
    //         { index: true, element: <NoFoundPage /> },
    //         // { index: true, element: <Designer /> },
    //         // {
    //         //     path: "/comp1",
    //         //     element: <RouterTestComp1 />,
    //         //     // children: [
    //         //     //     { index: true, element: <CoursesIndex /> },
    //         //     //     { path: "/courses/:id", element: <Course /> },
    //         //     // ],
    //         // },
    //         // { path: "*", element: <NoMatch /> },
    //     ],
    // },
    // {
    //     path: "/screen",
    //     element: <BlankLayout />,
    //     children: [
    //         { path: "/screen/:id", element: <RendererWarpper /> },
    //         // {
    //         //     path: "/comp1",
    //         //     element: <RouterTestComp1 />,
    //         //     // children: [
    //         //     //     { index: true, element: <CoursesIndex /> },
    //         //     //     { path: "/courses/:id", element: <Course /> },
    //         //     // ],
    //         // },
    //         { index: true, element: <NoFoundPage /> },
    //     ],
    // },
    // {
    //     path: "/share",
    //     element: <BlankLayout />,
    //     children: [
    //         { path: "/share/:code", element: <ShareWarpper /> },
    //         { index: true, element: <NoFoundPage /> },
    //     ],
    // },
    { path: "404", element: <NoFoundPage /> },
    { path: "*", element: <NoFoundPage /> },
];
