# AB-620 Copilot Studio Agent Developer — Unified Question Bank (TEST FORMAT)

> Generated for testing purposes. This file merges all 3 original question banks
> (Bank 1: Corpus Question Pool, Bank 2: Per-Objective Sets, Bank 3: Official Module
> Assessments) into a single unified per-question markdown template. Question IDs
> are renumbered continuously Q001-Q427 in bank order (Bank 1, then Bank 2, then
> Bank 3); original per-bank numbering is not preserved. Source data (fact IDs, URLs,
> citations, confidence ratings) is preserved verbatim from each bank where present.
>
> Generated: 2026-08-29 · Source: original AB-620 study bank (unmodified) · Total questions: 427

### Q001 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A maker is told to test multi-user sharing behavior for an agent before release. They only have a developer environment available.

**Why will this not work?**

- **A.** Developer environments do not support agents
- **B.** A developer environment is single-user and cannot run or share production apps
- **C.** Developer environments must be managed environments first
- **D.** Sharing requires a pipelines host

**Answer:** B

A developer environment is a single-user environment and cannot be used to run or share production apps.

**Source:** `['ALM-002']` · https://learn.microsoft.com/en-us/power-platform/alm/basics-alm

### Q002 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A maker holds the Deployment Pipeline User role. They need to add a new stage to an existing pipeline.

**Can they?**

- **A.** Yes, but only in the pipelines host environment
- **B.** Only if they are also a Tenant Administrator
- **C.** Yes, the role includes stage management
- **D.** No - the role grants access to run pipelines, not to create, edit or delete them

**Answer:** D

The Deployment Pipeline User security role grants access to run one or more pipelines. It does not grant access to create, edit, or delete pipelines.

**Source:** `['ALM-036']` · https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines

### Q003 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> An administrator is preparing cross-geo solution deployment and cannot open the Deployment Pipeline Configuration app.

**What is required?**

- **A.** Tenant Administrator only
- **B.** Deployment Pipeline User plus a managed environment
- **C.** Power Platform administrator in every target environment
- **D.** System Administrator or Deployment Pipeline Administrator, plus Write on the Organization Setting table

**Answer:** D

Accessing the Deployment Pipeline Configuration app for cross-geo deployment requires System Administrator or Deployment Pipeline Administrator, together with Write privileges on the Organization Setting table.

**Source:** `['ALM-075']` · https://learn.microsoft.com/en-us/power-platform/alm/enable-cross-geo-solution-deployments

### Q004 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A governance team wants a final human approval inserted after a deployment is approved but before it executes, plus custom validation that blocks export from development until it passes.

**Which two extensions deliver this?**

- **A.** Pre-export Step Required and Previous Deployment Stage
- **B.** Pre-deployment Step Required only
- **C.** Pre-export Step Required and Pre-deployment Step Required
- **D.** Delegated deployment and Previous Deployment Stage

**Answer:** C

Pre-export Step Required runs custom validation when a deployment request is submitted and stops pipelines exporting from development until the step completes. Pre-deployment Step Required inserts a custom step after a deployment is approved - Microsoft's own example is a final approval.

**Source:** `['ALM-081', 'ALM-083']` · https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines

### Q005 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> Makers need to deploy to production but must not hold production privileges themselves.

**What is the correct mechanism?**

- **A.** Grant them System Administrator temporarily
- **B.** Delegated deployment, running as a service principal or the pipeline stage owner
- **C.** Personal pipelines
- **D.** A pre-export step

**Answer:** B

Delegated deployment carries out deployments using a service principal or the pipeline stage owner's identity rather than the requesting maker's, so makers can request deployments without holding the privileges.

**Source:** `['ALM-082', 'ALM-085']` · https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines

### Q006 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Easy*

> A build engineer wants to combine version 1 and version 2 Power Platform Build Tools tasks in one Azure DevOps pipeline.

**Is this supported?**

- **A.** Yes, if the tool installer task runs first
- **B.** No - you cannot mix and match task versions
- **C.** Yes, for import tasks only
- **D.** Only when using a service principal connection

**Answer:** B

You cannot mix and match task versions for Power Platform Build Tools in a build pipeline.

**Source:** `['ALM-069']` · https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tools

### Q007 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A solution exported from a recently updated environment fails to import into an older environment.

**What is the most likely explanation?**

- **A.** The solution exceeds 95 MB
- **B.** You cannot reliably import into an environment older than the one the solution was exported from
- **C.** The target is not a managed environment
- **D.** The publisher prefix does not match

**Answer:** B

You cannot reliably import a solution into an environment that is an older version than the environment where the solution was exported, because required components or functionality may be missing.

**Source:** `['ALM-079']` · https://learn.microsoft.com/en-us/power-platform/alm/environment-strategy-alm

### Q008 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A pipeline import must run unattended in CI, with no one present to type connection values.

**What makes this possible?**

- **A.** Passing a deployment settings JSON file as a parameter during import
- **B.** Marking the solution managed before export
- **C.** Enabling AI deployment notes
- **D.** Setting a previous deployment stage

**Answer:** A

A deployment settings JSON file passed as a parameter during import with Power Platform Build Tools creates the required connection references and environment variable values on import, without the user specifying them interactively. It can be stored in source control.

**Source:** `['ALM-008', 'ALM-009']` · https://learn.microsoft.com/en-us/power-platform/alm/conn-ref-env-variables-build-tools

### Q009 — Add existing agents to a solution
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A maker cannot export a solution containing an agent. The solution is unmanaged and they hold the System Customizer role. One topic is named 'Order.Status.Lookup'.

**What is blocking the export?**

- **A.** A solution containing an agent with periods in any topic name cannot be exported
- **B.** Topic-level comments must be removed
- **C.** System Customizer is insufficient
- **D.** The solution must be managed first

**Answer:** A

You cannot export a solution that contains an agent with periods in the name of any of its topics. System Customizer is in fact the minimum role required, so the role is not the blocker.

**Source:** `['ALM-223', 'ALM-219', 'ALM-218']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export

### Q010 — Create a solution
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A team stores canvas apps and modern flows in source control and wants to use the XML format for consistency with an old repository.

**What is the problem?**

- **A.** Canvas app .msapp files and modern flows are only supported in the YAML format
- **B.** XML format cannot store publishers
- **C.** There is no problem
- **D.** XML format requires pac CLI 2.4.1 or later

**Answer:** A

Canvas app .msapp files and modern flows are only supported in the YAML format, with the .msapp binary under canvasapps/<name>/. XML should only be used for existing XML repositories or legacy tooling that does not support YAML.

**Source:** `['ALM-195', 'ALM-210', 'ALM-216']` · https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool · https://learn.microsoft.com/en-us/power-platform/alm/solution-source-control-yaml-format · https://learn.microsoft.com/en-us/power-platform/alm/use-source-control-solution-files

### Q011 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A pipeline run packs successfully in CI, then fails on import to the target.

**What does this tell you?**

- **A.** The solution exceeds 95 MB
- **B.** The target environment is not managed
- **C.** The pack step must have silently failed
- **D.** Pack success does not guarantee import success - for example if solutioncomponents.yml omits required entries

**Answer:** D

Pack success does not guarantee import success. Microsoft gives the example of solutioncomponents.yml omitting required entries.

**Source:** `['ALM-208']` · https://learn.microsoft.com/en-us/power-platform/alm/solution-source-control-yaml-format

### Q012 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> An administrator enables a default pipelines host for the tenant. Makers immediately report their pipelines have vanished.

**What happened?**

- **A.** The makers lost the Deployment Pipeline User role
- **B.** The host is still provisioning
- **C.** Users lose access to existing pipelines in the current host - the data remains but records must be re-created
- **D.** The pipelines were deleted

**Answer:** C

After enabling the setting, users lose access to any existing pipelines within the current host. The data in that host is not removed, but an admin must re-create environment records and pipeline records.

**Source:** `['ALM-160']` · https://learn.microsoft.com/en-us/power-platform/alm/set-a-default-pipelines-host

### Q013 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A maker owns a single-stage personal pipeline and wants to add a test stage, then share the pipeline with a colleague.

**What can they do?**

- **A.** Both
- **B.** Share it, but not add a stage
- **C.** Add the stage as owner of a single-stage pipeline, but personal pipelines cannot be shared
- **D.** Neither

**Answer:** C

You must be the owner of the pipeline to add a stage, and the add-stage capability is limited to single-stage pipelines - which this is. However, personal pipelines cannot be shared with other users.

**Source:** `['ALM-142', 'ALM-143', 'ALM-141']` · https://learn.microsoft.com/en-us/power-platform/alm/platform-host-pipelines

### Q014 — Create and use environment variables
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A deployment updates several connection references successfully, but one will not update. That reference has never had a value deployed.

**Why does it fail?**

- **A.** Connection references cannot be updated at all
- **B.** The environment is not managed
- **C.** Connection references with no value in the solution or target cannot be updated during deployment
- **D.** It requires the Deployment Pipeline Administrator role

**Answer:** C

Currently, connection references without a value in the solution or the targeted environment cannot be updated during deployment. If a value was deployed previously, it can be updated in the targeted environment.

**Source:** `['ALM-134']` · https://learn.microsoft.com/en-us/power-platform/alm/pipelines

### Q015 — Create a solution
*Bank: bank1 · Domain: ALM · Difficulty: Easy*

> A maker asks whether they can distribute the default solution to another environment.

**What is the answer?**

- **A.** Yes, by exporting it as managed
- **B.** No - the default solution cannot be exported
- **C.** Yes, if the target has the same publisher
- **D.** Only through a pipeline

**Answer:** B

The default solution cannot be exported, and therefore cannot be distributed to another environment.

**Source:** `['ALM-214']` · https://learn.microsoft.com/en-us/power-platform/alm/use-solutions-for-your-customizations

### Q016 — Create a test set
*Bank: bank1 · Domain: ANLY · Difficulty: Hard*

> A team wants to validate a five-turn booking dialogue and also run 80 single-question regression checks.

**Which test set sizes support this?**

- **A.** Both types hold up to 20 cases
- **B.** Single-response sets hold 20; conversational sets hold 100
- **C.** Both fit in one conversational set of 100 cases
- **D.** Conversational sets hold up to 20 cases of up to 12 messages; single-response sets hold up to 100 cases

**Answer:** D

A conversational test set consists of up to 20 test cases, each supporting up to 12 total messages - six question-and-answer pairs. A single-response test set consists of up to 100 test cases.

**Source:** `['ANLY-054', 'ANLY-069', 'ANLY-071']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-multi-turn

### Q017 — Choose an evaluation method
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> A maker plans to score agent answers against expected answers using the similarity test method.

**What is the problem?**

- **A.** Makers cannot use the similarity test method for evaluations
- **B.** Similarity requires a user profile
- **C.** Similarity requires the Fabric data agent connector
- **D.** Similarity only works with conversational sets

**Answer:** A

Makers cannot use the similarity test method for evaluations. All other test methods are available.

**Source:** `['ANLY-067']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-intro

### Q018 — Review test results
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> An administrator disables the Microsoft Copilot Studio connector for an environment. Evaluations that previously ran now fail.

**Which evaluations are affected?**

- **A.** Evaluations that use user authentication
- **B.** Only conversational evaluations
- **C.** All evaluations
- **D.** Only evaluations generated from SharePoint files

**Answer:** A

Agent evaluations that use user authentication require access through the Microsoft Copilot Studio connector. If an admin turns off that connection, those tests cannot be run.

**Source:** `['ANLY-012']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-edit

### Q019 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Hard*

> A team extends the Dataverse retention period, expecting the Analytics page to then show more history.

**What actually happens?**

- **A.** Only custom analytics are affected - the Analytics page retention is unchanged
- **B.** The change is rejected because Analytics retention is fixed at 360 days
- **C.** Both change after a 24-hour delay
- **D.** The Analytics page extends to match

**Answer:** A

If you change the default Dataverse retention period, only custom analytics are affected. The retention period for the Analytics page in Copilot Studio is not affected.

**Source:** `['ANLY-042']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-powerapps

### Q020 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> An architect wants an agent using Microsoft authentication embedded in a Power BI report, published beyond Teams, with an Authenticate node in the middle of a dialog.

**How many of those three are possible?**

- **A.** All three
- **B.** None - Entra ID agents cannot be embedded in Power BI, Authenticate with Microsoft works only on Teams, and the Authenticate node must be a leaf node
- **C.** Only the Power BI embed
- **D.** Only the mid-dialog Authenticate node

**Answer:** B

Agents using Microsoft authentication (Entra ID) cannot be embedded in Power BI. Authenticate with Microsoft means the agent works only on the Teams channel. The Authenticate node is only available at the end of a dialog tree, as a leaf node.

**Source:** `['SEC-048', 'SEC-058', 'SEC-041']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication · https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

### Q021 — Evaluate security and governance considerations
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> A governance lead asks how to stop makers creating agents in an environment.

**What should you tell them?**

- **A.** Disable agent creation in the admin center
- **B.** Remove the Environment Maker role
- **C.** Enable tenant isolation
- **D.** Agent creation cannot be disabled - use data policies to stop anyone chatting with the agent

**Answer:** D

You cannot disable agent creation. Microsoft's guidance is to use data policies to prevent anyone from chatting with the agent.

**Source:** `['SEC-037', 'SEC-036']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-faq

### Q022 — Evaluate security and governance considerations
*Bank: bank1 · Domain: SEC · Difficulty: Easy*

> An administrator asks whether a business-critical agent can be exempted from a new data policy.

**What is the answer?**

- **A.** Yes, if the agent is in a managed environment
- **B.** Only for agents published to Teams
- **C.** Yes, using a PowerShell exemption
- **D.** No - since March 2025 agents cannot be exempted from data policy enforcement

**Answer:** D

Since March 2025, agents cannot be exempted from data policy enforcement, and it is no longer possible to exempt agents with a PowerShell command.

**Source:** `['SEC-012', 'SEC-013']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-dlp-troubleshooting

### Q023 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> A maker turns off Require users to sign in on an agent that still has topics needing authentication.

**What changes for the user?**

- **A.** Authentication is disabled entirely
- **B.** The agent no longer asks users to sign in until it reaches a topic that requires it
- **C.** Users can never reach those topics
- **D.** The Sign in system topic is deleted

**Answer:** B

If you turn off that option, the agent does not ask users to sign in until it encounters a topic that requires them to.

**Source:** `['SEC-054', 'SEC-055']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

### Q024 — Implement error handling in agent flows
*Bank: bank1 · Domain: FLOW · Difficulty: Hard*

> A flow contains a loop that runs 80 times, plus 30 other actions. The team plans to add more logic.

**What is the concern?**

- **A.** Loops count as a single action, so the flow has 31 actions
- **B.** The flow already has about 110 actions, above the recommended limit of 100, because each loop iteration counts as one action
- **C.** Loops are unsupported in agent flows
- **D.** The 100-second limit applies per loop iteration

**Answer:** B

A flow run should not include more than 100 actions, and the action count includes loops, which count as one action for each loop iteration. 80 iterations plus 30 other actions is already past the guidance.

**Source:** `['FLOW-047']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

### Q025 — Create an agent flow
*Bank: bank1 · Domain: FLOW · Difficulty: Hard*

> A developer enables express mode on a flow that uses a delay action and has the Asynchronous response toggle set to On.

**What happens?**

- **A.** Errors appear when saving - delay and webhook actions are unsupported in express mode, and express mode requires real-time response with the async toggle Off
- **B.** It works, but slower
- **C.** Express mode disables itself silently
- **D.** The delay is converted into a callback

**Answer:** A

Delay and webhook actions are not supported when express mode is turned on, and errors appear when saving the flow. Express mode also requires the flow to respond in real time, with the Asynchronous response toggle set to Off under Networking.

**Source:** `['FLOW-045', 'FLOW-048']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode · https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-agent

### Q026 — Implement error handling in agent flows
*Bank: bank1 · Domain: FLOW · Difficulty: Hard*

> A long-running flow is configured for asynchronous response, but the environment does not support it. The agent tells users the task is done while the flow is still running.

**What is happening?**

- **A.** The flow silently failed
- **B.** Without asynchronous response support, the agent may receive a 'flow completed' response immediately while the flow continues running
- **C.** The callback was delivered to the wrong channel
- **D.** The two-minute limit was exceeded and the flow was cancelled

**Answer:** B

If the environment does not support asynchronous response, the agent might receive a 'flow completed' response immediately while the flow continues to run.

**Source:** `['FLOW-054', 'FLOW-053']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-asynchronous-response

### Q027 — Create an agent flow
*Bank: bank1 · Domain: FLOW · Difficulty: Medium*

> A team wants to move an existing Power Automate flow into the new workflow format.

**Is that possible?**

- **A.** Only if the flow uses express mode
- **B.** Yes, conversion supports both targets
- **C.** Yes, with pay-as-you-go capacity
- **D.** No - a Power Automate flow can only be converted to an agent flow, not to the new workflow format

**Answer:** D

You can only convert a Power Automate flow to an agent flow. You cannot convert a Power Automate flow to the new workflow format. Conversion also requires Copilot Studio capacity, prepaid or pay-as-you-go, in the environment.

**Source:** `['FLOW-056', 'FLOW-057']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview

### Q028 — Configure and monitor computer use for an agent
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A security review asks what a newly configured computer use tool is permitted to reach.

**What is the default, and what changes it?**

- **A.** Only Microsoft domains, expandable by request
- **B.** Only the hosted browser's start page
- **C.** Nothing until an allow list is defined
- **D.** By default it can operate on any website or application - enabling access control defines what it may reach

**Answer:** D

By default, computer use can operate on any website or application. To restrict this access you enable access control to define what it may reach.

**Source:** `['TOOL-060', 'TOOL-063', 'TOOL-064', 'TOOL-066']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

### Q029 — Create an agent flow
*Bank: bank1 · Domain: FLOW · Difficulty: Hard*

> A flow that lists 1,500 rows with 100 columns is switched to express mode and fails during testing with a memory limit error.

**What should the team conclude?**

- **A.** Split the flow into two express-mode flows
- **B.** Testing is unreliable in express mode; deploy and re-measure
- **C.** This is a data-heavy flow and express mode is the wrong fit - and the test failure predicts production failure
- **D.** Increase the Copilot Studio plan tier

**Answer:** C

Data-heavy flows move large amounts of data and exceed express mode's memory limit, and Microsoft states that if a flow fails during a test you are likely to hit the same issues when it is deployed and run in production.

**Source:** `['FLOW-039', 'FLOW-041', 'FLOW-038']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

### Q030 — Create an agent flow
*Bank: bank1 · Domain: FLOW · Difficulty: Medium*

> A team wants to enable express mode. Their flow uses the correct trigger and response action, and has a Copilot Studio plan.

**What else must be true?**

- **A.** The flow must be in a managed environment
- **B.** The Power Automate environment must be on new infrastructure
- **C.** The agent must use generative orchestration
- **D.** Desktop flows must be enabled

**Answer:** B

Express mode requires the flow to have an appropriate trigger and response action, a Copilot Studio plan associated with it, and the Power Automate environment to be on new infrastructure. It is currently only available for upgraded environments on the new supported architecture.

**Source:** `['FLOW-036', 'FLOW-037', 'FLOW-042']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

### Q031 — Monitor agent flows
*Bank: bank1 · Domain: FLOW · Difficulty: Medium*

> A team evaluating an agent node in workflows runs 25 evaluations in a single day and the last few are rejected.

**Why?**

- **A.** Evaluations require a custom model
- **B.** Only five evaluations per day are permitted
- **C.** Up to 20 evaluations per agent node per day are permitted
- **D.** Evaluations are not available in workflows

**Answer:** C

You can run up to 20 evaluations per agent node per day, and you can generate up to five AI-generated test methods per agent node.

**Source:** `['FLOW-026', 'FLOW-027']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/agent-node-workflow

### Q032 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Hard*

> An agent is configured with no authentication. A maker adds a connector tool and it will not run at all.

**What is the underlying reason?**

- **A.** Tools always run in the user context and cannot run unless authentication is enabled
- **B.** Connector tools require a premium licence
- **C.** The connector response exceeds 500 KB
- **D.** The tool description is too short

**Answer:** A

Tools are always run in the agent's runtime in the user context and cannot be run unless authentication is enabled.

**Source:** `['TOOL-051']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

### Q033 — Configure and monitor computer use for an agent
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A computer use run fails with MSEntraRemoteDesktopAppConsentRequired.

**What is the cause?**

- **A.** The Cloud PC pool is still provisioning
- **B.** Consent has not been granted
- **C.** The signed-in user does not own the connection
- **D.** A UAC prompt is blocking the desktop

**Answer:** B

The computer use run fails with an MSEntraRemoteDesktopAppConsentRequired error if consent is not granted.

**Source:** `['TOOL-041', 'TOOL-043', 'TOOL-028']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-cloud-pc-pool · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/actions/computer-use-screenshot-error

### Q034 — Configure and monitor computer use for an agent
*Bank: bank1 · Domain: TOOL · Difficulty: Easy*

> A maker wants to add a standalone computer use tool to a workflow.

**Is this supported?**

- **A.** Yes
- **B.** No - standalone computer use tools can only be added to agent flows
- **C.** Only in a managed environment
- **D.** Only with a Cloud PC pool

**Answer:** B

You can only add standalone computer use tools to agent flows. They cannot be added to workflows yet.

**Source:** `['TOOL-010']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use-standalone

### Q035 — Create an agent flow
*Bank: bank1 · Domain: FLOW · Difficulty: Easy*

> A maker built a flow in Power Automate and cannot find it on the Copilot Studio Flows page.

**Why?**

- **A.** It must be added to a solution
- **B.** Power Automate flows are deprecated
- **C.** It needs to be published first
- **D.** The Flows page shows only agent flows created in Copilot Studio

**Answer:** D

The Copilot Studio Flows page only displays agent flows created in Copilot Studio. Flows created in Power Automate do not appear there.

**Source:** `['FLOW-019']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-faqs

### Q036 — Implement ALM for agents
*Bank: bank1 · Domain: ALM, SEC · Difficulty: Medium*

> An architect is planning Power Platform pipelines with a developer environment, a dedicated pipelines host, and separate test and production target environments. Budget for managed environment licensing is limited.

**Which environments must be enabled as managed environments?**

- **A.** None - managed environments are recommended but never required for pipelines
- **B.** The test and production target environments only
- **C.** Every environment involved, including the developer environment and the pipelines host
- **D.** The pipelines host only, because it governs the deployments

**Answer:** B

All target environments used in Power Platform deployment pipelines must be managed environments. Managed environments aren't required for the pipelines host or the developer environments.

**Source:** `['ALM-030', 'SEC-008']` · https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines · https://learn.microsoft.com/en-us/power-platform/alm/admin-deployment-hub

### Q037 — Implement ALM for agents
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> An organization moves from the default platform pipelines host to a custom host environment. Afterwards, makers who are not administrators report they can no longer run any pipeline.

**What is the cause?**

- **A.** Custom hosts support administrators only, by design
- **B.** The target environments lost their managed environment status during the move
- **C.** A custom host overrides platform host behavior, and nonadmins can't use pipelines unless you grant them access in the custom host environment
- **D.** Pipelines must be re-created from scratch after a host change

**Answer:** C

Using a custom host overrides the platform host behavior. Nonadmins can't use pipelines unless access is granted in the custom host environment.

**Source:** `['SEC-011']` · https://learn.microsoft.com/en-us/power-platform/alm/admin-deployment-hub

### Q038 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Hard*

> A test team runs agent evaluations against an agent that uses user authentication. Overnight, every evaluation run begins failing. The agent itself still works correctly in the test pane and in production.

**What should the team check first?**

- **A.** Whether evaluation results passed their retention window
- **B.** Whether the test set exceeded the maximum number of test cases
- **C.** Whether the agent's primary AI model was retired
- **D.** Whether an admin turned off the Microsoft Copilot Studio connector

**Answer:** D

Agent evaluations that use user authentication require access through the Microsoft Copilot Studio connector. If an admin turns off that connection, tests can't be run with the evaluation tool.

**Source:** `['ANLY-078']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-results

### Q039 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> A maker working entirely inside the Copilot Studio app in Microsoft Teams is asked to export conversation transcripts held in Dataverse for a compliance review.

**What must they do?**

- **A.** Export from the Power Platform admin center, because Teams has no transcript access at all
- **B.** Nothing special - Dataverse transcripts download from the Teams app the same way
- **C.** Use the Copilot Studio web app - Dataverse conversation transcripts can't be downloaded from the Teams app
- **D.** Request Bot transcript viewer privileges, which unlock the download in Teams

**Answer:** C

You can't download conversation transcripts in Dataverse on the Copilot Studio app in Teams. Reviewing and exporting Dataverse transcripts requires the Copilot Studio web app. Session chat transcripts can still be downloaded from the Teams app.

**Source:** `['ANLY-093']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

### Q040 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Hard*

> An operations lead reviews an agent flow dashboard and reports the total Runs count looks far lower than the team's own records. Several of the flows are co-owned by two teams.

**What explains the discrepancy?**

- **A.** The dashboard only counts runs from the last 28 days
- **B.** Runs are sampled rather than counted in full
- **C.** Co-owned flows report under the co-owner's environment instead
- **D.** Runs associated with co-owned or shared flows are unsupported and are excluded from the Runs count, Run error rate, and Flow runs trend

**Answer:** D

Flow runs associated with co-owned or shared flows are unsupported. They aren't included in the total Runs count, the Run error rate, or the Flow runs trend visualizations.

**Source:** `['ANLY-103']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-manage-monitor

### Q041 — Monitor agents by using Application Insights
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> A Power Platform administrator with tenant-level admin rights tries to configure agent telemetry to Application Insights and finds they cannot complete the configuration.

**What else is required?**

- **A.** Bot transcript viewer privileges on each agent
- **B.** Nothing further - tenant-level administrator rights are sufficient
- **C.** A separate Azure subscription owner role
- **D.** An administrator role in the Dataverse environment, in addition to the tenant-level role

**Answer:** D

Configuring agent telemetry requires tenant-level Power Platform administrator or Dynamics 365 administrator privileges, PLUS an administrator role in the Dataverse environment.

**Source:** `['ANLY-107']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/telemetry-overview

### Q042 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Easy*

> A maker without Bot transcript viewer privileges opens the Analytics page and cannot find the drill-down lists their colleague described.

**Why?**

- **A.** Drill-down requires at least 50 sessions before it appears
- **B.** Drill-down lists are only available to makers with Bot transcript viewer privileges
- **C.** Drill-down is only available in the Copilot Studio web app
- **D.** Drill-down requires the agent to be published to a production environment

**Answer:** B

The drill-down list feature is only available for makers with Bot transcript viewer privileges.

**Source:** `['ANLY-026']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-drill-down-lists

### Q043 — Create and monitor agent flows
*Bank: bank1 · Domain: FLOW · Difficulty: Easy*

> A maker runs an agent flow successfully and immediately checks the flow's savings figure, which has not changed.

**What should they do?**

- **A.** Enable savings tracking, which is off by default
- **B.** Re-run the flow, because savings only accrue on successful reruns
- **C.** Wait - it can take up to one hour for a run to be accounted for in the savings amount
- **D.** Check the run in Dataverse, because savings never include agent-initiated runs

**Answer:** C

It can take up to one hour for a run to be accounted for in the savings amount of its agent flow.

**Source:** `['FLOW-005']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-savings

### Q044 — Evaluate security and governance
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> A compliance team asks why enhanced reporting is unavailable for a set of agents, even though analytics is otherwise working.

**What setting is most likely responsible?**

- **A.** The agents use maker-provided credentials
- **B.** Conversation transcripts and their metadata are not allowed to be saved in Dataverse
- **C.** The agents are published to an unauthenticated channel
- **D.** The environment is not a managed environment

**Answer:** B

Allowing conversation transcripts and their associated metadata to be saved in Dataverse is required for enhanced reporting.

**Source:** `['SEC-018']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-transcript-controls

### Q045 — Evaluate security and governance
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> A security review of the agent runtime view flags an autonomous agent. The maker insists nothing is misconfigured because the agent works exactly as designed.

**What is the runtime view reporting?**

- **A.** The agent has no Entra Agent ID
- **B.** The agent is public rather than requiring end-user authentication, which might expose sensitive data to attackers or unauthorized individuals
- **C.** The agent's connector permissions have not been re-validated against DLP
- **D.** The agent exceeded its tool limit and routing may be degraded

**Answer:** B

The runtime view component indicates whether the agent requires end-user authentication or is public. A public autonomous agent might expose sensitive data, so the status reflects a possible threat vector that might require the maker's attention.

**Source:** `['SEC-030']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-agent-runtime-view

### Q046 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A maker is configuring on-behalf-of authentication for a custom connector. Weeks later they need the Azure client secret again to configure a second environment, and cannot find it recorded anywhere.

**What must they do?**

- **A.** Export it from the custom connector definition in Power Apps
- **B.** Retrieve it from the app registration's Certificates and secrets blade
- **C.** Reset the service principal, which reissues the original secret
- **D.** Create a new client secret - Azure shows the secret only once and it can't be retrieved later

**Answer:** D

Azure only shows you the client secret once, and you can't retrieve it later. If you lose it, you need to create a new client secret.

**Source:** `['TOOL-003']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-custom-connector-on-behalf-of

### Q047 — Plan an agent solution
*Bank: bank1 · Domain: TRBL · Difficulty: Hard*

> An agent in an environment licensed solely through message-based functionality is hitting throttling limits. The team asks Microsoft Support for a rate-limit increase.

**What is the likely outcome?**

- **A.** They are not eligible - only pay-as-you-go environments can be considered for a rate-limit increase
- **B.** The increase is granted automatically once support verifies the throttling
- **C.** The increase is granted, but only for the current billing period
- **D.** Support will migrate the environment to pay-as-you-go as part of the request

**Answer:** A

Only pay-as-you-go environments are eligible. Environments operating solely on message-based functionality aren't eligible for consideration, and even for eligible environments the increase isn't guaranteed - each request is reviewed against eligibility and current licensing.

**Source:** `['TRBL-050']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/licensing/throttling-errors-agents

### Q048 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A platform team manages dozens of environments and wants every pipeline across an environment group to use the same settings without configuring each one by hand.

**What should they use?**

- **A.** Managed environment enforcement, which standardizes pipeline settings automatically
- **B.** The default deployment pipeline rule for environment groups
- **C.** A custom pipelines host with a shared template solution
- **D.** An Azure DevOps build tool task applied to each environment

**Answer:** B

The default deployment pipeline rule for environment groups exists to implement standardized ALM at scale. It ensures consistent pipeline settings and configurations across an entire group, simplifying governance and compliance.

**Source:** `['ALM-038']` · https://learn.microsoft.com/en-us/power-platform/alm/default-deployment-pipeline-rule-for-environment-groups

### Q049 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A maker adds SharePoint lists as a knowledge source. The business wants 14 lists connected, and two of the lists hold roughly 60,000 rows each.

**What should the maker expect?**

- **A.** All 14 connect normally; row count has no documented effect
- **B.** Only 10 lists can be selected at a time, and lists above 35,000 rows affect quality and latency
- **C.** SharePoint lists are not supported as a knowledge source at all
- **D.** Lists are capped at 35,000 rows and larger lists are rejected outright

**Answer:** B

You can select up to 10 lists at a time, and for best results use up to 10 lists per agent. Lists containing more than 35,000 rows affect quality and latency.

**Source:** `['KNOW-088']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint

### Q050 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An agent in classic orchestration mode needs to reach five separate Dataverse knowledge sources. The maker finds they cannot add the fourth.

**What is the constraint, and what changes it?**

- **A.** Classic mode does not support Dataverse knowledge sources at all
- **B.** Classic mode allows two Dataverse knowledge sources with up to 15 tables each; generative mode is unlimited
- **C.** Dataverse knowledge sources are capped at three in every mode
- **D.** The cap is 15 knowledge sources, so the maker has hit a different limit

**Answer:** B

Generative mode allows unlimited Dataverse knowledge sources. Classic mode allows two, with up to 15 tables per knowledge source.

**Source:** `['KNOW-112']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio

### Q051 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A maker removes several outdated documents from a file group and later needs one of them back, along with the group's description and instructions.

**What is the situation?**

- **A.** Only the indexed data was removed; the metadata is retained
- **B.** Deletion also removed the name, description, instructions and indexed data, and it can't be undone - the files must be re-uploaded
- **C.** The group reverts to its previous saved state if Save was not pressed
- **D.** The files are recoverable from the environment's recycle bin for 30 days

**Answer:** B

Deleting the files also deletes the name, description, instructions and indexed data from the agent. The action is permanent and can't be undone - restoring means re-uploading. Every change to a file group must be saved using the Save button.

**Source:** `['KNOW-131']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-file-groups

### Q052 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Easy*

> A maker wants to tidy an agent by removing the built-in topics that handle escalation and ending a conversation, because the design never uses them.

**Can they?**

- **A.** Yes, but only from the code editor
- **B.** Yes, provided the agent uses generative orchestration
- **C.** No, but they can be removed by exporting the agent as an unmanaged solution
- **D.** No - system topics are built in and added automatically, and can't be deleted

**Answer:** D

System topics are built into Copilot Studio and added to an agent automatically when it is created. They handle common events like escalation and ending a conversation, and they can't be deleted.

**Source:** `['TOPC-025']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-topics

### Q053 — Manage variables
*Bank: bank1 · Domain: TOPC · Difficulty: Hard*

> A topic collects an appointment date and a duration, then redirects to a second topic that needs both. In testing, the second topic receives neither value, though a text variable passed in the same redirect arrives correctly.

**What is the cause?**

- **A.** Variables based on Date and time, Duration, Multiple choice options, or a custom entity can't be passed between topics
- **B.** Redirects pass only the first variable in the list
- **C.** The second topic needs its inputs marked as global variables
- **D.** Date and Duration variables must be converted with Power Fx before any redirect

**Answer:** A

You can't pass variables based on entities of type Date and time, Duration, or Multiple choice options, or variables based on a custom entity, between topics.

**Source:** `['TOPC-113', 'TOPC-108']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables

