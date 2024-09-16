import React from "react";
import { HeadSection } from "./HeadSection";
import OpportunitySection from "./OpportunitySection";
import Details from "./Details";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Course } from "./Course";
const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col ">
      <Navbar/>
      <HeadSection />
      <Course/>
       <Details />
     <OpportunitySection />
      <Footer />
    </div>
  );
};
export default Home;
