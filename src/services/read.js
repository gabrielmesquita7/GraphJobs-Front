import dataScienceJSON from "../db/data-science.json";
import devOpsJSON from "../db/dev-ops.json";
import operationalResearchJSON from "../db/operational-research.json";
// import aiJSON from "../db/ai.json";
// import dataAnalysisJSON from "../db/data-analysis.json";

function readJSON(selectedArea) {
  switch (selectedArea) {
    case "data-science":
      return dataScienceJSON;
    case "dev-ops":
      return devOpsJSON;
    case "operational-research":
      return operationalResearchJSON;
    // case "ai":
    //   return aiJSON;
    // case "data-analysis":
    //   return dataAnalysisJSON;
    default:
      return null;
  }
}

export { readJSON };
