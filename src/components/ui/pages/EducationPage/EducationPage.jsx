import { useState } from "react";
import TabLayout from "../../uicomponents/ProjectTabs/TabLayout";

import CollegeImage from "../../../assets/college.jpeg";
import SchoolImage from "../../../assets/school.jpeg";
import CertificateCard from "../../uicomponents/CertificateCard/CertificateCard";

import { MdNavigateNext as NextIcon } from "react-icons/md";

const EducationPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <div className={"w-full h-[calc(100vh_-_80px)] pt-6 overflow-hidden"}>
      <div className="w-full h-full px-4 flex flex-col gap-2">
        <span className="flex flex-row justify-between items-center">
          <TabLayout
            tabList={["Education", "Certifications"]}
            currentTopic={currentTab}
            handleClick={(index) => setCurrentTab(index)}
          />
          <span
            title="Next Certification"
            className="border-2 border-indigo-500 lg:hidden rounded-full p-1 transition-transform hover:scale-105 active:scale-95"
          >
            <NextIcon color="rgb(99 102 241)" />
          </span>
        </span>
        {currentTab === 0 ? <EducationTab /> : <CertificationTab />}
      </div>
    </div>
  );
};

const EducationTab = () => {
  return (
    <div className="w-full h-full flex flex-col pt-4 gap-3 overflow-y-auto"></div>
  );
};

const CertificationTab = ({ certificateList = [] }) => {
  return (
    <div className="w-full h-full overflow-y-auto ">
      <CertificateCard />
    </div>
  );
};

export default EducationPage;
