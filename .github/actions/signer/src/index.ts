import *  as core from '@actions/core';

async function main() {
  console.log("Message from custom action");
}

main()
  .catch((e) => {
    core.setFailed(e);
  });