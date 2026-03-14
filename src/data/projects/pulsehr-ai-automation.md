---
title: "PulseHR — AI-Powered Recruitment Automation"
overview: "An end-to-end AI automation pipeline that reduced a recruitment agency's candidate screening time by 80% and enabled them to handle 3x the volume with the same team."
client: "PulseHR Recruitment"
image: "/images/projects/pulsehr-automation.jpg"
thumbnail: "/images/projects-thumbnail/pulsehr-automation.jpg"
category: "AI Automation"
services:
  - "AI Workflow Automation"
  - "Custom GPT Integration"
  - "CRM Automation"
  - "Process Consulting"
  - "Integration Development"
technologies:
  - "OpenAI API"
  - "Make (Integromat)"
  - "Airtable"
  - "Zapier"
  - "Notion"
  - "Gmail API"
keyResults:
  - metric: "Screening Time"
    value: "-80%"
    description: "Reduction in time spent on initial candidate screening"
  - metric: "Volume Handled"
    value: "3x"
    description: "More candidates processed with the same team size"
  - metric: "Response Time"
    value: "< 2 hrs"
    description: "Automated candidate acknowledgment and status updates"
  - metric: "Placement Rate"
    value: "+28%"
    description: "Improvement in placement rate due to better matching"
featured: true
publishedAt: 2025-02-01
---

## The Challenge

PulseHR was drowning in CVs. As a growing recruitment agency, they were receiving 200–400 applications per open role, but their team of 6 recruiters was spending the majority of their day on low-value screening tasks — reading CVs, sending acknowledgment emails, and manually logging candidate data into their CRM.

Senior recruiters were burning out doing administrative work instead of relationship-building and placements.

## Our Approach

### Process Mapping

We spent the first week shadowing the PulseHR team and mapping every step of their candidate pipeline — from job posting to placement. We identified four major automation opportunities:

1. **CV ingestion and initial scoring**
2. **Candidate communication sequences**
3. **CRM data entry and status tracking**
4. **Internal recruiter task routing**

### The Automation Stack

**CV Screening with AI**

We built a **Make automation** that triggers when a new application email arrives. The CV attachment is extracted and sent to the **OpenAI API** with a custom prompt engineered to:
- Extract structured data (experience, skills, location, education)
- Score the candidate against the job description on a 1–10 scale
- Generate a 3-bullet summary for the recruiter
- Flag any red flags or standout qualities

This data is then automatically written to **Airtable**, creating a scored candidate record without any human involvement.

```javascript
// Simplified scoring prompt structure
const scoringPrompt = `
You are an expert recruiter. Analyze this CV against the job description.
Return a JSON object with:
- score: number (1-10)
- summary: string[] (3 bullet points)
- skills_match: string[]
- concerns: string[]
- recommended_action: "advance" | "hold" | "reject"
`;
```

**Automated Communication**

Candidates scoring above 7 receive an automated personalized acknowledgment email (drafted by AI, sent via Gmail API) within 2 hours of application. Candidates below 4 receive a respectful rejection. The middle band enters a "hold" sequence with weekly status updates.

**Recruiter Task Routing**

High-scoring candidates are automatically assigned to the relevant recruiter in **Notion**, with a task card containing the AI summary, score, and a one-click link to schedule an interview. Recruiters start their day with a prioritized list — no inbox archaeology required.

### Training & Handoff

We ran three training sessions with the team and built a simple internal dashboard in Airtable where they could monitor the pipeline, adjust scoring thresholds, and flag AI errors for continuous improvement.

## The Result

Within 30 days of going live, PulseHR's screening time dropped by **80%**. The team was able to take on additional client accounts without hiring — effectively tripling capacity. Placement rates improved because recruiters were spending more time on high-value candidates and client relationships.

The system now processes over 2,000 applications per month autonomously.

> "It felt like hiring three new team members, except these ones work 24/7 and never complain." — *Operations Manager, PulseHR*
