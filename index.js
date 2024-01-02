const core = require('@actions/core');
const github = require('@actions/github');


try {
    const regex = core.getInput('regex');
    const branchName = github.context.payload.pull_request.head.ref;
    if (!regex) {
        core.setFailed(`Invalid regex.\n`, "See convention.md for more details.\n");
        return;
    }
    if (!branchName) {
        core.setFailed(`Invalid branch name.\n`, "See convention.md for more details.\n");
        return;
    }
    if (!regex.test(branchName)) {
        core.setFailed(`Invalid branch name.\n`, "See convention.md for more details.\n");
        return;
    }
  
    core.setOutput("Pass", true);
    
} catch (error) {
    core.setFailed(error.message);
}