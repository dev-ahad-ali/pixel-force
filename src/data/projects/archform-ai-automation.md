---
title: "ArchForm Studio — AI Content & Proposal Automation"
overview: "An AI-powered internal automation suite for an architecture firm that cut proposal creation time from 12 hours to 90 minutes and automated project report generation, saving 20+ hours per week."
client: "ArchForm Studio"
image: "/images/projects/archform-automation.jpg"
thumbnail: "/images/projects-thumbnail/archform-automation.jpg"
category: "AI Automation"
services:
  - "AI Workflow Design"
  - "Document Automation"
  - "Prompt Engineering"
  - "Internal Tool Development"
  - "Team Training"
technologies:
  - "OpenAI API"
  - "Make (Integromat)"
  - "Google Docs API"
  - "Airtable"
  - "Notion"
  - "Slack"
keyResults:
  - metric: "Proposal Time"
    value: "12h → 90min"
    description: "Time to produce a client proposal"
  - metric: "Weekly Hours Saved"
    value: "20+ hrs"
    description: "Across the team from automated reporting"
  - metric: "Proposals Sent"
    value: "+65%"
    description: "Increase in proposal volume (same team size)"
  - metric: "Win Rate"
    value: "+18%"
    description: "Proposal win rate improvement from faster turnaround"
featured: false
publishedAt: 2025-03-01
---

## The Challenge

ArchForm Studio, a mid-sized architecture and interior design firm, was losing projects because their proposal process was too slow. Creating a tailored project proposal took a senior team member 10–12 hours — pulling reference projects, writing scope narratives, formatting documents, and assembling pricing tables. By the time a proposal went out, the client had often already moved forward with a faster competitor.

Additionally, weekly project status reports for clients were consuming 3–4 hours per project manager every Friday.

## Our Approach

### Process Documentation First

We spent the first two weeks documenting every step of the proposal creation and reporting process in exhaustive detail. Understanding the *human* process is the prerequisite for any effective automation.

Proposal steps broken down:
1. Client brief intake (form or call notes)
2. Scope definition
3. Reference project selection
4. Fee calculation
5. Narrative writing (project understanding, approach, team)
6. Document formatting and branding
7. PDF export and send

### Proposal Automation Pipeline

We built a **Make automation** triggered when a new project brief is entered into **Airtable**.

The pipeline:
- Extracts project brief details (type, scale, location, client goals)
- Queries a curated database of past projects to find the 3 most relevant references
- Sends all context to **OpenAI API** with a carefully engineered prompt to generate the narrative sections (project understanding, proposed approach, team bio selection)
- Populates a **Google Docs template** with generated content, selected reference images, and calculated fee tables
- Notifies the responsible partner in **Slack** with a link to review and finalize

The generated draft requires approximately **60–90 minutes of review and refinement** from a senior team member — versus 12 hours of creation from scratch.

### Report Automation

Weekly client reports followed a similar pattern: project managers filled out a structured update form in Notion (15 minutes), and an AI pipeline generated a professionally formatted client-facing PDF report automatically.

### Prompt Engineering

The quality of AI output was heavily dependent on prompt design. We iterated through **dozens of prompt versions** before landing on structures that consistently produced on-brand, professional narrative content that required minimal editing.

Key prompt engineering principles applied:
- Extensive persona and context setting ("You are a senior architect writing to a sophisticated commercial client...")
- Specific output format requirements
- Inclusion of firm-specific vocabulary and values
- Example outputs in the prompt (few-shot prompting)

## The Result

Proposal creation time dropped from 12 hours to **under 90 minutes**. The team immediately began sending proposals faster — and the volume of proposals sent increased **65%** in the first quarter without any new hires. Their win rate also improved by **18%**, which the partners attributed to responsiveness being a differentiator in competitive pitches.

The report automation saved each project manager **3–4 hours every Friday**, which was reinvested into billable client work.
