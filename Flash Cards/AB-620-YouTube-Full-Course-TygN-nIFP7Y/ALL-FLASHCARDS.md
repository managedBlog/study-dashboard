# AI Agent Builder Associate (AB-620) - Full Course - Pass The Exam! — Flashcards

**GENERATED FILE.**

**1. What platform does the AB-620 exam focus on according to the presenter?**

**Copilot Studio** -- the transcript says the exam is not about Agent Builder or Foundry and is solely focused on Copilot Studio. [SRC: Segment 1: 00:00-01:32] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=0s

**2. What Copilot Studio concept did the presenter say appeared heavily in exam questions despite changes in the new experience?**

**Topics** -- the presenter had many questions involving topics, even though the new experience then had no way to create or manage them. [SRC: Segment 2: 01:30-03:00] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=90s

**3. What four areas does the presenter organize the AB-620 study session around?**

**Agent orchestration, knowledge, tools, and evaluations in ALM** -- these are the four agenda areas named in the transcript. [SRC: Segment 3: 02:58-04:29] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=178s

**4. What passing score does the transcript give for the exam?**

**700** -- the presenter states that a passing score of 700 is needed. [SRC: Segment 4: 04:27-05:58] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=267s

**5. How much time and how many questions did the presenter report for the AB-620 exam experience?**

**100 minutes and about 50 questions** -- including a 10-question case study, according to the transcript. [SRC: Segment 4: 04:27-05:58] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=267s

**6. How does the transcript define agent orchestration?**

**Coordinating specialized tools, capabilities, and AI agents** -- so they work together efficiently on complex tasks. [SRC: Segment 5: 05:56-07:26] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=356s

**7. In Copilot Studio orchestration, what does the agent itself decide?**

**When to call resources** -- the model or agent orchestrates whether to call a tool, capability, knowledge source, or another AI agent. [SRC: Segment 5: 05:56-07:26] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=356s

**8. What are knowledge sources used for in a Copilot Studio agent?**

**Grounding the agent in business context** -- they act like a library the agent can read when necessary. [SRC: Segment 6: 07:24-08:55] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=444s

**9. What do tools add that knowledge sources do not?**

**Action ability** -- tools let the agent do things such as update records, create records, or send emails. [SRC: Segment 6: 07:24-08:55] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=444s

**10. Why use smaller specialized agents instead of one mega agent?**

**Specialization** -- different agents can handle different tasks and expertise, similar to employees across an organization. [SRC: Segment 7: 08:53-10:25] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=533s

**11. Why is agent-level orchestration described as indeterministic?**

**The model decides resource usage** -- it is less structured and depends on instructions and tool descriptions rather than a fixed flow. [SRC: Segment 8: 10:23-11:53] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=623s

**12. How do topics affect resource execution?**

**They add structure and determinism** -- topics let makers specify that a tool should be called at a specific conversation point. [SRC: Segment 8: 10:23-11:53] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=623s

**13. What nuance exists around where tools can be called?**

**Some tools are topic-only, while others are agent-level-only** -- the transcript says placement depends on the type of tool. [SRC: Segment 9: 11:51-13:22] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=711s

**14. What is a child agent in the transcript's explanation?**

**A mini agent used only by the parent** -- it has its own instructions, tools, and knowledge but lives inside the parent context. [SRC: Segment 9: 11:51-13:22] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=711s

**15. How does publishing work for child agents?**

**They publish with the parent** -- child agents do not have their own independent publishing lifecycle in the transcript's description. [SRC: Segment 10: 13:20-14:51] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=800s

**16. What is a key difference between connected agents and child agents?**

**Connected agents are standalone and require explicit information passing** -- they do not automatically get all parent information and have their own release cycle. [SRC: Segment 11: 14:49-16:20] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=889s

**17. What rule of thumb does Microsoft Learn give for reconsidering an agent with many orchestration choices?**

**30 to 40 choices** -- the transcript presents this as a rule of thumb for when to rethink how the orchestrator is set up, not as a hard limit. [SRC: Segment 16: 22:15-23:46] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1335s

