const initialData = {
  projects: {
    proj_1: { id: "proj_1", content: "This is project 1" },
    proj_2: { id: "proj_2", content: "This is project 2" },
    proj_3: { id: "proj_3", content: "This is project 3" },
    proj_4: { id: "proj_4", content: "This is project 4" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Projects",
      projectIds: ["proj_1", "proj_2", "proj_3", "proj_4"],
    },
  },
  columnOrder: ["column-1"],
};

export default initialData;