### Q054 — Add REST APIs to an agent
*Bank: bank1 · Domain: MISC · Difficulty: Medium*

> A team has an OpenAPI v3 specification in JSON for an internal service and wants to add it as a REST API tool.

**What happens?**

- **A.** It must first be converted to YAML
- **B.** The v3 specification is automatically translated to v2, which is the required format
- **C.** The upload is rejected - only v2 specifications are accepted
- **D.** It is accepted natively, because both v2 and v3 are fully supported

**Answer:** B

The OpenAPI specification must be a JSON file in v2 format. If you submit a v3 specification, the creation process automatically translates it to v2.

**Source:** `['MISC-038']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-rest-api

### Q055 — Add REST APIs to an agent
*Bank: bank1 · Domain: MISC · Difficulty: Medium*

> A REST API tool is configured with API key authentication. A maker asks whether they need to store the organization's API key in the agent.

**What is the correct answer?**

- **A.** No key is needed; REST API tools inherit the agent's Entra Agent ID permissions
- **B.** Yes - the maker enters the key once and all users share it
- **C.** No - at runtime the agent prompts the user to authenticate, and the user provides the key
- **D.** Yes, but it must be held in an environment variable rather than the tool definition

**Answer:** C

With API key authentication on a REST API tool, at runtime the agent prompts the user to authenticate. The user provides an API key and the agent connects using that key.

**Source:** `['MISC-040']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-rest-api

### Q056 — Add REST APIs to an agent
*Bank: bank1 · Domain: MISC · Difficulty: Hard*

> After uploading a specification, a maker finds the generated input and output descriptions unhelpful and wants to improve how the orchestrator uses the tool.

**What can they change?**

- **A.** Only the tool's top-level name and description
- **B.** Nothing - the entire page is read-only and the specification must be re-uploaded
- **C.** The descriptions of the inputs and outputs, but not the values themselves
- **D.** Both the values and the descriptions, from the tool details page

**Answer:** C

The input and output values are pulled directly from the uploaded API specification and can't be changed, but the descriptions of the inputs and outputs can be updated.

**Source:** `['MISC-044']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-rest-api

### Q057 — Plan channels and deployment
*Bank: bank1 · Domain: MISC · Difficulty: Medium*

> A maker configures suggested prompts for an agent destined for Microsoft Teams, then tests the agent in Copilot Studio and cannot see them anywhere.

**What is happening?**

- **A.** The maker exceeded the limit of 10, so none are displayed
- **B.** Suggested prompts only render for authenticated users
- **C.** Suggested prompts require the agent to be published before they render anywhere
- **D.** Suggested prompts are for Teams and Microsoft 365 Copilot, appear on the welcome page before a chat starts, and can't be seen or used in the Copilot Studio test pane

**Answer:** D

You can configure up to 10 suggested prompts for agents used in Teams or Microsoft 365. They appear on the agent's welcome page before a new chat, and can't be seen or used when testing the agent in Copilot Studio.

**Source:** `['MISC-050', 'MISC-049']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started

### Q058 — Plan an agent solution
*Bank: bank1 · Domain: MISC · Difficulty: Easy*

> A developer evaluating Copilot Studio on a trial licence builds an agent, tests it successfully in the test chat panel, and then tries to make it available to colleagues.

**What will they find?**

- **A.** Publishing works for 30 days, after which the agent is unpublished automatically
- **B.** Publishing works but is limited to the Teams channel
- **C.** Publishing requires the agent to be added to a managed environment first
- **D.** The agent can't be published on a trial licence

**Answer:** D

A trial licence gives access to create agents and to test them using the test chat panel, but the agent can't be published.

**Source:** `['MISC-052']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started

### Q059 — Monitor agents by using Application Insights
*Bank: bank1 · Domain: ANLY, KNOW · Difficulty: Easy*

> A team wants to send agent telemetry to Application Insights and asks what has to exist before they start.

**What is required of the tenant?**

- **A.** An active Azure subscription, and the roles needed to create Azure resources
- **B.** Only a Power Platform administrator role
- **C.** An existing Log Analytics workspace shared across the tenant
- **D.** Nothing - Application Insights is provisioned automatically with the environment

**Answer:** A

To use Application Insights, the tenant requires an active Azure subscription and you need the necessary roles to create Azure resources.

**Source:** `['KNOW-028', 'ANLY-107']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/generative-answers/agent-response-filtered-by-responsible-ai · https://learn.microsoft.com/en-us/microsoft-copilot-studio/telemetry-overview

### Q060 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Hard*

> A maker adds a variable that counts how often user input failed to match any topic, and finds it never increments in a topic triggered by a phrase.

**Why?**

- **A.** Fallback counting requires generative orchestration to be turned off
- **B.** The variable resets at the start of every topic
- **C.** The variable only counts failures across sessions, not within one
- **D.** The variable is supported only when the trigger is On Unknown Intent

**Answer:** D

The variable counts the times a topic couldn't be matched to the user input, and it is supported only if the trigger is On Unknown Intent.

**Source:** `['TOPC-038']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

### Q061 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Hard*

> An agent grounded in a large document set answers well in the web test pane. Published to Microsoft Teams, users report that long source titles are cut off and that some answers appear to lose references entirely.

**What is happening?**

- **A.** Teams doesn't support citations from Azure AI Search knowledge sources
- **B.** Teams shows at most 20 citations and shortens titles to about 80 characters and snippets to about 480
- **C.** Citations are dropped whenever the response exceeds the adaptive card size limit
- **D.** The agent must be republished to Teams after each knowledge source change

**Answer:** B

Citation display varies by channel. Microsoft Teams has stricter limits than other channels: a response shows at most 20 citations and any beyond that are dropped, each citation title is limited to about 80 characters, and each snippet to about 480.

**Source:** `['CHAN-050']` · https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

### Q062 — Configure generative answers node
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An agent is instructed to 'respond only in JSON'. Users report that it sometimes says it cannot find any information, even for questions the knowledge source clearly answers. Asking the same question again occasionally works.

**What is the most likely cause?**

- **A.** The rigid output format is suppressing citation markers, and without a citation the agent withholds the answer as though it found nothing
- **B.** The knowledge source index is refreshing on a schedule and is intermittently empty
- **C.** The agent exceeded its knowledge source limit and drops sources at random
- **D.** Generative answers falls back to general AI knowledge, which has no data on the topic

**Answer:** A

When the model generates a correct answer but doesn't include a citation, the agent withholds the answer and responds as though it didn't find any information. Because models don't always include citations, this is intermittent. Instructions that force a rigid output format, such as 'respond only in JSON', can suppress the citation markers the agent needs.

**Source:** `['KNOW-159', 'KNOW-160']` · https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

### Q063 — Configure generative answers node
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A maker replaces the default Message node with an Adaptive Card so generative answers render in the company's house style. References stop appearing.

**Why, and what is required?**

- **A.** The agent needs Allow ungrounded responses turned off to restore citations
- **B.** Citations require the default Message node and cannot be reproduced elsewhere
- **C.** Adaptive Cards can't display citations on any channel
- **D.** Customized responses don't get citations automatically - the maker must render citations themselves

**Answer:** D

If you customize the generative answer response - for example by clearing a Message node and rendering the answer through a variable or an Adaptive Card - citations aren't added automatically and you need to include citation rendering yourself. In Teams, citation links are returned automatically only for answers that aren't customized.

**Source:** `['KNOW-158']` · https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

### Q064 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A maker in classic orchestration mode needs the agent to reference eight public websites and twelve SharePoint URLs.

**What will they find?**

- **A.** Public websites are unlimited; only SharePoint is capped
- **B.** Both are capped at 25 regardless of mode
- **C.** Classic mode supports neither - both require generative orchestration
- **D.** Classic mode allows four public URLs and four SharePoint URLs per generative answers node; generative mode raises both to 25

**Answer:** D

Public website knowledge supports 25 websites in generative mode and four public URLs in classic mode. SharePoint supports 25 URLs in generative mode and four URLs per generative answers topic node in classic mode.

**Source:** `['KNOW-161', 'KNOW-162']` · https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

### Q065 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> A team needs the agent to reference one specific deep product page, not a section of a site. Plain public website knowledge is not returning it.

**What is the constraint, and what fixes it?**

- **A.** Public website knowledge requires the site to be owned and verified by the organization
- **B.** The page must be added as an uploaded file instead
- **C.** Public websites support a maximum two subpages depth and no direct pages; Bing Custom Search supports direct pages
- **D.** Direct pages need the page to be added as an Azure AI Search index entry

**Answer:** C

Public websites allow a maximum of two subpages depth and no direct pages. Bing custom search allows one configuration ID, up to 400 URLs, custom ranking, the same two-subpage depth limit, and it does support direct pages.

**Source:** `['KNOW-163']` · https://learn.microsoft.com/microsoft-copilot-studio/guidance/retrieval-augmented-generation

### Q066 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> A SharePoint-grounded agent returns thin summaries for a set of large policy documents, though the files are indexed and the user has access.

**What limit is most likely involved?**

- **A.** Classic mode limits snippets to four per response
- **B.** SharePoint knowledge caps every file at 7 MB regardless of licensing
- **C.** Security trimming is removing part of each document
- **D.** Matching files up to 15 MB are retrieved for detailed snippets; Enhanced Search Results raises the maximum file size to 200 MB

**Answer:** D

For SharePoint and OneDrive knowledge, matching files up to 15 MB are retrieved to get detailed snippets to summarize. The premium Enhanced Search Results feature uses tenant Microsoft Graph grounding, improving quality and raising the maximum file size to 200 MB.

**Source:** `['KNOW-164']` · https://learn.microsoft.com/microsoft-copilot-studio/guidance/retrieval-augmented-generation

### Q067 — Connect to Azure AI Search
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A maker is asked to connect an agent to three separate Azure AI Search vector indexes covering different document sets.

**What should they expect?**

- **A.** Indexes are unlimited but each requires its own connection
- **B.** Only one vector index can be added to the connection
- **C.** Multiple indexes are supported only with Entra ID Integrated authentication
- **D.** Up to four indexes can be added in generative mode

**Answer:** B

When configuring Azure AI Search as a knowledge source, you enter the vector index to be used, and only one vector index can be added.

**Source:** `['KNOW-165']` · https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search

### Q068 — Connect to Azure AI Search
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> After a maker typed an Azure AI Search endpoint URL and API key directly into the knowledge source form, the Azure AI Search dialog now fails to load for every agent in the environment. There is no option to delete the connection.

**What happened and how is it recovered?**

- **A.** A faulty environment-level data connection was stored; recover by resetting the agent's external access, or deleting and recreating the affected agent
- **B.** The API key expired; generate a new key and the dialog recovers
- **C.** The environment hit its data connection limit; delete an unused connection
- **D.** The index was deleted in Azure; recreate the index and the dialog recovers

**Answer:** A

Azure AI Search must be added through a formal data connection. Manual endpoint and API key entry can store a faulty data connection that prevents the dialog from loading, and Copilot Studio provides no interface to delete a broken one. Because data connections are environment-level, the issue can affect all agents. Recovery is resetting the agent's external access or deleting and recreating the agent - then re-adding with Entra ID authentication rather than API keys.

**Source:** `['KNOW-167', 'KNOW-166']` · https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search

### Q069 — Connect to Azure AI Search
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> An Azure AI Search index contains both a custom `source_url` field and the standard `metadata_storage_path` field. The team wants to know which one the agent will cite.

**Which field does Copilot Studio use?**

- **A.** metadata_storage_path, because Copilot Studio interprets that field as the citation when it is present
- **B.** source_url, because custom URL fields take precedence over system fields
- **C.** Neither - the citation field must be mapped explicitly in the configuration dialog
- **D.** Both, producing two citations per result

**Answer:** A

When the metadata_storage_path field is included in the index, Copilot Studio interprets that field as the citation. If that field doesn't exist, Copilot Studio uses whatever field contains a complete URL link.

**Source:** `['KNOW-168']` · https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search#return-citations

### Q070 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A team is starting a new Power Platform project and asks what to set up before any development begins.

**What is the minimum, and the first decision?**

- **A.** Enable managed environments on the development environment before creating a solution
- **B.** Decide single unmanaged solution versus modular multi-solution design, then create a blank solution and a custom publisher for it
- **C.** Create the managed solution first so production is protected from the start
- **D.** Create the pipeline first, because it determines the solution structure

**Answer:** B

Decide whether to consolidate all customizations into a single unmanaged solution or adopt a modular design with multiple solutions, and whether each is developed in its own isolated Dataverse development environment. At a minimum, create a new blank solution and a custom publisher for that solution.

**Source:** `['ALM-110']` · https://learn.microsoft.com/en-us/power-platform/alm/new-project-alm

### Q071 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> Uninstalling a managed solution fails with a message that the solution cannot be deleted due to dependencies from other components in the system.

**What is the cause?**

- **A.** The environment is not a managed environment
- **B.** Components in the solution are referenced by other solutions above it in the layer stack
- **C.** The solution contains a form that is the only fallback form for its table
- **D.** The solution was exported as unmanaged and can't be uninstalled

**Answer:** B

This issue occurs when the solution contains components referenced by other solutions on top of it in the layer stack.

**Source:** `['ALM-103', 'ALM-101']` · https://learn.microsoft.com/en-us/power-platform/alm/form-alm-faq

### Q072 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> An agent published to Microsoft Teams never prompts users to sign in, but after a change it suddenly starts prompting.

**What most likely changed?**

- **A.** Single sign-on was disabled at the tenant level
- **B.** Microsoft Entra ID authentication was switched from automatic to manual configuration
- **C.** The agent was moved to an unauthenticated channel
- **D.** The agent now requires an expanded scope - Teams authentication otherwise identifies the user with no prompt

**Answer:** D

The configuration automatically sets up Microsoft Entra ID authentication for Teams with no manual configuration. Because Teams authentication itself identifies the user, users aren't prompted to sign in while in Teams, unless the agent requires an expanded scope.

**Source:** `['SEC-050']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

### Q073 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> SolutionA 1.0 is imported and sets an Account column to 30 characters. SolutionB is then imported and sets it to 50. SolutionA patch 1.0.1.0 is imported, setting 35. The team then uninstalls SolutionB.

**What is the column length after the uninstall?**

- **A.** 35 characters, from the SolutionA patch
- **B.** 50 characters, because SolutionB's value persists after uninstall
- **C.** 30 characters, reverting to the SolutionA base solution
- **D.** The column is removed, because the layer that defined 50 is gone

**Answer:** A

The base solution gives 30. SolutionB gives 50. Importing the patch doesn't change the visible value while SolutionB is still the top layer, so it stays 50. When SolutionB is uninstalled, the value falls through to the highest remaining layer - the SolutionA 1.0.1.0 patch - giving 35.

**Source:** `['ALM-020', 'ALM-021', 'ALM-022', 'ALM-023']` · https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates

### Q074 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A maker deploys solution version 1.0.0.1 to test through a pipeline. They then make further changes in development without incrementing the version, and run the production stage of the same pipeline.

**What is deployed to production?**

- **A.** The later changes only, applied as a patch on top of the tested version
- **B.** Nothing - the pipeline blocks the run because the version wasn't incremented
- **C.** The same solution that was deployed to test - the later changes are not included
- **D.** The current state of the development environment, including the later changes

**Answer:** C

Deployment stages must be completed in order, and after you deploy to test, the same solution that was deployed is then deployed to production - even if you afterward made changes to the solution without incrementing the version.

**Source:** `['ALM-154']` · https://learn.microsoft.com/en-us/power-platform/alm/run-pipeline

### Q075 — Add tools to agents
*Bank: bank1 · Domain: MCP · Difficulty: Medium*

> An MCP server exposes twelve tools. After connecting, an agent shows only nine, and the three missing ones are confirmed present and working on the server.

**What is the most likely cause?**

- **A.** The missing tools use reference type inputs in their schema, which are unsupported and filtered from the list
- **B.** The Allow all toggle was turned off, so new tools arrive disabled
- **C.** The agent exceeded its tool limit and the excess was dropped
- **D.** The tools require OAuth and the connection uses an API key

**Answer:** A

Tools with reference type inputs in the schema are filtered from the list of available tools for an MCP server. Reference type inputs and outputs aren't supported.

**Source:** `['MCP-085']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-troubleshooting

### Q076 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A team ships a managed solution to production. Six months later they uninstall it to retire the feature. The solution had added two custom tables, and one custom column on the existing Account table.

**What is lost?**

- **A.** Only the schema is removed; data is retained until the tables are manually deleted
- **B.** Data in the two custom tables AND data in the custom column on Account, because both were part of the managed solution
- **C.** Only the two custom tables - a column on an existing table is left in place with its data
- **D.** Nothing - uninstalling removes the components but preserves all data

**Answer:** B

When a managed solution is deleted, all customizations and extensions included with it are removed, and data is lost: data stored in custom tables that are part of the managed solution, and data stored in custom columns that are part of the managed solution on other tables that aren't part of the managed solution.

**Source:** `['ALM-237']` · https://learn.microsoft.com/power-platform/alm/solution-concepts-alm

### Q077 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A maker deletes an unmanaged solution from a development environment, expecting the customizations inside it to be removed as well.

**What actually happens?**

- **A.** The customizations are moved to a system-generated recovery solution for 30 days
- **B.** The deletion is blocked until the solution is empty
- **C.** The customizations and their data are removed, as with a managed solution
- **D.** Only the solution container is deleted - the customizations remain in effect and belong to the default solution

**Answer:** D

When an unmanaged solution is deleted, only the solution container of any customizations included in it is deleted. All the unmanaged customizations remain in effect and belong to the default solution.

**Source:** `['ALM-238', 'ALM-237']` · https://learn.microsoft.com/power-platform/alm/solution-concepts-alm

### Q078 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A team wants to validate the managed version of their solution before releasing it, and proposes importing it back into the development environment where it was authored.

**What should you tell them?**

- **A.** You can't import a managed solution into the environment containing the originating unmanaged solution - testing needs a separate environment
- **B.** It works, but the managed solution silently becomes unmanaged on import
- **C.** It works only if the unmanaged solution is deleted first
- **D.** It works, and is the recommended way to validate before release

**Answer:** A

You can't import a managed solution into the same environment that contains the originating unmanaged solution. To test a managed solution, you need a separate environment to import it into.

**Source:** `['ALM-235']` · https://learn.microsoft.com/power-platform/alm/solution-concepts-alm

### Q079 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A component inside a managed solution in production needs a change. A maker opens the managed solution and finds the component is not editable.

**What is the correct route, and what does it cost?**

- **A.** Add the component to an unmanaged solution to edit it - which creates a dependency that blocks uninstalling the managed solution until it is removed
- **B.** Export the managed solution as unmanaged, edit it, and re-import
- **C.** Edit it directly after enabling customization on the environment
- **D.** Managed components can never be edited under any circumstances

**Answer:** A

You can't edit components directly within a managed solution. To edit managed components, first add them to an unmanaged solution. Editing a managed component creates a dependency between your unmanaged customizations and the managed solution, and while that dependency exists the managed solution can't be uninstalled.

**Source:** `['ALM-236', 'ALM-234']` · https://learn.microsoft.com/power-platform/alm/solution-concepts-alm · https://learn.microsoft.com/power-platform/alm/solution-packager-tool

### Q080 — Implement ALM for agents
*Bank: bank1 · Domain: ALM · Difficulty: Easy*

> A maker exports a solution, imports it to test, and finds a change they definitely made is missing.

**What is the most likely cause?**

- **A.** Unmanaged exports omit recently modified components by design
- **B.** The version number wasn't incremented, so the import was skipped
- **C.** The solution checker removed the component during export
- **D.** The change wasn't published - only published components are exported

**Answer:** D

When you export an unmanaged solution, only published components are exported. Selecting Publish all changes before exporting is recommended to make sure all components are included.

**Source:** `['ALM-239']` · https://learn.microsoft.com/power-apps/maker/data-platform/export-solutions

### Q081 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An agent grounded on SharePoint returns nothing for one user but works for their colleague. No error is displayed.

**What should you check first?**

- **A.** Whether the agent has been republished
- **B.** Whether the SharePoint site uses modern pages
- **C.** Whether the user has read permissions - Copilot Studio respects Microsoft 365 security trimming
- **D.** Whether the file exceeds the size limit

**Answer:** C

Copilot Studio respects Microsoft 365 security trimming. A user needs at minimum read permissions on the relevant sites and files, or no search results are returned - and nothing is thrown to indicate why.

**Source:** `['KNOW-046', 'KNOW-048']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

### Q082 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A maker cannot add any Dataverse table as a knowledge source. The tables exist and they have data access.

**What is the most likely cause?**

- **A.** Dataverse search is not turned on in the environment
- **B.** The agent uses classic orchestration
- **C.** More than 15 tables were selected
- **D.** The tables are virtual tables

**Answer:** A

Copilot Studio agents require Dataverse search to use Dataverse tables or files as a knowledge source. If they cannot be added, the administrator must turn on Dataverse search in the environment.

**Source:** `['KNOW-056', 'KNOW-066']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload

### Q083 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> A maker adds an internal wiki and a SharePoint site as public website knowledge sources. Neither returns results.

**Why?**

- **A.** URLs requiring authentication, and URLs not indexed by Bing, are unsupported
- **B.** The URLs exceed two levels of depth
- **C.** Public website sources must be added at topic level
- **D.** Public website sources are capped at four

**Answer:** A

URLs that point to a website requiring authentication, or that are not indexed by Bing, are not supported as public website knowledge. Microsoft gives wikis and SharePoint sites as the examples, precisely because they require authentication.

**Source:** `['KNOW-079', 'KNOW-080']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website

### Q084 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A policy document used as uploaded knowledge is revised in SharePoint. Users report the agent still quotes the old wording.

**Why?**

- **A.** Sensitivity labels are blocking the new version
- **B.** Indexing takes up to two days
- **C.** Uploaded files are static and must be reloaded after a change
- **D.** The agent must be republished

**Answer:** C

With the upload files method, files are static. If a file is updated, the updates are not reflected until the file is reloaded.

**Source:** `['KNOW-098']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data

### Q085 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An organization disables cross-region data movement in an environment. Generative answers stop working.

**What is the documented remedy if the setting cannot be re-enabled?**

- **A.** Request a regional exemption from Microsoft
- **B.** Move the agent to another environment
- **C.** Add a Dataverse knowledge source instead
- **D.** Turn off generative AI features such as generative orchestration, web search and AI general knowledge

**Answer:** D

If data movement across regions is disabled where generative AI features need it, those features are not available. If the setting cannot be turned on, the documented step is to modify the agent's behavior by turning off generative AI features.

**Source:** `['KNOW-030', 'KNOW-031']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/generative-answers/generative-ai-not-available

### Q086 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Easy*

> A maker wants an agent to follow links inside a registered PDF to reach related policies.

**What happens?**

- **A.** Linked documents are crawled automatically to one level
- **B.** Hyperlinks inside a registered document are not crawled or followed
- **C.** Links are followed only for SharePoint content
- **D.** Links are followed if the agent uses generative orchestration

**Answer:** B

The agent grounds only on the content of the files and pages registered as a knowledge source. Hyperlinks contained inside a registered document or page are not crawled or followed.

**Source:** `['KNOW-093']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint

### Q087 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A team adds scanned images of a policy as uploaded knowledge. The agent never uses them.

**Why?**

- **A.** Images must be under 7 MB
- **B.** Image files cannot be used as uploaded documents - images are supported only when embedded in a PDF
- **C.** Images require code interpreter
- **D.** Images must be added at topic level

**Answer:** B

Image, video, executable and audio files cannot be used as uploaded documents, and images are only supported when they are embedded in PDF files.

**Source:** `['KNOW-069', 'KNOW-070']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload

### Q088 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> An architect plans to expose a Finance and Operations dataset and a third-party virtual table to an agent.

**What is the constraint?**

- **A.** Only virtual tables associated with the Finance and Operations data provider are selectable
- **B.** Virtual tables require code interpreter
- **C.** Virtual tables cannot be used as knowledge at all
- **D.** Virtual tables count double against the 15-table limit

**Answer:** A

When adding Dataverse virtual tables as knowledge, only virtual tables associated with the Finance and Operations data provider are available for selection. Any other data provider is not.

**Source:** `['KNOW-065']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

### Q089 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> A maker adds a sensitivity-labeled policy document as knowledge. The portal shows it as ready for use, but the agent never answers from it.

**What is happening?**

- **A.** The agent needs republishing
- **B.** The file is under the 4 KB threshold
- **C.** Labeled and password-protected documents cannot be indexed - they show as ready for use but never provide responses
- **D.** Indexing is still running

**Answer:** C

Documents protected with sensitivity labels or password protection cannot be indexed. If added, they show as ready for use but do not provide responses.

**Source:** `['KNOW-099', 'KNOW-105']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data

### Q090 — Configure generative answers node
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An architect wants an agent on generative orchestration to use Bing Custom Search.

**What is required?**

- **A.** Embed it inside a generative answers node in a topic, since generative orchestration does not support it directly
- **B.** Nothing - generative orchestration supports it directly
- **C.** Switch the agent to classic orchestration
- **D.** Add it at agent level and raise the source limit to 25

**Answer:** A

Generative orchestration does not support custom data or Bing Custom Search as knowledge sources. To use them you must embed them inside a generative answers node in a topic.

**Source:** `['KNOW-121']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio

### Q091 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> An agent already has 25 website knowledge sources. A maker wants to add uploaded files as well.

**What happens to the source count?**

- **A.** Each uploaded file replaces a website source
- **B.** The upload is rejected - the agent is at the limit
- **C.** The limit rises to 50
- **D.** Uploaded files are not part of the 25 knowledge source search limit

**Answer:** D

Files uploaded to the agent are not part of the 25 knowledge source search limit.

**Source:** `['KNOW-120']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio

### Q092 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: MISC · Difficulty: Hard*

> A team uses a regular user account as a delegate for deployments because it is simpler than a service principal. Deployments of apps and flows succeed, but a plug-in assembly fails to deploy.

**Why?**

- **A.** Lower permission security roles cannot deploy plug-ins and other code components
- **B.** Plug-ins require a managed environment
- **C.** Regular users cannot be delegates
- **D.** Plug-ins must be deployed before other components

**Answer:** A

Regular users, including service accounts, can serve as delegates and are simpler to configure than service principals - but lower permission security roles cannot deploy plug-ins and other code components.

**Source:** `['MISC-019', 'MISC-020']` · https://learn.microsoft.com/en-us/power-platform/alm/delegated-deployments-setup

### Q093 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: MISC · Difficulty: Medium*

> An app is deployed to production and shared with a security group. A later version is deployed and the team expects updated sharing to apply.

**What actually happens?**

- **A.** Sharing is removed on redeployment
- **B.** Sharing updates with each deployment
- **C.** Sharing requires the Deployment Pipeline User role
- **D.** Sharing is applied only the first time an object is deployed and is not updated on later versions

**Answer:** D

Sharing is available the first time an object is deployed to the target environment. You cannot update sharing when new versions are deployed.

**Source:** `['MISC-022']` · https://learn.microsoft.com/en-us/power-platform/alm/delegated-deployments-setup

### Q094 — Plan an agent solution
*Bank: bank1 · Domain: MISC · Difficulty: Medium*

> A finance team wants a hard ceiling on one agent's spend before enforcement affects the whole environment.

**Where is that configured?**

- **A.** In the agent's Generative AI settings
- **B.** In the pipeline settings
- **C.** Power Platform admin center, Licensing > Copilot Studio > Manage Agents
- **D.** It is not possible per agent

**Answer:** C

You can set monthly consumption limits for individual agents in the Power Platform admin center, under Licensing > Copilot Studio > Manage Agents, capping credit usage before enforcement occurs.

**Source:** `['MISC-037']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management

### Q095 — Plan an agent solution
*Bank: bank1 · Domain: HARN · Difficulty: Medium*

> A team must automate an accounts payable process. The agent has to read invoices, match them to purchase orders, decide what to do when a match fails, and route exceptions for approval.

**Which harness should they build on?**

- **A.** The Copilot chat harness, because the process starts from Microsoft 365 Copilot
- **B.** The GitHub Copilot harness, because it reasons through a goal step by step, works natively with documents, and recovers when a step fails
- **C.** The standard harness, because agent flows give deterministic, repeatable automation
- **D.** Any harness - the harness affects billing only, not capability

**Answer:** B

The GitHub Copilot harness is built for reasoning-heavy, multistep business processes. It breaks a goal into steps, calls tools across connectors, knowledge, MCP and connected agents, natively creates and edits Word, Excel, PowerPoint and PDF files, and adjusts when a step fails.

**Source:** `['HARN-001', 'HARN-005']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

### Q096 — Plan an agent solution
*Bank: bank1 · Domain: HARN · Difficulty: Hard*

> A maker plans an onboarding agent that answers questions from SharePoint content for employees inside Microsoft 365 Copilot Chat. Later the business asks whether the same agent can be exposed to external customers on the public website.

**What is the constraint?**

- **A.** External publishing requires the agent to be moved to a managed environment
- **B.** External publishing requires generative orchestration to be turned off
- **C.** The Copilot chat harness publishes to internal teams only
- **D.** SharePoint knowledge sources cannot be used on externally published agents

**Answer:** C

Publishing reach is a harness property. The GitHub Copilot harness and the standard harness both reach internal teams or external customers. The Copilot chat harness publishes to internal teams only, so the agent would have to be rebuilt on another harness.

**Source:** `['HARN-004']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

### Q097 — Plan an agent solution
*Bank: bank1 · Domain: HARN · Difficulty: Medium*

> A maker reads a Microsoft Learn article describing topic authoring and the test panel. The note at the top says the article is based on the classic experience.

**What does that tell the maker about the article's scope?**

- **A.** It describes the standard harness, which is what classic was renamed to
- **B.** It describes the GitHub Copilot harness, which replaced classic
- **C.** It is out of date and its procedures no longer work
- **D.** It applies to every harness, because topics are harness-independent

**Answer:** A

Microsoft's own training states 'the classic, now called standard harness'. Topics, generative orchestration and the test panel are standard-harness procedures unless otherwise noted.

**Source:** `['HARN-006', 'HARN-001']` · https://learn.microsoft.com/en-us/training/modules/power-virtual-agents-bots/ · https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

### Q098 — Plan an agent solution
*Bank: bank1 · Domain: HARN · Difficulty: Medium*

> Finance asks which agents will be billed as Copilot Credits rather than against the existing Copilot Studio capacity.

**Which agents consume Copilot Credits?**

- **A.** Agents powered by the Copilot chat harness
- **B.** Agents and workflows powered by the GitHub Copilot harness
- **C.** Agent flows, regardless of harness
- **D.** Agents powered by the standard harness

**Answer:** B

The GitHub Copilot harness uses Copilot Credits for usage-based billing. Usage-based billing applies to using, building, testing and evaluating those agents.

**Source:** `['HARN-002']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

### Q099 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> An administrator wants to prevent new agents in one environment from receiving Microsoft Entra Agent IDs, as was previously possible.

**What should you tell the administrator?**

- **A.** Agent identities can be deleted after creation to achieve the same result
- **B.** The opt-out moved to the tenant level and must be set in the Microsoft Entra admin center
- **C.** The opt-out is still available but only for Government Community Cloud environments
- **D.** The environment-level opt-out was removed - since July 2026 all new agents must have Entra Agent IDs

**Answer:** D

Copilot Studio automatically creates a Microsoft Entra Agent ID for each new agent. Starting July 2026 all new agents must have Entra Agent IDs and automatic agent identity creation can no longer be opted out of.

**Source:** `['SEC-088', 'SEC-090']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

### Q100 — Evaluate security and governance
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> A security reviewer notices that an agent's Entra Agent ID carries API permissions for several Power Platform connectors. They ask whether a maker could use those scopes to reach data that a DLP policy blocks.

**What is the correct answer?**

- **A.** Only if Conditional Access is not configured for that connector
- **B.** No - the scopes are re-validated at runtime against Advanced Connector Policies and DLP and cannot bypass governance
- **C.** Only in environments where agent inventory is turned off
- **D.** Yes - API permissions on the agent identity take precedence over DLP

**Answer:** B

The scopes are only honored by the Power Platform connector runtime and are re-validated at runtime against Advanced Connector Policies (ACP) and DLP, so they can't be used to bypass governance policies. They exist for visibility and for Conditional Access targeting.

**Source:** `['SEC-091']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

### Q101 — Evaluate security and governance
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> An administrator must produce an audit of every Copilot Studio agent across the organization, and wants to query it programmatically rather than click through the portal.

**What should they use?**

- **A.** The agent inventory schema, available from the admin center, the API, or Azure Resource Graph
- **B.** The Power Platform admin center analytics export, filtered by environment
- **C.** A Dataverse query against the bot table in each environment
- **D.** The agent's Settings > Advanced > Metadata page, per agent

**Answer:** A

The agent inventory schema is designed to discover and audit all Copilot Studio agents in an organization, and it is reachable from the admin center, the API, or Azure Resource Graph.

**Source:** `['SEC-094', 'SEC-093']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-agent-inventory · https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

### Q102 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> An organization has agents built in 2025 and agents built after July 2026. The security team asks whether governance now applies inconsistently.

**What is true during the transition?**

- **A.** Governance applies only to agents that have an Entra Agent ID
- **B.** Agents created before the rollout keep app registrations, and governance works for both Agent IDs and App Registration IDs
- **C.** Older agents are migrated automatically at their next publish
- **D.** Older agents lose governance coverage until they are manually migrated

**Answer:** B

Existing agents created before the July 2026 rollout continue using app registrations and will be migrated in the future. Governance capabilities work for both Agent IDs and App Registration IDs during the transition period.

**Source:** `['SEC-089']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

### Q103 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Medium*

> A topic has grown into five separate condition nodes checking the same variable, and it is now hard to review.

**What should the maker use to simplify it?**

- **A.** A condition group, which manages multiple conditions in a single Message, Question or prompt node
- **B.** A child topic per branch, redirected from the parent
- **C.** Generative orchestration, which removes the need for conditions
- **D.** A Power Fx formula in a single Set variable value node

