const LEET_CODE_USERNAME = "abhigyanrahawork76";
const GFG_USERNAME = "asnaeb1";
export const getLeetCodeProfileData = async () => {
  try {
    const response = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/abhigyanrahawork76`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (e) {
    console.error("Failed to fetch LeetCode profile data:", e);
    return {}; // Return an empty object or default data
  }
}

export const getGFGProfileData = async () => {
  try {
    const response = await fetch(`https://geeks-for-geeks-stats-api.vercel.app/?raw=Y&userName=${GFG_USERNAME}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (e) {
    console.error("Failed to fetch GFG profile data:", e);
    return {}; // Return an empty object or default data
  }
}

export const saveToDB = ({totalSolved = 0, easySolved = 0, mediumSolved = 0, hardSolved = 0, profile }) => {
  localStorage.setItem(`easySolved${profile}`, easySolved);
  localStorage.setItem(`totalSolved${profile}`, totalSolved);
  localStorage.setItem(`mediumSolved${profile}`, mediumSolved);
  localStorage.setItem(`hardSolved${profile}`, hardSolved);
}

export const getFromDB = (profile) => {
  return {
    easySolved: parseInt(localStorage.getItem(`easySolved${profile}`)) || 0,
    totalSolved: parseInt(localStorage.getItem(`totalSolved${profile}`)) || 0,
    mediumSolved: parseInt(localStorage.getItem(`mediumSolved${profile}`)) || 0,
    hardSolved: parseInt(localStorage.getItem(`hardSolved${profile}`)) || 0,
    totalEasyQuestions: parseInt(localStorage.getItem(`totalEasyQuestions${profile}`)) || 0,
    totalMediumQuestions: parseInt(localStorage.getItem(`totalMediumQuestions${profile}`)) || 0,
    totalHardQuestions: parseInt(localStorage.getItem(`totalHardQuestions${profile}`)) || 0,
    submissionRate: parseInt(localStorage.getItem(`submissionRate${profile}`)) || 0,
    reputation: parseInt(localStorage.getItem(`reputation${profile}`)) || 0
  }
}