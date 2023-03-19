export const run = async (cmd: "dev" | "build", opts: any) => {
  switch (cmd) {
    case "dev":
      console.log("start storybook dev");
      break;
    case "build":
      console.log("build storybook static");
      break;
  }
};