**Answer:** A

Condition groups let you author and manage multiple conditions in a single node, for Message nodes, Question nodes or prompts. They reduce branching and support table and graph views. Existing condition behavior is unchanged.

**Source:** `['TOPC-116']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-condition-groups

### Q104 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Hard*

> A maker wants an existing condition group to display as a table rather than a branching graph, but finds no toggle on the canvas.

**How is the conversion done?**

- **A.** Delete and recreate the condition group, choosing Table at creation
- **B.** Open the topic in the code editor and append _tv to the condition group ID
- **C.** Change the agent's authoring setting from Graph to Table
- **D.** Select the node and choose Convert to table from the node menu

**Answer:** B

Converting an existing condition group to Table view is a manual edit: open the code editor, locate the condition group ID, append _tv, then save and close. Changing the view doesn't affect behavior.

**Source:** `['TOPC-117']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-condition-groups

### Q105 — Configure agent response formatting
*Bank: bank1 · Domain: TOPC · Difficulty: Easy*

> A maker adds an image to a message node using a link to a file on the company intranet. The image does not appear when the agent is tested.

**What is the most likely cause?**

- **A.** The URL is not publicly accessible - the agent can't reach files on internal servers or behind authentication
- **B.** The image format is not supported by Copilot Studio
- **C.** Images can only be added through the Adaptive Card designer, not the message node
- **D.** The message node requires the image to be under a size limit that the file exceeds

**Answer:** A

Images and videos must be hosted at publicly accessible URLs. The agent can't reach files stored on internal servers or behind authentication. Workarounds are a SharePoint library with anonymous link sharing enabled, or Azure Blob Storage with public read access.

**Source:** `['TOPC-120', 'TOPC-119']` · https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

### Q106 — Configure agent response formatting
*Bank: bank1 · Domain: TOPC · Difficulty: Medium*

> A maker adds three product image cards to one message node, and wants the user to see all three side by side to compare them rather than paging through one at a time.

**What must the maker do?**

- **A.** Add each image to its own message node
- **B.** Nothing - multiple media cards display as a list by default
- **C.** Switch the cards to List view using the icon in the node's menu bar
- **D.** Rebuild the response as an Adaptive Card, because message nodes show one image only

**Answer:** C

When more than one media card is added to a single node, they display in a carousel by default, showing one card at a time with navigation arrows. Selecting a card and switching to List view displays all cards at once.

**Source:** `['TOPC-118']` · https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

### Q107 — Configure agent response formatting
*Bank: bank1 · Domain: TOPC · Difficulty: Medium*

> A maker wants a message to offer four suggested next steps, but users must still be able to type a question that is not on the list.

**Which construct fits?**

- **A.** Quick replies, which are suggestions the user can ignore
- **B.** A Question node with a closed list of four options
- **C.** A condition group with four branches
- **D.** An Adaptive Card with a Submit action

**Answer:** A

Quick replies are suggestions, not requirements - the user can ignore them and type freely at any time. A Question node enforces a choice and doesn't advance until the user selects or enters a recognized option.

**Source:** `['TOPC-123', 'TOPC-121']` · https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

### Q108 — Configure agent response formatting
*Bank: bank1 · Domain: TOPC · Difficulty: Hard*

> A maker writes three variations of a message. One variation mentions the submission deadline and the other two do not. Testing shows the deadline is sometimes missing.

**Why, and what is the rule?**

- **A.** Variations are only used when the primary message fails to render
- **B.** Copilot Studio randomly selects one variation each run, so every variation must carry the same core information
- **C.** The deadline variation is skipped because variations must be the same length
- **D.** Variations run in order, so the deadline appears only on the first run

**Answer:** B

Each time the node runs, Copilot Studio randomly selects one variation to send. Variations should deliver the same core information in different words, not introduce different guidance - if one variation mentions submission deadlines, all variations should.

**Source:** `['TOPC-122']` · https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

### Q109 — Configure agent response formatting
*Bank: bank1 · Domain: TOPC · Difficulty: Easy*

> A maker needs a quick reply that dials a support number instead of sending text to the agent.

**Is that possible, and how is the behavior set?**

- **A.** No - quick replies can only send a message to the agent
- **B.** Yes - the Text property is set to a tel: URI and the Type is left as default
- **C.** Yes - a quick reply's Type controls the action, and the options include making a call
- **D.** Yes, but only inside an Adaptive Card action set

**Answer:** C

Quick replies can send a message to the agent, open a URL, make a call, or send a hidden message. A standard Send a message reply has a Title (button text), a Text (the message sent), and a Type that controls the action.

**Source:** `['TOPC-121']` · https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

### Q110 — Plan reuseable agent components
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A team wants one escalation procedure written once and applied consistently across six agents. It calls no external service - it is guidance about how to handle a class of request.

**What should they build?**

- **A.** A topic, copied into each agent
- **B.** A child agent inside each of the six agents
- **C.** A custom connector, so the behavior is reusable across Power Platform
- **D.** A skill - a self-contained set of Markdown instructions, reusable and exportable across agents

**Answer:** D

Skills are reusable capabilities defined by a name, a description and Markdown instructions. Unlike tools, which connect to external services, skills are self-contained instructions you create once, add to multiple agents, and export as a Markdown file or a package.

**Source:** `['TOOL-068', 'TOOL-070']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview

### Q111 — Plan reuseable agent components
*Bank: bank1 · Domain: TOOL · Difficulty: Hard*

> An agent has three skills, but the orchestrator keeps activating the wrong one.

**What should the maker fix first?**

- **A.** The skill names, because routing is alphabetical
- **B.** The skill descriptions, because the orchestration runtime routes on the description
- **C.** The skill instructions, because longer instructions raise a skill's priority
- **D.** The agent's primary model, because skill routing is model-specific

**Answer:** B

The orchestration runtime invokes a skill when a user's request matches the skill's purpose, decided from its description. Well-written skill descriptions help the orchestrator invoke the right skill at the right time.

**Source:** `['TOOL-069']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview

### Q112 — Plan responsible AI strategy
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> An employee used an agent daily for two months, then went on leave for a month. On return they find the agent no longer remembers their stated preferences.

**What happened?**

- **A.** Memories expire after 89 days, matching evaluation retention
- **B.** Memory was turned off by the maker, which deletes stored memories
- **C.** Their memories were deleted - the system removes a user's memories after 28 days without interaction
- **D.** Memory is retained for 360 days but is not applied after a break in usage

**Answer:** C

If a user doesn't interact with the agent for 28 days, the system deletes their memories from that agent.

**Source:** `['KNOW-154', 'KNOW-156']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview

### Q113 — Evaluate security and governance
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A compliance officer asks whether a maker can review what an agent has remembered about individual employees.

**What is the answer?**

- **A.** No, but memories are visible to tenant administrators in the Entra admin center
- **B.** Yes - the maker can export memories from the Build tab
- **C.** Yes, but only for users who have consented in the agent's settings
- **D.** No - a user's memories are private to that user, and the maker and other users can't see them

**Answer:** D

A user's memories are private to that user. The maker and other users can't see them. Each user's memory lives in a dedicated folder in Microsoft-managed storage that the agent reads from and writes to.

**Source:** `['KNOW-157', 'KNOW-153']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview

### Q114 — Plan channels and deployment
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An agent with Memory turned on performs well in one-to-one chat. Deployed into a Microsoft Teams channel for a whole department, it stops personalizing responses.

**Why?**

- **A.** User memory is disabled in group chats and Microsoft Teams channels
- **B.** Memory requires the standard harness, which the Teams channel does not use
- **C.** Memory is disabled whenever more than one user has access to the agent
- **D.** The Teams channel resets the memory store on each publish

**Answer:** A

User memory is disabled in group chats and Microsoft Teams channels. Each agent otherwise maintains a separate memory store for every user.

**Source:** `['KNOW-155', 'KNOW-153']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview

### Q115 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> After a platform update, a skill agent that previously accepted a reference file now rejects it.

**What changed?**

- **A.** Reference files were moved behind a premium licence
- **B.** Reference files must now be stored in Dataverse rather than uploaded
- **C.** A breaking change - skill agents now block unsupported reference file types
- **D.** Skill agents now require every reference file to be under a size limit

**Answer:** C

Microsoft flagged this as a breaking change: skill agents now block unsupported reference file types. Previously accepted unsupported formats are rejected, to ensure only approved document and media formats are included.

**Source:** `['TOOL-071']` · https://learn.microsoft.com/en-us/power-platform/released-versions/copilotstudio/2026.6.3

### Q116 — Implement ALM for agents
*Bank: bank1 · Domain: ALM, SEC · Difficulty: Easy*

> A platform team wants to script agent creation and teardown as part of a deployment pipeline rather than clicking through the maker portal.

**What is now available?**

- **A.** Power Platform API endpoints to create, update, list, get and delete agents, and to retrieve agent components
- **B.** A dedicated Copilot Studio CLI installed with the Power Platform Tools extension
- **C.** Dataverse plug-ins registered against the bot table
- **D.** Solution-only management - agents cannot be created programmatically

**Answer:** A

New Power Platform API endpoints create, update, list, get and delete agents, and retrieve agent components.

**Source:** `['ALM-232', 'SEC-094']` · https://learn.microsoft.com/en-us/power-platform/released-versions/copilotstudio/2026.6.3 · https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-agent-inventory

### Q117 — Configure MCP tools
*Bank: bank1 · Domain: MCP · Difficulty: Medium*

> A developer builds an MCP server and wants Microsoft to certify it, but their company does not own the underlying service the server wraps.

**Can they submit it?**

- **A.** Only if the server uses an AAD IdentityProvider
- **B.** Yes, any verified publisher may submit
- **C.** No - they must own or control the endpoint, or partner with the service owner
- **D.** Yes, if the manifest passes validation

**Answer:** C

Publisher eligibility requires being a verified publisher that owns or controls the MCP server endpoint submitted. An independent publisher who does not own the underlying service is not eligible to submit directly and must partner with the service owner.

**Source:** `['MCP-021', 'MCP-022']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-certification

### Q118 — Configure MCP tools
*Bank: bank1 · Domain: MCP · Difficulty: Hard*

> An MCP integration must authenticate with Microsoft Entra ID, and the reviewer flags two manifest fields as missing.

**Which fields are required for an AAD IdentityProvider and for secret storage?**

- **A.** AuthorizationUrl and a client secret string
- **B.** AzureActiveDirectoryResourceId, and authorization.referenceId set to the Azure Key Vault URI
- **C.** AuthorizationUrl and AzureActiveDirectoryResourceId together
- **D.** Only the Key Vault URI

**Answer:** B

AzureActiveDirectoryResourceId is required for an AAD IdentityProvider, and authorization.referenceId must be the Azure Key Vault URI. AuthorizationUrl is the field required for an OAuth2 IdentityProvider.

**Source:** `['MCP-031', 'MCP-032', 'MCP-033']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-certification

### Q119 — Configure MCP tools
*Bank: bank1 · Domain: MCP · Difficulty: Medium*

> An agent uses the Teams MCP server to create a one-to-one chat and passes three members.

**What is returned?**

- **A.** The chat is created as a group chat
- **B.** A 400
- **C.** A 409
- **D.** The extra member is ignored

**Answer:** B

oneOnOne requires exactly two participants and group requires more than two. A wrong member count returns a 400. A 409 is returned when the same participants already have a chat.

**Source:** `['MCP-070']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-teams-tools

### Q120 — Configure advanced agent responses with custom prompts
*Bank: bank1 · Domain: PRMT · Difficulty: Medium*

> A maker configures ten suggested prompts, then tests the agent in Copilot Studio and cannot see any of them.

**What is happening?**

- **A.** Suggested prompts appear only on the welcome page in Teams and Microsoft 365 Copilot Chat, not in the Copilot Studio test pane
- **B.** The agent must be published to Omnichannel first
- **C.** Only five prompts render at a time
- **D.** Suggested prompts require generative orchestration

**Answer:** A

Up to 10 suggested prompts appear on the agent's welcome page in Microsoft Teams and Microsoft 365 Copilot Chat before a new chat starts. You cannot see or use them when testing the agent in Copilot Studio.

**Source:** `['PRMT-010', 'PRMT-011']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-starter-prompts

### Q121 — Configure advanced agent responses with custom prompts
*Bank: bank1 · Domain: PRMT · Difficulty: Hard*

> An architect designs a prompt that reads a Dataverse table, traverses three levels of related tables, and expects 500 records back.

**Which parts are supported?**

- **A.** Three levels are supported but the record cap is 30
- **B.** All of it, after raising the record limit
- **C.** The record count is fine after raising the limit to 1,000, but only two levels of relationships are supported
- **D.** Neither - Dataverse cannot be used as prompt data

**Answer:** C

The number of records retrieved is 30 by default and can be increased to 1,000 in settings, so 500 is achievable. However only one-to-many or many-to-one relationships are supported, and you can select up to two levels of relationships for the table added as a data source.

**Source:** `['PRMT-071', 'PRMT-072', 'PRMT-073']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-your-own-prompt-data

### Q122 — Configure generative answers node
*Bank: bank1 · Domain: PRMT · Difficulty: Hard*

> A maker adds Bing Custom Search as a knowledge source directly on a generative answers node and it is not available.

**Why, and what is the documented alternative?**

- **A.** Bing Custom Search must be added at agent level only
- **B.** Bing Custom Search was retired
- **C.** Generative answers nodes do not support Bing Custom Search, Azure OpenAI or Custom Data - use the classic option in the node properties
- **D.** It requires a premium licence; buy one

**Answer:** C

Knowledge sources in generative answers nodes do not currently support Bing Custom Search, Azure OpenAI, or Custom Data. From the generative answers node properties, the classic option is used instead.

**Source:** `['PRMT-041', 'PRMT-037']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node

### Q123 — Configure generative answers node
*Bank: bank1 · Domain: PRMT · Difficulty: Medium*

> A knowledge source has trigger conditions restricting when it is used. A maker selects it inside a generative answers node and expects those conditions to apply.

**What actually happens?**

- **A.** The node refuses to save
- **B.** The conditions apply only in classic mode
- **C.** The conditions are honored
- **D.** The node always searches the selected sources and ignores trigger conditions, showing a note saying so

**Answer:** D

The node always searches the sources you select, even if a source has trigger conditions that would otherwise limit when it is used, and it displays a note stating that trigger conditions will be ignored.

**Source:** `['PRMT-045']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node

### Q124 — Configure advanced agent responses with custom prompts
*Bank: bank1 · Domain: PRMT · Difficulty: Easy*

> A maker asks the prompt assistant to tighten an existing prompt they already wrote.

**What happens?**

- **A.** It rewrites the prompt in place
- **B.** It returns a grounded version of the prompt
- **C.** Prompt assistant cannot improve an existing prompt - it only generates new drafts
- **D.** It requires the prompt to be shared first

**Answer:** C

Prompt assistant cannot improve an existing prompt. It can only be used to generate new drafts, and it cannot generate grounded prompts yet.

**Source:** `['PRMT-059', 'PRMT-060']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-assistant

### Q125 — Configure multi-agent collaboration
*Bank: bank1 · Domain: MULT · Difficulty: Medium*

> A company has an externally hosted specialist agent built with another agent framework. The specialist performs its own reasoning and implements the Agent2Agent protocol. The Copilot Studio agent needs to delegate complex tasks to it while preserving agent-oriented communication.

**What should the architect use?**

- **A.** A SharePoint knowledge source
- **B.** An A2A connection
- **C.** A generative answers node
- **D.** A basic HTTP connector only

**Answer:** B

A2A is for communication and collaboration between agents, and is the documented choice for agents built on external frameworks, hosted outside Copilot Studio, or equipped with their own domain-specific reasoning.

**Source:** `['MULT-023', 'MULT-026']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

### Q126 — Configure multi-agent collaboration
*Bank: bank1 · Domain: MULT · Difficulty: Hard*

> An architect must integrate three external capabilities: a conventional REST API, a server exposing MCP tools, and an independently hosted A2A-compatible reasoning agent.

**Which architecture matches Microsoft's documented integration patterns?**

- **A.** A2A for all three
- **B.** MCP for all three
- **C.** HTTP tools for all three
- **D.** HTTP/custom connector for the API, MCP for the MCP server, and A2A for the A2A agent

**Answer:** D

Microsoft's integration table maps each need to one pattern: APIs or basic HTTP services to custom connectors or HTTP tools, MCP tools or resources to MCP servers, and agents implementing A2A to an A2A connection.

**Source:** `['MULT-026', 'MULT-027', 'MULT-028']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

### Q127 — Configure multi-agent collaboration
*Bank: bank1 · Domain: MULT · Difficulty: Medium*

> A team uses a traditional HTTP connector between two systems but now requires true multiturn interactions between cooperating agents.

**Which capability provides that documented advantage?**

- **A.** SharePoint grounding
- **B.** Traditional HTTP connector
- **C.** A2A
- **D.** Agent analytics

**Answer:** C

Microsoft's comparison table lists multiturn interaction support as an A2A capability that the HTTP connector doesn't provide, alongside being designed for agent workflows, richer contextual metadata, and cross-framework interoperability.

**Source:** `['MULT-025']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

### Q128 — Configure multi-agent collaboration
*Bank: bank1 · Domain: MULT · Difficulty: Medium*

> A developer has two URLs for an external A2A agent: its communication endpoint and its published agent-card URL.

**Which URL should be entered when configuring the A2A connection?**

- **A.** The Copilot Studio environment URL
- **B.** The organization's SharePoint URL
- **C.** The communication endpoint URL
- **D.** The agent-card URL

**Answer:** C

The endpoint URL should be the endpoint for communication with the agent, not the URL for the agent card. Copilot Studio reads the card itself if one exists at the standard location.

**Source:** `['MULT-031']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

### Q129 — Configure multi-agent collaboration
*Bank: bank1 · Domain: MULT · Difficulty: Medium*

> A maker enters the correct A2A endpoint and Copilot Studio immediately fills in the external agent's name and description.

**What enabled this?**

- **A.** A SharePoint list
- **B.** A Power Automate environment variable
- **C.** A valid agent card at the standard .well-known location
- **D.** A Teams application manifest

**Answer:** C

If the agent has a valid agent card on the standard .well-known URL, Copilot Studio automatically pulls the name and description from the card into the form. The card sits at the agent's endpoint plus /.well-known/agent.json.

**Source:** `['MULT-032', 'MULT-037']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

### Q130 — Configure multi-agent collaboration
*Bank: bank1 · Domain: MULT · Difficulty: Medium*

> An A2A agent is reachable, but its metadata can't be discovered automatically, so the maker enters the name and description by hand.

**What is especially important about the description?**

- **A.** It should contain only the maker's name
- **B.** It should describe the external agent's purpose so the main agent knows when to use it
- **C.** It must contain the external agent's OAuth token
- **D.** It must reproduce the endpoint URL

**Answer:** B

Microsoft states the description should describe the purpose of the agent so the main agent can understand when the second agent should be used.

**Source:** `['MULT-034']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

### Q131 — Configure multi-agent collaboration
*Bank: bank1 · Domain: MULT · Difficulty: Hard*

> A Copilot Studio agent already uses MCP for one service. The team now needs to add an A2A agent and a conventional HTTP service.

**Does the existing MCP integration prevent this design?**

- **A.** No - multiple integration models can be combined in one Copilot Studio agent
- **B.** Yes; each agent can use only one integration model
- **C.** Yes; A2A replaces MCP
- **D.** No, but only if MCP is removed first

**Answer:** A

Microsoft states explicitly that you can combine multiple integration models within the same Copilot Studio agent.

**Source:** `['MULT-030']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

### Q132 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> An administrator creates a brand-new Copilot Studio agent in August 2026 and expects to manually create an app registration for it.

**What should the administrator expect instead?**

- **A.** A traditional app registration must always be created manually
- **B.** Copilot Studio automatically creates an Entra Agent ID
- **C.** The agent has no Microsoft Entra identity
- **D.** Agent Builder automatically provides an app registration

**Answer:** B

All new Copilot Studio agents automatically receive Microsoft Entra Agent IDs, and Copilot Studio creates and manages them.

**Source:** `['SEC-097', 'SEC-102']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

### Q133 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> A security administrator finds a new Copilot Studio agent identity in Microsoft Entra and wants to know what kind of object it is.

**What is it?**

- **A.** A SharePoint service account
- **B.** A Microsoft Entra service principal with an Agent subtype
- **C.** A Teams security group
- **D.** A Power Automate connection reference

**Answer:** B

Microsoft defines an Entra Agent ID as a service principal with an 'Agent' subtype, using the same OAuth-based authentication flows as a traditional app registration.

**Source:** `['SEC-098', 'SEC-100']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

### Q134 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> An organization has a Copilot Studio agent created before the Entra Agent ID rollout in July 2026.

**What identity should administrators expect it to use before migration?**

- **A.** An MCP identity
- **B.** No identity
- **C.** A SharePoint application principal
- **D.** A traditional app registration

**Answer:** D

Existing agents created before Entra Agent ID was implemented in July 2026 continue using traditional app registrations until they're migrated.

**Source:** `['SEC-099']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

### Q135 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> An organization fears that migrating from legacy app registrations to Entra Agent IDs will need manual reconfiguration and will change the agent GUID.

**Which expectation matches Microsoft's documented migration design?**

- **A.** Migration requires deleting and recreating the agent
- **B.** Migration disables existing channels
- **C.** Manual migration and a new GUID are required
- **D.** Migration is automatic and preserves the GUID

**Answer:** D

Microsoft describes the migration as preserving the GUID, requiring no manual action, having zero downtime, and maintaining channel compatibility for Teams, Omnichannel and skills.

**Source:** `['SEC-108']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

### Q136 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> A security team wants makers to supply their own preexisting app registration when creating new Copilot Studio agents.

**What does Microsoft's documentation say?**

- **A.** Copilot Studio requires automatic identity management - you can't bring your own
- **B.** Makers must bring their own app registrations
- **C.** Only MCP agents require app registrations
- **D.** The identity is configured through SharePoint

**Answer:** A

Copilot Studio automatically creates and manages agent identities and doesn't support bringing your own Agent ID or app registration, to ensure security, compliance and integration with channels and services.

**Source:** `['SEC-102']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

### Q137 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Easy*

> An administrator needs the GUID of the Entra Agent ID associated with a Copilot Studio agent.

**Where should they look?**

- **A.** Analytics > Sessions
- **B.** Knowledge > SharePoint
- **C.** Topics > Variables
- **D.** Settings > Advanced > Metadata

**Answer:** D

The Entra Agent ID GUID appears under Settings > Advanced > Metadata. For legacy agents the Application ID is shown in the same section.

**Source:** `['SEC-103', 'SEC-104']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

### Q138 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> An administrator assumes every agent built across Microsoft's agent-building experiences must have an Entra Agent ID.

**Which distinction matters?**

- **A.** Agent Builder agents always require two Entra Agent IDs
- **B.** Only SharePoint agents have Entra identities
- **C.** Agent Builder agents currently don't use or require app registration IDs or Agent IDs
- **D.** Copilot Studio agents never have Entra identities

**Answer:** C

Microsoft distinguishes the two: Copilot Studio agents receive Entra Agent IDs or legacy app registrations, while Agent Builder agents currently don't use or require either.

**Source:** `['SEC-105']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

### Q139 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Easy*

> A maker is configuring security for an agent and needs to know the top-level authentication choices.

**Which list is correct?**

- **A.** Maker, Admin, Reader
- **B.** Anonymous, Kerberos, NTLM
- **C.** No authentication, Authenticate with Microsoft, Authenticate manually
- **D.** OAuth only, API key only, certificate only

**Answer:** C

Those are the three documented agent authentication options, selected under Settings > Security > Authentication.

**Source:** `['SEC-111']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

### Q140 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> A maker changes the agent's authentication configuration, saves it, and immediately tests the live deployed agent without republishing.

**Why does the live behavior stay unchanged?**

- **A.** Authentication can never be changed
- **B.** A2A must first be disabled
- **C.** Authentication changes take effect only after the agent is published
- **D.** Authentication is controlled only by SharePoint

**Answer:** C

Changes to the authentication configuration take effect only after you publish the agent. Microsoft advises planning ahead before making authentication changes.

**Source:** `['SEC-112']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

### Q141 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> A topic must retrieve User.AccessToken so it can pass the user's token to a trusted back-end process. The agent currently uses Authenticate with Microsoft.

**What should the maker do?**

- **A.** Use User.DisplayName as the token
- **B.** Switch to Authenticate manually, because User.AccessToken isn't exposed with Authenticate with Microsoft
- **C.** Disable authentication
- **D.** Keep Authenticate with Microsoft, because User.AccessToken is available there

**Answer:** B

Authenticate with Microsoft provides User.ID and User.DisplayName. User.AccessToken isn't available with that option - Microsoft directs makers who need a token to Authenticate manually, which exposes User.Id, User.DisplayName, User.AccessToken and User.IsLoggedIn.

**Source:** `['SEC-116', 'SEC-130', 'SEC-117', 'SEC-119']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

### Q142 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> A maker needs all four of User.Id, User.DisplayName, User.AccessToken and User.IsLoggedIn available in topic authoring.

**Which authentication configuration provides all four?**

- **A.** Public channel authentication
- **B.** No authentication
- **C.** Authenticate with Microsoft
- **D.** Authenticate manually

**Answer:** D

Authenticate manually exposes User.Id, User.DisplayName, User.AccessToken and User.IsLoggedIn. No authentication exposes none of them, and the fourth option isn't a Copilot Studio setting.

**Source:** `['SEC-119', 'SEC-135']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication · https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

### Q143 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> An existing agent uses manual authentication, and several topics reference User.AccessToken and User.IsLoggedIn. The maker switches the agent to Authenticate with Microsoft.

**What should the maker anticipate?**

- **A.** Those variables can appear as Unknown variables in existing topics
- **B.** Copilot Studio converts them automatically to SharePoint fields
- **C.** The variables become global variables
- **D.** Nothing changes - all authentication modes expose the same variables

**Answer:** A

After changing from Authenticate manually to Authenticate with Microsoft, topics containing User.AccessToken or User.IsLoggedIn display them as Unknown variables. Microsoft says to correct any topics with errors before publishing.

**Source:** `['SEC-130', 'SEC-120', 'SEC-121']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

### Q144 — Configure topics
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> A maker wants every user to sign in at the beginning of a conversation using the built-in Sign in system topic.

**What configuration is required?**

- **A.** Disable the Sign in system topic
- **B.** No authentication
- **C.** Authenticate with Microsoft plus an explicit Authenticate node
- **D.** Authenticate manually, with Require users to sign in enabled

**Answer:** D

Copilot Studio automatically adds a Sign in system topic. To use it, set authentication to manual and turn on Require users to sign in; the topic then triggers when a customer starts a conversation.

**Source:** `['SEC-122', 'SEC-123', 'SEC-144']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

### Q145 — Configure topics
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> An agent allows anonymous interaction at first but needs the user to authenticate only when reaching a sensitive part of a custom topic. Manual authentication is configured.

**Which documented mechanism fits?**

- **A.** Republish after every user message
- **B.** Add a Message node containing the user's token
- **C.** Add an Authenticate node to the custom topic
- **D.** Use an A2A agent

**Answer:** C

To let the user sign in later rather than at the beginning, add an Authenticate node to a custom topic. It requires Authenticate manually, and once the user signs in they aren't prompted again at another Authenticate node.

**Source:** `['SEC-125', 'SEC-126', 'SEC-127']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

### Q146 — Evaluate security and governance
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> A maker obtains User.AccessToken after user authentication and wants to display the value in a Message node for debugging.

**What should the maker do?**

- **A.** Publish it as an A2A agent card property
- **B.** Avoid exposing it - pass User.AccessToken only to trusted sources
- **C.** Display it, because it isn't sensitive
- **D.** Store it in the agent description

**Answer:** B

Microsoft warns that User.AccessToken contains user authentication information which, if compromised, could harm the user, and says not to use it in Message nodes or in flows you don't trust.

**Source:** `['SEC-128', 'SEC-139']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication · https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

### Q147 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A weather tool retrieves the same low-risk public forecast for all users. Individual user permissions don't need to be enforced.

**Which authentication model fits?**

- **A.** Agent-author (maker-provided) credentials
- **B.** User authentication is always mandatory
- **C.** Manual agent sign-in for every request
- **D.** A2A authentication only

**Answer:** A

Agent-author authentication suits cases where access to the service is implicit or the use case is low risk, and maker-provided credentials are for shared resources or where users shouldn't need their own individual service access.

**Source:** `['TOOL-073', 'TOOL-076']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

### Q148 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> An agent tool reads confidential business records. Each employee should see only data they personally have permission to access.

**Which authentication choice fits?**

- **A.** Agent-author authentication
- **B.** An anonymous tool connection
- **C.** User authentication
- **D.** No authentication

**Answer:** C

User authentication is for restricting data access to specific groups or individuals, retrieving data only that user can access, or performing work on the user's behalf. With end-user credentials the user's own permissions determine what's accessible.

**Source:** `['TOOL-074', 'TOOL-075']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

### Q149 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A tool requires a customer ID. The agent examines the user's message and conversation context but can't identify a value.

**What happens with the default input behavior?**

- **A.** The agent can generate a question asking the user for the missing value
- **B.** The tool must permanently fail
- **C.** The tool invents an ID
- **D.** The agent deletes the tool

**Answer:** A

Fill using defaults to Dynamically fill with AI. The agent first tries to extract the value from available context, and if no appropriate value is found it generates a question to ask the user.

**Source:** `['TOOL-078', 'TOOL-079', 'TOOL-080']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

### Q150 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A maker temporarily doesn't want the orchestrator to use a particular tool but expects to enable it again later.

**What should the maker do?**

- **A.** Delete the entire agent
- **B.** Delete the underlying external service
- **C.** Convert the tool to a knowledge source
- **D.** Turn the tool off

**Answer:** D

Turning off a tool blocks the agent from using it, but the tool stays connected to the agent and can be turned back on later. Tools are turned on by default when added.

**Source:** `['TOOL-081', 'TOOL-082']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

### Q151 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A company wants an agent to perform unattended browser and desktop tasks without users participating in every step.

**Which use of computer use matches Microsoft's recommended fit?**

- **A.** An autonomous agent performing background tasks
- **B.** A static SharePoint knowledge source
- **C.** A purely informational FAQ with no actions
- **D.** An agent-card metadata service

**Answer:** A

Microsoft states computer use works best for autonomous agents performing tasks in the background without user interaction.

**Source:** `['TOOL-084', 'TOOL-097']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

### Q152 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Hard*

> A maker adds computer use to a conversational agent and selects User authentication.

**What operational requirement follows?**

- **A.** No user ever needs machine credentials
- **B.** Every conversational user needs valid credentials for the machine computer use runs on
- **C.** Only the agent description needs credentials
- **D.** The machine must be anonymous

**Answer:** B

If User authentication is selected for computer use in a conversational experience, each user interacting with the agent needs valid credentials for the machine used by computer use.

**Source:** `['TOOL-085', 'TOOL-086']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

### Q153 — Evaluate security and governance
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A security architect is deciding whether computer use is appropriate inside a sensitive conversational experience.

**What visibility behavior must be considered?**

- **A.** Reasoning messages and screenshots of machine activity are shared in the chat
- **B.** Computer use can never produce screenshots
- **C.** Computer use hides all activity from the conversation
- **D.** Computer use only records text entered by the maker

**Answer:** A

When the tool runs in a conversational experience it shares reasoning messages and screenshots of the machine's activity in the chat.

**Source:** `['TOOL-087', 'TOOL-088']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

### Q154 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Easy*

> A maker finishes editing an agent and tests the new behavior successfully in the preview pane. Users in Teams still see the previous behavior.

**What is the most likely next step?**

- **A.** Delete and recreate the agent
- **B.** Publish the updated draft
- **C.** Remove Teams authentication
- **D.** Convert the agent to MCP

**Answer:** B

A draft agent isn't available to users outside the preview experience until it's published, and changes made after publication don't affect the live version until you publish again.

**Source:** `['CHAN-051', 'CHAN-054', 'CHAN-055']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

### Q155 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Easy*

> A new agent has knowledge and tools configured but no description or instructions.

**Why does publish readiness fail?**

- **A.** Every agent requires computer use
- **B.** Every agent requires an A2A connection
- **C.** At minimum the agent requires a name, description and instructions
- **D.** Every agent requires SharePoint

**Answer:** C

Microsoft lists a name, description and instructions as the minimum an agent must have before it can be published, and the publish dialog shows what still needs completing.

**Source:** `['CHAN-052', 'CHAN-053']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

### Q156 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Medium*

> An agent was published yesterday. Today the maker changes several instructions but doesn't republish.

**Which version do users continue to receive?**

- **A.** The unsaved draft
- **B.** A randomly selected version
- **C.** The preview pane version
- **D.** The currently published live version

**Answer:** D

Each publish creates a new agent version, and draft edits made after publication don't affect the live version until another publish occurs.

**Source:** `['CHAN-055', 'CHAN-056']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

### Q157 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Medium*

> A maker changes an agent's instructions, knowledge configuration and workflow nodes.

**What must happen before users receive those updates?**

- **A.** Restart Power Platform
- **B.** Publish the updated agent
- **C.** Create a new environment
- **D.** Remove the existing channels

**Answer:** B

Publishing captures the agent's name, description, instructions, capabilities, knowledge, skills, workflow nodes and triggers, and applies the new published version to all connected channels.

**Source:** `['CHAN-055', 'CHAN-057', 'CHAN-058']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

### Q158 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Medium*

> A new agent version was just published, but a Teams user who already had an active conversation still appears to be using older content.

**What explains this?**

- **A.** Publishing never affects Teams
- **B.** The agent needs a new Entra Agent ID after every publish
- **C.** Existing conversations might not immediately receive newly published content
- **D.** New versions apply only to computer-use agents

**Answer:** C

To avoid disrupting users mid-conversation, the latest published content only becomes available after a new session starts. In most channels a session ends after 30 minutes of inactivity.

