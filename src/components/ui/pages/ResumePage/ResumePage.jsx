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
      className={
        "w-full flex flex-col items-center justify-center h-[calc(100vh_-_60px)] lg:h-[calc(100vh_-_100px)] lg:mt-8 overflow-hidden"
      }
    >
      <div className="w-full lg:w-4/5 h-full flex flex-col gap-5 lg:mb-6 p-4 lg:p-6 lg:bg-white/30 lg:dark:bg-transparent backdrop-blur-sm shadow-xl lg:rounded-2xl">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold dark:text-white">
            Resume
          </h1>
          <DownloadButton downloadLink={DownloadLink} />
        </div>
        <iframe
          title="Resume"
          loading={"eager"}
          onError={(e) => setError(e)}
          onLoad={() => setLoading(false)}
          src={ResumeLink}
          className={`w-full h-full transition-opacity dark:bg-white rounded-2xl duration-700`}
        ></iframe>
        <div
          className={`absolute ${
            isLoading && !hasError ? "block" : "hidden"
          } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold`}
        >
          {hasError ? "Error... Please reload" : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
