# AB-620 - Every Flashcard, One File

**GENERATED FILE. Do not hand-edit.**

For drilling, import the TSV/CSV into Anki instead. This file is for reading.

---

# Master Flashcard Bank (511 cards)

*Source: `Flashcards/AB-620 Master Flashcard Bank.tsv`*

**1. What is a developer environment, and what can it not do?**

A **single-user** environment. It **cannot be used to run or share production apps**.  -- Single-user is the constraint that matters - you cannot demonstrate sharing or multi-user behavior in one. [SRC: ALM-002] | https://learn.microsoft.com/en-us/power-platform/alm/basics-alm

**2. What Dataverse requirement applies to pipeline environments?**

**All environments used in pipelines must have a Microsoft Dataverse database.**  -- All environments, not just targets - this one has no exceptions. [SRC: ALM-027] | https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines

**3. What role is needed to install the pipelines application?**

**Power Platform administrator or Dataverse system administrator.** [SRC: ALM-028] | https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines

**4. What two things must exist before a default deployment pipeline rule can be configured?**

**The Power Platform Pipelines package installed in at least one environment with a pipelines host configured**, and **at least one pipeline configured in that host**. [SRC: ALM-040, ALM-041] | https://learn.microsoft.com/en-us/power-platform/alm/default-deployment-pipeline-rule-for-environment-groups

**5. What does the Deployment Pipeline User role grant, and what does it not?**

It grants access to **run** one or more pipelines. It does **not** grant access to create, edit or delete pipelines.  -- Run, not manage. [SRC: ALM-036] | https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines

**6. Who can access environment groups in the Power Platform admin center?**

**A Tenant Administrator.** [SRC: ALM-039] | https://learn.microsoft.com/en-us/power-platform/alm/default-deployment-pipeline-rule-for-environment-groups

**7. What is required to access the Deployment Pipeline Configuration app for cross-geo deployment?**

**System Administrator or Deployment Pipeline Administrator**, plus **Write privileges on the Organization Setting table**. [SRC: ALM-075] | https://learn.microsoft.com/en-us/power-platform/alm/enable-cross-geo-solution-deployments

**8. What access is needed to run a pipeline?**

**Access to run the pipeline**, granted separately - see 'Grant access to edit or run pipelines'. [SRC: ALM-011] | https://learn.microsoft.com/en-us/power-platform/alm/copilot-deployment-notes-pipelines

**9. What does the Previous Deployment Stage setting do?**

It **specifies a stage that must be deployed to before deploying to the current stage** - for example setting test as the previous stage for production.  -- This is the setting that actually enforces stage order. [SRC: ALM-033, ALM-049] | https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines https://learn.microsoft.com/en-us/power-platform/developer/pipelines/table-reference

**10. What are the three pipeline extension steps, and when does each run?**

**Pre-export Step** runs custom validation when a deployment request is submitted and blocks export until complete. **Pre-deployment Step** inserts a custom step **after** approval. **PreDeployment Step Required** holds deployment requests pending until approved by custom business logic. [SRC: ALM-081, ALM-083, ALM-034] | https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines

**11. What does Is Delegated Deployment change?**

Deployments are carried out using **a service principal or the pipeline stage owner's identity** instead of the requesting maker's, so makers can request deployments without holding the privileges themselves.  -- It changes *who deploys*, never the stage order. [SRC: ALM-082] | https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines

**12. What Entra ID relationship must the delegate identity have?**

**The pipeline stage owner must be an owner of the service principal in Microsoft Entra ID**, and the connection is created as that service principal or stage owner. [SRC: ALM-085] | https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines

**13. What can personal pipelines created in Power Apps not do?**

**They cannot be extended.** [SRC: ALM-080] | https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines

**14. When does a solution import fail on dependencies?**

**When required components are neither included in the solution nor already present in the target environment.** [SRC: ALM-045] | https://learn.microsoft.com/en-us/power-platform/alm/dependency-tracking-solution-components

**15. How do you remove a published dependency between two solution components?**

**The association must be removed and the tables published again.** Published dependencies are created when two related components are published. [SRC: ALM-046] | https://learn.microsoft.com/en-us/power-platform/alm/dependency-tracking-solution-components

**16. Why can a solution fail to import into an older environment?**

**You cannot reliably import a solution into an environment on an older version than the one it was exported from** - required components or functionality may be missing.  -- Export from the oldest environment in the chain, not the newest. [SRC: ALM-079] | https://learn.microsoft.com/en-us/power-platform/alm/environment-strategy-alm

**17. When should a patch be used rather than an update?**

**For small, hotfix-sized changes that you may need to uninstall later.** A patch contains only the changes for its parent managed solution. [SRC: ALM-005] | https://learn.microsoft.com/en-us/power-platform/alm/basics-alm

**18. What blocks installing a patch?**

**A mismatch between the parent solution's unique name and major or minor version and the parent installed in the target.** [SRC: ALM-013] | https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates

**19. Can you mix task versions for Power Platform Build Tools in one pipeline?**

**No. You cannot mix and match task versions** in a build pipeline. [SRC: ALM-069] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tools

**20. What two connection types can Build Tools use, and how are they specified?**

**PowerPlatformEnvironment** for a username/password connection, or **PowerPlatformSPN** for a service principal / client secret connection. [SRC: ALM-065, ALM-070] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tool-tasks https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tools

**21. What must be configured before a service principal connection will work?**

**A Power Platform profile authenticated with the required permissions, plus a Microsoft Entra ID application and associated application user.** [SRC: ALM-071] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tools

**22. What happens if you lose a client secret after creating it?**

**You cannot retrieve it again** - the value is shown once and you must create a new secret.  -- Never write the value into a note. Reference where it is stored instead. [SRC: ALM-073] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tools

**23. What is the default maximum wait time for an asynchronous Build Tools operation?**

**60 minutes**, matching the Azure DevOps default for tasks. [SRC: ALM-068] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tool-tasks

**24. Which two Solution Checker rule sets are available in the Build Tools task?**

**Solution checker** - the same rule set that runs from the Power Apps maker portal - and one other selectable set. The rule set parameter is required. [SRC: ALM-064] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tool-tasks

**25. Can you upgrade Power Platform Build Tools from the preview version?**

**No.** Breaking changes were introduced in the GA release, so you must install the GA version rather than upgrading. [SRC: ALM-074] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tools

**26. What must be enabled before AI deployment notes work on a pipeline?**

**The AI deployment notes setting must be set to Enabled in the Deployment Pipeline Configuration app, for each pipeline** that uses the feature. [SRC: ALM-012] | https://learn.microsoft.com/en-us/power-platform/alm/copilot-deployment-notes-pipelines

**27. What licensing do users need to create or edit apps and flows?**

**A per-user license for Power Apps or Power Automate, or an appropriate Dynamics 365 application license.** [SRC: ALM-006] | https://learn.microsoft.com/en-us/power-platform/alm/basics-alm

**28. What must be true of localized text in solution components?**

**Any localized text must be included in the solution component itself** for components using that tactic. [SRC: ALM-024] | https://learn.microsoft.com/en-us/power-platform/alm/create-solutions-support-multiple-languages

**29. How do you avoid entering connection reference values interactively on import?**

**Pass a deployment settings JSON file as a parameter when importing with Power Platform Build Tools.** It creates the required connection references and environment variable values on import, and can live in source control.  -- This is how a pipeline import becomes unattended. [SRC: ALM-008, ALM-009] | https://learn.microsoft.com/en-us/power-platform/alm/conn-ref-env-variables-build-tools

**30. What protection does a new solution have by default?**

**Unmanaged.** If you change it to managed you can no longer export it - you must create a new solution. [SRC: ALM-221] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export

**31. What does every solution require, and what is it represented by?**

**A publisher**, represented by the **Publisher table**. [SRC: ALM-166] | https://learn.microsoft.com/en-us/power-platform/alm/solution-api

**32. When must a publisher prefix be changed?**

**Before creating any new apps or metadata items**, because metadata item names cannot be changed after creation. [SRC: ALM-189] | https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm

**33. Why can the default solution never be distributed?**

**It cannot be exported.** [SRC: ALM-214] | https://learn.microsoft.com/en-us/power-platform/alm/use-solutions-for-your-customizations

**34. What can and cannot be exported?**

**You cannot export a managed solution.** You **can** export an unmanaged solution *as* managed. [SRC: ALM-182] | https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm

**35. Why do you need a separate environment to test a managed solution?**

**You cannot import a managed solution into the same environment that contains the originating unmanaged solution.** [SRC: ALM-183] | https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm

**36. What does editing a managed component create, and what does it block?**

**A dependency between your unmanaged customizations and the managed solution**, and while it exists **the managed solution cannot be uninstalled**. [SRC: ALM-181, ALM-185] | https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm

**37. Once a managed solution is imported, what happens to components?**

**Components cannot be added or removed**, though the solution can optionally allow further customization. [SRC: ALM-202] | https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool

**38. When can managed properties be changed after import?**

**Only by an update of the solution from the original publisher.** [SRC: ALM-107] | https://learn.microsoft.com/en-us/power-platform/alm/managed-properties-alm

**39. What must be present in the target before a patch can install?**

**The parent solution.** [SRC: ALM-213] | https://learn.microsoft.com/en-us/power-platform/alm/update-solutions-alm

**40. What does a patch not do to a form?**

**It cannot remove components.** Patches are additive, so a field added earlier is not removed by a patch. [SRC: ALM-098] | https://learn.microsoft.com/en-us/power-platform/alm/form-alm

**41. Why is 'clone a patch' or 'clone solution' discouraged?**

**It limits team development and increases complexity when storing the solution in source control.** [SRC: ALM-212] | https://learn.microsoft.com/en-us/power-platform/alm/update-solutions-alm

**42. What two things block exporting an agent in a solution?**

**Topic-level or node-level comments cannot be exported**, and **a solution containing an agent with periods in any topic name cannot be exported at all.**  -- A period in a topic name is a silent export blocker. [SRC: ALM-218, ALM-223] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export

**43. What minimum role is needed to export and import agents in solutions?**

**System Customizer.** [SRC: ALM-219] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export

**44. What must you add when a solution uses flows and environment variables?**

**The required objects for flows and environment variables** - via Add required objects. [SRC: ALM-227] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export

**45. What do quick find views do during segmentation?**

**They pull their required attributes into the solution file when customized, regardless of table segmentation properties.** [SRC: ALM-157] | https://learn.microsoft.com/en-us/power-platform/alm/segmented-solutions-alm

**46. What three arguments does SolutionPackager always require?**

**The action** (extract or pack), **the path and name of the solution .zip**, and **the path to a folder**. When extracting the zip must exist; when packing the folder must already exist. [SRC: ALM-191, ALM-192, ALM-193] | https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool

**47. When is the /SolutionName argument required?**

**When the source folder contains multiple solutions**, and always **in YAML format**. [SRC: ALM-194, ALM-197] | https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool

**48. Which components are only supported in YAML format?**

**Canvas app .msapp files and modern flows**, with the .msapp binary under canvasapps/<name>/. They are **not supported in XML format**. [SRC: ALM-195, ALM-210] | https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool https://learn.microsoft.com/en-us/power-platform/alm/solution-source-control-yaml-format

**49. What pac CLI version does YAML source control require?**

**Microsoft.PowerApps.CLI version 2.4.1 or later.** [SRC: ALM-205] | https://learn.microsoft.com/en-us/power-platform/alm/solution-source-control-yaml-format

**50. Which directories are required in the YAML layout?**

**solutions/ and publishers/.** All component folders at the root are optional and depend on what the solution contains. [SRC: ALM-206] | https://learn.microsoft.com/en-us/power-platform/alm/solution-source-control-yaml-format

**51. Does a successful pack guarantee a successful import?**

**No.** Pack success does not guarantee import success - for example if solutioncomponents.yml omits required entries. [SRC: ALM-208] | https://learn.microsoft.com/en-us/power-platform/alm/solution-source-control-yaml-format

**52. When should the XML source control format be used?**

**Only for existing repositories already using XML, or with legacy tooling that does not support YAML.** [SRC: ALM-216] | https://learn.microsoft.com/en-us/power-platform/alm/use-source-control-solution-files

**53. What manual editing is unsupported?**

**Manual editing of extracted component files and .zip files**, except the specific sections described under 'When to edit the customizations file'. [SRC: ALM-215] | https://learn.microsoft.com/en-us/power-platform/alm/use-source-control-solution-files

**54. What happens if a file matches a directive but no alternative location is found?**

**SolutionPackager issues an error.** A matched file must be found in at least one alternative location. [SRC: ALM-198] | https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool

**55. What do pipelines remove the need to do manually?**

**Connecting to multiple environments, exporting solutions, downloading solution files, manually creating connections, populating deployment settings files and importing solutions.**  -- No prior ALM knowledge is required - citizen developers see it as guided change management. [SRC: ALM-125, ALM-123] | https://learn.microsoft.com/en-us/power-platform/alm/pipelines

**56. What licensing follows from the managed environment requirement?**

**Licenses granting premium use rights are required for all managed environments.** [SRC: ALM-131] | https://learn.microsoft.com/en-us/power-platform/alm/pipelines

**57. What three limits apply to personal pipelines?**

**They cannot be extended, cannot be shared with other users, and cannot target default environments, Teams environments, or environments without a Dataverse store.** [SRC: ALM-141, ALM-136] | https://learn.microsoft.com/en-us/power-platform/alm/platform-host-pipelines

**58. Who can add a stage, and what limit applies?**

**You must be the owner of the pipeline.** The add-stage capability is **limited to single-stage pipelines** - administrators can add more in the Deployment Pipeline Configuration app. [SRC: ALM-142, ALM-143] | https://learn.microsoft.com/en-us/power-platform/alm/platform-host-pipelines

**59. What two things enable redeploying an older solution version?**

**Power Platform Pipelines package version 9.1.24023.240222117 or later**, and **Allow redeployments of older versions enabled in pipeline settings.** [SRC: ALM-148, ALM-149] | https://learn.microsoft.com/en-us/power-platform/alm/redeploy-past-solution-versions

**60. What three prerequisites apply to running a pipeline?**

**The development environment must have Dataverse (or Dataverse plus Dynamics 365 customer engagement apps), you must have access to run the pipeline, and you must have privileges to import solutions to the target environments.** [SRC: ALM-150, ALM-151, ALM-152] | https://learn.microsoft.com/en-us/power-platform/alm/run-pipeline

**61. What is the consequence of setting a default pipelines host?**

**Users lose access to any existing pipelines within the current host.** The data is not removed, but an admin must re-create environment and pipeline records.  -- Requires Power Platform admin for the tenant. [SRC: ALM-160, ALM-158] | https://learn.microsoft.com/en-us/power-platform/alm/set-a-default-pipelines-host

**62. Why might you be unable to create a pipeline with a particular target?**

**The environment is already associated to the host as a development environment.** Changing an environment's type distinction requires editing it in the host. [SRC: ALM-164] | https://learn.microsoft.com/en-us/power-platform/alm/set-up-pipelines

**63. Which connection references cannot be updated during deployment?**

**Those with no value in the solution or target environment.** If a value was deployed previously, it can be updated. [SRC: ALM-134] | https://learn.microsoft.com/en-us/power-platform/alm/pipelines

**64. Which inputs does the GitHub export workflow require?**

**artifact_url, solution_name, source_branch and commit_message.** [SRC: ALM-087, ALM-088, ALM-089, ALM-090] | https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines-github-export

**65. What triggers the flow that calls a GitHub workflow?**

**The OnDeploymentRequested action running in Dataverse.** The flow then calls the HTTP connector to trigger the GitHub workflow. [SRC: ALM-093, ALM-094] | https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines-github-export

**66. What is the minimum and the recommended environment split?**

**Minimum: development and production. Recommended: three - development, testing, and production.** [SRC: ALM-108, ALM-109] | https://learn.microsoft.com/en-us/power-platform/alm/move-from-single-env-alm https://learn.microsoft.com/en-us/power-platform/alm/new-project-alm

**67. What is the risk of multiple unmanaged solutions in one development environment?**

**Increased likelihood of dependency conflicts** - for example one solution failing to import because of another. [SRC: ALM-113] | https://learn.microsoft.com/en-us/power-platform/alm/organize-solutions

**68. How many test cases can each kind of test set hold?**

**Single-response: up to 100 test cases. Conversational: up to 20 test cases**, each supporting **up to 12 total messages** - six question-and-answer pairs.  -- 100 versus 20. The conversational set is far smaller because each case is a whole dialogue. [SRC: ANLY-054, ANLY-069, ANLY-071] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-multi-turn

**69. What SharePoint content can be used to generate a test set?**

**Only individual SharePoint files. Folders are not supported.** [SRC: ANLY-058] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create

**70. What file formats can a test set be imported from?**

**Comma separated values (CSV) or text format.** [SRC: ANLY-062] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create

**71. Which test method can makers not use for evaluations?**

**The similarity test method.** All other test methods are available. [SRC: ANLY-067] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-intro

**72. Can makers add a user profile to their test sets?**

**No** - but they can still **run evaluations without a user profile**. [SRC: ANLY-066] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-intro

**73. Which agent type does agent evaluation not support?**

**Fabric data agents.** [SRC: ANLY-068] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-intro

**74. What is the difference between Any and All in a keyword match test?**

**Any** passes the test case if **at least one** word or phrase matches. **All** requires every expected keyword to match. [SRC: ANLY-074] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-overview

**75. Which test method is currently available in the new agents experience?**

**General quality only** - an AI-based assessment of whether responses meet quality standards. [SRC: ANLY-010] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro

**76. What connector do evaluations using user authentication depend on?**

**The Microsoft Copilot Studio connector.** If an admin turns that connection off, evaluations using user authentication cannot run. [SRC: ANLY-012] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-edit

**77. How many custom metrics can you define, and how many outcomes each?**

**Up to three custom metrics**, defined in natural language, each with **up to 10 result categories**. They are tracked across **sampled** sessions. [SRC: ANLY-019, ANLY-020, ANLY-028] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-custom-metrics https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness

**78. Why is Response quality sometimes missing from a question?**

**It only appears if the question was sampled for quality analysis.** It is not calculated for every question. [SRC: ANLY-023] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-drill-down-lists

**79. What role is required to view sessions and comments?**

**Bot Transcript Viewer.** [SRC: ANLY-031, ANLY-035] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-questions-sessions

**80. When does the See all button appear for connected agents?**

**Only when there are more than five connected or child agents** attached to the main agent. [SRC: ANLY-032] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness

**81. If you change the Dataverse retention period, what is affected?**

**Only custom analytics.** The retention period for the Analytics page in Copilot Studio is **not** affected.  -- Changing Dataverse retention does not extend the Analytics page. [SRC: ANLY-042] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-powerapps

**82. What must an agent's data contain before analytics is meaningful?**

**Sessions for at least one conversation.** Data consisting only of trigger-based runs is not enough. [SRC: ANLY-047] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-studio

**83. What role must someone hold to view a shared Application Insights workbook?**

**At least the Reader role on the connected Application Insights resource.** [SRC: ANLY-003] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry

**84. What happens to the Application Insights connector when a data policy is enforced?**

**It is blocked for the targeted environments**, and users and makers cannot use it there. [SRC: ANLY-004] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry

**85. What checkbox is required for enhanced reporting on computer use?**

**Allow conversation transcripts and their associated metadata to be saved in Dataverse.** [SRC: ANLY-052] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/monitor-computer-use

**86. What is needed for the Copilot Studio agents report in Viva Insights?**

**The Viva Insights requirements must be met, and data transfer from Copilot Studio to Viva Insights must be enabled.** [SRC: ANLY-050] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-viva-insights

**87. Can an agent be exempted from data policy enforcement?**

**No. Since March 2025 agents cannot be exempted**, and the PowerShell exemption no longer exists. [SRC: SEC-012] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-dlp-troubleshooting

**88. What happens when data policies block every channel for an agent?**

**You cannot publish the agent.** [SRC: SEC-013] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-dlp-troubleshooting

**89. Whose transcript settings win - the environment or the individual agent?**

**An environment rule group configured by a System administrator takes precedence** over the settings for individual environments. [SRC: SEC-017] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-transcript-controls

**90. Does Copilot Studio support tenant isolation?**

**No.** [SRC: SEC-036] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-faq

**91. Can agent creation be disabled?**

**No.** Microsoft's guidance is to **use data policies to stop anyone chatting with the agent** instead.  -- You cannot block creation, only consumption. [SRC: SEC-037] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-faq

**92. Where can the Authenticate node be placed in a dialog?**

**Only at the end of a dialog tree, as a leaf node.** You cannot add it in the middle, though you can add nodes after it once it is placed. [SRC: SEC-041] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**93. When can you not explicitly add authentication to topics?**

**When the authentication option is set to Authenticate with Microsoft.** [SRC: SEC-039] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**94. What placement rule applies when an agent is connected to Dynamics 365 Customer Service?**

**The Authentication node cannot be part of the conversation path the agent follows when initially greeting users.** [SRC: SEC-040] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**95. What does User.IsLoggedIn hold, and what is it for?**

