const SemiCircularProgressBar = ({ easyCount, mediumCount, hardCount, children}) => {
  const total = easyCount + mediumCount + hardCount;

  // Calculate the percentage for each category
  const easyPercentage = (easyCount / total) * 100;
  const mediumPercentage = (mediumCount / total) * 100;
  const hardPercentage = (hardCount / total) * 100;

  // Circle settings
  const radius = 50;
  const circumference = Math.PI * radius; // Half of the circumference for semi-circle

  // Calculate stroke lengths for each segment
  const easyStrokeLength = (easyPercentage / 100) * circumference;
  const mediumStrokeLength = (mediumPercentage / 100) * circumference;
  const hardStrokeLength = (hardPercentage / 100) * circumference;

  return (
    <div style={{ width: '120px' }}>
      <svg width="100%" height="100%" viewBox="0 0 120 60">
        {/* Easy segment */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="green"
          strokeWidth="8"
          strokeDasharray={`${easyStrokeLength} ${circumference}`}
          strokeDashoffset={-circumference / 2} // Start from the left
          strokeLinecap="round"
          transform="rotate(90 60 60)"
        >
          <title>Easy: {easyCount}</title>
        </circle>
        {/* Medium segment */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="orange"
          strokeWidth="8"
          strokeDasharray={`${mediumStrokeLength} ${circumference}`}
          strokeDashoffset={-circumference / 2 - easyStrokeLength} // Start after easy segment
          strokeLinecap="round"
          transform={`rotate(90 60 60)`}
        >
          <title>Medium: {mediumCount}</title>
        </circle>
        {/*/!* Hard segment *!/*/}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="red"
          strokeWidth="8"
          strokeDasharray={`${hardStrokeLength} ${circumference}`}
          strokeDashoffset={-circumference / 2 - easyStrokeLength - mediumStrokeLength} // Start after medium segment
          strokeLinecap="round"
          transform="rotate(90 60 60)"
        >
          <title>Hard: {hardCount}</title>
        </circle>
      </svg>
      <div className={`relative top-[-30px] left-[43px] text-xl font-bold`}>
        {children}
      </div>
    </div>
  );
};

export default SemiCircularProgressBar;