import type { Worksheet } from '../types'

export const relationshipsWorksheets: Worksheet[] = [
  {
    id: 'relationship-inventory',
    slug: 'relationship-inventory',
    title: 'Relationship Inventory',
    subtitle: 'Know which relationships support your recovery — and which don\'t',
    description:
      'A thorough inventory of the key relationships in your life, assessing each for safety, support, and recovery impact. Includes boundary needs, investment priorities, and honest reflection on what to repair or release.',
    category: 'relationships',
    difficulty: 'advanced',
    estimatedMinutes: 40,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'TI'],
    tags: ['inventory', 'relationships', 'support-network', 'boundaries', 'safety', 'TI'],
    icon: '🧩',
    color: '#5B8FA8',
    featured: true,
    version: 1,
    relatedWorksheets: ['boundary-builder', 'trust-reconstruction', 'codependency-check-in'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Relationships Are Central to Recovery',
        content:
          "Research on addiction and recovery consistently shows that relationship quality is one of the strongest predictors of long-term recovery success. The people around you shape your environment, your nervous system regulation, your self-concept, and your access to support when crisis hits.\n\nNot all relationships help recovery. Some actively threaten it. Some are complicated — they provide real connection AND create real risk. Many people in recovery are navigating relationships scarred by the behavior of active addiction on both sides.\n\nThis inventory is about clarity, not judgment. The goal isn't to decide who is 'good' or 'bad' — it's to see honestly what each relationship currently costs and provides, and to make intentional choices about where to invest your limited relational energy.\n\nThis is an advanced worksheet. It asks for honesty that can be uncomfortable. Consider doing it with a therapist, sponsor, or trusted mentor if that feels right.",
      },
      {
        type: 'reflection',
        title: 'The Inventory — Relationship 1',
        content:
          "Work through up to three key relationships in your life. Start with the one that has the most impact on your recovery — for better or worse.",
        fields: [
          {
            id: 'relationship-1-name',
            type: 'text',
            label: 'Person\'s name or initial',
            placeholder: 'Name or initial',
            required: true,
          },
          {
            id: 'relationship-1-type',
            type: 'select',
            label: 'Relationship type',
            options: [
              'Sponsor or mentor',
              'Family member',
              'Romantic partner',
              'Friend',
              'Co-worker',
              'Recovery community member',
              'Other',
            ],
            required: true,
          },
          {
            id: 'relationship-1-recovery-support',
            type: 'slider',
            label: 'This relationship supports my recovery',
            min: 1,
            max: 10,
          },
          {
            id: 'relationship-1-safety',
            type: 'slider',
            label: 'I feel safe being honest with this person',
            min: 1,
            max: 10,
          },
          {
            id: 'relationship-1-after-feeling',
            type: 'textarea',
            label: 'How I feel after spending time with this person',
            placeholder:
              "Describe your emotional state after you see them or talk to them. Energized? Depleted? Anxious? Supported? Triggered? Be honest.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Inventory — Relationship 2',
        content:
          "Second relationship in your inventory.",
        fields: [
          {
            id: 'relationship-2-name',
            type: 'text',
            label: 'Person\'s name or initial',
            placeholder: 'Name or initial',
          },
          {
            id: 'relationship-2-type',
            type: 'select',
            label: 'Relationship type',
            options: [
              'Sponsor or mentor',
              'Family member',
              'Romantic partner',
              'Friend',
              'Co-worker',
              'Recovery community member',
              'Other',
            ],
          },
          {
            id: 'relationship-2-recovery-support',
            type: 'slider',
            label: 'This relationship supports my recovery',
            min: 1,
            max: 10,
          },
          {
            id: 'relationship-2-safety',
            type: 'slider',
            label: 'I feel safe being honest with this person',
            min: 1,
            max: 10,
          },
          {
            id: 'relationship-2-after-feeling',
            type: 'textarea',
            label: 'How I feel after spending time with this person',
            placeholder: 'Emotional state after contact — honest and specific.',
          },
        ],
        optional: true,
      },
      {
        type: 'reflection',
        title: 'The Inventory — Relationship 3',
        content:
          "Third relationship in your inventory.",
        fields: [
          {
            id: 'relationship-3-name',
            type: 'text',
            label: 'Person\'s name or initial',
            placeholder: 'Name or initial',
          },
          {
            id: 'relationship-3-type',
            type: 'select',
            label: 'Relationship type',
            options: [
              'Sponsor or mentor',
              'Family member',
              'Romantic partner',
              'Friend',
              'Co-worker',
              'Recovery community member',
              'Other',
            ],
          },
          {
            id: 'relationship-3-recovery-support',
            type: 'slider',
            label: 'This relationship supports my recovery',
            min: 1,
            max: 10,
          },
          {
            id: 'relationship-3-safety',
            type: 'slider',
            label: 'I feel safe being honest with this person',
            min: 1,
            max: 10,
          },
          {
            id: 'relationship-3-after-feeling',
            type: 'textarea',
            label: 'How I feel after spending time with this person',
            placeholder: 'Emotional state after contact — honest and specific.',
          },
        ],
        optional: true,
      },
      {
        type: 'reflection',
        title: 'Boundary Needs',
        content:
          "A boundary is not a punishment or a wall — it is a statement about how you need to be treated in order to stay healthy. Most people in recovery have at least one relationship where a clearer boundary would change everything.",
        fields: [
          {
            id: 'boundary-needed-relationship',
            type: 'textarea',
            label: 'One relationship where I need a clearer boundary',
            placeholder:
              "Who is it and what is currently happening? Be specific — not 'my family' but 'my mother calling me daily to check if I\'m using.'",
            required: true,
          },
          {
            id: 'boundary-what-it-is',
            type: 'textarea',
            label: 'What that boundary specifically is',
            placeholder:
              "Not a vague aspiration but a clear statement: 'I will not answer calls when I\'m in early evening — that\'s my vulnerable time.' What specifically are you committing to?",
          },
          {
            id: 'boundary-fear',
            type: 'textarea',
            label: 'What I\'m afraid will happen if I set it',
            placeholder:
              "Name the fear. Loss of the relationship? Conflict? Disappointment? Their pain? These fears are worth examining honestly.",
          },
        ],
      },
      {
        type: 'ranking',
        title: 'Investment Guide',
        content:
          "For each relationship you inventoried — and any others significant to your recovery — what does the honest next step look like?",
        fields: [
          {
            id: 'investment-guide',
            type: 'multi-select',
            label: 'Across my relationships, the actions I need to take include:',
            options: [
              'Invest more in at least one relationship',
              'Maintain some relationships as they are',
              'Set a boundary in at least one relationship',
              'Create more distance in at least one relationship',
              'Reassess at least one relationship in a few months',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Repair or Release',
        content:
          "Two of the most important and difficult relationship questions in recovery.",
        fields: [
          {
            id: 'relationship-worth-repairing',
            type: 'textarea',
            label: 'One relationship worth repairing — and why',
            placeholder:
              "What relationship has enough mutual care and potential that the effort of repair is worth it? What makes you believe it can be different?",
          },
          {
            id: 'relationship-may-need-releasing',
            type: 'textarea',
            label: 'One relationship you may need to release — and what that would take',
            placeholder:
              "This doesn't have to be permanent. But sometimes a relationship is incompatible with your recovery in its current form. What would 'release' look like — and what would you need to do it?",
          },
        ],
      },
    ],
  },

  {
    id: 'making-amends',
    slug: 'making-amends',
    title: 'Making Amends Worksheet',
    subtitle: 'Prepare a real amend — not just an apology',
    description:
      "An amend is different from an apology: it is about demonstrated change, not just words. This worksheet helps you assess readiness for a specific amend, prepare what you want to say, clarify the living amend going forward, and care for yourself regardless of the response.",
    category: 'relationships',
    difficulty: 'advanced',
    estimatedMinutes: 30,
    frequency: 'one-time',
    therapeuticFramework: ['twelve-step', 'CBT'],
    tags: ['amends', 'twelve-step', 'repair', 'forgiveness', 'accountability', 'step-9'],
    icon: '🤝',
    color: '#7A9E7E',
    version: 1,
    relatedWorksheets: ['forgiveness-exploration', 'trust-reconstruction', 'relationship-inventory'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Amends vs. Apology',
        content:
          "An apology says 'I'm sorry.' An amend says 'I understand the harm I caused, and I am changing.' The difference matters.\n\nAmends — particularly in the Twelve Step tradition — are about action, not words. You can apologize and stay exactly the same. An amend is a commitment to be different, demonstrated over time through behavior.\n\nThere's another important consideration: not all amends should be made. Some amends cause more harm than they repair. If telling someone the truth about what you did would hurt them more than it helps — if the amend is really about relieving YOUR guilt at their expense — it may not be the right time or approach.\n\nThis worksheet is a readiness and preparation tool. It is designed to be used alongside guidance from a sponsor, therapist, or trusted counselor — not instead of it. If you haven't talked to someone about this specific amend, consider doing that first.",
      },
      {
        type: 'checklist',
        title: 'Readiness Check',
        content:
          "Before preparing an amend, check your readiness honestly. All of these conditions matter.",
        fields: [
          {
            id: 'amends-readiness',
            type: 'multi-select',
            label: 'Readiness indicators I can honestly check off',
            options: [
              "I've discussed this amend with my sponsor, therapist, or counselor",
              "I'm doing this for them — to repair harm — not primarily to relieve my own guilt",
              "I've genuinely considered whether this amend could cause more harm than good",
              "I'm prepared for any response, including anger, rejection, or silence",
              "I'm not expecting or requiring forgiveness — I understand I cannot control their response",
            ],
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Amend',
        content:
          "Work through one specific amend here. Be specific — vague amends are less meaningful and harder to prepare for.",
        fields: [
          {
            id: 'amends-person',
            type: 'text',
            label: 'Person I harmed',
            placeholder: 'Name or initial',
            required: true,
          },
          {
            id: 'amends-what-i-did',
            type: 'textarea',
            label: 'What specifically I did that caused harm',
            placeholder:
              "Be specific and take full responsibility. Not 'I wasn't there for you' but 'I missed your graduation because I was using. I never called to explain or apologize.'",
            required: true,
          },
          {
            id: 'amends-impact-on-them',
            type: 'textarea',
            label: 'How I believe it impacted them',
            placeholder:
              "From their perspective, not yours. What did it feel like for them? What did they lose? What did they have to carry because of what you did?",
            required: true,
          },
          {
            id: 'amends-what-to-say',
            type: 'textarea',
            label: 'What I want to say — write it out',
            placeholder:
              "Draft your amend in your own words. Include: acknowledgment of the harm, taking full responsibility (no 'but' or 'because'), and what you are committed to doing differently.",
            required: true,
          },
          {
            id: 'amends-living-amend',
            type: 'textarea',
            label: 'The living amend — how my behavior will change going forward',
            placeholder:
              "An amend is not complete in the conversation — it continues in your actions. What specific behavioral changes will demonstrate that this was real? What will be different?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Timing and Approach',
        content:
          "How and when this amend happens matters — both for its effectiveness and for the safety and wellbeing of the person you harmed.",
        fields: [
          {
            id: 'amends-approach',
            type: 'select',
            label: 'Best approach for this amend',
            options: [
              'In person',
              'By letter or written message',
              'Through a mutual support person',
              "Not yet — more time and preparation needed",
            ],
            required: true,
          },
          {
            id: 'amends-timing-rationale',
            type: 'textarea',
            label: 'Why this timing and approach — what guides this choice',
            placeholder:
              "What makes this the right approach for this person and this harm? What makes you ready now or not ready yet?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Aftercare for You',
        content:
          "Making an amend can be one of the most vulnerable things you do in recovery. You deserve care too — whatever their response.",
        fields: [
          {
            id: 'amends-aftercare',
            type: 'textarea',
            label: 'How I\'ll take care of myself regardless of their response',
            placeholder:
              "Who will you call after? What will you do? How will you process whatever happens — acceptance, rejection, or something in between? Plan for your own wellbeing.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'boundary-builder',
    slug: 'boundary-builder',
    title: 'Boundary Builder',
    subtitle: 'Set one real boundary using the DBT DEAR MAN framework',
    description:
      'A structured guide to understanding, identifying, and setting a specific boundary using DBT\'s DEAR MAN interpersonal effectiveness framework. Includes a script-drafting section and self-care planning for afterward.',
    category: 'relationships',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'CBT'],
    tags: ['boundaries', 'DEAR-MAN', 'DBT', 'assertiveness', 'communication', 'self-respect'],
    icon: '🛡️',
    color: '#C07B54',
    version: 1,
    relatedWorksheets: ['communication-audit', 'relationship-inventory', 'codependency-check-in'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Boundaries Are Self-Respect in Action',
        content:
          "A boundary is not a wall, a punishment, or a rejection. It is a statement about what you need in order to show up in a relationship as a whole person. Setting boundaries is an act of self-respect — and paradoxically, it is also a gift to the people in your life, because it allows you to stay in relationships that might otherwise become untenable.\n\nMany people in recovery have difficulty with boundaries. Active addiction often erodes them — either because using required violating others' or your own, or because you attracted or created relationships where boundaries weren't safe or possible.\n\nBoundaries in recovery serve a specific function: they protect your sobriety. A relationship that consistently destabilizes your recovery isn't a relationship you can maintain in the same way. That's not cruelty — it's reality.\n\nThis worksheet walks you through a boundary audit and then builds a specific boundary using DBT's DEAR MAN framework — a structured approach to asking for what you need while preserving the relationship.",
      },
      {
        type: 'scale',
        title: 'Boundary Audit',
        content:
          "Before focusing on one boundary, take stock of how you're doing across five key relationship areas.",
        fields: [
          {
            id: 'boundary-family',
            type: 'select',
            label: 'Family relationships — current boundary health',
            options: [
              'Clear and consistently maintained',
              'Unclear but actively working on it',
              'Largely nonexistent',
              'Being regularly violated',
            ],
          },
          {
            id: 'boundary-romantic',
            type: 'select',
            label: 'Romantic relationship — current boundary health',
            options: [
              'Clear and consistently maintained',
              'Unclear but actively working on it',
              'Largely nonexistent',
              'Being regularly violated',
              'Not applicable',
            ],
          },
          {
            id: 'boundary-friendships',
            type: 'select',
            label: 'Friendships — current boundary health',
            options: [
              'Clear and consistently maintained',
              'Unclear but actively working on it',
              'Largely nonexistent',
              'Being regularly violated',
            ],
          },
          {
            id: 'boundary-work',
            type: 'select',
            label: 'Work relationships — current boundary health',
            options: [
              'Clear and consistently maintained',
              'Unclear but actively working on it',
              'Largely nonexistent',
              'Being regularly violated',
              'Not applicable',
            ],
          },
          {
            id: 'boundary-recovery-community',
            type: 'select',
            label: 'Recovery community — current boundary health',
            options: [
              'Clear and consistently maintained',
              'Unclear but actively working on it',
              'Largely nonexistent',
              'Being regularly violated',
              'Not applicable',
            ],
          },
        ],
      },
      {
        type: 'prompt',
        title: 'DEAR MAN — Building the Boundary',
        content:
          "Choose one specific boundary you need to set. Work through the DEAR MAN framework for it.\n\n**D — Describe:** State the facts of the situation objectively, without interpretation.\n**E — Express:** Share how it affects you using 'I' statements.\n**A — Assert:** Be direct about what you need or want.\n**R — Reinforce:** Explain what's in it for both of you.\n**M — Mindful:** Stay focused on your goal.\n**A — Appear confident:** Your posture, tone, and delivery communicate conviction.\n**N — Negotiate:** Be willing to find a middle ground.",
        fields: [
          {
            id: 'dear-man-describe',
            type: 'textarea',
            label: 'D — Describe the situation factually',
            placeholder:
              "Just the facts, no judgment. e.g., 'When you call me after 10pm to talk about your problems, I often can\'t sleep afterward.' Not 'you always dump on me at night.'",
            required: true,
          },
          {
            id: 'dear-man-express',
            type: 'textarea',
            label: 'E — Express how you feel using \'I\' statements',
            placeholder:
              "I feel... I notice... Not 'you make me feel.' e.g., 'I feel anxious and unsettled when I go to bed worked up from those conversations, and it affects my sleep and my recovery the next day.'",
            required: true,
          },
          {
            id: 'dear-man-assert',
            type: 'textarea',
            label: 'A — Assert what you need or want, directly',
            placeholder:
              "Clear, specific, direct. e.g., 'I need us to have a boundary around late-night calls unless it\'s a genuine emergency. I\'m asking you to reach out before 9pm for support conversations.'",
            required: true,
          },
          {
            id: 'dear-man-reinforce',
            type: 'textarea',
            label: 'R — Reinforce — why this is good for both of you',
            placeholder:
              "What does the boundary protect in the relationship? What does it allow you to continue giving? e.g., 'This will help me be actually present for you when we do talk, instead of depleted.'",
          },
          {
            id: 'dear-man-mindful',
            type: 'textarea',
            label: 'M — How you\'ll stay Mindful during the conversation',
            placeholder:
              "What's your plan if they deflect, argue, guilt-trip, or change the subject? How will you return to your goal without escalating?",
          },
          {
            id: 'dear-man-appear-confident',
            type: 'checkbox',
            label: 'I commit to appearing confident — steady voice, direct eye contact, upright posture — even if I feel anxious inside',
          },
          {
            id: 'dear-man-negotiate',
            type: 'textarea',
            label: 'N — What you\'re willing to negotiate, and what you\'re not',
            placeholder:
              "Where is there flexibility? What is non-negotiable? Knowing this in advance prevents you from giving away the core of the boundary under pressure.",
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'Your Script',
        content:
          "Put it all together in your own voice. Write out what you will actually say — conversationally, not as bullet points. Practice it until it sounds like you.",
        fields: [
          {
            id: 'boundary-script',
            type: 'textarea',
            label: 'What I will say — in my own words',
            placeholder:
              "Write the full opening statement as you would actually say it to this person. Natural, direct, yours.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Self-Care After',
        content:
          "Setting a boundary — especially a new one — can be emotionally taxing regardless of how it goes. Plan for it.",
        fields: [
          {
            id: 'boundary-aftercare',
            type: 'textarea',
            label: 'How I\'ll take care of myself after this conversation, whatever the outcome',
            placeholder:
              "Who will you debrief with? What will you do to decompress? How will you process both positive and negative responses?",
          },
        ],
      },
    ],
  },

  {
    id: 'trust-reconstruction',
    slug: 'trust-reconstruction',
    title: 'Trust Reconstruction Plan',
    subtitle: 'Rebuild trust through consistent action, not promises',
    description:
      'Trust broken by active addiction takes time and consistent behavioral evidence to rebuild. This worksheet helps you honestly assess what was broken, plan concrete actions, set realistic expectations, and address the self-trust dimension often overlooked in recovery.',
    category: 'relationships',
    difficulty: 'advanced',
    estimatedMinutes: 30,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'TI'],
    tags: ['trust', 'repair', 'accountability', 'relationships', 'consistency', 'self-trust'],
    icon: '🔧',
    color: '#6B8FA8',
    version: 1,
    relatedWorksheets: ['making-amends', 'relationship-inventory', 'healthy-relationship-patterns'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'How Trust Actually Rebuilds',
        content:
          "Trust is not rebuilt through promises, apologies, or grand gestures — no matter how sincere. Trust is rebuilt through accumulated evidence of consistent behavior over time. This is one of the most important and difficult realities for people in recovery to accept.\n\nThe people in your life who were hurt by your addiction are not wrong to be cautious. They've seen the behavior before. They've heard the promises before. What they haven't yet seen is the person you're becoming — and that takes time to demonstrate.\n\nHere's what research on trust repair shows: consistency matters more than intensity. Showing up reliably every day for months does more than one dramatic gesture. Small, kept promises accumulate. Missed ones erase progress quickly.\n\nThere is also another kind of trust to rebuild: self-trust. Many people in recovery have also betrayed themselves — made promises to themselves they didn't keep, reached limits they thought they wouldn't reach. This worksheet addresses both.",
      },
      {
        type: 'reflection',
        title: 'Honest Assessment',
        content:
          "Before building a plan, get clear on what was actually broken. Vague repair plans don't work.",
        fields: [
          {
            id: 'trust-person',
            type: 'text',
            label: 'Who I want to rebuild trust with',
            placeholder: 'Name or initial',
            required: true,
          },
          {
            id: 'trust-what-broke',
            type: 'textarea',
            label: 'What specific trust was broken — in behavioral, concrete terms',
            placeholder:
              "Not 'I hurt them' but specifically: lies told, commitments broken, times I disappeared, money taken, events missed, ways I made them feel unsafe. The specifics matter for repair.",
            required: true,
          },
          {
            id: 'trust-their-experience',
            type: 'textarea',
            label: 'What I understand it felt like for them',
            placeholder:
              "From their perspective. What was the emotional impact? What did they lose beyond the specific incidents? What did they have to do or become to survive your active addiction?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Concrete Actions',
        content:
          "Trust is rebuilt through action, not words. What you DO consistently over time is the only real evidence available.",
        fields: [
          {
            id: 'trust-actions',
            type: 'textarea',
            label: 'Specific actions — not words — that will demonstrate change over time',
            placeholder:
              "List them. Be concrete. 'Be where I say I\'ll be.' 'Return calls within the day.' 'Show up to scheduled events.' 'Tell the truth even when it\'s uncomfortable.' 'Not ask to borrow money.' What specific behaviors will constitute evidence?",
            required: true,
          },
          {
            id: 'trust-timeline',
            type: 'text',
            label: 'Realistic timeline expectation',
            placeholder:
              "How long do you genuinely think this will take? Trust that took years to break doesn't come back in weeks.",
          },
          {
            id: 'trust-what-i-need',
            type: 'textarea',
            label: 'What I need from them for this to work',
            placeholder:
              "Even trust repair is two-way. What do you need from them — patience, communication about what helps, a chance to show up? Not demands, but honest needs.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What May Not Return',
        content:
          "One of the most important — and painful — conversations in recovery is about limits. Not every relationship fully recovers. Holding on to an unrealistic expectation of complete restoration can undermine the real progress being made.",
        fields: [
          {
            id: 'trust-limits',
            type: 'textarea',
            label: 'Being honest: some trust may take years, or may not fully return. How do I sit with that?',
            placeholder:
              "What does it stir up? Grief, acceptance, motivation, denial? There's no right answer — just honest engagement with this reality.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Rebuilding Self-Trust',
        content:
          "People in recovery often focus entirely on rebuilding trust with others while neglecting the equally important work of rebuilding trust with themselves. You may have betrayed your own values, made promises to yourself you couldn't keep, lost faith in your own word.",
        fields: [
          {
            id: 'self-trust-what',
            type: 'textarea',
            label: 'The trust I need to rebuild with myself — what does it look like?',
            placeholder:
              "What would it mean to trust yourself again? What promises to yourself have been broken that need rebuilding? What actions — kept consistently — would help you believe in your own word again?",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'codependency-check-in',
    slug: 'codependency-check-in',
    title: 'Codependency Check-In',
    subtitle: 'Recognize where you end and others begin',
    description:
      'Codependency — losing yourself in someone else\'s pain or recovery — is common in addiction contexts and often rooted in earlier family dynamics. This worksheet helps identify codependent patterns, trace their origins, and clarify what healthy support actually looks like.',
    category: 'relationships',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'TI'],
    tags: ['codependency', 'boundaries', 'enabling', 'self-care', 'patterns', 'family-of-origin'],
    icon: '🔗',
    color: '#A07B9E',
    version: 1,
    relatedWorksheets: ['boundary-builder', 'healthy-relationship-patterns', 'relationship-inventory'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Codependency Actually Means',
        content:
          "Codependency is a pattern — common in families affected by addiction — of organizing your emotional life around someone else's. You feel responsible for their feelings. Your mood depends on theirs. You give advice, manage, rescue, enable — and you lose track of yourself in the process.\n\nIt's often invisible because it looks like love. And there is love in it. But codependency is love in a form that doesn't actually help the other person — and that costs you your own life.\n\nIn addiction contexts, codependency is complicated because the line between genuine care and enabling can be blurry. You can love someone deeply AND your behavior may be making it easier for them to stay sick. That's a painful reality.\n\nCodependent patterns often started young — in a household where someone else's emotional state determined the weather. Where you learned to scan the room, manage moods, stay small, or be needed. Recovery is an opportunity to unlearn those patterns.\n\nThis isn't about blame. It's about clarity.",
      },
      {
        type: 'checklist',
        title: 'Signs Check',
        content:
          "Check what resonates. Be honest. These are patterns, not character flaws.",
        fields: [
          {
            id: 'codependency-signs',
            type: 'multi-select',
            label: 'Patterns I recognize in myself',
            options: [
              "I feel responsible for other people's emotions",
              'I say yes when I mean no',
              'I give advice no one asked for',
              "I feel guilty when others are unhappy, even when I didn't cause it",
              "I need others to be okay before I can feel okay",
              "My mood depends heavily on someone else's mood",
              "I've been called controlling or enabling",
              'I am drawn to people who need to be rescued',
              "I don't know what I want because I'm focused on what others need",
              'Other',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Person I\'m Most Codependent With',
        content:
          "Codependency usually has a primary relationship. Name yours — even if it's uncomfortable.",
        fields: [
          {
            id: 'codependency-primary-person',
            type: 'text',
            label: 'Name or initial',
            placeholder: 'The person where this pattern is most active',
            required: true,
          },
          {
            id: 'codependency-specific-behaviors',
            type: 'textarea',
            label: 'What I do in this relationship that crosses from support into codependency',
            placeholder:
              "Be specific. 'I cancel my plans when they\'re upset.' 'I lie to protect them from consequences.' 'I can\'t relax when they\'re struggling.' What exactly are the crossing-the-line behaviors?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Where I End',
        content:
          "This is one of the core questions of codependency work: where do you end and the other person begin? What is actually your responsibility versus theirs?",
        fields: [
          {
            id: 'codependency-where-i-end',
            type: 'textarea',
            label: 'In this relationship, my feelings and responsibilities end at:',
            placeholder:
              "Try to draw a clear line. What is yours to feel and do? What belongs to them? e.g., 'I am responsible for my sobriety. I am not responsible for their sobriety.' Or: 'I can offer support once. Whether they take it is theirs to decide.'",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Healthy Support',
        content:
          "Codependency is often mistaken for love or loyalty. Real support is possible without losing yourself in it.",
        fields: [
          {
            id: 'codependency-healthy-support',
            type: 'textarea',
            label: 'What does healthy support look like for this person? How is that different from what I\'m currently doing?',
            placeholder:
              "What would it look like to care for this person WITHOUT taking responsibility for their wellbeing? What changes? What stays the same? What do you get back?",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'communication-audit',
    slug: 'communication-audit',
    title: 'Communication Style Audit',
    subtitle: 'Identify your patterns and build toward assertiveness',
    description:
      'A practical audit of your communication style across four patterns — passive, aggressive, passive-aggressive, and assertive — with a real-life example rewrite and a concrete assertiveness practice plan.',
    category: 'relationships',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'CBT'],
    tags: ['communication', 'assertiveness', 'passive', 'aggressive', 'DBT', 'relationships'],
    icon: '💬',
    color: '#6BAB9A',
    version: 1,
    relatedWorksheets: ['boundary-builder', 'codependency-check-in', 'relationship-inventory'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Four Communication Styles',
        content:
          "Communication style is one of the most trainable skills in recovery — and one of the most consequential for relationships.\n\n**Passive:** You give away your needs to avoid conflict. You say 'I don't mind' when you do mind. You let others decide and then quietly resent it. You communicate through absence, withdrawal, or silence. Short-term: less conflict. Long-term: resentment builds, needs go unmet, relationships become unequal.\n\n**Aggressive:** You prioritize your needs at the expense of others'. You raise your voice, get sarcastic, steamroll, or intimidate. Short-term: you may get what you want. Long-term: people close off, fear replaces trust, relationships erode.\n\n**Passive-Aggressive:** You agree but don't follow through. You give the silent treatment. You make cutting remarks wrapped in plausible deniability. You express hostility indirectly. This is often the style that develops when direct communication feels unsafe or has been punished.\n\n**Assertive:** You express your needs clearly and respectfully, while acknowledging the other person's needs. You say what you mean. You hold your position under pressure without escalating. This is the target style — and it is a learnable skill, not a personality trait.",
      },
      {
        type: 'checklist',
        title: 'Style Inventory',
        content:
          "Check the behaviors you recognize in yourself. Most people have more than one pattern — often context-dependent.",
        fields: [
          {
            id: 'comm-style-passive',
            type: 'multi-select',
            label: 'PASSIVE behaviors I recognize in myself',
            options: [
              "I often avoid conflict even when it's genuinely important",
              "I say 'I don't mind' or 'whatever you want' when I actually do have a preference",
              "I let others make decisions rather than sharing what I want",
            ],
          },
          {
            id: 'comm-style-aggressive',
            type: 'multi-select',
            label: 'AGGRESSIVE behaviors I recognize in myself',
            options: [
              'I sometimes raise my voice, get sarcastic, or use a tone that shuts others down',
              "I've been told I'm too blunt, harsh, or intense in how I communicate",
              "I get frustrated or cutting when people don't do what I want",
            ],
          },
          {
            id: 'comm-style-passive-aggressive',
            type: 'multi-select',
            label: 'PASSIVE-AGGRESSIVE behaviors I recognize in myself',
            options: [
              "I agree to things and then don't follow through",
              'I give the silent treatment when I\'m upset instead of saying so directly',
              "I make sarcastic or cutting comments instead of stating what's really bothering me",
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Real Example',
        content:
          "Bring a specific recent situation to mind where you communicated in a way you regret.",
        fields: [
          {
            id: 'comm-real-example',
            type: 'textarea',
            label: 'A recent situation where I communicated in a way I regret',
            placeholder:
              "What happened? Who was involved? What did you say or not say? What was the result?",
            required: true,
          },
          {
            id: 'comm-style-used',
            type: 'select',
            label: 'The communication style I was using',
            options: ['Passive', 'Aggressive', 'Passive-aggressive'],
            required: true,
          },
          {
            id: 'comm-assertive-rewrite',
            type: 'textarea',
            label: 'Rewritten as assertive communication — what you wish you had said',
            placeholder:
              "Rewrite your part of the interaction assertively. Express your actual need or feeling clearly and directly, without attack or withdrawal. Your own words.",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Assertiveness Practice',
        content:
          "Assertive communication improves through practice. Pick one real opportunity coming up this week.",
        fields: [
          {
            id: 'comm-practice-situation',
            type: 'text',
            label: 'One situation this week where I\'ll practice assertive communication',
            placeholder:
              "Specific. Not 'be more assertive' but 'tell my supervisor I can\'t stay late on Friday' or 'tell my partner what I actually want to do this weekend.'",
            required: true,
          },
          {
            id: 'comm-practice-what-ill-say',
            type: 'textarea',
            label: 'What I will say — draft it in advance',
            placeholder:
              "Write out the opening sentence or two in your own words. Assertive, direct, respectful.",
          },
        ],
      },
    ],
  },

  {
    id: 'forgiveness-exploration',
    slug: 'forgiveness-exploration',
    title: 'Forgiveness Exploration',
    subtitle: 'Release the weight — for yourself, not for them',
    description:
      "Forgiveness in recovery is not about condoning harm or reconciling with people who are unsafe. It is about releasing yourself from the weight of carrying resentment. This advanced worksheet explores forgiveness of others and self at your own pace.",
    category: 'relationships',
    difficulty: 'advanced',
    estimatedMinutes: 45,
    frequency: 'as-needed',
    therapeuticFramework: ['TI', 'ACT', 'PP'],
    tags: ['forgiveness', 'resentment', 'self-forgiveness', 'TI', 'ACT', 'healing'],
    icon: '🕊️',
    color: '#8B9EC4',
    version: 1,
    relatedWorksheets: ['making-amends', 'healthy-relationship-patterns', 'relationship-inventory'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Forgiveness Is — and Isn\'t',
        content:
          "Forgiveness is one of the most misunderstood concepts in recovery. Let's be clear about what it is not:\n\n- It is not saying what happened was okay.\n- It is not reconciling with someone who is still unsafe.\n- It is not forgetting.\n- It is not something you do for them.\n\nForgiveness is the process of releasing yourself from carrying the weight of what happened. It is a choice — sometimes made repeatedly — to stop letting what someone did continue to occupy space in your present life.\n\nThe research is clear: carrying chronic resentment and unforgiveness is correlated with higher stress hormones, worse physical health, and — in recovery research — higher relapse risk. Resentment is one of the leading relapse triggers identified in the Twelve Step tradition for exactly this reason.\n\nSelf-forgiveness is equally important — and often harder. Many people in recovery carry crushing shame and self-judgment about things done during active addiction. Self-forgiveness is not excusing what happened; it is creating the psychological space to change.\n\nThis worksheet moves at your pace. Not ready is okay. This is exploration, not performance.",
      },
      {
        type: 'reflection',
        title: 'The Inventory',
        content:
          "Who do you need to forgive? Take your time with this list.",
        fields: [
          {
            id: 'forgiveness-inventory-who',
            type: 'textarea',
            label: 'Who do I need to forgive? (Include yourself)',
            placeholder:
              "Name everyone — family, partners, people who hurt you, people who failed you. Include yourself on the list. You don't need to be ready to forgive. You just need to name who's on the list.",
            required: true,
          },
          {
            id: 'forgiveness-what-happened',
            type: 'textarea',
            label: 'For the person carrying the most weight: what happened?',
            placeholder:
              "The specific harm, the specific event or pattern. What did they do or fail to do? What would you need someone to understand about this?",
          },
          {
            id: 'forgiveness-what-it-cost',
            type: 'textarea',
            label: 'What it cost you',
            placeholder:
              "What was taken, damaged, or lost? Don't minimize. This part matters.",
          },
        ],
      },
      {
        type: 'scale',
        title: 'The Cost of Holding On',
        content:
          "Before deciding anything about forgiveness, get honest about what carrying this is costing you right now.",
        fields: [
          {
            id: 'forgiveness-carrying-cost',
            type: 'textarea',
            label: 'What does carrying this resentment or pain cost me right now?',
            placeholder:
              "In your body, your mood, your recovery, your relationships. What energy goes into maintaining this? What does it crowd out?",
          },
          {
            id: 'forgiveness-recovery-energy',
            type: 'slider',
            label: 'Energy this takes from my recovery and daily life',
            min: 1,
            max: 10,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Not Ready Is Okay',
        content:
          "Forgiveness cannot be forced. Pretending to forgive when you're not ready is not forgiveness — it's suppression. This section is for anyone who is genuinely not ready.",
        fields: [
          {
            id: 'forgiveness-not-ready',
            type: 'textarea',
            label: 'If you\'re not ready: what would need to be true for you to be open to forgiveness someday?',
            placeholder:
              "Not a commitment to forgive — just honest exploration of what the path might eventually look like. What would have to happen? What would you need to understand or feel differently?",
          },
        ],
        optional: true,
      },
      {
        type: 'reflection',
        title: 'Self-Forgiveness',
        content:
          "This is often the hardest part. The person you may have harmed most consistently is yourself.",
        fields: [
          {
            id: 'self-forgiveness-what',
            type: 'textarea',
            label: 'The thing I most need to forgive myself for',
            placeholder:
              "The one that carries the most weight. The one that comes up when you\'re alone. Not for performance — for honesty.",
            required: true,
          },
          {
            id: 'self-forgiveness-allows',
            type: 'textarea',
            label: 'What self-forgiveness might allow me to do or become',
            placeholder:
              "If you weren't carrying this weight — what would be different? What becomes possible? What could you invest in that resentment or shame currently blocks?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'One Small Release',
        content:
          "You don't have to forgive everything today. You don't have to be ready. But sometimes there's one small thing — a corner of the weight — that you could loosen your grip on just slightly. Not drop. Just hold a little less tightly.",
        fields: [
          {
            id: 'forgiveness-small-release',
            type: 'text',
            label: 'One thing I\'m willing to loosen my grip on, just a little, today',
            placeholder:
              "Small is fine. Real is better than ambitious. What can you hold slightly more loosely today?",
          },
        ],
      },
    ],
  },

  {
    id: 'healthy-relationship-patterns',
    slug: 'healthy-relationship-patterns',
    title: 'Healthy vs. Unhealthy Patterns',
    subtitle: 'Recognize what you\'ve learned — and choose something different',
    description:
      "Addiction often shapes relationship patterns: we attract what's familiar, not always what's healthy. This worksheet maps recurring patterns in your relationships, traces where they came from, and builds a concrete template for what healthy looks like.",
    category: 'relationships',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'TI', 'ACT'],
    tags: ['patterns', 'relationships', 'attachment', 'TI', 'family-of-origin', 'change'],
    icon: '🌱',
    color: '#7BAA7B',
    version: 1,
    relatedWorksheets: ['codependency-check-in', 'trust-reconstruction', 'communication-audit'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why We Repeat Relationship Patterns',
        content:
          "Human beings are pattern-learning machines. From our earliest relationships — with caregivers, family, the household we grew up in — we develop templates for what relationships are supposed to feel like. These templates become the lens through which we interpret and create our adult relationships.\n\nActive addiction often amplifies unhealthy patterns. Using selects for and reinforces certain relationship dynamics: chaos, emotional unavailability, volatility, enabling, people-pleasing. People often describe the 'familiar' feeling of unhealthy relationships as a kind of comfort — even when they're painful.\n\nThe good news: patterns are learned, not hardwired. They can be changed. But change requires being able to see the pattern clearly — which is exactly what this worksheet is designed to help with.\n\nThere's no shame in having learned unhealthy patterns. Almost everyone in recovery has. The question is what you want to do with what you know.",
      },
      {
        type: 'checklist',
        title: 'Pattern Recognition',
        content:
          "Check any patterns you recognize in your relationship history — romantic, family, friendships. Be honest.",
        fields: [
          {
            id: 'relationship-patterns-recognized',
            type: 'multi-select',
            label: 'Patterns I recognize in my relationships',
            options: [
              'I move fast in new relationships — intense connection early',
              'I lose myself in partners — my identity merges with theirs',
              'I push people away before they can leave me',
              'I am drawn to people who need fixing or rescuing',
              'I avoid intimacy or vulnerability even in close relationships',
              'I repeat similar conflicts across different relationships',
              'I confuse intensity or drama with love',
              'I stay too long in unhealthy dynamics after they have become clear',
              'Other',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Where It Came From',
        content:
          "Patterns don't appear from nowhere. Tracing origins isn't about assigning blame — it's about understanding. Understanding creates choice.",
        fields: [
          {
            id: 'pattern-origin',
            type: 'textarea',
            label: 'Where did I first learn this relationship pattern?',
            placeholder:
              "Childhood family dynamics, early relationships, active addiction years. Who modeled this pattern? What environment made it adaptive? How did it make sense at the time, even if it doesn\'t serve you now?",
            required: true,
          },
        ],
      },
      {
        type: 'matrix',
        title: 'The Healthy Template',
        content:
          "For three key relationship dimensions, describe what you've actually lived — and what healthy looks like for you going forward.",
        fields: [
          {
            id: 'template-trust-unhealthy',
            type: 'textarea',
            label: 'TRUST — Unhealthy version I have lived',
            placeholder:
              "How has trust worked (or not worked) in your relationships? What patterns around trust-breaking, suspicious behavior, or inability to rely on people?",
          },
          {
            id: 'template-trust-healthy',
            type: 'textarea',
            label: 'TRUST — What healthy looks like for me',
            placeholder:
              "Not a dictionary definition. What would it feel like to trust someone in a healthy way? What behaviors would demonstrate trustworthiness to you specifically?",
          },
          {
            id: 'template-communication-unhealthy',
            type: 'textarea',
            label: 'COMMUNICATION — Unhealthy version I have lived',
            placeholder:
              "How has communication looked in your closest relationships? Yelling? Silence? Manipulation? Avoidance? Walking on eggshells?",
          },
          {
            id: 'template-communication-healthy',
            type: 'textarea',
            label: 'COMMUNICATION — What healthy looks like for me',
            placeholder:
              "What does it feel like when communication is working? What are the specific conditions and behaviors that make communication healthy for you?",
          },
          {
            id: 'template-boundaries-unhealthy',
            type: 'textarea',
            label: 'BOUNDARIES — Unhealthy version I have lived',
            placeholder:
              "Enmeshment, boundary violations, enabling, no limits, walls instead of boundaries. What has the unhealthy version looked like?",
          },
          {
            id: 'template-boundaries-healthy',
            type: 'textarea',
            label: 'BOUNDARIES — What healthy looks like for me',
            placeholder:
              "What does healthy boundaried connection feel like? How is it different from walls? How is it different from no limits?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Committed Change',
        content:
          "You can't change every pattern at once. Choose the most important one and one person to help you stay accountable.",
        fields: [
          {
            id: 'pattern-change-commitment',
            type: 'text',
            label: 'One relationship pattern I am committed to changing',
            placeholder:
              "Specific and behavioral. Not 'be better in relationships' but 'stop pursuing relationships with people who need rescuing' or 'practice being honest when something bothers me instead of going silent.'",
            required: true,
          },
          {
            id: 'pattern-change-accountability',
            type: 'text',
            label: 'One person I trust to help me stay accountable to this',
            placeholder: 'Name — and how you\'ll involve them',
          },
        ],
      },
    ],
  },
]
