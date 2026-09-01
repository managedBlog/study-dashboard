# AI Agent Builder Associate — Question Bank

> Certification-level study pack for AB-620 (AI Agent Builder Associate), sourced from Microsoft Learn Docs learning paths and modules, including official module assessments cited as such. Covers Plan and configure agent solutions, Integrate and extend agents in Copilot Studio, and Test and manage agents.

### Q001 — Agent flows: deterministic vs. AI reasoning
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**According to Copilot Studio, what makes agent flows reliable for automating business processes compared to AI-driven agent reasoning?**

- **A.** They use larger context windows
- **B.** They are deterministic — the same inputs always produce the same outputs
- **C.** They rely on human review of every step
- **D.** They automatically retrain the underlying model

**Answer:** B
**Confidence:** Certain

The unit explicitly defines agent flows as deterministic and event-driven, meaning the same inputs always produce the same outputs, unlike open-ended AI reasoning.

**Source:** Automate workflows using agent flows in Copilot Studio — Understand agent flows in Copilot Studio

### Q002 — Choosing the Automated trigger
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A maker wants a flow that starts automatically whenever a new record is created in Dataverse, without anyone manually starting it.

**Which trigger type should a maker use if the flow must start automatically whenever a new record is created in Dataverse, without anyone manually starting it?**

- **A.** Instant
- **B.** Scheduled
- **C.** Automated
- **D.** Manual

**Answer:** C
**Confidence:** Certain

Automated triggers run in response to an event in a connected system (such as a record being created), which matches this scenario; Instant requires a manual/user-initiated start and Scheduled runs on a timer.

**Source:** Automate workflows using agent flows in Copilot Studio — Understand agent flows in Copilot Studio

### Q003 — Good candidates for agent flow automation
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which four characteristics indicate that a business process is a good candidate for an agent flow?**

- **A.** Creative, ambiguous, judgment-based, rare
- **B.** Repetitive, multi-step, predictable, event-driven
- **C.** Manual, unstructured, infrequent, discretionary
- **D.** Confidential, high-risk, undocumented, ad hoc

**Answer:** B
**Confidence:** Certain

The unit lists repetitive, multi-step, predictable, and event-driven as the defining traits of processes well-suited to agent flow automation.

**Source:** Automate workflows using agent flows in Copilot Studio — Identify agent flow automation scenarios

### Q004 — Processes requiring heavy judgment
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A process requires significant judgment where the right action depends on hard-to-capture context.

**A process requires significant judgment where the right action depends on hard-to-capture context. Is this process a good fit for an agent flow, per this unit's guidance?**

- **A.** Yes, because agent flows can weigh context the same way AI reasoning does
- **B.** No — agent flows follow a defined sequence every time, so a more flexible approach may fit better
- **C.** Yes, because agent flows always include a human-in-the-loop step
- **D.** No — agent flows can only be triggered on a schedule

**Answer:** B
**Confidence:** Derived

Because agent flows are deterministic and follow a defined sequence, the unit implies that highly judgment-dependent processes are better suited to AI-driven reasoning rather than a fixed agent flow.

**Source:** Automate workflows using agent flows in Copilot Studio — Identify agent flow automation scenarios

### Q005 — Two ways to create an agent flow
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What are the two ways to create an agent flow in Copilot Studio?**

- **A.** Natural language and the visual designer
- **B.** SQL scripting and a REST API
- **C.** Power BI reports and Excel macros
- **D.** Email templates and web forms

**Answer:** A
**Confidence:** Certain

The unit describes creating agent flows either by describing them in natural language or by building them directly in the visual designer.

**Source:** Automate workflows using agent flows in Copilot Studio — Create an agent flow

### Q006 — Flow name used by the agent orchestrator
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A maker adds a flow as a tool to a Copilot Studio agent but leaves it with its default generated name.

**A maker adds a flow as a tool to a Copilot Studio agent but leaves it with its default generated name. What risk does this introduce?**

- **A.** The flow will fail to publish
- **B.** The agent orchestrator may not accurately route requests to the flow, since it uses the flow's name to decide when to invoke it
- **C.** The flow will run twice for every trigger event
- **D.** Copilot Credits usage will double

**Answer:** B
**Confidence:** Certain

The unit states that when a flow is added as a tool, its name becomes the default tool name and the orchestrator uses that name to decide when to invoke the flow — an unclear name directly hurts routing accuracy.

**Source:** Automate workflows using agent flows in Copilot Studio — Create an agent flow

### Q007 — Action card Settings tab
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which action-card tab controls settings such as timeout duration, retry policy, and run-after conditions?**

- **A.** Parameters
- **B.** Settings
- **C.** Overview
- **D.** Test

**Answer:** B
**Confidence:** Certain

Each action card has a Parameters tab (for inputs) and a Settings tab, where retry policy, timeout, and run-after configuration live.

**Source:** Automate workflows using agent flows in Copilot Studio — Configure triggers, actions, and connectors

### Q008 — Renaming actions for clarity
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A production flow has five actions that all retain their connector-default names, such as 'Get user profile (V2)'.

**A production flow has five actions that all retain their connector-default names (such as 'Get user profile (V2)'). What problem does this cause later when configuring a condition?**

- **A.** The flow checker will block publishing
- **B.** It becomes difficult to identify which output belongs to which step in the dynamic content picker
- **C.** The action can no longer be renamed
- **D.** Connectors will lose their authentication

**Answer:** B
**Confidence:** Derived

The unit recommends renaming actions to be descriptive because default names make it hard to tell outputs apart in the dynamic content picker when building later steps like conditions.

**Source:** Automate workflows using agent flows in Copilot Studio — Configure triggers, actions, and connectors

### Q009 — Apply to each vs. Until
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which loop type should be used to process every item in an array returned by a 'List rows' action?**

- **A.** Until
- **B.** Apply to each
- **C.** Condition
- **D.** Switch

**Answer:** B
**Confidence:** Certain

'Apply to each' iterates over every item in a collection/array, while 'Until' repeats until a condition becomes true — the array-processing scenario calls for Apply to each.

**Source:** Automate workflows using agent flows in Copilot Studio — Control agent flow logic

### Q010 — Risk of an unbounded Until loop
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

> An architect configures an Until loop to poll a status field but forgets to set a maximum iteration count or time limit.

**An architect configures an Until loop to poll a status field but does not set a maximum iteration count or timeout. What is the risk?**

- **A.** The flow will fail the flow checker immediately
- **B.** The loop can run indefinitely and consume resources
- **C.** The loop automatically stops after 10 iterations by default with no configuration needed
- **D.** The flow will silently convert to a scheduled trigger

**Answer:** B
**Confidence:** Derived

Because Until loops repeat until a condition is met, failing to bound them with a max count/timeout can let them run indefinitely, wasting resources — this is why the unit stresses configuring loop limits.

**Source:** Automate workflows using agent flows in Copilot Studio — Control agent flow logic

### Q011 — Inspecting a specific run's details
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A maker wants to check whether one specific run from yesterday completed without errors and inspect its step-level inputs/outputs.

**A maker wants to check whether one specific flow run from yesterday completed without errors and inspect its step-level inputs and outputs. Which feature should they use?**

- **A.** The flow checker
- **B.** The Analytics tab
- **C.** The Activity tab
- **D.** Version history

**Answer:** C
**Confidence:** Certain

The Activity tab shows individual run results with timestamps and per-step detail, while Analytics shows aggregate trends and the flow checker validates design-time issues.

**Source:** Automate workflows using agent flows in Copilot Studio — Manage and monitor agent flows

### Q012 — Architect's role in AI transformation
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What is the primary role architects play in AI transformation, according to this unit?**

- **A.** Writing all AI model code personally
- **B.** Bridging business strategy and technical implementation
- **C.** Approving IT support tickets
- **D.** Designing marketing campaigns

**Answer:** B
**Confidence:** Certain

The unit frames the architect's role explicitly as bridging business strategy and technical implementation across strategic alignment, solution design, governance, and scalability.

**Source:** Introduction to agentic AI business solutions — Drive AI transformation with architect strategies

### Q013 — AI transformation as a strategic shift
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> An organization's AI initiative funds only technology upgrades but ignores process and culture change.

**An organization's AI initiative funds only technology upgrades but ignores process and culture change. What does this unit say is missing from that approach?**

- **A.** Nothing — a technology upgrade is the only requirement
- **B.** Recognition that AI transformation is a strategic shift impacting business processes, people, and organizational culture
- **C.** A dedicated marketing budget
- **D.** A new office location

**Answer:** B
**Confidence:** Derived

The unit describes AI transformation as a strategic shift that affects business processes, people, and culture — not merely a technology purchase.

**Source:** Introduction to agentic AI business solutions — Drive AI transformation with architect strategies

### Q014 — Azure AI Foundry purpose
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which Microsoft platform is described as designed to develop, deploy, and manage AI applications and agents?**

- **A.** Azure AI Foundry
- **B.** Azure Machine Learning Studio
- **C.** Cognitive Services
- **D.** Power BI

**Answer:** A
**Confidence:** Certain

The unit describes Azure AI Foundry as the platform for developing, deploying, and managing AI applications and agents.

**Source:** Introduction to agentic AI business solutions — Explore Microsoft AI technologies for business

### Q015 — Cognitive Services prebuilt APIs
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which Azure AI service category provides prebuilt APIs for Vision, Speech, Language, and Decision capabilities?**

- **A.** Azure Machine Learning
- **B.** Cognitive Services
- **C.** Azure OpenAI Service
- **D.** Copilot Studio

**Answer:** B
**Confidence:** Certain

Cognitive Services is described in this unit as offering prebuilt APIs across categories such as Vision, Speech, Language, and Decision.

**Source:** Introduction to agentic AI business solutions — Explore Microsoft AI technologies for business

### Q016 — Responsible AI principle: Fairness
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which of the following is one of the six Responsible AI principles this unit references when implementing AI responsibly?**

- **A.** Fairness
- **B.** Profitability
- **C.** Popularity
- **D.** Automation

**Answer:** A
**Confidence:** Certain

Fairness is one of the six Responsible AI principles the unit lists as guiding responsible implementation of AI technologies.

**Source:** Introduction to agentic AI business solutions — Identify Microsoft AI technologies for business solutions

### Q017 — Copilot solutions for productivity
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A team wants to unlock productivity gains by automating repetitive tasks and generating content or insights using generative AI embedded in Microsoft 365 and Dynamics 365.

**A team wants to automate repetitive tasks and generate content or insights using generative AI embedded in Microsoft 365 and Dynamics 365. What is this capability called in this unit?**

- **A.** Cognitive Services
- **B.** Copilot solutions
- **C.** Azure Machine Learning Studio
- **D.** Azure landing zones

**Answer:** B
**Confidence:** Certain

The unit identifies Copilot solutions as the generative-AI-powered productivity capabilities embedded across Microsoft 365 and Dynamics 365.

**Source:** Introduction to agentic AI business solutions — Identify Microsoft AI technologies for business solutions

### Q018 — Benefit of OOB AI agent resources
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What is a key benefit of using out-of-the-box (OOB) AI agent resources, according to this unit?**

- **A.** They eliminate the need for any governance
- **B.** They reduce development time and help ensure compliance with best practices
- **C.** They require custom model training for every use case
- **D.** They can only be used outside Microsoft platforms

**Answer:** B
**Confidence:** Certain

The unit states OOB agent resources reduce development time while promoting adherence to Microsoft best practices, including governance.

**Source:** Introduction to agentic AI business solutions — Identify out-of-box Microsoft AI agent resources for business solutions

### Q019 — Scenario Library resource
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which resource category provides ready-to-use templates for creating custom agents along with best-practice adoption guides?**

- **A.** Scenario Library
- **B.** Azure Machine Learning
- **C.** Cognitive Services
- **D.** Azure OpenAI Service

**Answer:** A
**Confidence:** Derived

The unit lists templates and scenario libraries as part of the OOB agent resources architects can draw on, alongside prebuilt agents and AI tools/practices.

**Source:** Introduction to agentic AI business solutions — Identify out-of-box Microsoft AI agent resources for business solutions

### Q020 — OOB agents and compliance
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which benefit of out-of-the-box AI agents is described as helping organizations align with Microsoft's Responsible AI standards?**

- **A.** Faster deployment
- **B.** Scalability
- **C.** Compliance
- **D.** Cost elimination

**Answer:** C
**Confidence:** Certain

The unit lists compliance — alignment with Responsible AI and Microsoft standards — as one of the three benefits of OOB AI agents, alongside faster deployment and scalability.

**Source:** Introduction to agentic AI business solutions — Identify out-of-box Microsoft AI agents for business

### Q021 — Starting point for adopting prebuilt agents
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A business wants to quickly deploy a customer-service agent without building from scratch, using prebuilt agents in Copilot Studio integrated with Dynamics 365.

**A business wants to quickly deploy a customer-service agent using prebuilt agents in Copilot Studio integrated with Dynamics 365. Which best practice should they follow first, per this unit?**

- **A.** Start with business outcomes before selecting tools
- **B.** Build a custom small language model immediately
- **C.** Disable Responsible AI principles to move faster
- **D.** Avoid using Azure AI Foundry for scalability

**Answer:** A
**Confidence:** Derived

Consistent with the module's broader guidance, this unit recommends grounding agent adoption in measurable business outcomes before selecting specific prebuilt-agent tooling.

**Source:** Introduction to agentic AI business solutions — Identify out-of-box Microsoft AI agents for business

### Q022 — Agents in task automation
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**According to this unit, what is one key capability of agents in task automation?**

- **A.** Drafting documents, emails, or responses based on context
- **B.** Replacing all human decision-making entirely
- **C.** Guaranteeing zero errors in every process
- **D.** Eliminating the need for any supporting tools

**Answer:** A
**Confidence:** Certain

The unit lists drafting content such as documents, emails, and responses based on context as a task-automation capability of agents.

**Source:** Analyze requirements for AI-powered business solutions — Assess the use of agents in task automation, data analytics, and decision-making

### Q023 — Agents in data analytics
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A manager wants an agent to help interpret dashboards and suggest next-step actions without requiring advanced analytics skills.

**A manager wants an agent to help interpret dashboards and suggest next-step actions without requiring advanced analytics skills. Which agent capability category does this best match?**

- **A.** Task automation
- **B.** Data analytics
- **C.** Decision-making support
- **D.** Knowledge retrieval only

**Answer:** B
**Confidence:** Derived

This scenario centers on interpreting and generating insight from data, which the unit categorizes as agents' data analytics capability.

**Source:** Analyze requirements for AI-powered business solutions — Assess the use of agents in task automation, data analytics, and decision-making

### Q024 — Grounding data dimension: relevance
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which grounding data quality dimension ensures an AI agent surfaces content aligned with the user's scenario, workflow, or business domain rather than merely similar-sounding content?**

- **A.** Accuracy
- **B.** Relevance
- **C.** Timeliness
- **D.** Cleanliness

**Answer:** B
**Confidence:** Certain

Relevance is defined in this unit as ensuring grounding content matches the user's actual scenario and business context, not just superficial similarity.

**Source:** Analyze requirements for AI-powered business solutions — Review data for grounding accuracy, relevance, timeliness, cleanliness, and availability

### Q025 — Grounding data dimension: availability
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> An AI agent can only ground responses using content stored in SharePoint/OneDrive that is properly indexed and to which the user has access.

**An AI agent can only ground responses using content stored in SharePoint or OneDrive that is properly indexed and to which the current user has access. Which grounding dimension does this describe?**

- **A.** Cleanliness
- **B.** Timeliness
- **C.** Availability
- **D.** Accuracy

**Answer:** C
**Confidence:** Certain

Availability covers whether content is indexed and accessible to the requesting user — this unit ties it directly to permissions enforced through the Copilot Retrieval API.

**Source:** Analyze requirements for AI-powered business solutions — Review data for grounding accuracy, relevance, timeliness, cleanliness, and availability

### Q026 — What a RAG pipeline handles
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What does a retrieval-augmented generation (RAG) pipeline handle, according to this unit?**

- **A.** Only prompt writing
- **B.** Data ingestion, cleaning, chunking, embedding, indexing, retrieval, prompt assembly, orchestration, and monitoring
- **C.** Only model fine-tuning
- **D.** Only user authentication

**Answer:** B
**Confidence:** Certain

The unit describes a RAG pipeline as spanning the full data lifecycle from ingestion through retrieval, prompt assembly, orchestration, and monitoring.

**Source:** Analyze requirements for AI-powered business solutions — Organize business solution data for AI systems

### Q027 — Azure Data Estate intelligence layer
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**Which Azure component is described as providing the 'intelligence layer' for grounding, retrieval, and semantic search in the Azure Data Estate for AI?**

- **A.** Operational databases
- **B.** Azure AI Search (semantic ranking, embeddings, vector search)
- **C.** Analytical stores (lakehouse/warehouse)
- **D.** AI apps and agents

**Answer:** B
**Confidence:** Certain

The unit places Azure AI Search, with its semantic ranking, embeddings, and vector search, at the intelligence layer that powers grounding and retrieval for AI systems.

**Source:** Analyze requirements for AI-powered business solutions — Organize business solution data for AI systems

### Q028 — Centralizing scattered data
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> An organization stores data in scattered silos across apps, logs, CRM, and ERP systems, making it hard for Copilot and custom agents to consume reliably.

**An organization's data is scattered across apps, logs, CRM, and ERP systems, making it hard for Copilot and custom agents to consume reliably. Which best practice from this unit directly addresses this?**

- **A.** Centralize data using Azure, Dataverse, or Microsoft Fabric
- **B.** Disable semantic indexing to reduce cost
- **C.** Store all data only in RAG pipeline logs
- **D.** Avoid using Microsoft Purview for governance

**Answer:** A
**Confidence:** Certain

This unit recommends centralizing scattered business data using platforms such as Azure, Dataverse, or Microsoft Fabric so AI systems can consume it reliably.

**Source:** Analyze requirements for AI-powered business solutions — Organize business solution data for AI systems

### Q029 — CAF phase mapped to agent planning
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which Cloud Adoption Framework (CAF) AI adoption phase pairs with 'Plan agents' in the agent lifecycle to define readiness criteria such as data availability, governance readiness, identity model, and connectors?**

- **A.** AI Strategy
- **B.** AI Plan
- **C.** AI Ready
- **D.** AI Manage

**Answer:** B
**Confidence:** Certain

The unit maps the CAF Plan phase to the 'Plan agents' lifecycle stage, where readiness criteria like data availability, governance readiness, identity model, and required connectors are defined.

**Source:** Design overall AI strategy for business solutions — Implement AI adoption process with Azure

### Q030 — Governance after CAF AI Ready phase
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

> An organization has just completed the CAF AI Ready phase (landing zones, policies, and data access established) and is preparing to scale agent development across teams.

**After landing zones, policies, and data access are established in the CAF AI Ready phase, what governance step reduces the risk of uncontrolled agent proliferation before agents are built?**

- **A.** Immediately connect every line-of-business system to a new agent
- **B.** Establish agent governance — defined roles, standards, and a development process — across teams
- **C.** Purchase additional GPU capacity
- **D.** Skip governance and monitor issues after production release

**Answer:** B
**Confidence:** Derived

The unit warns that without established agent governance (roles, standards, development process) following the Ready phase, organizations risk agent sprawl and inconsistent security posture.

**Source:** Design overall AI strategy for business solutions — Implement AI adoption process with Azure

### Q031 — SaaS agent first principle
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Per the 'SaaS agent first' principle in this unit's technology decision framework, what is the first question an architect should ask?**

- **A.** Does a SaaS agent meet the functional requirements?
- **B.** Is GPU capacity available?
- **C.** Does the team prefer Python or C#?
- **D.** What is the marketing budget?

**Answer:** A
**Confidence:** Derived

The 'SaaS agent first' principle directs architects to first check whether a prebuilt SaaS agent satisfies requirements before considering low-code or pro-code alternatives.

**Source:** Design overall AI strategy for business solutions — Design AI agents for business solutions

### Q032 — Choosing Copilot Studio for a Dynamics scenario
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A team needs fast deployment, direct integration with Dynamics 365 apps, and business-analyst-driven customization for a retrieval and task agent.

**A team needs fast deployment, direct integration with Dynamics 365 apps, and business-analyst-driven customization for a retrieval-and-task agent. Which platform best fits per the agent architecture comparison?**

- **A.** GPUs and containers
- **B.** Microsoft Foundry
- **C.** Copilot Studio
- **D.** Azure Machine Learning Studio

**Answer:** C
**Confidence:** Certain

Copilot Studio is positioned in this unit's comparison as the low-code option ideal for business-analyst customization and native Dynamics 365 integration for retrieval/task agents.

**Source:** Design overall AI strategy for business solutions — Design AI agents for business solutions

### Q033 — Handoff orchestration pattern
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which orchestration pattern transfers context and control to a specialist agent (or a human) when a threshold or rule triggers escalation?**

- **A.** Sequential
- **B.** Concurrent
- **C.** Handoff
- **D.** Group chat

**Answer:** C
**Confidence:** Certain

The Handoff pattern is defined in this unit as transferring context and control to another agent or human once an escalation condition is met.

**Source:** Design overall AI strategy for business solutions — Design a multi-agent solution

### Q034 — When to choose a multi-agent architecture
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

> A solution must cross security/compliance boundaries (strict data classifications, separation of duties) and multiple teams own distinct knowledge domains with different release cycles.

**A solution must cross strict security/compliance boundaries and multiple teams own distinct knowledge domains with different release cycles. According to this unit's decision framework, which architecture should be chosen?**

- **A.** A single agent with persona switching
- **B.** A multi-agent architecture
- **C.** A single agent with a larger context window
- **D.** A single agent using improved retrieval only

**Answer:** B
**Confidence:** Certain

Crossing security/compliance boundaries and needing separately owned, independently released knowledge domains are exactly the complexity drivers the unit says justify a multi-agent architecture.

**Source:** Design overall AI strategy for business solutions — Design a multi-agent solution

### Q035 — HR policy assistant use case
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> Employees frequently ask HR policy questions, consuming HR staff time.

**Employees frequently ask HR policy questions, consuming HR staff time. Per this unit's use-case blueprint, what should an HR policy assistant agent do?**

- **A.** Retrieve relevant policy information, summarize it, and provide a clear response
- **B.** Automatically approve all HR requests without review
- **C.** Replace the HR department entirely
- **D.** Only respond in a scheduled weekly digest

**Answer:** A
**Confidence:** Certain

This unit's use-case pattern for a prebuilt Copilot agent handling policy questions is to retrieve, summarize, and respond clearly to reduce repetitive HR staff workload.

**Source:** Design overall AI strategy for business solutions — Develop use cases for prebuilt Microsoft 365 Copilot agents

### Q036 — Copilot Studio safety constraints
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which platform's key constraints include built-in safety filters that restrict unsafe outputs, and execution within Microsoft's secure SaaS boundary?**

- **A.** Microsoft Foundry
- **B.** Copilot Studio
- **C.** GPUs and containers
- **D.** Custom-hosted open-source models

**Answer:** B
**Confidence:** Certain

This unit describes Copilot Studio as constrained by built-in safety filters and Microsoft's secure SaaS boundary, distinguishing it from more flexible pro-code options.

**Source:** Design overall AI strategy for business solutions — Define solution rules and constraints for AI components

### Q037 — Behavioral rules / behavior envelopes
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> An architect is defining behavior envelopes for an agent and wants to explicitly state what the agent may and may not do.

**An architect defines what an agent may and may not do — such as 'Agent may summarize' and 'Agent may not execute financial transactions.' What category of solution rule is this?**

- **A.** Data access rules
- **B.** Behavioral rules / behavior envelopes
- **C.** Networking constraints
- **D.** Environment rules

**Answer:** B
**Confidence:** Certain

The unit defines behavioral rules (behavior envelopes) as the explicit statements of allowed and disallowed agent actions.

**Source:** Design overall AI strategy for business solutions — Define solution rules and constraints for AI components

### Q038 — Generative orchestration knowledge source limit
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions (inferred) · Difficulty: Hard*

**In generative orchestration mode, how many knowledge sources can Copilot Studio search and filter with GPT-based relevance for a single agent response?**

- **A.** Up to 5
- **B.** Up to 10
- **C.** Up to 25
- **D.** Unlimited

**Answer:** C
**Confidence:** Certain

This unit states generative orchestration can search and rank up to 25 knowledge sources using GPT-based relevance filtering.

**Source:** Design overall AI strategy for business solutions — Determine generative AI knowledge sources for agents built in Copilot Studio

### Q039 — Unstructured source concurrency limit vs. total object cap
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions (inferred) · Difficulty: Hard*

**What is the maximum number of unstructured knowledge sources that can be used simultaneously in retrieval for a single agent, as distinct from the overall per-agent knowledge object cap?**

- **A.** 5
- **B.** 25
- **C.** 500
- **D.** 10

**Answer:** A
**Confidence:** Certain

The unit distinguishes the 500-object total limit per agent from the tighter constraint that only up to 5 unstructured sources can be used simultaneously during retrieval.

**Source:** Design overall AI strategy for business solutions — Determine generative AI knowledge sources for agents built in Copilot Studio

### Q040 — Custom agent vs. extending Copilot
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Per this unit's decision framework, which scenario type is recommended to use a custom agent rather than extending Microsoft 365 Copilot?**

- **A.** Simple retrieval or summarization
- **B.** Productivity-only context
- **C.** A complex, multi-step workflow
- **D.** Standard calendar/email actions

**Answer:** C
**Confidence:** Certain

The unit's decision framework recommends a custom agent when the scenario requires complex, multi-step workflows beyond what a Copilot extension is designed for.

**Source:** Design overall AI strategy for business solutions — Determine when to build custom agents or extend Microsoft 365 Copilot

### Q041 — Signals that custom modeling is justified
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

> An organization finds that despite prompt engineering, retrieval tuning, and fine-tuning, off-the-shelf models still show persistent low precision/recall and a high business cost of wrong answers.

**An organization finds that despite prompt engineering, retrieval tuning, and fine-tuning, off-the-shelf models still show persistent low precision/recall and a high business cost of wrong answers. What does this unit say this indicates?**

- **A.** Custom modeling may be justified
- **B.** The organization should abandon AI entirely
- **C.** They should switch to a smaller, less capable model
- **D.** No further evaluation is needed

**Answer:** A
**Confidence:** Derived

The unit frames persistent accuracy gaps and high error cost, even after exhausting prompt/retrieval/fine-tuning options, as the signal that justifies investing in a custom model.

**Source:** Design overall AI strategy for business solutions — Determine when custom AI models should be created

### Q042 — Constraints pillar of effective prompts
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which of the four pillars of effective prompts, per this unit's guidance, involves specifying tone, exclusions, compliance rules, and boundaries?**

- **A.** Clarity
- **B.** Context
- **C.** Constraints
- **D.** Output format

**Answer:** C
**Confidence:** Certain

The unit defines the Constraints pillar as covering tone, exclusions, compliance requirements, and other boundaries a prompt must respect.

**Source:** Design overall AI strategy for business solutions — Provide guidelines for creating a prompt library

### Q043 — SLM for edge deployment
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

> A team is building a decision-support feature for an IoT edge device with strict latency and cost limits.

**A team is building a decision-support feature for an IoT edge device with strict latency and cost limits. According to this unit's model selection matrix, is a customized small language model (SLM) or a general large language model (LLM) more appropriate?**

- **A.** A customized SLM
- **B.** A general LLM
- **C.** Neither — no model should be used
- **D.** Only a multi-agent LLM system

**Answer:** A
**Confidence:** Derived

The unit's SLM vs. LLM decision matrix favors customized SLMs for latency- and cost-constrained edge scenarios, where a smaller, specialized model outperforms a general-purpose LLM.

**Source:** Design overall AI strategy for business solutions — Develop use cases for customized small language models

### Q044 — Chain-of-thought technique
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which prompt engineering technique asks the model to show its steps or reasoning to improve correctness in analysis or troubleshooting tasks?**

- **A.** Role prompting
- **B.** Chain-of-thought
- **C.** Few-shot prompting
- **D.** Instruction + context + output

**Answer:** B
**Confidence:** Certain

Chain-of-thought is described in this unit as the technique of asking a model to reason step-by-step, improving correctness on analytical tasks.

**Source:** Design overall AI strategy for business solutions — Provide prompt engineering guidelines and techniques

### Q045 — Improving prompt clarity
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

> A prompt reads 'Summarize the project.'

**A prompt reads 'Summarize the project.' According to this unit's clarity guidance, which revision improves it?**

- **A.** 'Summarize the project kickoff meeting notes into three bullet points focused on risks, owners, and deadlines.'
- **B.** 'Please summarize.'
- **C.** 'Tell me about the project.'
- **D.** No revision needed — both are equally clear

**Answer:** A
**Confidence:** Derived

The unit's clarity guidance calls for specific, unambiguous prompts stating exactly what content, format, and focus is expected — the vague original lacks all of these.

**Source:** Design overall AI strategy for business solutions — Provide prompt engineering guidelines and techniques

### Q046 — AI CoE lead role
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which role coordinates AI strategy, ensures governance, and orchestrates organizational alignment across business, data, engineering, and compliance teams?**

- **A.** Executive sponsor
- **B.** AI Center of Excellence (AI CoE) lead
- **C.** Data owner/steward
- **D.** Change management and skilling lead

**Answer:** B
**Confidence:** Certain

The unit describes the AI CoE lead as the role responsible for coordinating strategy and governance across all involved teams.

**Source:** Design overall AI strategy for business solutions — Identify key business user roles for AI workloads

### Q047 — Lack of an engaged executive sponsor
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A project has no engaged executive sponsor.

**A project has no engaged executive sponsor. According to this unit, what is a likely consequence?**

- **A.** Faster time to market
- **B.** Stalled adoption, lack of funding, or lost organizational visibility
- **C.** Improved data governance
- **D.** Reduced need for a Responsible AI officer

**Answer:** B
**Confidence:** Derived

The unit ties the executive sponsor role to securing funding and visibility, implying that without one, initiatives risk stalling.

**Source:** Design overall AI strategy for business solutions — Identify key business user roles for AI workloads

### Q048 — AI-specific regulation example
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which of these is an example of an AI-specific regulation (rather than a general data-privacy law) referenced in this unit?**

- **A.** CCPA/CPRA
- **B.** The EU AI Act
- **C.** HIPAA
- **D.** Brazil's LGPD

**Answer:** B
**Confidence:** Certain

The unit calls out the EU AI Act as an AI-specific regulation, distinct from general data-privacy laws like CCPA/CPRA and LGPD or sector laws like HIPAA.

**Source:** Design overall AI strategy for business solutions — Evaluate regional and local AI data regulation compliance requirements

### Q049 — Seven-step compliance framework, step 4
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

> An architect is following the seven-step framework in this unit and has just classified an AI workload's risk level (Step 3).

**An architect is following this unit's seven-step framework and has just classified an AI workload's risk level (Step 3). What should they evaluate next in Step 4?**

- **A.** Data requirements such as residency, sovereignty, access controls, encryption, and logging
- **B.** Marketing messaging for the product
- **C.** The vendor's stock price
- **D.** Employee vacation policies

**Answer:** A
**Confidence:** Certain

The seven-step framework's Step 4 addresses data requirements — residency, sovereignty, access controls, encryption, and logging — following risk classification in Step 3.

**Source:** Design overall AI strategy for business solutions — Evaluate regional and local AI data regulation compliance requirements

### Q050 — AI CoE maturity: Advisory stage
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**In the AI CoE's operating-model maturity progression, which stage has the CoE acting as a consultant rather than a gatekeeper, with product teams owning AI delivery?**

- **A.** Centralized CoE
- **B.** Hybrid
- **C.** Advisory CoE
- **D.** Standalone CoE

**Answer:** C
**Confidence:** Derived

The Advisory stage is described as the maturity level where the CoE shifts to a consultative role while product teams own delivery, following Centralized and Hybrid stages.

**Source:** Design overall AI strategy for business solutions — Include elements in a Microsoft AI Center of Excellence

### Q051 — Multi-agent pattern across Dynamics 365 apps
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

> A cross-domain AI process spans Dynamics 365 Sales, Customer Service, and Finance, requiring multi-step autonomous coordination.

**A cross-domain AI process spans Dynamics 365 Sales, Customer Service, and Finance, requiring multi-step autonomous coordination. Which architecture pattern does this unit recommend?**

- **A.** A single-agent approach
- **B.** A multi-agent approach with Planner/Worker/Reviewer roles
- **C.** No AI — manual handoff only
- **D.** A single monolithic prompt spanning all apps

**Answer:** B
**Confidence:** Certain

This unit recommends a multi-agent pattern with distinct Planner, Worker, and Reviewer roles for cross-app, multi-step Dynamics 365 coordination.

**Source:** Design overall AI strategy for business solutions — Design AI solutions using multiple Dynamics 365 apps

### Q052 — Power users / AI champions persona
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which user persona in this unit's training model focuses on advanced prompting, multi-step workflows, and coaching peers?**

- **A.** Everyday business users
- **B.** Power users / AI champions
- **C.** Managers and decision makers
- **D.** Accessibility-focused users

**Answer:** B
**Confidence:** Certain

The unit defines power users / AI champions as the persona responsible for advanced prompting techniques, multi-step workflows, and mentoring other users.

**Source:** Design overall AI strategy for business solutions — Design user prompt training for AI solution adoption

### Q053 — TCO category: Operational Costs
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which total cost of ownership (TCO) category includes prompt library maintenance, model retraining, and user training/adoption programs?**

- **A.** Development Costs
- **B.** Deployment Costs
- **C.** Operational Costs
- **D.** Decommissioning Costs

**Answer:** C
**Confidence:** Certain

The unit places ongoing costs such as prompt library maintenance, retraining, and user training under the Operational Costs category of TCO.

**Source:** Evaluate costs and benefits of AI solutions — Evaluate ROI criteria for AI-powered solutions

### Q054 — Automation metrics
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A team wants to measure completion rate, abandonment rate, and task success rate for an agent.

**A team wants to measure completion rate, abandonment rate, and task success rate for an agent. Which ROI analytics category do these metrics belong to?**

- **A.** Usage Metrics
- **B.** Automation Metrics
- **C.** Cost Savings Metrics
- **D.** Quality Metrics

**Answer:** B
**Confidence:** Certain

Completion rate, abandonment rate, and task success rate are grouped in this unit under Automation Metrics.

**Source:** Evaluate costs and benefits of AI solutions — Evaluate ROI criteria for AI-powered solutions

### Q055 — First step in the ROI/TCO decision flow
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**In this unit's ROI/TCO decision flow, what should an architect establish first, before mapping AI value levers?**

- **A.** A 'no-AI' cost baseline
- **B.** The sensitivity bands
- **C.** An executive one-slide summary
- **D.** The payback period

**Answer:** A
**Confidence:** Certain

The unit's decision flow begins by establishing a 'no-AI' baseline against which AI-driven benefits and costs are compared.

**Source:** Evaluate costs and benefits of AI solutions — Create ROI analysis for a proposed AI solution

### Q056 — Annual benefit formula
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**Using this unit's worked example formula, what does 'Annual_Benefit' equal?**

- **A.** (Minutes_Saved_per_Run / 60) × Runs_per_Year × Labor_Rate
- **B.** TCO minus Net Benefit
- **C.** Payback months × Labor Rate
- **D.** Successful runs divided by adoption rate

**Answer:** A
**Confidence:** Certain

The worked example calculates Annual_Benefit as time saved per run (converted to hours) multiplied by the number of runs per year and the labor rate.

**Source:** Evaluate costs and benefits of AI solutions — Create ROI analysis for a proposed AI solution

### Q057 — Savings per tool configuration
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> An architect is building the Savings Calculator for an agent that uses several tools with different levels of impact.

**An architect is building the Savings Calculator for an agent that uses several tools with different levels of impact. Which savings configuration should they use for a more granular estimate?**

- **A.** Savings per run
- **B.** Savings per tool
- **C.** Savings per user
- **D.** Savings per license

**Answer:** B
**Confidence:** Derived

Because different tools within the same agent can have different time-saving impact, this unit's Savings Calculator supports a per-tool configuration for granular estimates.

**Source:** Evaluate costs and benefits of AI solutions — Create ROI analysis for a proposed AI solution

### Q058 — Highest data preparation cost approach
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Per this unit's TCO comparison table, which approach — alongside Build — has the highest data preparation cost?**

- **A.** Buy
- **B.** Extend
- **C.** Buy and Extend are equally low
- **D.** None have high data preparation cost

**Answer:** B
**Confidence:** Derived

The comparison table in this unit rates Extend as having high data preparation cost similar to Build, while Buy is comparatively lower.

**Source:** Evaluate costs and benefits of AI solutions — Analyze whether to build, buy, or extend AI components

### Q059 — When to Build a custom AI component
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> An organization needs a highly specialized decision engine that provides competitive differentiation and full control over data/IP.

**An organization needs a highly specialized decision engine that provides competitive differentiation and full control over data and IP. Which approach does this unit recommend?**

- **A.** Buy
- **B.** Extend
- **C.** Build
- **D.** Do nothing

**Answer:** C
**Confidence:** Certain

The unit recommends Build when a solution requires deep specialization, competitive differentiation, and full control of data/IP — traits generic Buy or Extend options can't fully deliver.

**Source:** Evaluate costs and benefits of AI solutions — Analyze whether to build, buy, or extend AI components

### Q060 — Purpose of Azure AI Foundry Model Router
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What does Azure AI Foundry's Model Router provide, per this unit?**

- **A.** A single unified endpoint that automatically selects the best model for each request
- **B.** A tool used solely for fine-tuning models
- **C.** A billing dashboard only
- **D.** A way to disable all but one model

**Answer:** A
**Confidence:** Certain

The unit describes the Model Router as a unified endpoint that automatically selects the most suitable model per request.

**Source:** Evaluate costs and benefits of AI solutions — Implement a model router to intelligently route requests to the most suitable model

### Q061 — Task-complexity-based routing
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> An architect wants to reduce cost by routing simple classification tasks to smaller models while reserving larger models for complex reasoning.

**An architect wants to reduce cost by routing simple classification tasks to smaller models while reserving larger models for complex reasoning. Which routing criterion is being applied?**

- **A.** Task type/complexity-based routing
- **B.** Weighted routing for A/B testing only
- **C.** Version-based routing
- **D.** Fallback routing only

**Answer:** A
**Confidence:** Certain

This scenario matches task type/complexity-based routing, where the Model Router directs requests to the appropriately sized model based on task complexity.

**Source:** Evaluate costs and benefits of AI solutions — Implement a model router to intelligently route requests to the most suitable model

### Q062 — Managed identities for agent authentication
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which authentication mechanism does this unit recommend for agent-to-Azure authentication, to remove secrets and simplify rotation?**

- **A.** Managed identities
- **B.** Shared API keys
- **C.** Hardcoded connection strings
- **D.** Anonymous access

**Answer:** A
**Confidence:** Certain

The unit recommends managed identities as the preferred mechanism for agent-to-Azure authentication, eliminating secrets and simplifying rotation.

**Source:** Design responsible AI security, governance, risk management, and compliance — Design security agents for Microsoft clouds

### Q063 — Acting on behalf of a user
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> An agent acts 'on behalf of a user' rather than as itself when calling a downstream service.

**An agent acts 'on behalf of a user' rather than as itself. Per this unit's authorization pattern guidance, what should happen?**

- **A.** The user's permissions should be propagated to the agent's action
- **B.** The agent should be granted full administrator rights
- **C.** The agent should ignore the user's permission scope
- **D.** The agent should use a shared service account with unrestricted access

