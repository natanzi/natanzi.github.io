---
title: Making Agentic RAN Governable by Design
date: 2026-10-27
image: https://res.cloudinary.com/ddtuv5tpv/image/upload/v1793135593/Pale_blue-gray_Agentic_RAN_cover_fplwct.png
category: Engineering
description: A personal project on how AI agents could help run mobile networks
  while keeping operators in control.
related:
  - agentic-ran-and-opportunities
---
Imagine an AI agent trying to save energy by putting a few mobile cells to sleep. At the same time, another agent is moving users away from a busy cell. Both may be following their instructions, yet their decisions could leave the same neighboring cell overloaded.



That is the kind of problem I am exploring through a personal project in Dr. Bo Tang’s lab at Worcester Polytechnic Institute (WPI). I want to understand how agents could make useful changes to a network while staying within limits set by its operator.



This project is still taking shape. The ideas below describe the approach I am working toward and the questions I want to test.



**Give each agent a clear scope**



An agent’s job should come with specific permissions. A diagnostic agent might be allowed to read measurements and suggest a fix. An energy-management agent might propose putting certain cells to sleep. Each would need a clear set of limits on which resources it could affect, which tools it could use, and how long its permission would last.



Those limits also need to account for other agents. Two actions can each be allowed on their own and still cause a problem when they happen together. A useful governance mechanism would have to consider their combined effect.



**Check the plan before changing the network**



An instruction such as “reduce energy consumption” leaves a lot open. Which cells can be switched off? How much spare capacity must remain? Which services need protection? When should the attempt stop?



I am exploring the idea of expressing these requirements in a policy contract: a set of rules that software can check before allowing a proposed action.



The agent would produce a plan. A separate mechanism would check that plan against the contract before anything changed in the network. If the available information were too old or incomplete to support the decision, the mechanism could hold the action or ask for human review.



This separation is central to the project. It gives the agent room to find a useful solution while keeping authorization under the operator’s control.



**Match the authority to the decision**



Some network decisions allow time to compare options. Others have to meet strict timing requirements. I see a role for deliberative agents in slower management tasks, such as interpreting an operator’s goal or planning a configuration change.



In O-RAN, this could mean agents working in the management layer (SMO) or the non-real-time controller (non-RT RIC). Near-real-time applications (xApps) would act within approved policies. Closer to real-time radio control, the permitted actions would need tighter limits and predictable execution.



Timing would be one consideration. A change made at the management layer can still affect a large part of the network. The scope of the change, its possible consequences, and the available recovery options should also determine how much authority an agent receives.



**Start with energy management**



The first scenario I am exploring is agent-assisted cell sleep. An agent would suggest which cells could be put to sleep, and a separate check would decide whether the proposal met the operator’s requirements. Cells that must stay active, service requirements, and the capacity of neighboring cells would all matter.



I want to examine what happens when conditions become difficult: measurements arrive late, traffic shifts, or another agent makes a conflicting proposal. The evaluation would need to show how well the checks prevent harmful actions and how often they block useful ones.



I also want to look at recovery. If a plan causes trouble, the network needs a way to reach an acceptable operating state. I would need to test when returning to an earlier configuration helps, and when changed conditions call for a different response.



**Make decisions easier to inspect**



For each consequential action, I would want a record of what the agent proposed, which measurements it used, what permission it had, which checks were applied, and what happened afterward. That record could help an operator investigate a problem and decide what to do next.



There is also room for shared work across the wider community: common ways to describe agent permissions, record decisions, define levels of autonomy, and test interactions between agents from different providers.



For this project, the immediate goal is to turn the energy-management scenario into a way to examine those questions. I want an operator to be able to look at an agent’s action and understand what allowed it, whether its effects stayed within the agreed limits, and what recovery options remain.
