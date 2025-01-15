import { useState } from "react";
import TabLayout from "../../uicomponents/ProjectTabs/TabLayout";

import CollegeImage from "../../../assets/college.jpeg";
import SchoolImage from "../../../assets/school.jpeg";
import CertificateCard from "../../uicomponents/CertificateCard/CertificateCard";


import "./educationpage.css";

const EducationPage = () => {
  return (
    <div
      className={
        "w-full lg:w-4/5 lg:m-auto h-[calc(100vh_-_60px)] pt-6 overflow-hidden"
      }
    >
      
    </div>
  );
};

const EducationTab = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-xl shadow-xl mb-5 relative">
      <div className="flex-1 educationMain-sub-1 transition-transform origin-top hover:scale-[102%]">
        <img className="absolute w-full h-full blur-[1px]" src={SchoolImage} />
        <div className="relative z-10 p-4 flex flex-col bg-white/50 w-fit rounded-br-lg">
          <p className="font-extrabold text-xl">St. Pauls School</p>
          <p className="font-semibold text-indigo-500">Science</p>
          <p className="font-semibold text-indigo-500">2013 - 2015</p>
        </div>
      </div>
      <div className="flex-1 educationMain-sub-2 transition-transform origin-bottom hover:scale-[102%]">
        <img className="absolute w-full h-full blur-[1px]" src={CollegeImage} />
        <div className="absolute z-10 p-4 flex flex-col-reverse items-end right-0 bottom-0 bg-white/50 rounded-tl-xl">
          <p className="font-extrabold text-xl">ITER, S'O'A University</p>
          <p className="font-semibold text-indigo-500">
            Computer Science and Engineering
          </p>
          <p className="font-semibold text-indigo-500">2016 - 2020</p>
          <p className="font-semibold text-indigo-500">GPA: 8.28</p>
        </div>
      </div>
    </div>
  );
};

const EducationTabHorizontal = () => {
  return (
    <div className="w-full h-full flex flex-row overflow-hidden rounded-xl shadow-xl mb-5 relative">
      <div className="flex-1 educationMain-hori-sub-1 transition-transform origin-left hover:scale-[102%]">
        <img className="absolute w-full h-full blur-[1px]" src={SchoolImage} />
        <div className="relative z-10 p-4 flex flex-col bg-white/50 w-fit rounded-br-lg">
          <p className="font-extrabold text-xl">St. Pauls School</p>
          <p className="font-semibold text-indigo-500">Science</p>
          <p className="font-semibold text-indigo-500">2013 - 2015</p>
        </div>
      </div>
      <div className="flex-1 educationMain-hori-sub-2 transition-transform origin-right hover:scale-[102%]">
        <img className="absolute w-full h-full blur-[1px]" src={CollegeImage} />
        <div className="absolute z-10 p-4 flex flex-col-reverse items-end right-0 bottom-0 bg-white/50 rounded-tl-xl">
          <p className="font-extrabold text-xl">ITER, S'O'A University</p>
          <p className="font-semibold text-indigo-500">
            Computer Science and Engineering
          </p>
          <p className="font-semibold text-indigo-500">2016 - 2020</p>
          <p className="font-semibold text-indigo-500">GPA: 8.28</p>
        </div>
      </div>
    </div>
  );
};

const CertificationTab = ({ certificate }) => {
  return (
    <div className="w-full h-full overflow-y-auto ">
      <CertificateCard
        key={certificate.certificateName}
        certificateName={certificate.certificateName}
        instituteName={certificate.institution}
        duration={certificate.duration}
        coachName={certificate.coachName}
        certLink={certificate.certLink}
        courseLink={certificate.courseLink}
        skills={certificate.skills}
        date={certificate.date}
      />
    </div>
  );
};

export default EducationPage;