**Answer:** A
**Confidence:** Certain

This unit states that when an agent acts on behalf of a user, the user's permissions should be propagated; when acting as itself, it should use a narrowly scoped service role.

**Source:** Design responsible AI security, governance, risk management, and compliance — Design security agents for Microsoft clouds

### Q064 — Agent registry
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What should organizations maintain to document an agent's purpose, environment, risk level, and data access, per this unit's governance principles?**

- **A.** An agent registry
- **B.** A marketing brochure
- **C.** A single shared password vault
- **D.** A public wiki with no access controls

**Answer:** A
**Confidence:** Certain

The unit specifies maintaining an agent registry documenting purpose, environment, risk level, and data access as a core governance element.

**Source:** Design responsible AI security, governance, risk management, and compliance — Design governance models for AI agents

### Q065 — Preventing sensitive data outbound flow
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> A team wants to prevent sensitive data from flowing out through an agent's connectors.

**A team wants to prevent sensitive data from flowing out through an agent's connectors. Which control should they apply, per this unit?**

- **A.** DLP (data loss prevention) policies
- **B.** A larger context window
- **C.** A weaker authentication model
- **D.** Removing all logging

**Answer:** A
**Confidence:** Certain

The unit specifies applying DLP policies to limit connector usage and prevent sensitive data from flowing outbound.

**Source:** Design responsible AI security, governance, risk management, and compliance — Design governance models for AI agents

### Q066 — First step of the model hardening blueprint
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is the first step in the model hardening blueprint described in this unit?**

- **A.** Monitoring and drift detection
- **B.** Secure compute
- **C.** Validation pipeline
- **D.** Threat protection

**Answer:** B
**Confidence:** Certain

The five-step model hardening blueprint begins with Secure Compute, followed by private endpoints, threat protection, validation pipeline, and monitoring/drift detection.

**Source:** Design responsible AI security, governance, risk management, and compliance — Design model security for responsible AI

### Q067 — DLP enforcement for model responses
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

> An architect wants to reduce the risk of sensitive data appearing in a model's responses.

**An architect wants to reduce the risk of sensitive data appearing in a model's responses. Which control from this unit directly addresses this?**

- **A.** DLP enforcement to prevent sensitive data from being returned in model responses
- **B.** Increasing the model's temperature setting
- **C.** Removing all access controls for faster retrieval
- **D.** Disabling encryption to improve speed

**Answer:** A
**Confidence:** Certain

The unit specifically calls for DLP rules to prevent sensitive data from being returned in model responses, along with filters to block harmful outputs.

**Source:** Design responsible AI security, governance, risk management, and compliance — Design model security for responsible AI

### Q068 — Example of prompt manipulation
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which of these is an example of prompt manipulation described in this unit?**

- **A.** Overriding system instructions with 'ignore previous instructions...'
- **B.** Using a managed identity
- **C.** Applying a sensitivity label
- **D.** Running a red-team evaluation

**Answer:** A
**Confidence:** Certain

The unit lists overriding system instructions (e.g., 'ignore previous instructions...') as a common prompt manipulation technique.

**Source:** Design responsible AI security, governance, risk management, and compliance — Analyze AI vulnerabilities and mitigations for prompt manipulation

### Q069 — Agent and workflow-level vulnerability
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

> A solution architect notices an agent workflow calls tools autonomously without proper guardrails and lacks rollback capability.

**A solution architect notices an agent workflow calls tools autonomously without proper guardrails and lacks rollback capability. Which vulnerability category does this best represent?**

- **A.** Data exposure vulnerabilities
- **B.** Agent and workflow-level vulnerabilities
- **C.** Identity, access, and RBAC gaps
- **D.** Model behavior vulnerabilities

**Answer:** B
**Confidence:** Certain

The unit defines agent and workflow-level vulnerabilities as including autonomous tool use without guardrails and poor auditing/rollback capability.

**Source:** Design responsible AI security, governance, risk management, and compliance — Analyze AI vulnerabilities and mitigations for prompt manipulation

### Q070 — Responsible AI principle: Accountability
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which Responsible AI principle is defined as 'organizations retain responsibility for decisions made by AI'?**

- **A.** Fairness
- **B.** Transparency
- **C.** Accountability
- **D.** Inclusiveness

**Answer:** C
**Confidence:** Certain

The unit defines Accountability precisely as organizations retaining responsibility for decisions made by AI.

**Source:** Design responsible AI security, governance, risk management, and compliance — Review solution adherence to Responsible AI principles

### Q071 — Model and agent behavior evaluation review area
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which review area evaluates whether a model avoids harmful or misleading content and confirms fallback behavior for ambiguous requests?**

- **A.** Data, privacy, and security assessment
- **B.** Model and agent behavior evaluation
- **C.** Fairness and bias review
- **D.** Transparency and user experience

**Answer:** B
**Confidence:** Certain

The unit's structured review model places these checks under 'Model and agent behavior evaluation,' which also validates prompt adherence and safety boundaries in edge cases.

**Source:** Design responsible AI security, governance, risk management, and compliance — Review solution adherence to Responsible AI principles

### Q072 — Microsoft Purview for data-handling compliance
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which Microsoft governance tool provides sensitivity labels, DLP rules, and auditing capability to validate compliant handling of Microsoft 365 Copilot data?**

- **A.** Microsoft Purview
- **B.** Azure DevOps
- **C.** Power BI
- **D.** Microsoft Sentinel

**Answer:** A
**Confidence:** Certain

The unit identifies Microsoft Purview as providing sensitivity labels, DLP rules, and auditing/policy insight capability for Copilot data compliance.

**Source:** Design responsible AI security, governance, risk management, and compliance — Validate data residency and movement compliance

### Q073 — Residency rules for unpublished agents
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

> An architect must confirm whether unpublished agents and preview features in Copilot Studio follow different data-residency rules than published agents.

**An architect must confirm whether unpublished agents and preview features in Copilot Studio follow different data-residency rules than published agents. Which guidance area of this unit addresses this check?**

- **A.** Copilot Studio data residency behavior
- **B.** Purview controls for Microsoft 365 Copilot
- **C.** Data movement controls for generative AI
- **D.** Designing a compliant AI architecture

**Answer:** A
**Confidence:** Certain

This exact check — whether unpublished agents and preview features follow different residency rules — is listed under 'Copilot Studio data residency behavior.'

**Source:** Design responsible AI security, governance, risk management, and compliance — Validate data residency and movement compliance

### Q074 — Least privilege for grounding data access
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Per this unit, what access-control principle should govern how much data grounding retrieval workflows can access by default?**

- **A.** Least privilege by default
- **B.** Maximum access for convenience
- **C.** No auditing required
- **D.** Shared credentials across all roles

**Answer:** A
**Confidence:** Certain

The unit's first key design principle for grounding data access control is 'least privilege by default,' allowing only the minimum necessary access.

**Source:** Design responsible AI security, governance, risk management, and compliance — Design access controls for grounding data and model tuning

### Q075 — Audit logs capture metadata, not content
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Per this unit, what should audit logs for data changes capture, to avoid unnecessary exposure of sensitive information?**

- **A.** The full content of every record
- **B.** Metadata, not content
- **C.** Nothing — data change logging is optional
- **D.** Only the identity of the system administrator

**Answer:** B
**Confidence:** Certain

The unit explicitly states that architects must ensure logs capture metadata, not content, to avoid unnecessary exposure of sensitive information.

**Source:** Design responsible AI security, governance, risk management, and compliance — Design audit trails for changes to models and data

### Q076 — Purpose of generative answers
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**According to the module introduction, what is the main advantage of using generative answers instead of manually authoring topics for every possible user question?**

- **A.** It guarantees 100% accurate responses
- **B.** It lets the agent find and present information from multiple sources without created topics, reducing authoring time
- **C.** It replaces the need for any knowledge sources
- **D.** It automatically translates all agent responses into every supported language

**Answer:** B
**Confidence:** Certain

The introduction states generative answers let the agent 'find and present information from multiple sources, internal or external, without created topics,' which 'dramatically reduces the time it takes to create and deploy a functional agent.'

**Source:** Build intelligent agents in Microsoft Copilot Studio — Introduction

### Q077 — AI-assisted agent creation output
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**When you create an agent in Copilot Studio using a natural language description, what does Copilot Studio automatically generate as part of the process?**

- **A.** A fully populated Azure AI Search index
- **B.** Initial instructions, suggested knowledge sources, recommended triggers, and a basic conversational flow
- **C.** A completed set of Adaptive Cards
- **D.** A dedicated Azure Key Vault for credentials

**Answer:** B
**Confidence:** Certain

The unit states that creating an agent from a natural language description makes Copilot Studio 'generate initial instructions,' 'suggest relevant knowledge sources,' 'recommend appropriate triggers and tools,' and 'set up a basic conversational flow.'

**Source:** Build intelligent agents in Microsoft Copilot Studio — Create a knowledge agent

### Q078 — Allow ungrounded responses setting
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A compliance-focused agent must never answer using the model's general knowledge alone; every answer must be grounded in a supplied source.

**A maker wants their agent to answer only from the knowledge sources they've supplied and never guess using the model's general knowledge. Which setting should the maker disable?**

- **A.** Web Search
- **B.** Allow ungrounded responses (General Knowledge)
- **C.** Official source
- **D.** Include/exclude at any time

**Answer:** B
**Confidence:** Certain

The unit states: 'If your use case requires the agent to only answer questions based on the information you supplied, you should turn off the Allow ungrounded responses setting.' When off, the agent blocks generated responses that didn't use a knowledge source or tool and triggers the fallback topic instead.

**Source:** Build intelligent agents in Microsoft Copilot Studio — Add knowledge to an agent

### Q079 — Public website knowledge source URL depth
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which of the following is a VALID URL to add as a public website knowledge source, per the URL depth rule described in the unit?**

- **A.** contoso.com/products/software/azure (three path segments)
- **B.** bing.com (a search engine URL)
- **C.** contoso.com/products/software (two path segments)
- **D.** A URL pointing to a public social media forum thread

**Answer:** C
**Confidence:** Certain

Public website knowledge source URLs are limited to two path segments after the domain; 'contoso.com/products/software' (two segments) is valid, while three segments, search engine URLs, and forum/social sites are all called out as problematic or unsupported.

**Source:** Build intelligent agents in Microsoft Copilot Studio — Add knowledge to an agent

### Q080 — Dataverse table limit and synonyms/glossary
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**When adding Dataverse tables as a knowledge source, how many tables can a maker select at most, and what feature helps the agent interpret table terminology?**

- **A.** Up to 15 tables; synonyms and glossary entries aid generative orchestration
- **B.** Up to 5 tables; the Official source flag aids interpretation
- **C.** Unlimited tables; the Web Search setting aids interpretation
- **D.** Up to 500 tables; the content moderation level aids interpretation

**Answer:** A
**Confidence:** Certain

The unit states you can select 'up to 15 tables' and that 'Synonyms, glossary terms, and definitions...aid in generative orchestration' by providing grounding data that helps the agent recognize user requests.

**Source:** Build intelligent agents in Microsoft Copilot Studio — Add knowledge to an agent

### Q081 — Generative answers node options
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which of the following is NOT one of the configurable options on the Generative answers node described in the unit?**

- **A.** Restrict knowledge
- **B.** Web search
- **C.** Content moderation level
- **D.** Azure Key Vault secret rotation

**Answer:** D
**Confidence:** Certain

The Generative answers node options listed are Add knowledge, Restrict knowledge, Web search, Allow ungrounded responses, and Content moderation level. Azure Key Vault secret rotation is not mentioned as an option of this node.

**Source:** Build intelligent agents in Microsoft Copilot Studio — Generative answers

### Q082 — Conversational boosting vs Fallback priority
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Both the Conversational boosting and Fallback system topics can trigger when the NLU model can't find a matching topic. Which one triggers first?**

- **A.** Fallback triggers before Conversational boosting
- **B.** Conversational boosting triggers before Fallback
- **C.** They always trigger simultaneously
- **D.** Neither triggers automatically; both require manual invocation

**Answer:** B
**Confidence:** Certain

The unit explicitly states: 'In terms of priority, Conversational boosting triggers before the Fallback topic.'

**Source:** Build intelligent agents in Microsoft Copilot Studio — Use generative answers in topics

### Q083 — Content moderation level trade-off (exercise)
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> While testing the Contoso Insurance agent, some answers seem off-topic, so the maker considers adjusting the content moderation level.

**In the exercise's refinement task, what is described as the trade-off of raising the content moderation level on generative answers?**

- **A.** Higher levels provide more answers but may be less precise; lower levels provide fewer but more accurate answers
- **B.** Higher levels always improve both quantity and accuracy of answers
- **C.** Content moderation level only affects response language, not accuracy
- **D.** Lower levels increase the number of knowledge sources the agent can use

**Answer:** A
**Confidence:** Certain

The exercise states: 'Higher levels provide more answers but may be less precise; Lower levels provide fewer but more accurate answers,' directly describing the trade-off when adjusting content moderation level.

**Source:** Build intelligent agents in Microsoft Copilot Studio — Exercise - Build a knowledge-enabled agent

### Q084 — Feature for multi-source answers without topics
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which Copilot Studio capability allows an agent to present information from multiple knowledge sources without a maker manually authoring a topic for each possible question?**

- **A.** Conversational boosting topic
- **B.** Generative answers
- **C.** Tools
- **D.** Web Search

**Answer:** B
**Confidence:** Certain

Generative answers is the capability that lets an agent find and present information from multiple sources without created topics, as emphasized throughout the module and reinforced in this knowledge-check unit.

**Source:** Build intelligent agents in Microsoft Copilot Studio — Check your knowledge

### Q085 — Module A core takeaway
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**According to the module summary, what is the overall benefit of Copilot Studio's generative AI features covered in this module?**

- **A.** They eliminate the need for any topics or triggers in an agent
- **B.** They reduce manual authoring and expand the agent's ability to find and present information in response to customer questions
- **C.** They are only useful for voice-channel agents
- **D.** They replace the need for Dataverse entirely

**Answer:** B
**Confidence:** Certain

The summary states Copilot Studio's generative AI features 'reduce manual authoring and dramatically expand the scope of an agent's knowledge and its ability to find and present information in response to your customer's questions.'

**Source:** Build intelligent agents in Microsoft Copilot Studio — Summary

### Q086 — Woodgrove Bank module goal
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Per the module introduction's Woodgrove Bank scenario, what capability will the module teach for authoring prompts powered by a chosen model?**

- **A.** Authoring custom prompts with models from the Microsoft Foundry model catalog
- **B.** Authoring Adaptive Cards for every response
- **C.** Configuring computer use tools for document classification
- **D.** Building an MCP server to host the bank's APIs

**Answer:** A
**Confidence:** Certain

The introduction states you'll learn 'how to author custom prompts with models from the Microsoft Foundry model catalog,' setting up the module's later unit on custom prompts.

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Introduction

### Q087 — Node-level vs agent-level source priority
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> Woodgrove Bank's premium wealth management topic has a node-level SharePoint source, while the agent also has broader agent-level sources.

**A generative answers node has its own SharePoint source configured, while the agent also has a Dataverse source configured at the agent level. When this node runs, which source(s) does it use?**

- **A.** Both sources are merged into a single combined search
- **B.** Only the agent-level Dataverse source, because agent-level sources always take precedence
- **C.** Only the node-level SharePoint source, because node-level sources override agent-level sources for that node
- **D.** Neither source; the node always falls back to AI general knowledge

**Answer:** C
**Confidence:** Certain

The unit states: 'When a generative answers node has its own sources configured, those sources take priority over the agent-level sources for that node. Agent-level sources act as a fallback, used only when a node has no sources of its own.'

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Configure the generative answers node in a topic

### Q088 — Generative answers node vs custom prompts
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What is the fundamental difference between the generative answers node and a custom prompt, as described in the unit?**

- **A.** The generative answers node synthesizes grounded answers from configured knowledge sources, while a custom prompt performs a specific reasoning task the prompt author defines
- **B.** Custom prompts can only be used in the Conversational boosting topic
- **C.** The generative answers node cannot use SharePoint as a source, but custom prompts can
- **D.** There is no functional difference; they are two names for the same node

**Answer:** A
**Confidence:** Certain

The unit explains the generative answers node 'searches configured knowledge sources and generates a grounded response,' answering 'What does our content say about this?' while custom prompts instruct the AI to perform a reasoning task like classification or extraction, with output depending 'entirely on what the prompt instructs the model to produce.'

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Configure the generative answers node in a topic

### Q089 — Required Custom data Table format
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**When supplying Custom data to a generative answers node, which column is REQUIRED in the Power Fx Table, and which columns are optional?**

- **A.** Content is required; ContentLocation and Title are optional
- **B.** ContentLocation is required; Content and Title are optional
- **C.** All three columns (Content, ContentLocation, Title) are required
- **D.** Title is required; Content and ContentLocation are optional

**Answer:** A
**Confidence:** Certain

The required Table format table shows Content marked 'Yes' (required), while ContentLocation and Title are both marked 'No' (not required).

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Connect custom knowledge sources to a generative answers node

### Q090 — Custom data record limit
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> Woodgrove Bank's regulatory API returns many regulation records for a compliance query passed into a generative answers node's Custom data field.

**An HTTP request returns 12 records for a generative answers node's Custom data field. How many of those records will actually be used to generate the response, and how is the selection made?**

- **A.** All 12 records are used, ranked by relevance automatically
- **B.** Only the first 3 records are used, selected positionally rather than by relevance
- **C.** Only the last 3 records are used
- **D.** None; more than 5 records causes the node to return an error

**Answer:** B
**Confidence:** Certain

The unit states: 'Only the first three records in the Table are used to generate the response... The selection is positional, not relevance-based. Design your data retrieval to filter and rank results before returning them.'

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Connect custom knowledge sources to a generative answers node

### Q091 — What custom instructions control
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Custom instructions on a generative answers node shape which three aspects of the AI's output, per the unit?**

- **A.** Tone, format, and scope
- **B.** Model selection, cost tier, and latency
- **C.** Authentication, credentials, and access control
- **D.** Knowledge source type, indexing, and retention

**Answer:** A
**Confidence:** Certain

The unit states: 'Custom instructions shape three aspects of the AI's output: tone, format, and scope,' and defines each.

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Shape AI responses with custom instructions

### Q092 — Effective vs vague custom instructions
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Why does the unit consider the instruction 'Respond using a formal professional tone. Use bullet points for any answer that contains multiple steps or items. Do not speculate...' more effective than 'Be helpful and professional'?**

- **A.** It is shorter and therefore easier for the model to parse
- **B.** It describes observable, measurable output behaviors the AI can evaluate its draft against, unlike a vague quality statement
- **C.** It uses more technical vocabulary, which models process more reliably
- **D.** It includes a Power Fx expression, which all custom instructions require

**Answer:** B
**Confidence:** Certain

The unit explains the specific version gives the AI 'three specific, verifiable behaviors' it 'can evaluate its own draft against,' while the vague version 'describes a quality...but provides the AI with nothing observable to target,' so 'the output looks the same with or without it.'

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Shape AI responses with custom instructions

### Q093 — When to choose a custom prompt over a generative answers node
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which of the following signals indicates a custom prompt (not a generative answers node) is the right choice, per the unit?**

- **A.** The output needs a specific structure such as a classification label or a fixed number of extracted fields
- **B.** The task requires searching a SharePoint knowledge source
- **C.** The task requires returning citations to source documents
- **D.** The task must run inside the Conversational boosting system topic

**Answer:** A
**Confidence:** Certain

The unit lists three signals for choosing a custom prompt, including: 'The output needs a specific structure: a classification label, a fixed number of bullets, or a defined set of extracted fields.'

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Author and configure custom prompts in topics

### Q094 — Prompt builder default model and tiers
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What model does Prompt builder use by default, and which billing tier does it fall into?**

- **A.** GPT-4.1 mini, billed at the basic rate (Mini category)
- **B.** GPT-5 reasoning, billed at the premium rate (Deep category)
- **C.** GPT-4.1, billed at the standard rate (General category)
- **D.** Llama, billed at the basic rate (Mini category)

**Answer:** A
**Confidence:** Certain

The unit states: 'Prompt builder uses GPT-4.1 mini by default,' and it falls in the 'Mini' category 'billed at the basic rate.'

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Author and configure custom prompts in topics

### Q095 — Extracting structured fields from clause text
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A topic needs to extract a start date, end date, and total contract value from clause text and store each as a separate topic variable. Which approach best fits this requirement?**

- **A.** A generative answers node with a custom instruction listing the fields to extract
- **B.** A custom prompt with the clause as an input variable, instructed to return structured output with the three field values
- **C.** A Condition node using Power Fx expressions to parse the text
- **D.** The Conversational boosting system topic

**Answer:** B
**Confidence:** Certain

Per the module assessment, a custom prompt configured with the clause as an input variable and instructions to return structured output for the field values is the correct approach — this is a structured extraction task, which the unit on custom prompts identifies as the signal for choosing a custom prompt over a generative answers node.

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Module assessment

### Q096 — Module B core capability recap
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which of these is NOT listed among 'What you learned' in the module summary?**

- **A.** Configuring a generative answers node and applying node-level source priority
- **B.** Connecting custom knowledge sources using the required Power Fx Table format
- **C.** Shaping responses with custom instructions
- **D.** Configuring computer use access control allow lists

**Answer:** D
**Confidence:** Certain

The summary's four bullet points cover configuring the generative answers node, connecting custom knowledge sources, shaping responses with custom instructions, and authoring custom prompts — computer use access control is covered in a different module entirely.

**Source:** Generate AI-powered agent responses using generative answers in Microsoft Copilot Studio — Summary

### Q097 — Three integration categories
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**The module introduction frames enterprise agent integrations into three categories. What are they?**

- **A.** Tools, Knowledge sources, and Agents
- **B.** Connectors, Flows, and Plugins
- **C.** Triggers, Topics, and Entities
- **D.** Channels, Environments, and Solutions

**Answer:** A
**Confidence:** Certain

The introduction frames integrations as: 'Tools that let your agent do things...; Knowledge sources that let your agent answer questions...; and Agents that let you delegate...'

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Introduction

### Q098 — Copilot connectors vs Power Platform connectors for knowledge
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**What is a key operational difference between using Copilot connectors and Power Platform connectors as knowledge sources?**

- **A.** Copilot connectors index content via Microsoft Graph with semantic search and citations; Power Platform connectors retrieve data in real time without replication (preview)
- **B.** Power Platform connectors index content permanently, while Copilot connectors never store any data
- **C.** Copilot connectors only work with Dataverse tables
- **D.** There is no difference; both use identical retrieval mechanisms

**Answer:** A
**Confidence:** Certain

The knowledge source types table describes Copilot connectors as indexed via Microsoft Graph with semantic search and citations, while Power Platform connectors provide real-time retrieval (preview) without replicating data.

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Explore the Copilot Studio integration landscape

### Q099 — Agent2Agent (A2A) protocol delegation
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Besides Copilot Studio agents, Microsoft Foundry agents, and Microsoft Fabric Data agents, which other agent type can a Copilot Studio agent delegate tasks to, per the unit?**

- **A.** Agents built with Microsoft 365 Agents SDK, and agents reachable via the Agent2Agent (A2A) protocol
- **B.** Only agents built inside the same Copilot Studio environment
- **C.** Only agents registered in Azure Active Directory
- **D.** Salesforce Einstein agents exclusively

**Answer:** A
**Confidence:** Certain

The unit lists five delegatable agent types: Copilot Studio agents, Microsoft Foundry agents (preview), Microsoft Fabric Data agents (preview), Microsoft 365 Agents SDK agents (preview), and Agent2Agent (A2A) protocol agents.

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Explore the Copilot Studio integration landscape

### Q100 — Agent flows credit consumption vs Power Automate cloud flows
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**How does the licensing/cost model for agent flows differ from traditional Power Automate cloud flows, per the unit's trade-off comparison?**

- **A.** Agent flows consume Copilot Studio credits, while Power Automate cloud flows use per-user/per-process licensing rather than credits
- **B.** Agent flows are entirely free, while cloud flows always require a premium connector license
- **C.** Both consume the exact same Copilot Studio credits
- **D.** Cloud flows are billed per API call, while agent flows have no cost model at all

**Answer:** A
**Confidence:** Certain

The trade-off table notes agent flows 'consume Copilot Studio credits,' which is unlike traditional Power Automate cloud flows that use per-user/per-process licensing.

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Compare action integration patterns

### Q101 — MCP calling restriction inside Copilot Studio
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**Which statement about Model Context Protocol (MCP) servers as a tool integration pattern is accurate, per the unit?**

- **A.** MCP requires generative orchestration; topics cannot call MCP tools directly — only the generative orchestrator can
- **B.** MCP tools can be called directly from a topic's node without generative orchestration
- **C.** MCP servers must use the deprecated SSE transport exclusively
- **D.** MCP tools bypass Power Platform DLP policies entirely

**Answer:** A
**Confidence:** Certain

The unit states MCP 'requires generative orchestration' and that 'topics can't call MCP tools directly; only the orchestrator can,' and that MCP uses Streamable HTTP transport, with SSE being deprecated (the opposite of option C).

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Compare action integration patterns

### Q102 — REST API tools authentication and shareability
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which authentication types are supported for REST API tools (preview), and what is a key sharing limitation of REST API tools?**

- **A.** None, API key, or OAuth 2.0; they are not shareable outside Copilot Studio
- **B.** Only OAuth 2.0; they can be exported and reused in any Power Platform app
- **C.** Only Windows Integrated auth; they can be shared with any Azure subscription
- **D.** Kerberos only; no sharing restrictions apply

**Answer:** A
**Confidence:** Certain

The unit describes REST API tools as supporting authentication of none, API key, or OAuth 2.0, using OpenAPI v2 (with v3 auto-converted), and states they aren't shareable outside Copilot Studio.

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Compare action integration patterns

### Q103 — Maker-provided credentials and anonymous channels
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**An agent uses maker-provided credentials for a connector and the maker wants to publish it to an anonymous (unauthenticated) channel. What does the unit say about this?**

- **A.** This is fully supported with no restrictions
- **B.** Maker-provided credentials require an authenticated channel; you can't publish an agent using maker credentials to anonymous channels
- **C.** Anonymous channels automatically convert maker credentials to user credentials
- **D.** Maker credentials are only usable in the Conversational boosting topic

**Answer:** B
**Confidence:** Certain

The unit states: 'Maker-provided credentials require an authenticated channel. You can't publish an agent using maker-provided credentials to anonymous channels.'

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Authenticate and govern agent integrations

### Q104 — Data loss prevention connector classification conflict
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A maker is building an agent that mixes an internal SharePoint knowledge source with a public non-business weather API connector.

**A DLP policy classifies SharePoint as Business and a custom weather connector as Non-business. Can an agent use both connectors together?**

- **A.** Yes, classification only affects logging, not usage
- **B.** No — Business and Non-business classified connectors can't be combined in the same agent
- **C.** Yes, but only if the agent is published to an anonymous channel
- **D.** No connector classification exists in Copilot Studio DLP

**Answer:** B
**Confidence:** Certain

The unit states connectors are classified as Business, Non-business, or Blocked, and 'Business and Non-business connectors can't be combined in one agent,' with enforcement happening in real time.

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Authenticate and govern agent integrations

### Q105 — HR agent delegation example
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**In the unit's HR scenario, an employee asks a complex benefits-eligibility question requiring specialized reasoning beyond a simple lookup. What pattern does the unit recommend?**

- **A.** Delegating the task to a specialized agent (agent-to-agent integration) rather than handling it with a single generic tool call
- **B.** Always escalating immediately to a human HR representative
- **C.** Using only a Conversational boosting topic to answer generically
- **D.** Disabling generative orchestration for the entire agent

**Answer:** A
**Confidence:** Certain

This scenario illustrates the module's guidance that agent-to-agent delegation is appropriate when a task needs specialized reasoning best handled by another purpose-built agent, rather than a simple tool or knowledge lookup.

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Select integration patterns for enterprise scenarios

### Q106 — Choosing MCP vs REST API tool (assessment)
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A maker needs a tool that can only be invoked by the generative orchestrator (not directly from a topic node) and uses Streamable HTTP transport. Which integration pattern are they describing?**

- **A.** MCP server
- **B.** REST API tool
- **C.** Custom connector
- **D.** Bot Framework skill

**Answer:** A
**Confidence:** Certain

MCP servers require generative orchestration, can only be invoked by the orchestrator (not called directly by topics), and use Streamable HTTP transport (with SSE deprecated) — matching all details in the question.

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Module assessment

### Q107 — Module C recap of integration categories
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**The module summary reiterates that enterprise integration strategy decisions should weigh which factors when selecting a pattern?**

- **A.** Only the visual appearance of the agent's canvas
- **B.** Trade-offs such as licensing/cost model, authentication requirements, governance (DLP), and whether the scenario needs a tool, knowledge source, or agent delegation
- **C.** Only the number of available Copilot Credits
- **D.** Only the geographic region of the Azure tenant

**Answer:** B
**Confidence:** Certain

The summary reinforces that selecting an integration pattern requires weighing cost/licensing trade-offs, authentication models, DLP governance, and whether the need is best met by a tool, a knowledge source, or delegation to another agent — the core themes of the module.

**Source:** Design integration strategies for agents in Microsoft Copilot Studio — Summary

### Q108 — Computer use fills what integration gap
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Per the module introduction, computer use is designed to automate tasks in which specific situation?**

- **A.** Only tasks that already have a REST API or connector available
- **B.** Legacy or UI-only applications with no API, connector, or supported integration method
- **C.** Only tasks performed inside Microsoft Teams
- **D.** Only tasks that require no human oversight whatsoever

**Answer:** B
**Confidence:** Certain

The introduction frames computer use as filling the gap for legacy systems or UI-only applications that lack an API or connector, letting the agent interact with the screen the way a human would.

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Introduction

### Q109 — Perception-reasoning-action loop
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What is the core operating loop that computer use follows to complete a task, per the unit?**

- **A.** Screenshot, reason, act (perception-reasoning-action loop) repeated until the task is complete
- **B.** A single API call that returns the final result immediately
- **C.** A pre-recorded macro replayed without any AI reasoning
- **D.** A SQL query executed directly against the application's database

**Answer:** A
**Confidence:** Certain

The unit describes computer use as running a perception-reasoning-action loop: it takes a screenshot, reasons about what to do next using a vision-language model, and performs an action, repeating until the task is complete.

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Understand computer use in Copilot Studio

### Q110 — Autonomous vs conversational execution patterns
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What distinguishes the 'autonomous' execution pattern from the 'conversational' execution pattern for computer use, per the unit?**

- **A.** Autonomous runs the full task without user interaction mid-task; conversational allows the agent to interact with the user during execution
- **B.** Autonomous requires a human to click every button manually
- **C.** Conversational execution never uses a vision-language model
- **D.** There is no meaningful difference between the two patterns

**Answer:** A
**Confidence:** Certain

The unit contrasts autonomous execution (task runs end-to-end without mid-task user interaction) with conversational execution (the agent can pause and interact with the user during the task).

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Understand computer use in Copilot Studio

### Q111 — Computer use vs agent flow decision
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A maker is automating a task against a system that already has a fully supported Power Platform connector available.

**Per the decision guidance in the unit, when should a maker choose an agent flow (or connector-based tool) instead of computer use for a given task?**

- **A.** Whenever a connector or API already exists for the target system
- **B.** Whenever the task must run on a legacy desktop application with no API
- **C.** Whenever the task requires reading pixels on a screen
- **D.** Whenever the task must tolerate duplicate submissions

**Answer:** A
**Confidence:** Certain

The unit's decision table indicates that if a connector or API exists, an agent flow is the better choice; computer use is reserved for cases where no connector/API exists and the interface is UI-only.

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Evaluate whether computer use fits your scenario

### Q112 — Non-idempotent nature of computer use tasks
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**Why does the unit warn that computer use tasks are NOT idempotent, and what mitigation does it recommend?**

- **A.** Because running the same task twice could submit data twice (e.g., a duplicate form submission); mitigate with pre-check instructions or a human supervision gate for high-stakes actions
- **B.** Because computer use tasks always run exactly once and cannot be repeated
- **C.** Because idempotency is guaranteed automatically by the vision-language model
- **D.** Because only Azure AI Search-backed tasks can be idempotent

**Answer:** A
**Confidence:** Certain

The unit states computer use is not idempotent: rerunning the same task can duplicate side effects like a form submission, and recommends adding pre-check logic or requiring human supervision for high-stakes steps.

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Evaluate whether computer use fits your scenario

### Q113 — Three machine hosting options
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which three machine options are available for running computer use tasks, per the unit?**

- **A.** Hosted browser, Cloud PC pool (Windows 365 for Agents), and bring-your-own machine
- **B.** On-premises server, Azure Kubernetes Service, and Azure Functions
- **C.** Only a hosted browser — no other machine options exist
- **D.** Docker container, virtual machine scale set, and mobile emulator

**Answer:** A
**Confidence:** Certain

The unit lists three machine options: a hosted browser (quick-start, Edge-only, not for production), a Cloud PC pool via Windows 365 for Agents (Entra-joined/Intune-enrolled, preview), and bring-your-own machine (requires Power Automate for desktop).

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Configure computer use as an agent tool

### Q114 — Effect of enabling computer use on a machine's desktop flows
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**What happens to a machine's existing desktop flow functionality when computer use is enabled on that same machine?**

- **A.** Nothing changes; desktop flows and computer use run side by side with no interaction
- **B.** Enabling computer use on a machine disables desktop flow functionality on that machine
- **C.** Desktop flows automatically upgrade to become computer use tasks
- **D.** Computer use cannot be enabled unless desktop flows are already running

**Answer:** B
**Confidence:** Certain

The unit explicitly warns: 'Enabling computer use on a machine disables desktop flow functionality on that machine' — an important operational trade-off for bring-your-own-machine setups.

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Configure computer use as an agent tool

### Q115 — Activity map vs Transcript views
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What are the two primary monitoring views described in the unit for reviewing computer use runs?**

- **A.** Activity map and Transcript
- **B.** Dashboard and Ticket queue
- **C.** Firewall log and Network trace
- **D.** Sentiment score and Usage report

**Answer:** A
**Confidence:** Certain

The unit describes an Activity map view and a Transcript view as the two primary ways to review a computer use session.

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Monitor and supervise computer use execution

### Q116 — Logging verbosity levels
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What are the three logging verbosity levels for computer use sessions, and what note does the unit make about two of them?**

- **A.** All data, Data without screenshots, and Minimal — Minimal currently behaves the same as Data without screenshots
- **B.** Debug, Info, and Error — matching standard application log levels
- **C.** High, Medium, and Low — mapping directly to content moderation levels
- **D.** Full, Partial, and None — with no functional differences among them

**Answer:** A
**Confidence:** Certain

The unit lists All data, Data without screenshots, and Minimal as the three verbosity levels, noting that Minimal currently behaves the same as Data without screenshots.

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Monitor and supervise computer use execution

### Q117 — Idempotency risk scenario (assessment)
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A computer use task submits an expense report form. The connection times out after submission, and the maker considers automatically retrying the same task. What risk should they consider first?**

- **A.** Because computer use tasks aren't idempotent, retrying could submit the expense report a second time
- **B.** There is no risk; computer use guarantees exactly-once execution
- **C.** Retrying is always safe because computer use logs prevent duplicate actions automatically
- **D.** The task will simply fail again with no side effects

**Answer:** A
**Confidence:** Certain

Since computer use is not idempotent, rerunning a task like a form submission after an ambiguous failure could result in duplicate submission — the module recommends pre-check logic or human supervision for such high-stakes steps.

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Module assessment

### Q118 — Module D core takeaway
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Per the module summary, computer use should be positioned as which kind of automation option?**

- **A.** The default first choice for every automation task, replacing connectors and APIs
- **B.** A fallback for legacy/UI-only scenarios with no API or connector, used with appropriate governance, monitoring, and human oversight
- **C.** A tool exclusively for automating browser-based marketing tasks
- **D.** A replacement for the Conversational boosting system topic

**Answer:** B
**Confidence:** Certain

The summary reiterates that computer use fills the gap for legacy/UI-only systems lacking APIs or connectors, and should be used with governance controls (access allow lists, credential storage, monitoring, human supervision) given its probabilistic nature.

**Source:** Automate desktop and web tasks with computer use in Copilot Studio — Summary

### Q119 — Shared pattern of connector and REST API tools
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which two integration approaches share a common pattern of connecting an agent directly to a specific, known API using a schema-defined interface, without requiring custom integration code?**

- **A.** Connector tools and REST API tools
- **B.** Agent flows and MCP servers
- **C.** Child agents and connected agents
- **D.** Copilot connectors and Azure AI Search

**Answer:** A
**Confidence:** Certain

The module introduction states that connector tools and REST API tools 'share a common pattern: both connect an agent directly to a specific, known API using a schema-defined interface, without requiring custom integration code.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Introduction

### Q120 — Choosing REST API tool for single-use integration
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A maker at a bank needs the IT service desk agent to look up employee IT profiles from an internal employee portal API. No connector exists for it, and only this one agent requires access.

**A maker needs to expose an internal employee portal API to only one specific agent. No connector exists for this API yet. Which tool type best fits, and why?**

- **A.** A custom connector, because it is reusable across Copilot Studio, Power Automate, Power Apps, and Azure Logic Apps
- **B.** A REST API tool, because it is created directly in Copilot Studio and avoids building a full custom connector for a single use case
- **C.** A prebuilt connector, since Microsoft publishes one for every internal API
- **D.** A Copilot connector knowledge source, since knowledge sources ground responses in enterprise data

**Answer:** B
**Confidence:** Derived

REST API tools 'let you connect an agent directly to a REST API...without creating a connector first. This path is useful when no connector exists for a target API and the overhead of building a full custom connector isn't justified for a single use case' — which matches the employee-portal scenario in the module.

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Understand connector and REST API tools in Copilot Studio

### Q121 — What drives generative orchestration tool invocation
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**In Copilot Studio's default generative orchestration mode, what determines whether the orchestrator invokes a particular connector or REST API tool for a user's request?**

- **A.** The tool's name and description matched against the user's message
- **B.** The order in which tools were added to the agent
- **C.** Whether the tool has been run once in the Test pane
- **D.** The tool's authentication mode (user-provided vs. maker-provided)

**Answer:** A
**Confidence:** Certain

The unit states that with generative orchestration enabled, 'the orchestrator evaluates the user's message against each tool's name and description and selects the most appropriate action to fulfill the task.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Understand connector and REST API tools in Copilot Studio

### Q122 — Connector as tool vs. connector as knowledge source
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**An agent needs to look up current inventory levels to answer a read-only question, and separately needs to update an inventory record when a user requests a change. How should the maker configure the same underlying Power Platform connector for each capability?**

- **A.** Configure the connector as a knowledge source for the lookup and as a tool for the update
- **B.** Configure both capabilities using the same connector tool configuration
- **C.** Knowledge sources cannot be used for lookups; only tools can retrieve data
- **D.** Use REST API tools for both, since connectors only support knowledge scenarios

**Answer:** A
**Confidence:** Certain

The unit distinguishes the two roles explicitly: 'An agent looking up current inventory levels to answer a question uses a connector knowledge source. An agent updating an inventory record uses a connector tool.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Understand connector and REST API tools in Copilot Studio

### Q123 — Premium connector licensing behavior
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**A maker tries to add a premium connector to an agent, but the current Copilot Studio plan doesn't include premium access. What happens?**

