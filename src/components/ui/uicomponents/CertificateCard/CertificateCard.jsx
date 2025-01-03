import { IconFc } from "../../../data/Icons";
import { FaLink as LinkIcon, FaClock as DurationIcon } from "react-icons/fa";
import { MdPerson as CoachIcon } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { BsCalendarDateFill as Date } from "react-icons/bs";
import { useState } from "react";
const CertificateCard = ({
  certificateName = "",
  instituteName = "",
  duration = "",
  coachName = "",
  skills = [],
  courseLink = "",
  date = "",
  certLink = "",
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="flex flex-col rounded-xl transition-transform duration-300 overflow-y-hidden relative w-full h-[calc(100dvh_-_160px)] overflow-x-hidden gap-4 bg-indigo-400/50 py-2 px-4 shadow-lg">
      <CourseLinkFAB courseLink={courseLink} />
      <span className="flex flex-row w-full items-center font-bold text-xl gap-2">
        <IconFc name="udemy" width={40} height={40} />
        <p>{instituteName} Certification</p>
      </span>
      <>
        <img
          className={`${
            certLink && !isLoading ? "block" : "hidden"
          } max-h-64 rounded-lg`}
          loading={"lazy"}
          onLoad={() => setLoading(false)}
          src={certLink}
          alt={certificateName || "certificate"}
        />
        {(!certLink || isLoading) && <DefaultCertificate />}
      </>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-xl">{certificateName}</p>
        <span className="flex flex-row items-center gap-4 text-sm font-semibold">
          <Date color="white" />
          <p>{date}</p>
        </span>
        <span className="flex flex-row items-center gap-4 text-sm font-semibold">
          <DurationIcon color="white" />
          <p>{duration}</p>
        </span>
        <span className="flex flex-row items-center gap-4 text-sm font-semibold">
          <CoachIcon color="white" />
          <p>{coachName}</p>
        </span>
      </div>
      <div className="flex flex-row flex-wrap gap-2 overflow-y-auto">
        {skills.map((skill) => (
          <span
            key={skill.skillName}
            className="flex flex-row border-2 border-white/50 py-1 px-2 rounded-lg gap-1"
          >
            <IconFc name={skill.skillIcon} width={24} height={24} />
            <p>{skill.skillName}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

const DefaultCertificate = () => {
  return (
    <div className="max-h-64 h-60 rounded-lg w-full flex justify-center items-center border-2 bg-white/20 flex-col">
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/plasticine/100/certificate.png"
        alt="certificate"
      />
      <p>Congratulation!!</p>
    </div>
  );
};

const CourseLinkFAB = ({ courseLink = "" }) => {
  return (
    <a
      href={courseLink}
      title={courseLink.length > 0 ? "Course Link" : "No Course Link available"}
      className="w-12 h-12 bg-indigo-500 absolute rounded-full hover:scale-[102%] active:scale-[98%] bottom-4 shadow-2xl right-4 flex items-center justify-center"
    >
      <LinkIcon color="white" />
    </a>
  );
};

export default CertificateCard;
