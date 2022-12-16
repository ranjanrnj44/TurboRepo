const plopConfig = (plop) => {
  plop.setGenerator("add", {
    //plop has 3 props (desc,prompts,actions)
    description: "Generate a file using plop",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Give a name to title",
      },
      {
        type: "input",
        name: "description",
        message: "What is this file for?",
      },
    ],
    //plop has certain action items like (add,path...) {add - adds a file}
    actions: [
      {
        type: "add",
        // path: "packages/examplePlop/index.md", -- static, below is dynamic
        path: "packages/{{title}}/index.md",
        templateFile: "templates/postMsg.hbs",
        data: { date: new Date().toISOString() },
      },
    ],
  });
};

//module export
module.exports = plopConfig;