- **A.** Copilot Studio silently substitutes an equivalent standard connector
- **B.** Copilot Studio displays a licensing prompt
- **C.** The connector is added with reduced functionality
- **D.** The agent automatically falls back to a REST API tool

**Answer:** B
**Confidence:** Certain

The unit states: 'If your plan doesn't include premium access, Copilot Studio displays a licensing prompt when you attempt to add a premium connector.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Add prebuilt and custom connector tools to an agent

### Q124 — Custom connector sharing prerequisite
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Before another maker can add an existing custom connector as a tool to their own agent, what must already be true?**

- **A.** The connector must be republished to the environment's default solution
- **B.** The connector must be shared with that maker using Can view or Can edit permission
- **C.** The connector must first be converted into a REST API tool
- **D.** The maker must hold the System Administrator security role in the environment

**Answer:** B
**Confidence:** Certain

The unit says: 'For an agent to use a custom connector, other makers must have the connector shared with them using Can view (or Can edit) permission. This is a step that makers often configure separately... and can easily be missed.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Add prebuilt and custom connector tools to an agent

### Q125 — Maker-provided credential mode and channel requirement
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> Woodgrove Bank's IT service desk agent submits requests through a Dataverse connector using a dedicated service account; individual employees have no direct account in that system.

**Employees at a bank don't have individual accounts in the IT service management system; the bank maintains one dedicated service account with write access. Which credential mode fits, and what deployment requirement comes with it?**

- **A.** User-provided credentials; works on any channel
- **B.** Maker-provided credentials; requires the agent to be deployed on an authenticated channel
- **C.** Maker-provided credentials; requires no additional channel configuration
- **D.** User-provided credentials; requires an authenticated channel

**Answer:** B
**Confidence:** Certain

Maker-provided credentials fit when 'individual users don't have their own credentials for the target system,' as in the Woodgrove Bank example, but the module warns: 'Maker-provided credentials require the agent to be deployed on an authenticated channel.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Configure authentication for connector tools

### Q126 — Teams SSO limitation for connector tools
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**An agent deployed to Microsoft Teams uses custom Active Directory (AD) authentication and includes several connector tools. What authentication behavior should the maker expect for those connector tools?**

- **A.** Single sign-on (SSO) works automatically for all connectors
- **B.** SSO isn't supported for connector tools in this combination, so users must sign in to each connector manually
- **C.** Connector tools are disabled entirely whenever custom AD authentication is used
- **D.** Only maker-provided credential connectors are affected by this limitation

**Answer:** B
**Confidence:** Certain

The unit states: 'When an agent is deployed to Microsoft Teams and uses custom Active Directory (AD) authentication, single sign-on (SSO) isn't supported for connector tools in that configuration. Users must authenticate to each connector manually.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Configure authentication for connector tools

### Q127 — OpenAPI v3 handling and endpoint selection
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker uploads an OpenAPI v3 specification to create a REST API tool. The spec defines 12 endpoints, though the agent only needs 2. What happens to the spec format, and what's the recommended endpoint selection approach?**

- **A.** Copilot Studio rejects OpenAPI v3 files, and all 12 endpoints must be selected
- **B.** Copilot Studio automatically converts the v3 spec to v2, and the maker should select only the 2 needed endpoints
- **C.** Copilot Studio converts v3 to v2 only for GET operations, and all endpoints must still be exposed
- **D.** Copilot Studio requires the maker to manually convert the spec to v2 before uploading

**Answer:** B
**Confidence:** Certain

The unit states OpenAPI v3 specs are 'automatically converted...to v2 during upload,' and separately advises selecting 'only the endpoints your agent's use cases require...to keep the tool surface area minimal.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Add a REST API tool using an OpenAPI specification

### Q128 — REST API tool authentication options
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which three authentication options does Copilot Studio support when configuring a REST API tool?**

- **A.** None, API key, and OAuth 2.0
- **B.** None, Basic Auth, and SAML
- **C.** API key, Client Certificate, and Kerberos
- **D.** OAuth 2.0, SSO, and Anonymous

**Answer:** A
**Confidence:** Certain

The unit lists exactly three options: 'None: The API is openly accessible...API key: The API authenticates using a key...OAuth 2.0: The API authenticates through an identity provider.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Add a REST API tool using an OpenAPI specification

### Q129 — Module summary — the two primary action integration paths
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Per the module summary, which two mechanisms are described as the main paths for connecting a Copilot Studio agent to external systems for taking action?**

- **A.** Connector tools and REST API tools
- **B.** Copilot connectors and Azure AI Search
- **C.** Child agents and connected agents
- **D.** Topics and generative answers

**Answer:** A
**Confidence:** Certain

The summary states: 'Connector tools and REST API tools are the two main paths for connecting a Copilot Studio agent to external systems. Connectors use the Power Platform ecosystem; REST API tools offer a lighter-weight path.'

**Source:** Take action in external systems using connector and REST API agent tools in Microsoft Copilot Studio — Summary

### Q130 — How Copilot connectors enable citations
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**What underlying mechanism allows Copilot connectors to support inline citations in agent responses?**

- **A.** Content is ingested and semantically indexed into Microsoft Graph
- **B.** Each query triggers a live API call to the source system
- **C.** The connector caches a copy of results in Dataverse
- **D.** Citations are manually configured by the maker for each source

**Answer:** A
**Confidence:** Certain

The unit explains Copilot connectors 'work by ingesting and semantically indexing external content into Microsoft Graph...agents retrieve it using semantic search and can cite specific items in their responses.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Choose between Copilot connector and Power Platform connector knowledge sources

### Q131 — Choosing a source for live account balance data
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A branch staff support agent at a retail bank needs to surface current account balances on demand.

**A branch staff agent must answer 'What's the current balance on account 4471?' Which knowledge source type is appropriate, and why?**

- **A.** A Copilot connector, because indexed content is always retrieved faster
- **B.** A real-time Power Platform connector, because the answer must reflect live state and financial data shouldn't be replicated into Microsoft Graph
- **C.** An Azure AI Search index, because balances require vector embeddings
- **D.** Either source works equally well since both return live data

**Answer:** B
**Confidence:** Certain

The module states this exact scenario resolves to 'the real-time connector — the answer must reflect the live account state, and replicating regulated banking data into Microsoft Graph wouldn't be appropriate.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Choose between Copilot connector and Power Platform connector knowledge sources

### Q132 — Common pitfall in knowledge source selection
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What common pitfall does the module call out when selecting a knowledge source type?**

- **A.** Using a Copilot connector for frequently changing data results in stale answers due to indexing lag
- **B.** Using a real-time connector always produces incorrect citation errors
- **C.** Azure AI Search cannot coexist with Copilot connectors in the same agent
- **D.** Real-time connectors require Azure AI Search as a prerequisite

**Answer:** A
**Confidence:** Certain

The module warns: 'Using a Copilot connector for data that changes frequently results in stale answers due to indexing lag.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Choose between Copilot connector and Power Platform connector knowledge sources

### Q133 — Admin prerequisite for Copilot connectors
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Before a maker can add a Copilot connector as a knowledge source to an agent, what must already be true?**

- **A.** The maker must build a custom connector wrapper for it first
- **B.** A tenant administrator must have configured the Copilot connector in the Microsoft 365 admin center
- **C.** The agent must already be published to an authenticated channel
- **D.** The knowledge source must first be tested via Azure AI Search

**Answer:** B
**Confidence:** Certain

The unit states: 'Copilot connectors are configured at the tenant level by an administrator...Before you can add a Copilot connector as a knowledge source, the tenant admin must configure it and make it available.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Add Copilot connectors as knowledge sources

### Q134 — Missing Graph scope for Copilot connector on authenticated channel
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> A maker publishes a Copilot Studio agent with a Copilot connector knowledge source to an authenticated Microsoft Teams channel.

**A maker publishes an agent with a Copilot connector knowledge source to an authenticated Teams channel but forgets to add a Graph scope to the channel's manual authentication configuration. What is the likely result?**

- **A.** The agent works normally; no scope is required for Teams
- **B.** The agent won't return content from the connector at runtime, even though it's correctly added and configured
- **C.** The agent automatically falls back to a real-time connector
- **D.** Publishing fails immediately with a blocking error before the agent goes live

**Answer:** B
**Confidence:** Certain

The module states: 'If you publish an agent with a Copilot connector knowledge source to an authenticated channel without adding the ExternalItem.Read.All scope to the channel's authentication configuration, the agent won't return knowledge from the connector.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Add Copilot connectors as knowledge sources

### Q135 — What is indexed for real-time connector knowledge sources
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**For a real-time Power Platform connector knowledge source, what does Copilot Studio actually index, and under whose identity does runtime data retrieval occur?**

- **A.** Only metadata (table and column names); retrieval happens under the authenticated identity of the user asking the question
- **B.** The full dataset; retrieval happens under a shared service identity
- **C.** Nothing at all; retrieval always uses maker credentials
- **D.** The full dataset into Microsoft Graph, the same as Copilot connectors

**Answer:** A
**Confidence:** Certain

The unit states: 'Copilot Studio indexes only metadata (table names and column names)...The actual data retrieval happens at runtime, under the authenticated identity of the user asking the question.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Configure Power Platform connectors as real-time knowledge sources

### Q136 — Governance control over real-time connector availability
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What governs which Power Platform connectors are available for use as real-time knowledge sources in an environment?**

- **A.** The environment's data loss prevention (DLP) policies
- **B.** The Azure AI Search service tier
- **C.** The Copilot connector gallery configured in the Microsoft 365 admin center
- **D.** The MCP server's authentication configuration

**Answer:** A
**Confidence:** Certain

The unit states: 'Your environment's data loss prevention (DLP) policies determine which connectors are available. If a connector is blocked by DLP, it won't appear as an option, and any existing connector knowledge source using it stops working.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Configure Power Platform connectors as real-time knowledge sources

### Q137 — Critical rule for connecting Azure AI Search
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**What must a maker always do when adding Azure AI Search as a knowledge source, and what is the risk of not doing so?**

- **A.** Always use the Create new connection dialog; manual endpoint/key entry can create a faulty environment-level connection that blocks all agents in the environment from adding Azure AI Search
- **B.** Always enter the endpoint URL manually for faster setup; the Create new connection dialog is optional
- **C.** Always enable the semantic ranker first, or the connection fails outright
- **D.** Always configure VNet support first, even when the index has a public endpoint

**Answer:** A
**Confidence:** Certain

The module warns: 'Always add Azure AI Search through the Create new connection dialog — never by manually entering an endpoint URL and API key...Manual entry creates a faulty environment-level connection that can block all agents in the environment from adding Azure AI Search as a knowledge source.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Connect an agent to Azure AI Search

### Q138 — Recommended Azure AI Search authentication type
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which Azure AI Search authentication type is recommended in Copilot Studio, and why?**

- **A.** Access Key, because it's the fastest option to set up in any environment
- **B.** Microsoft Entra ID Integrated, because it uses the signed-in user's identity and removes key-rotation overhead
- **C.** Client Certificate Auth, because it's required in all production environments
- **D.** Service principal, because it's the only option that supports the semantic ranker

**Answer:** B
**Confidence:** Certain

The unit states: 'Microsoft Entra ID Integrated authentication is the recommended option. It uses the signed-in user's identity rather than a stored key or certificate, which removes the overhead of key rotation.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Connect an agent to Azure AI Search

### Q139 — Citation field precedence in Azure AI Search index
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**An Azure AI Search index contains both a metadata_storage_path field and a custom doc_link field that holds a full document URL. Which field does Copilot Studio use for the citation URL, and why?**

- **A.** doc_link, because custom fields always take priority over system fields
- **B.** metadata_storage_path, because Copilot Studio checks for this field first before falling back to any field containing a full URL
- **C.** Neither — citation fields must always be manually mapped
- **D.** Both fields are combined into a single composite citation link

**Answer:** B
**Confidence:** Certain

The unit states: 'Copilot Studio checks for a field named metadata_storage_path first. If that field exists in the index, it uses it as the citation URL. If metadata_storage_path isn't present, Copilot Studio identifies whichever field contains a complete URL.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Connect an agent to Azure AI Search

### Q140 — Where to configure VNet support for Azure AI Search
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**An organization runs Azure AI Search behind a private endpoint. Where must virtual network (VNet) support be configured before connecting the knowledge source in Copilot Studio?**

- **A.** In the Power Platform admin center
- **B.** On the Copilot Studio Tools page
- **C.** Directly in the Azure AI Search knowledge source dialog
- **D.** In the Microsoft 365 admin center

**Answer:** A
**Confidence:** Certain

The unit instructs: 'set up Virtual Network support in the Power Platform admin center before configuring the connection in Copilot Studio.'

**Source:** Ground agents in enterprise knowledge using connectors and Azure AI Search in Microsoft Copilot Studio — Connect an agent to Azure AI Search

### Q141 — Definition of Model Context Protocol
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**What is Model Context Protocol (MCP), as described in this module?**

- **A.** An open, standardized protocol defining how AI applications discover and invoke tools, resources, and prompts exposed by external servers
- **B.** A Microsoft-proprietary format for wrapping Dataverse tables as connectors
- **C.** A workflow engine used to orchestrate serial and concurrent multi-agent tasks
- **D.** An authentication provider built specifically for Copilot Studio

**Answer:** A
**Confidence:** Certain

The unit defines MCP directly: 'Model Context Protocol (MCP) is an open, standardized protocol that defines how AI applications — including agents — discover and invoke tools, resources, and prompts exposed by external servers.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Understand MCP integration in Copilot Studio

### Q142 — Primary advantage of MCP over per-system integrations
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What is the primary advantage of connecting an agent to an MCP server compared to building a separate connector or bridge for each backend capability?**

- **A.** MCP servers never require authentication of any kind
- **B.** A single MCP server can expose many tools, using the same discovery/invocation handshake regardless of which system sits behind it
- **C.** MCP servers automatically generate agent conversation instructions
- **D.** MCP eliminates the need for any tool descriptions

**Answer:** B
**Confidence:** Certain

The unit states: 'MCP consolidates this: a single MCP server can expose many tools, and the client-server handshake for discovery and invocation is the same regardless of which system sits behind the server.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Understand MCP integration in Copilot Studio

### Q143 — Best-fit scenario for MCP vs. other integration patterns
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**According to the comparison of integration patterns, when is an MCP server connection the best-fit choice, compared to a pre-built/custom connector or a direct REST API tool?**

- **A.** When the target system exposes (or can expose) many related capabilities through one server, especially one that may serve multiple AI clients beyond Copilot Studio
- **B.** When there's no existing connector and only a single ad hoc endpoint is needed
- **C.** When the system is well-known and already has a Microsoft-published connector
- **D.** When the agent must always act under a fixed service identity

**Answer:** A
**Confidence:** Certain

The comparison table lists the MCP server connection's best fit as: 'Systems that expose (or can expose) many related capabilities through one server, especially where the same server may serve multiple AI clients beyond Copilot Studio.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Understand MCP integration in Copilot Studio

### Q144 — Maker responsibility vs. server owner responsibility
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**As a Copilot Studio maker connecting to an MCP server, what is explicitly your responsibility versus the server owner's responsibility?**

- **A.** You are responsible for hosting the server; the owning team only tests it
- **B.** Your responsibility is client-side — adding the connection, configuring authentication, and choosing which exposed tools to enable; the server owner keeps the server available, secure, and protocol-compliant
- **C.** You must rewrite the server's tool manifest before your agent can use it
- **D.** The server owner decides which tools are enabled for your specific agent

**Answer:** B
**Confidence:** Certain

The unit states: 'As a Copilot Studio maker, your responsibility is on the client side: adding the MCP server connection to your agent, configuring the authentication required to reach it, and choosing which of its exposed tools your agent is allowed to use. You aren't responsible for building or hosting the MCP server itself.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Understand MCP integration in Copilot Studio

### Q145 — Connecting to an MCP server and discovery handshake
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A bank's engineering team hosts an internal MCP server exposing loan status, compliance escalation, and branch metrics tools; a Copilot Studio maker is connecting the branch staff support agent to it for the first time.

**A maker is connecting a Copilot Studio agent to an internal MCP server for the first time. What must the maker provide, and what happens immediately after the connection is established?**

- **A.** The server's endpoint URL; Copilot Studio performs a discovery handshake and retrieves the list of tools the server exposes
- **B.** The server's source code repository; Copilot Studio compiles the tools locally
- **C.** A manually authored OpenAPI specification describing every server tool
- **D.** Nothing further — all server tools are enabled automatically by default

**Answer:** A
**Confidence:** Certain

The unit's steps say the maker provides 'the MCP server's endpoint URL,' after which 'Copilot Studio contacts the server, performs the MCP discovery handshake, and retrieves the list of tools the server exposes.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Connect an agent to an MCP server

### Q146 — Who owns MCP tool descriptions and how to fix a vague one
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**During testing, the orchestrator fails to invoke an MCP-exposed tool correctly because its description returned by the server is vague. What should the maker do?**

- **A.** Edit the tool's description directly within Copilot Studio, the same way as a REST API tool
- **B.** Provide that feedback to the team maintaining the MCP server, since the description is owned by the server and generally can't be edited within Copilot Studio
- **C.** Disable generative orchestration entirely for that specific tool
- **D.** Recreate the tool as a custom connector to gain description-editing capability

**Answer:** B
**Confidence:** Certain

The unit states: 'Unlike with REST API tools you configure directly, you generally can't edit the tool's description within Copilot Studio when it comes from an MCP server — the description is owned by the server. If tool descriptions are unclear, that feedback goes back to the team maintaining the MCP server.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Connect an agent to an MCP server

### Q147 — Recommended troubleshooting order for a non-invoked MCP tool
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**An MCP-exposed tool isn't invoked as expected while testing an agent in the Test pane. What troubleshooting order does the module recommend?**

- **A.** Check whether the tool is enabled, then check the description for ambiguity, then verify authentication is correctly configured
- **B.** Immediately delete and recreate the MCP server connection from scratch
- **C.** Disable every other tool on the agent first to isolate the issue
- **D.** Contact the MCP protocol maintainers before checking any local configuration

**Answer:** A
**Confidence:** Certain

The unit says: 'If the agent doesn't invoke the tool as expected, check first whether the tool is enabled ...then check the tool's description for ambiguity, and finally verify that authentication to the server is correctly configured.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Connect an agent to an MCP server

### Q148 — Recommended MCP authentication for per-user access control
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which MCP authentication option is recommended for production scenarios where the server needs to enforce per-user access control?**

- **A.** No authentication
- **B.** API key
- **C.** OAuth 2.0 / Microsoft Entra ID, especially passing through the signed-in user's identity
- **D.** Basic username and password

**Answer:** C
**Confidence:** Certain

The authentication comparison table lists OAuth 2.0 / Microsoft Entra ID as 'Recommended for production scenarios where the server needs to enforce per-user access control.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Configure authentication for MCP server connections

### Q149 — Why pass through signed-in user identity to an MCP server
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> A branch staff member in Chicago asks the agent about a loan application, and the MCP server must only return applications belonging to that staff member's own branch, not every branch bank-wide.

**Why does a bank's MCP server connection pass through the signed-in user's identity rather than using a fixed service identity for a branch staff support agent?**

- **A.** It's required by the Model Context Protocol specification for every connection
- **B.** It lets the MCP server enforce its own per-user or role-based access control, such as limiting loan application results to a staff member's own branch
- **C.** It removes the need for the server to implement any authentication at all
- **D.** It's only relevant when using API key authentication

**Answer:** B
**Confidence:** Certain

The unit explains that passing the user's identity lets 'the server apply its own row-level and role-based access checks — for example, ensuring a staff member can only see loan applications for their assigned branch.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Configure authentication for MCP server connections

### Q150 — Effect of an outdated MCP credential
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**An engineering team rotates the API key used to secure an MCP server, but the corresponding Copilot Studio connection isn't updated. What is the typical effect?**

- **A.** Only newly added tools are affected; already-enabled tools keep working
- **B.** Every enabled tool from that server typically stops functioning until the credential is corrected
- **C.** The connection automatically falls back to no-authentication mode
- **D.** The agent silently switches to serving cached responses for that server

**Answer:** B
**Confidence:** Certain

The unit states: 'An outdated credential doesn't just degrade the connection; it typically causes every enabled tool from that server to stop functioning until the credential is corrected.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Configure authentication for MCP server connections

### Q151 — New MCP server tool availability to an already-connected agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**An MCP server that a Copilot Studio agent is already connected to gains a new tool. What happens to that tool from the connected agent's perspective?**

- **A.** It's automatically enabled and immediately callable by the orchestrator
- **B.** It becomes available for the maker to review on the Tools page and must be explicitly enabled — it isn't enabled automatically
- **C.** The existing MCP connection breaks until the maker reconnects to the server
- **D.** It replaces the oldest previously enabled tool from that server automatically

**Answer:** B
**Confidence:** Certain

The unit states: 'When the engineering team adds a new tool...it doesn't automatically become available to the branch staff agent. The maker must return to the Tools page, locate the newly available tool under the existing MCP connection...and explicitly enable it if appropriate.'

**Source:** Integrate agents with external systems via MCP in Microsoft Copilot Studio — Enable and manage MCP tools

### Q152 — Two forms of multi-agent solutions in Copilot Studio
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**In Copilot Studio, multi-agent solutions take which two forms?**

- **A.** Child agents and connected agents
- **B.** Topics and generative answers
- **C.** Orchestrators and workflow engines only
- **D.** Prebuilt connectors and custom connectors

**Answer:** A
**Confidence:** Certain

The unit states: 'In Copilot Studio, multi-agent solutions take two forms: child agents, which are built inside your main agent...and connected agents, which are separately deployed agents your main agent communicates with at runtime.'

**Source:** Design multi-agent solutions in Microsoft Copilot Studio — Understand multi-agent architectures in Copilot Studio

### Q153 — Signal that a multi-agent architecture is worth considering
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What is described as the most reliable signal that a multi-agent architecture is worth considering?**

- **A.** The agent has more than five knowledge sources configured
- **B.** Routing accuracy degradation, with a practical rule-of-thumb threshold around 30–40 choices of action
- **C.** The agent has been in production for more than one year
- **D.** The agent uses more than one authentication method

**Answer:** B
**Confidence:** Certain

The unit states: 'The most reliable signal that a multi-agent architecture is worth considering is routing accuracy degradation in your main agent. As a rule of thumb, when an agent reaches 30–40 choices of action ...the orchestration layer starts to struggle with precision.'

**Source:** Design multi-agent solutions in Microsoft Copilot Studio — Understand multi-agent architectures in Copilot Studio

### Q154 — Choosing child agent for a team-owned, non-reused capability
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> An orchestrator team needs a new billing capability. The same team will build and maintain it, and it will only ever be used through this one orchestrator.

**A team is adding a billing capability that they will build and maintain entirely themselves. It doesn't need to be published separately, and no other agent will reuse it. Which multi-agent approach fits best?**

- **A.** A child agent
- **B.** A connected agent using the Existing Copilot Studio agent option
- **C.** An A2A protocol agent
- **D.** A Microsoft Foundry agent

**Answer:** A
**Confidence:** Certain

The unit lists child agent criteria: 'Your team builds and maintains the full agent solution; Components don't need to be published separately or accessed directly by users...The capabilities are specific to this solution and won't be reused by other agents' — matching this scenario exactly.

**Source:** Design multi-agent solutions in Microsoft Copilot Studio — Design multi-agent solutions using child agents

### Q155 — Key constraint of child agents
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What is the key constraint of using a child agent instead of a connected agent?**

- **A.** Child agents can't share conversation context or variables with the parent agent
- **B.** A child agent can't be updated, deployed, or versioned independently of its parent — its lifecycle is coupled to the parent's
- **C.** Child agents always add more orchestration latency than connected agents
- **D.** Child agents require a separate authentication configuration from the parent

**Answer:** B
**Confidence:** Certain

The unit states: 'The key constraint is lifecycle coupling. A child agent can't be updated, deployed, or versioned independently of its parent. If a component needs a separate release cadence or is owned by a different team, a connected agent is the better fit.'

**Source:** Design multi-agent solutions in Microsoft Copilot Studio — Design multi-agent solutions using child agents

### Q156 — Choosing workflow-oriented pattern for strict compliance ordering
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> A procurement team's quarterly vendor contract review: the workflow validates each contract against multiple policy agents in a defined sequence, then routes to a legal reviewer before sign-off.

**A quarterly vendor contract review requires three mandatory compliance checks to run in a defined order, followed by routing to a legal reviewer before sign-off. No step can be skipped or reordered. Which coordination pattern fits, and why?**

- **A.** Orchestrator/subagent, because it adapts dynamically to each contract's specific content
- **B.** Workflow-oriented, because the process is deterministic with strict step ordering and needs a strong audit trail
- **C.** A concurrent workflow, because running the compliance checks in parallel is always faster
- **D.** Either pattern works equally well since both support human-in-the-loop approval gates

**Answer:** B
**Confidence:** Certain

The module states: 'Use the workflow-oriented pattern when your process has well-defined steps with strong dependencies, requires a complete audit trail, or involves compliance workloads where consistent outcomes aren't optional' — matching the vendor contract review scenario used as an example in the module.

**Source:** Design multi-agent solutions in Microsoft Copilot Studio — Design multi-agent solutions using connected agents

### Q157 — Connection option for a cross-platform partner agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A logistics partner's shipment-tracking capability runs on a non-Microsoft platform and manages its own reasoning. Which connection option is most appropriate when adding it to a Copilot Studio orchestrator?**

- **A.** Existing Copilot Studio agent
- **B.** Microsoft Foundry agent
- **C.** A2A protocol agent
- **D.** Microsoft Fabric Data agent

**Answer:** C
**Confidence:** Certain

The connection options table describes the A2A protocol agent as being 'for connecting to partner or cross-platform agents that manage their own reasoning and aren't hosted on Microsoft infrastructure' — exactly matching the shipment-tracking example given in the module.

**Source:** Design multi-agent solutions in Microsoft Copilot Studio — Design multi-agent solutions using connected agents

### Q158 — Preview limitation specific to Fabric Data agents
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**What limitation applies specifically to Microsoft Fabric Data agent connections, per the module's note on preview connection options?**

- **A.** They can't be invoked using a topic Redirect node, and don't function when the main agent is deployed to Microsoft 365 Copilot
- **B.** They require a dedicated Azure subscription for every connected agent
- **C.** They can only be used as child agents, never as connected agents
- **D.** They don't support any form of authentication configuration

**Answer:** A
**Confidence:** Certain

The module's note states: 'Fabric Data agents can't be invoked using a topic Redirect node, and they don't function when your main agent is deployed to Microsoft 365 Copilot.'

**Source:** Design multi-agent solutions in Microsoft Copilot Studio — Design multi-agent solutions using connected agents

### Q159 — Governance requirement before calling a connected agent with write access
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**Before an orchestrator calls a connected agent that can modify or delete records in a system of record, what must be in place, according to the module's governance guidance?**

- **A.** Nothing extra — connected agents automatically inherit the orchestrator's existing approvals
- **B.** Explicit approval controls, along with confirmation that data-sharing agreements and security reviews are in place, since the trust boundary is extended
- **C.** Only a signed service-level agreement with the connected agent's owning team
- **D.** A single shared authentication identity used across both agents

**Answer:** B
**Confidence:** Certain

The module states: 'Before your orchestrator calls a connected agent with write access to any system of record, verify that approval controls, data-sharing agreements, and security reviews are in place.'

**Source:** Design multi-agent solutions in Microsoft Copilot Studio — Design multi-agent solutions using connected agents

### Q160 — Choose child agents for one-team ownership
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A single team owns an order-management solution and wants separate handling for tracking, returns, and delivery issues, but does not need to publish any subagent independently.

**Why are child agents the best fit for this design?**

- **A.** Each child agent can be published and governed through its own separate ALM process.
- **B.** Child agents let the team keep domain boundaries inside one solution and one publishing process.
- **C.** Child agents require a separate environment from the parent for clean isolation.
- **D.** Child agents are the only way to pass conversation context between specialized components.

**Answer:** B
**Confidence:** Certain

The unit says child agents are appropriate when one team owns the whole solution, subagents do not need independent publishing, and the goal is to organize tools and knowledge within a single solution.

**Source:** Delegate agent tasks using child agents in Copilot Studio — Understand child agents in Copilot Studio

### Q161 — Know when to use a connected agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> The returns capability is owned by a separate customer operations team. That team must publish and maintain its agent independently and make it available to multiple agents across the organization.

**According to the unit, what should Fabrikam use for returns and exchanges?**

- **A.** A child agent inside the order-management parent
- **B.** A topic with more nodes
- **C.** A connected agent
- **D.** A parent-level tool instead of an agent

**Answer:** C
**Confidence:** Certain

The source explicitly says that if another team needs to publish and maintain the capability independently and expose it across multiple agents, a connected agent is more appropriate.

**Source:** Delegate agent tasks using child agents in Copilot Studio — Understand child agents in Copilot Studio

### Q162 — Pick the routing mode for phrasing variation
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

> Users ask order-status questions in many different ways, such as "Where's my package?" and "Has my order shipped?".

**Which configuration best matches this need?**

- **A.** Use description-based routing so the orchestrator matches natural-language intent to the child agent description.
- **B.** Use only the inactivity trigger, because it handles variation automatically.
- **C.** Use the plan-completes trigger, because it runs before all conversational routing.
- **D.** Avoid child agents and rely on one broad parent description.

**Answer:** A
**Confidence:** Certain

The unit states that description-based routing is the default and handles phrasing variation well by evaluating incoming messages against child agent descriptions.

**Source:** Delegate agent tasks using child agents in Copilot Studio — Create and configure a child agent

### Q163 — Understand trigger execution order
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**Which statement correctly describes how Copilot Studio resolves competing child-agent triggers?**

- **A.** Description-based routing runs first, then message and invoke triggers, then activity triggers.
- **B.** Within the same trigger tier, newer agents run before older ones unless priority is set.
- **C.** An activity occurs triggers run before message/custom event/conversation change/invoked triggers, and description-based routing runs last.
- **D.** Priority matters only for description-based routing, not for explicit triggers.

**Answer:** C
**Confidence:** Certain

The unit gives a built-in execution order: activity triggers first, then message/custom event/conversation change/invoked triggers, and description-based routing last. It also says same-tier agents fire oldest first unless an explicit priority number is set, where a lower number is higher priority.

**Source:** Delegate agent tasks using child agents in Copilot Studio — Create and configure a child agent

### Q164 — Prevent child-agent tool bypass
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> A child agent is supposed to run its own instructions before using "Get order details," but the orchestrator sometimes calls that tool directly and returns a raw tool response.

**What change does the unit recommend?**

- **A.** Remove the tool from the child agent and leave it only on the parent.
- **B.** Clear Allow agent to decide dynamically when to use this tool so the tool is restricted to explicit invocation.
- **C.** Mark the child agent input as optional so the parent stops using the tool.
- **D.** Set After running to Send specific response.

**Answer:** B
**Confidence:** Certain

The source warns that if the tool is also visible to the orchestrator, the orchestrator might call it directly. The fix is to clear the dynamic-use setting so the tool can only be called when explicitly referenced in instructions or a topic.

**Source:** Delegate agent tasks using child agents in Copilot Studio — Configure child agent inputs, outputs, and trigger behavior

### Q165 — Use advanced input controls appropriately
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> An order-status child agent requires an order number. The parent often cannot infer it from context, the value must match a format, and the designer wants to control retries and what happens if no valid value is collected.

**Where should this behavior be configured?**

- **A.** In the child agent description, because routing also controls value collection.
- **B.** In the input's Advanced section, using prompting, validation, reprompts, and action-if-not-found settings.
- **C.** Only in the After running setting, because completion behavior governs prerequisites.
- **D.** In the parent's publish settings, because required inputs are resolved at deployment time.

**Answer:** B
**Confidence:** Certain

The unit says to use the Advanced section when the parent cannot reliably supply the value, when validation is needed, or when you want control over repeated invalid input and what to do if no valid value is collected.

**Source:** Delegate agent tasks using child agents in Copilot Studio — Configure child agent inputs, outputs, and trigger behavior

### Q166 — Diagnose routing with the activity map
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> During testing, the prompt "Can I track my package?" routes to the wrong child agent.

**What troubleshooting pattern does the unit recommend first?**

- **A.** Delete the misfiring child agent and recreate it with a new name.
- **B.** Use the activity map to see which agent was called, refine overlapping descriptions, then retest.
- **C.** Raise the child agent priority, because description text never affects routing.
- **D.** Publish the child agent separately so it can be debugged outside the parent.

**Answer:** B
**Confidence:** Certain

The unit describes a cycle of testing, checking the activity map to see which agent was selected, clarifying descriptions to remove overlap, and retesting.

**Source:** Delegate agent tasks using child agents in Copilot Studio — Test and manage child agents

### Q167 — Choose disable versus delete
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A child agent depends on a backend system that will be unavailable during scheduled maintenance, and the team expects to restore the agent afterward.

**What is the safest action?**

- **A.** Use the Enabled toggle to turn the child agent off temporarily and turn it back on later.
- **B.** Delete the child agent so the orchestrator can route around it automatically.
- **C.** Leave it enabled; the orchestrator will detect backend outages and suppress it.
- **D.** Convert it to a topic, because topics survive maintenance windows better.

**Answer:** A
**Confidence:** Certain

The unit says the Enabled toggle takes a child agent out of rotation without removing it and is useful during temporary outages or staged rollouts. Deletion is permanent and safer only when the agent is definitively retired.

**Source:** Delegate agent tasks using child agents in Copilot Studio — Test and manage child agents

### Q168 — Identify a connected agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

> A procurement orchestrator invokes a Legal team's agent that is published independently and maintained on the Legal team's own schedule.

**In Copilot Studio terms, what kind of agent is the Legal team's agent?**

- **A.** A child agent
- **B.** A connected agent
- **C.** A topic
- **D.** A tool

**Answer:** B
**Confidence:** Certain

The source defines a connected agent as one that is separately published and independently managed, then connected to by an orchestrator for delegated work. That matches an agent owned and published on another team's schedule.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Understand connected agents in Copilot Studio

### Q169 — Assign governance responsibility
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> Before enabling a connection to a Foundry-hosted risk agent, a maker is clarifying what they personally own versus what the other team owns.

**Which responsibility belongs to the maker establishing the connection?**

- **A.** Rebuilding the connected agent's internal topics and tools
- **B.** Taking responsibility for the data that flows between the agents
- **C.** Publishing the connected agent on the owning team's behalf
- **D.** Merging both agents' transcripts into one automatic log

**Answer:** B
**Confidence:** Certain

The source says the maker is not responsible for the connected agent's internal behavior, but is responsible for the connection's data flow, including whether forwarded data is appropriate under policies and terms.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Understand connected agents in Copilot Studio

### Q170 — Why an agent doesn't appear
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A Legal team's Copilot Studio agent is published, in the same environment, and shared with the orchestrator maker. It still doesn't show up in the connection list.

**What is the most likely reason based on the training?**

- **A.** Its description is too broad
- **B.** The setting Let other agents connect to and use this one is turned off
- **C.** Conversation history passing is disabled
- **D.** Another connected agent already uses the same name

**Answer:** B
**Confidence:** Certain

The source lists enabled connections as a prerequisite and states that without that setting, the agent won't appear in the connection flow even if it is published in the same environment.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Connect an existing Copilot Studio agent

### Q171 — Handle source-agent description changes
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**After you connect a Copilot Studio agent, the owning team updates that agent's description and republishes it. What must you do if you want your orchestrator's routing to reflect the new scope?**

- **A.** Nothing; the orchestrator syncs descriptions automatically
- **B.** Disconnect and reconnect the agent every time
- **C.** Manually update the orchestrator's local description copy
- **D.** Turn conversation history back on for the connection

**Answer:** C
**Confidence:** Certain

The orchestrator routes using its own stored description copy, not the source agent's live description. The source explicitly says this local copy does not sync automatically and must be updated manually when scope changes.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Connect an existing Copilot Studio agent

### Q172 — Resolve a Foundry connection 404
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A maker enters Foundry connection details in Copilot Studio, but the attempt returns a 404 error.

**Which issue should the maker check first?**

- **A.** The agent description wasn't specific enough
- **B.** The agent was created in the legacy Azure AI Studio portal instead of the new Microsoft Foundry portal
- **C.** Conversation history forwarding is disabled
- **D.** The target agent is missing a published version in Power Platform

**Answer:** B
**Confidence:** Certain

The source states that Foundry agents must come from the new Microsoft Foundry portal. Agents created in the legacy Azure AI Studio portal return a 404 when Copilot Studio tries to connect to them.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Connect a Microsoft Foundry agent

### Q173 — Update a replaced Foundry agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

> The Foundry team replaces the underlying agent with a new version and gives you a new agent ID.

**What can you update in Copilot Studio without recreating the full connection?**

- **A.** Only the project endpoint URL
- **B.** Only the agent ID
- **C.** Only the connection name and description
- **D.** Nothing; you must disconnect and reconnect

**Answer:** B
**Confidence:** Certain

The source gives a specific maintenance action for Foundry connections: update the agent ID field on the connected agent details page. It also says the connection settings, description, and name remain unchanged.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Connect a Microsoft Foundry agent

### Q174 — Choose the supported Fabric routing pattern
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> A maker has a topic that already handles spend questions and wants to explicitly hand them off to a connected Fabric Data agent using an agent redirect node.

**What does the training say about that design?**

- **A.** It is the recommended way to reach Fabric Data agents
- **B.** It works only when the Fabric agent uses Power BI semantic models
- **C.** It isn't currently supported; Fabric Data agents must be reached through generative orchestration based on descriptions
- **D.** It is supported only if conversation history is turned off

**Answer:** C
**Confidence:** Certain

The source calls out a specific limitation for Fabric Data agents: topic-level agent redirect nodes are not supported. Queries must reach the Fabric agent through description-based generative routing.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Connect a Microsoft Fabric Data agent

### Q175 — Interpret Fabric permission behavior
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**If a user asks a connected Fabric Data agent about a data source they don't have permission to access, what should happen?**

- **A.** The agent returns the restricted data if the maker has access
- **B.** The query returns no results or an access error, not unauthorized data
- **C.** The orchestrator retries by elevating to the Fabric connection's access
- **D.** The agent disconnects from Fabric until permissions are fixed

**Answer:** B
**Confidence:** Certain

The source says Fabric Data agents enforce the requesting user's Fabric permissions. If the user lacks access to a queried data source, the result is no data or an access error rather than an unauthorized disclosure.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Connect a Microsoft Fabric Data agent

### Q176 — Diagnose a routing failure
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> In testing, the activity map shows a supplier-security question routed to the Legal connected agent instead of the Foundry risk agent.

**According to the training, what kind of issue is this usually?**

- **A.** A connection authentication problem
- **B.** A description problem
- **C.** A transcript retention problem
- **D.** An environment mismatch problem

**Answer:** B
**Confidence:** Certain

The activity map is presented as the diagnostic tool for routing behavior. The source explicitly says that when the wrong connected agent is chosen, the remedy is to refine descriptions rather than reconfigure the connection.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Manage and test your connected agent solution

### Q177 — Pick disable vs disconnect
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> During a scheduled maintenance window on Finance data sources, you want to stop routing to the Finance Fabric Data agent but bring it back quickly afterward.

**What should you do?**

- **A.** Disconnect the agent permanently
- **B.** Delete the orchestrator transcript
- **C.** Turn off the agent's Enabled toggle
- **D.** Remove the agent's description

**Answer:** C
**Confidence:** Certain

The source says disabling a connected agent makes it inactive and stops routing while preserving all connection configuration. That is the recommended pattern for maintenance windows or staged rollouts.