**18. Why might several child agents improve performance compared with putting everything on the parent agent?**

**They reduce what the parent is responsible for** -- the parent has less to manage when child agents handle task groups. [SRC: Segment 16: 22:15-23:46] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1335s

**19. For knowledge, what is the key runtime value of Power Platform connectors?**

**Real-time knowledge at runtime** -- they can retrieve current information when the user asks. [SRC: Segment 17: 23:44-25:15] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1424s

**20. What is the core pattern behind Copilot connectors?**

**Search and index** -- data is added to Microsoft Graph, indexed, and retrieved from that repository rather than fetched live. [SRC: Segment 17: 23:44-25:15] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1424s

**21. Why can Copilot connector responses include citations?**

**Content lives in the Graph index** -- agents retrieve it with semantic search and can cite specific items. [SRC: Segment 17: 23:44-25:15] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1424s

**22. Where must Copilot connectors be configured before a maker can add them to an agent?**

**Microsoft 365 admin center** -- the transcript says an admin configures them there before makers use them. [SRC: Segment 18: 25:12-26:44] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1512s

**23. Where can generative answers be used?**

**Inside topics only** -- the transcript describes generative answers as a topic resource. [SRC: Segment 18: 25:12-26:44] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1512s

**24. What does a generative answer node do with configured knowledge sources?**

**Reasons over them to generate a grounded response** -- it uses the model to produce an answer from the configured knowledge. [SRC: Segment 19: 26:42-28:13] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1602s

**25. What is the fallback order for a generative answer node with its own sources?**

**Node sources first, agent-level sources second** -- if the node does not find an answer, it falls back to the broader agent knowledge. [SRC: Segment 19: 26:42-28:13] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1602s

**26. How does the transcript classify Azure AI Search in the agent design model?**

**A knowledge resource, not an actionability tool** -- it is for retrieval/search rather than taking actions. [SRC: Segment 20: 28:11-29:42] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1691s

**27. When is Azure AI Search especially useful according to the transcript?**

**Large indexed data with semantic/vector search and RAG** -- it helps locate the right indexed information so the agent can answer better. [SRC: Segment 21: 29:40-31:12] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1780s

**28. What two content directions does moderation evaluate?**

**User inputs and AI-generated outputs** -- it checks prompts entering the agent and responses leaving it. [SRC: Segment 21: 29:40-31:12] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1780s

**29. Can content moderation be fully bypassed by lowering settings?**

**No** -- the transcript says Copilot Studio still has unskippable moderation pieces even if set to low. [SRC: Segment 22: 31:09-32:40] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1869s

**30. What role do variables play when calling tools?**

**They carry tool inputs and outputs** -- gathered information is stored in variables and passed as parameters to tools. [SRC: Segment 23: 32:38-34:10] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=1958s

**31. What does run-as-end-user authentication mean?**

**Delegated access using the chatting user's credentials** -- the connector accesses the system as that user, not as the maker. [SRC: Segment 24: 34:08-35:39] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2048s

**32. Why might a service account be preferred over maker credentials for production?**

**It avoids dependency on a specific employee** -- the transcript warns that disabling the maker's user account could break connector credentials. [SRC: Segment 25: 35:36-37:07] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2136s

**33. What are the three authentication verification types highlighted in the transcript?**

**OAuth 2.0, no authentication, and API key authentication** -- these are the three main ways the exam outline highlights. [SRC: Segment 26: 37:04-38:35] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2224s

**34. How should you choose between custom connectors, REST APIs, and HTTP actions?**

**Choose by reuse scope** -- custom connectors are reusable across organizational assets, REST APIs are reusable within an agent, and HTTP actions have no reuse beyond a topic. [SRC: Segment 30: 42:58-44:30] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2578s

**35. What is Model Context Protocol (MCP) described as?**

