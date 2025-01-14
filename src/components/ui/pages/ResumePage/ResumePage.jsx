import { useEffect, useRef, useState } from "react";
import DownloadButton from "../../uicomponents/DownloadButton/DownloadButton";
const ResumePage = () => {
  const ResumeLink = `https://docs.google.com/viewer?url=https://docs.google.com/document/d/1n6pAFaNS1BD_7zYAaqIHOF7EydHrZctYc-J7-fuVL5w/export?format=pdf&embedded=true`;
  const DownloadLink = `https://docs.google.com/document/d/1n6pAFaNS1BD_7zYAaqIHOF7EydHrZctYc-J7-fuVL5w/export?format=pdf`;
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const timer = useRef(null);

  // Timer logic to track loading timeout
  useEffect(() => {
    if (isLoading) {
      timer.current = setTimeout(() => {
        setError(true); // Set error after 10 seconds
        setLoading(false); // Stop loading
      }, 10000);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current); // Cleanup timer
      }
    };
  }, [isLoading]);

  return (
    <div
      className={`w-full h-[calc(100dvh_-_85px)] p-4 lg:w-4/5 lg:h-[calc(100dvh_-_90px)] mx-auto mt-4`}
    >
      <div className="w-full h-full relative lg:p-4 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row w-full lg:w-4/5 justify-between items-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold">Resume</h1>
          <DownloadButton downloadLink={DownloadLink} />
        </div>
        <iframe
          title="Resume"
          loading={"eager"}
          onError={(e) => setError(e)}
          onLoad={() => setLoading(false)}
          src={ResumeLink}
          className={`w-full lg:w-4/5 h-full transition-opacity rounded-2xl duration-700`}
        ></iframe>
        <div
          className={`absolute ${
            isLoading && !hasError ? "block" : "hidden"
          } top-1/2 font-extrabold`}
        >
          {hasError ? "Error... Please reload" : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