**Source:** Build multi-agent solutions using connected agents in Copilot Studio — Manage and test your connected agent solution

### Q178 — Choosing A2A for external reasoning
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> Fabrikam needs to connect to Northwind Traders' shipment tracking capability, which interprets logistics events, handles partial or delayed tracking data, and returns contextual answers rather than raw records.

**Which integration approach best fits this scenario?**

- **A.** Use an HTTP connector so the orchestrator can retrieve raw shipment records and reason over them itself.
- **B.** Use MCP so the orchestrator can select Northwind's internal tools individually.
- **C.** Use A2A so the orchestrator can delegate the task to Northwind's standalone agent, which uses its own reasoning and tools.
- **D.** Use a standard REST API call because any agent-generated response is equivalent to raw data.

**Answer:** C
**Confidence:** Certain

The source says A2A is purpose-built for agent-to-agent delegation when one agent hands off a task to another agent that manages its own reasoning, tools, and responses independently. It contrasts this with raw API data and with MCP's orchestrator-controlled tool invocation model.

**Source:** Build cross-platform multi-agent solutions using the Agent2Agent protocol in Microsoft Copilot Studio — Understand the Agent2Agent (A2A) protocol

### Q179 — Preserving multi-turn continuity
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**In A2A, what is used to keep delegated tasks tied to the same ongoing conversation across multiple turns?**

- **A.** Agent cards
- **B.** Context IDs
- **C.** Capability negotiation
- **D.** REST resource paths

**Answer:** B
**Confidence:** Certain

The unit states that context IDs maintain conversation continuity across agent boundaries and let the external agent reference earlier turns in the session.

**Source:** Build cross-platform multi-agent solutions using the Agent2Agent protocol in Microsoft Copilot Studio — Understand the Agent2Agent (A2A) protocol

### Q180 — Contrasting MCP and A2A control
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which statement accurately compares MCP and A2A?**

- **A.** MCP and A2A both expose agent cards for discovery, but only MCP supports multi-turn context.
- **B.** With MCP, the external agent stays opaque; with A2A, the orchestrator selects tools individually.
- **C.** With MCP, the orchestrator governs which tools are invoked and synthesizes results; with A2A, the external agent uses its own reasoning and orchestration.
- **D.** MCP is mainly for cross-organization collaboration, while A2A is mainly for simple data retrieval.

**Answer:** C
**Confidence:** Certain

The source explicitly says MCP is for controlled access to tools and data sources that the orchestrator invokes individually, while A2A delegates a task to an external agent whose internal tools and reasoning are opaque.

**Source:** Build cross-platform multi-agent solutions using the Agent2Agent protocol in Microsoft Copilot Studio — Understand the Agent2Agent (A2A) protocol

### Q181 — Adapting to capability changes
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**According to the source, what A2A characteristic helps an orchestrator adapt when an external agent gains new capabilities without requiring code changes?**

- **A.** Dynamic capability negotiation
- **B.** Static connector schemas
- **C.** Manual topic rewrites for each new tool
- **D.** Replacing the context ID on every turn

**Answer:** A
**Confidence:** Certain

In the comparison table, A2A is described as supporting dynamic negotiation so that when the external agent gains new capabilities, the orchestrator adapts without requiring code changes.

**Source:** Build cross-platform multi-agent solutions using the Agent2Agent protocol in Microsoft Copilot Studio — Understand the Agent2Agent (A2A) protocol

### Q182 — Diagnosing missing agent-card auto-population
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**After you enter an endpoint URL, Copilot Studio does not auto-populate the agent's name and description. What should you check first?**

- **A.** Whether the OAuth refresh URL is configured, because auto-population depends on OAuth.
- **B.** Whether {endpoint}/.well-known/agent.json exists and is valid JSON.
- **C.** Whether the external agent already has a child-agent relationship configured.
- **D.** Whether the description is broad enough to route many kinds of requests.

**Answer:** B
**Confidence:** Certain

The troubleshooting guidance says to verify the endpoint is correct and reachable, then navigate directly to the well-known agent-card URL to confirm the card exists and is valid JSON.

**Source:** Build cross-platform multi-agent solutions using the Agent2Agent protocol in Microsoft Copilot Studio — Connect a Copilot Studio agent to an A2A-enabled agent

### Q183 — Refining the routing description
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> A maker is seeing overlap between an external shipment-tracking agent and other order-related capabilities in the orchestrator and wants the routing description to reduce ambiguity.

**Which revision best follows the source's guidance for an effective A2A agent description?**

- **A.** “Handles shipment queries.”
- **B.** “Northwind component.”
- **C.** “Handles live shipment tracking for orders fulfilled by Northwind Traders, including current status, estimated delivery dates, and tracking event history for externally shipped orders.”
- **D.** “Answers anything about Fabrikam orders.”

**Answer:** C
**Confidence:** Certain

The unit says the description directly affects routing and should be specific, distinct, and action-oriented. It uses this exact Northwind-focused wording as the more effective description.

**Source:** Build cross-platform multi-agent solutions using the Agent2Agent protocol in Microsoft Copilot Studio — Connect a Copilot Studio agent to an A2A-enabled agent

### Q184 — Testing beyond a single success case
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which testing approach best matches the source's recommendation for validating an A2A connection?**

- **A.** Run one successful shipment-tracking prompt, then move directly to production.
- **B.** Test only prompts that should route to the A2A agent, because off-scope prompts are irrelevant.
- **C.** Test prompts that should route to the A2A agent, prompts that should stay internal, and edge cases such as partial information or multi-turn follow-ups.
- **D.** Skip prompt variation testing and focus only on authentication success.

**Answer:** C
**Confidence:** Certain

The unit says one successful delegation test is not enough. It recommends testing prompts that should route to the A2A agent, prompts that should not route there, and edge cases including partial information and multi-turn follow-ups.

**Source:** Build cross-platform multi-agent solutions using the Agent2Agent protocol in Microsoft Copilot Studio — Test and validate an A2A agent connection

### Q185 — Reviewing payload sharing before go-live
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> During testing, the delegated payload sent to Northwind includes a customer's Fabrikam account number captured earlier in the session, even though Northwind only needs the current shipment question.

**What concern and next step best align with the source?**

- **A.** No concern exists because full conversation history is required for A2A, so all prior data should always be shared.
- **B.** It is mainly a localization issue; confirm only that the locale is correct.
- **C.** It raises a data-governance and authorization concern; confirm how the external agent handles session history, review the data processing agreement, and document the design decision before enabling live use.
- **D.** It only affects test-canvas usability; remove the activity log entry and proceed.

**Answer:** C
**Confidence:** Derived

The responsible-use section says to examine what is in conversation history, confirm data sharing is consistent with the other organization's data processing agreement, and ensure sensitive customer data is not sent without explicit authorization. The Fabrikam example then raises the issue with Northwind and documents the decision before go-live.

**Source:** Build cross-platform multi-agent solutions using the Agent2Agent protocol in Microsoft Copilot Studio — Test and validate an A2A agent connection

### Q186 — Interpreting unexpected external responses
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**An external A2A agent starts giving off-target answers that seem influenced by earlier messages in the session. According to the troubleshooting guidance, what is the most likely cause and response?**

- **A.** The endpoint is missing; recreate the agent card and do not review context usage.
- **B.** Full conversation history is causing the A2A agent to misinterpret requests; refine the agent description and review with the external owner what context their agent uses.
- **C.** Locale is always omitted from A2A payloads; add a locale header manually.
- **D.** Context IDs prevent multi-turn continuity; replace them on every delegated task.

**Answer:** B
**Confidence:** Certain

The common-issues table links unexpected responses to full conversation history causing misinterpretation. Its resolution is to refine the A2A description to scope routing more precisely and review with the external owner what context the external agent uses.

**Source:** Build cross-platform multi-agent solutions using the Agent2Agent protocol in Microsoft Copilot Studio — Test and validate an A2A agent connection

### Q187 — Choosing the safety tenet
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> An architect is reviewing an AI solution that must keep working under expected and unexpected conditions while avoiding unsafe outputs.

**Which Responsible AI tenet is most directly being applied?**

- **A.** Fairness
- **B.** Reliability & Safety
- **C.** Transparency
- **D.** Inclusiveness

**Answer:** B
**Confidence:** Derived

The unit says Reliability & Safety means AI must operate reliably in expected and unexpected conditions and be designed to prevent unsafe outputs.

**Source:** Design AI agents for business solutions — Define core tenets of responsible AI guidelines for AI business solutions

### Q188 — Explaining AI behavior
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

> Users ask how the system works, which data it relies on, and how its decisions are made.

**Which Responsible AI tenet addresses that need?**

- **A.** Accountability
- **B.** Privacy & Security
- **C.** Transparency
- **D.** Reliability & Safety

**Answer:** C
**Confidence:** Certain

Transparency is the tenet focused on helping users understand AI logic, data use, and how AI-driven decisions are made.

**Source:** Design AI agents for business solutions — Define core tenets of responsible AI guidelines for AI business solutions

### Q189 — Fixing vague summaries
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> A customer service team says Copilot summaries are vague and use inconsistent internal language.

**According to the unit, what design action should come first?**

- **A.** Add more dashboards for supervisors
- **B.** Define clear business terms and map them to Dataverse fields, option sets, and classification metadata
- **C.** Turn off case summaries until the next release
- **D.** Require agents to rewrite every summary manually

**Answer:** B
**Confidence:** Derived

The unit ties accurate summaries to clearly defined business terms stored in Dataverse fields, option sets, and classification metadata that Copilot reads directly.

**Source:** Design AI agents for business solutions — Design business terms for Copilot in Dynamics 365 Customer Service

### Q190 — Selecting summary structure
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> A regulated service organization wants summary output with predefined sections such as Customer Issue, Actions Taken, Pending Items, Next Steps, and Resolution Status.

**Which conversation summary structure best fits that need?**

- **A.** Paragraph Format
- **B.** Structured Format
- **C.** Agent dashboard
- **D.** Knowledge article suggestion

**Answer:** B
**Confidence:** Certain

Structured Format breaks the summary into predefined sections and is described as ideal for organizations with strict documentation standards or regulated industries.

**Source:** Design AI agents for business solutions — Design business terms for Copilot in Dynamics 365 Customer Service

### Q191 — Including a custom field
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

> Your organization tracks an Issue Type custom field and wants Copilot to reference it in case summaries.

**What does the unit recommend?**

- **A.** Move the field to a dashboard only
- **B.** Convert the field into a system topic
- **C.** Map the field so Copilot includes it in summaries
- **D.** Replace it with a legacy field

**Answer:** C
**Confidence:** Certain

The unit explicitly gives Issue Type as an example of a custom field that can be mapped so Copilot includes it in case summaries.

**Source:** Design AI agents for business solutions — Design business terms for Copilot in Dynamics 365 Customer Service

### Q192 — Reducing noise in Copilot outputs
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**Which customization practice does the unit say improves precision and reduces noise in Copilot outputs?**

- **A.** Expand data scope to all available fields
- **B.** Limit data scope to necessary fields
- **C.** Disable human oversight
- **D.** Surface Copilot in fewer places regardless of workflow

**Answer:** B
**Confidence:** Certain

The best-practices list says to limit data scope to necessary fields for better precision and reduced noise.

**Source:** Design AI agents for business solutions — Design customizations for Copilot in Dynamics 365 apps

### Q193 — Supported connector environment
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Where must you create a custom connector for Copilot in Dynamics 365 Sales?**

- **A.** In any default Power Platform environment
- **B.** In an environment with Dynamics 365 apps enabled
- **C.** Only in Microsoft Teams
- **D.** Inside a SharePoint site collection

**Answer:** B
**Confidence:** Certain

The unit says the connector must be created in an environment with Dynamics 365 apps enabled and that environments without Dynamics 365 are not supported.

**Source:** Design AI agents for business solutions — Design connectors for Copilot in Dynamics 365 Sales

### Q194 — Enabling automated plugin auth
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> A connector uses plugins and the team wants automated authentication through OBO tokens.

**Which setting does the unit call out for this scenario?**

- **A.** Enable semanticranker = true
- **B.** Enable onbehalfoflogin = true
- **C.** Enable triggerauthorization = true
- **D.** Enable modelrouting = true

**Answer:** B
**Confidence:** Certain

The connector security section explicitly says to set Enable onbehalfoflogin = true to enable automated authentication (OBO tokens) for plugins.

**Source:** Design AI agents for business solutions — Design connectors for Copilot in Dynamics 365 Sales

### Q195 — Designing agent context scope
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> A contact center architect wants better grounding but also needs to reduce noise and meet privacy standards.

**How should agent context data be exposed?**

- **A.** Include every available CRM attribute
- **B.** Include only the needed attributes
- **C.** Expose only routing queue names
- **D.** Remove case history and transcript data

**Answer:** B
**Confidence:** Certain

The unit says only the needed attributes should be included so accuracy improves, noise decreases, and privacy standards are met.

**Source:** Design AI agents for business solutions — Design AI agents for Dynamics 365 Contact Center

### Q196 — Matching channel to AI integration
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

**Which channel and AI integration opportunity are paired correctly?**

- **A.** Voice -> suggested replies and retrieving knowledge articles
- **B.** Live Chat -> real-time call summarization and call transcription
- **C.** Digital Messaging (SMS, WhatsApp) -> automated conversational flows, routing, and sentiment detection
- **D.** Omnichannel Widget -> scheduled recurrence only

**Answer:** C
**Confidence:** Certain

The contact center channel table maps Digital Messaging to automated conversational flows, routing, and sentiment detection.

**Source:** Design AI agents for business solutions — Design AI agents for Dynamics 365 Contact Center

### Q197 — Identifying the execution component
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**In a task agent architecture, which component represents executable operations via connectors, APIs, workflows, or Dataverse operations?**

- **A.** Goals
- **B.** Skills
- **C.** Actions
- **D.** Knowledge

**Answer:** C
**Confidence:** Certain

The unit defines Actions as executable operations and later says actions are created through connectors, custom connectors, APIs, Dataverse operations, and cloud flows.

**Source:** Design AI agents for business solutions — Design task agents in Microsoft Copilot Studio

### Q198 — Constraining risky behavior
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A task agent must never override a customer's credit limit and must always ask before submitting an order.

**What design element should capture those requirements?**

- **A.** Context
- **B.** Safety & Rules
- **C.** Knowledge sources
- **D.** Data interpretation skills

**Answer:** B
**Confidence:** Certain

Those examples appear under rules that constrain or direct behavior, and the architecture chart names that component Safety & Rules.

**Source:** Design AI agents for business solutions — Design task agents in Microsoft Copilot Studio

### Q199 — What starts an autonomous agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**In Copilot Studio, what component starts an autonomous agent when there is user input, a system change, or a scheduled prompt?**

- **A.** Goals
- **B.** Knowledge
- **C.** Triggers
- **D.** Publishing

**Answer:** C
**Confidence:** Certain

The unit defines triggers as the events that cause the agent to start, including user input, system changes, or scheduled prompts.

**Source:** Design AI agents for business solutions — Design autonomous agents in Copilot Studio

### Q200 — Fallback after no topic match
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

**If a Copilot Studio agent cannot match a topic, what does the unit say it can use as fallback to answer from available content?**

- **A.** Adaptive Cards
- **B.** System greeting topic
- **C.** Generative Answers (NLU Boost)
- **D.** Manual escalation only

**Answer:** C
**Confidence:** Certain

The unit states that when an agent cannot match a topic, it uses generative answers as fallback based on available content.

**Source:** Design AI agents for business solutions — Design prompt-driven agents using Copilot Studio

### Q201 — Choosing event triggers
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> A designer wants an agent to react when a file is uploaded or when a Dataverse row is added, without waiting for a user message.

**Which mechanism best matches that requirement?**

- **A.** Condition node
- **B.** System topic
- **C.** Event trigger
- **D.** Message node

**Answer:** C
**Confidence:** Certain

The unit says event triggers enable agents to act without waiting for a user prompt and gives file uploads and Dataverse rows as examples.

**Source:** Design AI agents for business solutions — Design prompt-driven agents using Copilot Studio

### Q202 — Tooling for policy retrieval
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> An agent must retrieve policies and guidelines from enterprise documents while respecting security controls.

**Which Foundry tool category is the closest fit?**

- **A.** Workflow and action tools
- **B.** Retrieval and grounding tools
- **C.** Specialized tools only
- **D.** Reasoning and planning tools

**Answer:** B
**Confidence:** Certain

The unit says retrieval and grounding tools are used when the agent must access enterprise knowledge or retrieve relevant documents, and that they help ground the agent while respecting security controls.

**Source:** Design AI agents for business solutions — Propose Foundry tools given a requirement

### Q203 — Tooling for data transformation
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A requirement calls for lightweight compute, classification, or structured data processing before results are returned to the user.

**Which recommendation matches the unit?**

- **A.** Azure Functions or ML model tools
- **B.** Only SharePoint ingestion tools
- **C.** Only Power Automate flow connector
- **D.** Only planner and context evaluator tools

**Answer:** A
**Confidence:** Certain

For analyzing or transforming data, the unit recommends Azure Functions, ML model tools, and data transformation connectors.

**Source:** Design AI agents for business solutions — Propose Foundry tools given a requirement

### Q204 — Rapid page creation
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

> A maker wants to describe a requirement in natural language and have Power Apps create a page layout, data experiences, and UI structure.

**What should you propose?**

- **A.** Agent feed only
- **B.** Generative pages
- **C.** Manual Dataverse export
- **D.** A fallback system topic

**Answer:** B
**Confidence:** Certain

The unit defines generative pages as the feature that turns a natural-language requirement into page layout, data experiences, and UI structure.

**Source:** Design AI agents for business solutions — Propose code first generative pages and agent feed applications

### Q205 — Combining approaches
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Hard*

> A business app needs high-volume workflow automation, dynamic in-app recommendations, and developer control to extend or override generated UI.

**Which recommendation best matches the unit?**

- **A.** Use prompt-first generative pages only
- **B.** Use code-first customization only
- **C.** Add an agent feed only
- **D.** Combine generative pages, agent feed, and code-first enhancements

**Answer:** D
**Confidence:** Derived

The scenario lines up with the unit's table: high-volume workflow automation should combine generative pages, an agent feed, and code-first enhancements.

**Source:** Design AI agents for business solutions — Propose code first generative pages and agent feed applications

### Q206 — Designing fallback behavior
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

**When no known topic matches a user message, which fallback design best aligns with the unit?**

- **A.** End the conversation immediately
- **B.** Acknowledge misunderstanding, offer alternatives, optionally redirect to a human, and capture feedback
- **C.** Retry the same topic silently
- **D.** Return raw variable values

**Answer:** B
**Confidence:** Certain

The fallback section lists those exact behaviors as characteristics of a well-designed fallback topic.

**Source:** Design AI agents for business solutions — Design topics for Copilot Studio, including fallback

### Q207 — Classifying topic types
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**In the topic type chart, which example best fits an Action Topic?**

- **A.** Business hours
- **B.** Greeting
- **C.** Authentication
- **D.** Create support ticket

**Answer:** D
**Confidence:** Certain

The chart labels 'Create support ticket' as an example of an Action Topic because it runs an automated step.

**Source:** Design AI agents for business solutions — Design topics for Copilot Studio, including fallback

### Q208 — Avoiding live-system retrieval on every turn
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What indexing practice does the grounded AI unit recommend?**

- **A.** Query live systems for every turn to maximize freshness
- **B.** Externalize to a search index optimized for your questions and topped up on an SLO-driven freshness schedule
- **C.** Store only raw files without any index
- **D.** Skip schema design to reduce latency

**Answer:** B
**Confidence:** Certain

The indexing section explicitly says not to query live systems every turn and to build a search index maintained on a freshness schedule.

**Source:** Design AI agents for business solutions — Design data processing workflows for grounded AI

### Q209 — Preferred retrieval mode
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which retrieval mode does the unit describe as typically giving the best relevance across phrasing, synonyms, and exact terms?**

- **A.** Vector only
- **B.** Keyword only
- **C.** Hybrid (vector + keyword + semantic rerank)
- **D.** Manual browsing

**Answer:** C
**Confidence:** Certain

The design tradeoff chart marks hybrid retrieval as the preferred option because it gives the best relevance across phrasing, synonyms, and exact terms.

**Source:** Design AI agents for business solutions — Design data processing workflows for grounded AI

### Q210 — When to split indexes
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**When does the unit recommend splitting across multiple indexes instead of using a single index?**

- **A.** Always, because multiple indexes are simpler
- **B.** Never; grounded AI should use one index only
- **C.** When audiences, compliance boundaries, or query patterns differ
- **D.** Only when using Dataverse grounded prompts

**Answer:** C
**Confidence:** Certain

The topology guidance says to use a single index for simplicity and split only when audiences, compliance boundaries, or query patterns differ.

**Source:** Design AI agents for business solutions — Design data processing workflows for grounded AI

### Q211 — First step in AI-enabled process design
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**When designing a canvas-app business process with AI components, what comes first?**

- **A.** Validate security and governance
- **B.** Map the current workflow
- **C.** Generate screens from data
- **D.** Create an agent feed

**Answer:** B
**Confidence:** Certain

The structured method starts with mapping the current workflow before identifying AI opportunities or designing interactions.

**Source:** Design AI agents for business solutions — Design business processes with AI in Power Apps canvas apps

### Q212 — Security review for AI placement
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

**During the security and governance step, which question belongs in the review?**

- **A.** Which colors should the app theme use?
- **B.** What data can the AI access and what actions is Copilot permitted to perform?
- **C.** Which fallback topic has the most trigger phrases?
- **D.** Should all actions be moved to Teams?

**Answer:** B
**Confidence:** Certain

Step 5 explicitly calls out both data access and permitted actions, along with DLP boundaries and compliance.

**Source:** Design AI agents for business solutions — Design business processes with AI in Power Apps canvas apps

### Q213 — Picking the security pillar
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**Which Power Platform Well-Architected pillar covers least-privilege access through Microsoft Entra ID, DLP policies, and secure connectors or API calls?**

- **A.** Reliability
- **B.** Security
- **C.** Operational excellence
- **D.** Experience optimization

**Answer:** B
**Confidence:** Certain

Those examples are listed directly under the Security pillar.

**Source:** Design AI agents for business solutions — Apply the Microsoft Power Platform Well-Architected Framework to intelligent application workloads

### Q214 — Scaling with Azure Functions
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

**Which pillar is most directly illustrated by offloading intensive tasks to Azure Functions and right-sizing flows and action concurrency?**

- **A.** Security
- **B.** Performance efficiency
- **C.** Reliability
- **D.** Experience optimization

**Answer:** B
**Confidence:** Certain

Both examples appear under Performance efficiency, which focuses on responsive and scalable architectures.

**Source:** Design AI agents for business solutions — Apply the Microsoft Power Platform Well-Architected Framework to intelligent application workloads

### Q215 — Optimizing user outcomes
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**Which pillar emphasizes UX consistency across Power Apps, Copilot-assisted workflows for ease of use, and accessibility compliance?**

- **A.** Experience optimization
- **B.** Operational excellence
- **C.** Cost optimization
- **D.** Reliability

**Answer:** A
**Confidence:** Certain

The Experience optimization pillar is about meaningful user experiences and includes those examples.

**Source:** Design AI agents for business solutions — Apply the Microsoft Power Platform Well-Architected Framework to intelligent application workloads

### Q216 — Best fit for regulated commands
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> A conversational solution handles fixed phrases such as 'Reset password' and requires safe, consistent routing based on exact intents.

**Which approach fits best?**

- **A.** Generative AI orchestration
- **B.** Azure CLU
- **C.** Standard NLU
- **D.** Agent flows

**Answer:** C
**Confidence:** Certain

The unit says standard NLU is best for predictable tasks with high precision and low variability, including strict intent matching for regulated processes.

**Source:** Design AI agents for business solutions — Determine the use of standard natural language processing

### Q217 — Best fit for open-ended grounded work
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> Users ask unstructured questions, and the agent must use enterprise data for reasoning, summarization, and multi-turn dialog.

**Which approach is best?**

- **A.** Standard NLU
- **B.** Azure CLU
- **C.** Generative AI orchestration
- **D.** Static trigger phrases only

**Answer:** C
**Confidence:** Certain

The unit says generative orchestration is ideal for complex, open-ended, or knowledge-driven tasks and specifically calls out grounding, reasoning, summarization, and multi-turn dialog.

**Source:** Design AI agents for business solutions — Determine the use of standard natural language processing

### Q218 — Understanding agent flow licensing
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Compared with a Power Automate cloud flow, which statement about Copilot Studio agent flows matches the unit?**

- **A.** They require a Power Automate license
- **B.** They use Copilot Studio message capacity and need no Power Automate license
- **C.** They support only manual triggers
- **D.** They cannot integrate with Dataverse

**Answer:** B
**Confidence:** Certain

The agent-vs-cloud-flow chart says agent flows use Copilot Studio message capacity and do not require a Power Automate license.

**Source:** Design AI agents for business solutions — Design agents and agent flows with Copilot Studio

### Q219 — Fastest way to prototype a flow
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A maker says, 'When a customer submits a form, send a confirmation email and update the CRM record,' and wants Copilot Studio to build the initial flow quickly.

**Which creation method best matches the unit's rapid prototyping guidance?**

- **A.** Visual designer only
- **B.** Natural language prompting
- **C.** Editing system topic trigger phrases
- **D.** Creating a SharePoint index first

**Answer:** B
**Confidence:** Certain

The unit says makers can describe the desired workflow and Copilot generates the workflow automatically using natural language prompting.

**Source:** Design AI agents for business solutions — Design agents and agent flows with Copilot Studio

### Q220 — Locating the response structure
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**In the Prompt Coach template, which section defines the exact structure the response should follow?**

- **A.** Goal
- **B.** Context
- **C.** Output Format
- **D.** Examples

**Answer:** C
**Confidence:** Certain

The Prompt Coach structure table defines Output Format as the exact structure for the response.

**Source:** Design AI agents for business solutions — Design prompt actions in Copilot Studio

### Q221 — Controlling prompt outputs
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A prompt action must return a summary, next steps, and risks in a fixed length while avoiding speculation.

**Which design practice most directly addresses that requirement?**

- **A.** Add more knowledge sources
- **B.** Use constraints such as word limits, required fields, and excluded content
- **C.** Convert the prompt into a system greeting
- **D.** Remove all context and examples

**Answer:** B
**Confidence:** Certain

The unit says output can be controlled with constraints like word limits, required fields, and excluded content such as no speculation.

**Source:** Design AI agents for business solutions — Design prompt actions in Copilot Studio

### Q222 — Recognizing a quality metric
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**Which example belongs to the Quality & Accuracy success criteria category?**

- **A.** Leadership alignment
- **B.** AI recommendation accuracy ≥ 85%
- **C.** AI onboarding sessions
- **D.** Data governance framework

**Answer:** B
**Confidence:** Certain

The success-criteria table lists AI recommendation accuracy ≥ 85% as the example indicator for Quality & Accuracy.

**Source:** Design AI agents for business solutions — Define success criteria and adoption goals for AI business solutions

### Q223 — Naming the planning activity
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> Before scaling an AI solution, a team evaluates data quality, security requirements, skill readiness, and model appropriateness.

**Which AI adoption planning activity is this?**

- **A.** Establish business outcomes
- **B.** Identify measurable AI scenarios
- **C.** Assess AI feasibility
- **D.** Establish program governance

**Answer:** C
**Confidence:** Certain

Those exact evaluation factors are listed under the Assess AI feasibility step in the Cloud Adoption Framework-based plan.

**Source:** Design AI agents for business solutions — Define success criteria and adoption goals for AI business solutions

### Q224 — When custom models fit
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A manufacturer needs an AI solution that understands specialized engineering terminology, follows proprietary workflows, and must satisfy strict data-governance requirements.

**Which design choice best matches the source guidance?**

- **A.** Rely only on pre-built copilots
- **B.** Use a custom model in Microsoft Foundry
- **C.** Use Computer Use because the workflow is UI driven
- **D.** Limit the solution to Microsoft Graph retrieval only

**Answer:** B
**Confidence:** Derived

The unit says custom models are appropriate for domain-specific language and reasoning, governance mandates, and unique workflows or proprietary toolchains, so Foundry custom models are the best fit.

**Source:** Design extensibility of AI solutions — Design AI solutions with custom models in Microsoft Foundry

### Q225 — Choosing a custom model path
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**For a lightweight task that prioritizes speed and edge compatibility, which custom model path does the unit recommend?**

- **A.** Fine-tuning foundation models
- **B.** Training domain-built small models
- **C.** Hybrid architectures
- **D.** Standard Copilot only

**Answer:** B
**Confidence:** Certain

The source explicitly says training domain-built small models is useful for lightweight tasks requiring speed and edge compatibility.

**Source:** Design extensibility of AI solutions — Design AI solutions with custom models in Microsoft Foundry

### Q226 — Monitoring deployed models
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which operational component in Foundry is intended to track drift, latency, performance degradation, and unexpected outputs after deployment?**

- **A.** Model catalog
- **B.** Model monitoring and observability
- **C.** Deployment topologies
- **D.** Business validation only

**Answer:** B
**Confidence:** Certain

The unit defines model monitoring and observability as the component that tracks drift, performance degradation, latency, user friction areas, and unexpected outputs.

**Source:** Design extensibility of AI solutions — Design AI solutions with custom models in Microsoft Foundry

### Q227 — Collaboration pattern selection
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> One agent gathers research, a second agent drafts the response, and the user reviews the result before it is finalized.

**Which collaborative pattern from the unit does this illustrate?**

- **A.** Parallel evaluation
- **B.** Sequential workflow
- **C.** Feedback-loop iteration
- **D.** Orchestrated interaction

**Answer:** B
**Confidence:** Certain

The source lists sequential workflow as "Agent A → Agent B → User review," which matches the scenario exactly.

**Source:** Design extensibility of AI solutions — Design agents in Microsoft 365 Copilot

### Q228 — Agent Builder capabilities
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which capability is explicitly listed for Agent Builder in Microsoft 365 Copilot?**

- **A.** Full retraining of foundation models
- **B.** Built-in tool access
- **C.** Azure Kubernetes Service deployment
- **D.** Desktop UI clicking and typing

**Answer:** B
**Confidence:** Certain

Agent Builder is described as providing a guided environment with step-by-step configuration, built-in tool access, declarative instruction authoring, testing, and publishing controls.

**Source:** Design extensibility of AI solutions — Design agents in Microsoft 365 Copilot

### Q229 — Prompt modification use
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> An architect wants to add custom rules, boundaries, and preferred workflows without rebuilding the entire agent.

**Which extensibility layer best fits this need?**

- **A.** Instruction-level extensibility
- **B.** Integration extensibility
- **C.** Pro-code extensibility in Visual Studio Code
- **D.** Multiagent collaboration pattern

**Answer:** A
**Confidence:** Derived

Instruction-level extensibility defines behavior, tone, boundaries, reasoning authority, and escalation rules. The source also says prompt modification helps add custom rules and behaviors without rebuilding the entire agent.

**Source:** Design extensibility of AI solutions — Design extensible agents in Microsoft Copilot Studio

### Q230 — Specialized agent design
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A solution uses one agent to retrieve data, another to execute system tasks, and a third to draft content.

**Which architectural pattern does the source recommend for this kind of environment?**

- **A.** Domain-context pattern
- **B.** Multiagent collaboration pattern
- **C.** Deployment topology pattern
- **D.** Standard Copilot pattern

**Answer:** B
**Confidence:** Certain

The unit says that in complex environments architects create multiple specialized agents that collaborate through defined protocols, and it gives examples of research, workflow, and communication agents.

**Source:** Design extensibility of AI solutions — Design extensible agents in Microsoft Copilot Studio

### Q231 — Why MCP matters
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> Finance and operations agents are giving inconsistent answers because each one interprets business data differently.

**Which MCP benefit most directly addresses this problem?**

- **A.** It guarantees desktop UI automation
- **B.** It ensures consistent business semantics across AI agents
- **C.** It replaces least-privilege controls
- **D.** It removes the need for metadata structures

**Answer:** B
**Confidence:** Derived

The unit explicitly says MCP matters because it ensures consistent business semantics across AI agents and reduces incorrect information by grounding agents in real Finance and Operations context.

**Source:** Design extensibility of AI solutions — Design extensible agents using MCP in Copilot Studio

### Q232 — Selecting an MCP integration pattern
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> An agent must use real-time enterprise context so its answers always reflect authoritative business rules in a compliance-sensitive finance workflow.

**Which MCP integration pattern is the best fit?**

- **A.** Workflow-integrated agents
- **B.** Multi-agent collaboration via MCP
- **C.** Context-driven reasoning
- **D.** Voice interaction flow

**Answer:** C
**Confidence:** Certain

The source says context-driven reasoning is for agents that retrieve real-time MCP context so responses reflect authoritative business rules, and it is ideal for compliance-sensitive tasks and finance workflows.

**Source:** Design extensibility of AI solutions — Design extensible agents using MCP in Copilot Studio

### Q233 — Governing MCP access
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**According to the unit, how should data access be governed for MCP-enabled agents?**

- **A.** By hardcoding identical access for every user
- **B.** By user identity using least privilege
- **C.** By giving all agents full Finance and Operations access
- **D.** By disabling logging to reduce latency

**Answer:** B
**Confidence:** Certain

The governance section explicitly says data access is governed by user identity by using least privilege.

**Source:** Design extensibility of AI solutions — Design extensible agents using MCP in Copilot Studio

### Q234 — When to use Computer Use
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A team must automate data entry in a desktop-only vendor portal that has no API or connector.

**Why is Computer Use the best match based on the source?**

- **A.** It is designed only for SharePoint grounding
- **B.** It works when tasks are repetitive, UI-driven, and no API or connector exists
- **C.** It replaces the need for guardrails and permissions
- **D.** It is recommended even when robust APIs are available

**Answer:** B
**Confidence:** Derived

The unit says Computer Use is ideal when no API or connector exists and when tasks are repetitive and UI-driven, such as data entry and form submission.

**Source:** Design extensibility of AI solutions — Design agents to automate tasks in apps and websites with Computer Use in Copilot Studio

### Q235 — Designing for UI variability
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What design practice does the unit recommend to improve reliability when UI elements might change?**

- **A.** Depend on fixed coordinates only
- **B.** Skip validation to maximize speed
- **C.** Use descriptive instructions and validate results after each step
- **D.** Use Computer Use only for voice interactions

**Answer:** C
**Confidence:** Certain

The unit says that when UI elements may change, agents should use descriptive instructions, validate results after each step, and handle errors gracefully.

**Source:** Design extensibility of AI solutions — Design agents to automate tasks in apps and websites with Computer Use in Copilot Studio

### Q236 — Enabling deep reasoning
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Hard*

> An agent must evaluate constraints and trade-offs across a multi-step business process before making a recommendation.

**Which reasoning mode should the architect enable?**

- **A.** Standard reasoning
- **B.** Deep reasoning (preview)
- **C.** Voice mode only
- **D.** Knowledge-only mode

**Answer:** B
**Confidence:** Certain

The unit says deep reasoning is used for multi-step tasks, complex business rules, analytical processes, structured decision trees, scenario planning, and evaluating constraints and trade-offs.

**Source:** Design extensibility of AI solutions — Design agent behaviors in Copilot Studio

### Q237 — SharePoint site grounding
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> An agent is installed on a SharePoint site and is expected to answer site-specific questions.

**What behavior should the architect expect from the agent according to the unit?**

- **A.** It ignores site structure and searches the public web first
- **B.** It knows which site it is on and uses that site's content as its primary grounding source
- **C.** It bypasses user permissions for faster retrieval
- **D.** It can only respond inside Teams, not SharePoint

**Answer:** B
**Confidence:** Certain

The unit says that when an agent is installed on a SharePoint site, it knows which site it is on, uses that site's content as its primary grounding source, and adapts responses to the site structure.

**Source:** Design extensibility of AI solutions — Optimize solution design for agents in Microsoft 365

### Q238 — Automating the case lifecycle
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**Which autonomous service agent is described as automating the create, update, resolve, and close processes of cases?**

- **A.** Customer Intent Agent
- **B.** Case Management Agent
- **C.** Quality Evaluation Agent
- **D.** Agent Hub

**Answer:** B
**Confidence:** Certain

The unit explicitly says the Case Management Agent automates the case life cycle by automating create, update, resolve, and close processes.

**Source:** Orchestrate configuration of prebuilt agents and apps — Design AI solutions for Dynamics 365 Customer Service

### Q239 — Cross-system service orchestration
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> A service solution must coordinate Customer Service with billing or refund work in Finance and escalation flows in Power Automate.

**Which orchestration model from the unit best matches this design?**

- **A.** Case-centric orchestration
- **B.** Interaction-centric automation
- **C.** Multi-system orchestration
- **D.** Embedded intelligent features

**Answer:** C
**Confidence:** Derived

The unit places Customer Service plus Finance for billing or refunds and Customer Service plus Power Automate for escalations under multi-system orchestration.

**Source:** Orchestrate configuration of prebuilt agents and apps — Design AI solutions for Dynamics 365 Customer Service

### Q240 — Change control in readiness review
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**In the Microsoft 365 agent readiness checklist, which area explicitly includes versioning, rollout rings, rollback, and sunset criteria?**

- **A.** Business value
- **B.** Change control
- **C.** Measurement
- **D.** Support

**Answer:** B
**Confidence:** Certain

The readiness checklist bullet for change control names versioning, rollout rings, rollback, and sunset criteria.

**Source:** Orchestrate configuration of prebuilt agents and apps — Propose Microsoft 365 agents for business scenarios

### Q241 — Starting with the business outcome
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**In the five-step agent design framework, which step tells architects to describe the recurring outcome the business needs rather than the tool steps?**

- **A.** Define guardrails
- **B.** Operationalize
- **C.** Frame the job to be done
- **D.** Prototype the critical path

**Answer:** C
**Confidence:** Certain

The framework's first step is to frame the job to be done, and it specifically says to describe the recurring outcome, not the tool steps.

**Source:** Orchestrate configuration of prebuilt agents and apps — Propose Microsoft 365 agents for business scenarios

### Q242 — Selecting the portfolio-risk pilot
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> Leaders want AI that consolidates project portfolio information to highlight risks, blockers, dependencies, and resource pressures.

**Which ready-to-pilot Microsoft 365 agent best fits this scenario?**

- **A.** Executive Briefing Pack Generator
- **B.** Portfolio Risk Insights Analyzer
- **C.** Research Synthesis and Brief Creator
- **D.** Telemetry-to-Insights Report Generator

**Answer:** B
**Confidence:** Derived

The Portfolio Risk Insights Analyzer is the catalog item described as providing consolidated insights from project portfolios and highlighting risks, blockers, dependencies, and resource pressures.

**Source:** Orchestrate configuration of prebuilt agents and apps — Propose Microsoft 365 agents for business scenarios

### Q243 — Accountable owner for connector setup
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

**According to the baseline RACI chart, who is accountable for tool or connector setup?**

- **A.** Architect
- **B.** Product owner
- **C.** Security/compliance
- **D.** Support/ops

**Answer:** D
**Confidence:** Certain

In the RACI row for tool or connector setup, Support/ops is marked A for accountable.

**Source:** Orchestrate configuration of prebuilt agents and apps — Propose Microsoft 365 agents for business scenarios

### Q244 — Improving grounding consistency in sales
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> A sales rollout finds Copilot responses are inconsistent because CRM context is not aligned across opportunity, account, and activity information.

**Which configuration action from the unit most directly addresses this issue?**

