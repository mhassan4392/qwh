import { Route, Routes } from "react-router-dom";
import HomeLayout from "@/layouts/home";
import Index from "@/pages";
import Mine from "@/pages/mine";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Index />} />
        <Route path="/mine" element={<Mine />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