**Source:** `['CHAN-059', 'CHAN-060', 'CHAN-063']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

### Q159 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Medium*

> A user is in a persistent Teams conversation and wants to begin a new session immediately with the newly published agent version.

**What can the user enter?**

- **A.** publish
- **B.** new agent id
- **C.** reset environment
- **D.** start over

**Answer:** D

In channels with persistent conversations, such as Microsoft Teams and Omnichannel for Customer Service, entering 'start over' resets the conversation and starts a new session with the latest published content.

**Source:** `['CHAN-061', 'CHAN-063']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

### Q160 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Medium*

> A business finishes initial testing and wants to use the automatically created demo website as its permanent public customer production site.

**Is that the intended use?**

- **A.** Yes, but only with A2A
- **B.** No - the demo website is for testing with teammates and stakeholders, not production customer use
- **C.** Yes, the demo website is the preferred production endpoint
- **D.** Yes, but only with computer use disabled

**Answer:** B

Microsoft states the demo website isn't intended for production use and that you shouldn't share the URL with customers. It exists to gather feedback from teammates and stakeholders before rolling out.

**Source:** `['CHAN-062']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

### Q161 — Create a solution
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A maker creates a solution, adds an agent, and wants a colleague in another environment to be able to customize it further after import.

**Which export protection allows that?**

- **A.** Export as managed, which never permits customization
- **B.** Export unmanaged, which is the only way to permit customization
- **C.** Convert to managed in development, then export
- **D.** Export as managed, which permits further customization if configured to allow it

**Answer:** D

A managed solution is a completed solution ready to be imported. Once imported, components cannot be added or removed, although the solution can optionally allow further customization.

**Source:** `['ALM-202', 'ALM-221']` · https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export

### Q162 — Create a solution
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A team imports a managed solution from a vendor, then edits one of its components to fit local needs. Months later they try to uninstall the vendor solution and cannot.

**What is blocking the uninstall?**

- **A.** The publisher prefix was changed
- **B.** Managed solutions can never be uninstalled
- **C.** Editing the managed component created a dependency between the unmanaged customizations and the managed solution
- **D.** The solution exceeds 95 MB

**Answer:** C

When you edit a managed component you create a dependency between your unmanaged customizations and the managed solution. While that dependency exists the managed solution cannot be uninstalled until you remove it.

**Source:** `['ALM-181', 'ALM-185']` · https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm

### Q163 — Create a solution
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> An ISV ships a managed solution with managed properties restricting customization. A customer asks the ISV to relax one of those properties.

**How can it be changed?**

- **A.** Managed properties cannot ever be changed
- **B.** By exporting and re-importing the solution
- **C.** Only by an update to the solution from the original publisher
- **D.** The customer can change it in their environment

**Answer:** C

After a managed solution is imported, the managed properties cannot be updated except by an update of the solution by the original publisher.

**Source:** `['ALM-107']` · https://learn.microsoft.com/en-us/power-platform/alm/managed-properties-alm

### Q164 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A solution import brings a custom security role that already exists in the target with additional privileges granted locally.

**What happens to those local privileges?**

- **A.** They are merged with the imported privileges
- **B.** The import fails with a conflict
- **C.** The import replaces the existing role's privileges with those defined by the imported solution
- **D.** The local role is renamed and both are kept

**Answer:** C

When you import a custom security role from a managed solution, the import process replaces the privileges of the existing role with the privileges defined by the imported solution.

**Source:** `['ALM-107']` · https://learn.microsoft.com/en-us/power-platform/alm/managed-properties-alm

### Q165 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A team selects Overwrite Customizations when importing a solution containing a table form, expecting local form changes to be discarded.

**What actually happens to the form?**

- **A.** Local changes are discarded as expected
- **B.** The Overwrite Customizations option does not apply to table forms - the imported form merges with existing layers
- **C.** The import fails
- **D.** The form is duplicated

**Answer:** B

When you import a solution that includes table forms, the Overwrite Customizations option, even if selected, does not apply. The form being imported merges with any existing solution layers for the form.

**Source:** `['ALM-107']` · https://learn.microsoft.com/en-us/power-platform/alm/managed-properties-alm

### Q166 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> An organization plans pipelines across four environments. Someone asks whether every one of them needs a Dataverse database.

**What is the answer?**

- **A.** Only target environments need one
- **B.** All environments used in pipelines must have a Microsoft Dataverse database
- **C.** Only the pipelines host needs one
- **D.** Only development environments need one

**Answer:** B

All environments used in pipelines must have a Microsoft Dataverse database. This requirement has no exceptions, unlike the managed-environment rule which exempts development environments and the host.

**Source:** `['ALM-027', 'ALM-031']` · https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines

### Q167 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A pipeline has development, test and production stages. A maker deploys 1.0.0.2 to test, then changes the solution in development without incrementing the version, then promotes test to production.

**Which version reaches production?**

- **A.** Both versions are deployed as separate layers
- **B.** The promotion fails because the version did not increment
- **C.** The same solution version that was deployed to test
- **D.** The newly changed solution, because promotion re-exports from development

**Answer:** C

You must complete deployment stages in order, and after you deploy to test, the same solution that was deployed there is what goes to production - even if the solution was changed afterward without incrementing the version.

**Source:** `['ALM-154']` · https://learn.microsoft.com/en-us/power-platform/alm/run-pipeline

### Q168 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> An administrator wants to add an eighth stage to a pipeline.

**What is the limit?**

- **A.** Seven stages
- **B.** There is no limit
- **C.** Five stages
- **D.** Ten stages

**Answer:** A

A pipeline must have at least one stage, and you can add up to seven stages.

**Source:** `['ALM-033']` · https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines

### Q169 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A pipeline must run custom validation logic before a solution is even exported from development, and hold deployment requests pending approval by custom business logic.

**Which two settings deliver this?**

- **A.** Pre-export Step Required and PreDeployment Step Required
- **B.** Is Delegated Deployment and Previous Deployment Stage
- **C.** Pre-deployment Step Required only
- **D.** Previous Deployment Stage and Pre-export Step Required

**Answer:** A

Pre-export Step Required runs custom validation logic when a deployment request is submitted, and pipelines will not export the solution from a development environment until that step is marked complete. PreDeployment Step Required leaves deployment requests pending until approved via custom business logic.

**Source:** `['ALM-081', 'ALM-034']` · https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines · https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines

### Q170 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A tenant administrator wants standardized ALM applied automatically across an environment group.

**What must already exist?**

- **A.** The Power Platform Pipelines package installed in at least one environment with a pipelines host configured, and at least one pipeline configured in that host
- **B.** Nothing - environment groups configure pipelines automatically
- **C.** Only a managed environment
- **D.** A custom pipelines host and a service principal

**Answer:** A

The default deployment pipeline rule for environment groups requires the Power Platform Pipelines package installed in at least one environment with a pipelines host configured, and at least one pipeline configured in the desired pipelines host. Tenant Administrator access is also required.

**Source:** `['ALM-040', 'ALM-041', 'ALM-039']` · https://learn.microsoft.com/en-us/power-platform/alm/default-deployment-pipeline-rule-for-environment-groups

### Q171 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A developer changes the publisher prefix on a solution after building several tables and columns, then wonders why the existing components kept the old prefix.

**Why?**

- **A.** The prefix only applies to new solutions
- **B.** Metadata item names cannot be changed after they are created, so the prefix must be set before creating them
- **C.** A republish is required
- **D.** The prefix applies only to managed solutions

**Answer:** B

When you change a solution publisher prefix you should do it before creating any new apps or metadata items, because you cannot change the names of metadata items after they are created.

**Source:** `['ALM-189']` · https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm

### Q172 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A team segments a solution and adds a table that has never existed in the target environment, selecting only the columns they changed.

**What is wrong with this?**

- **A.** A table that does not already exist in the target must be added with Include all objects
- **B.** Segmentation requires a managed solution
- **C.** Nothing - segmentation always works
- **D.** Quick find views must be excluded manually

**Answer:** A

You should only use Include all objects when distributing an unmanaged table that does not exist in the target environment, and you must select it if the table has never been imported or does not already exist there. Note also that once selected, it cannot be undone.

**Source:** `['ALM-155', 'ALM-157']` · https://learn.microsoft.com/en-us/power-platform/alm/segmented-solutions-alm

### Q173 — Create a solution
*Bank: bank1 · Domain: ALM · Difficulty: Easy*

> A maker wants to know the maximum size a solution can reach.

**What is the limit?**

- **A.** 50 MB
- **B.** 16 MB
- **C.** 512 MB
- **D.** 95 MB

**Answer:** D

A solution can be up to 95 MB in size.

**Source:** `['ALM-202']` · https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool

### Q174 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> An import fails with several components showing a Not Recognized error.

**What is the documented fix?**

- **A.** Open the command menu, select Advanced, then Add required objects
- **B.** Enable the target as a managed environment
- **C.** Re-export the solution as managed
- **D.** Increase the solution version number

**Answer:** A

For each component showing a Not Recognized error, open the command menu, select Advanced, and then select Add required objects. This must be repeated whenever new components are added, before exporting.

**Source:** `['ALM-045', 'ALM-227']` · https://learn.microsoft.com/en-us/power-platform/alm/dependency-tracking-solution-components · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export

### Q175 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A pipeline host is being chosen. The team assumes it must be a managed environment like the targets.

**What is actually true?**

- **A.** The host should be a production environment but does not have to be a managed environment
- **B.** The host must be in the tenant's home region only
- **C.** The host must be a developer environment
- **D.** The host must be managed, like all pipeline environments

**Answer:** A

The pipelines host should be a production environment, but the pipelines host does not have to be a managed environment. All other environments used in pipelines must be enabled as managed environments.

**Source:** `['ALM-031', 'ALM-130']` · https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines · https://learn.microsoft.com/en-us/power-platform/alm/pipelines

### Q176 — Create and use environment variables
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A CI pipeline imports a solution and must populate connection references and environment variable values without a human present, using values kept under version control.

**What provides this?**

- **A.** The Deployment Pipeline Configuration app
- **B.** A pre-export step
- **C.** Managed properties
- **D.** A deployment settings JSON file passed as a parameter during import

**Answer:** D

A deployment settings JSON file can be passed as a parameter when importing the solution using Power Platform Build Tools, creating the required connection references and environment values on import without interactive input. The file can be stored in source control.

**Source:** `['ALM-008', 'ALM-009']` · https://learn.microsoft.com/en-us/power-platform/alm/conn-ref-env-variables-build-tools

### Q177 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A team is deciding between one large unmanaged solution and several smaller ones in a shared development environment.

**What risk does the corpus name for multiple unmanaged solutions in one development environment?**

- **A.** Slower import times
- **B.** Increased likelihood of dependency conflicts, where one solution cannot be imported because of another
- **C.** Loss of managed properties
- **D.** Inability to use pipelines

**Answer:** B

Maintaining multiple unmanaged solutions within the same development environment increases the likelihood of dependency conflicts - for example a situation where one solution cannot be imported because of another.

**Source:** `['ALM-113']` · https://learn.microsoft.com/en-us/power-platform/alm/organize-solutions

### Q178 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Easy*

> A new project is starting and the team has only a production environment.

**What is the documented minimum, and the recommendation?**

- **A.** Minimum one, recommended two
- **B.** Minimum two - development and production - with three recommended: development, testing and production
- **C.** Minimum three, recommended five
- **D.** One environment is sufficient with pipelines

**Answer:** B

At a minimum you should have two environments, development and production. The ideal is three - one each for development, testing, and production/deployment.

**Source:** `['ALM-108', 'ALM-109']` · https://learn.microsoft.com/en-us/power-platform/alm/move-from-single-env-alm · https://learn.microsoft.com/en-us/power-platform/alm/new-project-alm

### Q179 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A repository stores solutions in YAML. A build machine running an older pac CLI fails to pack them.

**What is the likely cause?**

- **A.** YAML requires SolutionPackager.exe
- **B.** The solutions/ directory is optional
- **C.** Modern flows are unsupported in YAML
- **D.** YAML source control format requires Microsoft.PowerApps.CLI version 2.4.1 or later

**Answer:** D

YAML source control format support in the pac CLI requires Microsoft.PowerApps.CLI version 2.4.1 or later. The solutions/ and publishers/ directories are required, and modern flows are supported only in YAML.

**Source:** `['ALM-205', 'ALM-206']` · https://learn.microsoft.com/en-us/power-platform/alm/solution-source-control-yaml-format

### Q180 — Implement and extend Microsoft Power Platform Pipelines
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A maker asks to redeploy version 1.0.0.3 after 1.0.0.5 has already reached production.

**What must be true for this to be possible?**

- **A.** Nothing - older versions can always be redeployed
- **B.** The pipelines package must be version 9.1.24023.240222117 or later, and Allow redeployments of older versions must be enabled
- **C.** The solution must be unmanaged
- **D.** A new pipeline must be created

**Answer:** B

Redeploying past solution versions requires the Power Platform Pipelines package version 9.1.24023.240222117 or later installed in the pipeline host, and the Allow redeployments of older versions setting enabled in pipeline settings.

**Source:** `['ALM-148', 'ALM-149']` · https://learn.microsoft.com/en-us/power-platform/alm/redeploy-past-solution-versions

### Q181 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A maker connects an agent to twelve SharePoint lists totalling 200,000 rows.

**Which statement matches Microsoft's guidance?**

- **A.** There is no list limit, only a 120,000-row limit per list
- **B.** Twelve lists is fine but rows must stay under 35,000 each
- **C.** Twelve lists is fine; only latency changes
- **D.** Up to 10 lists, with best performance when total rows stay within 120,000 across all lists

**Answer:** D

You can select up to 10 lists at a time and should use no more than 10 lists per agent. Best performance occurs when total rows are limited to 120,000 across all lists, and lists over 35,000 rows affect quality and latency.

**Source:** `['KNOW-011', 'KNOW-013']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/knowledge-sharepoint-lists

### Q182 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An agent must answer from a 300 MB SharePoint policy archive. The tenant has Microsoft 365 Copilot licenses and semantic search grounding enabled.

**What happens?**

- **A.** It fails - even with a Copilot license the maximum file size is 200 MB
- **B.** It works - the limit with a Copilot license is 512 MB
- **C.** It works - file size limits apply only without a license
- **D.** It fails - the limit is 7 MB regardless of licensing

**Answer:** A

With a Microsoft 365 Copilot license in the same tenant, the maximum SharePoint file size for generative answers is 200 MB, with tenant graph grounding and semantic search turned on. Without such a license the limit is 7 MB.

**Source:** `['KNOW-054', 'KNOW-055']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

### Q183 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A knowledge source is created but the maker leaves the description blank, assuming it is documentation.

**What is the consequence?**

- **A.** The description is what the agent uses to decide when the source applies, and names must also be unique per source
- **B.** The agent will use the source for every question
- **C.** The source cannot be saved
- **D.** None - the description is cosmetic

**Answer:** A

After you add a knowledge source you are required to provide a name and description. The knowledge name for each source should be unique, and the description drives when the source is used.

**Source:** `['KNOW-020']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-existing-copilot

### Q184 — Configure generative answers node
*Bank: bank1 · Domain: KNOW, PRMT · Difficulty: Hard*

> A topic uses a generative answers node with Search only selected sources turned on, and the maker selects no sources at all, expecting the agent to fall back to agent-level knowledge.

**What happens?**

- **A.** The node searches no knowledge at all, and there is no fallback to agent-level sources
- **B.** Trigger conditions decide which sources are used
- **C.** It falls back to agent-level sources
- **D.** The node refuses to save

**Answer:** A

Search only selected sources does not fall back to agent-level knowledge sources. With nothing selected, the node does not search any knowledge sources. Separately, the node always searches selected sources even where trigger conditions would otherwise limit them.

**Source:** `['KNOW-119', 'PRMT-045']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio · https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node

### Q185 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> An agent has 25 public website sources at agent level and works fine. A maker then adds a generative answers node to one topic with five public sources attached to the node.

**When does the failure appear?**

- **A.** Immediately, when saving the topic
- **B.** It does not fail - the agent-level limit of 25 applies
- **C.** At publish time, with an error stating the limit of Bing sources (4) has been exceeded
- **D.** At runtime, when the topic is triggered

**Answer:** C

Where knowledge sources are defined at topic level using a generative answers node, the public-source limit becomes four regardless of the agent-level limit, and the agent cannot be published - the error states the limit of Bing sources (4) has been exceeded.

**Source:** `['KNOW-034', 'KNOW-036', 'KNOW-037']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/agent-publish-fails-bing-sources

### Q186 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Hard*

> An analyst opens the Analytics page, sets the range to 90 days, and tries to open the transcript of a session from 60 days ago.

**What do they find?**

- **A.** A truncated transcript limited to 512 characters
- **B.** The transcript, since analytics covers 360 days
- **C.** No transcript - session details and transcript information cover only the last 28 days
- **D.** The transcript, after assigning Bot Transcript Viewer

**Answer:** C

Analytics data is available for up to 360 days, but session details and transcript information are available only for the last 28 days.

**Source:** `['ANLY-084', 'ANLY-027']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness

### Q187 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> A team wants to define five business-specific metrics in natural language, each with fifteen possible outcomes.

**What are the actual limits?**

- **A.** Three metrics, ten result categories each
- **B.** Five metrics, ten outcomes each
- **C.** Ten metrics, three outcomes each
- **D.** Three metrics, unlimited outcomes

**Answer:** A

You can use natural language to define up to three custom metrics, and for each metric you can define up to 10 result categories. They are tracked across sampled sessions.

**Source:** `['ANLY-019', 'ANLY-020']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-custom-metrics

### Q188 — Create a test set
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> A maker wants to build a test set from a SharePoint folder containing 40 policy documents.

**What is the constraint?**

- **A.** The folder must be under 5 MB
- **B.** SharePoint cannot be used to generate test sets
- **C.** Folders are supported up to 40 files
- **D.** Only individual SharePoint files can be used - folders are not supported

**Answer:** D

Use only individual SharePoint files as a knowledge source to generate a test set. SharePoint folders are not supported. Files used to generate test questions can be up to 5 MB.

**Source:** `['ANLY-058', 'ANLY-059']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create

### Q189 — Review test results
*Bank: bank1 · Domain: ANLY · Difficulty: Hard*

> An agent is a Fabric data agent. The team plans to run agent evaluations against it.

**What is the problem?**

- **A.** Agent evaluation does not support Fabric data agents
- **B.** Fabric data agents require the similarity test method
- **C.** Evaluations require a user profile, which Fabric agents cannot provide
- **D.** Fabric data agents require conversational test sets only

**Answer:** A

Currently, agent evaluation does not support Fabric data agents.

**Source:** `['ANLY-068', 'ANLY-066']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-intro

### Q190 — Evaluate agent performance
*Bank: bank1 · Domain: TRBL · Difficulty: Medium*

> An agent has been running for two weeks. Sentiment scores are blank while other analytics populate.

**Which conditions could explain this?**

- **A.** Sentiment requires 360 days of data
- **B.** Sentiment is measured on a sample, needs a minimum number of daily successful generative answers, and requires at least two user messages per session
- **C.** Sentiment requires the Bot Transcript Viewer role
- **D.** Sentiment only works in classic orchestration

**Answer:** B

Sentiment analytics are calculated on a sample of sessions, depend on generative answers, require a minimum number of daily successful answers, and need at least two user messages in a session.

**Source:** `['TRBL-015', 'TRBL-016', 'TRBL-017']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-analytics

### Q191 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Easy*

> A maker asks which security role lets a colleague read conversation transcripts and comments.

**What do you tell them?**

- **A.** Environment Maker
- **B.** Analytics Viewer
- **C.** System Customizer
- **D.** Bot Transcript Viewer

**Answer:** D

To view sessions and to view comments you must have the Bot Transcript Viewer security role.

**Source:** `['ANLY-031', 'ANLY-035']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-questions-sessions

### Q192 — Monitor agents by using Application Insights
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> A maker shares an Application Insights workbook with three colleagues who cannot see any data.

**What is missing?**

- **A.** They need the Bot Transcript Viewer role
- **B.** They need a Copilot Studio per-user license
- **C.** The workbook must be published
- **D.** They need at least the Reader role on the connected Application Insights resource

**Answer:** D

When you share an Application Insights workbook, team members must have at least the Reader role for the connected Application Insights resource to view the displayed information.

**Source:** `['ANLY-003']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry

### Q193 — Monitor agents by using Application Insights
*Bank: bank1 · Domain: ANLY · Difficulty: Hard*

> A data policy is enforced across several environments. Makers report they can no longer use the Application Insights connector.

**Is this expected?**

- **A.** Yes - when the data policy is enforced, the Application Insights in Copilot Studio connector is blocked for the targeted environments
- **B.** No - only the agent is blocked, not the connector
- **C.** Yes, but only for unmanaged environments
- **D.** No - data policies do not affect connectors

**Answer:** A

When the data policy is enforced, the Application Insights in Copilot Studio connector is blocked for the targeted environments, and users and makers cannot use that connector there.

**Source:** `['ANLY-004']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry

### Q194 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A maker adds a Dataverse knowledge source, then afterwards configures the Multiline Text and File columns in Power Apps. Content does not appear.

**What should they expect?**

- **A.** Up to two days for the system to backfill the request
- **B.** The source must be deleted and recreated
- **C.** An immediate refresh after republishing
- **D.** Up to 15 minutes

**Answer:** A

If you add a Dataverse knowledge source before configuring your Multiline Text and File columns in Power Apps, it might take up to two days for the system to backfill the request.

**Source:** `['KNOW-063']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

### Q195 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An agent must answer from a wiki behind corporate sign-in, added as a public website source.

**Why will this never work?**

- **A.** The URL exceeds two levels of depth
- **B.** URLs requiring authentication, and URLs not indexed by Bing, are unsupported as public website knowledge
- **C.** The agent needs generative orchestration
- **D.** Public website sources are limited to four

**Answer:** B

URLs that point to a website requiring authentication, or that are not indexed by Bing, are not supported. Microsoft names wikis and SharePoint sites as examples precisely because they require authentication.

**Source:** `['KNOW-079', 'KNOW-080']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website

### Q196 — Configure generative answers node
*Bank: bank1 · Domain: KNOW, PRMT · Difficulty: Medium*

> A designer wants the agent to pass a citation returned by a knowledge source into a downstream tool that logs the source document.

**Is that supported?**

- **A.** Only when the source is SharePoint
- **B.** Yes, citations are standard variables
- **C.** No - citations returned from a knowledge source cannot be used as inputs to other tools or actions
- **D.** Yes, in generative orchestration only

**Answer:** C

Currently, citations returned from a knowledge source cannot be used as inputs to other tools or actions.

**Source:** `['KNOW-116', 'PRMT-043']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio · https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node

### Q197 — Configure custom prompts to use the Foundry model catalog
*Bank: bank1 · Domain: PRMT · Difficulty: Hard*

> An architect worries that a long multi-turn conversation will exhaust a model's 128K context window.

**What should you tell them?**

- **A.** Only the response counts toward the window
- **B.** The window resets every 30 minutes
- **C.** The context window is a limit for each model call, enforced per individual call - not across the conversation
- **D.** The window applies across the whole conversation, so the concern is valid

**Answer:** C

The model context window is a limit for each model call, enforced by the model provider on each individual call. It also covers the combined input - instructions, data, and the model's response.

**Source:** `['PRMT-097', 'PRMT-105']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-model-settings · https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompts-performance-execution

### Q198 — Configure advanced agent responses with custom prompts
*Bank: bank1 · Domain: PRMT · Difficulty: Medium*

> A prompt processes 400-page contracts and intermittently times out.

**What is the documented approach?**

- **A.** Increase the model timeout
- **B.** Split the prompt into two agents
- **C.** Switch to a 400K-token model and send it whole
- **D.** Process content incrementally - page by page - or truncate unnecessary pages beforehand

**Answer:** D

Long documents might cause timeouts or exceed token limits. When possible, process content incrementally, page by page, or truncate unnecessary pages beforehand.

**Source:** `['PRMT-110', 'PRMT-106']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompts-performance-execution

### Q199 — Evaluate security and governance considerations
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> A security lead disables Require secured access, tests immediately, and finds the old behavior still in force.

**Why?**

- **A.** The change requires a republish
- **B.** The agent is in an environment group
- **C.** Teams-only licenses cannot change this setting
- **D.** Turning the setting on or off can take up to two hours to propagate, and the previous setting remains until then

**Answer:** D

When you turn Require secured access on or off it can take up to two hours for the system to propagate the settings and take effect. Until then the previous setting remains in force.

**Source:** `['SEC-069', 'SEC-070']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-web-security

### Q200 — Plan identity strategy
*Bank: bank1 · Domain: SEC · Difficulty: Hard*

> An organization blocks maker-provided credentials by policy. A team then plans an autonomous agent that runs overnight on a schedule.

**What breaks?**

- **A.** Only Power Automate flows are affected
- **B.** Nothing - autonomous agents use the maker's identity
- **C.** Agents require real-time user interaction, because each tool call must be authenticated with a live user
- **D.** The agent must move to a managed environment

**Answer:** C

When maker-provided credentials are prevented from being used, agents require real-time user interaction because each tool call must be authenticated with a live user. The control covers connectors, built-in actions and embedded Power Automate flows equally.

**Source:** `['SEC-064', 'SEC-065']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-no-maker-authentication

### Q201 — Evaluate security and governance considerations
*Bank: bank1 · Domain: SEC · Difficulty: Medium*

> An administrator wants to turn on external threat detection across every Copilot Studio environment in the tenant at once.

**Is that possible?**

- **A.** Only with a Teams-only license
- **B.** Yes, via a tenant-wide setting
- **C.** Yes, through an environment group only
- **D.** No - there is no global or tenant-wide setting; it must be configured per environment

**Answer:** D

There is no global or tenant-wide setting to automatically enable the external security provider across all Copilot Studio environments. External threat detection must be configured per environment.

**Source:** `['SEC-079']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/external-security-provider

### Q202 — Configure MCP tools
*Bank: bank1 · Domain: MCP · Difficulty: Medium*

> An MCP tool is being defined and the input schema sets exclusiveMinimum to 0.

**What happens?**

- **A.** The value is coerced to a Boolean
- **B.** A System.FormatException is thrown because exclusiveMinimum must be a Boolean, not an integer
- **C.** The tool is filtered from the available list
- **D.** Nothing - integers are valid

**Answer:** B

A System.FormatException is thrown when the exclusiveMinimum property is set to an integer instead of a Boolean in the MCP tool definition input schema.

**Source:** `['MCP-084']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-troubleshooting

### Q203 — Configure advanced agent responses with custom prompts
*Bank: bank1 · Domain: PRMT · Difficulty: Easy*

> A maker wants to embed a sentence in the prompt input telling the model to ignore its earlier instructions.

**What does the corpus say?**

- **A.** It works if placed first
- **B.** It requires generative orchestration
- **C.** It only works with a 400K-token model
- **D.** Inputs cannot contain instructions - such instructions are forbidden for security reasons

**Answer:** D

Inputs cannot contain instructions. Any such instructions are forbidden for security reasons.

**Source:** `['PRMT-076']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-inputs-prompt

### Q204 — Manage variables
*Bank: bank1 · Domain: TOPC · Difficulty: Medium*

> A topic assigns the number 5 to a variable early in the conversation. Later a branch tries to assign the text 'five' to the same variable.

**What happens?**

- **A.** The assignment fails - a variable's type is fixed after the first assignment
- **B.** Both values are held and the last one wins
- **C.** The variable becomes type unknown
- **D.** The variable is converted to text

**Answer:** A

A variable's type is set the first time a value is assigned to it, and after that the type is fixed - values of another type cannot be assigned.

**Source:** `['TOPC-034']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

### Q205 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Hard*

> A maker writes a topic that reads the selected intent and the ambiguity reason to decide how to route a conversation. The topic uses a trigger phrase.

**Why do those variables have no value?**

- **A.** They are voice-only variables
- **B.** They require generative orchestration
- **C.** They are supported only under the On Select Intent trigger
- **D.** They require the Bot Transcript Viewer role

**Answer:** C

The extracted entities, intent options, selected intent and reason multiple topics matched are all supported only when the trigger is On Select Intent.

**Source:** `['TOPC-041', 'TOPC-043', 'TOPC-044']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

### Q206 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Medium*

> A proactive reminder flow sends messages to 400 employees. Many fail with throttling errors.

**What is the documented mitigation?**

- **A.** Move the flow to a managed environment
- **B.** Switch to an Adaptive Card that uses templating
- **C.** Publish the agent to the Microsoft 365 Copilot channel
- **D.** Reduce the degree of parallelism, or reduce the number of recipients

**Answer:** D

Proactive messages are subject to Power Automate limits and Teams connector throttling. When sending to a large group, the documented mitigations are to reduce the degree of parallelism or reduce the number of recipients.

**Source:** `['TOPC-010', 'TOPC-015']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-proactive-message

### Q207 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Medium*

> A proactive message is sent to a user who has never installed the agent in Teams. The team wants the flow run to be treated as successful anyway.

**Which option achieves this, and what does it return?**

- **A.** Don't send and succeed, returning status code 300
- **B.** Succeed with status code, returning status code 100
- **C.** Don't send and fail, marking the run failed
- **D.** There is no such option

**Answer:** B

Succeed with status code marks the flow run as succeeded even though the recipient cannot receive the message because they did not install the agent, and returns status code 100.

**Source:** `['TOPC-019', 'TOPC-020']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-proactive-message

### Q208 — Configure adaptive cards
*Bank: bank1 · Domain: TOPC · Difficulty: Hard*

> A card built with Action.Execute works during authoring but does nothing on the organization's public website, which uses the default Bot Framework Web Chat integration.

**Why?**

- **A.** Action.Execute requires the Microsoft 365 Copilot channel
- **B.** Web Chat is limited to Adaptive Cards 1.5
- **C.** The card exceeds the payload limit
- **D.** Web Chat supports 1.6 but does not support Action.Execute

**Answer:** D

The Bot Framework Web Chat component supports Adaptive Cards version 1.6 but does not support Action.Execute.

**Source:** `['TOPC-003', 'TOPC-004']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/adaptive-cards-overview

### Q209 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Easy*

> A maker wants the agent to hand off to a human whenever it cannot match a user's message to a topic.

**What is the documented pattern?**

- **A.** Set a global variable named Escalate
- **B.** Disable generative answers
- **C.** Redirect Fallback to Escalate
- **D.** Publish to Omnichannel

**Answer:** C

The Fallback system topic triggers when the agent cannot match the user's question or message to a topic, and the documented pattern is to redirect to Escalate.

**Source:** `['TOPC-027', 'TOPC-030']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-topics

### Q210 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Hard*

> A maker cannot find the additional settings on a topic input parameter, but sees them on a tool input parameter in the same agent.

**What explains the difference?**

- **A.** Topic inputs never expose additional settings
- **B.** Tool inputs and topic inputs use different variable types
- **C.** Additional settings appear on topic inputs only when the agent uses generative orchestration
- **D.** The topic must be published first

**Answer:** C

Additional settings are always available for tool input parameters, but for topic input parameters they are only available when the agent is configured to use generative orchestration.

**Source:** `['TOPC-066']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-additional-settings-topic-action-inputs

### Q211 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Medium*

> A maker wants to remove the Escalate system topic entirely because their agent has no human handoff.

**What can they actually do?**

- **A.** Delete it from the topics list
- **B.** System topics cannot be deleted or disabled, and their trigger phrases cannot be edited - but they can be turned off and their nodes customized
- **C.** Only an administrator can delete system topics
- **D.** Rename it so it never triggers

**Answer:** B

You cannot delete or disable system topics or edit their trigger phrases. You can turn them off and customize the nodes on the authoring canvas - and Microsoft advises against customizing them until you are comfortable with authoring.

**Source:** `['TOPC-078', 'TOPC-079']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics

### Q212 — Configure adaptive cards
*Bank: bank1 · Domain: TOPC · Difficulty: Hard*

> A designer opens an adaptive card's JSON, switches to the formula panel to add a dynamic value, then wants to revert to the original JSON.

**What happens?**

- **A.** The original JSON is restored from version history
- **B.** Once editing begins in the formula panel you cannot go back to the original JSON
- **C.** The card must be republished first
- **D.** Reverting requires the Bot Transcript Viewer role

**Answer:** B

Once you begin editing in the formula panel, you cannot go back to the original JSON code. Microsoft's advice is to save a copy of the original JSON in your own notes beforehand.

**Source:** `['TOPC-076']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-ask-with-adaptive-card

### Q213 — Configure adaptive cards
*Bank: bank1 · Domain: TOPC · Difficulty: Easy*

> A maker builds a card that only displays information, with no buttons, and it is rejected as not interactive.

**What is required?**

- **A.** A title and a description
- **B.** At least one submit button, so the user can submit information back to the agent
- **C.** Adaptive Cards version 1.6
- **D.** A generative answers node

**Answer:** B

The card must contain at least one submit button, because it must be an interactive card that allows the user to submit information back to the agent.

**Source:** `['TOPC-074']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-ask-with-adaptive-card

### Q214 — Review test results
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> A stakeholder is given the agent viewer role so they can review evaluation results. They then try to update a shared test set and publish a fix.

**What can they do?**

- **A.** Both, within the evaluations they can see
- **B.** Publish but not update the test set
- **C.** Update the test set but not publish
- **D.** Neither - agent viewers cannot create or update shared evaluation test sets, and cannot publish the agent

**Answer:** D

Users assigned the agent viewer role cannot create, update, or delete the agent or content outside the evaluations where they are an agent viewer, cannot publish the agent, and cannot create or update the evaluation test sets shared with them.

**Source:** `['ANLY-082', 'ANLY-083']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-results

### Q215 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Hard*

> An agent flow trigger fails and the agent never receives a payload. The team looks for the run in analytics and cannot find it.

**Why?**

- **A.** Trigger runs require the Bot Transcript Viewer role
- **B.** Analytics lags by up to 30 minutes
- **C.** The data is outside the 28-day window
- **D.** An analytics session cannot begin without a trigger payload - analytics tracks only successfully triggered runs

**Answer:** D

If a trigger fails and the agent does not receive a trigger payload, an analytics session cannot begin. Analytics tracks only successfully triggered runs.

**Source:** `['ANLY-091']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

