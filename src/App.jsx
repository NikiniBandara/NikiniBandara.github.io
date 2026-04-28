import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function Home() {
  return (
    <Layout title="Home">
      <p>
        Hardworking undergraduate with a motivated attitude and strong technical + creative skills.
      </p>
    </Layout>
  );
}

function Projects() {
  return (
    <Layout title="Software Projects">
      <p>Java systems, React apps, database projects, and academic work.</p>
    </Layout>
  );
}

function Extra() {
  return (
    <Layout title="Extra Curricular">
      <p>LEO Club activities, NASA Space Apps Challenge, leadership roles.</p>
    </Layout>
  );
}

function Photography() {
  return (
    <Layout title="Photography">
      <p>Nature, buildings, animals, and creative photography collections.</p>
    </Layout>
  );
}

function Graphics() {
  return (
    <Layout title="Graphics">
      <p>Posters, flyers, branding, and UI design work.</p>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/graphics" element={<Graphics />} />
      </Routes>
    </BrowserRouter>
  );
}