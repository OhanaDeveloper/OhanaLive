import type { Worksheet } from '../types'

export const lifeSkillsWorksheets: Worksheet[] = [
  {
    id: 'financial-recovery-snapshot',
    slug: 'financial-recovery-snapshot',
    title: 'Financial Recovery Snapshot',
    subtitle: 'Start from wherever you are — no shame, just information',
    description:
      "An honest, no-judgment snapshot of your current financial situation and one practical step forward. Addiction is expensive, and recovery starts from wherever it left you.",
    category: 'life-skills',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    frequency: 'one-time',
    therapeuticFramework: ['SF', 'CBT'],
    tags: ['finances', 'debt', 'income', 'stability', 'practical', 'recovery', 'planning'],
    icon: '💵',
    color: '#8B5CF6',
    version: 1,
    relatedWorksheets: ['structure-routine-builder', 'goal-setting-recovery', 'time-audit'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'No Shame — Just Information',
        content:
          "Addiction is one of the most expensive conditions a person can have — both financially and in terms of the opportunities lost while it was running the show. The wreckage looks different for everyone: debt to family, medical bills, legal costs, lost employment, years of income not saved or invested. Some people lose everything. Some lose selectively. All of it is real.\n\nHere's what matters right now: your financial situation is not a moral verdict. It is information — data about where you are starting from. Recovery does not require a clean financial slate. It requires enough stability to support the work, and a plan for moving in a better direction.\n\nThis worksheet is not a comprehensive financial plan. It is a snapshot — an honest look at the current landscape so you can begin to navigate it. No numbers required if that feels too overwhelming right now. Just the honest picture.",
      },
      {
        type: 'reflection',
        title: 'Where I Am',
        content:
          "One honest selection. Not where you'd like to be or where you think you should be. Where you actually are.",
        fields: [
          {
            id: 'financial-current-situation',
            type: 'select',
            label: 'Current financial situation',
            options: [
              'Stable and managing',
              'Paying off debt but getting by',
              'Living paycheck to paycheck',
              'No stable income currently',
              'In significant financial crisis',
              'Other',
            ],
            required: true,
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'The Honest Picture',
        content:
          "No dollar amounts needed unless you want to include them. Just a clear picture of what you're carrying and what you're working with.",
        fields: [
          {
            id: 'financial-debts',
            type: 'textarea',
            label: 'Debts I am carrying',
            placeholder:
              "Types are enough: credit card debt, money owed to family or friends, medical bills, legal fees, overdue rent, student loans. No judgment. This is just what's there.",
          },
          {
            id: 'financial-regular-expenses',
            type: 'textarea',
            label: 'Regular expenses I need to cover',
            placeholder:
              "Housing, food, transportation, phone, utilities, medications, childcare — what does it cost to keep your life running right now?",
          },
          {
            id: 'financial-income',
            type: 'textarea',
            label: 'Income I have or am working toward',
            placeholder:
              "Current employment, benefits, support from others, gig work — what is coming in? If there is nothing right now, what steps toward income are you taking or considering?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Small Step',
        content:
          "Financial recovery does not happen in one move. It happens in consistent small steps over time. What is the most manageable step you can actually take this month?",
        fields: [
          {
            id: 'financial-next-step-description',
            type: 'textarea',
            label: 'The most manageable financial step I can take this month',
            placeholder:
              "This is not 'pay off all my debt' — it's the next right thing given where you are right now. e.g., 'Open a basic bank account.' 'Call one creditor and ask about a payment plan.' 'Get my first paycheck from the part-time job.' 'Meet with a nonprofit financial counselor.' What can you actually do?",
            required: true,
          },
          {
            id: 'financial-specific-action',
            type: 'text',
            label: 'Specific action:',
            placeholder:
              'State it as a concrete, datable action. What will you do and when?',
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Support Available',
        content:
          "You do not have to figure this out alone. Check any resources that are relevant or that you are open to exploring.",
        fields: [
          {
            id: 'financial-support-options',
            type: 'multi-select',
            label: 'Financial support I am open to exploring',
            options: [
              'Nonprofit financial counseling',
              'Talking to someone who has been through financial recovery',
              'Looking into work or income options',
              'Contacting creditors about payment plans',
              'Making a basic budget',
              'Other',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'structure-routine-builder',
    slug: 'structure-routine-builder',
    title: 'Structure & Routine Builder',
    subtitle: 'Unstructured time is one of the highest relapse risk factors — structure is protection',
    description:
      "Build a weekly structure that supports recovery and reduces the unstructured, high-risk windows that commonly precede relapse. Structure isn't punishment — it's how you protect what you've built.",
    category: 'life-skills',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    frequency: 'one-time',
    therapeuticFramework: ['CBT', 'SF'],
    tags: ['structure', 'routine', 'daily', 'schedule', 'relapse-prevention', 'planning', 'foundation'],
    icon: '🗓️',
    color: '#8B5CF6',
    featured: true,
    version: 1,
    relatedWorksheets: ['recovery-non-negotiables', 'goal-setting-recovery', 'time-audit'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Structure Protects Recovery',
        content:
          "Research on relapse consistently identifies unstructured time as one of the highest-risk factors — particularly Friday and Saturday evenings, and any time when there is no plan for the next few hours. This is not because free time is inherently dangerous. It is because in the absence of structure, the brain defaults to what it knows — and for people in early or mid-recovery, what the brain knows is often substance use.\n\nStructure does not mean rigidity. You are not building a prison schedule. You are creating enough predictability that your brain does not have to navigate each day from scratch, and enough intentional activity that the high-risk windows get filled with something better.\n\nThe research is clear: people with stronger routine in recovery have better outcomes. This worksheet helps you build that routine deliberately, including your recovery commitments as non-negotiable anchors.",
      },
      {
        type: 'reflection',
        title: 'Morning Anchor',
        content:
          "How you start the day shapes the day. A morning routine does not need to be elaborate — it needs to be consistent. Even 15–20 minutes of intentional morning practice creates stability.",
        fields: [
          {
            id: 'morning-routine',
            type: 'textarea',
            label: 'My morning routine',
            placeholder:
              "What happens between waking and starting your day? Current reality is fine. If you want to build something new, write what you want it to look like — wake time, first few actions, recovery practice, breakfast, leaving for the day. Specifics help.",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Daily Time Blocks',
        content:
          "Map the general shape of your day in four blocks. You don't need minute-by-minute precision — just a sense of what each window is for.",
        fields: [
          {
            id: 'time-block-morning',
            type: 'text',
            label: 'Morning (after your routine — until midday)',
            placeholder: "e.g., 'Work 8am–noon' or 'Job search, IOP program 9–11am'",
            required: true,
          },
          {
            id: 'time-block-midday',
            type: 'text',
            label: 'Midday',
            placeholder: "e.g., 'Lunch, walk, meeting at 12:30' — what anchors the middle of the day?",
          },
          {
            id: 'time-block-afternoon',
            type: 'text',
            label: 'Afternoon',
            placeholder: "e.g., 'Back to work until 5, pick up kids, errands'",
          },
          {
            id: 'time-block-evening',
            type: 'text',
            label: 'Evening',
            placeholder:
              "This is often the highest-risk window. What is the plan? Meeting? Time with family? Specific activity? 'Watch TV until I fall asleep' leaves this window unprotected.",
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Recovery Commitments Scheduled',
        content:
          "These are the recovery-specific elements that need to live in your schedule — not as vague intentions, but as actual time blocks that are real.",
        fields: [
          {
            id: 'recovery-scheduled',
            type: 'multi-select',
            label: 'Recovery commitments I have scheduled into my routine',
            options: [
              'Meeting time blocked in the week',
              'Therapy or counseling appointment scheduled',
              'Sponsor or mentor check-in planned',
              'Self-care practice included (exercise, meditation, journaling)',
              'One social connection planned',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Risk Windows',
        content:
          "Every person has a highest-risk unstructured window — the time when relapse is statistically most likely for them. Knowing yours and having a plan for it is essential.",
        fields: [
          {
            id: 'risk-window',
            type: 'textarea',
            label: 'The highest-risk unstructured time in my week and what I will do with it',
            placeholder:
              "When is it? Friday evenings? Sunday afternoons? The first hour home from work? What do you typically do when it arrives and no plan is in place? And what will you replace that with?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Making It Real',
        content:
          "A schedule you never look at is not a schedule. Build in a review.",
        fields: [
          {
            id: 'routine-review-frequency',
            type: 'text',
            label: "I'll review this routine:",
            placeholder: "e.g., 'Every Sunday night to plan the week ahead' or 'Monthly with my sponsor'",
          },
          {
            id: 'routine-start-date',
            type: 'date',
            label: 'Starting date:',
          },
        ],
      },
    ],
  },

  {
    id: 'goal-setting-recovery',
    slug: 'goal-setting-recovery',
    title: 'Goal Setting: Recovery Edition',
    subtitle: 'Process goals matter as much as outcomes — what will you do, not just who will you be',
    description:
      "SMART goal-setting adapted for recovery across three time horizons — 30 days, 90 days, and one year — with process goals and built-in accountability.",
    category: 'life-skills',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'one-time',
    therapeuticFramework: ['CBT', 'SF', 'PP'],
    tags: ['goals', 'planning', 'vision', 'accountability', 'recovery', 'SMART', 'future'],
    icon: '🎯',
    color: '#8B5CF6',
    version: 1,
    relatedWorksheets: ['structure-routine-builder', 'life-purpose-exploration', 'time-audit'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Goals That Work in Recovery',
        content:
          "Standard goal-setting advice often falls flat in recovery — either because the goals are too abstract ('I want to be happy') or too outcome-focused ('I want to be sober for one year').\n\nHere's what works better:\n\nProcess goals — 'what I will do' goals — are more effective than outcome goals in recovery because you control the process. You cannot guarantee outcomes. You can guarantee showing up for a meeting, calling your sponsor, doing your daily practice. These are the actions that make recovery real.\n\nTime horizons matter. 30-day goals keep you in action. 90-day goals give medium-term direction. One-year vision gives you something to be moving toward without demanding you have it all figured out.\n\nAnd accountability is not optional — it's the mechanism that makes intentions into commitments. A goal shared with a real person is twice as likely to be acted on.",
      },
      {
        type: 'prompt',
        title: '30-Day Goals',
        content:
          "What is realistic, specific, and important in the next 30 days? Choose one goal per area — not a list, just the most important one in each.",
        fields: [
          {
            id: 'goal-30-recovery',
            type: 'textarea',
            label: 'Recovery goal — next 30 days',
            placeholder:
              "e.g., 'Attend at least 4 meetings per week.' 'Complete my step work with my sponsor.' 'Be honest with my therapist about what I've been holding back.' Specific and doable.",
            required: true,
          },
          {
            id: 'goal-30-personal',
            type: 'textarea',
            label: 'Personal growth goal — next 30 days',
            placeholder:
              "e.g., 'Start a daily journaling practice of 10 minutes.' 'Take one walk every day.' 'Reach out to someone I've been avoiding.' What personal development matters most right now?",
          },
          {
            id: 'goal-30-relationship',
            type: 'textarea',
            label: 'Relationship goal — next 30 days',
            placeholder:
              "e.g., 'Have one honest conversation with my sister about how things have been.' 'Make one new sober friend from my home group.' 'Repair one specific relationship.' What relationship work is most important in the next month?",
          },
        ],
      },
      {
        type: 'prompt',
        title: '90-Day Goals',
        content:
          "What does 90 days from now look like? These goals should be stretches — doable, but requiring sustained effort.",
        fields: [
          {
            id: 'goal-90-recovery',
            type: 'textarea',
            label: 'Recovery goal — 90 days',
            placeholder:
              "Where do you want your recovery to be in three months? e.g., '90 days of consecutive sobriety.' 'Complete outpatient program.' 'Have a home group and sponsor relationship I trust.'",
            required: true,
          },
          {
            id: 'goal-90-personal',
            type: 'textarea',
            label: 'Personal growth goal — 90 days',
            placeholder:
              "What do you want to have built or started in the next three months? Skills, habits, health, learning?",
          },
          {
            id: 'goal-90-relationship',
            type: 'textarea',
            label: 'Relationship goal — 90 days',
            placeholder:
              "What relationship or community do you want to have invested in meaningfully over the next 90 days?",
          },
        ],
      },
      {
        type: 'freewrite',
        title: '1-Year Vision',
        content:
          "Look further. Where do you want to be in recovery one year from now? This is not a prediction — it's a direction.",
        fields: [
          {
            id: 'goal-1-year-recovery',
            type: 'textarea',
            label: 'Where I want to be in recovery one year from now',
            placeholder:
              "Not just 'still sober' — what does your recovery life actually look like? What are you doing? Who is in your corner? What feels different? Write with some specificity and some heart.",
            required: true,
          },
          {
            id: 'goal-1-year-built',
            type: 'textarea',
            label: 'One thing I want to have built or become by this time next year',
            placeholder:
              "A skill, a relationship, a professional direction, a version of yourself, a habit, a community role. What is the one thing you most want to be true about your life a year from now?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Process Goals',
        content:
          "Outcomes are not fully in your control. The daily and weekly practices that make them possible are. What are they?",
        fields: [
          {
            id: 'process-goals',
            type: 'textarea',
            label: 'The daily and weekly practices that will make these goals happen',
            placeholder:
              "These are the action-level commitments: what you will do regularly that creates the conditions for your goals. e.g., 'Daily prayer or meditation. Three meetings per week. Weekly sponsor call. Exercise four times per week. No contact with using friends.'",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Accountability',
        content:
          "Who knows about these goals? An unshared goal is a wish. A shared goal is a commitment.",
        fields: [
          {
            id: 'accountability-person',
            type: 'text',
            label: 'Person I will share these goals with',
            placeholder: "A specific name — sponsor, therapist, close recovery friend.",
            required: true,
          },
          {
            id: 'accountability-checkin-date',
            type: 'date',
            label: 'First check-in date',
          },
        ],
      },
    ],
  },

  {
    id: 'difficult-conversation-planner',
    slug: 'difficult-conversation-planner',
    title: 'Difficult Conversation Planner',
    subtitle: 'Recovery requires hard conversations — go in prepared',
    description:
      "A structured planner for amends, boundary-setting, asking for help, or being honest about a struggle. Know what you need to say, consider their perspective, draft your words, and plan self-care after.",
    category: 'life-skills',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'CBT'],
    tags: ['communication', 'amends', 'boundaries', 'relationships', 'honesty', 'preparation'],
    icon: '💬',
    color: '#8B5CF6',
    featured: true,
    version: 1,
    relatedWorksheets: ['authenticity-audit', 'goal-setting-recovery', 'time-audit'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Difficult Conversations Belong in Recovery',
        content:
          "Recovery requires a category of conversation that most of us find hard: amends that carry real accountability, not just apology. Setting a boundary with someone who has come to rely on your people-pleasing. Asking for help from someone you have damaged through your addiction. Being honest with a sponsor, therapist, or partner about something you have been hiding.\n\nThese conversations are not obstacles to recovery. They are recovery. The willingness to have them — prepared and present — is what builds the relationships, the trust, and the integrity that sustain long-term sobriety.\n\nThis planner walks you through the key elements: what you need to say, their perspective, a draft of your actual words, and what you need afterward. Going in prepared does not eliminate the discomfort — but it significantly reduces the chance of the conversation going sideways because you were not ready.",
      },
      {
        type: 'prompt',
        title: 'The Conversation',
        content:
          "Be specific about what this conversation is actually about. Vague intentions produce vague outcomes.",
        fields: [
          {
            id: 'conversation-who',
            type: 'text',
            label: 'Who am I talking to?',
            placeholder: "A first name or a relationship description (e.g., 'my sister,' 'my sponsor')",
            required: true,
          },
          {
            id: 'conversation-what-to-say',
            type: 'textarea',
            label: 'What I need to say',
            placeholder:
              "The core of the conversation. Not the full script — the essential thing that needs to be communicated. What must they understand or hear from you?",
            required: true,
          },
          {
            id: 'conversation-desired-outcome',
            type: 'textarea',
            label: 'What outcome I am hoping for',
            placeholder:
              "Being honest about your hopes helps you notice when you are trying to control the conversation's outcome rather than simply having it. What would you like to come from this? And can you hold that desire loosely enough to let the other person respond freely?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Their Perspective',
        content:
          "The hardest conversations go better when you arrive with genuine curiosity about the other person's experience. This section asks you to do that work before the conversation.",
        fields: [
          {
            id: 'their-perspective',
            type: 'textarea',
            label: 'How might they be feeling? What might they need from this conversation?',
            placeholder:
              "Not what you hope they feel — what you genuinely think they might be experiencing given the full context. Are they hurt? Cautious? Guarded? Defensive? Longing to reconnect? What do they need in order to feel heard, not just talked at?",
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'Script Draft',
        content:
          "Write it out in your own words — how you would actually say it. Not perfect. Not polished. Just honest and real. You can refine it, but get a first draft down.",
        fields: [
          {
            id: 'script-draft',
            type: 'textarea',
            label: "What I'll actually say, in my own words",
            placeholder:
              "Start wherever feels natural. 'I wanted to talk to you because...' or 'I've been wanting to say this for a while...' or just start with the thing. Write it the way you'd say it to them directly.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'After the Conversation',
        content:
          "Hard conversations take something out of you — even when they go well. Planning for after means you are not left depleted and at risk.",
        fields: [
          {
            id: 'after-self-care',
            type: 'textarea',
            label: 'How I will take care of myself after, regardless of how it goes',
            placeholder:
              "What is your plan for the next hour after this conversation ends? A walk? Calling someone you trust? Journaling? Meeting? Know in advance what you'll do with the emotion — good or hard.",
            required: true,
          },
          {
            id: 'after-debrief-person',
            type: 'text',
            label: 'Who I will call to debrief with',
            placeholder: "Someone safe who can hear how it went without judgment.",
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Pre-Conversation Check',
        content:
          "Two last preparation steps before you have the conversation.",
        fields: [
          {
            id: 'pre-conversation-out-loud',
            type: 'checkbox',
            label: "I have read this out loud to myself at least once",
          },
          {
            id: 'pre-conversation-told-someone',
            type: 'checkbox',
            label: "I have told someone I trust that I am having this conversation",
          },
        ],
      },
    ],
  },

  {
    id: 'time-audit',
    slug: 'time-audit',
    title: 'Time Audit & Recovery Balance',
    subtitle: 'Where your time goes is where your life goes',
    description:
      "A weekly audit of how you are actually spending your time, how much is going to recovery, and what one reallocation would make the most difference.",
    category: 'life-skills',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'weekly',
    therapeuticFramework: ['CBT', 'SF'],
    tags: ['time', 'audit', 'balance', 'recovery', 'priorities', 'weekly', 'self-awareness'],
    icon: '⏱️',
    color: '#8B5CF6',
    version: 1,
    relatedWorksheets: ['structure-routine-builder', 'goal-setting-recovery', 'boredom-purpose-finder'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Time Is the Most Honest Mirror',
        content:
          "You can tell what actually matters to someone by looking at how they spend their time — not by asking them what matters. There is often a significant gap between stated priorities ('my recovery is my number one priority') and actual time allocation ('I go to about one meeting per week and recovery is maybe 3 hours of my week').\n\nThis is not a judgment. It is data — and data you can act on.\n\nThe time audit is a weekly practice from productivity research, adapted here for recovery. Where did your time actually go? How much genuinely went to recovery? Where are the time thieves? What one shift would bring your time allocation into better alignment with what you say matters?\n\nDo this weekly for a month and you will know exactly what your schedule is teaching your brain about what your priorities actually are.",
      },
      {
        type: 'freewrite',
        title: 'Hour Tracker',
        content:
          "Rough estimates are fine. The goal is an honest overall picture, not a perfect accounting.",
        fields: [
          {
            id: 'time-breakdown',
            type: 'textarea',
            label: "Approximate breakdown of this week's time",
            placeholder:
              "Work or school: ___hours\nRecovery activities (meetings, therapy, sponsor calls, step work): ___hours\nSelf-care (exercise, sleep preparation, journaling, meditation): ___hours\nSocial connection (family, friends, community): ___hours\nRest and leisure: ___hours\nScreens and passive time (social media, streaming): ___hours\nOther: ___hours\n\nFill in your honest estimates.",
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'Recovery Time Check',
        content:
          "Of the time you spent this week, how much of it was quality time for your recovery — not just technically sober, but actively investing in staying well?",
        fields: [
          {
            id: 'recovery-time-quality',
            type: 'slider',
            label: 'Quality time invested in recovery this week (1 = almost none, 10 = strong investment)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'recovery-time-theft',
            type: 'textarea',
            label: 'What took time away from recovery this week?',
            placeholder:
              "This is not about blame — it's about clarity. What happened in your schedule this week that crowded out recovery time? Was it expected or unexpected? Avoidable or not?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Time Thieves',
        content:
          "Time thieves are the patterns and activities that consistently consume more time than you intend to give them — and often at the expense of what you actually care about.",
        fields: [
          {
            id: 'time-thieves-select',
            type: 'multi-select',
            label: 'My current time thieves',
            options: [
              'Social media',
              'Overworking or inability to stop working',
              'Isolation and withdrawal',
              'Passive TV and streaming',
              'Anxiety or rumination spirals',
              'People-pleasing and others\' crises',
              'Other',
            ],
          },
          {
            id: 'biggest-time-thief',
            type: 'textarea',
            label: 'My biggest time thief right now and how it affects recovery',
            placeholder:
              "Name it specifically — not just 'social media' but 'I pick up my phone when I'm anxious and lose 2 hours.' What does it steal from? What does it cost your recovery?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Shift',
        content:
          "Not a complete schedule overhaul. One specific reallocation that would meaningfully improve your recovery balance.",
        fields: [
          {
            id: 'time-one-shift',
            type: 'text',
            label: 'One time reallocation I will make next week',
            placeholder:
              "Specific — from what, to what. e.g., 'Move 1 hour of evening scrolling to attending a 7pm meeting.' 'Use my lunch break on Wednesday for a 20-minute walk and sponsor call instead of eating at my desk.' Name the trade.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'boredom-purpose-finder',
    slug: 'boredom-purpose-finder',
    title: 'Boredom & Purpose Finder',
    subtitle: 'Boredom is a top relapse trigger — let\'s rebuild what fills the space',
    description:
      "An honest look at boredom's role in your recovery, a process for rebuilding genuine interests, and an emergency list for high-risk boredom moments.",
    category: 'life-skills',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'PP', 'ACT'],
    tags: ['boredom', 'purpose', 'interests', 'relapse-prevention', 'activity', 'meaning', 'idle-time'],
    icon: '🎲',
    color: '#8B5CF6',
    version: 1,
    relatedWorksheets: ['structure-routine-builder', 'life-purpose-exploration', 'recovery-non-negotiables'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Boredom and Recovery',
        content:
          "Boredom is consistently identified as one of the top relapse triggers — not because recovery is boring, but because people in early and mid-recovery often find themselves in an uncomfortable position: substances were the activity, and without them, the interest-and-pleasure systems of the brain need time to rebuild.\n\nDopamine receptors that were hijacked by substance use are slowly recalibrating. Natural rewards — food, connection, accomplishment, beauty — can feel flat or inadequate for weeks or months. This is a biological reality, not a personal failing. The brain heals, but it takes time.\n\nIn the meantime, boredom is not just uncomfortable — it is genuinely risky. 'I had nothing to do' is one of the most common precursors to relapse. The antidote is not forcing yourself to feel enthusiastic about activities you don't care about. It is patient exploration — trying things, building new neural grooves, and giving yourself permission to be a beginner.\n\nThis worksheet helps you take boredom seriously as a recovery issue and build something real in its place.",
      },
      {
        type: 'scale',
        title: 'The Honest Check',
        content:
          "Start with where you actually are.",
        fields: [
          {
            id: 'boredom-level',
            type: 'slider',
            label: 'Boredom level in my life right now (1 = very engaged, 10 = extremely bored)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'boredom-what-it-feels-like',
            type: 'textarea',
            label: "What does boredom feel like for me? What do I do when I'm bored?",
            placeholder:
              "Be honest. Is boredom restless, empty, anxious, flat? What is your automatic response to it — phone, eating, sleep, isolation, calling an old contact? Understanding your specific boredom pattern is the first step.",
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Rebuild Your Interest List',
        content:
          "Check anything that genuinely interests you — even slightly, even if you haven't tried it. You are not committing to anything. You are building a list of possibilities.",
        fields: [
          {
            id: 'interest-possibilities',
            type: 'multi-select',
            label: 'Activities I am genuinely curious about trying',
            options: [
              'Learning an instrument',
              'Cooking new things',
              'Hiking and spending time outdoors',
              'Creative writing',
              'Painting or drawing',
              'Photography',
              'Volunteering',
              'Starting a podcast or YouTube channel',
              'Joining a sports team or recreational league',
              'Learning a new language',
              'Woodworking',
              'Coding or tech skills',
              'Gardening',
              'Reading challenges',
              'Other',
            ],
          },
          {
            id: 'genuine-curiosities',
            type: 'textarea',
            label: '3 things I am genuinely curious about',
            placeholder:
              "Not what sounds good, not what you think you should care about — what actually pulls at your curiosity right now? Even a vague pull is worth writing down. e.g., 'I've always been curious what it would feel like to run a 5K.' 'I'd like to learn how to build something with my hands.' 'I want to find a community I actually feel at home in.'",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Service',
        content:
          "One of the most reliable antidotes to boredom and meaninglessness in recovery is service — contributing to others in a way that matters. This is well-documented across recovery traditions and psychological research.",
        fields: [
          {
            id: 'service-opportunity',
            type: 'textarea',
            label: 'One way I could help others that would fill my time with meaning',
            placeholder:
              "This does not have to be formal or grand. Could be showing up early to set up chairs at a meeting. Checking in on someone new to recovery. Volunteering at a food bank. Mentoring a younger person. What specific help could you offer that would also give your time meaning?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Emergency Boredom List',
        content:
          "This is for the moment when boredom hits fast and you feel at risk. You need five specific things you can do in the next 10 minutes — real, concrete, available right now.",
        fields: [
          {
            id: 'emergency-boredom-1',
            type: 'text',
            label: 'Emergency option 1 — something I can do in 10 minutes right now',
            placeholder: "e.g., 'Text my sponsor just to check in'",
            required: true,
          },
          {
            id: 'emergency-boredom-2',
            type: 'text',
            label: 'Emergency option 2',
            placeholder: "e.g., 'Walk around the block once'",
            required: true,
          },
          {
            id: 'emergency-boredom-3',
            type: 'text',
            label: 'Emergency option 3',
            placeholder: "e.g., 'Put on a specific song and move'",
            required: true,
          },
          {
            id: 'emergency-boredom-4',
            type: 'text',
            label: 'Emergency option 4',
            placeholder: "e.g., 'Open a journal and write for 5 minutes'",
            required: true,
          },
          {
            id: 'emergency-boredom-5',
            type: 'text',
            label: 'Emergency option 5',
            placeholder: "e.g., 'Call someone just to hear a human voice'",
            required: true,
          },
        ],
      },
    ],
  },
]
