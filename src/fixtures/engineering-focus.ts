export type EngineeringFocusId =
  | "system-design"
  | "distributed-systems"
  | "database-systems"
  | "infrastructure"
  | "software-engineering"
  | "automation-ai";

export type EngineeringFocusArea = {
  id: EngineeringFocusId;
  number: string;
  title: string;
  label: string;
};

export const ENGINEERING_FOCUS_AREAS: EngineeringFocusArea[] = [
  {
    id: "system-design",
    number: "01",
    title: "System Design",
    label: "Architecture & scalability",
  },
  {
    id: "distributed-systems",
    number: "02",
    title: "Distributed Systems",
    label: "Services & communication",
  },
  {
    id: "database-systems",
    number: "03",
    title: "Database Systems",
    label: "SQL, NoSQL & persistence",
  },
  {
    id: "infrastructure",
    number: "04",
    title: "Infrastructure",
    label: "Deployment & orchestration",
  },
  {
    id: "software-engineering",
    number: "05",
    title: "Software Engineering",
    label: "Quality & maintainability",
  },
  {
    id: "automation-ai",
    number: "06",
    title: "Automation & AI",
    label: "Agents & workflows",
  },
];
