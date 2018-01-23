module.exports = {
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Project name",
    },
    description: {
      type: "string",
      message: "Project description",
      default: "A Vue.js + Sinatra project",
    },
    author: {
      type: "string",
      message: "Author",
    },
    "license": {
      "type": "string",
      "label": "License",
      "default": "MIT",
    },
  },
}
