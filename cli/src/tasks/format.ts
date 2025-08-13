export const run = async (cmd: "dev" | "build") => {
  switch (cmd) {
    case "dev":
      console.log("start storybook dev");
      break;
    case "build":
      console.log("build storybook static");
      break;
  }
};
