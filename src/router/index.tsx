import { PageFour } from "@/pages/page-four";
import { PageThree } from "@/pages/page-three";
import { Route, Routes } from "react-router-dom";
import { PageOne } from "../pages/page-one";
import { PageTwo } from "../pages/page-two";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/two" element={<PageTwo />} />
      <Route path="/three" element={<PageThree />} />
      <Route path="/four" element={<PageFour />} />
    </Routes>
  );
}
