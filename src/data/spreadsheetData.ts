export type SpreadsheetRow = {
  jobRequest?: string;
  submittedDate?: string;
  status?: string;
  statusBgColor?: string;
  statusTextColor?: string;
  submitter?: string;
  portfolioLink?: string;
  name?: string;
  priority?: string;
  priorityColor?: string;
  dueDate?: string;
  value?: string | number;
}; 

export  const spreadsheetData : SpreadsheetRow[] =[
  {
    name: "Sophie Choudhury",
    submitter: "Aisha Patel",
    jobRequest: "Launch social media campaign for product XYZ",
    submittedDate: "15-10-2024", 
    value: "6,200,000",
    status: "In-process",
    statusBgColor: "#fff3d6",
    statusTextColor: "#85640b",
    portfolioLink: "https://www.aishapatel.com",
    priority: "Medium",
    priorityColor: "#c29210",
    dueDate: "20-11-2024"
  },
  {
    name: "Tejas Pandey",
    submitter: "Irfan Khan",
    jobRequest: "Update press kit for company redesign",
    submittedDate: "28-09-2024",
    value: "3,500,000",
    status: "Need to start",
    statusBgColor: "rgb(226 232 240)",
    statusTextColor: "rgb(71 85 105)",
    portfolioLink: "https://www.irfankhanportfolio.com",
    priority: "High",
    priorityColor: "#ef4d44",
    dueDate: "30-10-2024"
  },
  {
    name: "Rachel Lee",
    submitter: "Mark Johnson",
    jobRequest: "Finalize user testing feedback for app update",
    submittedDate: "5-12-2024",
    value: "4,750,000",
    status: "In-process",
    statusBgColor: "#fff3d6",
    statusTextColor: "#85640b",
    portfolioLink: "https://www.markjohnsondesigns.com",
    priority: "Medium",
    priorityColor: "#c29210",
    dueDate: "10-01-2025"
  },
  {
    name: "Tom Wright",
    submitter: "Emily Green",
    jobRequest: "Design new features for the website",
    submittedDate: "01-10-2025",
    value: "5,900,000",
    status: "Complete",
    statusBgColor: "#d3f2e3",
    statusTextColor: "#0a6e3d",
    portfolioLink: "https://www.emilygreenart.com",
    priority: "Low",
    priorityColor: "#1a8cff",
    dueDate: "15-02-2025"
  },
  {
    name: "Kevin Smith",
    submitter: "Jessica Brown",
    jobRequest: "Prepare financial report for Q4",
    submittedDate: "25-12-2024",
    value: "2,800,000",
    status: "Blocked",
    statusBgColor: "#ffe1de",
    statusTextColor: "#c22219",
    portfolioLink: "https://www.jessicabrowncreative.com",
    priority: "Low",
    priorityColor: "#1a8cff",
    dueDate: "30-01-2025"
  }
];