**A Boolean of the user's sign-in status** - true means signed in. It is used to build **branching logic** that checks for a successful sign-in. [SRC: SEC-042, SEC-044] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**96. What does SignInRequired indicate?**

**The user must sign in at the beginning of the conversation via the Sign in system topic**, and Require users to sign in must be turned on. [SRC: SEC-043] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**97. Can User.Id be set to a custom value?**

**No - for security reasons it cannot be populated with a custom value**, other than an empty or blank value. [SRC: SEC-047] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**98. What does Authenticate with Microsoft force?**

**The agent works only on the Teams channel**, and because the user is always signed in, **Require users to sign in is turned on and cannot be turned off.** [SRC: SEC-058] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**99. What flexibility does Generic OAuth2 give?**

**Require users to sign in can be turned on or off.** When on, any user who signs in can chat with the agent - **you cannot control which specific users**. [SRC: SEC-059] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**100. When does turning off Require users to sign in change the prompt?**

**The agent does not ask users to sign in until it reaches a topic that requires it**, rather than at the start. [SRC: SEC-054] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**101. When are users prompted if a dialog uses a tool requiring authentication?**

**As soon as the conversation begins**, when they visit any dialog using such a tool. [SRC: SEC-022] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-enduser-authentication

**102. Can the Sign in system topic be customized?**

**No, it is read-only.** It can be viewed from the authoring canvas. [SRC: SEC-055] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**103. What determines whether an agent can be shared to control who may chat with it?**

**The combination of the agent's authentication type and the Require user to sign in setting.** [SRC: SEC-056] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**104. Which agents cannot be embedded in Power BI?**

**Agents that use Microsoft authentication (Entra ID).**  -- Check this before promising a Power BI embed. [SRC: SEC-048] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**105. What does the Power Platform admin control over manual authentication do?**

**It prevents the Authenticate manually option from being turned on or off** within the agent. [SRC: SEC-051] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**106. What does a Protected status mean, and what triggers Needs review?**

**Protected means no immediate action is required based on detected signals**, shown with a green shield. **Needs review appears if Authentication or Policies violate the agent's security standards.** [SRC: SEC-028, SEC-029] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-agent-runtime-view

**107. Which service is named among those Copilot Studio must reach?**

**token.botframework.com**, listed under Required services. [SRC: SEC-020] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-authentication-azure-ad

**108. How many actions should a flow run contain?**

**No more than 100.** Loops count as one action **per iteration**, so a loop of 60 is 60 actions.  -- A short-looking flow with a loop can blow the budget quietly. [SRC: FLOW-047] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

**109. Which two action types are unsupported in express mode?**

**Delay and webhook actions.** Errors appear when saving the flow. [SRC: FLOW-045] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

**110. What does it mean if express mode does not appear?**

**The environment does not support the feature yet.** [SRC: FLOW-043] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

**111. What response mode does express mode require?**

**Real time, not asynchronous.** The Asynchronous response toggle must be **Off** under Networking in the Respond action.  -- Express mode and asynchronous response are mutually exclusive. [SRC: FLOW-048] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-agent

**112. What response time must an express-mode flow meet?**

**Within the 100-second action limit.** Optimize logic, queries and the amount of data returned. [SRC: FLOW-049] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-agent

**113. What does asynchronous response change?**

**Long-running flows continue beyond the normal two-minute limit and return a callback response** to the agent once they finish. [SRC: FLOW-051, FLOW-052] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-asynchronous-response

**114. Which channel fully supports async callbacks?**

**Microsoft Teams.** Other channels might support callbacks but are not guaranteed. [SRC: FLOW-053] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-asynchronous-response

**115. What happens if the environment does not support asynchronous response?**

**The agent may receive a "flow completed" response immediately while the flow is still running.**  -- A false success. The agent believes it is done and the work is not. [SRC: FLOW-054] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-asynchronous-response

**116. What can a Power Automate flow be converted into, and what does it require?**

**Only an agent flow - never the new workflow format.** Conversion requires **Copilot Studio capacity, prepaid or pay-as-you-go, available in the environment**. [SRC: FLOW-056, FLOW-057] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview

**117. If a flow is not listed when adding it to an agent, what do you check?**

**That it has the When an agent calls the flow trigger and a Respond to the agent action.** [SRC: FLOW-050] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-agent

**118. What can computer use reach by default, and how do you restrict it?**

**By default it can operate on any website or application.** Enable **access control** to define what it may reach.  -- Open by default. Restricting it is a deliberate act. [SRC: TOOL-060] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

**119. What four hardening steps does Microsoft recommend?**

**Limit permissions on the account used for computer use**, **follow least privilege - only the permissions needed to run the workflow**, **limit web access to an allow list of trusted sites**, and **install only applications essential to the intended AI workflows**. [SRC: TOOL-062, TOOL-063, TOOL-064, TOOL-066] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

**120. What permission does the creator of a Key Vault environment variable need?**

**Appropriate permissions to the Azure Key Vault resource.** [SRC: TOOL-059] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

**121. What cannot be automated when preparing tests?**

**Configuration capture.** Test data - the sample data needed to run tests - must be prepared manually. [SRC: TOOL-015] | https://learn.microsoft.com/en-us/power-platform/alm/configure-and-deploy-tools

**122. Which file locations are unsupported for this knowledge source?**

**OneDrive and SharePoint files.** [SRC: KNOW-126] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-file-groups

**123. What must be enabled to use Dataverse files as knowledge?**

**Dataverse search**, turned on in the environment by an administrator. [SRC: KNOW-127] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-file-groups

**124. How can web resources depend on one another?**

**Through relative links** - for example an HTML web resource using a CSS or script web resource. [SRC: ALM-047] | https://learn.microsoft.com/en-us/power-platform/alm/dependency-tracking-solution-components

**125. How can a plug-in assembly surface a message to an end user?**

**By throwing an InvalidPluginExecutionException**, as well as creating and updating records. [SRC: ALM-026] | https://learn.microsoft.com/en-us/power-platform/alm/create-solutions-support-multiple-languages

**126. When must you specify an alternative Power Platform Checker geography?**

**When UseDefaultPACheckerEndpoint is false** - for example a Japan endpoint. [SRC: ALM-060] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tool-tasks

**127. Which file should be referenced from a SAS URL for analysis?**

**An exported solution file, not the unpacked source files** in the repository. [SRC: ALM-061] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tool-tasks

**128. What two components must an agent flow contain to be added to an agent?**

**The When an agent calls the flow trigger** and **the Respond to the agent action** - and the flow must be a **solution flow**.  -- Missing either one and the flow simply never appears. [SRC: FLOW-020] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-faqs

**129. What four prerequisites does express mode require?**

**A When an agent calls a flow or When an app calls a flow trigger**, **a Respond to agent or Respond to app action**, **a Copilot Studio plan associated with the flow**, and **a Power Automate environment on new infrastructure**. [SRC: FLOW-034, FLOW-035, FLOW-036, FLOW-037] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

**130. Which flows suit express mode and which do not?**

**Logic-heavy flows suit it** - they do not return large amounts of connector data. **Data-heavy flows do not** - large data exceeds express mode's memory limit.  -- Microsoft's example of data-heavy: 1,500 rows with 100 columns. [SRC: FLOW-038, FLOW-039] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

**131. What does an express-mode failure during test predict?**

**The same variable-size or memory-limit failures in production.** A test failure is a preview of deployment behavior, not a test artifact. [SRC: FLOW-041] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

**132. Which environments can use express mode today?**

**Only upgraded environments on the new supported architecture.** Microsoft is still upgrading environments to support it. [SRC: FLOW-042] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-express-mode

**133. Why might a flow you built not appear on the Copilot Studio Flows page?**

**It was created in Power Automate.** The Flows page displays only agent flows created in Copilot Studio. [SRC: FLOW-019] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-faqs

**134. Can agent flows call desktop flows?**

**No, not at this time.** [SRC: FLOW-021] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-faqs

**135. What blocks publishing a flow?**

**Any errors in the flow.** All errors must be corrected before publishing. [SRC: FLOW-013] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-designer

**136. What does Request human assistance when unsure do?**

**Makes the agent escalate to a human when it cannot proceed on its own**, sending a request for input rather than guessing. [SRC: FLOW-007] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-node-workflow

**137. What are the four stated limits on evaluations in workflows?**

**Available only for new agents created in workflows**, **no custom model may be selected**, **up to five AI-generated test methods per agent node**, and **up to 20 evaluations per agent node per day**. [SRC: FLOW-024, FLOW-025, FLOW-026, FLOW-027] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/agent-node-workflow

**138. Which agents can the Microsoft 365 Copilot node target?**

**Microsoft 365 Copilot itself, or a specific Microsoft 365 agent** - Microsoft-built ones such as **Researcher** and **Analyst**, or agents your team builds in **Agent Builder**. [SRC: FLOW-031, FLOW-032, FLOW-033] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/microsoft-365-copilot-node-workflow

**139. Which environments cannot use the savings feature?**

**Environments with Dataverse for Teams.** [SRC: FLOW-001] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-savings

**140. What must be true before a money-saving rule can be used?**

**A time-saving rule must be enabled.** The money-saving mode converts time savings into money at an hourly rate and is only available then.  -- Microsoft's worked example: a 1 hour 15 minute baseline at $1/hour gives $1.25, rounded to $1. [SRC: FLOW-002, FLOW-003, FLOW-004] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-savings

**141. What can a trial license do, and not do?**

**Create agents and test them in the test chat panel. It cannot publish an agent.** [SRC: FLOW-012] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/create-automation-natural-language

**142. What language limitation applies to Copilot authoring assistance?**

**It is optimized for English and has limited support for other languages**, and parts of it might appear in English regardless. [SRC: FLOW-017] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-nl

**143. What is always true about how tools run?**

**Tools always run in the agent's runtime in the user context, and cannot run unless authentication is enabled.**  -- This is why No authentication removes tool capability rather than merely reducing security. [SRC: TOOL-051] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

**144. What four fields are required when configuring a tool or agent?**

**Name, Description, Model and Instructions.** Other fields on the configuration page are optional. [SRC: TOOL-056] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

**145. What are tool inputs for?**

**Gathering information from the user to fill the tool's required inputs.** [SRC: TOOL-048] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

**146. Which two connector input parameters reduce a response?**

**Filter**, which accepts a filter query to limit results, and **Limit**, which restricts the number of records returned. [SRC: TOOL-031, TOOL-032] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/actions/connector-request-failure

**147. Who may execute computer use, and what must match?**

**Only a Microsoft Entra user account**, and **the signed-in Entra user must be the same account that owns the computer use connection**. [SRC: TOOL-043] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-cloud-pc-pool

**148. What does the End user credentials option require?**

**Each user must have their own access credentials to the machine**, since the agent uses the credentials of the person interacting with it. [SRC: TOOL-057] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

**149. What causes MSEntraRemoteDesktopAppConsentRequired?**

**Consent has not been granted**, and the computer use run fails. [SRC: TOOL-041] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-cloud-pc-pool

**150. Why can a UAC prompt break computer use?**

**The prompt blocks the desktop**, so the system cannot capture a screen image. [SRC: TOOL-028] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/actions/computer-use-screenshot-error

**151. What are the two Cloud PC pool scale limits?**

**Up to five pools per environment**, each **automatically scaling to 10 Cloud PCs**. Two pools per tenant are free for evaluation. [SRC: TOOL-046, TOOL-035] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-cloud-pc-pool

**152. Which service principals must exist for Cloud PC pools?**

**Windows 365 and Azure Virtual Desktop.** [SRC: TOOL-038] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-cloud-pc-pool

**153. What must be registered on the Azure subscription holding the vault?**

**The PowerPlatform resource provider.** [SRC: TOOL-058] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

**154. What does a missing Computer use toggle mean?**

**The feature may not yet be visible in your tenant.** [SRC: TOOL-001] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/administer-computer-use

**155. Where can standalone computer use tools be added?**

**Agent flows only. They cannot be added to workflows yet.** [SRC: TOOL-010] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use-standalone

**156. What token responsibility sits with you, not Microsoft?**

**Your custom API or MCP server must validate tokens obtained for the application (client) ID and custom scope.** Microsoft puts the validation logic outside its scope. [SRC: TOOL-002] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-custom-connector-on-behalf-of

**157. Has the managed-environment requirement for pipeline targets ever been optional?**

**No.** *"All target environments used in Power Platform deployment pipelines have **always** been required to be managed environments for compliant usage."* The stated reasons are **governance, security and streamlined license management**. [SRC: SEC-008] | https://learn.microsoft.com/en-us/power-platform/alm/admin-deployment-hub

**158. What changes about pipeline access when you use a CUSTOM host?**

**It overrides the platform host behavior**, and **nonadmins can't use pipelines unless you grant access in the custom host environment.**  -- Moving to a custom host silently removes non-admin access until you re-grant it. [SRC: SEC-011] | https://learn.microsoft.com/en-us/power-platform/alm/admin-deployment-hub

**159. What is the default deployment pipeline rule for environment groups for?**

**Standardized ALM at scale.** It ensures **consistent pipeline settings and configuration across an entire group**, which simplifies governance and compliance. [SRC: ALM-038] | https://learn.microsoft.com/en-us/power-platform/alm/default-deployment-pipeline-rule-for-environment-groups

**160. What privilege is needed to use analytics drill-down lists?**

**Bot transcript viewer privileges.** Without it the feature is not available at all. [SRC: ANLY-026] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-drill-down-lists

**161. What access does agent telemetry to Application Insights require?**

**Tenant-level Power Platform administrator OR Dynamics 365 administrator privileges, PLUS an administrator role in the Dataverse environment.** Both halves are required.  -- A tenant role alone is not enough - Dataverse has to be covered too. [SRC: ANLY-107] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/telemetry-overview

**162. What single admin setting can stop the evaluation tool working entirely?**

**Turning off the Microsoft Copilot Studio connector.** Evaluations that use **user authentication** require access through it - *"if your admin turns off this connection, you can't run tests by using the evaluation tool."*  -- An evaluation failure that is not about the agent at all. [SRC: ANLY-078] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-results

**163. Which transcripts can you NOT download from the Copilot Studio app in Teams?**

**Conversation transcripts in Dataverse.** For those you need the **Copilot Studio web app**. **Session chat transcripts CAN be downloaded from the Teams app.**  -- Two kinds of transcript, two different surfaces. The Dataverse one needs the web app. [SRC: ANLY-093] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

**164. Which flow runs are missing from the Runs count and the error rate?**

**Runs associated with co-owned or shared flows.** They are **unsupported** and are excluded from the **total Runs count, Run error rate, and Flow runs trend** visualizations.  -- Shared ownership makes the numbers silently incomplete, not wrong-looking. [SRC: ANLY-103] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-manage-monitor

**165. How long before a run appears in an agent flow's savings figure?**

**Up to one hour.**  -- A missing savings figure minutes after a run is expected, not a fault. [SRC: FLOW-005] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-flow-savings

**166. What must be allowed for enhanced reporting to work?**

**Conversation transcripts and their associated metadata being saved in Dataverse.** Enhanced reporting depends on it. [SRC: SEC-018] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-transcript-controls

**167. Why does the agent runtime view flag a public autonomous agent?**

**Because it might expose sensitive data to attackers or unauthorized individuals.** The component reports whether the agent **requires end-user authentication or is public**, and a public autonomous agent is *"a possible threat vector that might require the maker's attention."*  -- Autonomous plus public is the combination that gets flagged. [SRC: SEC-030] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-agent-runtime-view

**168. What is the one-shot step when configuring on-behalf-of auth for a custom connector?**

**The Azure client secret.** *"Azure only shows you the client secret once, and you can't retrieve it later. If you lose it, you need to create a new client secret."*  -- Copy it at creation or create a new one. There is no third option. [SRC: TOOL-003] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-custom-connector-on-behalf-of

**169. Who is eligible for a rate-limit increase, and is it guaranteed?**

**Only pay-as-you-go environments.** Environments operating **solely on message-based functionality aren't eligible.** And it is **not guaranteed** - each request is reviewed against eligibility and current licensing.  -- Message-based licensing has no escape hatch from throttling. [SRC: TRBL-050] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/licensing/throttling-errors-agents

**170. How many SharePoint lists can you select, and what row count degrades results?**

**Up to 10 lists at a time**, and **up to 10 per agent for best results**. **Lists with more than 35,000 rows affect quality and latency.**  -- Ten lists, thirty-five thousand rows. Both numbers are testable. [SRC: KNOW-088] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint

**171. How many Dataverse knowledge sources are allowed, and how many tables each?**

**Generative mode: unlimited.** **Classic mode: two Dataverse knowledge sources, and up to 15 tables per knowledge source.**  -- The limit exists only in classic. Orchestration mode changes the ceiling. [SRC: KNOW-112] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio

**172. What is a file group, and how many files does it hold?**

**Up to 500 files grouped into a single knowledge source**, so the agent can **narrow its search scope** when asked about related data. [SRC: KNOW-125] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-file-groups

**173. What happens when you delete files from a file group?**

**It also deletes the name, description, instructions and indexed data from the agent.** **This action is permanent and can't be undone** - restoring means re-uploading. **Every change to a file group must be saved with the Save button.**  -- Permanent, and it takes the metadata with it. Not just the files. [SRC: KNOW-131] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-file-groups

**174. What does using Application Insights require of the tenant?**

**An active Azure subscription**, and **the roles needed to create Azure resources.** [SRC: KNOW-028] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/generative-answers/agent-response-filtered-by-responsible-ai

**175. What can you not do with a system topic?**

**Delete it.** System topics are **built into Copilot Studio and added automatically** when an agent is created. They handle common events like escalation and ending a conversation.  -- You can edit and disable them. You cannot remove them. [SRC: TOPC-025] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-topics

**176. Which variable types can NOT be passed between topics?**

**Date and time, Duration, Multiple choice options, and any variable based on a CUSTOM entity.**  -- Four exclusions. If a redirect silently loses a value, suspect the type before the logic. [SRC: TOPC-113] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables

**177. How do you set a Table or Record variable, where a literal will not do?**

**Use a Power Fx formula.** Power Fx is for the complex types where literal values can't be used. [SRC: TOPC-108] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables

**178. Which trigger must be in use for the fallback count variable to work?**

**On Unknown Intent.** The variable counts how many times a topic couldn't be matched to the user input, and **is supported only under that trigger.** [SRC: TOPC-038] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

**179. What OpenAPI version does a REST API tool require?**

**JSON in v2 format.** **A v3 specification is automatically translated to v2** during creation.  -- v3 is accepted, but it is converted - it is not natively supported. [SRC: MISC-038] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-rest-api

**180. With API key auth on a REST API tool, who supplies the key?**

**The user, at runtime.** *"The agent prompts the user to authenticate. The user provides an API key and the agent connects to the API using that key."*  -- The maker configures the parameter. The user supplies the secret. [SRC: MISC-040] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-rest-api

**181. What can and cannot be edited on a REST API tool's inputs and outputs?**

**You can't change the values** - they are pulled directly from the uploaded specification. **You CAN update the descriptions** of the inputs and outputs.  -- Descriptions are the one editable surface - and descriptions are what routing runs on. [SRC: MISC-044] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-rest-api

**182. How many suggested prompts, where do they appear, and where can you not see them?**

**Up to 10.** They are **for Teams and Microsoft 365 Copilot**, appear on the agent's **welcome page before a new chat**, and **can't be seen or used when testing in Copilot Studio.**  -- Absent from the test pane by design, not by fault. [SRC: MISC-049, MISC-050] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started

**183. What can a trial licence not do?**

**Publish.** A trial gives access to create agents and test them in the test chat panel, **but the agent can't be published.** [SRC: MISC-052] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started

**184. What three citation limits does Teams impose?**

**At most 20 citations per response** - any beyond that are **dropped**. **Title limited to about 80 characters**, **snippet to about 480 characters** - longer ones are shortened.  -- Teams is stricter than every other channel. 20 / 80 / 480. [SRC: CHAN-050] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

**185. You customize the generative answer response. What happens to citations?**

**They are no longer added automatically.** If you clear a Message node and render the answer yourself through a variable or an Adaptive Card, **you must render citations yourself.** In Teams, citation links come back automatically **only for answers that aren't customized**.  -- Customize the rendering, own the citations. [SRC: KNOW-158] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

**186. An agent intermittently says it found nothing, though the knowledge is definitely there. Why?**

**No citation means no answer.** If the model produces a correct answer but **omits the citation**, the agent **withholds it and responds as though it found nothing**. Models don't always cite, which is why it is **intermittent** - the same question may work on a retry. **Instructions forcing a rigid output format, such as "respond only in JSON", can suppress the citation markers.**  -- The most unguessable symptom on this exam. A formatting instruction silently kills answers. [SRC: KNOW-159] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

**187. Three ways to make citations more consistent?**

**1.** Add citation instructions - *"always include an in-text citation to the source document for every statement."* **2.** Avoid instructions that interfere - rigid formats or telling the model to omit sources. **3.** For a custom data source, include the **`ContentLocation` (URL)** and **`Title`** fields so the model can cite. [SRC: KNOW-160] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

