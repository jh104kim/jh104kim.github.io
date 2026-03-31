export type Paper = {
  id: string;
  title: string;
  url?: string;
  date: string;
  country: string;
  venue: string;
  type: "journal" | "conference" | "thesis";
  status: "published" | "upcoming";
};

export const papers: Paper[] = [
  {
    id: "p1",
    title: "Acoustic prediction for recipro comp",
    url: "http://nosion.io",
    date: "2006.02",
    country: "한국",
    venue: "GIST 졸업논문",
    type: "thesis",
    status: "published",
  },
  {
    id: "p2",
    title: "Journal bearing tribology design",
    url: "https://www.instagram.com/nosion.notion/",
    date: "2008.06",
    country: "미국",
    venue: "기계학회",
    type: "journal",
    status: "published",
  },
  {
    id: "p3",
    title: "FSI for valve dynamics",
    url: "http://nosion.io",
    date: "2010.07",
    country: "체코",
    venue: "Purdue (IIR)",
    type: "conference",
    status: "published",
  },
  {
    id: "p4",
    title: "FSI using ANSYS",
    date: "2011.05",
    country: "한국",
    venue: "ANSYS 학회",
    type: "conference",
    status: "published",
  },
  {
    id: "p5",
    title: "Fatigue design of a line discharge tube",
    date: "2012.08",
    country: "미국",
    venue: "Purdue (IIR)",
    type: "conference",
    status: "published",
  },
  {
    id: "p6",
    title: "1D Simulation / System Integration",
    date: "2026.07",
    country: "미국",
    venue: "Purdue (IIR)",
    type: "conference",
    status: "upcoming",
  },
  {
    id: "p7",
    title: "Performance prediction using GT-Suite",
    date: "2026.04",
    country: "한국",
    venue: "ATIS",
    type: "conference",
    status: "upcoming",
  },
];
