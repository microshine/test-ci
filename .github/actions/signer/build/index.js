"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
async function main() {
    console.log("Message from custom action");
}
main()
    .catch((e) => {
    core.setFailed(e);
});