**188. What does 'Allow ungrounded responses' actually change?**

**The agent can answer even when it can't cite a source**, using the model's general knowledge - **so its answers are no longer always grounded in your knowledge sources.**  -- It fixes the silence by removing the guarantee. Know the trade before recommending it. [SRC: KNOW-160] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

**189. How many public websites can you add, by mode?**

**Generative mode: 25 websites. Classic mode: four public URLs.** It searches the query on **Bing** and returns results **only from the provided websites**. **Authentication: none.** [SRC: KNOW-161] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

**190. How many SharePoint URLs, by mode - and whose permissions apply?**

**Generative mode: 25 URLs. Classic mode: four URLs per generative answers topic node.** Uses **GraphSearch**. Authentication is **the agent user's Entra ID**, so it **only surfaces content that specific user can access.**  -- 25 and 4 again - the same pair as public websites. [SRC: KNOW-162] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

**191. Public website vs Bing Custom Search - what is the difference that decides a question?**

**Direct pages.** Plain public website knowledge supports **maximum two subpages depth and NO direct pages**. **Bing Custom Search supports direct pages**, plus **up to 400 URLs**, **one configuration ID** (settable by formula), and custom ranking. **Both cap at two subpages depth.**  -- Need a specific page indexed? Only Bing Custom Search will do it. [SRC: KNOW-163] | https://learn.microsoft.com/microsoft-copilot-studio/guidance/retrieval-augmented-generation

**192. What is the 15 MB SharePoint limit, and what raises it?**

**Matching files up to 15 MB are retrieved to get detailed snippets to summarize.** The premium **Enhanced Search Results** feature uses **Tenant Microsoft Graph grounding**, improving quality and raising the **maximum file size to 200 MB**.  -- Do NOT confuse with the 7 MB / 200 MB licence rule. That one is about a Microsoft 365 Copilot licence; this 15 MB is snippet retrieval. [SRC: KNOW-164] | https://learn.microsoft.com/microsoft-copilot-studio/guidance/retrieval-augmented-generation

**193. How many Azure AI Search vector indexes can one connection use?**

**Exactly one.** *"Only one vector index can be added."* Then **Add to agent** completes the connection. [SRC: KNOW-165] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search

**194. What are the four Azure AI Search authentication types?**

**Access Key**, **Client Certificate Auth**, **Service principal (Microsoft Entra ID application)**, and **Microsoft Entra ID Integrated.** Microsoft's own recovery guidance names **Entra ID authentication, not API keys.** [SRC: KNOW-166] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search

**195. Why must you never type an endpoint and API key straight into the form?**

**It can store a faulty data connection that stops the Azure AI Search dialog loading - and there is NO interface to delete a broken one.** Data connections are **environment-level**, so **it can affect every agent in the environment.** Recovery: **reset the agent's external access, or delete and recreate the agent.**  -- A maker-level mistake with an environment-level blast radius and no undo button. [SRC: KNOW-167] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search

**196. Which index field becomes the citation URL?**

**`metadata_storage_path`** when present. **If it doesn't exist, Copilot Studio uses whatever field contains a complete URL link.** And **users still need permission to open it** - a citation to a restricted source renders but can't be followed.  -- metadata_storage_path first, any complete-URL field as fallback. [SRC: KNOW-168] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search#return-citations

**197. What is the first design decision on a new ALM project, and the minimum setup?**

**Consolidate everything into a single unmanaged solution, or adopt a modular design with multiple solutions** - and decide **whether each gets its own isolated Dataverse development environment.** **Minimum: create a new blank solution and a CUSTOM PUBLISHER for it.**  -- The custom publisher is the step people skip, and it is baked into every component's prefix afterwards. [SRC: ALM-110] | https://learn.microsoft.com/en-us/power-platform/alm/new-project-alm

**198. A solution uninstall fails saying a form can't be deleted. Why?**

**It is the only fallback form of that type for the table.** *"Each table must have at least one fallback form for each form type."* The upgrade or uninstall is trying to remove **the last remaining main form.** [SRC: ALM-101] | https://learn.microsoft.com/en-us/power-platform/alm/form-alm-faq

**199. A solution can't be deleted due to dependencies. What is actually blocking it?**

**Components in the solution are referenced by OTHER solutions sitting on top of it in the layer stack.** You cannot remove a layer that something above it depends on.  -- Layering is a stack. You uninstall from the top down. [SRC: ALM-103] | https://learn.microsoft.com/en-us/power-platform/alm/form-alm-faq

**200. What must be enabled for a pipeline to use Copilot AI deployment notes?**

**AI deployment notes must be explicitly enabled for the pipeline** before it can use the Copilot AI models. [SRC: ALM-097] | https://learn.microsoft.com/en-us/power-platform/alm/faqs-ai-deployment-notes-pipelines

**201. Why are Teams users not prompted to sign in?**

**Teams authentication identifies the user already.** The configuration **sets up Microsoft Entra ID authentication for Teams automatically, with no manual configuration** - so users aren't prompted **unless the agent requires an expanded scope.**  -- The exception is the testable half: an expanded scope brings the prompt back. [SRC: SEC-050] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**202. An agent breaches org policy. What are the two routes from the runtime view?**

**Change the agent** to comply - *Review errors* under **Policies** shows what failed. **Or change the policy**, via **Open admin center** to the Power Platform admin center, **if you have access.**  -- Fix the agent or fix the policy. The tool offers both, and only one needs admin rights. [SRC: SEC-031] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-agent-runtime-view

**203. Where do GitHub Copilot harness turn failures surface, and what do you get?**

**The Preview, Test and Evaluate tabs**, showing an error message **plus a short error code**. The code identifies the cause so you can decide whether to **retry, change your input, or contact your administrator.** [SRC: TRBL-001] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/troubleshooting-error-codes

**204. SolutionA 1.0 sets a column to 30 chars. SolutionB sets it to 50. SolutionA patch 1.0.1.0 sets 35. Then SolutionB is uninstalled. What is the column now?**

**35 characters** - the value from the SolutionA patch. **The sequence:** base 1.0 gives **30**. SolutionB imports and gives **50**. **The patch does NOT change it - it stays 50, because SolutionB is still the top layer.** Uninstall SolutionB and the value falls through to **35**, from the patch.  -- The TOP layer wins while it exists. Remove it and the layer beneath is revealed - not the original. [SRC: ALM-020, ALM-021, ALM-022, ALM-023] | https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates

**205. Why did importing a patch appear to do nothing?**

**Because a higher layer already set that value.** The patch was applied, but a solution above it in the stack is still winning. **The change only becomes visible when the higher layer is removed.**  -- 'The import did nothing' usually means 'something above it is winning'. [SRC: ALM-022, ALM-023] | https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates

**206. Which environments in a pipeline are exempt from the managed environment requirement?**

**Developer environments** - *"they can be used for development and testing with the developer plan."* **All other environments used in pipelines must be enabled as managed environments.**  -- Developer is the only exemption. Everything else in the pipeline is managed. [SRC: ALM-128, ALM-130] | https://learn.microsoft.com/en-us/power-platform/alm/pipelines

**207. Can you deploy straight to production, and what gets deployed?**

**No. Deployment stages must be completed in order** - you can't deploy to production before it has been deployed to test. **The trap:** after deploying to test, **the SAME solution that was deployed to test is the one that goes to production - even if you changed the solution afterwards without incrementing the version.**  -- You promote an artifact, not the current state of your dev environment. [SRC: ALM-154] | https://learn.microsoft.com/en-us/power-platform/alm/run-pipeline

**208. Can a citation returned by a knowledge source feed another tool?**

**No.** *"Currently, citations returned from a knowledge source can't be used as inputs to other tools or actions."*  -- Citations are for the human reading the answer, not for the next step in the flow. [SRC: KNOW-116] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio

**209. Publishing fails on a generative answers node. What should you check?**

**That the node respects the maximum number of knowledge sources allowed.** Exceeding it **blocks publishing**, not just retrieval.  -- A knowledge limit that fails at publish time rather than at runtime. [SRC: KNOW-036] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/agent-publish-fails-bing-sources

**210. Why would an MCP tool never appear in the available tools list?**

**Its schema uses reference type inputs.** *"Tools with reference type inputs in the schema are filtered from the list of available tools for MCP server. Reference type inputs and outputs aren't supported."*  -- Filtered out silently. The tool is not broken and not hidden by permissions - it is unsupported. [SRC: MCP-085] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-troubleshooting

**211. What form must the endpoint from an Open SSE connection call take?**

**A full URI.** A relative or partial endpoint fails. [SRC: MCP-083] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-troubleshooting

**212. What two things can a single code interpreter prompt NOT do?**

**Analyze multiple uploaded files in one prompt**, and **return multiple file outputs in one prompt.** Both are unsupported.  -- One file in, one file out, per prompt. [SRC: PRMT-004, PRMT-005] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/code-interpreter-for-prompts

**213. Which solution type can you export, and how do you get the other?**

**You can't export a managed solution.** You **export an UNMANAGED solution AS managed**. Unmanaged solutions are **developed**; managed solutions are **deployed** to any environment that isn't a development environment. **Best practice: treat the managed solution as a build artifact.**  -- Managed is an output, never a source. [SRC: ALM-233] | https://learn.microsoft.com/power-platform/alm/solution-concepts-alm

**214. How do you convert a managed solution back to unmanaged?**

**There is no conversion.** *"The tool can't convert one type to another."* The only route is **import the unmanaged .zip into Dataverse, then export it as managed** - which is producing the other type, not converting it.  -- Managed and unmanaged are two exports of one source, not two states of one file. [SRC: ALM-234] | https://learn.microsoft.com/power-platform/alm/solution-packager-tool

**215. Why can't you test a managed solution in the environment you built it in?**

**You can't import a managed solution into the same environment that contains the originating unmanaged solution.** *"To test a managed solution, you need a separate environment to import it into."*  -- This is the real reason dev/test/prod is three environments and not two. [SRC: ALM-235] | https://learn.microsoft.com/power-platform/alm/solution-concepts-alm

**216. How do you edit a component inside a managed solution, and what does it cost you?**

**You can't edit it directly - first add it to an UNMANAGED solution.** Doing so **creates a dependency between your unmanaged customizations and the managed solution**, and **the managed solution can't be uninstalled until you remove that dependency.** Some managed components **can't be edited at all** - check **Managed properties**.  -- Editing a managed component quietly welds it in place. [SRC: ALM-236] | https://learn.microsoft.com/power-platform/alm/solution-concepts-alm

**217. What happens when you DELETE a managed solution?**

**All customizations and extensions in it are removed - and DATA IS LOST.** Specifically: **data in custom tables that are part of the solution**, and **data in custom columns that are part of the solution but sit on tables that are NOT.**  -- Uninstalling managed is a data-loss event, not a config change. The second half is the one people miss. [SRC: ALM-237] | https://learn.microsoft.com/power-platform/alm/solution-concepts-alm

**218. What happens when you DELETE an UNMANAGED solution?**

**Only the container is deleted.** *"All the unmanaged customizations remain in effect and belong to the default solution."* **Nothing is lost.**  -- Delete unmanaged: lose the box, keep the contents. Delete managed: lose the contents. Opposite outcomes, same verb. [SRC: ALM-238] | https://learn.microsoft.com/power-platform/alm/solution-concepts-alm

**219. What three things does the solution export dialog ask you?**

**Version number** - auto-incremented, and you may override it. **Export as** - **Managed or Unmanaged**. **Run solution checker on export** - detects performance and stability issues. **Only PUBLISHED components are exported**, so publish all changes first.  -- 'Only published components are exported' explains most of the 'my change didn't deploy' reports. [SRC: ALM-239] | https://learn.microsoft.com/power-apps/maker/data-platform/export-solutions

**220. Which solution type goes into source control, and why?**

**The exported UNMANAGED version.** *"Unmanaged solutions should be considered your source for Microsoft Power Platform assets."* Managed solutions **can be serviced independently** from other managed solutions in an environment. [SRC: ALM-240] | https://learn.microsoft.com/power-platform/alm/solution-concepts-alm

**221. What two roles can generative answers play in an agent?**

**A primary information source**, or a **fallback when authored topics cannot address the query**. [SRC: KNOW-015] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-generative-answers

**222. What is required when you add a knowledge source, and why does it matter?**

**A name and a description.** The name should be **unique** for each source, and the description is what the agent uses to decide when the source applies.  -- Same pattern as tools: the description is a functional setting, not documentation. [SRC: KNOW-020] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-existing-copilot

**223. How do you let an agent answer beyond its configured knowledge sources?**

**Makers can limit which sources an agent uses, and can also enable answering outside the scope of configured sources.** Both directions are a maker setting. [SRC: KNOW-019] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-generative-answers

**224. What happens after the agent twice asks a user to rephrase?**

**It initiates the Escalate system topic.**  -- If Escalate is unconfigured, that is where the conversation dies. [SRC: KNOW-026] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-test

**225. What is the public website source limit in generative mode, and what changes it?**

**25 at agent level.** If a topic uses a **generative answers node** with node-level sources, the public-source limit becomes **4**.  -- The failure appears at publish time, not when you configure it. [SRC: KNOW-034, KNOW-037] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/agent-publish-fails-bing-sources

**226. Which SharePoint page types can an agent use?**

**Only modern pages**, and **modern pages containing SharePoint Framework (SPFx) components are not supported**. [SRC: KNOW-043] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

**227. What is the minimum permission a user needs for SharePoint results to appear?**

**Read permissions on the relevant sites and files.** Copilot Studio respects Microsoft 365 security trimming - without read access, **no search results are returned at all**.  -- No error. It behaves as though the document does not exist. [SRC: KNOW-046] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

**228. What is Microsoft's documented diagnostic when SharePoint returns nothing?**

**Run the same query as the same user in Microsoft 365 Copilot Chat.** If Copilot Chat also cannot retrieve a response, it confirms a permission or search-indexing barrier rather than an agent fault. [SRC: KNOW-048] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

**229. How does the agent handle sensitivity-labeled SharePoint content?**

**The agent-level SharePoint knowledge source respects sensitivity labels for permission trimming** and only surfaces label-permitted content for the signed-in user. [SRC: KNOW-049] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

**230. What are the documented workarounds for encrypted SharePoint content?**

**Publish an unprotected copy** of the required content to a location the agent can reach, or **point the knowledge source somewhere that has no encrypted content**. [SRC: KNOW-050] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

**231. Are hyperlinks inside a registered document followed?**

**No. The agent grounds only on the content of the files and pages you register.** Hyperlinks inside a registered document or page are not crawled or followed.  -- If a linked document matters, register it separately. [SRC: KNOW-093] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint

**232. What does SharePoint not support for manual authentication?**

**Generic OAuth.** SharePoint does not support manual authentication using Generic OAuth. [SRC: KNOW-091] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint

**233. How is SharePoint authentication preconfigured for Teams?**

**Copilot Studio preconfigures agents to authenticate users with Microsoft authentication** to reach SharePoint sources when connecting through Microsoft Teams. [SRC: KNOW-089] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint

**234. What does an agent return when a filtered SharePoint source finds nothing and fallback settings are off?**

**"No response."** [SRC: KNOW-094] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint

**235. What environment setting must be on before Dataverse tables can be used as knowledge?**

**Dataverse search.** If a Dataverse table or file cannot be added, ask the administrator to turn on Dataverse search in the environment. [SRC: KNOW-056, KNOW-066] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload

**236. How many Dataverse tables can one knowledge source hold?**

**Up to 15 tables per knowledge source.** [SRC: KNOW-059] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

**237. Which Dataverse virtual tables can be used as knowledge?**

**Only virtual tables associated with the Finance and Operations data provider.** Any other data provider is unavailable for selection. [SRC: KNOW-065] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

**238. What delay applies if you add a Dataverse knowledge source before configuring Multiline Text and File columns?**

**Up to two days** for the system to backfill the request.  -- Configure the columns first and you avoid the wait entirely. [SRC: KNOW-063] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

**239. What limits how many documents you can upload to Dataverse as knowledge?**

**The available file storage for your Dataverse environment.** [SRC: KNOW-068] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload

**240. Which file types cannot be used as uploaded documents?**

**Image, video, executable and audio files.** Files with **encryption, sensitivity labels or password protection** are also unsupported.  -- Images are supported only when **embedded in a PDF**. [SRC: KNOW-069, KNOW-070, KNOW-072] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload

**241. What happens when an uploaded knowledge file is later updated?**

**Nothing - uploaded files are static.** The updates are not reflected until you **reload the file**.  -- Upload is a snapshot, not a link. [SRC: KNOW-098] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data

**242. What URL depth is allowed for a public website knowledge source?**

**Up to two levels of depth**, with subpaths separated by a forward slash. A trailing forward slash is allowed. [SRC: KNOW-077] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website

**243. Which URLs cannot be used as public website knowledge?**

**URLs requiring authentication, and URLs not indexed by Bing.** Wikis and SharePoint sites are given as examples, because they require authentication. [SRC: KNOW-079, KNOW-080] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website

**244. When a variable supplies the website URL, what still applies?**

**URL depth limits still apply**, and the variable **must resolve to a valid public URL** meeting the public website requirements. [SRC: KNOW-084, KNOW-085] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website

**245. Why do long questions sometimes return nothing from a website?**

The public-website search query is **the user's full question, rephrased to include conversation context**, and several factors can push it past the request limit. Microsoft's guidance is to **keep questions concise and conversations focused**. [SRC: KNOW-075, KNOW-076] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website

**246. What two prerequisites apply to Azure SQL tables as a knowledge source?**

**Permission to access the underlying database and tables**, and **network access configured so Power Platform can reach the server** - firewall rules allowing Azure services, or private connectivity. [SRC: KNOW-006, KNOW-007] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/knowledge-add-azure-sql-tables

**247. What two ServiceNow conditions block a connection?**

**The instance being in hibernation mode**, and **Deny Public Network Access being turned on** when public access is required. [SRC: KNOW-038, KNOW-039] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/enterprise-data

**248. What happens to generative AI features when cross-region data movement is disabled?**

**They are not available for the agent.** If the setting cannot be turned on, the documented remedy is to **turn off generative AI features** - generative orchestration, web search, AI general knowledge and related capabilities.  -- The workaround is to disable features, not to fix the setting. [SRC: KNOW-030, KNOW-031] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/generative-answers/generative-ai-not-available

**249. What happens to sensitivity-labeled or password-protected documents?**

**They cannot be indexed.** If added they **show as ready for use but never provide responses** - a silent dead end.  -- Ready-for-use is not the same as usable. [SRC: KNOW-099] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data

**250. What is the minimum file size threshold for indexing?**

**Approximately 4 KB or larger.** [SRC: KNOW-105] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data

**251. How many items can you pick with Browse items?**

**Up to five individual files, folders, or a combination of the two.** [SRC: KNOW-100] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data

**252. Which two content types are currently unsupported for this source?**

**Document libraries are not supported**, and **files containing MP4 videos are not supported**. [SRC: KNOW-102, KNOW-103] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data

**253. What is unsupported in file attachments?**

**Tables, images, and text in non-organization-based languages.** [SRC: KNOW-064] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

**254. Do uploaded files count against the 25-source search limit?**

**No. Files uploaded to the agent are not part of the 25 knowledge source search limit.**  -- A rare case where a limit does *not* apply - worth knowing precisely. [SRC: KNOW-120] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio

**255. Which knowledge sources does generative orchestration not support directly?**

**Custom data and Bing Custom Search.** To use them you must **embed them inside a generative answers node** in a topic. [SRC: KNOW-121] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio

**256. Why embed a generative answers node in a topic?**

**So a search runs for specific intents rather than only as a fallback.** The knowledge source limits still apply. [SRC: KNOW-119] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio

**257. What does Allow ungrounded responses control?**

**Whether the agent may generate responses using only the model's general knowledge**, rather than the configured knowledge sources. [SRC: KNOW-122] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio

**258. At what level is unstructured knowledge base content added?**

**At the collection level** - which a given source may call Pages, Knowledge Bases, or something else. [SRC: KNOW-107] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data

**259. What access is needed to modify views in Power Apps for a Dataverse knowledge source?**

**Maker or admin access.** [SRC: KNOW-062] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

**260. What can missing permissions on the underlying data cause?**

**Tables may be prevented from being added as a knowledge source.** [SRC: KNOW-058] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

**261. Which query elements are unsupported against enterprise data?**

**Requests for data modification, and text searches.** [SRC: KNOW-041] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/enterprise-data

**262. What two conditions produce a knowledge test failure?**

**An unsupported file type or size**, and **the knowledge source limit being reached**. [SRC: KNOW-023] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-test

**263. What happens to queries spanning many large lists?**

**They might be throttled or subject to high latency** - for example a question requiring analysis of all 10 lists and every one of 35,000 rows. [SRC: KNOW-012] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/knowledge-sharepoint-lists

**264. What Entra ID ownership is required to configure a service principal in pipelines?**

