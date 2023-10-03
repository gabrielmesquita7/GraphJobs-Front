import dataScienceJSON from "../db/data-science.json";
// import webDevJSON from "../db/web-dev.json";
// import mobileDevJSON from "../db/mobile-dev.json";
// import aiJSON from "../db/ai.json";
// import dataAnalysisJSON from "../db/data-analysis.json";

function readJSON(selectedArea) {
  switch (selectedArea) {
    case "data-science":
      return dataScienceJSON;
    // case "web-dev":
    //   return webDevJSON;
    // case "mobile-dev":
    //   return mobileDevJSON;
    // case "ai":
    //   return aiJSON;
    // case "data-analysis":
    //   return dataAnalysisJSON;
    default:
      return null;
  }
}

export { readJSON };
