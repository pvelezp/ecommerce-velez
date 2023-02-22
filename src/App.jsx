import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Detail, Home } from '@/pages';

function App() {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