**MCP is a standardized way for agents to call APIs/endpoints and interact with external systems, data sources, and capabilities** -- it lets agents discover and use those capabilities through the protocol. [SRC: Segment 31: 44:28-45:59] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2668s

**36. What scalability benefit does MCP provide when multiple agents use the same MCP?**

**Updates managed by the MCP owner can become available to all connected agents** -- the transcript gives an example where three agents instantly get upgrades or access through the MCP. [SRC: Segment 32: 45:56-47:26] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2756s

**37. What can a maker control for MCP actions inside a Copilot Studio agent?**

**A maker can enable or disable MCP actions, but cannot control which actions appear or their descriptions** -- those are owned by the MCP tool/server side. [SRC: Segment 32: 45:56-47:26] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2756s

**38. What does the MCP enable-all checkbox determine?**

**It determines the default state for newly added MCP actions** -- if allow all is off, new MCP tools are added as off for the Copilot Studio agent. [SRC: Segment 32: 45:56-47:26] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2756s

**39. Why might MCP be preferable to directly adding a specific connector action for generative AI scenarios?**

**MCP is described as less strict about inputs and able to infer them using generative AI** -- direct actions may require makers to define inputs and outputs with variables. [SRC: Segment 33: 47:24-48:55] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2844s

**40. When should an agent flow be used for process behavior?**

**Use an agent flow when the agent must perform the exact same process every time** -- the transcript contrasts this deterministic flow behavior with variable agent behavior. [SRC: Segment 34: 48:53-50:24] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2933s

**41. What is the agent flow timeout consideration?**

**Copilot Studio waits 100 seconds for the agent flow response** -- the flow can continue after that, but the agent fails if it does not receive a response in time. [SRC: Segment 34: 48:53-50:24] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=2933s

**42. How can a long-running agent flow be designed around the 100-second wait?**

**Respond to the agent within 100 seconds, then continue longer work afterward** -- the transcript gives approvals as an example of work that may take minutes, hours, or days. [SRC: Segment 35: 50:22-51:52] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=3022s

**43. How does A2A protocol treat work sent to another agent?**

**A2A fully delegates the task to the target agent** -- the target agent is responsible for reasoning, execution, and security. [SRC: Segment 36: 51:50-53:22] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=3110s

**44. What is an A2A agent card?**

**An agent card displays agent metadata such as name, description, and how it works** -- the transcript says the exam focused on knowing where to locate it. [SRC: Segment 36: 51:50-53:22] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=3110s

**45. Where are agent cards generally located?**

**At /.well-known/agent.json after the external agent URL** -- the transcript says agent owners should make one if it does not exist to comply with A2A standards. [SRC: Segment 36: 51:50-53:22] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=3110s

**46. What are evaluations used for in Copilot Studio?**

**Evaluations bulk or automate testing of an agent** -- running them and analyzing results helps optimize behavior and validate that the agent works correctly. [SRC: Segment 37: 53:20-54:50] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=3200s

**47. What timing estimate does the transcript give for evaluation prompts?**

**Each evaluation prompt takes about 30 seconds** -- the transcript estimates 10 test scripts will take about 5 minutes. [SRC: Segment 37: 53:20-54:50] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=3200s

**48. What might regular incorrect tool calls across different evaluation test cases indicate?**

**It may indicate broader description, instruction, or model issues** -- the transcript suggests rewriting descriptions, updating instructions, or considering a model change. [SRC: Segment 38: 54:47-56:18] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=3287s

**49. What are solutions used for in Power Platform ALM?**

**Solutions package, transport, and manage Copilot Studio agents and related components** -- they can include tools, connections, and agent flows and be exported/imported between environments. [SRC: Segment 41: 59:13-01:00:44] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=3553s

**50. How do secret and non-secret environment variables differ when values change?**

**Non-secret changes require republishing the agent; secret changes are called at runtime and do not require republishing** -- this is the major distinction highlighted in the transcript. [SRC: Segment 44: 01:03:39-01:05:09] | https://www.youtube.com/watch?v=TygN-nIFP7Y&t=3819s