- **A.** Enable DLP policies
- **B.** Map opportunity, account, and activity fields
- **C.** Turn on telemetry monitoring
- **D.** Restrict high-risk actions

**Answer:** B
**Confidence:** Derived

The sales configuration workflow says to map opportunity, account, and activity fields so Copilot grounding stays consistent.

**Source:** Orchestrate configuration of prebuilt agents and apps — Orchestrate and configure Microsoft 365 Copilot for sales and service

### Q245 — Automating service escalations
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> A service team wants Copilot to trigger escalations, case routing, and approvals after summarization and knowledge lookup.

**What should solution architects integrate to support that design?**

- **A.** AI Builder custom models
- **B.** Power Automate flows
- **C.** SharePoint sensitivity labels
- **D.** Proposal-drafting content sources

**Answer:** B
**Confidence:** Derived

The service configuration workflow explicitly says to integrate Power Automate flows to automate escalation, case routing, or approvals.

**Source:** Orchestrate configuration of prebuilt agents and apps — Orchestrate and configure Microsoft 365 Copilot for sales and service

### Q246 — Purpose of the AI hub
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Easy*

**Which Power Platform capability is described as the central or unified workspace for managing, discovering, and orchestrating AI across models, connectors, and copilots?**

- **A.** AI Builder
- **B.** Copilot in Power Apps
- **C.** AI hub
- **D.** Copilot Studio

**Answer:** C
**Confidence:** Certain

The unit calls AI hub the central experience and unified workspace for managing AI models, connectors, and copilots in Power Platform.

**Source:** Orchestrate configuration of prebuilt agents and apps — Propose Microsoft Power Platform AI features

### Q247 — Best fit for a custom conversational agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> A team needs a low-code conversational agent with multi-turn reasoning that can integrate external data sources, APIs, and connectors, then extend into Teams or websites.

**Which Power Platform component best matches that requirement?**

- **A.** AI Builder
- **B.** AI hub
- **C.** Copilot in Power Automate
- **D.** Copilot Studio

**Answer:** D
**Confidence:** Derived

The unit says Copilot Studio builds custom copilots with multi-turn reasoning, integrates external data sources, APIs, and connectors, and extends copilots into Teams, Microsoft 365, or websites.

**Source:** Orchestrate configuration of prebuilt agents and apps — Propose Microsoft Power Platform AI features

### Q248 — Finding a vendor certificate source
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

> In an F&O agent chat, a user asks for a vendor's latest compliance certificate.

**According to the unit's example mapping, which knowledge source should the agent use?**

- **A.** F&O data
- **B.** SharePoint
- **C.** Plugin action
- **D.** Azure Functions

**Answer:** B
**Confidence:** Certain

The example in the unit maps the question about the vendor's latest compliance certificate to SharePoint.

**Source:** Orchestrate configuration of prebuilt agents and apps — Design interoperable agent experiences for Finance and Operations

### Q249 — Named plugin capability
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which option is explicitly listed as a capability of Copilot client plugins for interoperability?**

- **A.** Enforcing business logic only inside SharePoint
- **B.** Supporting multi-step workflows
- **C.** Replacing access controls on external sources
- **D.** Publishing knowledge to production

**Answer:** B
**Confidence:** Certain

Under plugin capabilities, the unit lists defining custom actions, providing structured responses, enforcing business logic, and supporting multi-step workflows.

**Source:** Orchestrate configuration of prebuilt agents and apps — Design interoperable agent experiences for Finance and Operations

### Q250 — Restricting general knowledge
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

> A finance process requires highly precise answers for regulatory and financial workflows, and only approved content should shape in-app help.

**How does the unit recommend handling general knowledge in this case?**

- **A.** Enable it because it broadens explanations
- **B.** Restrict it so only controlled, validated knowledge influences help
- **C.** Replace curated knowledge entirely with it
- **D.** Enable it only after open Copilot sessions are closed

**Answer:** B
**Confidence:** Derived

The unit says to restrict general knowledge when precision is critical for regulatory or financial workflows and when only controlled, validated knowledge should influence help responses.

**Source:** Orchestrate configuration of prebuilt agents and apps — Recommend process knowledge sources for in-app help in Dynamics 365

### Q251 — Governed external data access
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio (inferred) · Difficulty: Medium*

> You are designing external agents that work beyond the Finance and Supply Chain UI and need consistent, governed access to data.

**Which design guideline from the unit best fits this need?**

- **A.** Use PowerPoint templates
- **B.** Use Dataverse or custom APIs
- **C.** Depend on anonymous telemetry only
- **D.** Remove role-based access to simplify queries

**Answer:** B
**Confidence:** Certain

For external orchestration, the unit says to use Dataverse or custom APIs for consistent and governed data access.

**Source:** Orchestrate configuration of prebuilt agents and apps — Orchestrate AI features in Dynamics 365 Finance and Supply Chain

### Q252 — Triggering workflows from Copilot
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which extension option is described as connecting Copilot to Power Automate or Azure Functions?**

- **A.** Prompt-defined behaviors
- **B.** Custom data sources
- **C.** Business event triggers
- **D.** Generative help and guidance

**Answer:** C
**Confidence:** Certain

The unit lists business event triggers connected to Power Automate or Azure Functions as one way to extend Copilot experiences.

**Source:** Orchestrate configuration of prebuilt agents and apps — Orchestrate AI features in Dynamics 365 Finance and Supply Chain

### Q253 — Defining what an agent is
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**According to the Get started with Microsoft Copilot Studio module, what is an agent?**

- **A.** A static FAQ page that displays predefined answers without any reasoning
- **B.** An AI-powered assistant that understands its business context, answers questions, and takes action on a user's behalf
- **C.** A reporting dashboard that only tracks customer service ticket volume
- **D.** A rules engine that can only respond to exact keyword matches

**Answer:** B
**Confidence:** Certain

The module defines an agent as 'an AI-powered assistant that understands its business context, answers questions, and takes action on a user's behalf,' distinguishing it from a static FAQ page or simple keyword matcher.

**Source:** Get started with Microsoft Copilot Studio — Introduction

### Q254 — Benefit of task automation in agents
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which benefit of adopting agents is described as letting the agent start follow-up actions such as scheduling meetings, assigning cases, or sending emails?**

- **A.** Generative answers
- **B.** Integrations with other systems
- **C.** Task automation
- **D.** Reducing assisted support inquiries

**Answer:** C
**Confidence:** Certain

Task automation is described as the benefit where 'the agent can start follow-up actions, such as scheduling meetings, assigning cases, sending emails, or sending surveys.'

**Source:** Get started with Microsoft Copilot Studio — Introduction

### Q255 — Account type required for Copilot Studio
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What type of Microsoft account is required to use Microsoft Copilot Studio, including for a trial?**

- **A.** Any personal Microsoft account
- **B.** A work or school account
- **C.** A Microsoft Learn student account only
- **D.** No account is required for the trial

**Answer:** B
**Confidence:** Certain

The unit states 'Copilot Studio requires a work or school account. Personal Microsoft accounts aren't supported.'

**Source:** Get started with Microsoft Copilot Studio — Work with environments

### Q256 — Limitation of a Copilot Studio trial license
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What can you NOT do with a Copilot Studio trial license?**

- **A.** Create agents
- **B.** Test agents
- **C.** Publish agents
- **D.** Sign in with a work account

**Answer:** C
**Confidence:** Certain

The unit notes that 'A trial license lets you create and test agents, but you can't publish them,' so publishing is the restricted action.

**Source:** Get started with Microsoft Copilot Studio — Work with environments

### Q257 — Primary audience for Agent Builder in Microsoft 365 Copilot
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**According to the authoring tool comparison table, who is the primary audience for Agent Builder in Microsoft 365 Copilot?**

- **A.** Professional developers
- **B.** Makers and low-code developers
- **C.** Information workers
- **D.** Data scientists only

**Answer:** C
**Confidence:** Certain

The table lists Agent Builder in Microsoft 365 Copilot's primary audience as 'Information workers,' used for quick, knowledge-focused declarative agents.

**Source:** Get started with Microsoft Copilot Studio — Create agents

### Q258 — Choosing a Copilot Studio harness
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**Which Copilot Studio harness is described as best for reasoning-heavy, multistep business processes that can break a goal into steps, call tools and agents, and adapt when conditions change?**

- **A.** Standard harness
- **B.** Copilot chat harness
- **C.** GitHub Copilot harness
- **D.** Classic orchestration harness

**Answer:** C
**Confidence:** Certain

The harness comparison table shows the GitHub Copilot harness is 'Best for: Reasoning-heavy, multistep business processes' and 'Breaks a goal into steps, calls tools and agents, and adapts when conditions change.'

**Source:** Get started with Microsoft Copilot Studio — Create agents

### Q259 — Purpose of a declarative agent
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What is a declarative agent in Microsoft 365 Copilot?**

- **A.** A code-first agent built in Microsoft Foundry with full model control
- **B.** A customizable extension of Microsoft 365 Copilot where you define instructions, knowledge, and capabilities while Copilot handles orchestration and response generation
- **C.** A Copilot Studio workflow that automates back-end tasks
- **D.** A managed agent that can be freely edited by any user

**Answer:** B
**Confidence:** Certain

The unit defines a declarative agent as 'a customizable extension of Microsoft 365 Copilot. You define the agent's instructions, knowledge, and capabilities, and Microsoft 365 Copilot handles orchestration and response generation.'

**Source:** Get started with Microsoft Copilot Studio — Create and configure declarative agents in Microsoft 365 Copilot

### Q260 — Maximum number of suggested prompts
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**How many suggested prompts can you configure so customers can choose from them to start a conversation with your agent in Microsoft Teams or Microsoft 365 Copilot Chat?**

- **A.** Up to 5
- **B.** Up to 10
- **C.** Up to 15
- **D.** Unlimited

**Answer:** B
**Confidence:** Certain

The unit states 'You can configure up to 10 suggested prompts that customers can choose from to start a conversation with your agent in Microsoft Teams or Microsoft 365 Copilot Chat.'

**Source:** Get started with Microsoft Copilot Studio — Create and configure agents in Microsoft Copilot Studio

### Q261 — Five key areas of effective agent instructions
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**According to the guidance on crafting agent instructions, which five key areas should effective agent instructions cover?**

- **A.** Role, Scope, Context, Tone, and Error Handling
- **B.** Name, Description, Icon, Language, and Solution
- **C.** Trigger, Node, Variable, Entity, and Topic
- **D.** Model, Knowledge, Tools, Topics, and Channels

**Answer:** A
**Confidence:** Certain

The unit states effective agent instructions 'need to cover five key areas: Role, Scope, Context, Tone, and Error Handling.'

**Source:** Get started with Microsoft Copilot Studio — Create and configure agents in Microsoft Copilot Studio

### Q262 — Required image format for an agent icon
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**When adding a custom icon to a Copilot Studio agent, what file format must the image be?**

- **A.** JPEG
- **B.** PNG
- **C.** SVG
- **D.** GIF

**Answer:** B
**Confidence:** Certain

The unit notes 'The icon must be in PNG format' when describing how to add an icon to an agent.

**Source:** Get started with Microsoft Copilot Studio — Create and configure agents in Microsoft Copilot Studio

### Q263 — Two primary elements of a topic
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**In a standard harness Copilot Studio agent, what are the two primary elements that make up a topic?**

- **A.** Trigger and conversation nodes
- **B.** Entity and variable
- **C.** Model and orchestrator
- **D.** Channel and connector

**Answer:** A
**Confidence:** Certain

The unit states each topic consists of two primary elements: 'Trigger – Phrases, keywords, or questions... Conversation nodes – Define how an agent should respond.'

**Source:** Get started with Microsoft Copilot Studio — Work with topics

### Q264 — Classic orchestration trigger phrase matching
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**In classic orchestration, does a customer's input need to exactly match a topic's trigger phrase to trigger that topic?**

- **A.** Yes, it must be an exact character-for-character match
- **B.** No, natural language understanding compares the customer's message to trigger phrases and can trigger a topic even without an exact match
- **C.** No, any input triggers the first topic in the list
- **D.** Yes, but only if the trigger phrase is capitalized identically

**Answer:** B
**Confidence:** Certain

The unit explains that with classic orchestration, 'The customer input doesn't need to exactly match a topic trigger phrase to trigger the topic,' using the store hours example where 'see store opening hours' still triggers the topic with trigger phrase 'check store hours.'

**Source:** Get started with Microsoft Copilot Studio — Work with topics

### Q265 — Default orchestration for new standard harness agents
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is the default orchestration mode for newly created standard harness agents in Copilot Studio?**

- **A.** Classic orchestration
- **B.** Generative AI orchestration
- **C.** Manual orchestration
- **D.** Hybrid orchestration

**Answer:** B
**Confidence:** Certain

The unit states 'Generative orchestration is the default for newly created standard harness agents unless an administrator disables it or a prebuilt agent specifies another configuration.'

**Source:** Get started with Microsoft Copilot Studio — Enhance productivity with generative AI

### Q266 — Default content moderation level
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is the default content moderation level for an agent's generated answers in Copilot Studio?**

- **A.** Lowest
- **B.** Medium
- **C.** High
- **D.** Off

**Answer:** C
**Confidence:** Certain

The unit states 'The moderation levels range from Lowest to Highest, and the default level is High.'

**Source:** Get started with Microsoft Copilot Studio — Enhance productivity with generative AI

### Q267 — Default authentication setting for new standard harness agents
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is the default authentication setting for new standard harness agents in Copilot Studio?**

- **A.** No authentication
- **B.** Authenticate with Microsoft
- **C.** Authenticate manually
- **D.** Generic OAuth 2 only

**Answer:** B
**Confidence:** Certain

The unit states 'New standard harness agents use Authenticate with Microsoft by default,' which uses Microsoft Entra ID authentication.

**Source:** Get started with Microsoft Copilot Studio — Publish agents and analyze performance

### Q268 — Availability of the demo website
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**Under which authentication setting is the demo website link NOT available after publishing an agent?**

- **A.** No authentication
- **B.** Authenticate manually
- **C.** Authenticate with Microsoft
- **D.** It is always available regardless of authentication setting

**Answer:** C
**Confidence:** Certain

The unit states the demo website 'is available when the agent's Authentication setting is No authentication or Authenticate manually. It's not available when Authenticate with Microsoft is selected.'

**Source:** Get started with Microsoft Copilot Studio — Publish agents and analyze performance

### Q269 — Analogy used to describe a topic
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**How does the introduction to the Design agent conversations using topics module describe a topic?**

- **A.** As a database table that stores conversation history
- **B.** As a small individual conversation on a specific subject
- **C.** As a single message displayed to the user
- **D.** As a security policy applied to an agent

**Answer:** B
**Confidence:** Certain

The unit states 'Think of a topic as a small individual conversation on a specific subject. Multiple topics can be used together in a single agent to provide the customer with an automated conversation that feels natural.'

**Source:** Design agent conversations using topics — Introduction

### Q270 — What you can and cannot do with system topics
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**According to the Overview of topics unit, which statement is true about system topics in Copilot Studio?**

- **A.** You can create new system topics but can't delete or disable them
- **B.** You can't create system topics, and you can't delete them, but you can turn them off
- **C.** You can both create and delete system topics freely
- **D.** System topics can only be modified by a tenant administrator, never a maker

**Answer:** B
**Confidence:** Certain

The unit states 'You can't create system topics. You can't delete system topics, but you can turn them off,' though makers can still make changes to them.

**Source:** Design agent conversations using topics — Overview of topics

### Q271 — Minimum trigger phrases recommended
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**For classic orchestration, how many trigger phrases does Copilot Studio recommend at minimum to train the AI to understand user intent?**

- **A.** 1 to 2
- **B.** 5 to 10
- **C.** 20 to 30
- **D.** 50 or more

**Answer:** B
**Confidence:** Certain

The unit states 'Your agent needs a minimum of 5 to 10 trigger phrases to train the AI to understand your user's intent.'

**Source:** Design agent conversations using topics — Create and configure agent topics

### Q272 — Default trigger for generative AI orchestration topics
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is the default topic trigger for agents that use generative AI orchestration?**

- **A.** User says a phrase
- **B.** The agent chooses
- **C.** A plan completes
- **D.** It's redirected to

**Answer:** B
**Confidence:** Certain

The unit states 'For agents that use generative AI orchestration, the default topic trigger is The agent chooses. It activates when the agent determines that the topic's model name and the model description... match the incoming message from the user.'

**Source:** Design agent conversations using topics — Create and configure agent topics

### Q273 — Difference between End current topic and End all topics
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**What is the key difference between the End current topic node and the End all topics node?**

- **A.** End current topic ends the current topic and returns to the originating topic immediately if called from another topic, while End all topics ends all active topics immediately and treats the next user message as a new conversation
- **B.** End current topic always ends the entire conversation, while End all topics only pauses the current topic
- **C.** There is no functional difference; they are aliases of the same node
- **D.** End current topic can only be used in system topics, while End all topics can only be used in custom topics

**Answer:** A
**Confidence:** Certain

The unit explains 'The End current topic node ends the current topic. If the current topic is called from another topic, the conversation returns to the original topic immediately... The End all topics node ends all active topics immediately. Your agent considers the next message from the user as the first message in a new conversation.'

**Source:** Design agent conversations using topics — Add conversation nodes to topics

### Q274 — What manually adding a condition creates
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**When you manually add a condition to a topic by selecting Add a condition, how many branches does this action add to the topic?**

- **A.** One branch, for the true condition only
- **B.** Two branches: a Condition node and an All Other Conditions node
- **C.** Three branches, one for each possible variable value
- **D.** Zero branches; it only adds a variable

**Answer:** B
**Confidence:** Certain

The unit states 'This action adds two branches to your topic. One branch starts with a Condition node and defines the conversation path for when the condition is true. The other branch starts with an All Other Conditions node and defines the path for when the condition is false.'

**Source:** Design agent conversations using topics — Branch a topic

### Q275 — Four types of topic checker errors
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**Which of the following is NOT one of the four error types the Topic Checker identifies?**

- **A.** Node
- **B.** Field
- **C.** Expression
- **D.** Trigger phrase count

**Answer:** D
**Confidence:** Certain

The unit lists exactly four error types: 'Node, Field, Expression, and Variable deletion.' Trigger phrase count is not one of the listed error types.

**Source:** Design agent conversations using topics — Manage topics

### Q276 — Two types of custom entities
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What are the two types of custom entities you can create in Copilot Studio?**

- **A.** Closed list and Regular expression (regex)
- **B.** Prebuilt and Dynamic
- **C.** Global and Topic-level
- **D.** Numeric and Text

**Answer:** A
**Confidence:** Certain

The unit states 'There are two types of entities that you can create: Closed list... Regular expression (regex)...'

**Source:** Design agent conversations using topics — Work with entities

### Q277 — Difference between smart matching and synonyms
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**What is the key difference between smart matching and synonyms for a closed list entity?**

- **A.** Smart matching is manually configured while synonyms happen automatically
- **B.** Smart matching automatically autocorrects misspellings and expands matching semantically, while synonyms are entered manually to expand logic to include similar-meaning words
- **C.** Smart matching only works with regex entities, while synonyms only work with prebuilt entities
- **D.** There is no difference; they are the same feature with two names

**Answer:** B
**Confidence:** Certain

The unit states 'When smart matching is on, the agent automatically autocorrects misspellings and expand the matching logic semantically'; in contrast, 'The synonym option is like smart matching, except they aren't automatic like smart matching. Synonyms are entered manually.'

**Source:** Design agent conversations using topics — Work with entities

### Q278 — Syntax used by regex entities
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What regular expression syntax do regex custom entities in Copilot Studio use?**

- **A.** POSIX basic regular expressions
- **B.** .NET regular expressions syntax
- **C.** PCRE (Perl Compatible Regular Expressions)
- **D.** JavaScript RegExp syntax

**Answer:** B
**Confidence:** Certain

The unit states 'Regex entities use the .NET regular expressions syntax.'

**Source:** Design agent conversations using topics — Work with entities

### Q279 — Default naming for automatically created variables
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What default name is given to a variable when it's automatically created by inserting a question node, before you rename it?**

- **A.** A name like Var1, Var2, etc.
- **B.** The same name as the topic
- **C.** UserResponse1
- **D.** TempVariable

**Answer:** A
**Confidence:** Certain

The unit states 'When a variable is automatically created, it is given a default name like Var1, Var2, etc. which isn't descriptive.'

**Source:** Design agent conversations using topics — Work with variables in your Copilot Studio agent

### Q280 — Prefix applied to global variables
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What prefix is added to a variable's name once you convert it to a global variable in Copilot Studio?**

- **A.** Sys.
- **B.** Topic.
- **C.** Global.
- **D.** Shared.

**Answer:** C
**Confidence:** Certain

The unit states 'The variable name gets a prefix string of Global to differentiate it from the topic-level variables,' giving the example that 'UserName' becomes 'Global.UserName.'

**Source:** Design agent conversations using topics — Work with variables in your Copilot Studio agent

### Q281 — Number of system topics
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**How many system topics are there in a Copilot Studio agent?**

- **A.** Five
- **B.** Seven
- **C.** Nine
- **D.** Eleven

**Answer:** C
**Confidence:** Certain

The unit states 'There are nine system topics: Conversation Start, Conversational boosting, End of Conversation, Escalate, Fallback, Multiple Topics Matched, On Error, Reset Conversation, Sign In.'

**Source:** Design agent conversations using topics — Work with system topics

### Q282 — Order of Conversational boosting versus Fallback
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**Both the Conversational boosting and Fallback system topics use the On Unknown Intent trigger. Which one is triggered first?**

- **A.** Fallback is triggered first, then Conversational boosting if no response is generated
- **B.** Conversational boosting is triggered first, and if it doesn't provide a response, Fallback is then invoked
- **C.** They are triggered simultaneously and race to respond
- **D.** Neither is triggered automatically; a maker must always choose manually

**Answer:** B
**Confidence:** Certain

The unit explicitly states 'Both the Conversational boosting and Fallback topics use the On Unknown Intent trigger. The Conversational boosting topic is triggered first, and if it doesn't provide a response, the Fallback topic is then invoked.'

**Source:** Design agent conversations using topics — Work with system topics

### Q283 — Requirement for the Escalate system topic
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What must be configured before the Escalate system topic can hand off a conversation to a human representative?**

- **A.** A Power Automate premium license
- **B.** A Customer engagement hub, such as Dynamics 365 Contact Center
- **C.** A custom entity named Escalation
- **D.** A global variable named EscalateFlag

**Answer:** B
**Confidence:** Certain

The unit states escalation 'requires a Customer engagement hub to be configured' and notes 'Dynamics 365 Contact Center is a supported engagement hub.'

**Source:** Design agent conversations using topics — Work with system topics

### Q284 — Default number of Fallback reprompts before escalation
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**By default, how many times does the Fallback topic ask the user again before redirecting to the Escalate topic?**

- **A.** Zero times — it escalates immediately
- **B.** One time
- **C.** Two times
- **D.** Five times

**Answer:** C
**Confidence:** Certain

The unit states 'By default, the Fallback topic asks the user two times before redirecting to the Escalate topic.'

**Source:** Design agent conversations using topics — Work with system topics

### Q285 — System topic excluded from voice-enabled agents
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**Which system topic is explicitly NOT included in a voice-enabled Copilot Studio agent's predefined topics?**

- **A.** Main Menu
- **B.** Conversational boosting
- **C.** Silence detection
- **D.** Answering Machine Detection

**Answer:** B
**Confidence:** Certain

The unit lists voice-enabled agent topics and explicitly notes 'The Conversational boosting topic is not included.'

**Source:** Design agent conversations using topics — Topics in a Copilot Studio voice agent

### Q286 — Analogy for agents and workflows
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**According to the module introduction, how are Copilot Studio agents and Copilot Studio workflows characterized in the 'Think of it this way' analogy?**

- **A.** Agents are the reliable executors, and workflows are the smart decision-makers
- **B.** Agents are the smart decision-makers, and workflows are the reliable executors
- **C.** Agents and workflows perform an identical role with no distinction
- **D.** Agents handle billing while workflows handle conversation design

**Answer:** B
**Confidence:** Certain

The unit states 'Think of it this way: Copilot Studio agents: the smart decision-makers. Copilot Studio workflows: the reliable executors.'

**Source:** Add structured automation to agents in Microsoft Copilot Studio — Introduction

### Q287 — Nature of Copilot Studio workflows
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**How are Copilot Studio workflows characterized in contrast to autonomous agents that use AI to make decisions on the fly?**

- **A.** As deterministic workflows that follow the same path every time and produce consistent, reliable results
- **B.** As probabilistic workflows whose path changes based on model temperature
- **C.** As entirely manual processes with no automation
- **D.** As a type of custom entity

**Answer:** A
**Confidence:** Certain

The unit states 'Unlike autonomous agents that use AI to make decisions on the fly, Copilot Studio workflows are deterministic workflows, meaning they follow the same path every time and produce consistent, reliable results.'

**Source:** Add structured automation to agents in Microsoft Copilot Studio — Overview of Copilot Studio workflows as tools

### Q288 — Trigger and action required for a workflow to be usable as a tool
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which trigger and action combination must a Copilot Studio workflow have to work as a tool with agents?**

- **A.** When a new item is created trigger, and Send an email action
- **B.** When an agent calls the flow trigger, and Respond to the agent action
- **C.** Manually trigger a flow trigger, and Create a record action
- **D.** Recurrence trigger, and Post a message action

**Answer:** B
**Confidence:** Certain

The unit states the workflow 'needs to meet the following criteria: Have the When an agent calls the flow trigger and the response action of Respond to the agent.'

**Source:** Add structured automation to agents in Microsoft Copilot Studio — Create Copilot Studio workflows as tools

### Q289 — Supported input/output parameter types for workflow tools
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which of these parameter types are supported for input and output parameters between a Copilot Studio agent and a workflow tool?**

- **A.** Number, String, and Boolean
- **B.** Array, Object, and DateTime
- **C.** Only String type is supported
- **D.** File, Image, and Number

**Answer:** A
**Confidence:** Certain

The unit states 'Copilot Studio agents support only the following types of input and output parameters for workflows: Number, String, Boolean.'

**Source:** Add structured automation to agents in Microsoft Copilot Studio — Create Copilot Studio workflows as tools

### Q290 — Two loop constructs in Copilot Studio workflows
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What are the two loop constructs Copilot Studio workflows offer for repeated actions?**

- **A.** For and While
- **B.** Apply for each and Do until
- **C.** Foreach and Repeat
- **D.** Loop and Branch

**Answer:** B
**Confidence:** Certain

The unit states 'Workflows offer two methods to perform loop processing: Apply for each: A for-each loop construct that processes each item in an array. Do until: A while loop construct that processes items until an expression is true.'

**Source:** Add structured automation to agents in Microsoft Copilot Studio — Design Copilot Studio workflow tools

### Q291 — Maximum data a workflow can return to an agent
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**How much data can an agent receive from a workflow in a single action, according to the module?**

- **A.** Up to 1 MB
- **B.** Up to 10 MB
- **C.** Up to 100 KB
- **D.** There is no limit at all in either direction

**Answer:** A
**Confidence:** Certain

The unit states 'An agent can only receive up to 1 MB of data from a workflow in a single action. However, there's no limit on how many variables or the amount of data an agent can send.'

**Source:** Add structured automation to agents in Microsoft Copilot Studio — Add Copilot Studio workflows as tools to agents

### Q292 — Three tabs in the workflow tool configuration pane
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**When you add an existing Copilot Studio workflow tool to an agent, what are the three tabs in the configuration pane that opens?**

- **A.** Details, Inputs, and Completions
- **B.** Overview, Analytics, and Settings
- **C.** Trigger, Actions, and Outputs
- **D.** Name, Description, and Icon

**Answer:** A
**Confidence:** Certain

The unit states 'A configuration pane opens with three tabs: Details... Inputs... Completions.'

**Source:** Add structured automation to agents in Microsoft Copilot Studio — Add Copilot Studio workflows as tools to agents

### Q293 — Setting to restrict a workflow tool to topic use only
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What setting should you configure so a workflow tool is only called from a topic and not used autonomously by the agent?**

- **A.** Agent may use this tool at any time
- **B.** Only when referenced by topics or agents
- **C.** Ask the end user before running set to Yes
- **D.** Asynchronous response set to On

**Answer:** B
**Confidence:** Certain

The unit states 'To only use the tool from a topic, When this tool may be used should be set to Only when referenced by topics or agents.'

**Source:** Add structured automation to agents in Microsoft Copilot Studio — Add Copilot Studio workflows as tools to topics

### Q294 — Icon that opens the variable picker in the message node toolbar
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**In the message node's formatting toolbar, what icon lets you personalize a message at runtime by inserting a topic, global, or system variable?**

- **A.** The {x} icon
- **B.** The lightning bolt icon
- **C.** The paperclip icon
- **D.** The gear icon

**Answer:** A
**Confidence:** Certain

The unit states 'the toolbar includes a variable insertion control — the {x} icon — that lets you personalize messages at runtime using topic variables, global variables, or system variables.'

**Source:** Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio — Configure message formatting in agent topics

### Q295 — Difference between quick replies and a Question node
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**How do quick replies differ from the multiple-choice options on a Question node?**

- **A.** Quick replies are suggestions the user can ignore, while a Question node enforces a choice and won't advance until a recognized option is given
- **B.** Quick replies require coding, while Question node options do not
- **C.** Quick replies can only open URLs, while Question node options only send messages
- **D.** There is no meaningful difference between the two

**Answer:** A
**Confidence:** Certain

The unit states 'quick replies are suggestions, not requirements. An employee can ignore them and type freely at any time. The Question node enforces a choice—it doesn't advance the conversation until the employee selects or enters a recognized option.'

**Source:** Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio — Configure message formatting in agent topics

### Q296 — Two roles Adaptive Cards can play in a topic
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What are the two distinct roles an Adaptive Card can play in a Copilot Studio topic?**

- **A.** Informational, embedded in a Send a message node with no input collected, and Interactive, via the Ask with Adaptive Card node
- **B.** Static and Dynamic cards, which differ only in color scheme
- **C.** Public and Private cards, which differ in channel visibility
- **D.** Draft and Published cards

**Answer:** A
**Confidence:** Certain

The unit states 'Informational (message node): The card is embedded in a Send a message node... Interactive (Ask with Adaptive Card node): The card functions as an input form.'

**Source:** Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio — Design informational Adaptive Cards for agent responses

### Q297 — Recommended maximum data points per Adaptive Card
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What is the key design principle given for how many data points an informational Adaptive Card should show?**

- **A.** Limit each card to three to five data points
- **B.** Show as many data points as the JSON schema allows
- **C.** Exactly one data point per card
- **D.** At least ten data points for completeness

**Answer:** A
**Confidence:** Certain

The unit states 'A key design principle: limit each card to three to five data points. A card that tries to show everything becomes unreadable, especially on mobile.'

**Source:** Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio — Design informational Adaptive Cards for agent responses

### Q298 — Number of supported Adaptive Card input element types
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**How many input element types does the module say Adaptive Cards supports for the Ask with Adaptive Card node?**

- **A.** Four
- **B.** Five
- **C.** Six
- **D.** Eight

**Answer:** C
**Confidence:** Certain

The unit states 'Adaptive Cards supports six input element types' and lists Input.Text, Input.Number, Input.Date, Input.Time, Input.Toggle, and Input.ChoiceSet.

**Source:** Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio — Collect user input with interactive Adaptive Cards

### Q299 — Format returned by the Input.Date element
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What date string format does the Input.Date element return?**

- **A.** MM/DD/YYYY
- **B.** YYYY-MM-DD
- **C.** DD-MM-YYYY
- **D.** A Unix timestamp integer

**Answer:** B
**Confidence:** Certain

The unit states 'Input.Date: A date picker that returns a date string in YYYY-MM-DD format.'

**Source:** Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio — Collect user input with interactive Adaptive Cards

### Q300 — Element required to send an Ask with Adaptive Card form's entries to the agent
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What element must every Ask with Adaptive Card form include to send the employee's entries back to the agent?**

- **A.** An Action.Submit element
- **B.** An Input.Toggle element
- **C.** A ColumnSet element
- **D.** An Action.Execute element only, never Action.Submit

**Answer:** A
**Confidence:** Certain

The unit states 'Every Ask with Adaptive Card form needs an Action.Submit element—the button that sends the employee's entries back to the agent.'

**Source:** Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio — Collect user input with interactive Adaptive Cards

### Q301 — Maximum Adaptive Card schema version supported by Microsoft Teams and Live Chat
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**According to the module's schema support table, what is the maximum Adaptive Card schema version supported by both Microsoft Teams and Live Chat (Omnichannel)?**

- **A.** v1.3
- **B.** v1.5
- **C.** v1.6
- **D.** v2.0

**Answer:** B
**Confidence:** Certain

The table states Microsoft Teams and Live Chat (Omnichannel) both support a maximum schema version of v1.5, while the Web channel supports v1.6.

**Source:** Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio — Apply channel-specific considerations for Adaptive Cards

### Q302 — Recommended design strategy for agents targeting multiple channels
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is the recommended design strategy when an agent using Adaptive Cards targets more than one channel, such as Teams and web?**

- **A.** Design all cards to schema v1.5 for consistent cross-channel rendering
- **B.** Design all cards to schema v1.6 for the richest features everywhere
- **C.** Avoid Adaptive Cards entirely and use only message nodes
- **D.** Randomly alternate between schema versions per session

**Answer:** A
**Confidence:** Certain

The unit states 'If your agent is deployed to Microsoft Teams or Live Chat for any part of its audience, design all cards to v1.5. This design choice eliminates an entire category of rendering bugs and is the most common approach in production deployments.'

**Source:** Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio — Apply channel-specific considerations for Adaptive Cards

### Q303 — Two tools available only at the topic level
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**Which two tools in Copilot Studio are only available at the topic level and cannot be invoked by the AI orchestrator from the agent's Tools page?**

- **A.** Create search query and Perform custom search
- **B.** Connectors and Agent flows
- **C.** REST APIs and Model Context Protocol
- **D.** Computer use and Prompts

**Answer:** A
**Confidence:** Certain

The unit states 'Two tools in Copilot Studio are only available at the topic level — they don't appear on the agent's Tools page and can't be invoked by the AI orchestrator... Create search query... Perform custom search.'

**Source:** Take action from agent conversations using topics and tools in Microsoft Copilot Studio — Call tools from agent topics

### Q304 — Default authentication mode for connector tools
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which authentication option is the default for connector tools, prompting each user to sign in with their own credentials the first time they trigger the tool?**

- **A.** Maker-provided authentication
- **B.** End user authentication
- **C.** Anonymous authentication
- **D.** Service principal authentication

**Answer:** B
**Confidence:** Certain

The unit states 'End user authentication is the default. When a user triggers the connector tool for the first time, the agent prompts them to sign in with their own credentials for the connected service.'

**Source:** Take action from agent conversations using topics and tools in Microsoft Copilot Studio — Call tools from agent topics

### Q305 — Licensing note about the Microsoft Dataverse connector
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What important licensing detail does the unit mention about the Microsoft Dataverse connector?**

- **A.** It is free for all Copilot Studio plans with no restrictions
- **B.** It is a premium connector, and users without a plan that includes premium connector access may see errors at runtime
- **C.** It only works with maker-provided authentication
- **D.** It requires a separate Power Automate license

**Answer:** B
**Confidence:** Certain

The unit states 'The Microsoft Dataverse connector is a premium connector. Users who trigger the connector without a Copilot Studio plan that includes premium connector access may encounter errors at runtime.'

**Source:** Take action from agent conversations using topics and tools in Microsoft Copilot Studio — Call tools from agent topics

### Q306 — Time limit for an agent flow to complete and respond
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Within how many seconds must an agent flow complete and respond to the topic that called it, according to the module?**

- **A.** 30 seconds
- **B.** 60 seconds
- **C.** 100 seconds
- **D.** 300 seconds

**Answer:** C
**Confidence:** Certain

The unit states 'Agent flows must complete and respond within 100 seconds. The topic pauses at the Action node and waits for the flow's response. If the flow doesn't respond in time, the action times out.'

**Source:** Take action from agent conversations using topics and tools in Microsoft Copilot Studio — Call agent flows from agent topics

### Q307 — How agent flows are billed compared to cloud flows
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**How are agent flows billed, as distinguished from Power Automate cloud flows in this unit?**

- **A.** They're billed through your Copilot Studio consumption, not through a Power Automate license
- **B.** They require a dedicated Power Automate premium license
- **C.** They are billed per API call to an external connector only
- **D.** They are always free regardless of usage

**Answer:** A
**Confidence:** Certain

The unit states 'They're billed through your Copilot Studio consumption, not through a Power Automate license, and they appear on the Flows page inside Copilot Studio.'

**Source:** Take action from agent conversations using topics and tools in Microsoft Copilot Studio — Call agent flows from agent topics

### Q308 — HTTP methods supported by the Send HTTP Request node
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which HTTP methods does the Send HTTP Request node's Method dropdown support?**

- **A.** GET, POST, PATCH, PUT, and DELETE
- **B.** GET and POST only
- **C.** GET, HEAD, and OPTIONS
- **D.** CONNECT, TRACE, and PATCH

**Answer:** A
**Confidence:** Certain

The unit states 'The node supports GET, POST, PATCH, PUT, and DELETE.'

**Source:** Take action from agent conversations using topics and tools in Microsoft Copilot Studio — Retrieve and send data using the HTTP request node

### Q309 — Default error handling mode for the Send HTTP Request node
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is the default error handling mode of the Send HTTP Request node when a request fails?**

- **A.** Continue on error
- **B.** Raise an error, which triggers the system On Error topic and stops the current flow
- **C.** Silent retry up to three times
- **D.** Send an adaptive card with the error details

**Answer:** B
**Confidence:** Certain

The unit states 'By default, the Send HTTP Request node uses Raise an error mode. When the request fails, the agent triggers the system On Error topic and stops the current flow.'

**Source:** Take action from agent conversations using topics and tools in Microsoft Copilot Studio — Retrieve and send data using the HTTP request node

### Q310 — Five monitoring layers for AI agents
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**According to the introduction of the 'Monitor, analyze, and tune AI agents' module, which five layers make up the multi-layered monitoring approach solution architects must establish?**

- **A.** Operational health, performance metrics, quality assurance, usage insights, and risk management
- **B.** Code coverage, unit tests, integration tests, load tests, and security tests
- **C.** Latency, throughput, memory, CPU, and disk utilization only
- **D.** Sales, marketing, support, finance, and HR reporting

**Answer:** A
**Confidence:** Certain

The module introduction states monitoring requires understanding 'multi-layered monitoring requirements, including operational health, performance metrics, quality assurance, usage insights, and risk management.'

**Source:** Monitor, analyze, and tune AI agents — Introduction

### Q311 — Monitoring tools named in module intro
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Besides Azure Monitor and Copilot analytics dashboards, which other Microsoft tool is explicitly named in the module introduction as a recommended monitoring tool for AI agents?**

- **A.** Power Platform Admin Center
- **B.** Visual Studio Code
- **C.** SQL Server Management Studio
- **D.** Azure DevOps Boards

**Answer:** A
**Confidence:** Certain

The introduction lists 'Azure Monitor, Microsoft 365 Admin Analytics, Copilot analytics dashboards, Power Platform Admin Center, and enterprise observability platforms' as recommended tools.

**Source:** Monitor, analyze, and tune AI agents — Introduction

### Q312 — Lowest success rate in example agent health table
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**In the example Agent Health Summary table in this unit, which agent has the lowest success rate?**