**Anyone enabling or modifying service principal configurations must be an owner of the enterprise application (service principal) in Microsoft Entra ID.** [SRC: MISC-016, MISC-017] | https://learn.microsoft.com/en-us/power-platform/alm/delegated-deployments-setup

**265. Which two roles does an S2S delegate need?**

**Deployment Pipeline Administrator within the pipelines host**, and **System Administrator within the target environments.** [SRC: MISC-018] | https://learn.microsoft.com/en-us/power-platform/alm/delegated-deployments-setup

**266. What can a lower-permission delegate not deploy?**

**Plug-ins and other code components.**  -- A regular user can serve as a delegate and is simpler to configure - but this is the trade-off. [SRC: MISC-020, MISC-019] | https://learn.microsoft.com/en-us/power-platform/alm/delegated-deployments-setup

**267. When is sharing applied to a deployed object?**

**Only the first time an object is deployed to the target environment.** Sharing is **not updated** when new versions are deployed. [SRC: MISC-022] | https://learn.microsoft.com/en-us/power-platform/alm/delegated-deployments-setup

**268. What privilege level do pipelines assign?**

**The minimum privileges required to run apps and flows.** [SRC: MISC-023] | https://learn.microsoft.com/en-us/power-platform/alm/delegated-deployments-setup

**269. What message does a user see when an agent hits its usage limit?**

**"This agent is currently unavailable. It has reached its usage limit."** [SRC: MISC-032] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management

**270. What happens to agent flows under capacity enforcement?**

**New agent flow runs cannot start** and trigger attempts are rejected. [SRC: MISC-034] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management

**271. Where do you cap an individual agent's credit usage?**

**Power Platform admin center, under Licensing > Copilot Studio > Manage Agents**, setting monthly consumption limits before enforcement occurs. [SRC: MISC-037] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management

**272. How does pay-as-you-go change enforcement?**

**Once the environment reaches its Copilot Credit limit the pay-as-you-go meter is invoked**, so a tenant in overage does not impact that environment. [SRC: MISC-033] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management

**273. When does an agent avoid charges for generative answer responses?**

**When the agent is created in Agent Builder in Microsoft 365 and the response does not leverage tenant graph grounding.** [SRC: MISC-027] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management

**274. When does the premium text and generative AI rate apply?**

**When the agent uses a reasoning model**, covering the extra computational resources for deep reasoning. [SRC: MISC-028] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management

**275. What can you not do from the Copilot Studio app in Teams?**

**Download conversation transcripts in Dataverse.** Reviewing and exporting them requires the Copilot Studio web app. [SRC: MISC-012] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/analytics-overview

**276. How do classic and generative modes differ on gathering missing input?**

**Generative:** the agent **automatically generates questions** for missing information. **Classic:** you **must author question nodes** yourself. [SRC: MISC-001, MISC-002] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions

**277. How long should a tool or topic description be?**

**One or two sentences** summarizing what it does and when to use it. [SRC: MISC-004] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions

**278. What is a harness in Copilot Studio, and what are the three?**

A harness is the **runtime between your design and the model**. It decides **when to call the model, what components to send it, how to interpret what comes back, and which tools to call**. The three are the **GitHub Copilot harness** (reasoning-heavy, multi-step work), the **standard harness** (rule-based agents and agent flows), and the **Copilot chat harness** (extending Microsoft 365 Copilot).  -- You design it, the model reasons, the harness is the machinery in between. [SRC: HARN-001] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

**279. What was the classic experience renamed to?**

**The standard harness.** Microsoft's own training says *'the classic, now called standard harness'*. **Topics, generative orchestration and the test panel are standard-harness procedures unless otherwise noted.**  -- Classic and standard are the same thing. An exam question may use either word. [SRC: HARN-006] | https://learn.microsoft.com/en-us/training/modules/power-virtual-agents-bots/

**280. How does billing differ across the three harnesses?**

**GitHub Copilot harness: Copilot Credits, usage-based.** **Standard harness and agent flows: the Copilot Studio licensing and capacity model.** **Copilot chat harness: consumption-based, or included in the Microsoft 365 Copilot user subscription license.**  -- Pick the harness and you have picked the bill. [SRC: HARN-002] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

**281. Which harness supports skills and memory?**

**The GitHub Copilot harness only.** Microsoft's comparison table reads **Yes** for GitHub Copilot and **Not a focus** for both the standard harness and the Copilot chat harness. [SRC: HARN-003] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

**282. Which harness cannot publish to external customers?**

**The Copilot chat harness - internal teams only.** The **GitHub Copilot** and **standard** harnesses can both publish to **internal teams or external customers**.  -- Chat harness is for your own employees, full stop. [SRC: HARN-004] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

**283. Which harness works natively with documents, and which formats?**

**The GitHub Copilot harness** creates, edits and reasons over **Word, Excel, PowerPoint and PDF**, and runs each task in a **secure sandbox governed by Copilot Studio**. Files are **not a focus** on the other two harnesses. [SRC: HARN-005] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

**284. An accounts payable process reads invoices, matches them to purchase orders, and routes exceptions. Which harness?**

**The GitHub Copilot harness.** It takes a goal, breaks it into steps, calls tools across connectors, knowledge, MCP and connected agents, handles the files natively, and **adjusts when a step fails**. [SRC: HARN-001, HARN-005] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

**285. An internal help desk answers common questions and routes simple requests predictably. Which harness?**

**The standard harness.** You define the topics, prompts and paths, so the experience responds consistently to well-understood requests.  -- Predictable and rule-based means standard. [SRC: HARN-001] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview

**286. What changed about Entra Agent ID in July 2026?**

**It became mandatory.** Copilot Studio automatically creates a Microsoft Entra Agent ID for each new agent, and **the environment-level opt-out was removed**. Previously you could opt out.  -- No opt-out. Every new agent gets an identity. [SRC: SEC-088] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

**287. What happens to agents created BEFORE the July 2026 rollout?**

**They continue using app registrations** and will be migrated to Agent IDs in the future. **Governance capabilities work for both Agent IDs and App Registration IDs during the transition.** [SRC: SEC-089] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

**288. What happens to the Agent ID when you delete the agent?**

**Copilot Studio deletes the associated Microsoft Entra Agent ID too.** The identity does not outlive the agent. [SRC: SEC-090] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

**289. How do connector permissions appear on an agent identity, and what can an admin do with them?**

When a maker publishes, Copilot Studio attaches **API permissions to the agent's Entra Agent ID for each Power Platform connector** the agent uses. Admins can then target them with **Conditional Access** - network location, device compliance, or risk-based conditions.  -- The agent's permissions become visible in Entra without opening Power Platform admin center. [SRC: SEC-091] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

**290. Can connector scopes on an agent identity be used to bypass DLP?**

**No.** The scopes are **only honored by the Power Platform connector runtime** and are **re-validated at runtime against Advanced Connector Policies (ACP) and DLP**, so they can't be used to bypass governance policies.  -- The scopes are for visibility and Conditional Access, not for escaping governance. [SRC: SEC-091] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

**291. What is the blueprint principal, and what is its ID?**

When you create your first agent identity, Copilot Studio adds a tenant blueprint named **Microsoft Copilot Studio agent identity blueprint**, ID **25664c89-cea5-4ab6-b924-a54fd8a19ae0**. **All agent identities are children of that global blueprint.** [SRC: SEC-092] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

**292. Where do you find an agent's Entra Agent ID GUID?**

**Settings > Advanced > Metadata**, under **Entra Agent ID**. Use that GUID in the Microsoft Entra admin center to confirm agent identities are populated. [SRC: SEC-093] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-use-entra-agent-identities

**293. How do you discover and audit every Copilot Studio agent in the tenant?**

**The agent inventory schema** - from the **admin center, the API, or Azure Resource Graph**. [SRC: SEC-094] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-agent-inventory

**294. Where is agent inventory on by default?**

**Government Community Cloud (GCC) and High sovereign cloud environments.** [SRC: SEC-096] | https://learn.microsoft.com/en-us/power-platform/released-versions/copilotstudio/2026.6.3

**295. What happens to an agent that has no agent user?**

**Some agents without an agent user are prevented from obtaining access tokens for restricted resources such as Microsoft Graph.** Security webhooks can carry the agent's **Microsoft Entra object ID** to identify it, though that field may be absent for some agents. [SRC: SEC-095] | https://learn.microsoft.com/en-us/power-platform/released-versions/copilotstudio/2026.6.3

**296. What do condition groups do, and which nodes accept them?**

They let you **author and manage multiple conditions in a single node**, for **Message nodes, Question nodes, or prompts**. They support **table view and graph view**. **Existing condition behavior is unchanged**, and existing voice agent flows continue to work as before.  -- Fewer branches, one place to review them. [SRC: TOPC-116] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-condition-groups

**297. Where do you add a condition group?**

**Add node > Advanced > Add a condition group.** [SRC: TOPC-116] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-condition-groups

**298. How do you convert an existing condition group to Table view?**

**A manual edit in the code editor: append `_tv` to the condition group ID**, then save and close. **Changing the view does not affect behavior.**  -- _tv for table view. It is a code-editor edit, not a toggle. [SRC: TOPC-117] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-condition-groups

**299. Two media cards are added to one message node. How do they render?**

**As a carousel by default** - one card at a time with navigation arrows. **Switch to List view** using the icon in the node's menu bar to show them all at once.  -- Carousel is the default. List is the deliberate choice when the user must compare. [SRC: TOPC-118] | https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

**300. What sources are valid for an image and for a video in a message node?**

**Images: a publicly hosted URL.** **Videos: a direct MP4 link or a YouTube URL.** Both support an **optional title** shown alongside the media. [SRC: TOPC-119] | https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

**301. An image added to a message node does not appear when the agent is tested. Most likely cause?**

**The URL is not publicly accessible.** The agent **can't reach files on internal servers or behind authentication**. Fixes: a SharePoint library with **anonymous link sharing** enabled, or **Azure Blob Storage with public read access**.  -- If the agent needs to sign in to fetch it, it cannot fetch it. [SRC: TOPC-120] | https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

**302. What four actions can a quick reply perform?**

**Send a message to the agent, open a URL, make a call, or send a hidden message.** [SRC: TOPC-121] | https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

**303. What are the three properties of a Send a message quick reply?**

**Title** - the text displayed on the button. **Text** - the message sent to the agent when selected. **Type** - the action it performs.  -- Title is what they see, Text is what the agent gets. [SRC: TOPC-121] | https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

**304. Quick replies versus a Question node - what is the difference?**

**Quick replies GUIDE. A Question node CONSTRAINS.** Quick replies are **suggestions, not requirements** - the user can ignore them and type freely. **The Question node enforces a choice** and doesn't advance until the user selects or enters a recognized option.  -- Guide versus constrain. Microsoft uses exactly those two verbs. [SRC: TOPC-123] | https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

**305. How does Copilot Studio choose which message variation to send?**

**Randomly, each time the node runs.** That is *why* every variation must carry the same core information in different words - **the maker cannot control which one a user sees**.  -- Random selection is the reason the same-facts rule exists. [SRC: TOPC-122] | https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

**306. How reliable is text formatting across channels?**

**It varies.** Bold and italic work consistently in **Microsoft Teams and the web chat surface**, but **some channels strip formatting entirely**. [SRC: TOPC-124] | https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

**307. What does the {x} icon in the message node toolbar do?**

**Variable insertion.** It inserts a **topic, global, or system variable** at the cursor, which **resolves to its runtime value** when the topic runs. [SRC: TOPC-124] | https://learn.microsoft.com/en-us/training/modules/deliver-rich-agent-responses-adaptive-cards-copilot-studio/2-configure-message-formatting

**308. What is a skill, and how does it differ from a tool?**

A skill is a **reusable capability defined by a name, a description, and Markdown instructions**. **Tools connect to external services. Skills are self-contained sets of instructions and logic** you create, share and reuse across agents. **GitHub Copilot harness only.**  -- Tools reach outward. Skills are internal know-how. [SRC: TOOL-068] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview

**309. What decides when a skill is invoked?**

**The orchestration runtime, matching the user's request against the skill's DESCRIPTION.** Well-written descriptions help the orchestrator invoke the right skill at the right time. Skills are a **GitHub Copilot harness** feature.  -- Same rule as tools - the description is what routes. [SRC: TOOL-069] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview

**310. How are skills shared, and what naming rule applies?**

**Export as a Markdown file or as a package.** Names use **only lowercase letters, numbers and hyphens**, and must **not start or end with a hyphen**. Skills are a **GitHub Copilot harness** feature. [SRC: TOOL-070] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview

**311. What changed for skill agents and reference files?**

**Breaking change: skill agents now BLOCK unsupported reference file types.** Formats that were previously accepted are now **rejected**, so only approved document and media formats are included. Skills are a **GitHub Copilot harness** feature. [SRC: TOOL-071] | https://learn.microsoft.com/en-us/power-platform/released-versions/copilotstudio/2026.6.3

**312. How is agent memory scoped?**

**Per agent, per user.** Each agent maintains a **separate memory store for every user**, so one person's context is **never shared with another**. The lifecycle is **capture, store, apply**. **GitHub Copilot harness only**, production-ready preview. [SRC: KNOW-153] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview

**313. How long do a user's memories survive without interaction?**

**28 days.** If a user doesn't interact with the agent for 28 days, **the system deletes their memories from that agent**. Memory is a **GitHub Copilot harness** feature.  -- 28 days - the same number as session detail and transcript retention. Do not confuse it with the 360-day analytics window or the 89-day evaluation retention. [SRC: KNOW-154] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview

**314. Where is user memory disabled?**

**In group chats and in Microsoft Teams channels.** Memory is a **GitHub Copilot harness** feature.  -- Memory is one-to-one. Put the agent in a group and it stops remembering. [SRC: KNOW-155] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview

**315. A maker turns Memory off. What happens to what was already stored?**

**Nothing is deleted.** Turning Memory off **only prevents the agent from using** stored memories. Memory is a **GitHub Copilot harness** feature.  -- Off is not erase. [SRC: KNOW-156] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview

**316. Can a maker read a user's agent memories?**

**No.** A user's memories are **private to that user** - the maker and other users can't see them. Each user's memory lives in a **dedicated folder in Microsoft-managed storage**. Memory is a **GitHub Copilot harness** feature. [SRC: KNOW-157] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview

**317. What agent operations are available through the Power Platform API?**

**Create, update, list, get and delete agents**, plus **retrieve agent components**. [SRC: ALM-232] | https://learn.microsoft.com/en-us/power-platform/released-versions/copilotstudio/2026.6.3

**318. What two authentication options does an MCP server configuration offer?**

**API key**, where the agent user provides the key, and **OAuth**. Credentials may be an API key or a client ID and secret for a supported scheme. [SRC: MCP-007, MCP-008, MCP-001] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/tools-add-mcp-server

**319. Who is eligible to submit an MCP server for certification?**

**A verified publisher that owns or controls the MCP server endpoint** being submitted.  -- An independent publisher who does not own the underlying service must partner with the service owner. [SRC: MCP-021, MCP-022] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-certification

**320. What does the certification manifest file contain?**

**A JSON file holding the MCP server definition, tool definitions, authentication configuration, metadata, public documentation and supporting artifacts**, following the required structure. [SRC: MCP-029] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-certification

**321. What does Microsoft validate before certification review continues?**

**Package structure, required fields, schema correctness, metadata completeness and baseline policy readiness.** Blocking issues must be fixed first. [SRC: MCP-026] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-certification

**322. What must authorization.referenceId be set to?**

**The Azure Key Vault URI.** [SRC: MCP-033] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-certification

**323. Which identity-provider fields are required, and for which provider?**

**AuthorizationUrl** is required for an **OAuth2** IdentityProvider. **AzureActiveDirectoryResourceId** is required for an **AAD** IdentityProvider. [SRC: MCP-031, MCP-032] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-certification

**324. What are the participant rules for creating a Teams chat?**

**oneOnOne requires exactly two participants; group requires more than two.** A wrong member count returns **400**, and duplicate participants return **409**. [SRC: MCP-070] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-teams-tools

**325. What is irreversible about deleting a SharePoint list through MCP?**

**It deletes the entire list container and every item within it, and cannot be undone.** [SRC: MCP-064] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-sharepoint-tools

**326. What is the OneDrive MCP server for, and what limit applies?**

**Managing files and folders in the user's personal OneDrive.** All file operations are limited to **5 MB or less**. [SRC: MCP-041, MCP-043] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-onedrive-tools

**327. What must be set to send HTML mail through the MCP mail tools?**

**contentType = "HTML" in the body.** [SRC: MCP-039] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-mail-tools

**328. What ordering rule applies to calendar attendee data?**

**The attendee arrays - addresses, types and names - must be in the same order.**  -- A mismatch silently pairs the wrong name to the wrong address. [SRC: MCP-019] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-calendar-tools

**329. What does a recurrence require?**

**Both a pattern and a range object.** [SRC: MCP-020] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-calendar-tools

**330. What scope does the Fabric IQ ontology MCP server require?**

**McpServers.FabricIQOntology.All** [SRC: MCP-038] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-fabric-iq-ontology

**331. What governance purpose does the Dataverse MCP delete operation serve?**

**Efficient data lifecycle management and compliance with retention policies** - cleaning up obsolete records and tables while maintaining data governance. [SRC: MCP-036, MCP-037] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-dataverse

**332. What is the documented way to confirm an MCP server is wired up?**

**Ask the agent a question that requires one of the server's tools.** [SRC: MCP-004] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/tools-add-mcp-server

**333. How many suggested prompts can you configure, and where do they appear?**

**Up to 10**, shown on the agent's welcome page in **Microsoft Teams and Microsoft 365 Copilot Chat**, before a new chat begins.  -- **You cannot see or use them when testing in Copilot Studio** - testing locally proves nothing about them. [SRC: PRMT-010, PRMT-011] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-starter-prompts

**334. What multi-turn limitation applies to code interpreter?**

**Asking questions about an uploaded file over multiple turns is not supported.** [SRC: PRMT-006] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/code-interpreter-for-prompts

**335. What permission check does code interpreter require?**

**Both the user account and the agent must have the necessary permissions** to execute code interpreter prompts. [SRC: PRMT-008] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/code-interpreter-for-prompts

**336. What formatting can you not control from a prompt instruction?**

**Text formatting.** You cannot set a field bold, add a title, or change color from the instruction. [SRC: PRMT-022] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/generate-document-output-prompt

**337. What does the Passing score define in batch testing?**

**The minimum score required for a response to pass.** [SRC: PRMT-002] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/batch-testing-prompts

**338. What are prompt assistant's three stated limits?**

**It cannot generate grounded prompts**, **cannot improve an existing prompt** (new drafts only), and **defaults to English** if the description language is unsupported. [SRC: PRMT-059, PRMT-060, PRMT-062] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-assistant

**339. What can a person do with a prompt shared to them?**

**Run and use it in apps, flows and agents.** They **cannot edit, share, delete or change the owner**. [SRC: PRMT-068] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/share-your-prompt

**340. Which data sources can a prompt use for your own data?**

**Dataverse, plus the Salesforce, Oracle and ZenDesk connector tables.** [SRC: PRMT-071] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-your-own-prompt-data

**341. What relationship rules apply to Dataverse as prompt data?**

**Only one-to-many or many-to-one relationships**, and **up to two levels of relationships** from the table added as a data source. [SRC: PRMT-072] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-your-own-prompt-data

**342. How many records does a prompt retrieve by default, and what is the ceiling?**

**30 by default**, raisable to **1,000** in the settings. [SRC: PRMT-073] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-your-own-prompt-data

**343. What is required to use an imported prompt?**

**Nothing - it can be used immediately after import** in Power Apps or Power Automate, though a quick test is advised. [SRC: PRMT-012] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/distribute-prompt

**344. Who is responsible for the output of a prompt?**

**The user.** They are required to review generated content for inaccuracies or incompleteness before using it. [SRC: PRMT-013] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faq-prompts

**345. Which knowledge types does a generative answers node not support?**

**Bing Custom Search, Azure OpenAI and Custom Data.** For those, use the classic option from the node properties instead. [SRC: PRMT-041] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node

**346. Which Bing search option needs external configuration?**

**Bing Custom Search requires external configuration. Bing Web Search does not.** [SRC: PRMT-036, PRMT-037] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node

**347. Can a citation be passed to another tool?**

**No. Citations returned from a knowledge source cannot be used as inputs to other tools or actions.** [SRC: PRMT-043] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node

**348. What happens to a source's trigger conditions inside a generative answers node?**

**They are ignored.** The node always searches the sources you select, and displays a note saying trigger conditions will be ignored. [SRC: PRMT-045] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node

**349. What is generative answers acting as fallback called?**

When the agent cannot find a matching intent defined in a topic, it uses generative answers to try to answer - **generative answers as a fallback**. [SRC: PRMT-035] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node

**350. What does Copilot understand when generating nodes, and what does it not?**

**It understands the required properties on Message, Question and Condition nodes** - prompt text and output variables. It does **not** understand everything beyond those. [SRC: PRMT-034] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-authoring

**351. What limits the number of files you can upload as knowledge?**