### Q216 — Configure topics
*Bank: bank1 · Domain: TOPC · Difficulty: Medium*

> A component collection has three connected agents. A maker wants to set a primary agent so they can exclude some dependencies.

**What must happen first?**

- **A.** All other connected agents must be disconnected, because a primary agent cannot be set while multiple connected agents exist
- **B.** Dependencies must be removed manually
- **C.** Nothing - a primary agent can be set at any time
- **D.** The collection must be published

**Answer:** A

If the collection has multiple connected agents you cannot set a primary agent - you must disconnect all other agents first. Dependencies can only be excluded once a primary agent is set.

**Source:** `['TOPC-085', 'TOPC-083', 'TOPC-084']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-export-import-copilot-components

### Q217 — Plan an agent solution
*Bank: bank1 · Domain: TRBL · Difficulty: Hard*

> An administrator assigns a security group to the Copilot Studio authors setting, expecting only that group to be able to author agents. Other users still have access.

**Why?**

- **A.** The setting only applies to managed environments
- **B.** The setting takes 24 hours to apply
- **C.** The users hold the Environment Maker role
- **D.** The setting grants access in a pay-as-you-go scenario - it does not restrict access to only that group

**Answer:** D

The Copilot Studio authors setting is designed to grant access to users in the specified security group in a pay-as-you-go licensing scenario. It does not automatically restrict access to only those users.

**Source:** `['TRBL-029', 'TRBL-031']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/licensing/authors-access

### Q218 — Plan an agent solution
*Bank: bank1 · Domain: TRBL · Difficulty: Medium*

> A user cannot open Copilot Studio. The page loads only a splash screen, signing up for a trial does not help, and error 7604 appears.

**What is the cause?**

- **A.** The per-user license is missing
- **B.** Tenant-level enablement is missing - both a tenant-level and a user-level license are required
- **C.** The environment lacks Dataverse
- **D.** Their account is blocked by a data policy

**Answer:** B

A user license alone is not sufficient to access Copilot Studio. Both a tenant-level license and a user-level license are required, and when tenant-level enablement is missing the user sees this behavior.

**Source:** `['TRBL-039', 'TRBL-035']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/licensing/publish-license-error

### Q219 — Design multi-agent solutions in Copilot Studio
*Bank: bank1 · Domain: MULT · Difficulty: Medium*

> Three separate topics and a child agent are all configured to respond to the same event type.

**In what order are they called?**

- **A.** The order is non-deterministic
- **B.** Child agents always run first
- **C.** In order of creation, oldest first
- **D.** Alphabetically by name

**Answer:** C

If multiple agents or topics must be called based on the same type of event, they are called in the order of creation, oldest first.

**Source:** `['MULT-018']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent

### Q220 — Design multi-agent solutions in Copilot Studio
*Bank: bank1 · Domain: MULT · Difficulty: Hard*

> An architect wants to group a large tool estate into focused subagents that carry their own knowledge and instructions, without connecting to independently published agents.

**What is the right construct?**

- **A.** Child agents, which have their own orchestration and their own tool limits
- **B.** Fabric data agents
- **C.** Connected agents
- **D.** A2A protocol connections

**Answer:** A

A child agent is a lightweight agent that exists within the context of the main agent, letting you group tools, instructions and knowledge into clearly defined subagents. Because child agents have their own orchestration, they have their own tool limits.

**Source:** `['MULT-008', 'MULT-020', 'MULT-001']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-agent-connected

### Q221 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Hard*

> A team plans a Dynamics 365 Customer Service handoff. The agent is in the West Europe environment; Customer Service is installed in a different environment in the same region, and the agent is published.

**What is wrong?**

- **A.** Only the region matters
- **B.** Publishing is not required
- **C.** The agent and Dynamics 365 Customer Service must be in the same environment, and the package must be installed in that same environment
- **D.** Nothing - this configuration works

**Answer:** C

The agent and Dynamics 365 Customer Service must be in the same environment, the Customer Service package installation must be in the same environment as the agent, and the environments must also be in the same geographical region. The agent must be published for end-to-end capabilities.

**Source:** `['CHAN-004', 'CHAN-006', 'CHAN-008', 'CHAN-009']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-hand-off-omnichannel

### Q222 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Medium*

> A customer service agent is deployed to WhatsApp. The team plans to have users sign in with their Microsoft account and upload receipt photos.

**What is possible?**

- **A.** Neither - WhatsApp supports neither Microsoft authentication nor file upload or download
- **B.** Both, after publishing
- **C.** Authentication only
- **D.** File upload only

**Answer:** A

The WhatsApp channel does not support authentication with Microsoft, and does not support uploading or downloading files.

**Source:** `['CHAN-026', 'CHAN-027', 'CHAN-035']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-whatsapp · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

### Q223 — Evaluate security and governance considerations
*Bank: bank1 · Domain: TRBL · Difficulty: Medium*

> An agent must call a specific AI model. The tenant's policy requires data to remain in region, and no in-region deployment of that model exists.

**What happens?**

- **A.** The call falls back to the nearest region
- **B.** The agent cannot call the model
- **C.** The call succeeds with a warning
- **D.** The model is downgraded automatically

**Answer:** B

When an organization's policy requires data to stay within a specific region and no in-region deployment of the requested model is available for the tenant, the call is blocked. Separately, some models require explicit tenant or environment consent before agents can use them.

**Source:** `['TRBL-006', 'TRBL-007']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/troubleshooting-error-codes

### Q224 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A maker converted the development copy of a solution to managed so it would behave like production. They now need to move it to the test environment.

**What happens when they try to export it?**

- **A.** It exports normally as a managed solution
- **B.** It cannot be exported - a new solution must be created
- **C.** It exports, but only the unmanaged layer
- **D.** It exports after the managed flag is cleared

**Answer:** B

A managed solution cannot be exported. Converting the development solution to managed removes the export path entirely, and the recovery is to build a new solution.

**Source:** `['ALM-180']` · https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm

### Q225 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> SolutionA 1.0 sets an account number column to 30 characters. SolutionB is then imported and sets it to 50. SolutionA patch 1.0.1.0 is imported next, which sets it to 35. Finally SolutionB is uninstalled.

**What is the column length after SolutionB is uninstalled?**

- **A.** 35 characters, as applied by the SolutionA patch
- **B.** The column reverts to its default and must be reset manually
- **C.** 50 characters, as applied by SolutionB
- **D.** 30 characters, the base solution value

**Answer:** A

While SolutionB was present it held the top layer at 50, and the patch did not change that. Removing SolutionB exposes the next layer down, which is the SolutionA 1.0.1.0 patch value of 35.

**Source:** `['ALM-020', 'ALM-021', 'ALM-022', 'ALM-023']` · https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates

### Q226 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A release manager needs to remove a deprecated column from a managed solution already deployed to production.

**Which mechanism can actually remove the component?**

- **A.** An upgrade
- **B.** An update
- **C.** A patch
- **D.** Either a patch or an update

**Answer:** A

Patches support additive update but not removal, and an update deploys onto the previous version and also cannot delete components. Removing a component requires an upgrade.

**Source:** `['ALM-016', 'ALM-004']` · https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates · https://learn.microsoft.com/en-us/power-platform/alm/basics-alm

### Q227 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> A team is preparing a patch for a managed parent solution currently at version 2.3.1.0.

**Which version number is valid for the patch?**

- **A.** 2.4.0.0
- **B.** 3.0.0.0
- **C.** 2.3.2.0
- **D.** 2.3.1.0 with a different display name

**Answer:** C

A patch must keep the same major and minor number as its parent but carry a higher build and release number. 2.3.2.0 keeps major 2 and minor 3 while raising the build.

**Source:** `['ALM-014']` · https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates

### Q228 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Easy*

> A localization file is being imported with a solution. One translated string is 640 characters long.

**What happens?**

- **A.** The import process fails
- **B.** The string is truncated to 500 characters
- **C.** The string imports but is flagged for review
- **D.** Only strings over 1,000 characters are rejected

**Answer:** A

Dataverse cannot import translated text over 500 characters, and any item longer than that causes the import process to fail.

**Source:** `['ALM-025']` · https://learn.microsoft.com/en-us/power-platform/alm/create-solutions-support-multiple-languages

### Q229 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> An Azure DevOps pipeline imports a large solution. The task fails after a few minutes with a timeout.

**What is the recommended change?**

- **A.** Increase the agent job timeout to 10 minutes
- **B.** Split the solution into smaller solutions
- **C.** Switch the service connection to a service principal
- **D.** Select the asynchronous import option

**Answer:** D

The import task automatically times out after 4 minutes unless asynchronous import is selected. Asynchronous is recommended for larger solutions and polls until MaxAsyncWaitTime is reached.

**Source:** `['ALM-067']` · https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tool-tasks

### Q230 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Hard*

> An architect is designing a pipeline with a development environment, a test environment, a production environment, and a separate pipelines host.

**Which environments must be enabled as managed environments?**

- **A.** Test and production only
- **B.** The pipelines host only
- **C.** All four
- **D.** Development and the pipelines host only

**Answer:** A

All target environments used in a pipeline must be enabled as managed environments. Development environments are not required to be managed, and the pipelines host does not have to be managed either.

**Source:** `['ALM-029', 'ALM-031', 'ALM-128']` · https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines · https://learn.microsoft.com/en-us/power-platform/alm/pipelines

### Q231 — Implement ALM
*Bank: bank1 · Domain: ALM · Difficulty: Medium*

> A tenant administrator configures a default deployment pipeline rule for an environment group, then immediately tests it. The rule does not appear to apply.

**What is the most likely explanation?**

- **A.** Propagation can take up to 10 minutes
- **B.** The administrator needs the Deployment Pipeline Administrator role as well
- **C.** Environment groups do not support default rules
- **D.** The rule requires a pipeline run before it activates

**Answer:** A

After configuration, the rule can take up to 10 minutes to apply to development and sandbox environments in the group.

**Source:** `['ALM-044']` · https://learn.microsoft.com/en-us/power-platform/alm/default-deployment-pipeline-rule-for-environment-groups

### Q232 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An agent answers questions from SharePoint. The tenant has no Microsoft 365 Copilot licenses. Users report that a 40 MB policy PDF is never used in answers.

**What is the most likely cause?**

- **A.** The file exceeds the 7 MB limit that applies without a Microsoft 365 Copilot license
- **B.** The file exceeds the 5 MB SharePoint MCP file limit
- **C.** SharePoint knowledge sources cap files at 25 MB
- **D.** The file must be under 512 MB and is, so licensing is not the issue

**Answer:** A

Without a Microsoft 365 Copilot license in the same tenant, generative answers can only process SharePoint files up to 7 MB. With such a license the maximum rises to 200 MB, with tenant graph grounding and semantic search turned on.

**Source:** `['KNOW-054', 'KNOW-055']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

### Q233 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Medium*

> A maker connects twelve SharePoint lists to an agent, several of which hold over 50,000 rows.

**Which statement reflects the documented guidance?**

- **A.** Up to 25 lists, with no row guidance
- **B.** Unlimited lists provided each stays under 120,000 rows
- **C.** Up to 10 lists, with best performance when total rows stay within 120,000
- **D.** Up to 10 lists, each capped at 35,000 rows

**Answer:** C

You can select up to 10 lists at a time, and best performance occurs when total rows are limited to 120,000 across all lists. Lists over 35,000 rows affect quality and latency, but 35,000 is not a hard per-list cap.

**Source:** `['KNOW-011', 'KNOW-013']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/knowledge-sharepoint-lists

### Q234 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: KNOW · Difficulty: Hard*

> An agent grounds on a public website. Users report that long, detailed questions return nothing from the site, while short questions work.

**What explains the behavior?**

- **A.** Long questions exceed the 1,000-character evaluation limit
- **B.** The Bing web request cannot exceed 2,048 characters, and the agent skips the search when it would
- **C.** Public website sources are capped at four per agent
- **D.** Grounding with Bing Search only processes the first 20 results

**Answer:** B

Answering from a public website sends a request to Bing whose total length, including the search query, cannot exceed 2,048 characters. If the query pushes the request past the limit, the agent skips the search and returns no results from that website.

**Source:** `['KNOW-074']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website

### Q235 — Connect to enterprise knowledge sources
*Bank: bank1 · Domain: PRMT · Difficulty: Easy*

> A maker wants to remove a knowledge source they no longer need, and asks whether it can be restored later.

**What should you tell them?**

- **A.** Deletion is soft for 24 hours
- **B.** It can be restored within 30 days
- **C.** It can be restored by re-importing the solution
- **D.** Deleting a knowledge source is permanent and cannot be undone

**Answer:** D

Deleting a knowledge source is permanent and cannot be undone.

**Source:** `['PRMT-054']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-documents

### Q236 — Add tools to agents
*Bank: bank1 · Domain: MULT, TOOL · Difficulty: Medium*

> An architect is designing an agent that needs to reach roughly 200 distinct operations.

**What is the supported approach?**

- **A.** Attach all 200 tools and accept degraded performance
- **B.** Split the operations across two environments
- **C.** Raise the tool limit through a support request
- **D.** Use child agents, each with their own set of up to 128 tools

**Answer:** D

The orchestrator handles a maximum of 128 tools per agent, and Microsoft recommends no more than 25-30. Child agents have their own orchestration and their own set of up to 128 tools, and the separate limit is named as a benefit of the pattern.

**Source:** `['TOOL-052', 'TOOL-053', 'MULT-021']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent

### Q237 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Medium*

> A connector-backed tool fails whenever it queries a large table, but succeeds on small ones.

**What is the correct fix?**

- **A.** Increase the connector timeout
- **B.** Use the connector's Filter and Limit input parameters to reduce the response
- **C.** Move the connector into a solution
- **D.** Convert the tool into an agent flow

**Answer:** B

A connector response over 500 KB exceeds the Copilot Studio connector response limit. Most connectors expose Filter and Limit input parameters so the service returns less data.

**Source:** `['TOOL-029']` · https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/actions/connector-request-failure

### Q238 — Add tools to agents
*Bank: bank1 · Domain: TOOL · Difficulty: Easy*

> An agent generates a 14 MB report during a conversation.

**What does the user receive?**

- **A.** The file, split automatically into parts
- **B.** Nothing - files over 10 MB per file are not returned
- **C.** A download link valid for 28 days
- **D.** The first 10 MB of the file

**Answer:** B

Files the agent creates during a turn are capped at 10 MB per file, and files exceeding the cap are not returned to the user. The documented workaround is to ask the agent to split large output into smaller files.

**Source:** `['TOOL-008']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/tools-overview

### Q239 — Configure MCP tools
*Bank: bank1 · Domain: MCP · Difficulty: Hard*

> A developer adds an MCP server. Several tools documented by the server author never appear in the agent's tool list, and no error is shown.

**What is the most likely cause?**

- **A.** The API key was sent as a query parameter instead of a header
- **B.** The tools exceed the 128-tool limit
- **C.** The server URL is not a full URI
- **D.** The tools use reference-type inputs, which are unsupported and filtered out

**Answer:** D

Tools with reference-type inputs are filtered from the list of available tools for an MCP server. Reference type inputs and outputs are not supported, so the tool never appears rather than failing loudly.

**Source:** `['MCP-085', 'MCP-083']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-troubleshooting

### Q240 — Configure MCP tools
*Bank: bank1 · Domain: MCP · Difficulty: Medium*

> A team uses the SharePoint MCP server to move documents. A 30 MB file fails every time.

**Why?**

- **A.** SharePoint MCP file operations are limited to 5 MB
- **B.** The agent-level file cap of 7 MB applies
- **C.** The file exceeds the 16 MB Dataverse web API limit
- **D.** Binary files must be under 10 MB

**Answer:** A

SharePoint MCP file operations are limited to files of 5 MB or less, for both upload and download.

**Source:** `['MCP-054', 'MCP-055']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-onedrive-tools · https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-sharepoint-tools

### Q241 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Hard*

> A compliance officer asks for the transcript of a specific conversation that took place 45 days ago. The Analytics page shows activity for that period.

**Can the transcript be retrieved from Copilot Studio?**

- **A.** Yes - analytics data covers 360 days
- **B.** No - session details and transcripts cover only the last 28 days, and Studio download covers 29
- **C.** Yes - transcripts are retained for 89 days
- **D.** Only if the Bot Transcript Viewer role was assigned at the time

**Answer:** B

Analytics data is available for up to 360 days, but session details and transcript information are available only for the last 28 days, and transcripts can be downloaded from Copilot Studio for the past 29 days.

**Source:** `['ANLY-084', 'ANLY-046']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-studio

### Q242 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> An auditor requests evaluation results from five months ago.

**What is the correct response?**

- **A.** They are retained for 28 days
- **B.** They are retained for 360 days and can be exported now
- **C.** They were retained for 89 days and are gone unless exported to CSV earlier
- **D.** They are retained for 12 months

**Answer:** C

Test results are available in Copilot Studio for 89 days, and exporting to CSV is the documented way to keep them longer.

**Source:** `['ANLY-055']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create

### Q243 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Easy*

> A new agent has been live for four days with light traffic. The Themes section shows nothing.

**What is required before themes appear?**

- **A.** 360 days of accumulated data
- **B.** A premium licence
- **C.** At least 10,000 sessions
- **D.** 50 questions with generative answers, from 50 different sessions, in the past seven days

**Answer:** D

At least 50 questions with generative answers, from 50 different sessions, must be logged in the past seven days before Copilot Studio generates suggested themes.

**Source:** `['ANLY-095']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-themes

### Q244 — Evaluate agent performance
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> A session ended without the user reaching a resolution and without escalation.

**When is that session classified as Abandoned?**

- **A.** Immediately when the user closes the window
- **B.** When an engaged session times out after 30 minutes without reaching resolved or escalated
- **C.** After 28 days of inactivity
- **D.** After three minutes on the Telephony channel

**Answer:** B

A session is considered Abandoned when an engaged session times out after 30 minutes and did not reach a resolved or escalated state.

**Source:** `['ANLY-030']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness

### Q245 — Manage variables
*Bank: bank1 · Domain: TOPC · Difficulty: Hard*

> An API key held in a secret environment variable is rotated. The agent is not republished. A test call immediately afterwards still uses the old key.

**What is the correct explanation?**

- **A.** The agent must be republished for secret variables to refresh
- **B.** The variable must be converted to a non-secret type
- **C.** The dialog runtime caches the secret value for five minutes
- **D.** Secret variables are read only at publish time

**Answer:** C

The dialog runtime caches the secret value for five minutes, and caches unsuccessful reads for 30 seconds. No republish is required, but the change is not instant either.

**Source:** `['TOPC-110']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables

### Q246 — Configure topics
*Bank: bank1 · Domain: ANLY · Difficulty: Medium*

> An agent is published to the Telephony channel. A caller stops responding after an End Conversation event.

**How long before the conversation times out?**

- **A.** Three minutes
- **B.** 28 days
- **C.** 30 minutes, as on all channels
- **D.** 10 seconds

**Answer:** A

For agents published to the Telephony channel, conversations time out three minutes after an End Conversation event, rather than following the standard 30-minute inactivity timeout.

**Source:** `['ANLY-088', 'ANLY-089']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

### Q247 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Medium*

> A maker publishes a fix. A user in an active conversation reports the old behavior persists, while a colleague starting fresh sees the fix.

**What is happening?**

- **A.** The user needs to clear their browser cache
- **B.** The channel caches content for 24 hours
- **C.** Published content only becomes available to a user on a new session
- **D.** The publish failed for one user

**Answer:** C

To avoid disrupting users in an existing conversation, the latest published content only becomes available after a new session starts.

**Source:** `['CHAN-020', 'CHAN-031']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-facebook · https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

### Q248 — Plan channels and deployment
*Bank: bank1 · Domain: CHAN · Difficulty: Easy*

> An agent named 'Contoso Enterprise Customer Support Assistant Agent' fails to connect to Dynamics 365 Customer Service.

**What is the most likely cause?**

- **A.** The name must match the solution name
- **B.** The name contains spaces
- **C.** The name exceeds 30 characters
- **D.** Agent names must be lowercase

**Answer:** C

Copilot Studio agents with names longer than 30 characters fail to connect when following the documented Omnichannel handoff steps.

**Source:** `['CHAN-005']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-hand-off-omnichannel

### Q249 — Configure advanced agent responses with custom prompts
*Bank: bank1 · Domain: PRMT · Difficulty: Medium*

> A maker wants a prompt to analyze three uploaded spreadsheets together and return two output files.

**Which part of this is supported?**

- **A.** Multiple outputs are supported; multiple inputs are not
- **B.** Multiple inputs are supported; multiple outputs are not
- **C.** Neither - analyzing multiple files in one prompt and returning multiple file outputs are both unsupported
- **D.** Both, using code interpreter

**Answer:** C

Analyzing multiple files uploaded in a single prompt is not supported, and returning multiple file outputs in a single prompt is not supported either.

**Source:** `['PRMT-004', 'PRMT-005']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/code-interpreter-for-prompts

### Q250 — Configure advanced agent responses with custom prompts
*Bank: bank1 · Domain: PRMT · Difficulty: Hard*

> A prompt is being designed with extensive instructions, a Word template for output, and several images passed as input.

**Which set of limits applies?**

- **A.** 8,000-character instructions, 20 MB layout, 25 MB total image input
- **B.** 4,000-character instructions, 16 MB layout, 10 MB total image input
- **C.** 8,000-character instructions, 5 MB layout, 512 MB total image input
- **D.** 500-character instructions, 20 MB layout, 25 MB per image

**Answer:** A

Prompt instructions are limited to 8,000 characters, a document layout cannot exceed 20 MB, and image or document input must total less than 25 MB across all files.

**Source:** `['PRMT-089', 'PRMT-016', 'PRMT-077']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-generative-answers-prompt-modification · https://learn.microsoft.com/en-us/microsoft-copilot-studio/generate-document-output-prompt · https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-inputs-prompt

### Q251 — Evaluate security and governance considerations
*Bank: bank1 · Domain: TRBL · Difficulty: Hard*

> An agent begins failing intermittently under load. One error mentions RATE_LIMIT_REACHED; later the same day a different error reports QUOTA_EXCEEDED.

**What distinguishes the two?**

- **A.** They are synonyms surfaced by different components
- **B.** RATE_LIMIT_REACHED is per environment; QUOTA_EXCEEDED is per agent
- **C.** QUOTA_EXCEEDED clears within a minute; RATE_LIMIT_REACHED requires a support request
- **D.** RATE_LIMIT_REACHED is a short-lived burst limit; QUOTA_EXCEEDED is a longer-running usage quota

**Answer:** D

Unlike RATE_LIMIT_REACHED, which is a short-lived burst limit, QUOTA_EXCEEDED indicates a longer-running usage quota, typically tracked in tokens or requests over a period.

