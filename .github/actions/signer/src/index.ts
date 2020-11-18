import *  as core from '@actions/core';

async function main() {
  // const filePath = core.getInput("file-path");
  console.log("Message from custom action");
  // console.log("File path:", filePath);
}

main()
  .catch((e) => {
    core.setFailed(e);
  });