- **A.** Finance Advisor (86%)
- **B.** Sales Helper (98%)
- **C.** Ops Agent (92%)
- **D.** Support Bot (75%)

**Answer:** A
**Confidence:** Certain

The table lists Finance Advisor at 86% success with a decreasing usage trend, the lowest of the three sample agents shown.

**Source:** Monitor, analyze, and tune AI agents — Recommend process tools for monitoring agents

### Q313 — Power Platform Admin Center monitoring scope
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What does the Power Platform Admin Center provide for environment-level monitoring, according to this unit?**

- **A.** Environment health, connector usage and limits, flow telemetry, and DLP rule impact visibility
- **B.** Source control history and pull request reviews
- **C.** Token-level billing invoices only
- **D.** Physical server hardware diagnostics

**Answer:** A
**Confidence:** Certain

The unit describes the Power Platform Admin Center as providing environment health, connector usage/limits, flow telemetry, and DLP rule impact visibility.

**Source:** Monitor, analyze, and tune AI agents — Recommend process tools for monitoring agents

### Q314 — Azure Monitor's telemetry integration
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Which tool does this unit describe as integrating with Log Analytics Workspaces and providing alert rules for anomalies?**

- **A.** Azure Monitor
- **B.** Microsoft 365 Admin Analytics
- **C.** Power Platform Admin Center
- **D.** Copilot & Agent Analytics Dashboards

**Answer:** A
**Confidence:** Certain

Azure Monitor is described as providing dashboards, alert rules for anomalies, and integration with Log Analytics Workspaces.

**Source:** Monitor, analyze, and tune AI agents — Recommend process tools for monitoring agents

### Q315 — Best practice for agent monitoring
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Which of the following is listed as a best practice for monitoring AI agents in this unit?**

- **A.** Automate alerting for critical business workflows
- **B.** Disable logging to reduce noise
- **C.** Use inconsistent naming conventions per team
- **D.** Review logs only after major incidents

**Answer:** A
**Confidence:** Certain

The unit's Best Practices section explicitly recommends automating alerting for critical business workflows.

**Source:** Monitor, analyze, and tune AI agents — Recommend process tools for monitoring agents

### Q316 — Backlog category for DLP alerts
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Per the Backlog Categorization Table in this unit, under which category would 'Data access blocked; DLP alerts' be classified?**

- **A.** Governance
- **B.** Accuracy
- **C.** Performance
- **D.** User Experience

**Answer:** A
**Confidence:** Certain

The Backlog Categorization Table lists 'Data access blocked; DLP alerts' as example items under the Governance category.

**Source:** Monitor, analyze, and tune AI agents — Analyze backlog and user feedback for AI agent usage

### Q317 — Agent with most issues logged
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**According to the Agent Health Summary table in this unit, which agent logged the most issues?**

- **A.** Analytics Coach (21 issues)
- **B.** Finance Assistant (8 issues)
- **C.** Supply Chain Helper (14 issues)
- **D.** Sales Helper (3 issues)

**Answer:** A
**Confidence:** Certain

The table shows Analytics Coach with 21 issues logged, the highest of the three agents listed.

**Source:** Monitor, analyze, and tune AI agents — Analyze backlog and user feedback for AI agent usage

### Q318 — Solution architect actions on transcript patterns
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Per this unit, what should solution architects do after using conversation transcripts to identify agent failure patterns?**

- **A.** Extract common failure paths and map transcript patterns to root causes
- **B.** Delete the transcripts immediately for privacy
- **C.** Escalate every transcript to executive leadership
- **D.** Ignore transcripts and rely solely on automated metrics

**Answer:** A
**Confidence:** Certain

The unit states solution architects should 'Extract common failure paths' and 'Map transcript patterns to root causes' after reviewing conversation transcripts.

**Source:** Monitor, analyze, and tune AI agents — Analyze backlog and user feedback for AI agent usage

### Q319 — Tuning strategy for knowledge gap issue
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Per the AI Issue Mapping Chart in this unit, what is the recommended tuning strategy when an agent produces incorrect responses due to a knowledge gap?**

- **A.** Add/update content
- **B.** Adjust roles/labels
- **C.** Optimize steps
- **D.** Refine agent instructions

**Answer:** A
**Confidence:** Certain

The AI Issue Mapping Chart maps 'Incorrect responses' caused by a 'Knowledge gap' to the required tuning of 'Add/update content.'

**Source:** Monitor, analyze, and tune AI agents — Apply AI-based tools to analyze, identify issues, and perform tuning

### Q320 — Behavioral tuning definition
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which tuning category involves adjusting orchestrations or agent steps and introducing fallback strategies for ambiguous queries?**

- **A.** Behavioral Tuning
- **B.** Knowledge Tuning
- **C.** Performance Tuning
- **D.** Governance-Aligned Tuning

**Answer:** A
**Confidence:** Certain

Behavioral Tuning includes adjusting orchestrations or agent steps, adding clarifying instructions, and introducing fallback strategies for ambiguous queries.

**Source:** Monitor, analyze, and tune AI agents — Apply AI-based tools to analyze, identify issues, and perform tuning

### Q321 — Configuration issues root cause
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which root cause category covers 'incorrect environment variables, feature toggles, or role settings'?**

- **A.** Configuration Issues
- **B.** Knowledge Gaps
- **C.** Integration Failures
- **D.** Governance Interference

**Answer:** A
**Confidence:** Certain

The unit lists Configuration Issues as: 'Incorrect environment variables, feature toggles, or role settings.'

**Source:** Monitor, analyze, and tune AI agents — Apply AI-based tools to analyze, identify issues, and perform tuning

### Q322 — Performance scorecard target for success rate
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**According to the Performance Scorecard in this unit, what is the target behavior defined for the 'Success Rate' metric category?**

- **A.** High completion rate without human assistance
- **B.** Fast, predictable responses
- **C.** No unauthorized actions
- **D.** Minimal systemic errors

**Answer:** A
**Confidence:** Certain

The Performance Scorecard defines the target behavior for Success Rate as 'High completion rate without human assistance.'

**Source:** Monitor, analyze, and tune AI agents — Apply AI-based tools to analyze, identify issues, and perform tuning

### Q323 — First step of transcript review framework
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What is the first step in the Transcript Review Framework used to diagnose AI agent issues from conversation logs?**

- **A.** Identify the triggering user goal
- **B.** Propose knowledge, behavior, or workflow improvements
- **C.** Mark friction points
- **D.** Compare output vs. expected behavior

**Answer:** A
**Confidence:** Certain

The Transcript Review Framework begins with step 1: 'Identify the triggering user goal.'

**Source:** Monitor, analyze, and tune AI agents — Apply AI-based tools to analyze, identify issues, and perform tuning

### Q324 — User-centered metrics category
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Which category of AI agent metrics includes 'Abandonment Rate' and 'Task Completion Rate'?**

- **A.** User-Centered Metrics
- **B.** Operational Metrics
- **C.** Quality and Reasoning Metrics
- **D.** Governance Metrics

**Answer:** A
**Confidence:** Certain

Abandonment Rate and Task Completion Rate are both listed under User-Centered Metrics in this unit.

**Source:** Monitor, analyze, and tune AI agents — Monitor AI agent performance metrics

### Q325 — Definition of model drift
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What does 'Model Drift' refer to according to this unit?**

- **A.** Shifts in response patterns and declining accuracy in recurring tasks, potentially with increased hallucination
- **B.** A permanent increase in token cost for all prompts
- **C.** A change in the agent's underlying Dataverse table schema
- **D.** The migration of an agent from Dev to Production environment

**Answer:** A
**Confidence:** Certain

The unit describes Model Drift as 'Shifts in response patterns,' 'Declining accuracy in recurring tasks,' and 'Increased hallucination or off topic responses.'

**Source:** Monitor, analyze, and tune AI agents — Monitor AI agent performance metrics

### Q326 — Tuning strategy for high abandonment
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Per the Common Issue Categories table, what is the recommended tuning strategy for 'High abandonment' caused by confusing steps or unclear guidance?**

- **A.** Improve UX flow and prompt clarity
- **B.** Update grounding content
- **C.** Fix connector issues and update permissions
- **D.** Adjust DLP, sensitivity labels, allowed actions

**Answer:** A
**Confidence:** Certain

The table maps 'High abandonment' caused by confusing steps to the tuning strategy 'Improve UX flow and prompt clarity.'

**Source:** Monitor, analyze, and tune AI agents — Monitor AI agent performance metrics

### Q327 — Operational metrics components
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Which four metrics make up the 'Operational Metrics' category for AI agent performance in this unit?**

- **A.** Latency, Throughput, Error Rate, and Resource Utilization
- **B.** Accuracy, Consistency, Relevance, Tone
- **C.** Satisfaction, Abandonment, Completion, Sentiment
- **D.** Cost, Region, Residency, Compliance

**Answer:** A
**Confidence:** Certain

The unit lists Latency, Throughput, Error Rate, and Resource Utilization as the Operational Metrics.

**Source:** Monitor, analyze, and tune AI agents — Monitor AI agent performance metrics

### Q328 — Final step of telemetry diagnostic workflow
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What is the final step in the telemetry-driven diagnostic workflow described in this unit?**

- **A.** Validate Improvements
- **B.** Determine Root Cause
- **C.** Identify Anomalies
- **D.** Monitor Key Metrics

**Answer:** A
**Confidence:** Certain

The step-by-step diagnostic flow ends with 'Validate Improvements — Compare before-and-after telemetry patterns to ensure successful tuning.'

**Source:** Monitor, analyze, and tune AI agents — Interpret telemetry data to tune AI performance

### Q329 — Model-level telemetry contents
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which telemetry category includes 'token usage and cost patterns' and 'drift indicators and degradation trends'?**

- **A.** Model-Level Telemetry
- **B.** Operational Telemetry
- **C.** Behavioral Telemetry
- **D.** Governance and Compliance Signals

**Answer:** A
**Confidence:** Certain

Model-Level Telemetry is defined to include token usage/cost patterns, response consistency, and drift indicators/degradation trends.

**Source:** Monitor, analyze, and tune AI agents — Interpret telemetry data to tune AI performance

### Q330 — Meaning of high token usage signal
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**According to this unit, what does 'high token usage' as a performance signal typically suggest?**

- **A.** Verbose outputs, unclear prompts, or an overly complex workflow
- **B.** A successful, well-optimized agent
- **C.** A hardware failure in the hosting environment
- **D.** An expired API key

**Answer:** A
**Confidence:** Certain

The unit states: 'High token usage — Suggests verbose outputs, unclear prompts, or an overly complex workflow.'

**Source:** Monitor, analyze, and tune AI agents — Interpret telemetry data to tune AI performance

### Q331 — Best indicator of user success
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**According to this module's key takeaways, which metric is identified as 'the best indicator of user success'?**

- **A.** Task completion rate
- **B.** Token efficiency
- **C.** Latency
- **D.** Guardrail compliance count

**Answer:** A
**Confidence:** Certain

The key takeaways state that task completion rate is 'the best indicator of user success' among user-centered metrics.

**Source:** Monitor, analyze, and tune AI agents — Ensure reliable AI agent operations

### Q332 — Continuous improvement lifecycle order
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What is the six-stage continuous improvement lifecycle described for AI agents in this module summary?**

- **A.** Monitor → analyze → tune → validate → release → monitor again
- **B.** Plan → design → build → test → deploy → retire
- **C.** Ingest → cleanse → train → evaluate → deploy → archive
- **D.** Discover → propose → approve → build → ship → celebrate

**Answer:** A
**Confidence:** Certain

The unit states AI agents require an iterative approach: 'monitor → analyze → tune → validate → release → monitor again.'

**Source:** Monitor, analyze, and tune AI agents — Ensure reliable AI agent operations

### Q333 — Components of a strong monitoring operating model
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Per the key takeaways in this unit, what does a strong monitoring operating model include?**

- **A.** Defined roles, standardized metrics, log review cadence, and clear expectations for agent behavior
- **B.** Only automated alerts with no human review
- **C.** A single centralized password vault
- **D.** Quarterly board presentations only

**Answer:** A
**Confidence:** Certain

The unit states: 'A strong monitoring operating model includes defined roles, standardized metrics, log review cadence, and clear expectations for agent behavior.'

**Source:** Monitor, analyze, and tune AI agents — Ensure reliable AI agent operations

### Q334 — Testing module performance indicators
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What measurable performance indicators does the testing module introduction identify for validating AI-powered business solutions?**

- **A.** Accuracy, latency, stability, guardrail adherence, and user experience quality
- **B.** Revenue, churn, NPS, and headcount
- **C.** CPU cycles, disk IOPS, and network throughput only
- **D.** Code coverage percentage exclusively

**Answer:** A
**Confidence:** Certain

The introduction states the module emphasizes 'measurable performance indicators such as accuracy, latency, stability, guardrail adherence, and user experience quality.'

**Source:** Manage testing AI-powered business solutions — Introduction

### Q335 — Why traditional testing is insufficient for AI
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Per the introduction to this module, why aren't traditional testing methods sufficient for AI-powered business solutions?**

- **A.** Because AI systems generate probabilistic outputs and rely on dynamic data sources
- **B.** Because AI systems never produce errors
- **C.** Because AI systems run exclusively offline
- **D.** Because traditional testing tools are too expensive to license

**Answer:** A
**Confidence:** Certain

The introduction explains: 'Because AI systems generate probabilistic outputs and rely on dynamic data sources, traditional testing methods aren't sufficient.'

**Source:** Manage testing AI-powered business solutions — Introduction

### Q336 — Four components of a test plan
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What four components should a complete agent test plan include, per this unit?**

- **A.** Test Scope, Test Data, Test Roles, and Success Criteria
- **B.** Budget, Timeline, Stakeholders, and Risks
- **C.** Code, Tests, Docs, and Releases
- **D.** Vision, Mission, Values, and Goals

**Answer:** A
**Confidence:** Certain

The unit lists a complete agent testing plan should include: Test Scope, Test Data, Test Roles, and Success Criteria.

**Source:** Manage testing AI-powered business solutions — Recommend process metrics for testing AI agents

### Q337 — Testing type for high volume conditions
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which type of testing evaluates how an agent performs under high request volume, long interactions, and concurrent sessions?**

- **A.** Performance and reliability testing
- **B.** Scenario-based testing
- **C.** Safety and compliance testing
- **D.** Usability testing

**Answer:** A
**Confidence:** Certain

Performance and reliability testing is described as evaluating agent performance under high request volume, long interactions, complex multi-step tasks, and concurrent sessions.

**Source:** Manage testing AI-powered business solutions — Recommend process metrics for testing AI agents

### Q338 — Agent testing lifecycle stage order
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**According to the agent testing lifecycle diagram in this unit, what stage comes immediately after 'Analysis'?**

- **A.** Tuning
- **B.** Approval
- **C.** Execution
- **D.** Deployment

**Answer:** A
**Confidence:** Certain

The agent testing lifecycle diagram lists the stages in order: Test Planning, Scenario Design, Execution, Measurement, Analysis, Tuning, Re-Test, Approval, and Deployment.

**Source:** Manage testing AI-powered business solutions — Recommend process metrics for testing AI agents

### Q339 — Meaning of token efficiency metric
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What does 'Token efficiency' measure as a core quantitative metric for testing generative agents?**

- **A.** Amount of content generated relative to cost, signaling overly verbose or inefficient prompting
- **B.** The number of tokens issued for user authentication
- **C.** The physical storage size of the agent's model file
- **D.** The number of active user licenses consumed

**Answer:** A
**Confidence:** Certain

The unit defines Token efficiency as: 'Amount of content generated relative to cost' and 'Signs of overly verbose or inefficient prompting.'

**Source:** Manage testing AI-powered business solutions — Recommend process metrics for testing AI agents

### Q340 — Latency success threshold example
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Per the example validation metrics table in this unit, what is the success threshold defined for model latency?**

- **A.** Less than 2 seconds
- **B.** Less than 10 seconds
- **C.** Less than 500 milliseconds
- **D.** No threshold defined

**Answer:** A
**Confidence:** Certain

The example validation metrics table lists Latency with a success threshold of '< 2 seconds.'

**Source:** Manage testing AI-powered business solutions — Create validation criteria for custom AI models

### Q341 — Accuracy success threshold example
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What accuracy threshold is defined as the success criteria for the 'Quality' validation area in the example table?**

- **A.** ≥ 90% correctness
- **B.** ≥ 50% correctness
- **C.** ≥ 99.99% correctness
- **D.** No minimum defined

**Answer:** A
**Confidence:** Certain

The table lists Accuracy under the Quality validation area with a success threshold of '≥ 90% correctness.'

**Source:** Manage testing AI-powered business solutions — Create validation criteria for custom AI models

### Q342 — Grounding integrity validation dimension
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which qualitative validation dimension asks 'Does the model use approved organizational knowledge?'**

- **A.** Grounding Integrity
- **B.** Consistency of Reasoning
- **C.** Relevance and Completeness
- **D.** User Experience Quality

**Answer:** A
**Confidence:** Certain

Grounding Integrity is defined by the question: 'Does the model use approved organizational knowledge?'

**Source:** Manage testing AI-powered business solutions — Create validation criteria for custom AI models

### Q343 — Guardrail violations threshold
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What is the required success threshold for 'Guardrail Violations' in the example validation metrics table?**

- **A.** 0
- **B.** ≤ 3%
- **C.** On par with baseline
- **D.** ≥ 4.5 / 5

**Answer:** A
**Confidence:** Certain

The Safety row of the table lists Guardrail Violations with a success threshold of 0.

**Source:** Manage testing AI-powered business solutions — Create validation criteria for custom AI models

### Q344 — Order of goal, context, constraints
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What order does this unit recommend for structuring an enterprise-ready prompt using goal, context, and constraints?**

- **A.** Goal, then context, then constraints, in that order
- **B.** Constraints, then examples, then goal
- **C.** Context, then examples, then goal
- **D.** Examples first, followed by goal and context

**Answer:** A
**Confidence:** Certain

The unit recommends: 'Start with goal + context + constraints in that order.'

**Source:** Manage testing AI-powered business solutions — Validate effective Copilot prompt best practices

### Q345 — Format compliance metric definition
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Which prompt quality metric measures whether 'output follows required structure'?**

- **A.** Format Compliance
- **B.** Tone Alignment
- **C.** Consistency
- **D.** Relevance

**Answer:** A
**Confidence:** Certain

Format Compliance is defined as: 'Output follows required structure.'

**Source:** Manage testing AI-powered business solutions — Validate effective Copilot prompt best practices

### Q346 — A/B prompt testing method
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What validation method involves creating two variations of the same prompt and comparing output accuracy, clarity, and relevance?**

- **A.** A/B prompt testing
- **B.** Scenario-based testing
- **C.** Structured evaluation checklist
- **D.** Grounding assessment

**Answer:** A
**Confidence:** Certain

A/B prompt testing is described as using two variations of the same prompt and comparing output accuracy, clarity, relevance, and required follow-up steps.

**Source:** Manage testing AI-powered business solutions — Validate effective Copilot prompt best practices

### Q347 — Prompt validation lifecycle step order
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**According to the prompt validation lifecycle diagram, what step comes immediately before 'Approve for Use'?**

- **A.** Refine and Re-Test
- **B.** Define Goal
- **C.** Run Prompt
- **D.** Document

**Answer:** A
**Confidence:** Certain

The lifecycle diagram lists the steps in order: Define Goal, Add Context, Apply Structure, Run Prompt, Evaluate Output, Refine and Re-Test, Approve for Use, and Document.

**Source:** Manage testing AI-powered business solutions — Validate effective Copilot prompt best practices

### Q348 — Order-to-Cash cross-app process
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which cross-app business process example spans Dynamics 365 Sales, Dynamics 365 Finance, and Dynamics 365 Customer Service?**

- **A.** Order-to-Cash
- **B.** Case-to-Resolution
- **C.** Hire-to-Retire
- **D.** Procure-to-Pay

**Answer:** A
**Confidence:** Certain

The unit names 'Order-to-Cash (Dynamics 365 Sales → Dynamics 365 Finance → Dynamics 365 Customer Service)' as an example cross-app process.

**Source:** Manage testing AI-powered business solutions — Design end-to-end test scenarios for AI solutions using multiple Dynamics 365 apps

### Q349 — Non-functional validation scope
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which validation category in this unit addresses 'latency across apps' and 'error handling and failure recovery'?**

- **A.** Non-functional validation
- **B.** Functional validation
- **C.** Outcome validation
- **D.** Security validation

**Answer:** A
**Confidence:** Certain

Non-functional validation is defined to include latency across apps, error handling and failure recovery, and consistency of AI recommendations.

**Source:** Manage testing AI-powered business solutions — Design end-to-end test scenarios for AI solutions using multiple Dynamics 365 apps

### Q350 — Copilot test maturity ladder levels
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What are the five levels of the Copilot test maturity ladder described in this unit, from lowest to highest maturity?**

- **A.** Ad hoc prompting, standard prompt templates, automated prompt pipelines integrated with CI/CD, continuous risk-based testing with dynamic regeneration, and enterprise-wide prompt governance and reusable test frameworks
- **B.** Draft, review, approve, publish, retire
- **C.** Unit, integration, system, acceptance, regression
- **D.** Bronze, silver, gold, platinum, diamond

**Answer:** A
**Confidence:** Certain

The Copilot test maturity ladder diagram lists five levels: ad hoc prompting, standard prompt templates, automated prompt pipelines integrated with CI/CD, continuous risk-based testing with dynamic regeneration, and enterprise-wide prompt governance and reusable test frameworks.

**Source:** Manage testing AI-powered business solutions — Build a strategy for creating test cases using Copilot

### Q351 — Maintainability review criteria
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which review area for Copilot-generated test cases asks whether 'test cases [are] reusable across versions' with consistent naming conventions?**

- **A.** Maintainability
- **B.** Completeness
- **C.** Accuracy
- **D.** Clarity

**Answer:** A
**Confidence:** Certain

Maintainability is defined by: 'Test cases reusable across versions' and 'Naming conventions and formats consistent.'

**Source:** Manage testing AI-powered business solutions — Build a strategy for creating test cases using Copilot

### Q352 — Scaling a Copilot test case strategy
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What does this unit recommend to make Copilot-driven testing scalable?**

- **A.** Maintain a reusable prompt library, version control prompts and templates, integrate output into CI/CD, and use regression triggers
- **B.** Have every architect write test cases manually without templates
- **C.** Avoid version control to keep prompts flexible
- **D.** Run Copilot only once per project and never regenerate tests

**Answer:** A
**Confidence:** Certain

The unit recommends maintaining a reusable prompt library, version-controlling prompts and templates, integrating Copilot output into CI/CD workflows, and using regression triggers to regenerate tests.

**Source:** Manage testing AI-powered business solutions — Build a strategy for creating test cases using Copilot

### Q353 — Four environments for consistent AI ALM behavior
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**According to the introduction of this ALM module, across which four environments should solution architects ensure consistent AI behavior?**

- **A.** Dev, Test, Pre-Prod (Staging), and Production
- **B.** Sandbox, Beta, Release Candidate, and General Availability
- **C.** Local, Cloud, Hybrid, and Edge
- **D.** Design, Build, Test, and Ship

**Answer:** A
**Confidence:** Certain

The introduction states the focus is on 'ensuring consistent behavior across Dev, Test, Pre-Prod (Staging), and Production.'

**Source:** Design ALM process for AI-powered business solutions — Introduction

### Q354 — Governance controls emphasized in ALM module intro
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which set of governance controls does the ALM module introduction emphasize for AI solutions?**

- **A.** Versioning, lineage, sensitivity labeling, evaluation gates, and region/residency requirements
- **B.** Payroll processing, expense approvals, and travel policy
- **C.** Marketing campaign scheduling and budget tracking
- **D.** Physical building access badges and visitor logs

**Answer:** A
**Confidence:** Certain

The introduction states this module emphasizes governance controls including 'versioning, lineage, sensitivity labeling, evaluation gates, and region and residency requirements.'

**Source:** Design ALM process for AI-powered business solutions — Introduction

### Q355 — Red vs. gold dataset pattern
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**In the environment strategy for AI data ALM, what does the 'red gold datasets' pattern distinguish between?**

- **A.** Red (mutable, experimental) datasets versus gold (frozen, promoted) datasets
- **B.** Red (high risk) versus gold (no risk) customer accounts
- **C.** Red (deprecated) versus gold (currently licensed) connectors
- **D.** Red (failed tests) versus gold (passed tests) test cases

**Answer:** A
**Confidence:** Certain

The unit describes the 'Red gold datasets pattern: red (mutable, experimental) vs. gold (frozen, promoted).'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for data used in AI models and agents

### Q356 — Seven phases of AI data ALM process
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What is the correct order of the seven phases in the AI data ALM process described in this unit?**

- **A.** Plan & Catalog, Ingest & Prepare, Develop & Evaluate, Stage & Approve, Deploy & Serve, Operate & Monitor, Evolve & Retire
- **B.** Design, Build, Test, Approve, Deploy, Monitor, Archive
- **C.** Ingest, Catalog, Plan, Approve, Stage, Deploy, Retire
- **D.** Prepare, Plan, Develop, Deploy, Evaluate, Retire, Operate

**Answer:** A
**Confidence:** Certain

The unit lists Phase A through Phase G as: Plan & Catalog, Ingest & Prepare, Develop & Evaluate, Stage & Approve, Deploy & Serve, Operate & Monitor, and Evolve & Retire.

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for data used in AI models and agents

### Q357 — Canary testing definition
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**How does this unit define canary testing, used during the Stage & Approve phase of AI data ALM?**

- **A.** A low-risk deployment strategy that releases new code to a small, isolated subset of users or servers to identify issues before full rollout
- **B.** A method of encrypting data at rest using rotating keys
- **C.** A stress test that intentionally overloads the system to find its breaking point
- **D.** A manual code review conducted by two independent architects

**Answer:** A
**Confidence:** Certain

The unit states: 'Canary testing is a low-risk deployment strategy. It releases new code to a small, isolated subset of users or servers to identify issues before a full rollout.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for data used in AI models and agents

### Q358 — Evidence required at Gate C→D
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What evidence is required at the Gate C→D (Evaluation & safety) promotion checkpoint for AI data ALM?**

- **A.** Metrics pack, safety report, and model/data card
- **B.** Data contract, catalog record, and label policy proof
- **C.** Dashboards, alarms, rollback plan, and budget guard
- **D.** Residency mapping, DLP rules, and approval memo

**Answer:** A
**Confidence:** Certain

The gate checks table lists Gate C→D evidence required as: 'Metrics pack; safety report; model/data card.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for data used in AI models and agents

### Q359 — Default residency posture in regulated scenarios
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What default residency posture does this unit recommend for regulated scenarios involving AI data?**

- **A.** Set the default to in-region and require explicit approval to enable overflow processing
- **B.** Always allow cross-region overflow processing by default for performance
- **C.** Store all data in a single global region regardless of regulation
- **D.** Disable all data residency controls to simplify architecture

**Answer:** A
**Confidence:** Certain

The unit states: 'In regulated scenarios, set the default to in-region and require explicit approval to enable overflow processing.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for data used in AI models and agents

### Q360 — Three core Copilot Studio environments
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What three core environments does this unit recommend establishing for Copilot Studio ALM?**

- **A.** Development, Test (UAT/QA), and Production
- **B.** Sandbox, Staging, and Live
- **C.** Author, Publish, and Archive
- **D.** Local, Cloud, and Hybrid

**Answer:** A
**Confidence:** Certain

The unit recommends establishing at least three core environments: Development (Dev), Test (UAT/QA), and Production (Prod).

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for Copilot Studio agents, connectors, and actions

### Q361 — Connector release flow order
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What is the correct order of the Connector Release Flow described in this unit?**

- **A.** Author, Validate Auth, Apply DLP, Approve Security, Publish to Prod
- **B.** Publish to Prod, Author, Validate Auth, Apply DLP, Approve Security
- **C.** Apply DLP, Author, Approve Security, Validate Auth, Publish to Prod
- **D.** Approve Security, Apply DLP, Publish to Prod, Author, Validate Auth

**Answer:** A
**Confidence:** Certain

The unit's Connector Release Flow diagram reads: 'Author → Validate Auth → Apply DLP → Approve Security → Publish to Prod.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for Copilot Studio agents, connectors, and actions

### Q362 — Five stages of action lifecycle
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What are the five stages of the Action lifecycle for Copilot Studio actions, per this unit?**

- **A.** Design, Build, Validate, Promote, Monitor
- **B.** Plan, Develop, Test, Release, Archive
- **C.** Draft, Review, Approve, Publish, Retire
- **D.** Create, Configure, Deploy, Operate, Decommission

**Answer:** A
**Confidence:** Certain

The unit lists the Action lifecycle as: Design, Build, Validate, Promote, and Monitor.

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for Copilot Studio agents, connectors, and actions

### Q363 — Continuous improvement loop for Copilot Studio
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What is the continuous improvement loop described for monitoring Copilot Studio agents, connectors, and actions?**

- **A.** Monitor → Analyze → Improve → Release → Validate → Monitor
- **B.** Build → Test → Ship → Support
- **C.** Plan → Execute → Report
- **D.** Design → Deploy → Retire

**Answer:** A
**Confidence:** Certain

The unit states the continuous improvement loop is: 'Monitor → Analyze → Improve → Release → Validate → Monitor.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for Copilot Studio agents, connectors, and actions

### Q364 — Two promotion gates for Foundry agents
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What are the two promotion gates defined for Microsoft Foundry agent ALM?**

- **A.** Gate 1 Dev → Test and Gate 2 Test → Prod
- **B.** Gate 1 Design → Build and Gate 2 Build → Ship
- **C.** Gate 1 Sandbox → Staging and Gate 2 Staging → Live
- **D.** Gate 1 Draft → Review and Gate 2 Review → Publish

**Answer:** A
**Confidence:** Certain

The unit defines 'Promotion gate 1 Dev → Test' and 'Promotion gate 2 Test → Prod.'

**Source:** Design ALM process for AI-powered business solutions — Design ALM processes for Microsoft Foundry agents

### Q365 — Foundry versioning principle
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What versioning principle does this unit specify for Microsoft Foundry agents?**

- **A.** Treat each agent as a versioned artifact and maintain immutable releases for production
- **B.** Never version agents; always deploy the latest configuration directly
- **C.** Version only the connectors, not the agent logic
- **D.** Use random build numbers with no changelog requirement

**Answer:** A
**Confidence:** Certain

The unit states: 'Treat each agent as a versioned artifact' and 'Maintain immutable releases for production.'

**Source:** Design ALM process for AI-powered business solutions — Design ALM processes for Microsoft Foundry agents

### Q366 — BYOM meaning
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What does the abbreviation 'BYOM' refer to in the context of custom AI model development described in this unit?**

- **A.** Bring your own model
- **B.** Build your own middleware
- **C.** Batch your output metrics
- **D.** Bind your operational monitoring

**Answer:** A
**Confidence:** Certain

The unit states architects 'Build, fine-tune, or incorporate "bring your own model" (BYOM) components.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for custom AI models

### Q367 — Purpose of a Model Card
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What does the Evaluation & Approval stage of custom AI model ALM produce to document metrics, constraints, and recommended usage boundaries?**

- **A.** A Model Card
- **B.** A Data Contract
- **C.** A RACI chart
- **D.** A release calendar

**Answer:** A
**Confidence:** Certain

The unit states architects 'Produce a Model Card containing metrics, constraints, and recommended usage boundaries.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for custom AI models

### Q368 — Definition of hyperparameters
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**How does this unit define 'hyperparameters' in the context of AI model work products for Dynamics 365 Finance and Supply Chain?**

- **A.** External configuration settings, such as learning rate, batch size, or network layers, that define a model's structure and behavior before training begins
- **B.** The final accuracy score produced after model training completes
- **C.** A list of approved data sources used only for grounding
- **D.** The runtime cost per API call to the deployed model

**Answer:** A
**Confidence:** Certain

The unit defines hyperparameters as 'external configuration settings, such as learning rate, batch size, or network layers, that define a machine learning model's structure and behavior before training begin.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for AI in Dynamics 365 Finance and Supply Chain

### Q369 — Four benefits of a strong custom AI model ALM process
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which four benefits does this unit say a strong ALM process ensures for custom AI models?**

- **A.** Consistency, compliance, repeatability, and operational readiness
- **B.** Speed, scale, cost savings, and marketing reach
- **C.** Popularity, adoption, revenue, and brand recognition
- **D.** Simplicity, flexibility, novelty, and creativity

**Answer:** A
**Confidence:** Certain

The unit lists: 'Consistency,' 'Compliance,' 'Repeatability,' and 'Operational Readiness' as what a strong ALM process ensures.

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for custom AI models

### Q370 — Purpose of the TEST environment for Finance/SCM AI
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What is the defined purpose of the TEST environment in the Dynamics 365 Finance and Supply Chain AI ALM environment table?**

- **A.** Validate with safe, anonymized production-like data and perform regression checks
- **B.** Build and iterate AI models, prompts, and orchestration logic
- **C.** Execute approved AI capabilities in live financial workloads
- **D.** Host the disaster recovery replica of production

**Answer:** A
**Confidence:** Certain

The environment purposes table lists TEST as: 'Validate with safe, anonymized production-like data. Perform regression checks.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for AI in Dynamics 365 Finance and Supply Chain

### Q371 — Gate 2 criteria for Finance/SCM AI promotion
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which of the following is a Gate 2 (TEST → PROD) criterion for AI in Dynamics 365 Finance and Supply Chain?**

- **A.** No bias or unsafe output in validation scenarios
- **B.** Data profiling complete and approved
- **C.** Training and prompt logic documented
- **D.** Initial quality and safety evaluations passed

**Answer:** A
**Confidence:** Certain

Gate 2 (TEST → PROD) criteria include: 'No bias or unsafe output in validation scenarios.'

**Source:** Design ALM process for AI-powered business solutions — Design an ALM process for AI in Dynamics 365 Finance and Supply Chain

### Q372 — Multi-app orchestration support goal
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**This unit lists support for multi-app orchestration across which four Dynamics 365 applications as a key ALM goal?**

- **A.** Customer Service, Sales Insights, Customer Insights, and Field Service
- **B.** Finance, Supply Chain, HR, and Commerce
- **C.** Marketing, Sales, Service, and Commerce only
- **D.** Business Central, NAV, GP, and SL

**Answer:** A
**Confidence:** Certain

The unit lists a key ALM goal as: 'Support multi-app orchestration (Customer Service, Sales Insights, Customer Insights, Field Service).'

**Source:** Design ALM process for AI-powered business solutions — Design ALM processes for AI in Dynamics 365 apps

### Q373 — Semantic versioning example
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What example semantic version format does this unit give for marking AI asset releases in Dynamics 365 apps?**

- **A.** v1.3.2
- **B.** 2024.10.R1
- **C.** Build 45782
- **D.** Release Candidate 3

**Answer:** A
**Confidence:** Certain

Step 4 of the ALM workflow states: 'Mark releases with semantic versioning (e.g., v1.3.2).'

**Source:** Design ALM process for AI-powered business solutions — Design ALM processes for AI in Dynamics 365 apps

### Q374 — CAB review trigger
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Per this unit's audit and traceability guidance, what should be established for high-risk AI releases in Dynamics 365 apps?**

- **A.** CAB (Change Advisory Board) reviews
- **B.** A public beta testing program
- **C.** A quarterly all-hands meeting
- **D.** An open-source contribution policy

**Answer:** A
**Confidence:** Certain

The unit states: 'Establish CAB (Change Advisory Board) reviews for high-risk AI releases.'

**Source:** Design ALM process for AI-powered business solutions — Design ALM processes for AI in Dynamics 365 apps

### Q375 — What solutions transport between environments
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**When a solution is transported from one environment to another, what does it actually move?**

- **A.** Only the metadata, such as entities and their columns and configuration data — no business data
- **B.** Both business data and metadata are transported together
- **C.** Only business data records are transported
- **D.** Only user security roles are transported

**Answer:** A
**Confidence:** Certain

The unit states: 'Only the metadata, such as entities and their columns and configuration data, are transported. No business data is transported.'

**Source:** Manage solutions in Power Automate — Introduction

### Q376 — Definition of solution-aware flows
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What term describes flows that are created within a solution in Power Automate?**

- **A.** Solution-aware flows
- **B.** Business process flows
- **C.** UI flows
- **D.** Connection reference flows

**Answer:** A
**Confidence:** Certain

The unit states: 'Flows that you create within a solution in Power Automate are called ‘solution-aware flows.’'

**Source:** Manage solutions in Power Automate — Introduction

### Q377 — Three connector categories
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What are the three categories of connectors described in this unit?**

- **A.** Standard, Premium, and Preview
- **B.** Basic, Advanced, and Enterprise
- **C.** Free, Paid, and Trial
- **D.** Internal, External, and Hybrid

**Answer:** A
**Confidence:** Certain

The unit states: 'Three separate categories of connectors are: Standard, Premium, and Preview.'

**Source:** Manage solutions in Power Automate — Introduction

### Q378 — Effect of deleting an unmanaged solution
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What happens when you delete an unmanaged solution, per this unit?**

- **A.** It only removes the solution container but keeps all customizations intact in the default solution
- **B.** All customizations inside it are permanently deleted
- **C.** The environment is automatically rolled back to its prior state
- **D.** It converts automatically into a managed solution

**Answer:** A
**Confidence:** Certain

The unit states: 'When you delete an unmanaged solution, it only removes the solution container but keeps all your customizations intact, safely stored in the default solution.'

**Source:** Manage solutions in Power Automate — Introduction

### Q379 — Editing a managed solution
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**According to this unit, what must you do if you need to customize a managed solution?**

- **A.** Include it in an unmanaged solution, which creates a connection between your unmanaged customizations and the managed solution
- **B.** Export the managed solution directly and edit the XML file by hand
- **C.** Uninstall the managed solution first, then reinstall it as unmanaged
- **D.** Managed solutions can be edited directly with no additional steps

**Answer:** A
**Confidence:** Certain

The unit states: 'If you ever need to customize a managed solution, you'll have to include it in an unmanaged solution. This creates a connection between your unmanaged customizations and the managed solution.'

**Source:** Manage solutions in Power Automate — Introduction

### Q380 — Publisher selected when creating a solution
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Which publisher option does this unit use when walking through creating a new solution?**

- **A.** CDS Default Publisher
- **B.** Microsoft Default Publisher
- **C.** Custom Publisher Only
- **D.** No publisher is required

**Answer:** A
**Confidence:** Certain

Step 2 of the exercise states: 'Add the Display name, select CDS Default Publisher, and then enter a Description.'

**Source:** Manage solutions in Power Automate — Add and remove apps, flows, and entities in a solution

### Q381 — Adding existing components to a solution
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**When adding existing apps, tables, or flows to a solution, which option does this unit say to select?**

- **A.** + Add existing
- **B.** + New
- **C.** Import
- **D.** Export solution

**Answer:** A
**Confidence:** Certain

The unit states: 'To add existing apps, flows, and tables, select + Add existing.'

**Source:** Manage solutions in Power Automate — Add and remove apps, flows, and entities in a solution

### Q382 — Result of editing a table in a solution
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What does selecting Edit on a table within a solution take you to, per this unit?**

- **A.** The section where you can view the columns, relationships, business rules, and so on
- **B.** The Power Automate flow editor
- **C.** The solution export dialog
- **D.** The environment variable definition screen

**Answer:** A
**Confidence:** Certain

The unit states editing a table 'takes you to the section where you can view the columns, relationships, business rules, and so on.'

**Source:** Manage solutions in Power Automate — Edit a solution-aware app, flow, and table

