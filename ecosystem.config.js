module.exports = {
  apps: [
    {
      name: "frontend",
      script: "yarn",
      args: "start",
      exec_mode: "cluster",
    },
  ],
};