**The available file storage for your Dataverse environment.** Files are stored securely in Dataverse. [SRC: PRMT-050] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-documents

**352. What is the Agent2Agent protocol, and what three things does it let an orchestrator do?**

**An open standard for communication and collaboration between agents.** It lets an orchestrator **send tasks to external agents**, **provide rich structured metadata**, and **receive responses in a predictable format.**  -- A connector calls an API. A2A delegates to an agent. [SRC: MULT-022, MULT-024] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

**353. What four things does A2A give you that a traditional HTTP connector doesn't?**

**Designed for agent workflows**, **supports multiturn interactions**, **provides rich contextual metadata**, and is **interoperable across frameworks.** The HTTP connector is no, no, limited, and varies. [SRC: MULT-025] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

**354. Microsoft's four integration patterns - which for which?**

**APIs or basic HTTP services -> custom connectors / HTTP tools.** **MCP tools or resources -> MCP servers.** **Agents implementing A2A -> A2A connection.** **Agents built with the Microsoft 365 Agents SDK -> Activity Protocol.** **And you can combine multiple integration models in the same agent.**  -- Four needs, four answers. The SDK one is the one people forget. [SRC: MULT-027, MULT-028, MULT-029, MULT-030] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

**355. Which URL do you enter when adding an A2A agent?**

**The endpoint URL used for COMMUNICATION with the agent - not the agent card URL.** If a valid agent card sits at the standard `.well-known` location, Copilot Studio **auto-populates the name and description** from it.  -- Endpoint, not card. The card is what gets read, not what you paste. [SRC: MULT-031, MULT-032] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

**356. Name and description didn't auto-populate for an A2A agent. Four possible causes?**

**No agent card**, **the card is at a different URL than expected**, **a communication problem with the card**, or **an incorrect endpoint**. **Check the endpoint first.** [SRC: MULT-033] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

**357. What does Copilot Studio actually send to an external A2A agent?**

**The FULL CHAT HISTORY, not just the latest utterance** - carried in the `copilotstudio.microsoft.com/a2a/chathistory` metadata key, alongside a unique `contextId`, message IDs, locale, and message content parts.  -- Anything the user typed earlier crosses the organizational boundary. This is the session-leak risk, in Microsoft's own payload example. [SRC: MULT-035] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

**358. What are the three A2A authentication options, and what does each need?**

**None.** **API key** - supply the header name or query parameter. **OAuth 2.0** - supply client ID, client secret, authorization URL, token URL and **refresh URL**. [SRC: MULT-036] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

**359. What kind of object is a Microsoft Entra Agent ID?**

**A Microsoft Entra service principal with an 'Agent' subtype.** It uses **the same underlying OAuth-based authentication flows** as a traditional app registration - **the enhancement is governance visibility and lifecycle management**, not a new auth mechanism.  -- Same plumbing, better window. [SRC: SEC-098, SEC-100, SEC-101] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

**360. Can a maker supply their own app registration for an agent?**

**No.** Copilot Studio **automatically creates and manages** agent identities, and requires that automatic management for security, compliance and channel integration. [SRC: SEC-102] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

**361. Do Agent Builder agents get Entra Agent IDs?**

**No. Agent Builder agents currently don't use or require app registration IDs or Entra Agent IDs.** Only Copilot Studio agents do.  -- Don't assume the identity model is the same across every Microsoft agent surface. [SRC: SEC-105] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

**362. How is the agent owner attached, and how does it differ by identity type?**

**Entra Agent ID: the owner is added as a SPONSOR**, with more limited permissions than a full owner. **Legacy app registration: the owner is added as an OWNER.** Both exist for governance traceability and accountability. [SRC: SEC-106, SEC-107] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

**363. What four things does the legacy-to-Agent-ID migration guarantee?**

**GUID preserved**, **no manual action required**, **zero downtime**, and **channel compatibility maintained** - Teams, Omnichannel and skills keep working. [SRC: SEC-108] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

**364. What Entra quota limits can stop an agent being created?**

**50,000 directory objects by default, or 300,000 with a verified domain** - though tenants created through self-service signup **stay at 50,000 even after verifying a domain**. Agent identities can use **no more than 95%** of it. **For a tenant's first two days the cap is 600.** The per-blueprint cap of 250 **does not apply** to Copilot Studio.  -- The identity is provisioned when the agent is CREATED, so a full tenant fails at creation. [SRC: SEC-131] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

**365. Who in your tenant can generate tokens using an Entra Agent ID?**

**Nobody - including tenant administrators.** A **Microsoft-owned blueprint principal** creates and manages the identities using **Federated Identity Credentials**, and Microsoft fully controls the mechanism. **Legacy app registrations are different:** Global Administrator, Application Administrator or Cloud Application Administrator can create secrets without ownership. [SRC: SEC-132] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

**366. Where is Conditional Access on the agent identity actually enforced?**

**Microsoft Teams only, today.** **Scope VISIBILITY applies to all agents on all channels**, but **enforcement at runtime applies only in Teams**, because Teams is the only channel that performs end-to-end authentication with the Entra Agent ID token.  -- Admins can SEE the scopes everywhere. They are only ENFORCED in Teams. [SRC: SEC-133] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

**367. Which three scope types appear on an agent identity, and when are they applied?**

**`Operations.Execute.All`** when the connector is used at agent (tool) level. **Individual operation scopes** when specific actions were added. **`Azure API Connections Runtime.All`** as a fallback. **Scopes are evaluated and applied when the agent is PUBLISHED**, and only on Entra Agent IDs - **custom connectors, MCP servers and REST API tools add none.** [SRC: SEC-134] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-certificates-configuration-values

**368. What are the three agent authentication options?**

**No authentication**, **Authenticate with Microsoft**, and **Authenticate manually.** **Changes don't take effect until the agent is published.**  -- Configure, save, publish. Saving alone changes nothing live. [SRC: SEC-111, SEC-112] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**369. When is 'No authentication' unavailable?**

**When a Power Platform data policy is configured to require authentication.** And note the cost: **anyone with the link can chat**, and the agent **can only reach public information and resources**. [SRC: SEC-114, SEC-113] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**370. Which five service providers does 'Authenticate manually' support?**

**Microsoft Entra ID V2 with federated credentials**, **with certificates**, **with client secrets**, **Microsoft Entra ID**, and **Generic OAuth 2** for any OAuth2-compliant provider.  -- Five, not two. Three of them are Entra ID V2 variants. [SRC: SEC-142] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**371. Which nine authentication variables exist, and which one is manual-only?**

`User.DisplayName`, `User.FirstName`, `User.LastName`, `User.PrincipalName`, `User.Email`, `User.Id`, `User.IsLoggedIn`, `SignInReason` - **and `User.AccessToken`, which is available ONLY under Authenticate manually.** **None are available under No authentication.**  -- Need a token? You need Authenticate manually. That rule holds on every Microsoft page. [SRC: SEC-135, SEC-130] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**372. What are the two values of SignInReason?**

**`SignInRequired`** - the user must sign in at the start using the Sign in system topic, and *Require users to sign in* must be on. **`Initializer`** - the user isn't signed in and reached a point that uses authentication variables, so they're prompted then. [SRC: SEC-136] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**373. Where do User.DisplayName and User.Id come from, and what can go wrong?**

**`User.DisplayName` from the `name` claim, `User.Id` from the `sub` claim**, provided the **`profile` scope** is defined. **Both might be empty** depending on how the user is configured in the identity provider - **test with a real user.** [SRC: SEC-137] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**374. You switch from manual to Authenticate with Microsoft. What breaks?**

**Topics referencing `User.AccessToken` or `User.IsLoggedIn` show them as UNKNOWN variables.** **Fix those errors before publishing.** The same happens if you turn authentication off entirely.  -- An authentication change is a breaking change to your topics. [SRC: SEC-120, SEC-121] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**375. What is the Sign in system topic, and what should you NOT do with it?**

**Added automatically.** To use it at conversation start you need **Authenticate manually** plus **Require users to sign in**. **Microsoft recommends using it only for Copilot Studio authentication** - not to call other actions, flows, or alternate authentication mechanisms. [SRC: SEC-122, SEC-123, SEC-124] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**376. How do you make a user sign in mid-conversation, and what are the node's rules?**

**An Authenticate node in a custom topic, which requires Authenticate manually.** **Once signed in the user isn't prompted again**, even at another Authenticate node. **The node is LEAF-ONLY** - it can only be added at the end of a dialog tree, never mid-dialog, though you can add nodes below it afterwards. It auto-creates a **success path** (`IsLoggedIn = True`) and a **failure path**.  -- Leaf-only is the constraint that catches people mid-build. [SRC: SEC-125, SEC-126, SEC-127, SEC-138] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**377. What are the rules for handling User.AccessToken?**

**Pass it only to trusted sources.** It can go to **Power Automate flows** to reach back-end APIs or act on the user's behalf. **Never put it in a Message node** or an untrusted flow. **Passing it without an Authenticate node prompts sign-in at that step**, and a user who signs out mid-conversation is re-prompted when a node uses it. [SRC: SEC-128, SEC-129, SEC-139] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-end-user-authentication

**378. Which authentication setting lets you control WHO in the org can chat with the agent?**

**No authentication:** you can't - anyone with the link. **Authenticate with Microsoft:** Teams only, sign-in forced on, **and agent sharing controls access**. **Manual + Entra ID:** turn on Require users to sign in, then control by sharing. **Manual + Generic OAuth2:** you **can't** control which specific users.  -- Generic OAuth2 authenticates people but does not let you pick which people. [SRC: SEC-141] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**379. Why must you not turn off agent-level authentication?**

**If any tool is configured to require user credentials, turning authentication off at the agent level stops those tools working.** Selecting **No authentication** has the same effect - the agent can't use tools with user credentials. [SRC: SEC-145, CHAN-064] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**380. When do you choose agent-author credentials over user authentication?**

**Agent-author (maker-provided): access is implicit or the use case is low risk**, or a shared resource where users shouldn't need their own access. **User authentication: data must be restricted to specific people, you're retrieving data only that user can see, or you're acting on the user's behalf.** **Tools always run in the user context and can't run unless authentication is enabled.** [SRC: TOOL-073, TOOL-074, TOOL-075, TOOL-076, TOOL-051] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

**381. What happens by default when a tool needs an input it can't find?**

**Fill using defaults to 'Dynamically fill with AI'.** The agent **first tries to extract the value from conversation context**, and **if it can't, it generates a question asking the user.** Setting **Fill using to Custom value** overrides that, and the agent won't ask.  -- You don't have to author question nodes for tool inputs. The orchestrator collects them. [SRC: TOOL-078, TOOL-079, TOOL-080, TOOL-092] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

**382. What does turning a tool off do, and what is the default?**

**It blocks the agent from using the tool but leaves it CONNECTED**, so it can be turned back on later. **A tool is turned on by default when added.** Deleting is separate - and **tools can only be deleted from the agent's Tools page**, not the main Tools page.  -- Disabled is not disconnected. Reversible beats destructive. [SRC: TOOL-081, TOOL-082, TOOL-094] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

**383. What six mechanisms add a tool to an agent?**

**Connector** (prebuilt or custom), **Agent flow**, **Prompt**, **REST API**, **Model Context Protocol**, and **Computer use.** Two more add tool-LIKE behaviour: **Azure Bot Service skills** and **Client tools**.  -- Standard-harness skills are NOT coding-agent skills - those are GitHub Copilot harness only. [SRC: TOOL-090] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

**384. What does 'Allow agent to decide dynamically when to use the tool' control?**

**Selected by default when generative orchestration is on.** **Clear it and the agent uses the tool ONLY when a topic calls it explicitly.** Separately, **'Ask the end user before running' is No by default.** [SRC: TOOL-091] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

**385. What is computer use best for, and what changes in a conversation?**

**Best for autonomous agents performing background tasks without user interaction.** It **can** be used conversationally, but then: **with User authentication every user needs valid credentials for the machine**, and **reasoning messages and screenshots of the machine's activity are shared in the chat.**  -- Conversational computer use puts screenshots of a real machine in front of the user. [SRC: TOOL-084, TOOL-085, TOOL-086, TOOL-087] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

**386. How is computer use billed?**

**Per STEP: 5 Copilot Credits, or 15 on a premium model.** A four-step run costs **20** credits standard or **60** premium. **Claude Opus 4.6 is the premium model at 15/step**; CUA, Claude Sonnet 4.5 and 4.6 are standard at 5.  -- It bills per step, not per run. Long tasks get expensive quickly. [SRC: TOOL-095] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

**387. What does computer use access control actually prevent?**

**Only ACTIONS on sites and apps outside the allow list. It does NOT stop the model opening them.** If only microsoft.com and Edge are allowed, the model can still use the Edge search bar to open Bing - **any attempt to interact with Bing then fails.** **Enforce HTTPS** restricts it to `https://` sites.  -- It is an interaction allow-list, not a navigation block. [SRC: TOOL-096] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use

**388. You publish an update. When do users actually get it?**

**Only when a new session starts.** **In most channels a session ends after 30 minutes of inactivity.** In persistent channels like Teams and Omnichannel, **entering `start over`** resets immediately - **otherwise it can take ONE HOUR** for the new version to take effect.  -- 30 minutes idle, or one hour, or 'start over'. Three different routes to the new version. [SRC: CHAN-059, CHAN-060, CHAN-061, CHAN-063] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**389. What is required before publishing, and what does publishing capture?**

**Minimum: a name, a description and instructions.** Publishing **creates a live version of the current draft** and captures **name, description, instructions, capabilities, knowledge, skills, workflow nodes and triggers**, applying it to **all connected channels**. **Draft changes after publishing don't affect the live version until you publish again.** [SRC: CHAN-052, CHAN-054, CHAN-057, CHAN-058, CHAN-055] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**390. What is the demo website for, and what is it not for?**

**For testing with teammates and stakeholders. NOT a production website for customers** - *"You shouldn't share this URL with customers."* It only appears if you chose **No authentication or Authenticate manually**.  -- Test chat is for building. Demo website is for stakeholders. Neither is for customers. [SRC: CHAN-062, CHAN-064] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**391. Which channel limits should shape your topic design?**

**Multiple-choice: supported on websites, max SIX in Teams (hero card), up to 13 on Facebook.** **CSAT survey: adaptive card on websites, text-only everywhere else.** **Markdown fully supported only on websites.** **No welcome message on Facebook.**  -- Six is the Teams number, and it is the one that bites. [SRC: CHAN-065] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**392. Can a user upload an attachment to a Copilot Studio agent?**

**No - on ANY channel**, even ones that support attachments, including Direct Line API and Teams. The agent replies that it can only process text. **The only exception is a message sent to a skill whose bot processes attachments.** [SRC: CHAN-066] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**393. What context windows do the available models offer?**

**128K tokens** for several models including a managed model, **200K tokens** for an external Anthropic model, and **400K tokens** for the largest options.  -- 128K / 200K / 400K. Three tiers. [SRC: PRMT-090, PRMT-093, PRMT-096] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-model-settings

**394. Is the context window a per-call or per-conversation limit?**

**Per model call.** It is enforced by the model provider on each individual call, not across a whole agent conversation.  -- A long conversation does not consume the window; one large call does. [SRC: PRMT-097] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-model-settings

**395. What does a model's maximum size actually cover?**

**The combined input - instructions, data, and the model's response.** [SRC: PRMT-105] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompts-performance-execution

**396. What problems arise from oversized prompt content?**

**Execution timeouts, token-window limits being reached, inconsistent response times, and throttling.** [SRC: PRMT-106] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompts-performance-execution

**397. What is the documented technique for long documents?**

**Process content incrementally - page by page - or truncate unnecessary pages beforehand.** [SRC: PRMT-110] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompts-performance-execution

**398. Why specify word or sentence counts in a prompt?**

**Without constraints, model responses vary in length and complexity.** Specify limits when generating summaries or similar output. [SRC: PRMT-107] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompts-performance-execution

**399. What may prompt inputs never contain?**

**Instructions. Any such instructions are forbidden for security reasons.**  -- This is prompt-injection defense stated as a product rule. [SRC: PRMT-076] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-inputs-prompt

**400. Which file types are accepted for image or document input?**

**Generally PNG, JPG, JPEG and PDF** - with **Word, Excel and PowerPoint also supported as document inputs**. [SRC: PRMT-078] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-inputs-prompt

**401. Which file types can never be used?**

**Image, audio, video and executable files**, plus **files with encryption such as sensitivity labels or password protection**. [SRC: PRMT-052, PRMT-055] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-documents

**402. How long does toggling Require secured access take to apply?**

**Up to two hours** to propagate, in either direction. Until then the previous setting remains in effect. [SRC: SEC-069, SEC-070] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-web-security

**403. What happens to secure access on a Teams-only license?**

**You cannot generate secrets.** Secure access tokens are created automatically and secure access is enabled for you. [SRC: SEC-068] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-web-security

**404. Where must a group-member environment be configured?**

**On the group's details page, not the individual environment page** - and you must be a **tenant admin with access to the group**. [SRC: SEC-062, SEC-063] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-no-maker-authentication

**405. At what level does the authentication policy apply?**

**Per environment, or per environment group.** If the environment is in a managed group with the policy enabled, **you cannot disable it individually**. [SRC: SEC-066] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-no-maker-authentication

**406. What changes when maker-provided credentials are blocked?**

**Agents require real-time user interaction**, because each tool call must be authenticated with a live user.  -- This rules out autonomous and scheduled scenarios. [SRC: SEC-064] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-no-maker-authentication

**407. What does the authentication-type control cover?**

**Connectors, built-in actions and embedded Power Automate flows equally** - including a Power Automate flow used as a tool. [SRC: SEC-065] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-no-maker-authentication

**408. What can an unauthenticated agent access?**

**Only public information.** No authentication means users are not required to sign in. [SRC: SEC-049] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**409. Is there a tenant-wide switch for the external security provider?**

**No. There is no global or tenant-wide setting** - external threat detection must be configured per environment. [SRC: SEC-079] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/external-security-provider

**410. What scope must your web API expose?**

**The base URL for the resource customers call.** [SRC: SEC-026] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/external-security-webhooks-interface-developers

**411. Whose responsibility is provider compliance?**

**Yours.** You must ensure the provider and terms meet the standards and regulations protecting your organization's data. [SRC: SEC-073] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/external-security-provider

**412. What length limits apply to the application registration and credential names?**

**Both between 1 and 120 characters** - the application registration display name and the Federated Identity Credential name. [SRC: SEC-074, SEC-075] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/external-security-provider

**413. What is required for Microsoft Entra ID with certificates authentication?**

**The URL of the Key Vault where the client certificate is stored.** [SRC: SEC-061] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**414. What three things can you control about transcripts?**

**Whether they are saved to Dataverse, who can view them, and how long they are retained.** [SRC: SEC-015] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-transcript-controls

**415. What governs a soft-deleted Teams chat?**

**Tenant retention policies.** A 403 is returned if permission is missing, a 404 if the chat is already deleted. [SRC: MCP-072] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-teams-tools

**416. What is required to create a private channel?**

**Members must be included at creation, and the members list must contain at least one owner.** [SRC: MCP-080] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-teams-tools

**417. What throws a System.FormatException in an MCP tool definition?**

**Setting exclusiveMinimum to an integer instead of a Boolean** in the input schema. [SRC: MCP-084] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-troubleshooting

**418. What identifier must be used for a user, and what header do advanced queries need?**

**An object ID (GUID) or userPrincipalName - never a display name.** Advanced queries require **ConsistencyLevel: eventual**. [SRC: MCP-087, MCP-088] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-user-tools

**419. Which windows can computer use not close?**

**Critical processes** - the system protects them. Window closing uses a fuzzy title match. [SRC: MCP-094] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-windows-365-agents

**420. What is execute_python_code for?**

**Data processing, calculations, file I/O and any computation beyond simple shell commands**, run in a resource-limited sandbox. [SRC: MCP-096] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-windows-365-agents

**421. What does the Word MCP tool return?**

**A JSON payload with filename, size, driveId, documentId, plain text content, and all comments in the document**, fetched from a SharePoint sharing URL. [SRC: MCP-103] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-word-tools

**422. Which Adaptive Card version does each surface support?**

**Bot Framework Web Chat** (the default website integration) supports **1.6 but not Action.Execute**. The **live chat widget** used by Omnichannel is limited to **1.5**.  -- A card that renders perfectly in one surface can be inert in another. [SRC: TOPC-003, TOPC-004] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/adaptive-cards-overview

**423. Why are Adaptive Cards valued in Teams and Outlook specifically?**

**The designer cannot predict whether the user is in dark or light mode**, and cards adapt to the host. [SRC: TOPC-002] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/adaptive-cards-overview

**424. What accessibility guidance applies to card fields?**

**Use isRequired and errorMessage** - even for optional fields, a clear errorMessage helps screen readers communicate validation feedback. [SRC: TOPC-001] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/adaptive-card-accessibility-tips

**425. What does Should prompt user do, and where is it available?**

It determines whether the agent tries to fill the variable with a value **before executing the topic**. It is available **only on topic inputs**, not tool inputs. [SRC: TOPC-006] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-managing-topic-inputs-outputs

