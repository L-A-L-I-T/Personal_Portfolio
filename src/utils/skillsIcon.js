import {
  FaAws,
  FaBrain,
  FaCode,
  FaCogs,
  FaDocker,
  FaGitAlt,
  FaNodeJs,
  FaProjectDiagram,
  FaSitemap,
  FaRobot,
  FaLink,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiRedis,
  SiTypescript,
  SiPython,
  SiRedux,
  SiExpress,
} from "react-icons/si";

const normalizeSkill = (skill = "") =>
  skill
    .toLowerCase()
    .replace(/\+\+/g, "plusplus")
    .replace(/[^a-z0-9]/g, "");

const skillIconMap = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  react: SiReact,
  reactjs: SiReact,
  docker: FaDocker,
  nextjs: SiNextdotjs,
  nodejs: FaNodeJs,
  bootstrap: SiBootstrap,
  cplusplus: SiCplusplus,
  typescript: SiTypescript,
  mongodb: SiMongodb,
  mysql: SiMysql,
  redis: SiRedis,
  aws: FaAws,
  kafka: SiApachekafka,
  git: FaGitAlt,
  python: SiPython,
  redux: SiRedux,
  expressjs: SiExpress,
  langchain: FaLink,
  langgraph: FaProjectDiagram,
  langsmith: FaTools,
  retrievalaugmentedgenerationrag: FaDatabase,
  agenticai: FaRobot,
  artificialintelligence: FaBrain,
  designpatterns: FaProjectDiagram,
  datastructuresandalgorithms: FaSitemap,
  systemdesign: FaCogs,
};

export const getSkillIcon = (skill) => {
  const skillId = normalizeSkill(skill);
  return skillIconMap[skillId] || FaCode;
};