**Source:** `['TRBL-009']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/troubleshooting-error-codes

### Q252 — Plan identity strategy
*Bank: bank1 · Domain: PRMT, TOPC · Difficulty: Medium*

> An agent is configured with No authentication. The team then asks why Dataverse tables cannot be added as a knowledge source and why active user metrics are empty.

**What is the common cause?**

- **A.** Dataverse knowledge requires generative orchestration
- **B.** The agent has not been published
- **C.** A missing premium licence
- **D.** The authentication setting - anonymous agents cannot use Dataverse knowledge, and active user metrics require authentication

**Answer:** D

Agents configured to allow anonymous users cannot use Dataverse tables as knowledge sources, and the active user metrics feature is only supported when the agent is set to require authentication.

**Source:** `['PRMT-056', 'TOPC-022']` · https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-prompt-node · https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-review-activity

### Q253 — Add tools to agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A retailer needs one agent to call a proprietary inventory API. No prebuilt connector exists, and no
> other agent, app or flow will ever call it.

**Which is the most appropriate tool?**

- **A.** Custom connector
- **B.** REST API tool
- **C.** MCP server
- **D.** Agent flow

**Answer:** B

**One agent, no existing connector, no reuse elsewhere.** A REST API tool is the lightweight path -
built by uploading an **OpenAPI v2 JSON** spec (a v3 spec auto-converts).

**Why not A:** a custom connector's entire value is **reuse across the Power Platform**, and there is
none here. **Note for the real world:** REST API tools were **in preview** at time of writing, so confirm
status before production.

### Q254 — Add tools to agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> The same retailer later finds that **three agents, a canvas app and two flows** all need that same API.

**What changes?**

- **A.** Nothing - duplicate the REST API tool in each
- **B.** Build a custom connector
- **C.** Move it to an HTTP request node
- **D.** Publish it as a Bot Framework skill

**Answer:** B

**Reuse is the trigger.** A custom connector is reusable across Power Apps, Power Automate, Logic Apps
and Copilot Studio; **a REST API tool is scoped to one agent and cannot be shared** across Power Platform
products.

**Why Q1 and Q2 are a pair:** the same API, and the answer flips purely on **how many things call it**.

### Q255 — Add tools to agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A teammate built a custom connector. Another maker cannot see it in Copilot Studio.

**What is the most likely cause?**

- **A.** The connector has not been shared with them in Power Apps
- **B.** The connector requires generative orchestration
- **C.** Custom connectors cannot be used in Copilot Studio
- **D.** The agent must be published first

**Answer:** A

**Sharing happens outside Copilot Studio** - `make.powerapps.com` → Data → Custom connectors → assign
**can view** or **can edit**. Connections are shared separately, with **can use + share**.

**Why this earns a question:** it is described as the number one reason a custom tool fails to appear,
and the fix is in a different product than the one you are working in.

### Q256 — Add tools to agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> An enterprise platform team maintains a single catalog of tools that **ten agents** consume, and wants
> new tools to reach all of them without each team republishing.

**Which approach?**

- **A.** Custom connectors shared across the environment
- **B.** An MCP server
- **C.** A REST API tool per agent
- **D.** Agent flows in a shared solution

**Answer:** B

**Publish once, inherit everywhere.** Server-side changes propagate to every connected agent with no
per-agent work - which is exactly the requirement.

**Why not A:** custom connectors are reusable but each agent still adds and configures the tool itself,
and new actions do not arrive automatically.

### Q257 — Add tools to agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A maker connects an MCP server and finds one tool's description is vague, causing misrouting. They want
> to rewrite it in Copilot Studio.

**Can they?**

- **A.** Yes, on the tool's configuration page
- **B.** No - MCP tool descriptions are server-side and read-only; the server owner must change it
- **C.** Yes, but only for tools they enabled manually
- **D.** Yes, by overriding it in the agent's instructions

**Answer:** B

**MCP tool descriptions are dictated by the server and cannot be edited in Copilot Studio.** The only
remediation is to work with the server owner.

**Why this matters architecturally:** generative orchestration routes **entirely on those descriptions**,
so **the reliability of your agent depends on someone else's writing.** That is a real reason to evaluate
a server before connecting to it.

### Q258 — Add tools to agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A topic must call an MCP tool at one precise point in a conversation.

**Is this supported?**

- **A.** Yes, using an add-a-tool node
- **B.** No - topics cannot call MCP servers; only the orchestrator can invoke them
- **C.** Yes, but only in classic orchestration
- **D.** Yes, if the MCP server is Microsoft-published

**Answer:** B

**MCP tools are invoked exclusively through generative orchestration.** Classic mode does not support MCP
at all, which also rules out **C**.

**The consequence to remember:** if you need **deterministic, topic-controlled invocation**, MCP is the
wrong integration choice - use a connector or a REST API tool.

### Q259 — Add tools to agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> An agent uses computer use to complete a task on a website. The organization needs a named person
> alerted if the agent detects instructions that could alter its behavior.

**Which setting, and what is the constraint?**

- **A.** Human supervision - and the reviewer should be the person who ran it, because activity is tied
    to the initiator
- **B.** Content moderation - set to high
- **C.** DLP policy - configured by an admin
- **D.** Approval-based delegated deployment

**Answer:** A

**L1.** It names a reviewer contacted by email when the agent detects potentially harmful instructions.
**The constraint is the examinable half:** each run and its activity are **tied to the user who initiated
it**, so a different reviewer generally **cannot see the activity** and cannot verify the request. **If
nobody responds before the response time limit expires, the run stops.**

**Why not B:** content moderation filters harmful **content in the conversation**; this is about
instructions aimed at the agent during a computer use run.

### Q260 — Add tools to agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A computer use tool is configured with **maker-provided credentials**, the default, and the agent is
> shared with the wider team.

**What is the risk?**

- **A.** None - maker credentials are scoped per user
- **B.** Everyone using the agent acts with the author's access on that machine
- **C.** The tool cannot run until each user signs in
- **D.** The agent cannot be published to an authenticated channel

**Answer:** B

**L1, and it is stated as an explicit warning.** Maker-provided credentials are the **default** for
computer use and are suited to autonomous agents - but sharing the agent hands over the author's machine
access.

**Why this is worth flagging:** the general guidance elsewhere favors end-user credentials, so **computer
use inverts the usual default.** The alternative, end-user credentials, requires every user to have their
own access to the machine.

### Q261 — Configure multi-agent collaboration
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A support team owns a single agent handling billing, technical troubleshooting and account management.
> Routing has become unreliable, and one team owns all three areas end to end. Nothing needs publishing
> separately.

**What should they do?**

- **A.** Split into connected agents
- **B.** Split into child agents under a parent orchestrator
- **C.** Add explicit topics for each area
- **D.** Increase the number of tools

**Answer:** B

**Single team ownership, no separate publishing, no reuse elsewhere - that is the child agent profile.**
Splitting shrinks the parent's routing surface, which is what repairs the accuracy.

**Why not A:** connected agents add an orchestration hop, latency, a wider governance surface and
independent ALM you do not need here. **Why not D:** more tools is the cause of the problem, not the fix -
routing degrades well before the ceiling. **CORRECTED from Microsoft Learn 2026-08-22: the hard maximum is 128 tools per agent under generative orchestration, and Microsoft recommends no more than 25-30.** Both ingested courses said "30-40", which lost both numbers.

### Q262 — Configure multi-agent collaboration
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> The returns process is taken over by a **separate customer operations team**, which needs to publish it
> on its own schedule and expose it to other orchestrators.

**What changes?**

- **A.** Nothing - keep it as a child agent
- **B.** Convert it to a connected agent
- **C.** Move it to a Fabric data agent
- **D.** Publish it as a Bot Framework skill

**Answer:** B

**The three triggers all flipped at once:** a different team owns it, it needs its own publishing
lifecycle, and it will be reused by other orchestrators. **Child agents cannot do any of those** - their
ALM is coupled to the parent.

**Why Q1 and Q2 are a pair:** the same capability, and the correct architecture changes because the
**organizational boundary** changed, not the technology.

### Q263 — Configure multi-agent collaboration
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> An orchestrator must connect to another **Copilot Studio agent** owned by the legal team. The connection
> does not appear as available.

**Which is **not** a valid cause?**

- **A.** The target agent is in a different Power Platform environment
- **B.** The target agent has never been published
- **C.** The target agent's owner has not enabled connections
- **D.** The orchestrator's maker lacks global admin rights

**Answer:** D

**The question asks which is NOT a cause.** Global admin rights **do not bypass agent-level sharing** -
that is stated explicitly.

**A, B and C are all real prerequisites:** same Power Platform environment (a hard isolation boundary),
**at least one published version** since drafts are invisible, and the owner must toggle on **let other
agents connect**.

### Q264 — Configure multi-agent collaboration
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A data science team built an agent in the **legacy Azure AI Studio portal**. Connecting it to Copilot
> Studio returns a 404.

**What is the fix?**

- **A.** Recreate and publish the agent in the new Microsoft Foundry portal
- **B.** Add the project endpoint URL manually
- **C.** Grant the maker access to the Azure subscription
- **D.** Enable external models for the environment

**Answer:** A

**Agents built in the legacy Azure AI Studio portal return a 404** and must be recreated in the new
Microsoft Foundry portal. There is no workaround from the Copilot Studio side.

**Why not D:** enabling external models is a **computer use** requirement for Anthropic models, not the
cause of a Foundry connection 404.

### Q265 — Configure multi-agent collaboration
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A finance team publishes a Fabric data agent for spend analytics. A maker builds a topic that collects a
> cost centre and then wants to **redirect** to the Fabric agent.

**What happens?**

- **A.** It works - agent redirect supports any connected agent
- **B.** It is not supported; Fabric data agents are reachable only through generative orchestration
- **C.** It works only if the Fabric agent is in the same environment
- **D.** It works only with F64 capacity or higher

**Answer:** B

**Directing a user to a Fabric data agent from a topic using an agent redirect node is not supported.**
Routing must happen organically through the AI evaluating intent against the agent's **description**.

**The practical consequence:** for Fabric, **the description is the only steering wheel**, which is why
it has to state the data domain precisely - and what it does *not* cover.

**Why not D:** **F2** or Power BI Premium P1+ is the capacity floor, and it is a prerequisite for
connecting at all, not for redirect.

### Q266 — Configure multi-agent collaboration
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A logistics partner runs its own AI agent on a non-Microsoft platform, with its own reasoning and tools.
> Users need multi-turn follow-up questions to work.

**Which integration?**

- **A.** HTTP request node
- **B.** Custom connector
- **C.** A2A protocol
- **D.** MCP server

**Answer:** C

**Three signals point here:** non-Microsoft platform, the partner owns its own reasoning, and **multi-turn
is required**. A2A maintains conversation continuity across the boundary via **context IDs**.

**Why not A or B:** both return **raw data**, not a reasoned response, and neither carries multi-turn
state. **Why not D:** MCP connects an agent to **tools**, keeping reasoning on your side - the opposite of
what is described.

### Q267 — Configure multi-agent collaboration
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> While configuring that A2A connection, the name and description fields stay blank after entering the
> endpoint.

**What is the first troubleshooting step?**

- **A.** Re-enter the endpoint with the `/.well-known/agent.json` path appended in a browser to confirm
    the agent card exists
- **B.** Switch authentication to none
- **C.** Rebuild the orchestrator
- **D.** Ask the partner to expose an OpenAPI spec instead

**Answer:** A

Blank auto-populated fields mean **the agent card was not discovered**. Isolating the network layer -
does a valid JSON payload actually return - separates "wrong URL" from "malformed card" immediately.

**Why not B:** switching auth to **none** does not fix discovery, and none is sandbox-only in any case.

### Q268 — Configure multi-agent collaboration
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> Six months after connecting a partner's agent, the partner adds new capabilities and publishes. Your
> orchestrator never routes any of the new query types to them, and users get "I can't help with that."

**What happened?**

- **A.** The connection expired and must be recreated
- **B.** Your orchestrator holds a **local copy** of the description that does not sync automatically
- **C.** The partner's authentication changed
- **D.** The new capabilities require MCP rather than A2A

**Answer:** B

**The static sync trap.** Connecting **copies the target's description locally** and relies on that copy
for routing. The partner's new capabilities exist and are live, but your routing table has never heard of
them - so they are **silently never routed to**.

**Why the design is deliberate:** it stops another team's edit changing your routing without your
approval. **The cost is that description sync becomes an operational process**, not a technical one - and
if that agent is connected to twenty orchestrators, that is twenty manual updates.

### Q269 — Configure topics
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A topic must answer a question using **only two** of the eight documents attached to the agent.

**Which node, and what is the behavior if it finds nothing in those two?**

- **A.** Generative answers node; it falls back to the agent's other sources
- **B.** Generative answers node; it returns "no information found" unless AI general knowledge is
    explicitly included
- **C.** Custom prompt; it returns an empty string
- **D.** Perform custom search; it queries all eight regardless

**Answer:** B

**Node-level sources override agent-level sources.** Configuring specific sources on the node scopes the
search to exactly those.

**The behavior is the examinable half:** finding nothing returns a **no information found** state. It
does **not** silently fall back to the agent's other sources or to general AI knowledge **unless you tick
include AI general knowledge**. **A is the trap** - it describes a fallback that does not happen.

**Practical consequence:** put a **condition node after the generative answers node** to catch that state
and route to an escalation, or the user gets a dead end.

### Q270 — Configure topics
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A topic pipes live regulatory data from an API into a generative answers node as custom data. The API
> returns 50 records, correctly formatted.

**What does the agent use?**

- **A.** All 50, ranked by relevance
- **B.** The first three, selected by position
- **C.** The three most relevant, selected semantically
- **D.** As many as fit within the token limit

**Answer:** B

**The rule of three.** Copilot Studio uses only the **first three records** in the custom data table, and
selects them **positionally - relevance is not considered.**

**Why this is the highest-value fact in the group:** the agent will confidently answer from **whatever
happened to be first**. **Your API or flow must filter and rank upstream** so the top three are the right
three. **C is the trap** - it describes the sensible behavior rather than the actual one.

### Q271 — Configure topics
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**That custom data must be shaped into a table. Which columns are required?**

- **A.** `content`, `content location`, `title` - and only `content` is strictly required
- **B.** `title` and `url`, both required
- **C.** `id`, `content`, `score` - all required
- **D.** Any columns; Copilot Studio infers the schema

**Answer:** A

`content` is the text the AI uses, `content location` becomes the citation URL, `title` is the citation
label. **Feed it any other shape and it fails.**

### Q272 — Configure topics
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A compliance team needs the agent to answer formally, in numbered steps, and never speculate beyond the
> provided sources.

**What is the correct approach, and what is the limit?**

- **A.** Custom instructions on the node; 8,000 characters
- **B.** A custom prompt; 2,000 characters
- **C.** Agent-level instructions; unlimited
- **D.** Content moderation set to high; no character limit

**Answer:** A

Custom instructions govern **tone, format and scope**, entered in the node's data source panel.

**The reason the phrasing in the question works** is that all three requirements are **observable**:
formal tone, numbered steps, no speculation. **Vague instructions like "be helpful" do nothing** - the
model cannot check its own draft against a quality it cannot measure.

**Scope is the compliance-relevant one:** it is what stops the model speculating beyond the sources.

### Q273 — Configure topics
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> An employee opens an adaptive card that collects leave dates, then closes it without pressing submit.

**What happens, and what should the topic do about it?**

- **A.** The topic errors immediately; nothing can be done
- **B.** Copilot Studio produces empty variables; add a condition node after the card to check the data
    exists
- **C.** The card resubmits automatically after a timeout
- **D.** The agent re-prompts by default

**Answer:** B

**An unsubmitted card produces no values**, and the output variables stay empty. Downstream nodes then
expect populated data and fail confusingly.

**The fix is structural, not defensive coding:** **always** place a condition node immediately after an
*Ask with adaptive card* node to verify the data exists, and branch to a restart or escalation if not.

### Q274 — Configure topics
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A card renders perfectly in the Copilot Studio test pane and does not appear at all in Microsoft Teams.

**What is the cause and the fix?**

- **A.** Schema version - Teams caps at 1.5, the test pane uses the 1.6 web engine; set `version` to 1.5
- **B.** A missing connection; recreate it
- **C.** Teams does not support adaptive cards; use plain text
- **D.** The agent needs republishing to Teams

**Answer:** A

**Teams and live chat cap at schema 1.5; the web channel supports 1.6 - and the test pane uses the web
engine.** So the test pane is a **bad proxy for Teams**, and the failure is usually **silent**.

**The three-second fix:** set `version` to **1.5** in the card JSON. **The best practice:** design
everything to 1.5 rather than maintaining per-channel variants.

**Related gotcha:** the **authoring canvas does not render 1.6 cards at all**, so a card can appear to be
missing entirely until you open the test pane.

### Q275 — Configure topics
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A designer wants tappable buttons that suggest next steps but must not block a user who types something
> else.

**Which element, and what is the design caveat?**

- **A.** Quick replies; some channels drop them, so always offer a text path too
- **B.** A question node; it blocks until a valid answer is given
- **C.** An `input.choiceset`; it requires submit
- **D.** An adaptive card action; it works identically on all channels

**Answer:** A

**Quick replies guide; a question node constrains.** Quick replies are optional suggestions the user may
ignore, which is exactly what was asked for.

**The caveat is the design rule:** some channels **drop quick replies entirely** or silently hide buttons
past a limit. **Never build a flow that requires clicking one** - always include an explicit text prompt
such as "select an option below or type your choice", or users on those channels are stuck.

### Q276 — Connect to enterprise knowledge sources
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A bank's agent must answer "what is the current balance on account 4471?" Banking regulations prohibit
> copying account data into Microsoft 365.

**Which knowledge source?**

- **A.** Copilot connector
- **B.** Real-time Power Platform connector
- **C.** Azure AI Search
- **D.** SharePoint document upload

**Answer:** B

**Two cue phrases point here: the data is live, and it cannot be replicated.** A real-time connector
queries the source at runtime and **copies nothing into Microsoft 365**.

**Why not A or D:** both **index content into Graph** - a compliance violation here, and stale for a
balance. **Why not C:** Azure AI Search is still an index, and it is for unstructured content.

### Q277 — Connect to enterprise knowledge sources
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> The same bank needs the agent to answer questions from an IT knowledge base held in a **non-Microsoft**
> wiki. Answers must include **clickable citations** to the source article.

**Which knowledge source?**

- **A.** Real-time Power Platform connector
- **B.** Copilot connector
- **C.** Dataverse
- **D.** An HTTP request node

**Answer:** B

**Non-Microsoft enterprise content + citations = Copilot connector.** It indexes into Microsoft Graph,
which is precisely what makes clickable citations possible.

**Why not A:** a real-time connector has **no indexed document to cite**. That trade-off - freshness
versus citations - is the whole comparison between these two.

### Q278 — Connect to enterprise knowledge sources
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A maker opens Copilot Studio to add the Copilot connector their admin promised. It is not in the list.

**What is the most likely cause?**

- **A.** The connector is blocked by DLP
- **B.** The tenant admin has not yet configured it in the Microsoft 365 admin center
- **C.** The maker lacks a premium licence
- **D.** The agent is not published

**Answer:** B

**Copilot connectors are configured at the tenant level by an administrator**, and a maker cannot add one
until that is done.

**Why this is worth knowing cold:** a passing candidate reports being asked which system you go to, with
Copilot Studio, Power Apps and the Power Platform admin center as distractors. **The answer is the
Microsoft 365 admin center.**

### Q279 — Connect to enterprise knowledge sources
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> An agent using a Copilot connector is published to Microsoft Teams. Everything is configured correctly,
> but at runtime the agent returns **no content at all** from the connector.

**What was missed?**

- **A.** The `ExternalItem.Read.All` Graph scope in the channel's authentication settings
- **B.** The connector was not shared in Power Apps
- **C.** The agent needs a premium connector licence
- **D.** Teams does not support Copilot connectors

**Answer:** A

**L1.** Publishing an agent that uses a Copilot connector to an authenticated channel requires manually
adding that scope in the channel's authentication configuration. **Without it the agent returns nothing
at runtime**, with everything else perfect.

**Why the scope exists:** the agent reads the Graph index **on the signed-in user's behalf**, so the user
must grant that permission - which is also what keeps results scoped to what they are allowed to see.

### Q280 — Connect to enterprise knowledge sources
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A compliance team maintains its own vector index with a custom embedding pipeline, and the content
> cannot be indexed into Microsoft Graph.

**Which knowledge source?**

- **A.** Copilot connector
- **B.** Azure AI Search
- **C.** Real-time Power Platform connector
- **D.** File upload to Dataverse

**Answer:** B

**Own vector index + own embedding pipeline + must stay out of Graph = Azure AI Search.** It sits outside
Microsoft Graph but inside Azure, and gives the organization control over embeddings, relevance tuning
and the index itself.

### Q281 — Connect to enterprise knowledge sources
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> While adding Azure AI Search as a knowledge source, a maker types the endpoint URL and API key straight
> into the form to save time.

**What is the consequence?**

- **A.** Nothing - it is a supported shortcut
- **B.** It creates a corrupted environment-level connection that can break Azure AI Search for every
    agent in the environment
- **C.** The credentials are stored insecurely but the connection works
- **D.** The connection works until the key rotates

**Answer:** B

**Always use *create new connection*.** Manual entry of an endpoint and key produces a faulty
**environment-level** connection - and **there is no delete button**. Recovery means resetting external
access or rebuilding.

**Why this is the nastiest item in the group:** the blast radius is **every agent in the environment**,
not just yours, and the shortcut looks entirely reasonable.

### Q282 — Connect to enterprise knowledge sources
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> An organization's Azure AI Search service sits behind a private endpoint and must never be exposed to
> the public internet.

**What is the correct sequence?**

- **A.** The maker configures VNet support while creating the connection in Copilot Studio
- **B.** An admin configures VNet support in the Power Platform admin center **before** the maker creates
    the connection
- **C.** VNet is unsupported; the service must be made public
- **D.** The maker creates the connection first, then requests VNet support

**Answer:** B

**Infrastructure first, connection second.** VNet support is an administrative, environment-level
decision and must exist **before** the maker starts the connection.

**Why not A or D:** the maker cannot configure it, and doing it in the wrong order means redoing the
connection.

### Q283 — Create and monitor agent flows
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A refund process must validate an order, create the refund in Dynamics 365, email the customer, and
> return a status - **in that order**, with step 2 running only if step 1 succeeds.

**Which integration?**

- **A.** A connector tool
- **B.** An agent flow
- **C.** An HTTP request node
- **D.** A child agent

**Answer:** B

**The trigger word is *deterministic*, and the giveaway is the dependency chain** - step 2 runs only if
step 1 succeeded. That is multi-step conditional logic a single call cannot coordinate.

**Why not A:** a connector tool performs **one action**. **Why not C:** an HTTP node is a single ad-hoc
request with no sequencing. **Why not D:** a child agent handles a **domain**, not a fixed procedure.

### Q284 — Create and monitor agent flows
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A maker built the flow in Power Automate, but it does not appear in the tool picker in Copilot Studio.

**Which is **not** one of the requirements it may be missing?**

- **A.** The *when an agent calls the flow* trigger
- **B.** A *Respond to the agent* action
- **C.** The asynchronous response toggle turned **on**
- **D.** Being built as a solution flow

**Answer:** C

**The question asks which is NOT a requirement.** The toggle must be **OFF** - that is what makes the
topic wait for the output. Turned on, it breaks the pattern.

**The full checklist is five items:** the agent trigger, a **Respond to the agent** action, **async
response off**, **declared input and output parameters**, and it must be a **solution flow**. **Missing
any one makes the flow invisible in the picker** - which is the symptom described.

### Q285 — Create and monitor agent flows
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A document-generation process takes about eight minutes.

**How should it be designed?**

- **A.** Increase the agent flow timeout to 10 minutes
- **B.** Turn on **Asynchronous response** in the *Respond to the agent* action settings
- **C.** Split it into five separate agent flows called in sequence
- **D.** Move it to an HTTP request node, which has no timeout

**Answer:** B

**L1, and it supersedes what both courses taught.** Turning on **Asynchronous response** in the *Respond
to the agent* action settings lets the flow **run past the two-minute limit and return a callback** when
it finishes. It requires an environment on the new infrastructure.

**Two caveats that make this examinable:**
- **Callbacks are fully supported in Microsoft Teams. They are NOT supported for Microsoft 365 Copilot or
  telephony.** Other channels may work but are not formally tested.
- If the user sends another message before the flow finishes, **the flow still completes**, but the agent
  answers the newer message without waiting.

**The manual job-ID split both courses describe still works** and is the right answer where async response
is unavailable - but it is no longer the only option.

**Why not A:** the limit is **two minutes** and is not adjustable - it is Copilot Studio's wait, not the
flow's. **CORRECTED from Microsoft Learn: both courses said 100 seconds, which is actually the PROMPT
EXECUTION limit.**
**Why not C:** five sequential flows still total eight minutes of waiting.

**Bonus:** to make the agent respond **immediately** after triggering a flow, **remove the *Respond to the
agent* action entirely.**

### Q286 — Create and monitor agent flows
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**What happens if an agent flow exceeds the default response limit?**

- **A.** The flow is cancelled and rolls back
- **B.** The action times out and the conversation breaks; the flow itself keeps running
- **C.** The agent waits and returns the result late
- **D.** The agent retries the flow automatically

**Answer:** B

**The flow keeps running** - it is the **agent** that fails, with no response returned. That asymmetry is
the detail worth remembering: the back-end work may well complete while the user sees a failure.

**Why not A:** nothing rolls back. **Why not D:** there is no automatic retry.

### Q287 — Create and monitor agent flows
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A flow returns 20 fields. The conversation needs only two.

**What is the recommended practice, and why?**

- **A.** Capture all 20 for future flexibility
- **B.** Capture only the two needed - it keeps the schema minimal and avoids type mismatches
- **C.** Capture all 20 but hide the rest
- **D.** Split the flow so each returns one field

**Answer:** B

**Minimal schema is the stated best practice.** It keeps topics maintainable and **prevents type
mismatches** - a real class of runtime error.

**The same principle recurs across the exam:** minimal surface area also applies to selecting REST API
endpoints and to enabling MCP tools. **Wherever you can narrow what the agent sees, narrow it.**

### Q288 — Create and monitor agent flows
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> An approval must be reviewed by a manager before the process continues.

**What is this pattern called, and where does it belong?**

- **A.** Human-in-the-loop; it belongs in an agent flow
- **B.** Content moderation; it belongs at the agent level
- **C.** Human supervision; it belongs in computer use configuration
- **D.** Delegated deployment; it belongs in a pipeline

**Answer:** A

It is named directly in the objective list - *create a human-in-the-loop agent flow* - and the pause for
approval is exactly the kind of conditional, multi-step process agent flows exist for.

**Why not C:** **human supervision** is a real thing but belongs to **computer use**, where a reviewer is
emailed about potentially harmful instructions. **Do not confuse the two** - both involve a person
approving something, and only one is an agent flow pattern.

**Design note:** an approval can take hours, so this is the classic case for **asynchronous response**
from Q3 - or the manual job-ID split where async is unavailable.

### Q289 — Evaluate agent performance
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

> Contoso built an HR agent. QA needs to confirm it can hold context across a multi-step leave request -
> asking a clarifying question, remembering the dates given two turns earlier, and completing the booking.

**Which evaluation approach fits?**

- **A.** A single response evaluation using Exact match
- **B.** A conversation test set using General quality
- **C.** A single response evaluation using Compare meaning
- **D.** A conversation test set using Text similarity

**Answer:** B

The requirement is **holding context across turns**, which is exactly what a conversation (multi-turn)
evaluation measures.

**Why not the others:** **D is the trap.** It correctly picks a conversation test set, but **Text
similarity is single-response only.** So are **Exact match (A)** and **Compare meaning (C)**.
**Only General quality, Keyword match and Custom work with conversation test sets** - which is the whole
point of the question. **L1: Microsoft Learn, *Create a conversational test set*.**

### Q290 — Evaluate agent performance
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

> A team wants to verify that a specific prompt causes the agent to call the correct tool.

**Which test method should they choose?**

- **A.** Tool use
- **B.** General quality
- **C.** Keyword match
- **D.** Custom

**Answer:** A

Tool use measures **whether the test case used all or any of the expected resources**, scored pass/fail
against expected capabilities.

**Why not:** General quality scores overall response quality, not which tool fired. Keyword match looks
at output text. Custom needs you to define criteria that Tool use already provides. **L1.**

### Q291 — Evaluate agent performance
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

> An evaluation of 20 prompts finishes. The agent called the **wrong tool on almost every test case**,
> across completely unrelated scenarios.

**What is the most likely cause?**

- **A.** One specific tool's description is wrong
- **B.** The agent flow behind one tool is timing out
- **C.** The descriptions are weak broadly, or the model is a poor fit
- **D.** The test set contains invalid expected answers

**Answer:** C

**The pattern is what identifies the cause.** Wrong tool **across different, unrelated** test cases
points at a systemic problem, not one component.

**Why not A:** a single wrong description produces wrong tool calls **for one type of case**, not across
all of them. **B** would show as one action failing (see Q4). **D** would show as failures unrelated to
tool choice.

### Q292 — Evaluate agent performance
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

> The same evaluation shows a **single agent flow action failing** while every other test case passes.

**Where should you look first?**

- **A.** The agent's instructions
- **B.** The flow itself - a timeout, a missing input, or a downed dependency
- **C.** The orchestrator's model selection
- **D.** The knowledge source configuration

**Answer:** B

**One action failing across otherwise-passing cases isolates the fault to that action.** Check the
**100-second timeout** first, then a missing input, then whether the service it calls is up.

**Why not the others:** instructions, model and knowledge would all produce broader, less targeted
failures.

### Q293 — Evaluate agent performance
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

> An auditor asks for evaluation results from four months ago.

**What do you tell them?**

- **A.** Results are retained for 12 months in Copilot Studio
- **B.** Results are retained for 89 days; they must be exported to CSV to keep them longer
- **C.** Results are retained indefinitely once the evaluation is saved
- **D.** Results are retained for 28 days and cannot be exported

**Answer:** B

**L1: Microsoft Learn states test results are available in Copilot Studio for 89 days**, and to keep
them longer you export to CSV.

**Why this matters beyond the number:** if evaluation evidence is part of a governance or audit process,
**the export has to be part of the process too** - the retention will not cover you.

### Q294 — Evaluate agent performance
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

> An evaluation runs against an agent whose knowledge source is a SharePoint site restricted to the
> finance team. Every knowledge-grounded test case returns nothing.

**The agent works correctly when a finance user chats with it. What is wrong?**

- **A.** SharePoint cannot be evaluated automatically
- **B.** The evaluation's selected user profile lacks access to the knowledge source
- **C.** Conversation test sets do not support knowledge sources
- **D.** The test set exceeds the maximum number of test cases

**Answer:** B

**An evaluation runs under a selected user profile, and that account is what authenticates to knowledge
sources and tools during testing.** A test account without finance access retrieves nothing, even though
the agent is configured correctly.

**Why this is worth knowing:** the failure looks like a broken agent and is actually a broken *test*.
**L1: Microsoft Learn, same page.**

### Q295 — Evaluate agent performance
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

> You need to build a conversation test set quickly, with no existing material, for an agent that is
> already configured with instructions and capabilities.

**What is the fastest supported option?**

- **A.** Import test cases from a spreadsheet
- **B.** Use the quick conversation set to auto-generate short conversations
- **C.** Manually author 20 conversations
- **D.** Convert every historical production transcript into test cases

**Answer:** B

It **auto-generates 10 short conversations from the agent's own description, instructions and
capabilities** - no source material needed.

**Why not:** **A** works but needs a spreadsheet you do not have. **C** is possible but slow, and
conversation sets cap at **20 test cases**. **D** is not the supported mechanism - you can convert
**your latest test chat**, not bulk production transcripts. **L1.**

### Q296 — Evaluate agent performance
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

> An evaluation produces results that are **inconsistent** - the same category of prompt sometimes
> succeeds and sometimes fails, with no clear pattern by tool or topic.

**Which cause should you investigate first?**

- **A.** A single malformed topic
- **B.** One connector's authentication
- **C.** Something broad - the model choice or the orchestration layer
- **D.** The expected keywords in the test set

**Answer:** C

**Consistency is the diagnostic signal.** A *consistent* error points at something specific - one
action, one flow, one topic. An **inconsistent** error points at something larger.

**Why not the others:** all three are specific components, and a specific component tends to fail
consistently. **L3: both ingested courses; the passing candidate reports being asked a question shaped
exactly like this and calls it one of his most confusing.**

### Q297 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> An agent is finished in the development environment and must move to test. Testers must **not** be able
> to edit it.

**How do you export the solution?**

- **A.** As unmanaged, then convert it to managed in the test environment
- **B.** As managed
- **C.** As unmanaged, and restrict edit permissions in the test environment
- **D.** As managed, then convert it to unmanaged if edits are needed later

**Answer:** B

**Managed means uneditable**, which is exactly the requirement. For this exam, **anything leaving
development is exported as managed.**

**Why not A or D:** **conversion does not exist in either direction** - see Q2. **Why not C:** relying on
permissions instead of a managed solution is the wrong mechanism, and it leaves the components
technically editable.

### Q298 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> A maker exported a solution as managed and now needs an editable copy in development.

**What should they do?**

- **A.** Convert the managed solution back to unmanaged
- **B.** Re-export the original solution as unmanaged
- **C.** Import the managed solution and unlock it
- **D.** Delete the managed solution, which restores the unmanaged version

**Answer:** B

**You cannot convert between managed and unmanaged.** Managed or unmanaged is chosen **at export**. You
may export the same source solution both ways and hold two versions, but no conversion exists.

**Why this is a favorite trap:** three of the four options describe a "convert" action that sounds
administratively reasonable and simply is not a thing. **A passing candidate reports being asked a
question built on exactly this** and flags it as a most-correct-answer trap.

### Q299 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> An agent points at a development SharePoint site. In production it must point at the production site.
> The solution is deployed as managed.

**What is the correct mechanism?**

- **A.** Edit the agent in production after import
- **B.** Maintain two separate agents
- **C.** Use an environment variable for the site address
- **D.** Use a global variable set at conversation start

**Answer:** C

**This is the reason environment variables exist.** The agent points at the variable and stays unchanged;
the value changes around it per environment - which is what makes an uneditable managed solution
workable.

**Why not A:** a managed solution **cannot** be edited in the target - that is the point of managed.
**Why not B:** two agents is duplicated maintenance and drifts immediately. **Why not D:** a global
variable lives for a session, not across environments.

### Q300 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> An admin changes the value of a **non-secret** environment variable in production.

**What must happen before the agent uses the new value?**

- **A.** Nothing - it is read at runtime
- **B.** The agent must be republished
- **C.** The solution must be re-imported
- **D.** The environment must be restarted

**Answer:** B

**Non-secret environment variable changes are not picked up until the agent is republished.**

### Q301 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> The same agent stores an API key in a **secret** environment variable. The key is rotated.

**What must happen before the agent uses the new key?**

- **A.** The agent must be republished
- **B.** Nothing - secret environment variables are read at runtime
- **C.** The connection must be recreated
- **D.** The solution must be exported and re-imported

**Answer:** B

**This is the distinction that gets asked**, and Q4 and Q5 exist as a pair because the two behave
oppositely. Secret variables are resolved at runtime, so a rotated key takes effect immediately with no
republish.

**Practical consequence:** put anything that rotates - keys, tokens - in a **secret** variable, or every
rotation becomes a deployment. **L3, and it is worth confirming on Microsoft Learn before relying on it.**

### Q302 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**Which best describes what Power Platform Pipelines deploy?**

- **A.** Only the solution's components
- **B.** The solution plus its configuration - connections, connection references and environment variables
- **C.** Only environment variables and connection references
- **D.** The agent's conversation transcripts along with the solution

**Answer:** B

**L1: Microsoft Learn states pipelines deploy solutions as well as configuration for the target
environment - connections, connection references and environment variables.**

**Why this matters:** it is the actual argument for pipelines over hand-carried export/import. A manual
import leaves you wiring connections afterward; a pipeline does not.

### Q303 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> A maker deploys through a pipeline. A required dependency is missing in the target environment.

**What happens?**

- **A.** The deployment completes and the agent fails at runtime
- **B.** The deployment is prevalidated against the target and the maker is told before it runs
- **C.** The deployment silently skips the dependent component
- **D.** The pipeline deploys and rolls back automatically after the failure

**Answer:** B

**L1: deployments are prevalidated against the target environment to prevent mistakes**, with missing
dependencies detected **before** deployment and the maker guided to fix them.

**Why not A:** that is the manual export/import failure mode, and avoiding it is why pipelines exist.

### Q304 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> A parent agent has three child agents. The parent is added to a solution and exported.

**What happens to the child agents?**

- **A.** They must be added to the solution individually
- **B.** They travel with the parent automatically
- **C.** They cannot be included in a solution
- **D.** They are recreated as connected agents on import

**Answer:** B

Child agents have **no independent publishing lifecycle**. They live inside the parent's deployment, so
adding the parent to a solution carries them with **zero extra ALM overhead**.

**Why not D:** child and connected agents are different constructs; a child is not silently promoted.
**This is one of the main reasons to choose a child agent over a connected one.** **L3, both courses.**

### Q305 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> An organization needs production deployments to require sign-off before they run.

**Which capability supports this?**

- **A.** Managed solutions
- **B.** Approval-based delegated deployments in pipelines
- **C.** Environment variables
- **D.** DLP policies

**Answer:** B

**L1: pipelines support securing production environments with approval-based delegated deployments.**

**Why not A:** managed solutions control **editability**, not who may deploy. **Why not D:** DLP governs
which connectors may be used, not deployment sign-off.

### Q306 — Implement ALM for agents in Copilot Studio
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> A pro developer wants to trigger a pipeline deployment from a build script rather than the maker portal.

**Is this supported, and how?**

- **A.** No - pipelines are maker-portal only
- **B.** Yes - via the Power Platform CLI
- **C.** Yes - but only by rebuilding the pipeline in Azure DevOps
- **D.** Yes - by calling the Dataverse Web API directly, which is the only supported path

**Answer:** B

**L1: professional developers can extend pipelines and run them using the Power Platform CLI** (the
`pac pipeline` command group), listing pipelines and deploying a solution with a single command.

**Why not C:** pipelines integrate with external CI/CD rather than requiring you to abandon them.

### Q307 — Integrate agents with Azure
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A team needs a custom prompt to run on a specific external model rather than a managed Copilot Studio
> model.

**What must they supply, and what governs the connection?**

- **A.** The deployment name and base model name; governed by Power Platform DLP
- **B.** Only the model name; governed by Azure RBAC
- **C.** The Azure subscription ID; governed by Entra ID conditional access
- **D.** The endpoint URL only; ungoverned

**Answer:** A

Both values come from the Foundry resource and **cannot be guessed**. Because the data leaves Copilot
Studio for an external model, the connection falls under **Power Platform data loss prevention policies**
that your admin controls.

**Why this pairing matters:** it is the two halves of the same answer - the **technical** requirement and
the **governance** requirement. An exam question will usually test one and use the other as a distractor.

### Q308 — Integrate agents with Azure
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Which statement about bringing a Foundry model into a custom prompt is correct?**

- **A.** It is billed entirely through Copilot Studio credits
- **B.** It introduces separate Azure costs outside Copilot credits
- **C.** It is free while in preview
- **D.** It is billed at the premium Copilot credit rate

**Answer:** B

Bringing your own model means you are paying Azure for it, **in addition to** whatever Copilot Studio
consumption applies.

**Why not D:** the mini / general / deep tiers - **basic, standard and premium credit rates** - describe
the **managed** models. A Foundry model is a different billing path entirely, which is exactly the
confusion the question targets.

### Q309 — Integrate agents with Azure
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A team wants to reconstruct exactly what happened inside an agent run from **three months ago**.

**Why will Copilot Studio analytics alone not be enough?**

- **A.** Analytics data is deleted after 30 days
- **B.** Session details and transcripts are retained for 28 days, even though analytics data is kept 360
- **C.** Analytics does not record agent runs at all
- **D.** Analytics data cannot be filtered by date

**Answer:** B

**L1, and the split is the point.** You will still see aggregate analytics from three months ago, but the
**session detail and transcript needed to reconstruct a specific run are gone.**

**Why this is the real argument for Application Insights:** it is not that analytics is bad, it is that
**28 days is a short window for an audit**. Send telemetry to Application Insights if you need to
reconstruct interactions later.

### Q310 — Integrate agents with Azure
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> An agent's Analytics page shows almost no activity, even though the team has been testing it heavily all
> week in Copilot Studio.

**Why?**

- **A.** Analytics excludes activity from the test panel
- **B.** Analytics updates only monthly
- **C.** The agent must be published to Teams for analytics to record
- **D.** The team lacks the Analytics Viewer role

**Answer:** A

**L1: the Analytics page does not show analytics for activity completed when testing the agent in Copilot
Studio using the test panel.**

**Why this earns a question:** it produces a confusing symptom - a team that has been working hard sees an
empty dashboard and reasonably concludes analytics is broken.

### Q311 — Integrate agents with Azure
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> A manager should see the Analytics page for an agent, including conversation transcript content, but
> nothing else.

**What is required?**

- **A.** The Analytics Viewer sharing role only
- **B.** Analytics Viewer sharing role **plus** the Bot Transcript Viewer security role
- **C.** Co-owner access to the agent
- **D.** Power Platform admin rights

**Answer:** B

**L1.** The sharing role grants the Analytics page; **transcript content requires the additional security
role**.

**The extra constraint worth remembering:** **Analytics Viewer can only be shared with individuals, never
with groups.** That is an administrative headache at scale and exactly the kind of limit an exam tests.

### Q312 — Integrate agents with Azure
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

> An agent's Analytics page shows no **daily active user** figures at all.

**What is the most likely cause?**

- **A.** The agent does not require authentication
- **B.** The agent has fewer than 50 users
- **C.** DAU is only available on premium licences
- **D.** The agent is published to more than one channel

**Answer:** A

**L1: active user metrics are only supported if the agent is set to require authentication** under
Settings → Security → Authentication.

**The logic:** DAU and MAU count **unique users**, and an anonymous agent has no way to tell one user from
another. **Why not B or C:** neither a user floor nor a licence tier gates the metric.

### Q313 — Plan an agent solution
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> An agent queries a Dataverse table where every employee must see only their own records.

**Which authentication mode?**

- **A.** Maker-provided credentials
- **B.** End user credentials
- **C.** A service account
- **D.** No authentication

**Answer:** B

**Personal data scoping is the cue.** End-user (delegated) authentication is the **default**, and the
agent acts on behalf of the signed-in person, so each sees only their own records.

**Why not A or C:** both use a **single shared identity**, which would show every employee the same data -
the exact opposite of the requirement.

### Q314 — Plan an agent solution
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> A different agent writes tickets into a legacy IT system where individual employees **have no accounts
> at all**.

**Which mode, and what does it require?**

- **A.** End user credentials; no special requirement
- **B.** Maker-provided credentials; requires an authenticated channel
- **C.** No authentication; requires DLP exemption
- **D.** Maker-provided credentials; works on any channel

**Answer:** B

**When the back end has no individual accounts, a shared identity is the only workable option** - and
prompting users to sign in would fail outright.

**The second half is the examinable half:** **maker-provided credentials cannot be published to an
anonymous channel**, because that would expose back-end data to anyone. **D is the trap** - right mode,
wrong constraint.

### Q315 — Plan an agent solution
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> A maker tries to configure maker-provided credentials and the option **is not in the menu at all**.

**Why?**

- **A.** They lack a premium licence
- **B.** The agent is configured for an anonymous or unauthenticated channel
- **C.** The connector is blocked by DLP
- **D.** The agent has not been published

**Answer:** B

**The option does not appear at all** in that configuration. That is a specific, recognizable symptom -
not an error message, an **absence**.

**The fix order matters:** configure the agent's authentication **first**, then open the tool's details →
additional details → credentials to use.

### Q316 — Plan an agent solution
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> An agent that has worked for months suddenly errors when a maker adds one new connector.

**What should you check first?**

- **A.** Whether the new connector is classified differently under DLP - business and non-business cannot
    be mixed in one agent
- **B.** Whether the agent needs republishing
- **C.** Whether the environment is out of Copilot credits
- **D.** Whether the connector requires generative orchestration

**Answer:** A

Connectors are classified **business, non-business or blocked**. **Business and non-business can coexist
in an environment but cannot be combined in the same agent.**

**Why this is the right first check:** the symptom is *a previously working agent breaking the moment a
new connector is added*, which is the signature of a grouping conflict rather than anything about the
agent itself.

### Q317 — Plan an agent solution
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> An agent is deployed to Microsoft Teams using **custom Active Directory authentication** and calls three
> connector tools. Users complain they must sign in repeatedly.

**Is this a defect?**

- **A.** Yes - SSO should cover connector tools
- **B.** No - with custom AD authentication in Teams, SSO is not supported for connector tools
- **C.** Yes - the connections were shared incorrectly
- **D.** No - but it can be fixed by republishing

**Answer:** B

**With custom Active Directory authentication in Microsoft Teams, single sign-on is not supported for
connector tools.** Users authenticate to each connector manually on first use, even though Teams itself
is seamless.

**Why it belongs in *planning*:** it cannot be fixed later. It has to be designed around and
**communicated to users before rollout**, or it reads as a broken deployment on day one.

### Q318 — Plan an agent solution
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

> An agent runs in production under the credentials of the maker who built it. That person leaves the
> company and their account is disabled.

**What is the outcome, and what should have been used?**

- **A.** Nothing happens; credentials are cached. No change needed
- **B.** The agent's tool calls break; a service account should have been used
- **C.** The agent falls back to end user credentials automatically
- **D.** The agent continues under the maker's tenant identity indefinitely

**Answer:** B

**This is the stated reason to prefer a service account for production.** Maker credentials tie a
production system to one person's employment.

**Why not C:** there is no automatic fallback - the connection simply loses valid credentials. **The
design rule:** maker credentials are acceptable for a shared back end during development; **a
non-human identity is what belongs in production.**

### Q319 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An agent using a Copilot connector is published to Teams. Everything is configured correctly, but it
returns no content from the connector at runtime. What was missed?**

- **A.** The `ExternalItem.Read.All` Graph scope in the channel's manual authentication settings
- **B.** The connector was not shared in Power Apps
- **C.** A premium connector licence
- **D.** Dataverse search was not enabled

**Answer:** A

Microsoft states you must provide that scope as part of the **manual authentication setting** when
publishing an agent that uses Copilot connectors as knowledge. **Without it the agent returns nothing at
runtime** with everything else configured correctly.

**Source:** [Copilot connectors as knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-connectors)

### Q320 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**You want to add Dataverse tables as a knowledge source. The agent currently uses *Authenticate manually*.
What happens?**

- **A.** It works normally
- **B.** Not supported - Dataverse tables require *Authenticate with Microsoft*
- **C.** It works but without citations
- **D.** It requires a premium licence

**Answer:** B

**Dataverse tables as knowledge sources require the agent's authentication to be *Authenticate with
Microsoft*.** *No authentication* and *Authenticate manually* are both explicitly unsupported.

**Source:** [Add Dataverse as knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse)

### Q321 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An agent uses generative orchestration. A maker wants to add **Bing Custom Search** as a knowledge source
at the agent level. What do you tell them?**

- **A.** Add it from the knowledge page
- **B.** Generative orchestration does not support it - embed it in a generative answers node in a topic
- **C.** It requires a Bing subscription key only
- **D.** It requires classic mode to be disabled

**Answer:** B

**Generative orchestration does not support custom data or Bing Custom Search as knowledge sources.** To
use either, you must embed it inside a generative answers node in a topic.

**Why this is worth knowing cold:** the feature exists and the mode exists, and they do not meet at the
agent level.

**Source:** [Knowledge sources overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio)

### Q322 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**What is the maximum number of knowledge objects an agent can have?**

- **A.** 100
- **B.** 500
- **C.** 1,000
- **D.** Unlimited

**Answer:** B

"Each agent can have a maximum of 500 knowledge objects. These objects can be files, folders, knowledge
articles, websites, or other sources."

**Source:** [Unstructured data as knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-unstructured-data)

### Q323 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker adds a 700 MB PDF as an uploaded knowledge file. What happens?**

- **A.** It indexes normally
- **B.** Files larger than 512 MB are not supported
- **C.** It indexes but only the first 512 MB
- **D.** It requires Dataverse search

**Answer:** B

Stated on both the file-upload and unstructured-data pages. **A file group can hold up to 500 files, each
up to 512 MB.**

**Source:** [Add files as knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload) · [File groups](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-file-groups)

### Q324 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A department uploads policy documents protected with sensitivity labels. The agent shows them as ready
but never answers from them. Why?**

- **A.** Encrypted or sensitivity-labelled documents cannot be indexed
- **B.** They must be converted to PDF
- **C.** They exceed the file group limit
- **D.** Dataverse search is off

**Answer:** A

And the symptom is the examinable part: **"If added, these types of documents show as ready for use but
don't provide responses."** It fails silently, looking like success.

**Source:** [Unstructured data as knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data)

### Q325 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker adds a public website as a knowledge source and points it at the company's internal wiki, which
requires sign-in. What happens?**

- **A.** It works using the agent's credentials
- **B.** Not supported - public website sources use Bing and cannot be authenticated sites
- **C.** It works if anonymous access is enabled
- **D.** It works but without citations

**Answer:** B

Public website knowledge uses **Grounding with Bing Search**, so the site must be indexed by Bing.
Microsoft names wikis and SharePoint sites explicitly as examples that **cannot** be used because they
require authentication.

**The related limit:** the Bing request including the query **cannot exceed 2,048 characters**, or the
agent skips the search and returns nothing from that website.

**Source:** [Add a public website as knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website)

### Q326 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An agent answers from a knowledge source in Teams and users report missing references. What limit applies?**

- **A.** 20 citations maximum, with titles trimmed to about 80 characters
- **B.** 10 citations maximum
- **C.** 50 citations maximum
- **D.** No limit in Teams

**Answer:** A

"Microsoft Teams has stricter limits than other channels. A response shows at most 20 citations; any
beyond that are dropped. Each citation's title is limited to about 80 characters and its snippet to about
480 characters."

**Source:** [Knowledge sources overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio)

### Q327 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker wants to feed a citation returned from a knowledge source into a downstream tool. Can they?**

- **A.** Yes, via a topic variable
- **B.** No - citations cannot be used as inputs to other tools or actions
- **C.** Yes, only with Azure AI Search
- **D.** Yes, only in classic mode

**Answer:** B

"Currently, citations returned from a knowledge source can't be used as inputs to other tools or actions."

**Why it matters architecturally:** it rules out a design where the agent retrieves a document reference
and then passes it to an action - you have to obtain that value another way.

**Source:** [Knowledge sources overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio)

### Q328 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**How many SharePoint lists can be selected as a knowledge source at once, and what degrades quality?**

- **A.** 5 lists; over 10,000 rows
- **B.** 10 lists; over 35,000 rows in one list
- **C.** 20 lists; over 100,000 rows
- **D.** Unlimited; nothing degrades

**Answer:** B

"You can select up to 10 lists at a time... Lists that contain more than 35,000 rows affect quality and
latency." Total supported scale is **120,000 rows** across all lists.

**Source:** [Add SharePoint as knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint)

### Q329 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A connector returns 700 KB of data to the agent. What happens?**

- **A.** It is truncated to the first 500 KB
- **B.** It exceeds the Copilot Studio connector response limit and fails
- **C.** It works normally
- **D.** It is paginated automatically

**Answer:** B

"The connector request to the service returns more than 500 KB of data. This amount exceeds the Copilot
Studio connector response limit."

**This is a Copilot Studio limit, not the connector's** - which is why the fix is to narrow what the
connector returns, not to change the service.

**Source:** [Troubleshoot connector request failures](https://learn.microsoft.com/en-us/troubleshoot/power-platform/copilot-studio/actions/connector-request-failure)

### Q330 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**While adding Azure AI Search, a maker types the endpoint URL and API key straight into the form. What is
the consequence?**

- **A.** Nothing - it is a supported shortcut
- **B.** Microsoft states you must add it through a formal data connection and not manually configure an
    endpoint and API key
- **C.** The credentials are stored insecurely but it works
- **D.** It works until the key rotates

**Answer:** B

Microsoft states it directly: **"You must add Azure AI Search through a formal data connection. Don't
manually configure an endpoint and API key."**

**Why the shortcut is so costly:** the resulting faulty connection is **environment-level**, so it can
break the Azure AI Search experience for every agent in that environment.

**Source:** [Azure AI Search as knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-azure-ai-search)

### Q331 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Where do agent-level knowledge sources actually get used?**

- **A.** They are added to the generative answers node in the auto-created Conversational boosting system topic
- **B.** They are only used by explicitly configured topics
- **C.** They replace node-level sources
- **D.** They are only used in classic mode

**Answer:** A

"By default, when you create an agent, Copilot Studio automatically creates the Conversational boosting
system topic. This topic contains a generative answers node... All knowledge sources that you add at the
agent level are added to the generative answers node in the Conversational boosting system topic."

**Source:** [Knowledge sources overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio)

### Q332 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker connects an MCP server with 12 tools and wants only 3 available to the agent. What is the default
state, and what do they do?**

- **A.** All tools are off by default; turn on the 3
- **B.** All tools are on by default - turn off *Allow all*, then enable only the 3
- **C.** Tools must be selected during connection
- **D.** Tool selection is server-side only

**Answer:** B

"All tools are turned on by default when you add an MCP server. The Allow all toggle is turned on."

**Why this is a security question, not a configuration one:** leaving it on grants the agent every tool
the server publishes - a least-privilege violation, and a cause of orchestration ambiguity.

**Source:** [Add MCP components to an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-components-to-agent)

### Q333 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**After turning off *Allow all* on an MCP server, the server owner publishes a new tool. What happens in
your agent?**

- **A.** It is added and enabled automatically
- **B.** It is added but turned off by default
- **C.** It does not appear until you reconnect
- **D.** The connection fails until reviewed

**Answer:** B

"When you turn off Allow all, any new tools added to the MCP server are turned off by default."

**That is the actual value of the toggle** - not what happens today, but what happens to tools published
later, without your review.

**Source:** [Add MCP components to an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-components-to-agent)

### Q334 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker wants to invoke an MCP tool from a specific point in a topic. Can they?**

- **A.** Yes, using an add-a-tool node
- **B.** No - generative orchestration must be turned on to use MCP, and topics cannot call MCP servers
- **C.** Yes, in classic mode only
- **D.** Yes, for Microsoft-published servers only

**Answer:** B

"You must turn on generative orchestration to use MCP." Topics cannot call MCP servers - only the
orchestrator invokes them.

**The consequence to remember:** if the requirement is **deterministic, topic-controlled invocation**, MCP
is the wrong integration choice. Use a connector or a REST API tool.

**Source:** [Extend an agent with MCP](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp)

### Q335 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A prompt needs to analyze an uploaded 60-page PDF. What happens?**

- **A.** It works normally
- **B.** Documents must have fewer than 50 pages
- **C.** It works if under 25 MB
- **D.** It requires code interpreter

**Answer:** B

Stated as a hard limitation on prompt inputs.

**Source:** [Add inputs to a prompt](https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-inputs-prompt)

### Q336 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**What is the total file size limit for images or documents passed to a prompt, and the processing time cap?**

- **A.** 25 MB total; 100 seconds
- **B.** 512 MB total; two minutes
- **C.** 16 MB total; 30 seconds
- **D.** 5 MB total; 60 seconds

**Answer:** A

"Files passed to the prompt must total less than 25 MB for all files" and "image or document processing
is restricted to a maximum of 100 seconds. If this limit is exceeded, the operation terminates with a
timeout error."

**This 100 seconds is the figure both third-party courses mistakenly applied to agent flows** - flows are
**two minutes**.

**Source:** [Add inputs to a prompt](https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-inputs-prompt) · [Prompt performance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompts-performance-execution)

### Q337 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Which managed model is the **default** for prompts, and at what billing rate?**

- **A.** GPT-4.1, standard rate
- **B.** GPT-4.1 mini, basic rate
- **C.** GPT-5 chat, standard rate
- **D.** GPT-5 reasoning, premium rate

**Answer:** B

The default managed model, in the **Mini** category, with 128K input.

**Source:** [Prompt model settings](https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-model-settings)

### Q338 — Integrate and extend agents
*Bank: bank2 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A data science team wants to bring **GPT-5** into a prompt as a bring-your-own model from Azure AI
Foundry. What happens?**

- **A.** It works normally
- **B.** The GPT-5 family and later are not supported for bring your own model in prompts
- **C.** It works but at premium rate
- **D.** It requires admin consent

**Answer:** B

"The GPT-5 family and later models (such as GPT-5, GPT-5 mini, GPT-5 nano, and the GPT-5.x versions)
aren't currently supported for bring your own model in prompts."

**The nuance that makes this a good question:** **GPT-5 IS available as a managed model** - GPT-5 chat
(General) and GPT-5 reasoning (Deep, premium, 400K context). **Supported as managed, unsupported as BYO.**
An answer of "GPT-5 cannot be used at all" would be wrong.

**Source:** [Bring your own model for prompts](https://learn.microsoft.com/en-us/microsoft-copilot-studio/bring-your-own-model-prompts) · [Prompt model settings](https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-model-settings)

### Q339 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**What protection do Copilot Studio custom agents have against prompt injection, out of the box?**

- **A.** None - it must be configured
- **B.** Built-in runtime blocking of UPIA and XPIA, on by default
- **C.** Content moderation only
- **D.** DLP policies only

**Answer:** B

"Custom agents created in Copilot Studio are secure by default. They include built-in protection against
various threats, such as user prompt-injection attacks (UPIA) and cross-domain prompt injection attacks
(XPIA). At runtime, the agent blocks attacks of these types, reducing the risk of data exfiltration."

**This is the literal answer to the *evaluate security and governance considerations* objective**, and
neither ingested course mentioned it exists.

**Source:** [External threat detection for custom agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/external-security-provider)

### Q340 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**An organization adds an external threat detection provider. The provider does not respond within one
second. What happens by default?**

- **A.** The tool call is blocked
- **B.** The agent proceeds and allows the tool to execute
- **C.** The conversation ends
- **D.** The agent retries for five seconds

**Answer:** B

"If the agent doesn't receive a decision from the system (either allow or block) within one second, by
default, it proceeds to allow the tool to execute as planned. To change the default behavior, configure
Set error behavior."

**Fail-open by default**, configurable to *Block the query*. That is a design decision worth understanding
rather than memorizing - availability is favored over safety unless you say otherwise.

**Source:** [External threat detection for custom agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/external-security-provider)

### Q341 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**A security team wants external threat detection enabled across all Copilot Studio environments at once.
Can they?**

- **A.** Yes, via a tenant-wide setting
- **B.** No - it must be turned on manually for each environment
- **C.** Yes, via DLP policy
- **D.** Yes, via Entra ID conditional access

**Answer:** B

"There is no global or tenant-wide setting to automatically enable the external security provider across
all Copilot Studio environments. External threat detection must be turned on manually for each
environment via the Copilot Studio admin portal."

**Source:** [External threat detection for custom agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/external-security-provider)

### Q342 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**A maker creates an agent and does not configure any channel. Who can reach it?**

- **A.** Nobody until it is published to a channel
- **B.** Anyone who knows the agent ID - the Demo and Custom website channels are available by default
- **C.** Only the maker
- **D.** Only tenant users

**Answer:** B

"When you create a Copilot Studio agent, anyone who knows the agent ID can immediately access the agent
through the Demo website and Custom website channels. These channels are available by default, and no
configuration is needed."

**This is the most security-relevant default in the product** and it is easy to miss, because nothing
about creating an agent suggests you have just published one.

**Source:** [Configure web channel security](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-web-security)

### Q343 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**That maker turns on *Require secured access*. How long before it takes effect, and is a republish needed?**

- **A.** Immediately; republish required
- **B.** Up to two hours; no republish needed
- **C.** Immediately; no republish needed
- **D.** Up to 24 hours; republish required

**Answer:** B

"When you turn on or turn off Require secured access, it can take up to two hours for the system to
propagate the settings and take effect... You don't need to publish the agent for this change to take
effect."

**Both halves are examinable** - the delay, and the fact that publishing is not what applies it.

**Source:** [Configure web channel security](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-web-security)

### Q344 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**An admin blocks maker-provided credentials for an environment. What breaks?**

- **A.** Nothing - tools fall back to end-user credentials seamlessly
- **B.** Agents triggered by scheduled or autonomous events fail, because each tool call needs a live user sign-in
- **C.** Only Dataverse connectors
- **D.** Only agents in Teams

**Answer:** B

"When maker-provided credentials are prevented from being used, agents require real-time user interaction
because each tool call must be authenticated with a live user sign-in. As a result, agents triggered by
scheduled or autonomous events, or that attempt to run in the background, fail due to missing
credentials."

**Why A is the trap:** the fallback *does* happen - every tool switches to end-user credentials instantly.
It just breaks anything with no user present.

**Source:** [Prevent maker-provided credentials](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-no-maker-authentication)

### Q345 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**A maker wants to place an Authenticate node in the middle of a topic's dialog tree. Can they?**

- **A.** Yes, anywhere in the topic
- **B.** No - it is only available as a leaf node at the end of a dialog tree
- **C.** Yes, but only in classic mode
- **D.** Yes, but only after a condition node

**Answer:** B

"The Authenticate node is only available in the action picker at the end of a dialog tree (as a leaf
node). You can't add it in the middle of a dialog. Once added, you can add other nodes below it."

**Source:** [End-user authentication in topics](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication)

### Q346 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**An agent uses Entra ID authentication and the team wants to embed it in a Power BI report using an
iframe-based visual. What happens?**

- **A.** It works normally
- **B.** Agents using Microsoft authentication can't be embedded in Power BI reports using iframe-based visuals
- **C.** It works but without authentication
- **D.** It requires a premium licence

**Answer:** B

"Copilot Studio agents that use Microsoft authentication (Entra ID) can't be embedded in Power BI reports
using iframe-based visuals."

**A planning-stage constraint** - discovering it after building the report is expensive.

**Source:** [Configure end-user authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)

### Q347 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**An agent's tools are configured to require user credentials. A maker turns off authentication at the
agent level. What happens?**

- **A.** Tools switch to maker credentials
- **B.** It prevents those tools from working
- **C.** Nothing changes
- **D.** The agent cannot be published

**Answer:** B

"If your agent has tools configured to require user credentials, don't turn off authentication at the
agent level. This action prevents these tools from working."

**Source:** [Configure end-user authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)

### Q348 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**A team wants to use computer use on an agent running in classic orchestration. What do you tell them?**

- **A.** It works normally
- **B.** Computer use is only available for agents with generative orchestration turned on
- **C.** It requires a premium licence
- **D.** It requires a hosted browser

**Answer:** B

"This feature is only available for agents with generative orchestration turned on."

**Source:** [Computer use](https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use)

### Q349 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**How do you restrict which websites and applications computer use may touch?**

- **A.** DLP policies
- **B.** Enable access control and define the specific URLs and desktop applications
- **C.** Conditional access
- **D.** It cannot be restricted

**Answer:** B

"By default, computer use can operate on any website or application. If you want to restrict this access,
enable access control to define the specific URLs and desktop applications that computer use should be
limited to."

**Note the default:** unrestricted. That is the governance point - the restriction is opt-in.

**Source:** [Computer use](https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use)

### Q350 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**What is the maximum length of a node name, and of an agent description?**

- **A.** 100 and 500
- **B.** 500 and 1,024
- **C.** 255 and 2,048
- **D.** 1,024 and 8,000

**Answer:** B

Node names up to **500 characters** (stated on several authoring pages); the agent description up to
**1,024 characters**. The agent icon must be **PNG, under 72 KB, max 192x192**.

**Source:** [Create and edit topics](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics) · [Get started](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started)

### Q351 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**By default, how many times does an agent re-prompt when it does not get a valid answer?**

- **A.** Once
- **B.** Up to two more times
- **C.** Three times
- **D.** It does not re-prompt

**Answer:** B

"By default, when an agent doesn't get a valid answer from the user, it repeats the question two more
times. You can choose to make your agent try again only once, or to move on without trying to get an
answer."

**For an adaptive card the same default applies, and the card is resent on each retry.**

**Source:** [Additional settings for inputs](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-additional-settings-topic-action-inputs) · [Ask with adaptive card](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-ask-with-adaptive-card)

### Q352 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**What does the system fallback topic do when the agent still cannot understand after re-prompting?**

- **A.** Ends the conversation
- **B.** Redirects, which triggers the Escalate system topic
- **C.** Repeats indefinitely
- **D.** Routes to a child agent

**Answer:** B

"The topic has a condition to ask the user no more than twice to rephrase their question. If the agent
still doesn't understand the question, the conversation is redirected. The redirection causes the Escalate
system topic to trigger."

**Source:** [System fallback topic](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-fallback-topic)

### Q353 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**A topic has one error and three warnings. Can the agent be published?**

- **A.** Yes - neither blocks publishing
- **B.** No - errors must be fixed before publishing; warnings do not block it
- **C.** No - warnings must also be fixed
- **D.** Yes, with an admin override

**Answer:** B

"Warnings don't stop the agent from working, but can cause individual topics to not work as expected...
Errors prevent the agent from working and must be fixed before you can publish it."

**Source:** [Topic management](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-topic-management)

### Q354 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**What is the character limit for custom instructions on a generative answers node?**

- **A.** 1,024
- **B.** 2,000
- **C.** 8,000
- **D.** Unlimited

**Answer:** C

"Prompt instructions are limited to 8,000 characters."

**And the quality rule that goes with it:** instructions must describe **observable** behavior. "Be
helpful" does nothing, because the model cannot check its own draft against a quality it cannot measure.

**Source:** [Modify the generative answers prompt](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-generative-answers-prompt-modification)

### Q355 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**A maker selects the GPT-5 reasoning model for a prompt and wants to lower the temperature. What happens?**

- **A.** The slider works normally
- **B.** The temperature setting isn't available for GPT-5 reasoning - the slider is disabled
- **C.** Temperature defaults to 1
- **D.** It requires premium licensing

**Answer:** B

"The temperature setting isn't available for the GPT-5 reasoning model. For this reason, the slider is
disabled when you select the GPT-5 reasoning model."

**Related:** temperature ranges **0 to 1** and **defaults to 0**. The **content moderation** slider is
**managed-models-only** - unavailable for Anthropic or Azure AI Foundry models, default level **Moderate**.

**Source:** [Prompt model settings](https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-model-settings)

### Q356 — Plan and configure agent solutions
*Bank: bank2 · Domain: ALM (inferred) · Difficulty: Unknown*

**Which model did Microsoft's own safety and responsible AI evaluations flag as **less aligned** than other
models evaluated?**

- **A.** Claude Opus 4.6
- **B.** GPT-5 reasoning
- **C.** Grok 4.1 Fast (Non-Reasoning)
- **D.** GPT-4.1 mini

**Answer:** C

"Microsoft's safety and responsible AI evaluations found Grok-4.1 Fast (Non-Reasoning) to be less aligned
than other models evaluated, resulting in higher risks."

**Why this belongs in a responsible-AI question:** Microsoft ships the model in the picker **and** states
the finding next to it. Choosing a model is a responsible-AI decision, not only a cost and capability one.

**Source:** [Prompt model settings](https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-model-settings)

### Q357 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**You need to verify an agent holds context across a five-turn booking conversation. Which test method can
you actually use?**

- **A.** Compare meaning
- **B.** General quality
- **C.** Text similarity
- **D.** Exact match

**Answer:** B

**Only General quality, Keyword match and Custom work with conversation test sets.** Compare meaning,
Tool use, Text similarity and Exact match are **single-response only**.

**Why this is the sharpest question in the set:** three of the four options are real, useful test methods
that simply cannot be used here.

**Source:** [Create a conversational test set](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-multi-turn)

### Q358 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**What is the **maximum** number of tools an agent can have under generative orchestration, and what does
Microsoft **recommend**?**

- **A.** Maximum 30; recommended 15
- **B.** Maximum 128; recommended 25-30
- **C.** Maximum 40; recommended 30-40
- **D.** No maximum; recommended 100

**Answer:** B

Microsoft states both: the orchestrator handles **a maximum of 128 tools per agent**, and recommends
**no more than 25-30** for best performance.

**Why C is the trap:** "30-40" is what circulates in third-party courses. **Both ingested courses said
it, and both were wrong** - it lost the hard limit and blurred the recommendation.

**Source:** [Add tools to a custom agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent)

### Q359 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**An evaluation of a finance agent returns nothing from its restricted SharePoint knowledge source, though
the agent works fine in production. What is wrong?**

- **A.** Conversation test sets do not support SharePoint
- **B.** The evaluation's selected user profile lacks access
- **C.** The test set exceeds 20 cases
- **D.** SharePoint folders were used instead of files

**Answer:** B

**An evaluation runs under a selected user profile**, and that account authenticates to knowledge sources
and tools during testing. A test account without finance access retrieves nothing.

**The failure looks like a broken agent and is actually a broken test.**

**Source:** [Create a test set for an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create)

### Q360 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**An auditor asks for evaluation results from five months ago. What do you say?**

- **A.** They are retained 12 months
- **B.** They are retained 89 days; export to CSV to keep them longer
- **C.** They are retained 360 days
- **D.** They are retained 28 days

**Answer:** B

And the practical consequence: **if evaluation evidence is part of an audit process, the export has to be
part of that process** - retention will not cover you.

**Source:** [Create a test set for an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create)

### Q361 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**A team has been testing heavily in the Copilot Studio test panel all week. The Analytics page shows
almost nothing. Why?**

- **A.** Analytics refreshes monthly
- **B.** Analytics excludes test panel activity
- **C.** The agent must be published to Teams
- **D.** They lack the Analytics Viewer role

**Answer:** B

Stated directly by Microsoft. It produces a confusing symptom - a hard-working team sees an empty
dashboard and concludes analytics is broken.

**Source:** [Analytics overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview)

### Q362 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**The Analytics page shows no daily active user figures at all. Most likely cause?**

- **A.** The agent does not require authentication
- **B.** Fewer than 50 users
- **C.** DAU needs a premium licence
- **D.** The agent uses generative orchestration

**Answer:** A

**Active user metrics are only supported if the agent is set to require authentication.** DAU and MAU
count **unique users**, and an anonymous agent cannot distinguish one user from another.

**Source:** [Analytics overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview)

### Q363 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**A manager needs the Analytics page **including transcript content**, and nothing else. What is required?**

- **A.** Analytics Viewer only
- **B.** Analytics Viewer plus Bot Transcript Viewer
- **C.** Co-owner access
- **D.** Power Platform admin

**Answer:** B

The sharing role grants the page; **transcript content needs the additional security role**.

**Source:** [Analytics overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview)

### Q364 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**You want to grant that access to a security group of twelve people. What happens?**

- **A.** It works normally
- **B.** Analytics Viewer can only be shared with individuals, never groups
- **C.** It works but transcripts are hidden
- **D.** It requires a tenant admin

**Answer:** B

An explicit Microsoft constraint, and an administrative headache at scale. **Q7 and Q8 are a pair** - you
can get the roles right and still be unable to deliver the access the way you planned.

**Source:** [Analytics overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview)

### Q365 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**An agent uses generative orchestration. A maker wants topic-level analytics. What do you tell them?**

- **A.** It is on the Analytics page under Topics
- **B.** Topic analytics is classic mode only; use conversation outcomes and themes instead
- **C.** It requires the Bot Transcript Viewer role
- **D.** It requires 360 days of data first

**Answer:** B

**Topic analytics is only available for agents in classic mode**, and only for topics associated with an
analytics session. Generative orchestration uses **conversation outcomes and themes** instead.

**A clean boundary question** - the feature exists, but not for the mode most new agents use.

**Source:** [Analytics overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview)

### Q366 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**A new agent has been live three days with light traffic. Themes show nothing. Why?**

- **A.** Themes need 50 questions with generative answers, from 50 different sessions, in the past 7 days
- **B.** Themes require a premium licence
- **C.** Themes only work in classic mode
- **D.** Themes need 360 days of data

**Answer:** A

All three conditions, and it must be **questions with generative answers**. Light traffic simply will not
reach the threshold.

**Source:** [Analyze user questions by theme](https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-themes)

### Q367 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**Which is **not** a prerequisite for a Power Platform pipeline?**

- **A.** All environments have a Dataverse database
- **B.** All target environments are managed environments
- **C.** At least one development environment and one stage
- **D.** All environments are in the same geographic region

**Answer:** D

**The question asks which is NOT a prerequisite.** Cross-geo deployment is supported - it just has to be
**enabled by a tenant administrator**, and the platform host always lives in the tenant's home region.

**A, B and C are all real requirements**, and B appears on four separate Microsoft pages.

**Source:** [Set up pipelines with a custom host](https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines)

### Q368 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**A release manager wants to push a hotfix straight to production, skipping test. Using pipelines, can they?**

- **A.** Yes, by selecting production as the target
- **B.** No - stages must complete in order, and the version deployed to test is what goes to production
- **C.** Yes, with a delegated deployment
- **D.** Yes, if the solution is managed

**Answer:** B

And the detail that catches people: **the same solution version that was deployed to test is what goes to
production**, even if the solution was changed afterward without incrementing the version.

**Why not C:** delegated deployment changes **who** deploys, not the **order**.

**Source:** [Run a pipeline](https://learn.microsoft.com/en-us/power-platform/alm/run-pipeline)

### Q369 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**A maker changed a solution to managed in the development environment and now needs to export it. What
happens?**

- **A.** It exports normally
- **B.** It cannot be exported - a new solution must be created
- **C.** It exports but only as managed
- **D.** It exports after removing the managed flag

**Answer:** B

**"If you change it to a managed solution, you can't export it. You need to create a new solution."**

This is sharper than the usual "you cannot convert between managed and unmanaged" - the failure is at
**export**, and the recovery is building a new solution.

**Source:** [Export and import agents using solutions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export)

### Q370 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**A solution containing an agent and a custom connector is being imported to test. What is the correct order?**

- **A.** The agent solution first, then the custom connector
- **B.** The custom connector first, then the connection reference with the agent solution
- **C.** Either order
- **D.** Both in a single package only

**Answer:** B

**Import custom connectors first, then the connection reference with the agent solution.** Getting the
order wrong produces a dependency failure on import.

**Source:** [Export and import agents using solutions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export)

### Q371 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**What is the minimum security role to import and export solutions?**

- **A.** Environment Maker
- **B.** System Customizer
- **C.** System Administrator
- **D.** Basic User

**Answer:** B

**Why not C:** System Administrator works but is not the *minimum*, and exam questions asking for a
minimum are testing whether you know the least-privilege answer.

**Source:** [Export and import agents using solutions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export)

### Q372 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**A rotated API key is stored in a **secret** environment variable. How quickly does the agent use the new
value?**

- **A.** Immediately - secret variables are read at runtime with no caching
- **B.** Within five minutes - the dialog runtime caches the value
- **C.** After a republish
- **D.** After a solution re-import

**Answer:** B

**The refinement that matters.** Secret variables are read at runtime **but the dialog runtime caches the
value for five minutes** - and caches an **unsuccessful read for 30 seconds**.

**So "no republish needed" is true, and "instant" is not.** A is the trap because it is the version
taught by third-party courses.

**Source:** [Use variables](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables)

### Q373 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**An agent flow must respond within what default limit, and what happens if it does not?**

- **A.** 100 seconds; the flow is cancelled
- **B.** Two minutes; the action times out and the conversation breaks while the flow keeps running
- **C.** 30 seconds; the agent retries
- **D.** Five minutes; the agent waits

**Answer:** B

**CORRECTED from Microsoft Learn.** Both ingested courses said 100 seconds - **that is the prompt
execution limit**, not the flow limit. Microsoft states two minutes three times across two pages.

**And the asymmetry is the memorable part:** the flow keeps running; the **agent** fails with no response.

**Source:** [Speed up agent flow execution with express mode](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode)

### Q374 — Test and manage agents
*Bank: bank2 · Domain: TESTING (inferred) · Difficulty: Unknown*

**A document-generation flow takes eight minutes. What is the current supported approach?**

- **A.** Increase the flow timeout
- **B.** Turn on Asynchronous response in the Respond to the agent action settings
- **C.** Split it into four flows
- **D.** Convert it to a cloud flow

**Answer:** B

The flow runs beyond two minutes and returns a **callback**. Requires an environment on the new
infrastructure.

**Two caveats:** callbacks are **fully supported in Teams and NOT supported on Microsoft 365 Copilot or
telephony**; and if the user sends another message first, the flow still completes but the agent answers
the newer message.

**The manual job-ID split still works** where async response is unavailable - it is simply no longer the
only option, which is what both courses taught.

**Source:** [Asynchronous response support for agent flows](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-asynchronous-response)

### Q375 — Missing public image access
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker adds an image to a message node, but the image doesn't appear when the agent is tested. What is the most likely cause?**

- **A.** The image file format isn't supported by Copilot Studio.
- **B.** The image URL points to a file hosted on an internal server that requires authentication.
- **C.** Images can only be added through the Adaptive Card designer, not directly in the message node.

**Answer:** B
**Confidence:** Certain

*"Images and videos must be hosted at publicly accessible URLs.
The agent can't reach files stored on internal servers or behind authentication."*
A is invented; C is false - images are added from the message node's **Add** menu.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Deliver rich agent responses using Adaptive Cards · `TOPC-120`

### Q376 — Generic Adaptive Card IDs
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker gives each Adaptive Card input element a generic ID such as `field1`, `field2`, `field3`. What problem does this create downstream in the topic?**

- **A.** Copilot Studio won't generate output variables for input elements with generic ID values.
- **B.** The output variables are created with names like `Topic.field1`, which are difficult to identify and reference correctly in conditions and message nodes.
- **C.** The card fails to render because input element IDs must follow a specific naming convention.

**Answer:** B
**Confidence:** Certain

*"What do adaptive card element IDs become? Topic variables.
Leave them as input1 and you get topic.input1 - use descriptive camelCase."*
The IDs work; they are just unreadable. A and C claim a failure that does not happen.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Deliver rich agent responses using Adaptive Cards · `FC-04` card 27

### Q377 — Teams card rendering mismatch
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A card renders correctly in the Copilot Studio test pane but fails to display in Microsoft Teams after publishing. What is the most likely explanation?**

- **A.** The card was designed in the built-in designer, which produces a different JSON format than Teams expects.
- **B.** The card uses element types or properties that the Teams channel doesn't support, so those elements fail silently or the card falls back to plain text.
- **C.** Teams requires Adaptive Cards to be published through a separate Teams app before they can render.

**Answer:** B
**Confidence:** Certain

channel support differs by surface; Bot Framework Web Chat
supports 1.6 but not `Action.Execute`, and the live chat widget is limited to 1.5.
**This is the single most reliable Adaptive Card exam theme: the card is fine, the channel is not.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Deliver rich agent responses using Adaptive Cards · `TOPC-003`

### Q378 — Adaptive Card carousel layout
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker wants to display multiple product results as Adaptive Cards in a single message node. Each result should appear side by side so users can browse through them. Which layout option?**

- **A.** List layout, because it arranges multiple cards vertically for easy comparison.
- **B.** Carousel layout, because it arranges multiple cards horizontally and lets users scroll through them one at a time.
- **C.** The Adaptive Card designer doesn't support multiple cards in a single message node.

**Answer:** B
**Confidence:** Certain

more than one media card in a node displays as a **carousel by
default**, one at a time with navigation arrows; **List view** shows them all at once.
**Note the trap:** *browse through* points to carousel. If the stem had said *compare all at once*,
the answer would be List.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Deliver rich agent responses using Adaptive Cards · `TOPC-118`

### Q379 — Single-turn card input collection
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker needs to collect three related fields - leave type, start date, end date - in a single topic interaction. Which node?**

- **A.** Three separate Question nodes, one for each field.
- **B.** An **Ask with Adaptive Card** node with three input elements and a Submit button.
- **C.** A message node with an embedded Adaptive Card, because informational cards can also collect input.

**Answer:** B
**Confidence:** Certain

input element types plus `action.submit` are what make a card
collect data. **C is the distractor that matters:** an informational card in a *message* node
displays; only **Ask with Adaptive Card** collects. A works but takes three turns instead of one.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Deliver rich agent responses using Adaptive Cards · `FC-04` card 26

### Q380 — Deterministic connector lookup
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An agent must retrieve live account data from a system that already has a Power Platform connector. __The lookup should occur at a specific, defined point in the conversation flow.__ Which approach is correct?**

- **A.** Add the connector as a tool at the **agent level** so the AI orchestrator invokes it automatically when relevant.
- **B.** Add the connector tool **inside the topic** using the *Add a tool* node, at the exact step where the data is needed.
- **C.** Use the **Send HTTP Request** node to call the connector's underlying API endpoint directly.

**Answer:** B
**Confidence:** Certain

*"Agent-level tool vs topic-level tool: **AI
decides** vs **you decide**."* The stem says *at a specific, defined point*, which rules out
orchestrator discretion. **C throws away a working connector to hand-build an API call.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Take action from agent conversations using topics and tools · [[AB-620 06-Cram-Sheet]]

### Q381 — Long-running flow handoff
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An agent flow validates an order, updates Dataverse, and sends an email. Testing shows it takes about __three minutes__. How should it be structured so a topic can call it without errors?**

- **A.** Chain all actions before *Respond to the agent* so the topic waits for the complete result.
- **B.** Place the long-running actions **after** *Respond to the agent*, so the flow returns immediately and finishes the rest in the background.
- **C.** Break it into three separate agent flows and call each sequentially from the topic.

**Answer:** B
**Confidence:** Certain

The flow limit is **two minutes** and three minutes exceeds it - `FLOW-051`
covers the asynchronous pattern that survives past that limit. **A guarantees the timeout the stem
describes. C still totals three minutes, just in pieces.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Take action from agent conversations using topics and tools · `FLOW-051`

### Q382 — POST request silent failure
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A *Send HTTP Request* node calls a REST API with POST. The API consistently returns a response indicating the operation failed, __with no error code__. URL and authentication are confirmed correct. Most likely cause?**

- **A.** The HTTP method should be PATCH rather than POST.
- **B.** The `Content-Type: application/json` header is missing from the request configuration.
- **C.** The response schema was generated from a sample JSON that doesn't match the actual response.

**Answer:** B
**Confidence:** Judgment - check this one

A POST carrying a JSON body without `Content-Type` is the
classic silent rejection, and the stem rules out URL and auth. **C is genuinely arguable**: a wrong
response schema also fails without a clean error, but that failure happens on the Copilot Studio
side after the API succeeded, and the stem says *the API returns a response indicating the operation
failed*. **Verify on the unit page before trusting B.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Take action from agent conversations using topics and tools

### Q383 — API key environment variable
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An HTTP request node calls a REST API requiring an __API key in the request header__. Which approach correctly handles the key?**

- **A.** Enter the API key as a literal string directly in the header value field on the topic canvas.
- **B.** Store the API key in a **Power Platform environment variable** and reference it in the header.
- **C.** Use a Question node to collect the API key from the end user at the start of the conversation.

**Answer:** B
**Confidence:** Certain

Environment variables are the supported way to move a value across
environments without hard-coding it, and this is the same principle as vault rule 9 - **a secret
never gets written into the thing that is exported, logged, or read aloud.** A hard-codes a secret
into the topic definition. C asks an employee for a system credential.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Take action from agent conversations using topics and tools

### Q384 — Node-level knowledge precedence
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A generative answers node has a __node-level SharePoint__ knowledge source. The agent also has an __agent-level Dataverse__ source. Which does the node use?**

- **A.** The agent-level Dataverse source, because it's configured at the broader scope.
- **B.** The node-level SharePoint source, because node-level sources override agent-level for that node.
- **C.** Both are combined, merging their results into a single response.

**Answer:** B
**Confidence:** Derived

Node-level configuration is scoped to the node and takes precedence there.
**The exam theme is scope, not SharePoint:** the narrower configuration wins. C is the tempting
answer because merging *sounds* helpful - it is not what happens.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Generate AI-powered agent responses using generative answers

### Q385 — Generative answers table schema
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An HTTP request returns a JSON array with fields `body`, `link` and `name`, for use in a generative answers node. What must the maker do?**

- **A.** Map the JSON field names to the node's expected inputs in the node's Data source panel.
- **B.** Increase the number of records returned to at least 10 so the AI has enough context.
- **C.** **Transform the JSON response into a Table with columns named `Content`, `ContentLocation` and `Title`** before passing it to the node.

**Answer:** C
**Confidence:** Derived

Custom data reaching generative answers must arrive in that fixed three-column
shape. **Learn the three column names verbatim** - this is exactly the kind of exact, forgettable
detail worth a Learn lookup in the exam. B is a plausible-sounding invention.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Generate AI-powered agent responses using generative answers

### Q386 — Specific response instructions
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

***"Be helpful and concise"* versus *"Respond using a bulleted list with no more than five items. Do not answer questions outside the scope of the provided knowledge sources."* Which is more effective?**

- **A.** The first - shorter instructions are easier for the AI to follow.
- **B.** Equally effective; the AI infers intent either way.
- **C.** The second, because it specifies **observable output behaviors** the AI can consistently apply.

**Answer:** C
**Confidence:** Certain

The same principle the corpus already teaches about tool and skill
descriptions: **the model routes and formats on what is stated, not on what is meant.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Generate AI-powered agent responses using generative answers

### Q387 — Structured extraction with custom prompt
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A topic must extract start date, end date and total contract value from a clause and store them as three separate topic variables. Best approach?**

- **A.** A generative answers node with a custom instruction naming the fields.
- **B.** A **custom prompt** with the clause as an input variable and instructions to return **structured JSON** with the three values.
- **C.** A condition node using Power Fx to parse the clause text.

**Answer:** B
**Confidence:** Certain

*"Generative answers vs custom prompt: **synthesize
from sources** vs **reason over supplied text**."* The clause is supplied text, and the task is
extraction into structure. **A is the trap** - generative answers produces prose, not variables.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Generate AI-powered agent responses using generative answers · [[AB-620 06-Cram-Sheet]]

### Q388 — Foundry model connection values
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Connecting a specialized Microsoft Foundry model to a custom prompt. What must be entered on the *Connect a model from Microsoft Foundry* screen?**

- **A.** The Foundry resource group name and subscription ID.
- **B.** The **model deployment name and base model name**, exactly as they appear in Azure AI Foundry.
- **C.** The Azure region and the model's REST API endpoint URL.

**Answer:** B
**Confidence:** Derived

The connection is made by deployment identity, not by infrastructure
coordinates. **"Exactly as they appear" is the testable part** - a mismatched deployment name is the
common failure.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Generate AI-powered agent responses using generative answers

### Q389 — Independent domain ownership
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**HR, IT and Finance each maintain their own procedures and need to evolve independently. Which characteristic best justifies a multi-agent architecture?**

- **A.** **Independent team ownership** across three domains - each can build, update and release without affecting the others.
- **B.** Three domain teams means three times more actions, automatically exceeding the 30-40 action routing accuracy threshold.
- **C.** IT's procedures are more complex, requiring separate AI model configuration.

**Answer:** A
**Confidence:** Certain

The corpus states it directly: *"The decision is organizational before it is
technical: who owns it, does it publish separately, is it reused."*

**Worth noticing: distractor B contains "30-40", the exact figure two third-party courses got wrong.**
Microsoft documents **128 maximum, 25-30 recommended** (`TOOL-052`). **Microsoft is using the wrong
number as bait here** - which is the strongest possible argument for knowing the real one.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Design multi-agent solutions · `TOOL-052`

### Q390 — Workflow-oriented compliance sequence
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Three mandatory compliance checks in a defined order, then a legal reviewer before sign-off. No step may be skipped or reordered. Which orchestration pattern?**

- **A.** Orchestrator/subagent - the orchestrator decides which agent to call next.
- **B.** **Workflow-oriented** - the process is deterministic with strict ordering and a human approval gate.
- **C.** A hybrid: concurrent checks, then dynamic routing.

**Answer:** B
**Confidence:** Certain

*Deterministic*, *no step skipped or reordered*, and *a human gate* are all
workflow signals. **Orchestrator/subagent means the AI chooses** - which is precisely what a
compliance process must not allow.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Design multi-agent solutions

### Q391 — When to use a child agent
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A billing capability that __doesn't yet exist__, will be __built and maintained by the same team__, and is __only needed through this one orchestrator__. Which agent type?**

- **A.** **A child agent** created within the orchestrator.
- **B.** An existing Copilot Studio agent connected from the same environment.
- **C.** A Microsoft Foundry agent for specialized model reasoning.

**Answer:** A
**Confidence:** Certain

All three conditions point to a child agent: same ownership, coupled ALM, no
independent reuse. `MULT-008` - *"a lightweight agent that exists within the context of your main
agent."* **B fails on "doesn't yet exist"** - there is nothing to connect to.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Design multi-agent solutions · `MULT-008`

### Q392 — Cross-platform agent connection
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A logistics partner exposes shipment tracking as a __separately hosted agent on a non-Microsoft platform__ that manages its own reasoning. Which connection option?**

- **A.** Existing Copilot Studio agent - the partner republishes into the same environment.
- **B.** **A2A protocol agent** - the open Agent2Agent standard enables cross-platform communication without the partner rebuilding in Copilot Studio.
- **C.** Microsoft Foundry agent to represent the partner's external reasoning.

**Answer:** B
**Confidence:** Certain

*Non-Microsoft platform* plus *manages its own reasoning* is the A2A signature.
[[AB-620 06-Cram-Sheet]] - *"MCP vs A2A: **you keep control** vs **opaque delegation**."*
**A asks a third party to rebuild on your stack, which is the tell that it is wrong.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Design multi-agent solutions · [[AB-620 06-Cram-Sheet]]

### Q393 — Connected-agent latency tradeoff
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker worries connected agents will make responses feel slower. Which characteristic is most directly relevant?**

- **A.** The governance surface expands, increasing testing and security review workload.
- **B.** **Each connected agent adds latency from orchestration hops** - delegate, wait, incorporate, reply.
- **C.** Multi-agent needs more complex knowledge configuration, increasing query resolution time.

**Answer:** B
**Confidence:** Certain

The corpus records it as a defining trade-off of connected agents: *"extra
network hop and higher credit use"*, against a child agent's *"zero extra latency"*.
**A is true but answers a different question** - governance cost, not response speed.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Design multi-agent solutions

### Q394 — Tool sprawl child-agent split
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Returns, shipping and loyalty - __same team, nothing published separately__. The agent exceeds __35 tools__ and routing accuracy is declining. Best architectural fix?**

- **A.** **Create child agents** for each domain to organize tools by scope and reduce the orchestrator's routing surface.
- **B.** Split into three separately published connected agents, maintained by the same team.
- **C.** Add more topics to the single agent to guide routing.

**Answer:** A
**Confidence:** Certain

child agents have **their own orchestration and their own tool
limit**, separate from the parent's. **B fails the ownership test** - separate publishing with no
separate owner buys latency and credits for nothing. **C adds to the routing surface it is meant to
reduce.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Delegate agent tasks using child agents · `MULT-021`

### Q395 — Child agent description scope
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An Order Status child agent is described as *"Assists customers with any questions about purchases made on the website."* Billing queries are being routed to it. Most direct fix?**

- **A.** Add more tools to the Order Status agent so it can handle the billing queries.
- **B.** **Rewrite the description** to scope it to order tracking and delivery status, removing language that also describes billing.
- **C.** Enable *Allow agent to decide dynamically when to use this tool* on all its tools.

**Answer:** B
**Confidence:** Certain

**The description is what routes** - the same rule as tools (`TOOL-069`) and
skills. *"Any questions about purchases"* genuinely does describe billing. **A accepts the
misrouting and builds on it.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Delegate agent tasks using child agents · `TOOL-069`

### Q396 — Prompting for missing child input
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A child agent needs an account ID the parent cannot always supply. Which input configuration makes the child collect it from the user?**

- **A.** Mark the input required and set *Leave empty* when no value is found.
- **B.** Enable **Should prompt user** on the input so the child asks the user directly.
- **C.** Add a validation condition with a reprompt message so it retries until valid.

**Answer:** B
**Confidence:** Certain

*Should prompt user* *"determines whether the agent tries to fill
the variable with a value before executing."* **C solves a different problem** - retrying a bad
answer, not obtaining a missing one.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Delegate agent tasks using child agents · `TOPC-006`

### Q397 — Guaranteed child-agent handoff
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A topic verifies identity and collects an account number, then must hand off to __a specific__ child agent with that number. Which approach guarantees it?**

- **A.** **Add an agent redirect node** at the handoff point, select the target child agent, and pass the account number as an input.
- **B.** Use matching keywords in the topic's trigger phrases and the child agent's description.
- **C.** Set the child agent's trigger to *Message received*.

**Answer:** A
**Confidence:** Certain

Same theme as the topic-level tool question: **"guarantees" rules out anything
the orchestrator decides.** B hopes the AI connects them. A redirect node is deterministic.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Delegate agent tasks using child agents

### Q398 — Temporary child-agent outage
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A child agent depends on an external inventory API that will be down __48 hours__ for maintenance. What should the maker do?**

- **A.** Delete the child agent to prevent errors.
- **B.** **Disable it using the Enabled toggle** on the Agents page until maintenance ends.
- **C.** Rewrite its description to exclude inventory terms so the orchestrator stops routing to it.

**Answer:** B
**Confidence:** Certain

**Reversible beats destructive**, and the outage is temporary. **A loses the
configuration. C corrupts the description**, which is the routing signal, and then has to be undone
from memory.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Delegate agent tasks using child agents

### Q399 — Connected agent availability toggle
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A published Legal agent in the __same environment__ doesn't appear in the orchestrator's available agent list. Most likely cause?**

- **A.** It must be exported as a solution and imported into the orchestrator's environment.
- **B.** **"Let other agents connect to and use this one" isn't enabled** on its Settings page.
- **C.** The orchestrator's maker must be added as a co-owner.

**Answer:** B
**Confidence:** Certain

the other agent must be *"published **and configured as available
to connect**."* **The stem deliberately confirms published and same-environment**, which eliminates
A and leaves the second half of the requirement.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Build multi-agent solutions using connected agents · `MULT-001`

### Q400 — Foundry 404 root cause
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Connecting a Microsoft Foundry agent with the project endpoint URL and agent ID fails with a __404__. Most likely cause?**

- **A.** The Foundry project endpoint URL is only valid for 24 hours and has expired.
- **B.** **The agent was built and published in the legacy Azure AI Studio portal** rather than Microsoft Foundry.
- **C.** A service principal with Foundry project permissions must be created first.

**Answer:** B
**Confidence:** Derived

**404 means not found, not unauthorized** - a permissions problem returns 401
or 403, which eliminates C. A invents an expiry. **Read the status code: it is doing the work here.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Build multi-agent solutions using connected agents

### Q401 — Fabric Data redirect limitation
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A topic redirects to a connected __Fabric Data agent__ for all spend queries, but the queries never reach it. What must the maker know?**

- **A.** Fabric Data agents need an extra authentication step before redirect nodes work.
- **B.** **Routing to Fabric Data agents from topic redirect nodes isn't supported** - they can only be invoked through generative orchestration, based on the agent's description.
- **C.** Redirect nodes only work for child agents; use a topic action node instead.

**Answer:** B
**Confidence:** Derived

**A genuine capability gap, and the kind of fact only the documentation
carries.** It also inverts the usual advice - everywhere else, a redirect node is how you *guarantee*
routing. **Worth a Learn lookup in the exam rather than a guess.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Build multi-agent solutions using connected agents

### Q402 — Overlapping connected-agent descriptions
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A vendor-security query routes to the *contract compliance* agent instead of *vendor risk assessment*. __Both descriptions contain the word "compliance."__ Most direct fix?**

- **A.** Add a topic that intercepts queries containing "compliance" and routes them.
- **B.** Add more tools to the vendor risk agent for stronger signals.
- **C.** **Rewrite both descriptions** in specific, non-overlapping language reflecting each distinct domain.

**Answer:** C
**Confidence:** Certain

Third time this theme appears across three modules: **overlapping descriptions
are the cause of nearly every routing complaint, and rewriting them is nearly always the answer.**
Note it says rewrite **both** - fixing one leaves the collision half-intact.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Build multi-agent solutions using connected agents

### Q403 — Choosing an A2A connection
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A partner's support agent runs on __a different AI platform__, manages its own reasoning and orchestration, and exposes an __A2A-compatible endpoint__. Which integration approach?**

- **A.** Connector
- **B.** MCP connection
- **C.** **A2A connection**

**Answer:** C
**Confidence:** Certain

*Manages its own reasoning* is the A2A signature. [[AB-620 06-Cram-Sheet]] -
*"MCP vs A2A: **you keep control** vs **opaque delegation**."* **Burn the word *opaque* in.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Build cross-platform multi-agent solutions using Agent2Agent · [[AB-620 06-Cram-Sheet]]

### Q404 — Meaning of an agent card
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**What is an __agent card__ in the A2A protocol?**

- **A.** It stores the authentication credentials needed to connect.
- **B.** **A JSON document describing the agent's name, capabilities and endpoint**, used by connecting systems to **discover** the agent.
- **C.** A dashboard showing health and activity of a deployed A2A agent.

**Answer:** B
**Confidence:** Certain

**Discovery document, not a credential store and not a monitor.** A is the
trap worth noticing - credentials are configured separately, exactly as with MCP.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Build cross-platform multi-agent solutions using Agent2Agent

### Q405 — A2A API key authentication
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A partner's A2A agent requires a header named `X-Partner-Key` and a shared secret. Which authentication option?**

- **A.** OAuth 2.0
- **B.** None
- **C.** **API key**

**Answer:** C
**Confidence:** Certain

**A named header plus a shared secret is the definition of API key auth.**
OAuth 2.0 would mean an authorization URL, token URL, client ID and secret - none of which the stem
mentions.

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Build cross-platform multi-agent solutions using Agent2Agent

### Q406 — A2A description overlap
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Some order status queries route to the A2A shipment agent instead of the internal order management agent. Most likely cause?**

- **A.** The A2A agent's endpoint URL is incorrect.
- **B.** **The A2A agent's description is too broad and overlaps** with the internal agent's purpose.
- **C.** A2A doesn't support multi-turn conversations.

**Answer:** B
**Confidence:** Certain

**Fourth appearance of the description-overlap theme.** A wrong endpoint would
cause a failure, not a misroute - **the request is arriving somewhere, so the plumbing works.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Build cross-platform multi-agent solutions using Agent2Agent

### Q407 — Minimizing partner payload data
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**The A2A payload sent to an external partner includes a __customer's account number__ captured earlier in the session. The partner only needs the shipment query. What should the maker do?**

- **A.** Proceed - the account number could enable a more personalized response.
- **B.** **Review the partner's data processing terms and limit the conversation context** passed to the A2A agent to only what the task needs.
- **C.** Remove the account number capture step from the orchestrator entirely.

**Answer:** B
**Confidence:** Certain

**Data minimization, and it maps straight onto *Plan responsible AI strategy*.**
**C over-corrects** - the orchestrator legitimately needs that number; what is wrong is sending it
outside the organization. **A is the answer that ends a career.**

**Source:** Path 1 - Design agent conversations and responses using topics / Module: Build cross-platform multi-agent solutions using Agent2Agent

### Q408 — Indexed knowledge classification
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An agent answers employee questions using __indexed articles__ from an internal IT knowledge base. Which integration category?**

- **A.** Tools, because it retrieves data from an external system.
- **B.** **Knowledge sources**, because the agent **grounds** its responses using indexed content.
- **C.** Agents, because it delegates to a specialized knowledge agent.

**Answer:** B
**Confidence:** Certain

*"Knowledge vs Tools: **read** vs **write**.
Knowledge cannot act."* **A is the trap**: retrieving is not acting.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Design integration strategies for agents · [[AB-620 06-Cram-Sheet]]

### Q409 — Real-time no-copy knowledge
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Current inventory levels from a warehouse system. __Company policy prohibits copying data to Microsoft systems__, and the data changes frequently. Which knowledge approach?**

- **A.** A Copilot connector, for semantic search over enterprise content.
- **B.** Azure AI Search, for custom relevance tuning.
- **C.** **A Power Platform connector as real-time knowledge** - queries the live system at runtime **without replicating data**.

**Answer:** C
**Confidence:** Certain

**Index-based vs real-time is the whole point of this module**, and both A and
B require an index, which means copying. *"Prohibits copying"* is the decisive phrase.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Design integration strategies for agents

### Q410 — Multi-step cross-system action
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**File a support ticket, send a Teams notification, and assign to a routing queue - __one coordinated sequence from one user request__. Which pattern?**

- **A.** A prebuilt Power Platform connector tool.
- **B.** A REST API tool chaining multiple calls in one request.
- **C.** **An agent flow**, because it executes a deterministic, multi-step sequence across services.

**Answer:** C
**Confidence:** Certain

**Three systems, fixed order, one trigger** is the agent-flow signature.
A single connector action does one thing; B misdescribes REST.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Design integration strategies for agents

### Q411 — Anonymous channel publish limit
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A connector tool uses __maker-provided credentials__ so all users share one service account. The agent fails to publish to the company's __anonymous__ intranet portal. Most likely cause?**

- **A.** Maker-provided credentials aren't supported for connector tools.
- **B.** **Agents using maker-provided credentials can only be published to authenticated channels.**
- **C.** A DLP policy is blocking the connector on the portal.

**Answer:** B
**Confidence:** Derived

A shared service account with **no identified user** is precisely what an
anonymous channel cannot be trusted with. **Related to `SEC-064`**, which describes what happens when
maker-provided credentials are prevented: every tool call then needs real-time user interaction.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Design integration strategies for agents · `SEC-064`

### Q412 — Single-agent proprietary API choice
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Connect to a __proprietary internal API that no other agent will use__, minimizing development effort. Which approach?**

- **A.** A custom connector, for built-in error handling and parsing.
- **B.** **A REST API tool**, integrating directly from an OpenAPI spec without connector packaging overhead.
- **C.** An agent flow, for monitoring and high request volumes.

**Answer:** B
**Confidence:** Certain

The corpus states the rule directly: *"Choose a custom connector when
**multiple** components need the same API. For one agent, a REST API tool is lighter."*
**"No other agent will use it" is the whole question.**

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Design integration strategies for agents

### Q413 — Adding a connector tool
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Correct starting point to add a Microsoft Teams connector as a tool?**

- **A.** The Topics tab, adding a connector call node to an existing topic.
- **B.** **The Tools tab → Add a tool → Connector.**
- **C.** The Settings page, under Integrations.

**Answer:** B
**Confidence:** Certain

**Agent-level tools live on the Tools tab.** A describes the topic-level path,
which is a different pattern for a different purpose.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Take action in external systems using connector and REST API tools

### Q414 — Generic tool description mismatch
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A connector tool's connection is __active and valid__, it is __the only tool on the agent__, and the agent never invokes it despite clearly relevant questions. Most likely cause?**

- **A.** **The tool's description is too generic** for generative orchestration to match it.
- **B.** The connector needs a premium licence the plan lacks.
- **C.** The agent must be republished before orchestration can invoke it.

**Answer:** A
**Confidence:** Certain

**Fifth appearance of the description theme.** The stem eliminates the
alternatives on purpose: *only tool* rules out crowding, *connection valid* rules out licensing and
auth. **What is left is the description.**

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Take action in external systems using connector and REST API tools

### Q415 — Shared service account credentials
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**All users must reach a shared inventory database through __one shared service account__, and individual users have no accounts in that system. Which credential mode?**

- **A.** User-provided, so each user signs in on first use.
- **B.** **Maker-provided**, so the agent uses the maker's shared connection for all users.
- **C.** None needed - the agent reuses the maker's connection automatically by default.

**Answer:** B
**Confidence:** Certain

*"Individual users don't have accounts"* makes user-provided impossible.
**C is the trap**: it is not automatic, it is a choice, and it carries the consequence the corpus
records - **everyone acts with the author's access.**

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Take action in external systems using connector and REST API tools

### Q416 — Missing maker-provided option
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**The __maker-provided__ option isn't available in the interface. Most likely cause?**

- **A.** The connector type doesn't support maker-provided credentials.
- **B.** **The agent is configured for an unauthenticated or anonymous channel.**
- **C.** The connection hasn't been shared with other users in Power Apps.

**Answer:** B
**Confidence:** Derived

**Same rule as question 4 in the previous module, seen from the other side** -
there it blocked publishing, here it hides the option. **Two questions, one underlying constraint:
shared credentials require identified users.**

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Take action in external systems using connector and REST API tools

### Q417 — Selecting only needed endpoints
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An OpenAPI spec defines __14 endpoints__; the agent needs __two__. Recommended approach?**

- **A.** Select all 14 for full API surface.
- **B.** **Select only the two required**, to minimize tool surface and reduce orchestration ambiguity.
- **C.** Select all GET endpoints and exclude POST and PATCH.

**Answer:** B
**Confidence:** Certain

The corpus says it almost verbatim: *"Select only the endpoints you need.
Twelve endpoints when the agent needs two confuses the orchestrator and reduces accuracy."*
**C sounds safety-conscious but breaks the requirement** - submitting corrections needs a write.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Take action in external systems using connector and REST API tools

### Q418 — Cited monthly procedure knowledge
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**IT procedure articles updated __monthly__ that must appear with __inline citations__. Best knowledge source?**

- **A.** A real-time Power Platform connector knowledge source.
- **B.** **A Copilot connector knowledge source.**
- **C.** An Azure AI Search knowledge source.

**Answer:** B
**Confidence:** Certain

*"Copilot connector vs Power Platform connector:
**indexed into Graph, cites** vs **live, no citations**."* **Citations decide it**, and *monthly*
means an index is perfectly adequate. **Note this is the mirror image of question 2 in the previous
module** - same two options, opposite answer, because the requirement flipped.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Ground agents with enterprise knowledge using connectors and Azure AI Search · [[AB-620 06-Cram-Sheet]]

### Q419 — Copilot connector auth scope
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Publishing an agent with a __Copilot connector__ knowledge source to an __authenticated Teams channel__. What must be added to the manual authentication configuration?**

- **A.** `User.Read`
- **B.** **`ExternalItem.Read.All`**
- **C.** `Sites.Read.All`

**Answer:** B
**Confidence:** Derived

**Copilot connectors index content into the Microsoft Graph as external
items**, so reading them at runtime needs the external-item scope. `Sites.Read.All` is SharePoint;
`User.Read` is profile. **Learn the scope name - it is exactly the kind of exact, forgettable string
worth an in-exam Learn lookup.**

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Ground agents with enterprise knowledge using connectors and Azure AI Search

### Q420 — Faulty Azure AI Search connection
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker types the Azure AI Search endpoint URL and API key __directly into the knowledge source form__ instead of using *Create new connection*. Likely consequence?**

- **A.** It works but shows degraded status until the next index refresh.
- **B.** It is added successfully but citations don't appear.
- **C.** **A faulty environment-level data connection is created that can prevent ALL agents in the environment from adding Azure AI Search knowledge sources.**

**Answer:** C
**Confidence:** Derived

**The severity is the point.** A maker-level mistake becomes an
environment-level fault affecting everyone. **This is the shape of a governance question** - and the
reason the *Create new connection* dialog exists at all.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Ground agents with enterprise knowledge using connectors and Azure AI Search

### Q421 — Real-time residency-safe inventory
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**Current inventory levels, with __data residency requirements preventing any copy leaving the source system__. Which approach satisfies both?**

- **A.** A Copilot connector knowledge source.
- **B.** **A real-time Power Platform connector knowledge source.**
- **C.** An Azure AI Search index in the organization's own Azure subscription.

**Answer:** B
**Confidence:** Certain

**C is the sophisticated wrong answer** - your own subscription is still a
copy, and the stem says *any copy leaving the source system*. **Only real-time avoids replication.**

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Ground agents with enterprise knowledge using connectors and Azure AI Search

### Q422 — Azure AI Search citation URL
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An Azure AI Search index has a `source_url` field and a `metadata_storage_path` field. Which does Copilot Studio use as the citation URL?**

- **A.** `source_url` - custom URL fields take precedence over system fields.
- **B.** `metadata_storage_path` - Copilot Studio checks for this field first.
- **C.** Neither - citation URLs must be explicitly mapped in the knowledge source configuration.

**Answer:** B
**Confidence:** Certain - CORRECTED 2026-08-23 from Microsoft's own page

[Add Azure AI Search as a knowledge source](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search#return-citations):
*"**When the `metadata_storage_path` field is included in the index, Copilot Studio interprets that
field as the citation.** However, if that field doesn't exist, Copilot Studio considers whatever field
contains a complete URL link as the citation."*

**So `metadata_storage_path` wins, and `source_url` is the fallback** - the opposite of option A's
claim that custom fields take precedence.

**I originally answered C and flagged it Judgment. C was wrong.** The reasoning was pattern-matching
on question shape - *"two named fields, so the answer must be neither"* - instead of going and
reading the page. **The flag did its job: it was the one answer marked as untrustworthy, and it was
the one that was wrong.** Corrected the moment the primary source was read.

**Also worth banking from that same page:** users still need permission to open whatever the citation
points at. A citation to a restricted source renders but cannot be followed.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Ground agents with enterprise knowledge using connectors and Azure AI Search · [Add Azure AI Search as a knowledge source](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search#return-citations)

### Q423 — Why MCP centralizes updates
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An enterprise MCP server exposes tools from four backends. __Twelve agents__ need them and the tool set is __updated quarterly__. Which MCP characteristic makes it better than per-agent connectors?**

- **A.** **All connected agents automatically reflect tool updates from the server** without per-agent reconfiguration.
- **B.** Makers can customize tool descriptions for each agent's orchestration needs.
- **C.** MCP tools can be invoked deterministically from within topic nodes.

**Answer:** A
**Confidence:** Certain

*"A standardized catalog of tools published once and inherited by every
connected agent."* **B and C are not merely wrong - they are the exact opposite of documented
behaviour:** MCP tool descriptions are **server-side and read-only**, and **topics cannot call MCP
servers at all - only the orchestrator can.** Know both and this question answers itself.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Integrate agents with external systems via MCP

### Q424 — Direct agent tool description control
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**One agent, one internal system __no other agent uses__, and the maker needs __full control over the tool's description__. Which approach?**

- **A.** **A connector tool or REST API tool configured directly on the agent.**
- **B.** An MCP server connection via the onboarding wizard.
- **C.** A knowledge source querying live data.

**Answer:** A
**Confidence:** Certain

**"Full control over the description" rules MCP out by itself** - descriptions
come from the server and cannot be edited. Single-consumer rules out the catalog benefit too.
**The corpus warns about exactly this: your routing quality depends on someone else's writing.**

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Integrate agents with external systems via MCP

### Q425 — Dynamic discovery MCP subtype
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**An MCP server uses OAuth 2.0 and supports __Dynamic Client Registration with a discovery endpoint__. Which sub-type minimizes configuration?**

- **A.** **Dynamic discovery**
- **B.** Dynamic
- **C.** Manual

**Answer:** A
**Confidence:** Derived

The stem names **both** dynamic registration **and** a discovery endpoint, and
the option that names both is the one that needs least typing. **B is the near-miss distractor** -
right family, ignores the discovery endpoint.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Integrate agents with external systems via MCP

### Q426 — New MCP tools after allow-all off
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**A maker turns __off__ *Allow all* and enables 5 of 15 tools. The server owner later publishes __three new tools__. Default state of the new ones?**

- **A.** **Disabled by default**, requiring explicit enablement.
- **B.** Enabled automatically, because the agent is still connected.
- **C.** They replace the five enabled tools and must be reconfigured.

**Answer:** A
**Confidence:** Certain

Straight from the corpus: *"All tools are ON by default; the Allow all toggle
is on. **Turn it off and NEW tools arrive disabled - that is the toggle's real purpose.**"*
**This is a governance control, not a convenience**, and that framing is what the exam tests.

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Integrate agents with external systems via MCP

### Q427 — MCP server description routing
*Bank: bank3 · Domain: INTEGRATION (inferred) · Difficulty: Unknown*

**In the MCP onboarding wizard - server name, server description, server URL. Which most directly affects the agent's ability to __select the right tool at runtime__?**

- **A.** **The server description**
- **B.** The server name
- **C.** The server URL

**Answer:** A
**Confidence:** Certain

**Sixth and final appearance of the description theme across these 11
modules.** The URL determines whether you connect at all; the description determines whether the
orchestrator chooses correctly. **If you take one pattern from this entire file, take that one.**

**Source:** Path 3 - Integrate agents with enterprise systems / Module: Integrate agents with external systems via MCP