**426. When are additional settings available for topic input parameters?**

**Only when the agent is configured to use generative orchestration.** For **tool** input parameters they are always available.  -- Another behavior that changes with orchestration mode. [SRC: TOPC-066] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-additional-settings-topic-action-inputs

**427. What does No valid entity found control?**

**What happens after the agent stops trying to get a valid response, once the maximum retry count is reached** - for example escalating to a customer service representative. [SRC: TOPC-069] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-additional-settings-topic-action-inputs

**428. When is a variable's type decided, and can it change?**

**On first assignment, and then it is fixed.** You cannot later assign a value of a different type. [SRC: TOPC-034] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

**429. What rule applies to the values in a table variable?**

**All values must be of the same type.** [SRC: TOPC-033] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

**430. What uniqueness rule applies to global variable names?**

**The name must be unique across all topics.** [SRC: TOPC-047] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-bot

**431. What is the recommended pattern for variables set by external systems?**

**A dedicated topic holding all externally-set variables**, with a Set variable value node per value, rather than scattering them across topics. [SRC: TOPC-051] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-bot

**432. Which channel ignores timeout values on externally-set global variables?**

**Dynamics 365 Contact Center, for IVR use cases.** [SRC: TOPC-048] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-bot

**433. Which system variables exist only under the On Select Intent trigger?**

**The extracted entities from the triggering message, the intent options when the recognizer is ambiguous, the selected intent, and the reason multiple topics matched.**  -- Four variables, one trigger. Outside it they do not exist. [SRC: TOPC-041, TOPC-042, TOPC-043, TOPC-044] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

**434. Which system variables exist only under the Inactivity trigger?**

**A Boolean flag for whether the timer should continue, and a count of how many times the OnInactivity timer fired.** [SRC: TOPC-039, TOPC-040] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

**435. Which trigger is required for the current error message variable?**

**On Error.** [SRC: TOPC-037] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

**436. Which trigger exposes the sign-in option needed for the topic?**

**On Sign In.** [SRC: TOPC-045] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

**437. What fires the Fallback behavior, and what is the documented pattern?**

It **triggers when the agent cannot match the user's question or message to a topic**, and the documented pattern is to **redirect to Escalate**. [SRC: TOPC-027, TOPC-030] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-topics

**438. When does the Sign in system topic trigger?**

**At the beginning of the conversation when users are required to sign in**, or when the conversation reaches **a node that uses authentication variables**. [SRC: TOPC-029] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-topics

**439. What two conditions stop a proactive message reaching a recipient?**

**The recipient has not installed the agent in Teams**, or **does not have permission to chat with the agent** - in which case the agent must be shared with them. [SRC: TOPC-007, TOPC-020] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-proactive-message

**440. What limits govern proactive messages?**

**Power Automate limits and the throttling limits of the Microsoft Teams connector.** For large recipient groups the documented mitigation is to **reduce parallelism or reduce the number of recipients**. [SRC: TOPC-010, TOPC-015] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-proactive-message

**441. What environment requirement applies to proactive messages?**

**They must be in the same environment as the Power Automate flow.** [SRC: TOPC-011] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-proactive-message

**442. Which Adaptive Cards does Power Automate not support?**

**Cards that use the templating feature.** [SRC: TOPC-012] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-proactive-message

**443. What does the Succeed with status code option do?**

**The flow run is marked as succeeded even though the recipient cannot receive the message** because they did not install the agent. **Status code 100** is returned.  -- Use it for low-importance messages where a missing install should not fail the run. [SRC: TOPC-019] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-proactive-message

**444. What role is needed to view comments?**

**Bot Transcript Viewer.** [SRC: TOPC-024] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-review-activity

**445. Which channel does not support reactions?**

**Microsoft 365 Copilot.** Agents published there do not support reactions. [SRC: TOPC-023] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-review-activity

**446. What does 'the conversation state exceeds the size limits' indicate?**

A documented authoring error condition - the conversation state has grown beyond its size limit. [SRC: TOPC-054] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/authoring/error-codes

**447. Name the four tool-call failure conditions in the authoring error codes.**

**The request exceeded allowed time limits**, **the request rate exceeded service limits**, **interactive sign-in is required to acquire a token**, and **monthly, daily or concurrency quota limits were exceeded**.  -- Time, rate, token, quota. Four different fixes. [SRC: TOPC-060, TOPC-061, TOPC-062, TOPC-064] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/authoring/error-codes

**448. Which two usage-limit errors are distinguished in the authoring error codes?**

**The usage limit for generative AI was reached**, and **the usage limit for generative orchestration was reached.** They are separate limits. [SRC: TOPC-057, TOPC-058] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/authoring/error-codes

**449. What does 'Authentication is required but wasn't configured' mean in practice?**

The agent reached something needing authentication while **no authentication was configured** for it. [SRC: TOPC-052] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/authoring/error-codes

**450. What error appears when a required prompt input is empty?**

**The input parameter for the prompt is blank but is required.** [SRC: TOPC-065] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/authoring/error-codes

**451. Can system topics be deleted?**

**No. You cannot delete or disable system topics, or edit their trigger phrases - but you can turn them off and customize their nodes on the authoring canvas.**  -- Microsoft's advice: do not customize them until you are comfortable with authoring. [SRC: TOPC-078, TOPC-079] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics

**452. What does the system fallback topic contain, and what is its retry rule?**

**Two main nodes, Message and Redirect**, with a condition to ask the user to rephrase **no more than twice**. [SRC: TOPC-096] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-fallback-topic

**453. Which variable stores input the agent could not understand?**

**UnrecognizedTriggerPhrase.** [SRC: TOPC-097] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-fallback-topic

**454. What is the size limit on a trigger-phrase import file?**

**A text file of maximum 3 MB**, with each phrase on a separate line. [SRC: TOPC-082] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics

**455. What is the difference between a topic error and a warning?**

**Warnings do not stop the agent from working**, but can cause individual topics to misbehave, so they should be reviewed. [SRC: TOPC-099] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-topic-management

**456. What is an orphaned variable?**

**A variable deleted from a topic while still in use.** The error is highlighted red wherever it is used and must be resolved. [SRC: TOPC-101] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-topic-management

**457. What must an adaptive card contain to be interactive?**

**At least one submit button**, so the user can submit information back to the agent. [SRC: TOPC-074] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-ask-with-adaptive-card

**458. What is irreversible about editing a card in the formula panel?**

**Once you begin editing in the formula panel you cannot go back to the original JSON.** Save a copy of the JSON first.  -- A one-way door with no warning. [SRC: TOPC-076] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-ask-with-adaptive-card

**459. What two channel limitations affect quick replies?**

**Some channels do not support quick replies at all**, and **some limit how many are shown at once**. [SRC: TOPC-092, TOPC-093] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-send-message

**460. What is a primary agent, and what happens without one?**

**The agent that owns the components in the collection.** Without one, the collection is **owned by the environment**. [SRC: TOPC-084] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-export-import-copilot-components

**461. When can you not set a primary agent?**

**When the collection has multiple connected agents** - you must disconnect all other agents first. [SRC: TOPC-085] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-export-import-copilot-components

**462. When can dependencies be excluded from a collection?**

**Only if you have set a primary agent.** Otherwise dependencies are automatically selected and added. [SRC: TOPC-083] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-export-import-copilot-components

**463. How do you diagnose a failed component import?**

**Download the log file** - an XML file detailing what caused the failure. [SRC: TOPC-087] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-export-import-copilot-components

**464. What is the headers section used for?**

**Passing authentication tokens, content type, or any other headers the API requires** - for example an Authorization header. [SRC: TOPC-089] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-http-node

**465. What happens when the agent cannot determine intent?**

**It prompts the user again.** A display name can be configured to show when the agent cannot determine which topic matches. [SRC: TOPC-094, TOPC-081] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-fallback-topic https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics

**466. Which variables are restricted to voice-enabled agents?**

**The voice variables** - a distinct set available only for voice-enabled agents. [SRC: TOPC-046] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about

**467. How long does a test take, and what is rerunning for?**

**Up to a few minutes.** Rerunning the same set lets you **compare results over time and across iterations**. [SRC: ANLY-077] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-results

**468. What appears if a test set has broken connections or no user profile?**

**The Manage profile and connections dialog.** A user profile is not mandatory. [SRC: ANLY-079] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-results

**469. What can the agent viewer role not do?**

**Create, update or delete the agent or content outside the evaluations where they are an agent viewer**, and they **cannot publish the agent**. They also **cannot create or update evaluation test sets shared with them**. [SRC: ANLY-083, ANLY-082] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-results

**470. What prevents an analytics session from beginning?**

**A failed trigger where the agent never receives a trigger payload.** Analytics tracks only successfully triggered runs. [SRC: ANLY-091] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

**471. When is topic analytics available, and what replaces it?**

**Only for agents in classic mode, and only for topics associated with an analytics session.** Generative orchestration uses **conversation outcomes** instead. [SRC: ANLY-094] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

**472. What time window do questions use, regardless of the configured period?**

**The last 30 days.** If the configured period falls entirely outside that, Copilot Studio shows a notification.  -- A third window, distinct from the 28-day session store and the 360-day analytics range. [SRC: ANLY-097] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-themes

**473. What does Clear all filters not change?**

**The time period.** It only resets filters, and appears only when filters are active. [SRC: ANLY-024] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-drill-down-lists

**474. What does the Monthly Credit limit chart show?**

**Copilot Credits consumed in the calendar month and how many remain**, as a stacked bar chart. [SRC: ANLY-013] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-consumption

**475. What inputs does a savings estimate need?**

**For time savings, the estimated time another method would take. For cost savings, the estimated cost and the currency.** [SRC: ANLY-016, ANLY-017] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-cost-savings

**476. What two settings must align with your requirements for telemetry?**

**Retention period and verbosity**, alongside sufficient capacity. Log retention time should match your data retention timeframes. [SRC: ANLY-051, ANLY-053] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/monitor-computer-use

**477. What two licenses are required to use Copilot Studio?**

**Both a tenant-level license and a user-level license.** A user license alone is not sufficient - when tenant-level enablement is missing the user is blocked.  -- Error 7604 with only a splash screen is the tenant-level symptom. [SRC: TRBL-039, TRBL-035] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/licensing/publish-license-error

**478. Which license is required to publish?**

**Microsoft Copilot Studio Per User.** Without it the user is told they do not have a license that allows publishing. [SRC: TRBL-034, TRBL-037] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/licensing/publish-license-error

**479. What does the Copilot Studio authors setting actually do?**

**It grants access to users in the specified security group in a pay-as-you-go scenario. It does not restrict access to only that group.**  -- Customers routinely expect it to be a restriction. It is a grant. [SRC: TRBL-029] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/licensing/authors-access

**480. What must all be true to block a user from Copilot Studio?**

**Every condition must be met at once** - the user must have no Copilot Studio per-user license, no trial license, and no Microsoft 365 Copilot license. [SRC: TRBL-031] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/licensing/authors-access

**481. Over what periods do generative AI and topic orchestration quotas apply?**

**Per minute and per hour.** Once you reach the limit, requests are refused until the window resets. [SRC: TRBL-046] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/licensing/throttling-errors-agents

**482. What two model-level conditions block an agent call?**

**A data-residency policy with no in-region deployment of the requested model**, and **a model requiring explicit tenant or environment consent that has not been granted**. [SRC: TRBL-006, TRBL-007] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/troubleshooting-error-codes

**483. What happens if a user sends a second message before the first turn finishes?**

**The agent processes one turn at a time within a conversation** - the new message cannot start until the current turn completes. [SRC: TRBL-005] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/troubleshooting-error-codes

**484. What does the maximum input size error indicate?**

**The request exceeded the AI model's maximum input size.** [SRC: TRBL-004] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/troubleshooting-error-codes

**485. Why might quality and sentiment scores be missing entirely?**

**Both are measured on a sample, not on every session**, and agents below a minimum number of successful generative answers get no score. **Sentiment also depends on generative answers being in use.** [SRC: TRBL-012, TRBL-015, TRBL-016] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-analytics

**486. What makes theme analysis ineffective?**

**Limited data or highly fragmented queries.** Themes relies on patterns in user queries and needs a meaningful amount of activity. [SRC: TRBL-019] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-analytics

**487. What can generative orchestration do in a single turn?**

**Chain multiple capabilities together** - Microsoft's example is "I need to get store hours and find my nearest store" - and **ask follow-up questions** when required details are missing. [SRC: TRBL-023] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-generative-orchestration

**488. What data risk does Microsoft name for tool calls?**

**The system sends required input values that can include conversation history or event-trigger data**, which may carry unintended or sensitive information. [SRC: TRBL-026] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-generative-orchestration

**489. What is the documented lever for constraining input values?**

**Entity validation with Power Fx expressions** - for example limiting email recipients to a specific domain. [SRC: TRBL-028] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-generative-orchestration

**490. What must be true of an agent invoked through orchestration?**

**It must be configured correctly and capable of handling the queries or events passed to it**, whether internal or external. [SRC: TRBL-025] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-generative-orchestration

**491. What minimum content must a draft have before it can be published?**

**A name, a description and instructions.** Copilot Studio checks the draft is ready before publishing starts. [SRC: CHAN-002] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/publication-fundamentals-publish-channels

**492. Where can an unpublished agent be reached?**

**Only the preview and test pane.** It exists solely as a draft and users cannot access it. [SRC: CHAN-001, CHAN-003] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/publication-fundamentals-publish-channels

**493. What four conditions must hold for Dynamics 365 Customer Service handoff?**

**Same environment for the agent and D365, same geographical region, the D365 package installed in that same environment, and the agent published.** [SRC: CHAN-004, CHAN-006, CHAN-008, CHAN-009] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-hand-off-omnichannel

**494. Why must an Application ID be unique per agent?**

**Dynamics 365 Customer Service models agents as application users**, so reusing an Application ID breaks that mapping. [SRC: CHAN-015] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-hand-off-omnichannel

**495. What warning appears if the required extensions are missing?**

**A message that the agent does not have access to the variables or actions it needs.** [SRC: CHAN-013] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-hand-off-omnichannel

**496. What two things does the WhatsApp channel not support?**

**Authentication with Microsoft**, and **uploading or downloading files.** [SRC: CHAN-026, CHAN-027] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-whatsapp

**497. When can WhatsApp users first interact with the agent?**

**Only after the agent is published.** [SRC: CHAN-022] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-whatsapp

**498. What does Facebook require before an app can go public?**

**App review, plus a Privacy Policy URL and a Terms of Service URL.** At least one page is required. [SRC: CHAN-019, CHAN-018] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-facebook

**499. How many suggested actions does Teams render in one question node?**

**Up to six.** [SRC: CHAN-034] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**500. What happens when a user tries to send an attachment?**

**The agent refuses and replies that it can currently only process text.** Users cannot send or upload attachments to the chat. [SRC: CHAN-035] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**501. What should you check when a publish fails on dependencies?**

**That all required components - topics, flows, connectors and data sources - are available and properly configured.** [SRC: CHAN-033] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**502. What SIP condition blocks a transfer?**

**A SIP header in the transfer activity containing unsupported characters.** [SRC: CHAN-041] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/channels/voice-error-codes

**503. What is a child agent?**

**A lightweight agent that exists within the context of your main agent**, letting you logically group tools, instructions and knowledge into clearly defined subagents. [SRC: MULT-008] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent

**504. What does a child agent use when it is called?**

**Its own tools and knowledge** - and because it has **its own orchestration**, it has **its own tool limits**.  -- This is the supported way past the per-agent tool ceiling. [SRC: MULT-020, MULT-019] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent

**505. What must be true of another agent before you can connect to it?**

**It must be in the same environment, published, and configured as available to connect.** [SRC: MULT-001] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-agent-connected

**506. Which SDK-built agents can be integrated?**

**Agents built with the Microsoft 365 Agents SDK.** [SRC: MULT-003] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

**507. What must you supply when connecting an agent that uses an API key?**

**The name of the header where the key is included, or the query parameter.** [SRC: MULT-005] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-agent-to-agent

**508. What does Action if no entity found control?**

**What the agent does when it cannot find a value for an input from context or by prompting** - including whether to escalate. [SRC: MULT-013] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent

**509. What does Make this input required do?**

**Requires the input to have a value before the agent can be called.** [SRC: MULT-009] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent

**510. What are the three activity triggers, and what does each catch?**

**Message activity** - a user types or says something. **Event activity** - any event, narrowable with the Event name property. **Activity of any type** - narrowable with the Activity type list. [SRC: MULT-014, MULT-015, MULT-016] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent

**511. If several agents or topics respond to the same event type, what order do they run in?**

**Order of creation, oldest first.** [SRC: MULT-018] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent

---

# Numbers You Must Know (63 cards)

*Source: `Flashcards/AB-620 Numbers You Must Know.tsv`*

**1. SharePoint generative answers: what is the maximum file size, and what does it depend on?**

**7 MB without** a Microsoft 365 Copilot license in the same tenant, **200 MB with** one. The 200 MB path also requires Tenant graph grounding with semantic search turned **on**; the 7 MB path requires it **off**.  -- The licensing dependency is the testable point, not either number alone. [SRC: KNOW-054, KNOW-055] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

**2. How large a file can generative answers process from an upload?**

**512 MB.**  -- Upload 512 MB, but SharePoint tops out at 7 MB or 200 MB. Different paths, different ceilings. [SRC: PRMT-051] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-documents

**3. A file group can hold how many files, and how big can each be?**

**Up to 500 files, each up to 512 MB.** [SRC: KNOW-134] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-file-groups

**4. How many files can an agent include as knowledge in total?**

**500 files.** [SRC: KNOW-073] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload

**5. How many file groups can you create per agent?**

**25 file groups per agent**, created one at a time.  -- 25 groups x 500 files is not the total - the agent-level cap is still 500 files. [SRC: KNOW-133, KNOW-073] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-file-groups https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload

**6. How large can a file the agent creates during a turn be?**

**10 MB per file.** A file exceeding the cap is **not returned to the user** - ask the agent to split the output into smaller files.  -- It fails silently. Nothing tells the user the file was dropped. [SRC: TOOL-008] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/tools-overview

**7. What is the connector response size limit?**

**500 KB.** Beyond that the connector request fails.  -- Fix it at the source with the connector's Filter and Limit input parameters, not in the agent. [SRC: TOOL-029] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/actions/connector-request-failure

**8. Code interpreter: what is the per-file size limit and the file count limit?**

**16 MB per file, regardless of file type, and a maximum of 10 files.** [SRC: PRMT-025] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-code-interpreter-structured-data

**9. What is the size limit for a document layout used to generate a document from a prompt?**

**20 MB.** It also cannot be confidential or password-protected.  -- Above **5 MB** you must save and reopen the prompt before testing it. [SRC: PRMT-016, PRMT-024] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/generate-document-output-prompt

**10. For image or document input to a prompt, what is the total size limit?**

**Less than 25 MB for all files combined.**  -- Total across all files, not per file. [SRC: PRMT-077] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-inputs-prompt

**11. What file size limit applies to SharePoint and OneDrive MCP file operations?**

**5 MB or less**, for both upload and download.  -- This is a limit of the MCP server, not of SharePoint. The agent-level SharePoint knowledge source reads far larger files. [SRC: MCP-054, MCP-055] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-onedrive-tools https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-sharepoint-tools

**12. What is the maximum file size the Dataverse web API will serve when downloading a solution artifact?**

**16 MB.** [SRC: ALM-092] | https://learn.microsoft.com/en-us/power-platform/alm/extend-pipelines-github-export

**13. What is the size limit of a single conversation transcript record?**

**1 MB** for the Content column. A larger transcript is **split across multiple records**. [SRC: ANLY-039] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-powerapps

**14. SharePoint lists as knowledge: how many lists, and how many rows?**

**Up to 10 lists per agent** and **up to 120,000 rows total across all lists**. Quality and latency degrade past 120,000, and individual lists over **35,000 rows** affect quality and latency.  -- Microsoft's own examples: 10 lists of 12,000 rows, or 3 lists of 35,000. [SRC: KNOW-011, KNOW-013] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/knowledge-sharepoint-lists

**15. How many items does a SharePoint or OneDrive MCP folder listing return?**

**The top 20 files and folders.** [SRC: MCP-042, MCP-056] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-onedrive-tools https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-sharepoint-tools

**16. How many sessions does the sessions list show, and over what window?**

**Up to 10,000 sessions per day**, refreshed daily, with only the **last 28 days** stored and viewable. [SRC: ANLY-036] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-questions-sessions

**17. When transcripts are split into daily rows, how many sessions can each row hold?**

**Up to 50,000 sessions** per one-day increment. [SRC: ANLY-048] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-studio

**18. How many Cloud PC pools can you create, and how many Cloud PCs can each hold?**

**Two pools per tenant free** (no Windows 365 for Agents billing plan needed), **five pools per environment**, each autoscaling to **10 Cloud PCs**.  -- Plus **50 free hours** per tenant for published agents running autonomously, and test-chat usage is not billable at all. [SRC: TOOL-034, TOOL-036] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-cloud-pc-pool

