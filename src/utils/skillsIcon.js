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
} from "react-icons/si";

const normalizeSkill = (skill = "") =>
  skill
    .toLowerCase()
    .replace(/\+\+/g, "plusplus")
    .replace(/[\s._-]/g, "");

const skillIconMap = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  react: SiReact,
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
  artificialintelligence: FaBrain,
  designpatterns: FaProjectDiagram,
  datastructuresandalgorithms: FaSitemap,
  systemdesign: FaCogs,
};

export const getSkillIcon = (skill) => {
  const skillId = normalizeSkill(skill);
  return skillIconMap[skillId] || FaCode;
};
