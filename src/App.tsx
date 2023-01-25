import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeForm from "./pages/resume-form/resume-form";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ResumeForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