**19. How many groups can be added to a Cloud PC pool?**

**Up to 10 groups.** [SRC: TOOL-039] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-cloud-pc-pool

**20. What is the character limit on prompt instructions?**

**8,000 characters.** [SRC: PRMT-089] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-generative-answers-prompt-modification

**21. How long must a prompt assistant description be?**

**Between 4 and 500 characters.** [SRC: PRMT-063] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-assistant

**22. What is the length limit on a Bing web request when the agent answers from a public website?**

**2,048 characters** total, including the search query. **If the query pushes the request past the limit the agent skips the search entirely and returns no results from that website.**  -- A long user question silently disables website grounding. [SRC: KNOW-074] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website

**23. What is the character limit on translated text during solution import?**

**500 characters.** Any item longer than that **fails the whole import**.  -- The fix is to shorten the offending line and re-import - the failure names the line. [SRC: ALM-025] | https://learn.microsoft.com/en-us/power-platform/alm/create-solutions-support-multiple-languages

**24. How long can a node name be?**

**Up to 500 characters.** [SRC: TOPC-073] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-ask-with-adaptive-card

**25. How long can a single evaluation test question be?**

**Up to 1,000 characters, including spaces.** [SRC: ANLY-061] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create

**26. What agent-name length breaks the Dynamics 365 Customer Service connection?**

**More than 30 characters.** Keep the name under 30 or the connection fails. [SRC: CHAN-005] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-hand-off-omnichannel

**27. Windows 365 computer use: what truncation limits apply to shell output and page reads?**

**stdout and stderr each truncate at 32 KB.** Page text and page HTML each truncate at **512 KB**. [SRC: MCP-095, MCP-101, MCP-102] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-windows-365-agents

**28. How far back does the Analytics page go?**

**360 days.** Session details and transcript information, however, are only the **last 28 days**.  -- One page, two windows. Time stamps are UTC. [SRC: ANLY-027, ANLY-084] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

**29. How long does the Monitor page keep user queries and agent responses?**

**28 days.** [SRC: ANLY-025] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-drill-down-lists

**30. How far back can you download conversation transcripts from Copilot Studio?**

**The past 29 days.**  -- 29, not 28 and not 30. This is the one that catches people. [SRC: ANLY-046, ANLY-092] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-studio https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

**31. How long are conversation transcripts kept in Dataverse via Power Apps?**

**30 days by default**, then removed by a Power Apps **bulk-delete job**. To keep them longer, cancel that job and create a new one. [SRC: ANLY-037, ANLY-041] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-powerapps

**32. How long are evaluation and test results retained?**

**89 days.** Export to CSV to keep them longer.  -- If evaluation evidence is ever part of an audit, the export has to be part of the process. [SRC: ANLY-055] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create

**33. How long does deployment history remain viewable?**

**Up to the last 365 days**, by changing the filter. [SRC: SEC-005] | https://learn.microsoft.com/en-us/power-platform/alm/admin-deployment-hub

**34. After you turn off transcript saving, how long can transcripts still be written to Dataverse?**

**Up to 24 hours.** Records saved during that window can be deleted manually.  -- Turning it off is not immediate - a compliance answer, not a convenience one. [SRC: SEC-019] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-transcript-controls

**35. How long are computer use runs and session recordings kept on the Activity tab?**

**The last 28 days**, including recordings of every click and keystroke. [SRC: TOOL-009, TOOL-013] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use-standalone

**36. How long before a conversation times out from inactivity?**

**30 minutes.** On the **Telephony** channel a conversation instead times out **3 minutes after an End Conversation event**. [SRC: ANLY-088, ANLY-089] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

**37. When is a session marked Abandoned?**

When an **engaged** session times out after **30 minutes** without reaching a resolved or escalated state. [SRC: ANLY-030] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness

**38. After how long is a conversation written to a transcript record?**

**30 minutes of inactivity.** If it resumes later, the new activity is saved separately. [SRC: ANLY-038] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-powerapps

**39. What is the prompt execution timeout, and what error does exceeding it produce?**

**100 seconds** - an agent flow that runs longer than 100 seconds times out.  -- Do not confuse this with the agent flow response limit. Two different limits. [SRC: TOPC-055] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/authoring/error-codes

**40. How long may image or document processing in a prompt run?**

**A maximum of 100 seconds**, after which it terminates with a timeout error. [SRC: PRMT-079] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-inputs-prompt

**41. How long does the dialog runtime cache a secret environment variable?**

**Five minutes** for a successful read, and **30 seconds** for an unsuccessful one.  -- So a rotated secret needs no republish - but it is not instant either. [SRC: TOPC-110] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables

**42. What is the maximum wait time for a variable arriving from Omnichannel for Customer Service?**

**10 seconds (10,000 ms).** [SRC: TOPC-050] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-bot

**43. What happens to a DevOps solution import task that is not run asynchronously?**

**It times out after 4 minutes.** Asynchronous import is recommended for larger solutions and polls until MaxAsyncWaitTime is reached. [SRC: ALM-067] | https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tool-tasks

**44. Windows 365 computer use: what limits does the Python sandbox enforce?**

**512 MB memory and a 30-second timeout.** [SRC: MCP-098] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-windows-365-agents

**45. How long can a Cloud PC pool take to provision?**

**Up to 30 minutes.** [SRC: TOOL-037] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-cloud-pc-pool

**46. How quickly do dynamic group memberships update for Cloud PC pools?**

**Normally 5-10 minutes, but up to 24 hours in large tenants.** Dynamic groups also require **Entra ID P1** or an Intune for Education license. [SRC: TOOL-040] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-cloud-pc-pool

**47. How long before a default deployment pipeline rule applies to an environment group?**

**Up to 10 minutes.** [SRC: ALM-044] | https://learn.microsoft.com/en-us/power-platform/alm/default-deployment-pipeline-rule-for-environment-groups

**48. How long can Application Insights telemetry take to arrive?**

Delivery can take time - Microsoft says to run a test conversation and confirm arrival rather than assuming it is instant.  -- Judging the integration broken thirty seconds after a test is the standard mistake. [SRC: ANLY-005] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-environment-level-agent-telemetry

**49. How long can agent flow runs take to appear in run visualizations?**

**Up to 30 minutes.** [SRC: ANLY-101] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-manage-monitor

**50. How long can it take for updated glossary terms to become available?**

**Up to 15 minutes.** [SRC: KNOW-061] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

**51. When unstructured data support is first enabled, how long does Dataverse take to configure and index?**

**Between 5 and 30 minutes** before it processes added files. [SRC: KNOW-145] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-unstructured-data

**52. How many tools can an agent have under generative orchestration?**

**A maximum of 128 per agent**, with Microsoft recommending **no more than 25-30** for best performance.  -- Third-party courses teach '30-40'. That loses the hard limit and blurs the recommendation. [SRC: TOOL-052] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

**53. Do child agents share the parent's tool budget?**

**No. Child agents have their own orchestration and their own set of up to 128 tools.**  -- This is how you get past 128 - delegate, do not cram. [SRC: TOOL-053] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent

**54. What must be true before Copilot Studio generates suggested themes?**

**At least 50 questions with generative answers, from 50 different sessions, logged in the past seven days.**  -- All three conditions. Light traffic never reaches it. [SRC: ANLY-095] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-themes

**55. What is the minimum needed to calculate sentiment for a session?**

**At least two user messages.** [SRC: TRBL-017] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-analytics

**56. How large can a file used to generate test questions be?**

**Up to 5 MB.** [SRC: ANLY-059] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create

**57. What changes for pipeline target environments in February 2026?**

**Microsoft begins automatically enabling managed environments** for any pipeline target environments not already enabled. Customers are notified via the Microsoft 365 Message center. [SRC: ALM-132] | https://learn.microsoft.com/en-us/power-platform/alm/pipelines

**58. How long do a user's agent memories survive without interaction?**

**28 days.** If a user doesn't interact with the agent for 28 days, the system **deletes their memories from that agent**.  -- A fourth 28-day window. Session details, transcripts, computer use logs and now memory all sit at 28 - while analytics is 360 and evaluation retention is 89. [SRC: KNOW-154] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview

**59. Teams citation limits: how many, and how long?**

**At most 20 citations** per response - the rest are **dropped**. **Title ~80 characters**, **snippet ~480 characters**, both shortened if longer.  -- 20 / 80 / 480. Teams is stricter than every other channel. [SRC: CHAN-050] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

**60. Public websites and SharePoint URLs: how many, by mode?**

**Generative mode: 25 each.** **Classic mode: four public URLs, and four SharePoint URLs per generative answers node.**  -- 25 and 4, twice. The same split as Dataverse - generative unlimited, classic two. [SRC: KNOW-161, KNOW-162] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio

**61. Website knowledge: subpage depth, and the Bing Custom Search numbers?**

**Maximum two subpages depth** for both options. **Bing Custom Search: one configuration ID, up to 400 URLs**, custom ranking, and **it supports direct pages** - plain public website knowledge does not. [SRC: KNOW-163] | https://learn.microsoft.com/microsoft-copilot-studio/guidance/retrieval-augmented-generation

**62. SharePoint: which file-size number answers which question?**

**15 MB** - the size of matching files retrieved for **detailed snippets**. **200 MB** - the ceiling with premium **Enhanced Search Results** and tenant Graph grounding. **7 MB / 200 MB** - the separate rule that turns on whether a **Microsoft 365 Copilot licence** exists in the tenant.  -- Three numbers, two different questions. 15 is snippets; 7 and 200 are licensing. [SRC: KNOW-164, KNOW-054] | https://learn.microsoft.com/microsoft-copilot-studio/guidance/retrieval-augmented-generation https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

**63. How many Azure AI Search vector indexes per connection?**

**One.** [SRC: KNOW-165] | https://learn.microsoft.com/microsoft-copilot-studio/knowledge-azure-ai-search

---

# Dont Confuse These (23 cards)

*Source: `Flashcards/AB-620 Dont Confuse These.tsv`*

**1. Patch vs update: which one can remove a component?**

**Neither.** A **patch** supports additive update **but not removal** - to remove a component you perform an **upgrade**. An **update** deploys onto the previous version, creates **no additional solution layer**, and also **cannot delete components**.  -- Only an upgrade removes. Patch and update are both additive. [SRC: ALM-016, ALM-004] | https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates https://learn.microsoft.com/en-us/power-platform/alm/basics-alm

**2. A patch must have which version number relative to its parent?**

**The same major and minor number, but a higher build and release number.** The display name may differ. Subsequent patches must be numerically higher than any existing patch.  -- Major and minor match; build and release climb. [SRC: ALM-014, ALM-015] | https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates

**3. Can a managed patch be applied to an unmanaged parent solution?**

**No. Patch protection must match its parent** - a patch exported as managed must be imported on top of a **managed** parent. [SRC: ALM-017] | https://learn.microsoft.com/en-us/power-platform/alm/create-patches-simplify-solution-updates

**4. You need to change a component that arrived in a managed solution. What actually happens?**

**You cannot edit it inside the managed solution.** You add it to an **unmanaged** solution first - and doing so **creates a dependency that blocks uninstalling the managed solution** until you remove it.  -- Editing a managed component is what traps the managed solution in the environment. [SRC: ALM-180] | https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm

**5. Which environments in a pipeline must be managed environments?**

**All target environments must be managed. Development environments need not be, and the pipelines host itself need not be.**  -- Three clauses. Study guides routinely collapse them into one wrong sentence. [SRC: ALM-029, ALM-031, ALM-030, SEC-008] | https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines https://learn.microsoft.com/en-us/power-platform/alm/admin-deployment-hub

**6. When is Include all objects the right choice, and what is irreversible about it?**

Use it **only when distributing a table that does not exist in the target environment**. **Once selected it cannot be undone.** [SRC: ALM-155] | https://learn.microsoft.com/en-us/power-platform/alm/segmented-solutions-alm

**7. RATE_LIMIT_REACHED vs QUOTA_EXCEEDED - what is the difference?**

**RATE_LIMIT_REACHED is a short-lived burst limit. QUOTA_EXCEEDED is a longer-running usage quota**, typically tracked in tokens or requests over a period.  -- Burst versus budget. One clears by waiting; the other does not. [SRC: TRBL-009] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/troubleshooting-error-codes

**8. What does choosing No authentication cost you?**

The agent **cannot use tools that require user credentials**, **cannot use Dataverse tables as knowledge sources**, and **cannot report active user metrics**. Anyone with the link can chat with it and you cannot control who.  -- One setting, four consequences, none of them announced at the time you choose it. [SRC: CHAN-030, PRMT-056, TOPC-022, SEC-057] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-prompt-node https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-review-activity https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**9. Which authentication setting do Dataverse tables as knowledge sources require?**

**Authenticate with Microsoft.** The other two options do not work for Dataverse knowledge. [SRC: KNOW-057] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-dataverse

**10. Can you always turn off authentication on an agent?**

**No.** You cannot turn the option off when the **data policy in the Power Platform admin center requires authentication**.  -- A tenant policy can take the choice away entirely. [SRC: SEC-053] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication

**11. An agent needs more than 128 tools. What is the supported answer?**

**Child agents.** A child agent has **its own orchestration and its own set of up to 128 tools** - Microsoft names the separate limit as a benefit of the pattern.  -- Delegate, do not cram. Grouping tools into focused child agents is the design, not a workaround. [SRC: TOOL-052, TOOL-053, MULT-021] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-agent-child-agent

**12. 100 seconds or two minutes - which applies to what?**

**100 seconds is the prompt execution limit**, and an agent flow exceeding it times out with a dedicated error. Do not apply it to a different operation just because it is the number you remember.  -- Two ingested courses taught 100 seconds as the agent flow limit. Check which operation the question is actually about. [SRC: TOPC-055] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/authoring/error-codes

**13. Monitor page, transcript download, Dataverse transcripts, evaluations, Analytics, deployment history - what are the six retention windows?**

**Monitor 28 days. Studio transcript download 29 days. Dataverse transcripts 30 days. Evaluations 89 days. Analytics 360 days. Deployment history 365 days.**  -- 28, 29, 30, 89, 360, 365. Learn them as a set or you will confidently pick a neighbour. [SRC: ANLY-025, ANLY-046, ANLY-037, ANLY-055, ANLY-027, SEC-005] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-drill-down-lists https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-studio https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-transcripts-powerapps https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness https://learn.microsoft.com/en-us/power-platform/alm/admin-deployment-hub

**14. The Analytics page says 360 days. Why can you not see a transcript from four months ago?**

**Analytics data is 360 days, but session details and transcript information are only the last 28 days.** Same page, two different windows. [SRC: ANLY-084] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview

**15. 7 MB or 200 MB for SharePoint generative answers?**

**Both, depending on licensing.** 7 MB **without** a Microsoft 365 Copilot license in the tenant (semantic search grounding off), 200 MB **with** one (grounding on).  -- Neither number is wrong. The question is really about licensing. [SRC: KNOW-054, KNOW-055] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

**16. SharePoint files: 5 MB or 200 MB?**

**5 MB is the SharePoint MCP server limit** for file upload and download. **The agent-level SharePoint knowledge source is governed by the 7 MB / 200 MB licensing rule instead.** Same product, two different mechanisms.  -- Ask which mechanism the scenario is using before picking a number. [SRC: MCP-054, KNOW-054, KNOW-055] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-onedrive-tools https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response

**17. Active user metrics show nothing at all. What is the most likely cause?**

**The agent is not set to require authentication.** Active user metrics are only supported when the agent is set to require authentication, under Settings > Authentication.  -- A missing metric is often an identity decision, not an analytics bug. (The *why* - that these metrics count unique users - is not in the supplied corpus, so it is not claimed here.) [SRC: ANLY-087, TOPC-022] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-review-activity

**18. Which knowledge-source operation cannot be undone?**

**Deleting a knowledge source is permanent and cannot be undone.**  -- Delete is the destructive word. Check twice before using it on a source you may need again. [SRC: PRMT-054] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-documents

**19. 16 MB, 20 MB, 25 MB or 512 MB - which prompt limit is which?**

**16 MB** per code interpreter file (max 10 files). **20 MB** for a document layout. **25 MB** total for all image or document inputs to a prompt. **512 MB** for a file uploaded as generative answers knowledge.  -- Four ceilings, four different operations. The operation names the number. [SRC: PRMT-025, PRMT-016, PRMT-077, PRMT-051] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-code-interpreter-structured-data https://learn.microsoft.com/en-us/microsoft-copilot-studio/generate-document-output-prompt https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-inputs-prompt https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-documents

**20. 500 files, 500 files per group, or 25 groups - how do the knowledge counts fit together?**

**An agent can include up to 500 files as knowledge.** A **file group** holds up to **500 files** each up to **512 MB**, and you can create up to **25 file groups per agent**.  -- The group cap does not multiply the agent cap - 500 files is still the agent ceiling. [SRC: KNOW-073, KNOW-134, KNOW-133] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-file-groups

**21. An import fails on missing components. What is the documented fix?**

Open the command menu, choose **Advanced > Add required objects**. An import fails if required components are neither in the solution nor already present in the target.  -- Repeat it after adding new components, before every export. [SRC: TRBL-054, TRBL-057, ALM-230] | https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/lifecycle-management/agent-publish-missing-dependencies https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/lifecycle-management/agents-solution-mapping https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export

**22. You published a fix. Why is a user still seeing the old behavior?**

**Published content only reaches users on a new session.** Existing conversations deliberately keep running the previous version so they are not disrupted mid-chat. [SRC: CHAN-020, CHAN-031] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-facebook https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels

**23. 28, 29, 89, 360 - which retention window is which?**

**28 days:** the **Monitor page** stores user queries and agent responses. Also session details and transcripts, computer use logs, and **user memory**. **29 days:** the window you can **download conversation transcripts** for. **89 days:** **agent evaluation test results** - export to keep them longer. **360 days:** **analytics** events.  -- 28 and 29 are DIFFERENT facts about DIFFERENT things, not a rounding error. Storage is 28; the download window is 29. [SRC: ANLY-025, MISC-011, ANLY-055, ANLY-027] | https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-drill-down-lists https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/analytics-overview https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness

---

# Anki deck (tagged) (183 cards)

*Source: `Flashcards/ab-620-flashcards.csv`*

**1. How many objectives are in Test and manage, and what is each worth?**

7 objectives, ~3.21% each - the DENSEST domain on the exam, about 2.2x a Plan objective.

**2. Which evaluation test methods work with a CONVERSATION test set?**

Only three: General quality, Keyword match, and Custom.

**3. Which evaluation test methods are SINGLE-RESPONSE only?**

Compare meaning, Tool use, Text similarity, Exact match.

**4. Which test method measures whether the expected tool fired?**

Tool use. Pass/fail, against expected capabilities. Single-response only.

**5. Max test cases in a conversation test set?**

20.

**6. Max messages per conversation test case?**

12 - which is 6 question-and-answer pairs.

**7. How long are evaluation results kept in Copilot Studio?**

89 days. Export to CSV to keep them longer.

**8. What identity does an evaluation run under?**

A selected user profile. If the agent's knowledge or tools need particular auth, the test account must have it.

**9. Three ways to build a conversation test set?**

Quick conversation set (auto-generates 10 short ones), full conversation set (from knowledge or topics), or convert your latest test chat.

**10. Evaluation shows a CONSISTENT error. What kind of cause?**

Something specific - one action, one flow, or one topic.

**11. Evaluation shows an INCONSISTENT error. What kind of cause?**

Something broad - the model choice or the orchestration layer.

**12. Agent calls the wrong tool ACROSS many different test cases. Cause?**

Descriptions broadly, or the model. Not one component.

**13. Agent calls the wrong tool for ONE type of case. Cause?**

That specific resource's description.

**14. ONE action fails across otherwise-passing cases. Where do you look?**

The flow itself - timeout, missing input, or a downed service.

**15. Unmanaged solution: editable? Used where?**

Editable. Development only.

**16. Managed solution: editable? Used where?**

NOT editable. Test and production.

**17. Can you convert a managed solution to unmanaged?**

No. Conversion does not exist in either direction. Managed or unmanaged is chosen AT EXPORT.

**18. For the exam, how should solutions be exported?**

As managed.

**19. Non-secret environment variable value changes. What must happen?**

The agent must be REPUBLISHED before it sees the new value.

**20. Secret environment variable value changes. What must happen?**

Nothing. Secret variables are read at RUNTIME.

**21. Why do environment variables exist at all?**

A managed solution is uneditable, so per-environment values must change from OUTSIDE the agent.

**22. What do Power Platform Pipelines deploy?**

The solution AND its configuration - connections, connection references, and environment variables.

**23. What does a pipeline do before it deploys?**

Prevalidates against the target environment, catching missing dependencies BEFORE deployment.

**24. How do you secure production deployments in pipelines?**

Approval-based delegated deployments.

**25. Can a developer run a pipeline from a script?**

Yes - the Power Platform CLI, the pac pipeline command group.

**26. A parent agent is added to a solution. What happens to its child agents?**

