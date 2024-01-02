const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/core");


try {
    const githubToken = core.getInput('github-token');
    const regex = core.getInput('regex');
    const octokit = new Octokit({ auth: githubToken });
    
    const branchName = github.context.payload.pull_request.head.ref;
    console.log(`Branch name: ${branchName}`, regex);
    // // fetch pr commit
    // octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
    //     owner: github.context.repo.owner,
    //     repo: github.context.repo.repo,
    //     pull_number: prNumber
    // }).then((response) => {

    //         if (!regex.test(commit)) {
    //             core.setFailed(`Invalid branch name.\n`);
    //             return;
    //         }
    // });
    core.setOutput("Pass", " See convention.md for more details.\n");
    
} catch (error) {
    core.setFailed(error.message);
}