### Q383 — Recommended export type for test/production
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which export type does this unit recommend when moving a solution to a test or production environment?**

- **A.** Managed (recommended)
- **B.** Unmanaged (recommended)
- **C.** Either type has no recommendation
- **D.** Patch only

**Answer:** A
**Confidence:** Certain

The unit states: 'If it's a test or a production environment, then select Managed (recommended).'

**Source:** Manage solutions in Power Automate — Exercise - Import and export solutions

### Q384 — Solution version number format
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What is the format of Power Platform solution version numbers, per this unit?**

- **A.** <major>.<minor>.<build>.<revision>
- **B.** <major>.<minor>.<patch>
- **C.** <year>.<month>.<day>
- **D.** <build>.<revision> only

**Answer:** A
**Confidence:** Certain

The unit states: 'Power Platform solution versions are in the format <major>.<minor>.<build>.<revision>.'

**Source:** Manage solutions in Power Automate — Exercise - Import and export solutions

### Q385 — Default version number for a new solution
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What is the default version number when you create a new solution version, per this unit?**

- **A.** 1.0.0.0
- **B.** 0.0.0.1
- **C.** 1.1.1.1
- **D.** 2.0.0.0

**Answer:** A
**Confidence:** Certain

The unit states: 'This defaults to 1.0.0.0 and auto increments based on the Solution update.'

**Source:** Manage solutions in Power Automate — Exercise - Import and export solutions

### Q386 — Why source control matters for ALM
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Why does this unit describe source control as 'the ultimate source of truth' for an ALM project?**

- **A.** Because even if the development environment crashes, it can be rebuilt using the information stored in source control
- **B.** Because it automatically fixes bugs found in production
- **C.** Because it eliminates the need for testing environments
- **D.** Because it replaces the need for solution version numbers

**Answer:** A
**Confidence:** Certain

The unit states: 'Source control is super important in Application Lifecycle Management (ALM) because it's the ultimate source of truth for your project. Even if your development environment crashes, no worries. You can rebuild it using the information stored in source control.'

**Source:** Manage solutions in Power Automate — Automate solution management

### Q387 — Purpose of unpacking a solution before source control
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Why does this unit recommend unpacking a solution into separate files before checking it into source control?**

- **A.** A single exported solution file only shows that something changed, not exactly what changed within each component
- **B.** Unpacked files load faster in Power Apps studio
- **C.** Source control systems cannot store .zip files at all
- **D.** Unpacking removes the need for a publisher prefix

**Answer:** A
**Confidence:** Certain

The unit explains that putting the exported solution zip directly into source control 'can only tell you that something changed, but it won't say exactly what changed within each part,' so unpacking into separate files is added to the process.

**Source:** Manage solutions in Power Automate — Automate solution management

### Q388 — DevOps tools with Power Platform automation support
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which two DevOps tools does this unit say have pre-built Power Platform task and action support from Microsoft?**

- **A.** Azure Pipelines and GitHub Actions
- **B.** Jenkins and CircleCI
- **C.** Terraform and Ansible
- **D.** Docker and Kubernetes

**Answer:** A
**Confidence:** Certain

The unit states: 'Azure Pipelines and GitHub Actions both have pre-built Power Platform task and action support from Microsoft.'

**Source:** Manage solutions in Power Automate — Automate solution management

### Q389 — Purpose of the Power Platform Checker build tool
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What does the Power Platform Checker build tool do, per this unit?**

- **A.** Runs static analysis on your solution and allows you to catch problems early by adding it to your automation
- **B.** Automatically deploys a solution to production without approval
- **C.** Deletes unused environment variables from a solution
- **D.** Generates test data for Power Apps Test Studio

**Answer:** A
**Confidence:** Certain

The unit describes 'Power Platform Checker - Runs static analysis on your solution and allows you to catch problems early by adding it to your automation.'

**Source:** Manage solutions in Power Automate — Automate solution management

### Q390 — Unpack Solution build tool function
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What does the 'Unpack Solution' build tool operation do?**

- **A.** Breaks a compressed solution file into individual files for each component to allow checking them into source control
- **B.** Packs individual component files into a solution.zip file
- **C.** Updates the version number for a solution automatically
- **D.** Creates a brand-new environment for deployment

**Answer:** A
**Confidence:** Certain

The unit describes: 'Unpack Solution - Breaks a compressed solution file into individual files for each component to allow checking them into source control.'

**Source:** Manage solutions in Power Automate — Automate solution management

### Q391 — Three common automation phases
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**What three phases of deployment automation does this unit commonly describe?**

- **A.** Initiated, build, and release automations
- **B.** Design, test, and ship automations
- **C.** Plan, execute, and archive automations
- **D.** Draft, review, and publish automations

**Answer:** A
**Confidence:** Certain

The unit states: 'Automation is tailored to each project's requirements, but commonly has initiated, build, and release automations.'

**Source:** Manage solutions in Power Automate — Automate solution management

### Q392 — Who writes and maintains solutions
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Who writes, packages, and maintains solutions in Microsoft Power Platform, per this unit?**

- **A.** A publisher
- **B.** The end user
- **C.** Microsoft Support
- **D.** The Dataverse system administrator only

**Answer:** A
**Confidence:** Certain

The unit states: 'Solutions are written, packaged, and maintained by a publisher.'

**Source:** Introduction to solutions for Microsoft Power Platform — Introduction

### Q393 — Base of the managed layers
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What sits at the base of the managed layers in Dataverse, per this unit?**

- **A.** The system layer, which contains entities and components required for the platform to function
- **B.** The most recently installed managed solution
- **C.** The default unmanaged solution
- **D.** A patch solution

**Answer:** A
**Confidence:** Certain

The unit states: 'The system layer is at the base of the managed layers level. The system layer contains the entities and components that are required for the platform to function.'

**Source:** Introduction to solutions for Microsoft Power Platform — Solution layering

### Q394 — Conflict resolution between managed solutions
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What happens at runtime when two managed solutions have conflicting definitions, per this unit?**

- **A.** The runtime behavior is ‘last one wins’ or merge logic is implemented
- **B.** The system automatically uninstalls the older solution
- **C.** An error prevents both solutions from loading
- **D.** The administrator is emailed to manually resolve the conflict

**Answer:** A
**Confidence:** Certain

The unit states: 'When two managed solutions have conflicting definitions, the runtime behavior is "last one wins" or a merge logic is implemented.'

**Source:** Introduction to solutions for Microsoft Power Platform — Solution layering

### Q395 — Uninstalling all managed solutions
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What happens if you uninstall all managed solutions in an environment, per this unit?**

- **A.** The default behavior defined within the system solution is applied
- **B.** The environment becomes permanently unusable
- **C.** All unmanaged solutions are also automatically removed
- **D.** The environment reverts to a factory default with no data

**Answer:** A
**Confidence:** Certain

The unit states: 'If you uninstall all managed solutions, the default behavior that's defined within the system solution will be applied.'

**Source:** Introduction to solutions for Microsoft Power Platform — Solution layering

### Q396 — Unmanaged layer sharing behavior
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**How do unmanaged solutions share layers in Dataverse, per this unit?**

- **A.** All imported unmanaged solutions and impromptu customizations share a single, unmanaged layer
- **B.** Each unmanaged solution gets its own isolated layer with no sharing
- **C.** Unmanaged solutions are merged into the system layer immediately
- **D.** Unmanaged layers only exist temporarily during import

**Answer:** A
**Confidence:** Certain

The unit states: 'All imported unmanaged solutions and impromptu customizations exist at the unmanaged layer. All unmanaged solutions share a single, unmanaged layer.'

**Source:** Introduction to solutions for Microsoft Power Platform — Solution layering

### Q397 — Risk of the Add All Assets option
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What problem does selecting the 'Add All Assets' option often lead to when segmenting a solution export?**

- **A.** Dependency issues that defeat the purpose of segmentation
- **B.** Automatic conversion to a managed solution
- **C.** Loss of the publisher prefix on all components
- **D.** Permanent deletion of the source environment's data

**Answer:** A
**Confidence:** Certain

The unit states: 'Choosing the Add All Assets option often leads to dependency issues and defeats the purpose of segmentation.'

**Source:** Introduction to solutions for Microsoft Power Platform — Solution architecture tools and techniques

### Q398 — What a patch solution contains
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What does a patch solution contain, per this unit?**

- **A.** Only the changes for a parent-managed solution, such as adding or editing components and assets
- **B.** A complete copy of the entire parent solution plus new components
- **C.** Only deleted components removed from the parent solution
- **D.** Environment variables exclusively, with no other components

**Answer:** A
**Confidence:** Certain

The unit states: 'A patch solution contains only the changes for a parent-managed solution, such as adding or editing components and assets.'

**Source:** Introduction to solutions for Microsoft Power Platform — Solution architecture tools and techniques

### Q399 — File containing the schema definition
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What file contains the schema definition when a solution is exported from an environment as a zip file?**

- **A.** customizations.xml
- **B.** solution.json
- **C.** manifest.yaml
- **D.** schema.config

**Answer:** A
**Confidence:** Certain

The unit states: 'In the zipped format, the schema definition is contained in one massive file labeled customizations.xml.'

**Source:** Introduction to solutions for Microsoft Power Platform — Use version control for solutions

### Q400 — Operating systems supported by Power Platform CLI
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which operating systems is the Microsoft Power Platform CLI compatible with, per this unit?**

- **A.** Linux, Mac, and Windows
- **B.** Windows only
- **C.** Linux and Windows only, not Mac
- **D.** Mac only

**Answer:** A
**Confidence:** Certain

The unit states: 'It's compatible with Linux, Mac, and Windows, and you can install it through automation, making it ideal for DevOps processes.'

**Source:** Introduction to solutions for Microsoft Power Platform — Use version control for solutions

### Q401 — What solution unpack does
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What does the Solution unpack command do, per this unit?**

- **A.** Reversibly decomposes a solution .zip file by dividing it into a logical folder structure
- **B.** Permanently deletes a solution's compressed archive
- **C.** Encrypts a solution's XML schema for secure transport
- **D.** Converts a managed solution into an unmanaged one automatically

**Answer:** A
**Confidence:** Certain

The unit states: 'Solution unpack reversibly decomposes a solution .zip file by dividing it into a logical folder structure.'

**Source:** Introduction to solutions for Microsoft Power Platform — Use version control for solutions

### Q402 — Component defining an authored conversation path
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**In a standard harness agent, which component defines an authored conversation path between a customer and the agent?**

- **A.** Entities
- **B.** Topics
- **C.** Variables
- **D.** Channels

**Answer:** B
**Confidence:** Certain

Topics are the authored conversation paths in a standard harness Copilot Studio agent, guiding the dialog between the agent and the customer.

**Source:** From Get started with Microsoft Copilot Studio Module Assessment

### Q403 — Harness for reasoning-heavy, multistep processes
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which harness is designed for reasoning-heavy, multistep business processes that might require several tools and recovery from failed steps?**

- **A.** GitHub Copilot harness
- **B.** Standard harness
- **C.** Copilot chat harness

**Answer:** A
**Confidence:** Certain

The GitHub Copilot harness is built for reasoning-heavy, multistep processes, supporting tool orchestration and recovery from failed steps.

**Source:** From Get started with Microsoft Copilot Studio Module Assessment

### Q404 — New Copilot Studio experience vs. standard harness
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which statement accurately compares the new Copilot Studio experience with the standard harness experience?**

- **A.** The new experience uses the GitHub Copilot harness and a unified Build tab, while the standard harness experience uses topics and separate configuration tabs.
- **B.** The new experience and standard harness experience are two visual themes for the same agent, and you can switch an agent between them at any time.
- **C.** The new experience is only for Copilot chat harness agents published to Microsoft 365 Copilot Chat.

**Answer:** A
**Confidence:** Certain

The comparison table shows the new experience is built on the GitHub Copilot harness with a unified Build tab, whereas the standard harness experience is organized around topics and separate tabs.

**Source:** From Get started with Microsoft Copilot Studio Module Assessment

### Q405 — Prerequisite before deploying an agent to channels
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**What must be done at least once before an agent can be deployed to different channels, such as websites, Microsoft Teams, or Facebook?**

- **A.** Publish the agent
- **B.** Test the agent
- **C.** Define synonyms
- **D.** Create entities

**Answer:** A
**Confidence:** Certain

An agent must be published at least once before it can be made available on channels like websites, Microsoft Teams, or Facebook.

**Source:** From Get started with Microsoft Copilot Studio Module Assessment

### Q406 — Node to launch a workflow for forecast details
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**You're creating a topic that provides the local weather forecast to a user. Which node would you use to launch a Copilot Studio workflow to get forecast details from a weather service?**

- **A.** Ask a question
- **B.** Add a tool
- **C.** End the conversation
- **D.** Go to another topic

**Answer:** B
**Confidence:** Certain

The Add a tool node is used inside a topic to call a workflow or connector action, such as retrieving forecast details from a weather service.

**Source:** From Design agent conversations using topics Module Assessment

### Q407 — Topic to configure the can't-determine-topic message
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**You enabled generative orchestration for your agent. You need to change the message sent to the user when the agent can't determine which topic to present. Which topic should you configure?**

- **A.** Conversational boosting
- **B.** Conversation Start
- **C.** Escalate
- **D.** Fallback

**Answer:** D
**Confidence:** Certain

The Fallback topic controls the message shown when the agent cannot determine which topic applies to the user's input.

**Source:** From Design agent conversations using topics Module Assessment

### Q408 — Feature to store custom product types and shared variables
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**You want to create a container to store custom product types that can be used as responses to customer questions, and variables that can be used throughout your agent. What Copilot Studio feature should you use?**

- **A.** Channels
- **B.** Entities
- **C.** Environments
- **D.** Topics

**Answer:** B
**Confidence:** Certain

Entities let makers define custom types (such as product types) that can be reused as values and variables throughout the agent's topics.

**Source:** From Design agent conversations using topics Module Assessment

### Q409 — Input parameter data type for workflow tools
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which data type can be used as an input parameter for workflow tools in Copilot Studio?**

- **A.** Boolean
- **B.** Date
- **C.** Email

**Answer:** A
**Confidence:** Certain

Boolean is one of the supported input parameter data types for workflow tools configured in Copilot Studio.

**Source:** From Add structured automation to agents in Microsoft Copilot Studio Module Assessment

### Q410 — Filling an input value from a variable
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**You want to use a variable to fill an input value for a workflow tool. What should you select?**

- **A.** Dynamically fill with AI
- **B.** Customize
- **C.** Custom value

**Answer:** C
**Confidence:** Certain

Selecting Custom value lets the maker map a specific variable to fill the input value for a workflow tool.

**Source:** From Add structured automation to agents in Microsoft Copilot Studio Module Assessment

### Q411 — Configuring when generative AI calls a workflow tool
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**You need to influence when your workflow tool is called by generative AI. What should you configure?**

- **A.** Agent instructions
- **B.** Knowledge
- **C.** Fill using

**Answer:** A
**Confidence:** Certain

Agent instructions guide the generative AI orchestrator on when and how to invoke a specific workflow tool.

**Source:** From Add structured automation to agents in Microsoft Copilot Studio Module Assessment

### Q412 — Image not appearing in a message node
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**A maker adds an image to a message node in Microsoft Copilot Studio, but the image doesn't appear when the agent is tested. What is the most likely cause?**

- **A.** The image file format isn't supported by Copilot Studio.
- **B.** The image URL points to a file hosted on an internal server that requires authentication.
- **C.** Images can only be added through the Adaptive Card designer, not directly in the message node.

**Answer:** B
**Confidence:** Certain

Images fail to render when the URL points to an internally hosted file that requires authentication, since the agent cannot access authenticated internal resources.

**Source:** From Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio Module Assessment

### Q413 — Generic input element IDs causing downstream issues
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**A maker configures an Ask with Adaptive Card node and gives each input element a generic ID such as 'field1', 'field2', and 'field3'. What problem does this create downstream in the topic?**

- **A.** Copilot Studio won't generate output variables for input elements with generic ID values.
- **B.** The output variables are created with names like 'Topic.field1', which are difficult to identify and reference correctly in conditions and message nodes.
- **C.** The card fails to render because input element IDs must follow a specific naming convention.

**Answer:** B
**Confidence:** Certain

Generic IDs produce output variable names like Topic.field1, which are hard to identify and reference correctly later in conditions and message nodes.

**Source:** From Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio Module Assessment

### Q414 — Adaptive Card failing to display in Teams
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**A maker designs an Adaptive Card that renders correctly in the Copilot Studio test pane but fails to display in Microsoft Teams when the agent is published. What is the most likely explanation?**

- **A.** The card was designed in the built-in Adaptive Card designer, which produces a different JSON format than Teams expects.
- **B.** The card uses element types or properties that the Teams channel doesn't support, so those elements fail silently or the card falls back to plain text.
- **C.** Teams requires Adaptive Cards to be published through a separate Teams app before they can render in a deployed agent.

**Answer:** B
**Confidence:** Certain

Teams (v1.6) doesn't support all Adaptive Card elements; unsupported elements fail silently or the card falls back to plain text, even though it renders fine in the test pane.

**Source:** From Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio Module Assessment

### Q415 — Layout for browsing multiple product result cards
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**A maker wants to display multiple product results as Adaptive Cards in a single message node. Each result should appear side by side so users can browse through them. Which layout option should the maker choose?**

- **A.** List layout, because it arranges multiple cards vertically for easy comparison.
- **B.** Carousel layout, because it arranges multiple cards horizontally and lets users scroll through them one at a time.
- **C.** The Adaptive Card designer doesn't support multiple cards in a single message node.

**Answer:** B
**Confidence:** Certain

The Carousel layout arranges multiple cards horizontally, letting users scroll through side-by-side results one at a time.

**Source:** From Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio Module Assessment

### Q416 — Collecting three related fields in one interaction
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**A maker needs to collect three related fields from a user — leave type, start date, and end date — in a single topic interaction. Which node should the maker use?**

- **A.** Three separate Question nodes, one for each field.
- **B.** An Ask with Adaptive Card node with three input elements and a Submit button.
- **C.** A message node with an embedded Adaptive Card, because informational cards can also collect input.

**Answer:** B
**Confidence:** Certain

An Ask with Adaptive Card node lets a maker collect multiple related fields (like leave type, start date, and end date) in one interaction using several input elements plus a Submit button.

**Source:** From Deliver rich agent responses using Adaptive Cards in Microsoft Copilot Studio Module Assessment

### Q417 — Adding a connector tool at a defined point in the flow
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**A maker wants their Copilot Studio agent to retrieve live account data from a system that already has a Power Platform connector. The data lookup should occur at a specific, defined point in the conversation flow. Which approach is correct?**

- **A.** Add the connector as a tool at the agent level so the AI orchestrator invokes it automatically when relevant.
- **B.** Add the connector tool inside the topic using the Add a tool node, selecting the connector action at the exact step where the data is needed.
- **C.** Use the Send HTTP Request node to call the connector's underlying API endpoint directly.

**Answer:** B
**Confidence:** Certain

To run a connector action at a specific, defined point in the conversation, the maker adds the connector tool inside the topic with the Add a tool node at that exact step.

**Source:** From Take action from agent conversations using topics and tools in Microsoft Copilot Studio Module Assessment

### Q418 — Structuring a long-running agent flow called from a topic
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**A maker builds an agent flow that validates an order, updates a record in Dataverse, and sends an email confirmation. Testing shows the full process takes about three minutes. How should the flow be structured so it can be called from a topic without errors?**

- **A.** Chain all actions before the Respond to the agent action so the topic waits for the complete result before continuing.
- **B.** Place the long-running actions after the Respond to the agent action so the flow returns a response immediately and continues the remaining steps in the background.
- **C.** Break the flow into three separate agent flows and call each one sequentially from the topic.

**Answer:** B
**Confidence:** Certain

Long-running actions should be placed after the Respond to the agent action so the topic receives an immediate response while the flow continues processing in the background, avoiding timeout errors.

**Source:** From Take action from agent conversations using topics and tools in Microsoft Copilot Studio Module Assessment

### Q419 — REST API POST request failing without an error code
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**A maker configures the Send HTTP Request node to call a REST API using a POST request, but the API consistently returns a response indicating the operation failed, with no error code. The URL and authentication are confirmed correct. What is the most likely cause?**

- **A.** The HTTP method should be PATCH rather than POST for this type of operation.
- **B.** The Content-Type: application/json header is missing from the request configuration.
- **C.** The response schema was generated from a sample JSON that doesn't match the actual API response format.

**Answer:** B
**Confidence:** Certain

A missing Content-Type: application/json header commonly causes a REST API to reject or fail a POST request even when the URL and authentication are correct.

**Source:** From Take action from agent conversations using topics and tools in Microsoft Copilot Studio Module Assessment

### Q420 — Handling an API key in an HTTP request node
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**A maker needs to configure an HTTP request node that calls a REST API requiring an API key in the request header. Which approach correctly handles the API key?**

- **A.** Enter the API key as a literal string directly in the header value field on the topic canvas.
- **B.** Store the API key in a Power Platform environment variable and reference it in the header value field.
- **C.** Use a Question node to collect the API key from the end user at the start of the conversation.

**Answer:** B
**Confidence:** Certain

Best practice is to store the API key in a Power Platform environment variable and reference it in the header, rather than hardcoding secrets in the topic.

**Source:** From Take action from agent conversations using topics and tools in Microsoft Copilot Studio Module Assessment

### Q421 — Reviewing a Copilot-proposed flow before saving
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**A maker describes an IT support ticket process in plain language and Copilot proposes a flow structure. What should the maker do before saving the flow?**

- **A.** Publish it immediately, because Copilot-generated flows are validated automatically.
- **B.** Review the proposed triggers and steps, adjust any that don't match the intended process, and then save the flow.
- **C.** Delete the proposal and switch to the visual designer to begin from scratch.

**Answer:** B
**Confidence:** Certain

Makers should review and adjust the Copilot-proposed triggers and steps to ensure they match the intended process before saving the flow.

**Source:** From Automate workflows using agent flows in Copilot Studio Module Assessment

### Q422 — Condition action for priority-based branching
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**An agent flow needs to send an escalation notification only when a ticket's priority field equals 'Critical'. Which control structure implements this branching logic?**

- **A.** A loop action that runs the escalation notification for every ticket in the queue.
- **B.** A condition action that evaluates the priority field and routes the flow to the escalation step only when the value equals 'Critical'.
- **C.** A dynamic content expression that formats the priority field text before including it in the notification message.

**Answer:** B
**Confidence:** Certain

A condition action evaluates a field's value and branches the flow (True/False) to route execution — here, to the escalation step only when priority equals 'Critical'.

**Source:** From Automate workflows using agent flows in Copilot Studio Module Assessment

### Q423 — Monitoring feature showing individual run results
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**After publishing a flow, a maker wants to verify whether a specific run that happened yesterday completed without errors. Which monitoring feature shows individual run execution results?**

- **A.** The Flow checker, which scans the flow definition for configuration issues.
- **B.** The Analytics tab, which displays aggregate metrics such as average run duration and success rate trends.
- **C.** The Activity tab, which lists individual run instances with timestamps, status indicators, and step-level execution details.

**Answer:** C
**Confidence:** Certain

The Activity tab lists individual run instances, including timestamps, status, and step-level execution details, which is what's needed to verify a specific past run.

**Source:** From Automate workflows using agent flows in Copilot Studio Module Assessment

### Q424 — Preventing an ambiguous 'Output' token readability problem
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**A maker builds a five-action flow but leaves all steps with their default names. When configuring the condition later, the dynamic content list shows multiple tokens labeled 'Output'. What approach would have prevented this readability problem?**

- **A.** Rename each action with a descriptive label such as 'Get ticket details' or 'Notify requester' immediately after adding it to the flow.
- **B.** Use expressions instead of dynamic content tokens, because expressions always show the action name and property path.
- **C.** Limit the flow to three actions maximum so that the dynamic content list remains short enough to scan manually.

**Answer:** A
**Confidence:** Certain

Renaming actions with descriptive labels immediately after adding them keeps the dynamic content list clear and avoids ambiguous, generically-named 'Output' tokens.

**Source:** From Automate workflows using agent flows in Copilot Studio Module Assessment

### Q425 — Primary role of an architect in AI transformation
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which of the following best describes the primary role of an architect in AI transformation for businesses?**

- **A.** Developing machine learning models
- **B.** Bridging business strategy and technical implementation
- **C.** Managing IT support tickets
- **D.** Designing user interfaces

**Answer:** B
**Confidence:** Certain

The architect's primary role is to bridge business strategy and technical implementation, translating business goals into actionable AI solution designs.

**Source:** From Introduction to agentic AI business solutions Module Assessment

### Q426 — Key architect responsibility for aligning AI with business priorities
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is a key responsibility of an AI architect to ensure AI solutions are effective and aligned with business priorities?**

- **A.** Defining the AI adoption vision and roadmap
- **B.** Writing code for AI models
- **C.** Building physical servers
- **D.** Conducting end-user training only

**Answer:** A
**Confidence:** Certain

Defining the AI adoption vision and roadmap is a key architect responsibility that ensures solutions stay aligned with business priorities.

**Source:** From Introduction to agentic AI business solutions Module Assessment

### Q427 — Best practice for scaling AI across the enterprise
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which best practice should architects follow to scale AI across the enterprise?**

- **A.** Focus solely on technology upgrades
- **B.** Adopt modular and flexible design principles
- **C.** Avoid collaboration with business leaders
- **D.** Implement AI without considering responsible AI principles

**Answer:** B
**Confidence:** Certain

Adopting modular and flexible design principles is the recommended best practice for scaling AI solutions across an enterprise.

**Source:** From Introduction to agentic AI business solutions Module Assessment

### Q428 — Primary way AI agents enhance business productivity
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Easy*

**Which of the following answers is a primary way AI agents enhance productivity in business workflows?**

- **A.** Replacing all manual processes with fully autonomous systems
- **B.** Drafting content and summarizing information using generative AI
- **C.** Eliminating the need for employee training
- **D.** Removing the requirement for business context in automation

**Answer:** B
**Confidence:** Certain

Generative AI enhances productivity primarily by drafting content and summarizing information, among other natural-language-driven tasks.

**Source:** From Analyze requirements for AI-powered business solutions Module Assessment

### Q429 — Grounding data dimension for matching intended scenario
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which grounding data dimension ensures AI agents retrieve information that matches the intended business scenario?**

- **A.** Cleanliness
- **B.** Availability
- **C.** Relevance
- **D.** Timeliness

**Answer:** C
**Confidence:** Certain

Relevance is the grounding data dimension that ensures retrieved data aligns with the intended task or business scenario.

**Source:** From Analyze requirements for AI-powered business solutions Module Assessment

### Q430 — Role of semantic indexing in Copilot solutions
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is the role of semantic indexing in Microsoft Copilot solutions?**

- **A.** Customizing user interfaces
- **B.** Mapping enterprise content for precise data retrieval
- **C.** Managing email distribution lists
- **D.** Automating financial transactions

**Answer:** B
**Confidence:** Certain

Semantic indexing maps enterprise content across Microsoft Graph into rich lexical and semantic representations, enabling more contextually precise retrieval.

**Source:** From Analyze requirements for AI-powered business solutions Module Assessment

### Q431 — Why centralize and structure data before deploying AI agents
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Why is it important to centralize and structure business solution data before deploying AI agents?**

- **A.** To reduce the number of employees needed
- **B.** To ensure AI systems can access high-quality, reliable data
- **C.** To allow data to remain in scattered silos
- **D.** To eliminate the need for data governance

**Answer:** B
**Confidence:** Certain

Centralizing and structuring data (e.g., via Azure, Dataverse, or Fabric) avoids scattered silos and ensures AI systems can access high-quality, reliable data for grounding.

**Source:** From Analyze requirements for AI-powered business solutions Module Assessment

### Q432 — Next step after CAF AI Ready phase to avoid agent sprawl
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**After completing the CAF AI Ready phase (establishing landing zones, policies, and data access), what is the next best step to avoid agent sprawl and security drift before proceeding to build agents?**

- **A.** Start connecting every line-of-business system to a new agent
- **B.** Define and enforce agent governance (roles, policies, development process) across teams
- **C.** Purchase more GPU capacity
- **D.** Skip to production and monitor later

**Answer:** B
**Confidence:** Certain

After the AI Ready phase establishes landing zones and data access, the next step (Govern AI / secure AI, mapped to Govern & secure agents) is to enforce agent governance policies for roles, capability access, and development process — this is what prevents agent sprawl and security drift.

**Source:** From Design overall AI strategy for business solutions Module Assessment

### Q433 — First factor when choosing SaaS agent vs. custom agent
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which factor should a solution architect consider first when deciding whether to use a SaaS agent or build a custom agent?**

- **A.** The availability of GPU clusters
- **B.** Whether a SaaS agent meets functional requirements
- **C.** The number of developers on the project
- **D.** The preferred programming language

**Answer:** B
**Confidence:** Certain

The 'SaaS agent first' principle says architects should begin by asking whether a SaaS agent meets the functional requirements; only if not should they consider low-code or pro-code custom agents.

**Source:** From Design overall AI strategy for business solutions Module Assessment

### Q434 — Architecture for confidential finance and public data with separate teams
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Hard*

**You're designing a solution that must handle confidential finance data and public product data, with different teams owning each and separate release cycles. Which architecture is most appropriate to start with?**

- **A.** Single agent with broad permissions
- **B.** Multi-agent with isolated permissions and explicit interfaces
- **C.** Single agent using persona switching
- **D.** Single agent with larger context windows

**Answer:** B
**Confidence:** Certain

Multi-agent architecture is recommended when crossing security/compliance boundaries and when multiple teams own distinct data with separate release cycles; least-privilege scoping per agent reduces blast radius.

**Source:** From Design overall AI strategy for business solutions Module Assessment

### Q435 — Financial ROI indicator for AI-powered solutions
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which of the following is a financial ROI indicator in AI-powered business solutions?**

- **A.** Customer satisfaction score
- **B.** Minutes saved per workflow
- **C.** Money saved per successful agent run
- **D.** Employee sentiment rating

**Answer:** C
**Confidence:** Certain

Money saved per successful agent run is a direct financial ROI indicator, tracked via the agent's Savings capability (savings per run), as opposed to non-financial indicators like satisfaction scores or time-only metrics.

**Source:** From Evaluate costs and benefits of AI solutions Module Assessment

### Q436 — Elements required for a complete ROI analysis
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which element must be included to produce a complete ROI analysis for an AI solution?**

- **A.** Only financial savings
- **B.** Only labor-hours saved
- **C.** Both measurable benefits and TCO
- **D.** Only the number of automated tasks

**Answer:** C
**Confidence:** Certain

A complete ROI model must balance measurable benefits against total cost of ownership (TCO) — not just one side of the equation.

**Source:** From Evaluate costs and benefits of AI solutions Module Assessment

### Q437 — Scenario indicating a Build approach
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which scenario most strongly indicates a Build approach for AI components?**

- **A.** Standard HR onboarding workflow
- **B.** Document summarization for internal policies
- **C.** Highly specialized decision engine that differentiates the organization competitively
- **D.** Simple customer email triage

**Answer:** C
**Confidence:** Certain

Build is the right approach when the AI solution defines competitive advantage — a highly specialized decision engine that differentiates the organization is a clear example, unlike standardized or commodity workflows.

**Source:** From Evaluate costs and benefits of AI solutions Module Assessment

### Q438 — TCO category for data cleansing, labeling, and drift monitoring
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which Total Cost of Ownership (TCO) category includes costs for data cleansing, labeling, and monitoring data drift in AI-powered business solutions?**

- **A.** Infrastructure Costs
- **B.** Development and Integration Costs
- **C.** Data Quality and Preparation Costs
- **D.** Ongoing Operational Costs

**Answer:** C
**Confidence:** Certain

Data Quality and Preparation Costs cover data cleansing, labeling, validation, grounding/indexing, and ongoing monitoring for drift.

**Source:** From Evaluate costs and benefits of AI solutions Module Assessment

### Q439 — Defense-in-depth approach for enterprise AI agents
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**Which option best reflects a defense-in-depth approach when designing enterprise AI agents?**

- **A.** Grant broad access so the agent can retrieve any data it may need in future tasks
- **B.** Use layered identity, access, data governance, monitoring, and threat protection controls
- **C.** Allow the agent to self-correct risky behaviors without human oversight
- **D.** Disable logging to reduce operational costs

**Answer:** B
**Confidence:** Certain

Defense-in-depth means translating business and compliance requirements into layered identity, access, data protection, observability, and threat protection controls across the agent's lifecycle.

**Source:** From Design responsible AI security, governance, risk management, and compliance Module Assessment

### Q440 — Reducing the risk of AI agents exposing sensitive information
*Bank: AB-620-LearnDocs · Domain: Plan and configure agent solutions · Difficulty: Medium*

**What is the most effective way to reduce the risk of AI agents exposing sensitive information?**

- **A.** Allow unrestricted connector access to improve retrieval accuracy
- **B.** Rely solely on model instructions to avoid returning sensitive content
- **C.** Apply DLP policies, sensitivity labels, and least-privilege boundaries across all data sources
- **D.** Store sensitive data in agent prompts so it can reason more accurately

**Answer:** C
**Confidence:** Certain

Applying DLP policies, sensitivity labels, and least-privilege access boundaries across data sources is the recommended control set to prevent AI agents from exposing sensitive information.

**Source:** From Design responsible AI security, governance, risk management, and compliance Module Assessment

### Q441 — Maximum file size for agent knowledge uploads
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**When uploading a file as a knowledge source for an agent in Copilot Studio, what is the maximum file size supported?**

- **A.** 100 MB
- **B.** 256 MB
- **C.** 512 MB
- **D.** 1 GB

**Answer:** C
**Confidence:** Certain

The module's body content states that uploaded files used as knowledge sources can be up to 512 MB in size.

**Source:** From Build intelligent agents in Microsoft Copilot Studio Module Assessment

### Q442 — Feature that grounds agent responses in uploaded content
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which Copilot Studio feature allows an agent to generate answers grounded in content from uploaded files, websites, or other knowledge sources?**

- **A.** Topics
- **B.** Generative answers
- **C.** Entities
- **D.** Adaptive cards

**Answer:** B
**Confidence:** Certain

The body content describes generative answers as the feature that lets the agent search configured knowledge sources and generate a grounded response to the user's question.

**Source:** From Build intelligent agents in Microsoft Copilot Studio Module Assessment

### Q443 — Node-level vs agent-level knowledge source priority
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**An agent has a SharePoint knowledge source configured at the agent level, and a generative answers node in a topic has its own, different SharePoint knowledge source configured. Which source does the agent use when that node runs?**

- **A.** The agent-level SharePoint source always takes priority
- **B.** The node-level SharePoint source overrides the agent-level source for that node
- **C.** Both sources are merged and searched together
- **D.** The agent throws a configuration error

**Answer:** B
**Confidence:** Certain

The body content's source priority guidance explains that a knowledge source configured at the node level takes precedence over the agent-level configuration for that specific node.

**Source:** From Generate AI-powered agent responses using generative answers Module Assessment

### Q444 — Preparing JSON data as a knowledge source
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker wants to use data currently stored as raw JSON as a knowledge source for generative answers. What must be done to this data first?**

- **A.** Upload the JSON file directly with no changes
- **B.** Transform the JSON into a Table with Content, ContentLocation, and Title columns
- **C.** Convert the JSON into a PDF
- **D.** Import it directly as a SharePoint list

**Answer:** B
**Confidence:** Certain

The module explains that raw JSON must be transformed into a structured Table containing (at minimum) Content, ContentLocation, and Title columns before it can be used as a generative answers knowledge source.

**Source:** From Generate AI-powered agent responses using generative answers Module Assessment

### Q445 — Effective instruction writing for generative answers
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Two candidate instructions are being considered for a generative answers node. One says 'Be helpful and professional.' The other says 'Always include the source document title and the last-updated date in your response.' Why is the second instruction more effective?**

- **A.** It is shorter than the first instruction
- **B.** It specifies an observable, measurable behavior rather than a vague quality
- **C.** It uses more polite language
- **D.** It avoids mentioning knowledge sources

**Answer:** B
**Confidence:** Certain

The body content contrasts vague instructions with specific, measurable ones, explaining that instructions describing concrete, observable behaviors are more effective than broad qualities like 'be helpful.'

**Source:** From Generate AI-powered agent responses using generative answers Module Assessment

### Q446 — Structured field extraction with custom prompts
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A maker needs generative answers to extract specific structured fields (like an order number and a status) from unstructured knowledge content, rather than returning free-form prose. What configuration achieves this?**

- **A.** Increasing the content moderation level
- **B.** A custom prompt with an input variable and instructions to return structured JSON output
- **C.** Switching the node from generative answers to a simple text response
- **D.** Adding more knowledge sources to the node

**Answer:** B
**Confidence:** Certain

The module describes configuring a custom prompt that takes an input variable and instructs the model to return output as structured JSON, enabling extraction of specific fields rather than open-ended prose.

**Source:** From Generate AI-powered agent responses using generative answers Module Assessment

### Q447 — Connecting a custom Foundry model to generative answers
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker wants to connect a custom-deployed Azure AI Foundry model to a generative answers node. Which two values must be provided exactly as they appear in Microsoft Foundry?**

- **A.** Resource group name and subscription ID
- **B.** Model deployment name and base model name
- **C.** Tenant ID and client secret
- **D.** Storage account name and container name

**Answer:** B
**Confidence:** Certain

The body content specifies that the maker must enter the model deployment name and the base model name exactly as they appear in the Microsoft Foundry portal to connect the custom model.

**Source:** From Generate AI-powered agent responses using generative answers Module Assessment

### Q448 — Grounding responses in indexed enterprise content
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which integration category is used specifically to ground an agent's responses in indexed enterprise content such as documents and articles?**

- **A.** Tools
- **B.** Knowledge sources
- **C.** Topics
- **D.** Variables

**Answer:** B
**Confidence:** Certain

Knowledge sources are the integration category described as grounding agent responses in indexed enterprise content.

**Source:** From Design integration strategies for agents Module Assessment

### Q449 — Real-time knowledge via Power Platform connector
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker needs an agent to reflect live inventory levels that change constantly, without replicating the data into a separate index. Which approach best fits this need?**

- **A.** Upload a static CSV export as a knowledge source
- **B.** Use a Power Platform connector to query the live system directly
- **C.** Build an Azure AI Search index refreshed nightly
- **D.** Ask users to paste inventory numbers into the conversation

**Answer:** B
**Confidence:** Certain

The module explains that a Power Platform connector used as a real-time knowledge source queries the live system directly, with no replication of data into a separate index.

**Source:** From Design integration strategies for agents Module Assessment

### Q450 — Deterministic multi-step processes
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker needs to implement a strict, deterministic, multi-step sequence of operations as part of an agent's integration strategy. Which capability is designed for this?**

- **A.** Generative answers
- **B.** Agent flow
- **C.** Entities
- **D.** Adaptive cards

**Answer:** B
**Confidence:** Certain

Agent flow is described as the deterministic, multi-step sequence mechanism for implementing strict process ordering within an agent's integration strategy.

**Source:** From Design integration strategies for agents Module Assessment

### Q451 — Maker-provided credentials and channel requirements
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A maker configures a tool to authenticate using maker-provided credentials, then attempts to publish the agent to an anonymous, unauthenticated channel. What happens?**

- **A.** Publishing succeeds with no restrictions
- **B.** Publishing fails or is blocked because maker-provided credentials require an authenticated channel
- **C.** The credentials are automatically converted to end-user credentials
- **D.** The tool is silently disabled but the agent still publishes