They travel with it automatically - child agents have no independent publishing lifecycle.

**27. Analytics data retention vs transcript retention?**

Analytics data 360 days. Session details and transcripts only 28 days.

**28. Does Copilot Studio analytics include test panel activity?**

No. It excludes everything done in the test panel.

**29. What gates daily/monthly active user metrics?**

The agent must be set to REQUIRE AUTHENTICATION.

**30. Roles needed to give someone analytics-only access WITH transcripts?**

Analytics Viewer sharing role PLUS Bot Transcript Viewer security role. Individuals only - never groups.

**31. Conversation timeout in analytics? And on Telephony?**

30 minutes of inactivity. Telephony: 3 minutes after an End Conversation event.

**32. How many objectives in Integrate and extend, and what is each worth?**

15 objectives, ~2.83% each. The heaviest domain by percentage at 40-45%.

**33. Copilot connector: what pattern, and where does data live?**

Search-and-index. Content is indexed INTO Microsoft Graph.

**34. Copilot connector: citations?**

Yes - it can cite specific indexed items.

**35. Where are Copilot connectors configured, and by whom?**

The Microsoft 365 admin center, by a tenant admin - before a maker can use one.

**36. Publishing a Copilot connector agent to an authenticated channel needs what?**

The ExternalItem.Read.All Graph scope, added MANUALLY in the channel's auth settings. Without it the agent returns NOTHING at runtime.

**37. Power Platform connector as knowledge: what pattern?**

Real-time API call at runtime. NOTHING is replicated into Microsoft 365.

**38. Real-time connector: citations?**

No. There is no indexed document to cite.

**39. Real-time connectors index what?**

Metadata only - never the payload data itself.

**40. Real-time connectors work with what kind of data?**

Structured data - rows and columns. Not PDF paragraphs.

**41. Cue words meaning 'real-time Power Platform connector'?**

Freshness critical. Must not be replicated. Cannot leave the source for compliance.

**42. Cue words meaning 'Copilot connector'?**

Needs citations. Stable reference material. Non-Microsoft content needing semantic search.

**43. When do you choose Azure AI Search?**

The organization manages its OWN vector index and embedding pipeline. Outside Graph, inside Azure.

**44. Adding Azure AI Search: the one thing you must never do?**

Never type the endpoint URL and API key manually. Always use 'create new connection' - manual entry corrupts the environment-level connection for EVERY agent, with no delete button.

**45. Recommended Azure AI Search authentication?**

Microsoft Entra ID integrated - uses the signed-in user's identity, no keys to rotate.

**46. What must happen before a maker connects Azure AI Search behind a private endpoint?**

An admin configures VNet support in the Power Platform admin center FIRST. Infrastructure first, connection second.

**47. What field does Copilot Studio use for an Azure AI Search citation URL?**

metadata_storage_path. If missing, it falls back to any field containing a complete URL.

**48. Semantic ranker - what is the dependency?**

It must be enabled on the Azure AI Search service tier FIRST, before you can configure it in Copilot Studio.

**49. The tool reusability ladder, widest to narrowest?**

Prebuilt connector (tenant) - custom connector (whole Power Platform) - REST API tool (one agent) - HTTP request node (one topic).

**50. When is a custom connector the right choice?**

When MULTIPLE components will call the same API. Reuse is its entire value.

**51. When is a REST API tool the right choice?**

One agent needs it, more than once. No reuse elsewhere.

**52. REST API tool: what spec format, and what is the catch?**

OpenAPI v2 JSON (v3 auto-converts). It was in PREVIEW - not for production - and cannot be shared across Power Platform.

**53. A teammate's custom connector does not appear. Why?**

It has not been shared in Power Apps - make.powerapps.com, Data, Custom connectors, can view or can edit.

**54. Which common connector is premium and needs the licence?**

Microsoft Dataverse.

**55. MCP: what does it expose, and what does it NOT?**

Tools and resources. It does NOT support prompts, which the MCP spec defines.

**56. Can a topic call an MCP server?**

No. Only the orchestrator can invoke MCP tools - generative orchestration only.

**57. Can you edit an MCP tool description in Copilot Studio?**

No. Descriptions are server-side and READ-ONLY. Only the server owner can change them.

**58. MCP transport: what is supported, what is dead?**

Streamable HTTP is supported. SSE is deprecated and unsupported after August 2025.

**59. MCP 'allow all' toggle - default and risk?**

ON by default. It grants every tool the server publishes - a least-privilege violation and a cause of orchestration ambiguity.

**60. MCP OAuth subtypes in fallback order?**

Dynamic discovery (fully automatic) - dynamic (you enter URLs) - manual (admin registers the app).

**61. Does the maker embed the secret when configuring MCP API key auth?**

Never. The config holds only the parameter name and location. Each user supplies their own key on first use.

**62. Agent flow timeout?**

TWO MINUTES. CORRECTED from Microsoft Learn - both ingested courses said 100 seconds, which is actually the PROMPT EXECUTION limit, not the flow limit.

**63. How do you handle a flow that cannot finish in two minutes?**

Turn ON Asynchronous response in the Respond to the agent action settings. The flow runs beyond the limit and returns a callback. Requires new infrastructure. NOTE: the courses described a manual job-ID split; Microsoft now has a native toggle.

**64. Five requirements for a flow to be callable from a topic?**

Agent trigger; Respond to the agent action; async response toggled OFF; declared input and output parameters; built as a solution flow.

**65. How are agent flows billed?**

Copilot Studio credits - not per-user Power Automate licensing.

**66. Default HTTP request node timeout?**

30,000 ms - 30 seconds. Adjustable.

**67. Default HTTP request node error behavior, and what you should change it to?**

Default is 'raise an error', which drops the conversation. Change to 'continue on error', capture the status code, and branch on 200.

**68. Where do API keys go in an HTTP request node?**

Environment variables. NEVER hardcoded in headers - any maker can read the canvas.

**69. A2A: where is the agent card published?**

At /.well-known/agent.json - auto-discovered when you paste the endpoint URL.

**70. A2A: what is the unit of work called?**

A task.

**71. A2A: what maintains multi-turn continuity?**

Context IDs.

**72. A2A: what is 'opaque reasoning'?**

The external agent owns all reasoning, execution and security. You cannot see how it reached the answer.

**73. A2A authentication options, and which is a trap?**

None, API key, OAuth 2.0. 'None' is sandbox-only - never production.

**74. MCP vs A2A - who controls the reasoning?**

MCP: you do, choosing tools and synthesizing output. A2A: you hand over execution authority.

**75. A2A vs an HTTP connector - what comes back?**

A2A returns an agent-reasoned response. A connector returns raw data.

**76. The session leak vulnerability?**

Full conversation history is forwarded to connected and A2A agents BY DEFAULT - sensitive data crosses the boundary. Disable context forwarding per connection.

**77. Hard maximum tools per agent under generative orchestration?**

128. Microsoft recommends no more than 25-30 for best results. NOTE: both ingested courses said 30-40 - that was a paraphrase that lost both numbers.

**78. Agent calls the wrong resource. What do you fix FIRST?**

The DESCRIPTION. Instructions second. Never start with the connection or the API.

**79. Child agent: callable by whom? Context? ALM?**

Only its parent. Shares parent context automatically. ALM is COUPLED - ships with the parent.

**80. Connected agent: callable by whom? Context? ALM?**

Many orchestrators. Context must be passed explicitly and can be disabled. INDEPENDENT lifecycle.

**81. When do you choose a child agent?**

One team owns it end to end; no separate publishing; no different auth or model config; not reused elsewhere.

**82. Can a child agent have different authentication from its parent?**

No. It inherits the parent's settings.

**83. Cost and speed difference between child and connected agents?**

Connected agents cost more Copilot credits and are slower - the input is reprocessed and there is an extra network hop.

**84. What does a child agent give you regarding tool limits?**

Its own fresh tool limit, separate from the parent's.

**85. Three prerequisites to connect an existing Copilot Studio agent?**

Same Power Platform environment; at least one PUBLISHED version (drafts are invisible); the owner must enable connections.

**86. Does global admin bypass agent-level sharing?**

No.

**87. The static sync trap?**

Connecting COPIES the target's description locally and never re-syncs. New capabilities exist but are silently never routed to.

**88. Foundry agent built in the legacy Azure AI Studio portal?**

Returns a 404. It must be recreated in the new Microsoft Foundry portal.

**89. What two values connect a Foundry agent?**

The project endpoint URL and the agent ID. A new version means manually updating the agent ID.

**90. Fabric data agent: what does it translate natural language into?**

SQL for lakehouses and warehouses, DAX for Power BI semantic models, KQL for KQL databases - over OneLake.

**91. Fabric data agent capacity requirement?**

F2 or higher, or Power BI Premium P1 or higher.

**92. Fabric data agent security model?**

Enforces the requesting user's own Fabric permissions and respects Purview DLP natively.

**93. Can you reach a Fabric data agent with an agent redirect node?**

No. Generative orchestration ONLY. The description is the only steering wheel.

**94. Routing execution priority, highest to lowest?**

'An activity occurs' triggers - then specific triggers - then 'the agent chooses' (description-based NLU), which fires LAST.

**95. Within the same trigger tier, which agent fires first?**

The older one, unless explicit priority numbers are set.

**96. Three deterministic trigger events worth knowing?**

It's redirected to; a plan completes; the user is inactive for a while.

**97. The orchestrator-bypass bug and its fix?**

If a tool is visible to both parent and child, the parent may fire it and skip the child. Clear 'allow agent to decide dynamically when to use this tool'.

**98. What does an agent redirect node do?**

Unconditional delegation - bypasses NLU entirely and can hand over pre-validated data.

**99. Disable vs delete a child agent?**

Disable preserves configuration and is reversible. DELETING breaks every live redirect node pointing at it.

**100. What setting makes a child agent ask for missing input?**

'Should prompt user' in the advanced input settings.

**101. Four 'after running' options for a child agent?**

Don't respond; generative AI; specific response; adaptive card.

**102. Microsoft's own result from splitting a monolith into child agents?**

61% reduction in response latency and 70% reduction in human escalations.

**103. Connected agents and transcripts?**

They write their OWN separate transcripts. Plan transcript correlation before production.

**104. How many objectives in Plan and configure, and what is each worth?**

22 objectives, ~1.48% each - the WIDEST and THINNEST domain. Timebox it.

**105. End user credentials - when?**

Data permissions are personal; each user must see only their own records. This is the DEFAULT.

**106. Maker-provided credentials - when, and the hard constraint?**

When the back end has no individual user accounts. CANNOT be published to an anonymous channel - the option disappears from the menu.

**107. Why prefer a service account in production?**

A maker-owned agent breaks the moment that person's account is disabled.

**108. What does choosing 'no authentication' cost you?**

It limits which channels you can publish to, including Microsoft 365.

**109. DLP connector classifications, and the mixing rule?**

Business, non-business, blocked. Business and non-business CANNOT be mixed in the same agent - though they can coexist in an environment.

**110. A working agent breaks when one new connector is added. First check?**

A DLP grouping conflict.

**111. Teams with custom Active Directory auth - what breaks?**

SSO is NOT supported for connector tools. Users manually sign in to each connector on first use.

**112. What does the admin setting 'control maker-provided credentials' do?**

Revokes the shared identity and forces every user to authenticate at runtime.

**113. Generative answers node: where is it, and what is its scope?**

Under Advanced in the add-node menu. It is TOPIC-ONLY.

**114. Node-level vs agent-level knowledge sources?**

Node-level sources OVERRIDE agent-level. Agent sources are a fallback used only when the node has none of its own.

**115. Generative answers finds nothing. What happens?**

Returns 'no information found'. It does NOT fall back to general AI knowledge unless you explicitly include it. Add a condition node after.

**116. The rule of three?**

Generative answers custom data uses only the FIRST THREE records - selected BY POSITION, not relevance. Filter and rank upstream.

**117. Required columns for custom data?**

content (the only strictly required one), content location, title.

**118. Custom instruction character limit?**

8,000.

**119. Why does 'be helpful' fail as a custom instruction?**

The model cannot observe a quality it cannot measure. Instructions must describe OBSERVABLE behavior - formal tone, bullet points, do not speculate.

**120. Generative answers vs custom prompt?**

Generative answers SYNTHESIZES from retrieved sources. A custom prompt performs a REASONING TASK on text you supply.

**121. Where do you find Bing search and Power Automate custom data as sources?**

Not in the standard panel - you must open the CLASSIC data pane.

**122. Managed model tiers and billing?**

Mini (basic rate), general (standard), deep (premium). Prompt Builder defaults to GPT-4.1 mini.

**123. Bringing a Foundry model into a prompt - what do you need and what governs it?**

The deployment name and base model name. Governed by Power Platform DLP, and it brings SEPARATE Azure costs.

**124. Adaptive card schema caps by channel?**

Teams and live chat: 1.5. Web: 1.6.

**125. Why is the test pane a bad proxy for Teams?**

It uses the WEB engine and supports 1.6. A card can look perfect there and vanish silently in Teams.

**126. Which action type does the web channel NOT support?**

action.execute. Use action.submit.

**127. Data points per adaptive card?**

3 to 5. More and it becomes unreadable, especially on mobile.

**128. A user closes an adaptive card without submitting. What happens?**

Copilot Studio produces EMPTY variables. Always add a condition node after the card to check the data exists.

**129. Adaptive card input element types to know?**

input.text, input.number, input.date, input.choiceset. Every form needs action.submit.

**130. What do adaptive card element IDs become?**

Topic variables. Leave them as input1 and you get topic.input1 - use descriptive camelCase.

**131. Quick replies vs a question node?**

Quick replies GUIDE and are optional and skippable. A question node CONSTRAINS and blocks until a valid answer.

**132. The quick reply design rule?**

Some channels drop them entirely. NEVER build a flow that requires clicking one - always offer a text path.

**133. Where must images and video for a message node be hosted?**

Publicly accessible URLs. The agent cannot reach internal SharePoint files unless anonymous sharing is on.

**134. Rule for message variations?**

Every variation must state the SAME facts. Different words, never different information.

**135. Computer use in production - machine requirement?**

Bring your own machine, registered in Power Automate. Microsoft-hosted machines are prototyping only.

**136. Computer use default credential mode, and the risk?**

Maker-provided is the DEFAULT. Sharing the agent means others act with the author's access on that machine.

**137. Computer use 'human supervision' - the constraint?**

The reviewer should be the person who RAN it - activity is tied to the initiator, so anyone else cannot see it. No response before the limit STOPS the run.

**138. Where does computer use password entry not work?**

Electron, Java, Unity, games, command-line interfaces, Citrix and other virtualized environments.

**139. What blocks prompt injection in Copilot Studio, by default?**

Built-in runtime protection against UPIA (user prompt injection) and XPIA (cross-domain prompt injection). Agents are secure by default.

**140. External threat detection: when does it fire, and what if it does not answer?**

Before ANY tool invocation. No decision within 1 second = allow by default (configurable to block). Per-environment only - no tenant-wide switch.

**141. Which channels are on by default, and why does it matter?**

Demo website and Custom website. Anyone who knows the agent ID can reach the agent. Turn on Require secured access - it takes up to 2 hours to propagate.

**142. Dataverse tables as a knowledge source require which authentication?**

Authenticate with Microsoft. No authentication and Authenticate manually are NOT supported.

**143. What breaks if an admin blocks maker-provided credentials?**

Every tool needs a live user sign-in, so agents triggered by scheduled or autonomous events FAIL.

**144. Which knowledge sources does generative orchestration NOT support?**

Custom data and Bing Custom Search. To use either, embed it in a generative answers node inside a topic.

**145. Max knowledge objects per agent? Max file size?**

500 knowledge objects. 512 MB per file. A file group holds up to 500 files.

**146. SharePoint list limits as knowledge?**

Up to 10 lists at a time, 120,000 rows total. Over 35,000 rows in one list degrades quality and latency.

**147. Public website knowledge - what is the hidden limit?**

It uses Grounding with Bing. The request including the query cannot exceed 2,048 characters or the search is skipped. Authenticated sites are unsupported.

**148. Teams citation limits?**

20 citations max; title about 80 characters, snippet about 480. Anything beyond is dropped or trimmed.

**149. Connector response size limit?**

500 KB. Exceeding it is a Copilot Studio limit, not the connector's.

**150. Three prerequisites every pipeline environment must meet?**

A Dataverse database; all TARGET environments enabled as managed environments; at least one dev environment and one stage.

**151. Maximum pipeline stages?**

Seven.

**152. Can you deploy straight to production through a pipeline?**

No. Stages must complete in order, and the same solution version deployed to test is what goes to production.

**153. Maximum solution size?**

95 MB.

**154. What happens if you change a solution to managed?**

You can no longer export it. You must create a new solution.

**155. Import order for a solution with custom connectors?**

Custom connectors FIRST, then the connection reference with the agent solution.

**156. Minimum security role to import/export solutions?**

System Customizer.

**157. Secret environment variables - the refinement on 'read at runtime'?**

The dialog runtime caches the value for 5 minutes (failed reads 30 seconds). They also require an Azure Key Vault.

**158. Topic analytics is available for which agents?**

Classic mode ONLY. Generative orchestration uses conversation outcomes and themes instead.

**159. What does themes analysis need before it appears?**

At least 50 questions with generative answers, from 50 different sessions, in the past 7 days.

**160. When is sentiment NOT calculated?**

Sessions with fewer than 2 user messages, or more than 26 total messages.

**161. Transcript record limits?**

Saved after 30 min inactivity, 1 MB per record before splitting, 512 characters per bot response in CSV export, bulk-deleted after 30 days.

**162. Computer use has which hard prerequisite?**

Generative orchestration must be turned on.

**163. How do you restrict what computer use can touch?**

Access control - define the specific URLs and desktop applications it is limited to.

**164. Node name length limit? Agent description limit?**

Node names 500 characters. Agent description 1,024 characters. Icon: PNG under 72 KB, max 192x192.

**165. Default reprompt behavior?**

Repeat up to 2 times. Alternatives are Repeat once and Don't repeat. For an adaptive card, the card is resent each retry.

**166. What does the system fallback topic do?**

Asks the user to rephrase no more than twice, then redirects - which triggers the Escalate system topic.

**167. Errors vs warnings when publishing?**

Errors block publishing and must be fixed. Warnings do not block it.

**168. MCP 'Allow all' toggle - the actual behavior?**

On by default, so all tools are enabled. Turn it off and any NEW tools added to the server arrive disabled.

**169. Prompt input limits for files?**

Under 25 MB total, fewer than 50 pages, 100-second processing cap. PNG/JPG/JPEG/PDF - Office formats only with code interpreter on.

**170. The Conversational boosting system topic - what is it?**

Auto-created with every agent. It holds a generative answers node, and every agent-level knowledge source is added to it.

**171. Agent flow default timeout - the CORRECTED figure?**

TWO MINUTES. Microsoft states it three times across two pages. The 100 seconds both courses cited is the PROMPT EXECUTION limit, not the flow limit.

**172. How does a flow run longer than two minutes now?**

Turn on Asynchronous response in the Respond to the agent action settings. The flow continues and returns a callback when done. Requires an environment on the new infrastructure.

**173. Async flow callbacks - which channels?**

Fully supported in Microsoft Teams. NOT supported for Microsoft 365 Copilot or telephony. Other channels may work but are not formally tested.

**174. How do you make an agent respond IMMEDIATELY after triggering a flow?**

Remove the Respond to the agent action from the flow entirely.

**175. Express mode flow limits?**

Must complete in two minutes. Max 100 actions. Apply-to-each max 100 items, do-until max 100 iterations. Variable content 1,024 characters. Message size 64 KB per action. No Delay or webhook actions.

**176. Which managed model is the DEFAULT for prompts, and at what rate?**

GPT-4.1 mini. Basic rate. Mini category, 128K context.

**177. Which managed models are in the DEEP category?**

GPT-5 reasoning and GPT-5.2 reasoning (both Premium, 400K context), and Claude Opus 4.6 (Premium, 200K).

**178. Is GPT-5 usable in prompts?**

YES as a MANAGED model - GPT-5 chat (General) and GPT-5 reasoning (Deep). NO as a bring-your-own model - the entire GPT-5 family is unsupported for BYO. Not a contradiction: two different paths.

**179. Temperature setting - range, default, and the exception?**

0 to 1, default 0. The slider is DISABLED for the GPT-5 reasoning model.

**180. Content moderation slider availability?**

Managed models ONLY. Unavailable for Anthropic or Azure AI Foundry models. Default level is Moderate, range Low to High.

**181. Which model did Microsoft flag as less aligned?**

Grok 4.1 Fast (Non-Reasoning). Microsoft's own safety and responsible AI evaluations found it less aligned than other models evaluated, with higher risks.

**182. Bring-your-own-model endpoint - the gotcha?**

Must be the CHAT COMPLETIONS endpoint. The Responses API endpoint ending /openai/v1/responses fails with 'Resource not found'.

**183. Can a citation be used as input to another tool?**

No. Citations returned from a knowledge source cannot be used as inputs to other tools or actions.
