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
          <span className="block md:hidden">
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
            className={`border-2 border-indigo-500 md:hidden rounded-full ${
              currentTab === 0 ? "hidden" : "block"
            } p-1 transition-transform hover:scale-105 active:scale-95`}
          >
            <NextIcon color="rgb(99 102 241)" />
          </span>
        </span>
        <div className="block md:hidden w-full h-full mb-4">
          {currentTab === 0 ? (
            <EducationTab />
          ) : (
            <CertificationTab
              certificate={CertificationList[certificateIndex]}
            />
          )}
        </div>
        <div className="hidden md:flex flex-col w-full gap-3 h-full mb-4 rounded-lg">
          <div className="w-full flex-1">
            <EducationTabHorizontal />
          </div>
          <div className="w-full flex-1 flex flex-col gap-5 bg-white shadow-xl rounded-xl p-4">
            <p className="text-3xl font-bold">Certifications</p>
            <div className="grid grid-rows-1 grid-flow-col gap-7 overflow-x-auto scroll-smooth pb-2">
              {CertificationList.map(
                (
                  {
                    certificateName,
                    certLink,
                    courseLink,
                    institution,
                    date,
                    duration,
                    coachName,
                  },
                  index
                ) => {
                  return (
                    <CertificateCard
                      key={index}
                      certificateName={certificateName}
                      certLink={certLink}
                      courseLink={courseLink}
                      instituteName={institution}
                      duration={duration}
                      date={date}
                      index={index}
                      coachName={coachName}
                      certificateIndex={certificateIndex}
                      setCertificateIndex={setCertificateIndex}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
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
