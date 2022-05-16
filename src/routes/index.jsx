import { Route, Routes } from "react-router-dom";
import Layout from "@/layouts/layout";
import Index from "@/pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
