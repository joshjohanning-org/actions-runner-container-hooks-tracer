## Runner Container Hooks Tracer

Add some loging to default docker [runner-container-hooks](https://github.com/actions/runner-container-hooks.git) to have a better understanding of the flow

## Findings

### OIDC

OIDC is NOT available in the hooks, trying to get (for example during a docker run) a token results in the error:

`Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable`

Don't know if this is by design or an oversight, it should be a feature.

### Environment Variables

During (snapshot obtained during a docker run, it may vary during other callbacks) these are the env variables available:


* GITHUB_JOB
* GITHUB_REF
* GITHUB_SHA
* GITHUB_REPOSITORY
* GITHUB_REPOSITORY_OWNER
* GITHUB_REPOSITORY_OWNER_ID
* GITHUB_RUN_ID
* GITHUB_RUN_NUMBER
* GITHUB_RETENTION_DAYS
* GITHUB_RUN_ATTEMPT
* GITHUB_REPOSITORY_ID
* GITHUB_ACTOR_ID
* GITHUB_ACTOR
* GITHUB_TRIGGERING_ACTOR
* GITHUB_WORKFLOW
* GITHUB_HEAD_REF
* GITHUB_BASE_REF
* GITHUB_EVENT_NAME
* GITHUB_SERVER_URL
* GITHUB_API_URL
* GITHUB_GRAPHQL_URL
* GITHUB_REF_NAME
* GITHUB_REF_PROTECTED
* GITHUB_REF_TYPE
* GITHUB_WORKFLOW_REF
* GITHUB_WORKFLOW_SHA
* GITHUB_WORKSPACE
* GITHUB_ACTION
* GITHUB_EVENT_PATH
* GITHUB_ACTION_REPOSITORY
* GITHUB_ACTION_REF
* GITHUB_PATH
* GITHUB_ENV
* GITHUB_STEP_SUMMARY
* GITHUB_STATE
* GITHUB_OUTPUT
* RUNNER_OS
* RUNNER_ARCH
* RUNNER_NAME
* RUNNER_ENVIRONMENT
* RUNNER_TOOL_CACHE
* RUNNER_TEMP
* RUNNER_WORKSPACE

### Running

#### Compiling code

```shell
cd packages/hooklib
npm install
npm run build
cd ../docker
npm run install
npm run build
```

#### Self hosted runner

Set the following environment variables before executing the self hosted runner:

(replace ....... with the path to the repo), the path needs to be absolute.

`ACTIONS_RUNNER_CONTAINER_HOOKS=/......./packages/docker/lib/index.js`