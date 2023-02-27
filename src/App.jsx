import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Detail } from '@/pages';
import { Spinner } from "@/components";

function App() {

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