**Answer:** B
**Confidence:** Certain

The module explains that maker-provided credentials require an authenticated channel, so publishing to an anonymous channel is blocked or fails.

**Source:** From Design integration strategies for agents Module Assessment

### Q452 — Direct OpenAPI integration without connector overhead
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker wants to integrate directly with an OpenAPI-described endpoint without the overhead of packaging it as a full connector. Which tool type is most appropriate?**

- **A.** A pre-built connector
- **B.** A REST API tool
- **C.** A child agent
- **D.** A knowledge source

**Answer:** B
**Confidence:** Certain

The module describes the REST API tool as enabling direct OpenAPI integration without the packaging overhead of building a full connector.

**Source:** From Design integration strategies for agents Module Assessment

### Q453 — When to use computer use vs an API integration
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A target system exposes no API and can only be operated through its browser-based UI. Which Copilot Studio capability is designed for this scenario?**

- **A.** A REST API tool
- **B.** Computer use
- **C.** A knowledge source
- **D.** A connected agent

**Answer:** B
**Confidence:** Certain

Computer use is described as the capability for interacting with systems that have no API and can only be operated through their browser-based UI.

**Source:** From Automate desktop and web tasks with computer use Module Assessment

### Q454 — How computer use operates the interface
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**How does computer use actually carry out a natural-language instruction such as 'submit the expense report'?**

- **A.** It calls a hidden REST API behind the UI
- **B.** It reads the screen, reasons about what to do, and operates a virtual mouse and keyboard
- **C.** It requires a pre-recorded macro for every action
- **D.** It only works with keyboard shortcuts, never mouse clicks

**Answer:** B
**Confidence:** Certain

The module explains that computer use reads the screen, reasons about the appropriate action, and then uses a virtual mouse and keyboard to carry out natural language instructions.

**Source:** From Automate desktop and web tasks with computer use Module Assessment

### Q455 — Restricting where computer use can navigate
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker wants to restrict computer use so it can only interact with a specific, approved list of URLs and applications. Which governance mechanism controls this?**

- **A.** Content moderation level
- **B.** Access control (allow list)
- **C.** Topic priority
- **D.** Generative answers configuration

**Answer:** B
**Confidence:** Certain

Access control, configured as an allow list of URLs/apps, is the governance mechanism described for restricting where computer use is permitted to navigate.

**Source:** From Automate desktop and web tasks with computer use Module Assessment

### Q456 — Frequent human supervision requests as a signal
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A computer use task frequently pauses to request human supervision during execution. What does this most likely indicate?**

- **A.** The target application has crashed permanently
- **B.** The instructions are ambiguous, or the UI is presenting unexpected states
- **C.** Computer use is functioning at maximum efficiency
- **D.** The log verbosity setting is too low

**Answer:** B
**Confidence:** Certain

The module states that frequent requests for human supervision are a signal of ambiguous instructions or unexpected UI states that the agent cannot confidently resolve alone.

**Source:** From Automate desktop and web tasks with computer use Module Assessment

### Q457 — Capturing screenshots for troubleshooting
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A maker needs to troubleshoot a computer use task by reviewing screenshots of what the agent saw, and needs those logs retained longer than the 7-day default. What should the maker configure?**

- **A.** Enable content moderation at the highest level
- **B.** Set log verbosity to 'All data' (to capture screenshots) and configure a longer retention period
- **C.** Disable computer use entirely and use a REST API tool instead
- **D.** Reduce the number of enabled tools on the agent

**Answer:** B
**Confidence:** Certain

The module explains that setting log verbosity to 'All data' captures screenshots, and that the retention period must be explicitly configured beyond the 7-day default to keep those logs longer.

**Source:** From Automate desktop and web tasks with computer use Module Assessment

### Q458 — Adding a connector tool to an agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Where in Copilot Studio does a maker go to add a pre-built connector as a tool on an agent?**

- **A.** Knowledge page > Add source
- **B.** Tools tab > Add a tool > Connector
- **C.** Topics > New topic
- **D.** Settings > Security

**Answer:** B
**Confidence:** Certain

The module describes navigating to the Tools tab, selecting Add a tool, and choosing Connector to add a pre-built connector as a tool.

**Source:** From Take action in external systems using connector and REST API agent tools Module Assessment

### Q459 — Generic tool descriptions and orchestration matching
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A tool is rarely invoked even though it should apply to many user requests. Investigation shows its description is very generic. What is the most likely cause of the routing problem?**

- **A.** The tool has too many input parameters
- **B.** The description is too generic for generative orchestration to reliably match it to relevant requests
- **C.** The tool is missing an icon
- **D.** The agent has too few knowledge sources

**Answer:** B
**Confidence:** Certain

The module explains that overly generic tool descriptions prevent generative orchestration from confidently matching the tool to relevant user requests, causing it to be under-invoked.

**Source:** From Take action in external systems using connector and REST API agent tools Module Assessment

### Q460 — Shared service account authentication for tools
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**An organization wants every user of an agent to authenticate to a backend system using a single shared service account rather than individual user accounts. Which credential option supports this?**

- **A.** End-user credentials
- **B.** Maker-provided credentials
- **C.** No authentication
- **D.** Per-user OAuth tokens

**Answer:** B
**Confidence:** Certain

Maker-provided credentials are described as using a shared service account rather than requiring individual accounts per user.

**Source:** From Take action in external systems using connector and REST API agent tools Module Assessment

### Q461 — Maker credentials incompatible with anonymous channels
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A maker selects the maker-provided credentials option for a tool, then tries to publish the agent to an unauthenticated (anonymous) channel. What is the outcome?**

- **A.** The publish succeeds with no issues
- **B.** The publish is blocked because maker credentials require an authenticated channel
- **C.** The tool switches automatically to end-user credentials
- **D.** The channel becomes authenticated automatically

**Answer:** B
**Confidence:** Certain

The module states that an agent configured for an unauthenticated/anonymous channel cannot use the maker-provided credentials option, since that option requires an authenticated channel.

**Source:** From Take action in external systems using connector and REST API agent tools Module Assessment

### Q462 — Reducing tool surface area for a REST API tool
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A backend API exposes 40 endpoints, but an agent only needs 3 of them. What should the maker do when configuring the REST API tool?**

- **A.** Import all 40 endpoints for completeness
- **B.** Select only the endpoints the agent actually needs, to minimize tool surface area
- **C.** Split the agent into 40 separate child agents
- **D.** Disable orchestration entirely

**Answer:** B
**Confidence:** Certain

The module recommends selecting only the endpoints needed to minimize the tool's surface area and reduce ambiguity for the orchestrator.

**Source:** From Take action in external systems using connector and REST API agent tools Module Assessment

### Q463 — Choosing Copilot connector for citable, periodically-updated content
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**An IT department publishes internal articles that are updated roughly once a month, and the agent's responses need to include clickable citations back to the original article. Which knowledge source type fits best?**

- **A.** Power Platform connector (real-time)
- **B.** Copilot connector
- **C.** Azure AI Search with no citation field
- **D.** A pasted plain-text knowledge entry

**Answer:** B
**Confidence:** Certain

The module's comparison of Copilot connector vs Power Platform connector recommends the Copilot connector for content that updates periodically and needs citable references, rather than truly real-time data.

**Source:** From Ground agents in enterprise knowledge Module Assessment

### Q464 — Graph scope needed for manual Teams channel authentication
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**An agent uses a Copilot connector knowledge source and is being published to a Teams channel configured with manual authentication. Which Microsoft Graph permission scope is needed?**

- **A.** Files.Read.All
- **B.** ExternalItem.Read.All
- **C.** User.Read
- **D.** Mail.Read

**Answer:** B
**Confidence:** Certain

The module's 'Configure authentication for publishing' section specifies that the ExternalItem.Read.All Graph scope is required when publishing to a channel with manual authentication.

**Source:** From Ground agents in enterprise knowledge Module Assessment

### Q465 — Consequence of manually entering Azure AI Search credentials
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A maker adds Azure AI Search as a knowledge source by manually typing the endpoint URL and API key directly into the knowledge source form instead of using the Create new connection dialog. What is the risk?**

- **A.** No risk; both methods are functionally identical
- **B.** It creates a faulty environment-level data connection that can block all agents in the environment from adding Azure AI Search
- **C.** It only affects the search relevance score, not connectivity
- **D.** It automatically upgrades the connection to Microsoft Entra ID authentication

**Answer:** B
**Confidence:** Certain

The module warns that manual entry creates a faulty environment-level connection that can block every agent in the environment from adding Azure AI Search as a knowledge source, since the connection is stored at the environment level.

**Source:** From Ground agents in enterprise knowledge Module Assessment

### Q466 — Real-time connector for data-residency-restricted inventory
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A retailer's inventory data cannot leave its source system due to data-residency restrictions, but the agent needs current stock levels. Which approach satisfies both the currency and residency requirements?**

- **A.** Export inventory nightly into an Azure AI Search index
- **B.** Use a real-time Power Platform connector that queries the live system directly, without replicating data
- **C.** Upload a static spreadsheet snapshot as a knowledge source
- **D.** Ask users to type in stock levels manually

**Answer:** B
**Confidence:** Certain

The decision criteria in the module recommend a real-time Power Platform connector for scenarios needing live, current data without replicating it elsewhere, which also respects data-residency restrictions.

**Source:** From Ground agents in enterprise knowledge Module Assessment

### Q467 — Citation URL field precedence in an Azure AI Search index
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**An Azure AI Search index includes both a field named metadata_storage_path and a custom field named source_url, both containing URLs. Which field does Copilot Studio use for the citation link?**

- **A.** source_url, because custom fields always take priority
- **B.** metadata_storage_path, because Copilot Studio checks for this field name first
- **C.** Neither; citations are disabled when more than one URL field exists
- **D.** Whichever field is alphabetically first

**Answer:** B
**Confidence:** Certain

The module states that Copilot Studio checks for a field named metadata_storage_path first, and uses it as the citation URL if it exists, before falling back to any other field containing a complete URL.

**Source:** From Ground agents in enterprise knowledge Module Assessment

### Q468 — Ownership of MCP tool descriptions
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Who is typically responsible for writing the tool descriptions that Copilot Studio's orchestrator uses to decide when to invoke an MCP tool?**

- **A.** The Copilot Studio maker, who edits the description after the tool is added to the agent
- **B.** The team that owns and hosts the MCP server, since the description is returned during protocol discovery
- **C.** Microsoft, as part of the MCP specification itself

**Answer:** B
**Confidence:** Certain

The module explains that tool descriptions come from the server during protocol discovery and are owned by the server; makers generally can't edit them within Copilot Studio, so unclear descriptions must be addressed with the team maintaining the MCP server.

**Source:** From Integrate agents with external systems via MCP Module Assessment

### Q469 — Enabling only relevant tools from an MCP server
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A Copilot Studio maker connects an agent to an MCP server that exposes ten tools, but only three are relevant to the agent's intended use. What should the maker do?**

- **A.** Enable all ten tools, since disabling any risks breaking the MCP discovery handshake
- **B.** Enable only the three relevant tools on the Tools page and leave the rest disabled
- **C.** Create ten separate MCP server connections, one per tool

**Answer:** B
**Confidence:** Certain

The module's least-privilege guidance and worked example show the maker enabling only the tools relevant to the agent's intended use, leaving administrative or irrelevant tools disabled.

**Source:** From Integrate agents with external systems via MCP Module Assessment

### Q470 — Passing through user identity for per-user access control
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**Why might an organization configure an MCP server connection to pass through the signed-in user's identity rather than using a fixed service identity?**

- **A.** It allows the MCP server to enforce its own per-user or role-based access control, such as limiting results to a user's assigned branch
- **B.** It removes the need for the MCP server to implement any authentication at all
- **C.** It is required by the Model Context Protocol specification for all connections

**Answer:** A
**Confidence:** Certain

The module explains that passing through the signed-in user's identity via Microsoft Entra ID lets the MCP server enforce its own row-level and role-based access checks, such as ensuring a staff member sees only their assigned branch's data.

**Source:** From Integrate agents with external systems via MCP Module Assessment

### Q471 — New tools added to an existing MCP server connection
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**An engineering team adds a new tool to an MCP server that a Copilot Studio agent is already connected to. What happens to the agent's available tools?**

- **A.** The new tool is automatically enabled and immediately usable by the agent's orchestrator
- **B.** The new tool becomes available for the maker to review and explicitly enable on the agent's Tools page, but isn't enabled automatically
- **C.** The agent's existing MCP connection breaks until the maker reconnects to the server

**Answer:** B
**Confidence:** Certain

The module states that when a new tool is added to the server, it doesn't automatically become available; the maker must return to the Tools page, review its description and schema, and explicitly enable it if appropriate.

**Source:** From Integrate agents with external systems via MCP Module Assessment

### Q472 — Independent team ownership as justification for multi-agent design
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker is designing a customer service solution where three business units — HR, IT, and Finance — each maintain their own procedures and need to evolve their agent components independently. Which characteristic of this scenario best justifies a multi-agent architecture?**

- **A.** Independent team ownership across three business domains means each team can build, update, and release their agent component without affecting the others
- **B.** Three domain teams means three times more actions will be needed, automatically exceeding the 30-40 action routing accuracy threshold
- **C.** The IT team's procedures are more complex than HR or Finance, requiring separate AI model configuration for that component

**Answer:** A
**Confidence:** Certain

The module states that even one clear organizational boundary, like independent team ownership across three business domains, can be a valid reason to separate agents into a multi-agent architecture.

**Source:** From Design multi-agent solutions Module Assessment

### Q473 — Choosing workflow-oriented orchestration for strict step ordering
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A procurement team needs to validate vendor contracts through three mandatory compliance checks in a defined order, then route approved contracts to a legal reviewer before final sign-off. No step can be skipped or reordered. Which orchestration pattern is most appropriate?**

- **A.** Orchestrator/subagent - the orchestrator can evaluate each compliance agent's output and decide which agent to call next
- **B.** Workflow-oriented - the process is deterministic with strict step ordering and a human approval gate
- **C.** A hybrid pattern: concurrent compliance checks for speed, followed by dynamic routing to the legal reviewer

**Answer:** B
**Confidence:** Certain

The module's decision table contrasts orchestrator/subagent (open-ended, dynamic) with workflow-oriented (predefined, deterministic) patterns; a strict, non-reorderable, multi-step process with a human gate matches workflow-oriented orchestration.

**Source:** From Design multi-agent solutions Module Assessment

### Q474 — When to use a child agent for a new capability
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**An orchestrator agent team needs to add a billing capability to their solution. The capability doesn't yet exist, the same team will build and maintain it, and it only needs to be available through this specific orchestrator. Which agent type should the team use?**

- **A.** A child agent created within the orchestrator
- **B.** An existing Copilot Studio agent connected from the same environment
- **C.** A Microsoft Foundry agent to configure specialized model reasoning for the billing workflows

**Answer:** A
**Confidence:** Certain

The module states that child agents are the right fit when the same team owns and manages the entire solution, no separate publishing is needed, and the capability won't be reused by other agents.

**Source:** From Design multi-agent solutions Module Assessment

### Q475 — Connecting to a partner's non-Microsoft-platform agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A logistics partner exposes a shipment tracking capability as a separately hosted agent that manages its own reasoning on a non-Microsoft platform. Which connection option is most appropriate when adding this capability to a Copilot Studio orchestrator?**

- **A.** Existing Copilot Studio agent: the partner's agent can be republished to the same Copilot Studio environment
- **B.** A2A protocol agent: the open Agent2Agent standard enables cross-platform agent communication without requiring the partner to rebuild their agent in Copilot Studio
- **C.** Microsoft Foundry agent: Azure AI Foundry can represent the partner's external reasoning configuration

**Answer:** B
**Confidence:** Certain

The module's connection-type table lists the A2A protocol agent option specifically for connecting to partner or cross-platform agents on non-Microsoft platforms that manage their own reasoning.

**Source:** From Design multi-agent solutions Module Assessment

### Q476 — Latency tradeoff of connected agents
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker building a multi-agent solution is concerned that adding connected agents will negatively affect the end-user experience by making responses feel slower. Which characteristic of multi-agent architectures is most directly relevant to this concern?**

- **A.** The governance surface expands with each connected agent, which increases the maker's testing and security review workload
- **B.** Each connected agent adds latency from orchestration hops as the main agent delegates, waits for the connected agent's response, and incorporates it before replying
- **C.** Multi-agent architectures require more complex knowledge source configuration, which increases the time each agent needs to resolve a query

**Answer:** B
**Confidence:** Certain

The module states that every connected agent introduces orchestration hops - extra round-trips where the main agent identifies and calls the connected agent - which add latency to the end-user experience.

**Source:** From Design multi-agent solutions Module Assessment

### Q477 — Using child agents to reduce routing surface within one team's solution
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker is building a customer service agent that handles product returns, shipping support, and loyalty program inquiries - all owned and maintained by the same team, with no need to publish any component separately. The agent now exceeds 35 tools and routing accuracy is declining. Which architectural approach best addresses this problem?**

- **A.** Create child agents for each domain to organize tools by scope and reduce the orchestrator's routing surface
- **B.** Split the solution into three separately published connected agents, each maintained by the same team
- **C.** Add more topics to the existing single agent to give the AI more guidance on how to route each domain

**Answer:** A
**Confidence:** Certain

The module explains that grouping related tools into child agents by domain narrows the set of options the orchestrator evaluates for each query, improving routing accuracy without requiring separate publishing.

**Source:** From Delegate agent tasks using child agents Module Assessment

### Q478 — Fixing overlapping child agent descriptions
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A maker writes this description for an Order Status child agent: 'Assists customers with any questions about purchases made on the website.' After testing, billing queries about recent charges are sometimes being routed to this agent. What change would most directly fix the routing problem?**

- **A.** Add more tools to the Order Status child agent so it can handle the billing queries it's receiving
- **B.** Rewrite the description to explicitly scope it to order tracking and delivery status, removing language that also describes billing activity
- **C.** Enable the 'Allow agent to decide dynamically when to use this tool' property on all tools in the Order Status child agent

**Answer:** B
**Confidence:** Certain

The module explains that an effective description anchors on a specific domain and avoids terms that also apply to adjacent domains, which could blur the boundary between agents like Order Status and Billing/Returns.

**Source:** From Delegate agent tasks using child agents Module Assessment

### Q479 — Collecting a required input directly from the user
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A child agent that looks up account balances requires an account ID before it can run. The parent orchestrator doesn't always have the account ID available from the current conversation. Which input configuration ensures the child agent collects the account ID directly from the user when the parent can't supply it?**

- **A.** Configure the account ID input as required and set 'Leave empty' as the action when no value is found
- **B.** Enable 'Should prompt user' on the account ID input so the child agent asks the user directly when the parent can't provide the value
- **C.** Add a validation condition with a reprompt message on the account ID input so the child agent retries until a valid value is entered

**Answer:** B
**Confidence:** Certain

The module lists 'Should prompt user' as the input setting controlling whether the child agent asks the user directly when the parent can't supply the value.

**Source:** From Delegate agent tasks using child agents Module Assessment

### Q480 — Guaranteed handoff to a specific child agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A topic in a Copilot Studio orchestrator first verifies a customer's identity and collects their account number. After verification, the topic needs to pass the account number to a specific child agent for further processing. Which approach guarantees that the correct child agent receives the account number and handles the request?**

- **A.** Add an agent redirect node at the point in the topic where the handoff should occur, select the target child agent, and pass the account number as an input
- **B.** Use matching keywords in both the topic's trigger phrases and the child agent's description so the orchestrator connects them when the topic ends
- **C.** Configure the child agent's trigger to 'Message received' so it activates when the topic sends the user a message after verification is complete

**Answer:** A
**Confidence:** Certain

The module's trigger table lists 'It's redirected to' as firing when the child agent is called explicitly from a topic via a redirect node, providing deterministic, guaranteed handoff rather than relying on description matching.

**Source:** From Delegate agent tasks using child agents Module Assessment

### Q481 — Temporarily taking a child agent out of rotation
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A child agent in a customer service orchestrator depends on an external inventory API for product recommendations. The API will be unavailable for 48 hours due to scheduled maintenance. Which action should the maker take?**

- **A.** Delete the child agent to prevent errors while the API is unavailable
- **B.** Disable the child agent using the Enabled toggle on the Agents page until the maintenance window ends
- **C.** Update the child agent's description to exclude all inventory-related terms so the orchestrator stops routing product queries to it

**Answer:** B
**Confidence:** Certain

The module describes the Enabled toggle on the Agents page as the control for taking a child agent temporarily out of rotation during scheduled maintenance, without removing it entirely.

**Source:** From Delegate agent tasks using child agents Module Assessment

### Q482 — Missing agent in the connection list
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker wants to connect a contract compliance agent published by the Legal team to a vendor management orchestrator. Both Copilot Studio agents are in the same Power Platform environment, and the contract compliance agent is published. When the maker navigates to the orchestrator's Agents page to add it, the contract compliance agent doesn't appear in the available agent list. What's the most likely cause?**

- **A.** The contract compliance agent needs to be exported as a solution and imported into the orchestrator's environment before it can appear
- **B.** 'Let other agents connect to and use this one' isn't enabled on the contract compliance agent's Settings page
- **C.** The orchestrator's maker needs to be added as a co-owner of the contract compliance agent before it can appear in the connection list

**Answer:** B
**Confidence:** Certain

The module lists 'Connections enabled' as a prerequisite: the target agent's setting 'Let other agents connect to and use this one' must be turned on, or the agent's owner must re-enable it before it appears in the connection list.

**Source:** From Build multi-agent solutions using connected agents Module Assessment

### Q483 — 404 error connecting a Microsoft Foundry agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A maker needs to connect a Microsoft Foundry agent to a Copilot Studio orchestrator. The Foundry team provides the project endpoint URL and agent ID. After entering these values, the connection fails with a 404 error. What's the most likely cause?**

- **A.** The Foundry project's endpoint URL is only valid for 24 hours and has expired
- **B.** The agent was built and published in the legacy Azure AI Studio portal instead of the new Microsoft Foundry portal
- **C.** The maker needs to create a service principal with Foundry project permissions before the connection can succeed

**Answer:** B
**Confidence:** Certain

The module states that agents created in the legacy Azure AI Studio portal return a 404 error when Copilot Studio attempts to connect to them, and must be recreated in the new Microsoft Foundry portal.

**Source:** From Build multi-agent solutions using connected agents Module Assessment

### Q484 — Fabric Data agents don't support redirect-node routing
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**A maker connects a Fabric Data agent to an orchestrator and configures a topic to redirect to it for all spend data queries using an agent redirect node. After testing, spend data queries don't reach the Fabric Data agent. What does the maker need to know about routing to Fabric Data agents?**

- **A.** Fabric Data agents require an additional authentication step in the topic before redirect nodes will work
- **B.** Routing to Fabric Data agents from topic redirect nodes isn't currently supported. These agents can only be invoked through generative orchestration based on the agent's description
- **C.** The topic redirect node only works for child agents. To redirect to a connected Fabric Data agent, the maker needs to use a topic action node instead

**Answer:** B
**Confidence:** Certain

The module explicitly states that routing to a Fabric Data agent is only supported through generative orchestration and that directing users to it from a topic using an agent redirect node is not currently supported.

**Source:** From Build multi-agent solutions using connected agents Module Assessment

### Q485 — Resolving overlapping connected agent descriptions
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**An orchestrator routes a query about vendor security incidents to a contract compliance connected agent instead of the intended vendor risk assessment connected agent. Both agents' descriptions contain the word 'compliance.' What change most directly resolves this routing ambiguity?**

- **A.** Add a topic to the orchestrator that intercepts queries containing the word 'compliance' and routes them to the vendor risk assessment agent
- **B.** Add more tools to the vendor risk assessment agent so the orchestrator has stronger signals to distinguish it from the contract compliance agent
- **C.** Rewrite both agents' descriptions to use specific, non-overlapping language that reflects the distinct subject domain each agent handles

**Answer:** C
**Confidence:** Certain

The module states that routing relies on descriptions, and two connected agents with overlapping descriptions will confuse the orchestrator, so descriptions must be specific and non-overlapping.

**Source:** From Build multi-agent solutions using connected agents Module Assessment

### Q486 — Choosing A2A for a partner agent with its own reasoning
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker wants to connect their Copilot Studio orchestrator to a partner organization's support agent. The partner's agent runs on a different AI platform, manages its own reasoning and orchestration, and exposes an A2A-compatible endpoint. Which integration approach is most appropriate?**

- **A.** Connector
- **B.** MCP connection
- **C.** A2A connection

**Answer:** C
**Confidence:** Certain

The module explains that A2A is purpose-built for agent-to-agent delegation where the external agent manages its own reasoning, tools, and responses independently on a different platform.

**Source:** From Build cross-platform multi-agent solutions using Agent2Agent Module Assessment

### Q487 — Purpose of an A2A agent card
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What is the purpose of an agent card in the A2A protocol?**

- **A.** It stores the authentication credentials needed to connect to an A2A agent
- **B.** It is a JSON document that describes the A2A agent's name, capabilities, and endpoint, and is used by connecting systems to discover the agent
- **C.** It is a dashboard that shows the health and activity status of a deployed A2A agent

**Answer:** B
**Confidence:** Certain

The module defines agent cards as JSON discovery documents published at a well-known URL path that describe the agent's name, purpose, capabilities, and endpoint, retrieved automatically to populate connection details.

**Source:** From Build cross-platform multi-agent solutions using Agent2Agent Module Assessment

### Q488 — Selecting API key authentication for a custom header
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**A maker is configuring an A2A connection to a partner's agent that requires authentication using a header named 'X-Partner-Key' and a shared secret string. Which authentication option should the maker select in Copilot Studio?**

- **A.** OAuth 2.0
- **B.** None
- **C.** API key

**Answer:** C
**Confidence:** Certain

The module describes the API key option as used when the external agent requires a shared secret passed in a specific HTTP header, where the maker enters the header name and key value.

**Source:** From Build cross-platform multi-agent solutions using Agent2Agent Module Assessment

### Q489 — Diagnosing A2A misrouting caused by a broad description
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**After configuring an A2A connection to a shipment tracking agent, a maker tests the orchestrator and finds that some order status queries are being routed to the A2A agent instead of the internal order management agent. What is the most likely cause of this misrouting?**

- **A.** The A2A agent's endpoint URL is incorrect
- **B.** The A2A agent's description in the orchestrator is too broad and overlaps with the internal agent's purpose
- **C.** The A2A protocol doesn't support multi-turn conversations

**Answer:** B
**Confidence:** Certain

The module's troubleshooting table lists 'No delegation occurs' / misrouting as resolved by refining the A2A agent's description to be more specific and distinct from other agents.

**Source:** From Build cross-platform multi-agent solutions using Agent2Agent Module Assessment

### Q490 — Governance review before sending data to an external A2A agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**Before deploying an A2A integration to production, a maker reviews the message payload and finds the conversation history sent to an external partner's agent includes a customer's account number captured earlier in the same session. The external agent only needs the current shipment query. What should the maker do?**

- **A.** Proceed with deployment because the account number could help the external agent provide a more personalized response
- **B.** Review the external agent's data processing terms and limit the conversation context passed to the A2A agent to only what it needs for the task
- **C.** Remove the account number capture step from the orchestrator to prevent future sessions from including it

**Answer:** B
**Confidence:** Certain

The module's responsible-use guidance directs makers to review the external agent's data processing terms and confirm the level of data sharing is authorized before enabling an A2A integration that passes unnecessary sensitive context externally.

**Source:** From Build cross-platform multi-agent solutions using Agent2Agent Module Assessment

### Q491 — Responsible AI tenet for fair treatment of all people
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Easy*

**Which Microsoft Responsible AI tenet ensures that AI systems treat all people fairly and avoid harmful biases?**

- **A.** Privacy & Security
- **B.** Fairness
- **C.** Reliability & Safety
- **D.** Transparency

**Answer:** B
**Confidence:** Certain

The module's tenet description for Fairness states that AI systems should treat all people fairly and that solutions must avoid harmful biases and ensure equitable outcomes.

**Source:** From Design AI agents for business solutions Module Assessment

### Q492 — Mapping organizational vocabulary into case summary fields
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**When customizing Copilot in Dynamics 365 Customer Service, which configuration step ensures that Copilot includes the correct organizational vocabulary in its summaries?**

- **A.** Changing the CRM theme color
- **B.** Managing fields used in case summaries
- **C.** Editing agent permissions only
- **D.** Installing new entities manually

**Answer:** B
**Confidence:** Certain

The module describes 'Manage fields used for summaries' as the step where a maker maps a custom field, such as Issue Type, so Copilot includes the organization's own terminology in case summaries.

**Source:** From Design AI agents for business solutions Module Assessment

### Q493 — Authentication for custom connectors in Dynamics 365 Sales
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which authentication method is required for custom connectors used with Copilot in Dynamics 365 Sales?**

- **A.** Basic Auth
- **B.** API Key
- **C.** OAuth 2.0 using Microsoft Entra ID
- **D.** Anonymous access

**Answer:** C
**Confidence:** Certain

The module's authentication and security guidance specifies OAuth 2.0 combined with Microsoft Entra ID as the identity provider for custom connectors used with Copilot in Dynamics 365 Sales.

**Source:** From Design AI agents for business solutions Module Assessment

### Q494 — Benefit of mapping vocabulary into structured fields
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**What is the main benefit of mapping organizational vocabulary and processes into structured fields for Copilot in Dynamics 365?**

- **A.** It allows agents to change their workflow at will
- **B.** It ensures AI-generated insights and recommendations reflect the organization's unique operations, tone, and compliance requirements
- **C.** It enables the use of third-party connectors
- **D.** It updates the Dynamics 365 interface theme

**Answer:** B
**Confidence:** Certain

The module states that configurable summary settings help align AI-generated content with business rules, terminology, and compliance needs, ensuring summaries reflect the tone expected in the organization's communications.

**Source:** From Design AI agents for business solutions Module Assessment

### Q495 — Scenario justifying a custom model in Microsoft Foundry
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which scenario most strongly indicates the need for a custom model in Microsoft Foundry?**

- **A.** Drafting standard email responses
- **B.** Retrieving HR policy documents from SharePoint
- **C.** Supporting domain-specific engineering calculations requiring high accuracy
- **D.** Translating common business phrases

**Answer:** C
**Confidence:** Certain

The module lists industries such as engineering as requiring AI models that understand specialized terminology and follow domain-specific logic, which custom models in Microsoft Foundry are designed to support.

**Source:** From Design extensibility of AI solutions Module Assessment

### Q496 — Principle for designing Microsoft 365 Copilot agents
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which principle is most important when designing agents for Microsoft 365 Copilot?**

- **A.** Adding as many capabilities as possible
- **B.** Ensuring the agent has clear intent, guardrails, and scoped permissions
- **C.** Designing agents without considering data boundaries
- **D.** Removing all user review steps

**Answer:** B
**Confidence:** Certain

The module states that to design effective agents, architects must consider user intent, data access boundaries, security, compliance, and extensibility, and lists guardrails such as which apps or data an agent may access.

**Source:** From Design extensibility of AI solutions Module Assessment

### Q497 — Improving long-term extensibility for enterprise Copilot Studio agents
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which design approach best improves long-term extensibility for enterprise-grade Copilot Studio agents?**

- **A.** Hard-coding all logic inside a single instruction block
- **B.** Using modular skills, integrations, and reusable instruction components
- **C.** Avoiding custom actions or external connectors
- **D.** Relying only on pro-code development in Visual Studio Code

**Answer:** B
**Confidence:** Certain

The module describes a modular agent as structured using interchangeable components such as instructions, skills, integrations, and tools, and recommends solution architects create modular, reusable skills to prevent duplication.

**Source:** From Design extensibility of AI solutions Module Assessment

### Q498 — Scenario requiring MCP-based extensibility
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Hard*

**Which scenario most clearly requires MCP-based extensibility in Copilot Studio?**

- **A.** Writing casual emails for end users
- **B.** Pulling structured financial context to support a ledger reconciliation assistant
- **C.** Generating brainstorming ideas
- **D.** Translating messages between languages

**Answer:** B
**Confidence:** Certain

The module explains that MCP exposes structured information such as domain models, including financial dimensions and ledger models, and business process metadata from Dynamics 365 F&O for agents to reason over.

**Source:** From Design extensibility of AI solutions Module Assessment

### Q499 — Primary benefit of orchestrating Copilot across Finance and Supply Chain modules
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which of the following best describes the primary benefit of orchestrating Copilot AI features across Dynamics 365 Finance and Supply Chain modules?**

- **A.** Automating only single-step data entry tasks
- **B.** Enabling cohesive, compliant, and scalable AI-enabled business processes
- **C.** Creating static dashboards for reporting
- **D.** Allowing users to edit personal preferences

**Answer:** B
**Confidence:** Certain

The module states that this unit provides guidance on orchestrating Copilot-driven features to create cohesive, compliant, and scalable AI-enabled business processes across finance and supply chain modules.

**Source:** From Orchestrate configuration of prebuilt agents and apps Module Assessment

### Q500 — Orchestrated AI for multi-step case resolution
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**In Dynamics 365 Customer Service, which scenario benefits most from orchestrated AI features?**

- **A.** Exporting customer lists for marketing
- **B.** Handling multi-step case resolutions involving knowledge lookup and escalation
- **C.** Updating product catalog descriptions
- **D.** Downloading user manuals

**Answer:** B
**Confidence:** Certain

The module's configuration workflow describes enabling Copilot actions for summarization, knowledge lookup, and guided resolution, plus integrating Power Automate flows for escalation - directly matching multi-step case resolution.

**Source:** From Orchestrate configuration of prebuilt agents and apps Module Assessment

### Q501 — Characteristics of a production-ready Microsoft 365 agent
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**Which statement best reflects a production-ready Microsoft 365 agent?**

- **A.** It can answer questions on any corporate topic
- **B.** It has a defined mission, the minimum tools to act, guardrails for reviewability, and telemetry for outcomes
- **C.** It uses the largest possible model to maximize quality
- **D.** It prompts for every action to ensure control

**Answer:** B
**Confidence:** Certain

The module states that well-designed Microsoft 365 agents have a defined mission and scope, grounding data and tools, operational guardrails including reviewability, and telemetered outcomes.

**Source:** From Orchestrate configuration of prebuilt agents and apps Module Assessment

### Q502 — Best practice for extending Copilot in Finance and Supply Chain
*Bank: AB-620-LearnDocs · Domain: Integrate and extend agents in Copilot Studio · Difficulty: Medium*

**When solution architects extend Copilot experiences in Dynamics 365 Finance and Supply Chain, which best practice should they follow?**

- **A.** Hard-code all extensions to specific workflows
- **B.** Keep extensions modular and compliant with solution boundaries
- **C.** Allow Copilot to access all data without restrictions
- **D.** Avoid aligning extensions with existing workflows

**Answer:** B
**Confidence:** Certain

The module's best practices explicitly recommend keeping extensions modular and compliant with solution boundaries, applying Responsible AI guidelines, and aligning extensions with existing workflows.

**Source:** From Orchestrate configuration of prebuilt agents and apps Module Assessment

### Q503 — Solution development scope
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**According to the assessment, in which applications can solutions be built for Power Platform?**

- **A.** Power Apps only
- **B.** Power Apps and Power Automate
- **C.** Power Automate only
- **D.** Power Apps for standard solutions; Power Automate for flow-based solutions only

**Answer:** B
**Confidence:** Certain

The assessment states that solutions can be built in both Power Apps and Power Automate, providing a unified approach to application lifecycle management across both platforms.

**Source:** From Manage solutions in Power Automate Module Assessment

### Q504 — Adding items to solutions
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**When can you add items such as flows, apps, or environment variables to a solution?**

- **A.** Only when creating a new solution
- **B.** New solutions will not accept existing items
- **C.** You can add existing items and new items to either existing or new solutions
- **D.** Items that are removed from a solution cannot be added back

**Answer:** C
**Confidence:** Certain

Solutions provide flexibility in ALM by allowing both new components to be created within them and existing components to be added to either new or existing solutions.

**Source:** From Manage solutions in Power Automate Module Assessment

### Q505 — Solution export/import deployment scope
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**What is the scope of solution export and import capabilities across Microsoft Power Platform environments?**

- **A.** Only within a single environment
- **B.** Across environments but must be in a single tenant
- **C.** Across tenants but requires identical licenses
- **D.** Across both environments and tenants

**Answer:** D
**Confidence:** Certain

Solutions support the full ALM lifecycle by enabling export and import across both different environments and different tenants, supporting organizational restructuring and multi-tenant deployments.

**Source:** From Manage solutions in Power Automate Module Assessment

### Q506 — Automatic dependency handling in solutions
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Do solutions automatically package dependent components when exported?**

- **A.** No; dependent components like Choice fields must be added separately
- **B.** Yes; solutions automatically recognize and package all interdependent components
- **C.** Yes, but only for Power Apps canvas apps
- **D.** Yes, but only for Power Automate flows

**Answer:** B
**Confidence:** Certain

Modern solutions intelligently handle component dependencies during ALM operations, automatically recognizing and packaging interdependent components to ensure consistency during deployment.

**Source:** From Manage solutions in Power Automate Module Assessment

### Q507 — Connection reference handling across platforms
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**How do Power Apps canvas apps and Power Automate flows differ in their handling of connection references?**

- **A.** They handle connection references identically
- **B.** Power Apps canvas apps reference all connectors; Power Automate uses implicit shared connections like SQL Server
- **C.** Power Automate flows use connection references for all connectors; Power Apps apps only use them from implicit shared connections
- **D.** They handle connection references identically except for cloud connections

**Answer:** C
**Confidence:** Certain

Power Automate uses explicit connection references for all connectors to support ALM portability, while Power Apps canvas apps primarily rely on implicit shared connections for simpler configuration management.

**Source:** From Manage solutions in Power Automate Module Assessment

### Q508 — When to use patch solutions
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**In solution lifecycle management, when should you use a patch solution?**

- **A.** When making bulk updates
- **B.** When you need to delete components
- **C.** When making small updates
- **D.** When deploying to production environments

**Answer:** C
**Confidence:** Certain

Patch solutions are designed for incremental ALM updates, allowing you to package and deploy small, focused changes without requiring a full solution export/import cycle.

**Source:** From Introduction to solutions for Microsoft Power Platform Module Assessment

### Q509 — ALM task management tools
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Easy*

**Which tool provides a collection of ALM-related tasks for managing Microsoft Power Platform solutions?**

- **A.** Microsoft Power Apps admin center
- **B.** Microsoft Power Platform CLI
- **C.** Power Apps portals admin center
- **D.** Microsoft 365 admin center

**Answer:** B
**Confidence:** Certain

The Microsoft Power Platform CLI provides command-line tools and automation capabilities for ALM tasks, enabling integration with CI/CD pipelines and DevOps workflows for solution management.

**Source:** From Introduction to solutions for Microsoft Power Platform Module Assessment

### Q510 — Solution decomposition command
*Bank: AB-620-LearnDocs · Domain: Test and manage agents · Difficulty: Medium*

**Which command is used to reversibly decompose a solution .zip file into a logical folder structure?**

- **A.** Solution unpack
- **B.** Solution pack
- **C.** Solution upgrade
- **D.** Solution extract

**Answer:** A
**Confidence:** Certain

The 'solution unpack' command decomposes a solution package into a human-readable folder structure, enabling version control integration and collaborative ALM practices with Git and other tools.

**Source:** From Introduction to solutions for Microsoft Power Platform Module Assessment
