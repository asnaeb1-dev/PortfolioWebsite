import { useState } from "react";
import TabLayout from "../../uicomponents/ProjectTabs/TabLayout";

import CollegeImage from "../../../assets/college.jpeg";
import SchoolImage from "../../../assets/school.jpeg";

const EducationPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className={"w-full h-[calc(100vh_-_60px)] pt-6 overflow-hidden"}>
      <div className="w-full h-full px-4">
        <TabLayout
          tabList={["Education", "Certifications"]}
          currentTopic={currentTab}
          handleClick={(index) => setCurrentTab(index)}
        />
        {
          currentTab === 0 ? <EducationTab /> : <CertificationTab />
        }
      </div>
    </div>
  )
}

const EducationTab = () => {
  return (
    <div className="w-full h-full flex flex-col pt-4 gap-3 overflow-y-auto">

    </div>
  )
}

const CertificationTab = () => {
  return (
    <div className="w-full h-full overflow-y-auto">
    </div>
  )
}

export default EducationPage