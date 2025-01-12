import { useState } from "react";
import TabLayout from "../../uicomponents/ProjectTabs/TabLayout";

import CollegeImage from "../../../assets/college.jpeg";
import SchoolImage from "../../../assets/school.jpeg";
import CertificateCard from "../../uicomponents/CertificateCard/CertificateCard";
import { CertificationList } from "../../../data/PersonalData";

import { MdNavigateNext as NextIcon } from "react-icons/md";

import "./educationpage.css";

const EducationPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [certificateIndex, setCertificateIndex] = useState(0);
  return (
    <div
      className={
        "w-full lg:w-4/5 lg:m-auto h-[calc(100vh_-_60px)] pt-6 overflow-hidden"
      }
    >
      <div className="w-full h-full px-4 flex flex-col gap-2 lg:pb-4">
        <span className="flex flex-row justify-between items-center">
          <span className="block lg:hidden">
            <TabLayout
              tabList={["Education", "Certifications"]}
              currentTopic={currentTab}
              handleClick={(index) => setCurrentTab(index)}
            />
          </span>
          <span
            title="Next Certification"
            onPointerUp={() =>
              setCertificateIndex(
                (certificateIndex + 1) % CertificationList.length
              )
            }
            className={`border-2 border-indigo-500 lg:hidden rounded-full ${
              currentTab === 0 ? "hidden" : "block"
            } p-1 transition-transform hover:scale-105 active:scale-95`}
          >
            <NextIcon color="rgb(99 102 241)" />
          </span>
        </span>
        {currentTab === 0 ? (
          <EducationTab />
        ) : (
          <CertificationTab certificate={CertificationList[certificateIndex]} />
        )}
      </div>
    </div>
  );
};

const EducationTab = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-xl shadow-xl mb-5 relative">
      <div className="flex-1 educationMain-sub-1 transition-transform hover:scale-[101%]">
        <img className="absolute w-full h-full blur-[2px]" src={SchoolImage} />
        <div className="relative z-10 p-4 flex flex-col">
          <p className="font-extrabold text-xl">St. Pauls School</p>
          <p className="font-semibold text-indigo-500">Science</p>
          <p className="font-semibold text-indigo-500">2013 - 2015</p>
        </div>
      </div>
      <div className="flex-1 educationMain-sub-2 transition-transform hover:scale-[101%]">
        <img className="absolute w-full h-full blur-[2px]" src={CollegeImage} />
        <div className="relative z-10 p-4 h-full flex flex-col-reverse items-end">
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
