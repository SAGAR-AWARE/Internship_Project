// import logo from './logo.svg';
import React, { useState, useEffect, createContext } from 'react';
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Slider from './pages/Slider';
// import CardCarousel from './pages/card/CardCarousel';
import ContactUs from "./pages/contact/ContactUs";
import NavigationBar from "./pages/navbar/NavigationBar";
import Service from "./pages/services/Service";
import About from "./pages/aboutus/About";
import HomePage from "./pages/home/HomePage";
import Ourcourses from "./pages/courses/Ourcourses";
import Allcourses from "./pages/courses/Allcourses";
import AllUpcoimgCourses from "./pages/courses/AllUpcomingCourses";
import CourseDetail from "./pages/courses/CourseDetail";
import PlacementPage from "./pages/placements/PlacementPage";
import Enrollment from "./pages/enrollment/Enrollment";
import BackToTop from "./pages/home/BackToTop";
import Footer from './pages/courses/Footer';


export const WebContext = createContext();

function App() {

  const [dataJson, setDataJson] = useState(null);

  const fetchJson = async () => {
    const res = await fetch('/db.json')
    const jsonRes = await res.json();
    console.log("anmol ", jsonRes)
    setDataJson(jsonRes);
  }

  useEffect(() => {
    fetchJson();
  }, []);

  const router = createBrowserRouter([

    { path: "/contact", element: <ContactUs /> },
    { path: "/footer", element: <Footer /> },
    { path: "/nav", element: <NavigationBar /> },
    { path: "/service", element: <Service /> },
    { path: "/about", element: <About /> },
    { path: "", element: <HomePage /> },
    { path: "", element: <HomePage /> },
    { path: "/courses", element: <Ourcourses /> },
    { path: "/allcourse", element: <Allcourses /> },
    { path: "/upcomingcourse", element: <AllUpcoimgCourses /> },
    { path: "/coursedetail/:id", element: <CourseDetail /> },
    { path: "/placement", element: <PlacementPage /> },
    { path: "/enrollment", element: <Enrollment /> },
    { path: '/backtotop', element: <BackToTop /> },
      ]);

  return (
    <WebContext.Provider value={dataJson}>
      <div className="App" data-testid="AppWrapper">
        <RouterProvider router={router} />
      </div>
    </WebContext.Provider>
  );
}

export default App;
