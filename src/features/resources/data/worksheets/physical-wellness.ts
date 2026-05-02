import type { Worksheet } from '../types'

export const physicalWellnessWorksheets: Worksheet[] = [
  {
    id: 'sleep-hygiene',
    slug: 'sleep-hygiene',
    title: 'Sleep Hygiene Assessment',
    subtitle: 'Sleep is not optional in recovery',
    description:
      'Assess your current sleep patterns, identify what is interfering, and build a concrete nightly routine. Chronic sleep deprivation significantly increases cravings and relapse risk — this is a recovery issue, not just a comfort one.',
    category: 'physical-wellness',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'weekly',
    therapeuticFramework: ['CBT', 'somatic'],
    tags: ['sleep', 'routine', 'cravings', 'relapse-prevention', 'physical', 'self-care'],
    icon: '🌙',
    color: '#F43F5E',
    featured: true,
    version: 1,
    relatedWorksheets: ['stress-response-body-map', 'movement-mood-log', 'recovery-fitness-vision'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Sleep Is a Recovery Issue',
        content:
          "Sleep deprivation and substance use disorders have a bidirectional relationship — each makes the other worse. Substances disrupt normal sleep architecture, which means that even after getting sober, many people experience disrupted, unsatisfying sleep for weeks or months. The brain's sleep systems need time to recalibrate.\n\nHere's what the research is clear about: chronic sleep deprivation significantly increases craving intensity, reduces impulse control, impairs emotional regulation, and raises relapse risk. If you are not sleeping, your recovery is working with a significant handicap.\n\nSleep hygiene — the set of habits that support consistent, quality sleep — is not about being fussy about your bedtime. It is a recovery tool. The practices are simple and evidence-based. The consistency is what makes them work.",
      },
      {
        type: 'scale',
        title: 'Current Sleep Audit',
        content:
          "An honest assessment of where you are. Not where you'd like to be — where you actually are right now.",
        fields: [
          {
            id: 'sleep-hours-last-night',
            type: 'slider',
            label: 'Hours of sleep last night',
            min: 4,
            max: 12,
            required: true,
          },
          {
            id: 'sleep-quality',
            type: 'slider',
            label: 'Quality of sleep (1 = very poor, 10 = excellent)',
            min: 1,
            max: 10,
          },
          {
            id: 'sleep-problems',
            type: 'multi-select',
            label: 'Sleep problems I experience regularly',
            options: [
              'Takes over 30 minutes to fall asleep',
              'Wake up multiple times during the night',
              'Wake up too early and cannot go back to sleep',
              'Vivid dreams or nightmares',
              'Racing thoughts at bedtime',
              'Cannot wind down in the evening',
              'Oversleeping or sleeping too long',
              'Other',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Interference Check',
        content:
          "These are the most common sleep-disrupting factors. A few honest answers here tell you where to focus first.",
        fields: [
          {
            id: 'screen-time-before-bed',
            type: 'select',
            label: 'Screen time in the hour before bed',
            options: [
              'None',
              'Under 30 minutes',
              '30–60 minutes',
              '1–2 hours',
              '2+ hours',
            ],
          },
          {
            id: 'caffeine-last-drink',
            type: 'select',
            label: 'Last caffeine of the day',
            options: [
              'Before noon',
              'Noon–3pm',
              '3pm–6pm',
              'After 6pm',
            ],
          },
          {
            id: 'substances-affecting-sleep',
            type: 'checkbox',
            label: 'Alcohol or substances are currently affecting my sleep',
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Your Sleep Protocol',
        content:
          "These are evidence-based sleep hygiene practices. Check what you are already doing, and mark what you want to add. You don't need all of them — you need the right ones consistently.",
        fields: [
          {
            id: 'sleep-protocol-checklist',
            type: 'multi-select',
            label: 'Sleep practices I use or will build into my nightly routine',
            options: [
              'Consistent bedtime every night',
              'No screens in the 30 minutes before bed',
              'A wind-down ritual (same sequence each night)',
              'Cool and dark sleeping environment',
              'No caffeine after 2pm',
              'Journaling or worry-dump before bed',
              'Reading (not on a screen)',
              'Other',
            ],
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Your Target and First Change',
        content:
          "Pick a target sleep window and identify the one change that will most improve your sleep this week. Not everything at once — just the highest-leverage single shift.",
        fields: [
          {
            id: 'target-bedtime',
            type: 'text',
            label: 'Target bedtime',
            placeholder: 'e.g., 10:30pm — choose a time you can realistically maintain',
            required: true,
          },
          {
            id: 'target-wake-time',
            type: 'text',
            label: 'Target wake time',
            placeholder: 'e.g., 6:30am — aim for 7–9 hours',
            required: true,
          },
          {
            id: 'sleep-change-this-week',
            type: 'textarea',
            label: 'One sleep change I will make this week',
            placeholder:
              "Specific and doable. 'I will put my phone in a different room at 10pm' is more actionable than 'improve my sleep hygiene.' What single change will make the most difference?",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'movement-mood-log',
    slug: 'movement-mood-log',
    title: 'Movement for Mood Log',
    subtitle: 'Build your personal evidence base for movement and recovery',
    description:
      "A daily log tracking movement type, duration, and mood before and after. Research is consistent — even 10 minutes of movement significantly improves mood and reduces cravings. This log makes that visible in your own data.",
    category: 'physical-wellness',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    frequency: 'daily',
    therapeuticFramework: ['CBT', 'somatic', 'PP'],
    tags: ['movement', 'mood', 'exercise', 'cravings', 'daily', 'habit', 'data'],
    icon: '🏃',
    color: '#F43F5E',
    version: 1,
    relatedWorksheets: ['sleep-hygiene', 'recovery-fitness-vision', 'sobriety-body-timeline'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Track Movement and Mood Together?',
        content:
          "The research on exercise and addiction recovery is unusually consistent: aerobic exercise reduces craving intensity, decreases anxiety and depression, improves sleep, increases dopamine availability (disrupted by substance use), and improves impulse control. Even a 10-minute walk has measurable mood effects.\n\nBut knowing research is not the same as knowing your own body's response. This log is designed to build your personal evidence base — so when the voice in your head says 'exercise won't help, nothing will,' you have your own data to counter it.\n\nKeep it simple. Five minutes to log. Over time, the pattern becomes visible: movement reliably shifts something. That pattern becomes motivation.",
      },
      {
        type: 'prompt',
        title: "Today's Movement",
        content:
          "Log what you actually did today — even if it was just a short walk. Anything counts. The goal is not athletic performance; it's consistent awareness.",
        fields: [
          {
            id: 'movement-what-i-did',
            type: 'text',
            label: 'What I did',
            placeholder:
              "e.g., 'Walked to the corner store and back,' '20 minutes of yoga,' '30-minute bike ride,' 'Played with my kids for 15 minutes'",
            required: true,
          },
          {
            id: 'movement-duration',
            type: 'select',
            label: 'Duration',
            options: [
              'Under 5 minutes',
              '5–10 minutes',
              '10–20 minutes',
              '20–30 minutes',
              '30–60 minutes',
              '60+ minutes',
            ],
            required: true,
          },
          {
            id: 'movement-intensity',
            type: 'select',
            label: 'Intensity',
            options: [
              'Light (stroll, gentle stretching)',
              'Moderate (brisk walk, yoga, casual bike ride)',
              'Vigorous (run, swim laps, weights, sports)',
            ],
          },
        ],
      },
      {
        type: 'scale',
        title: 'Mood Shift',
        content:
          "Rate your mood before and after — honestly. This is the core data point.",
        fields: [
          {
            id: 'mood-before-movement',
            type: 'slider',
            label: 'Mood BEFORE movement (1 = very low, 10 = very good)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'mood-after-movement',
            type: 'slider',
            label: 'Mood AFTER movement (1 = very low, 10 = very good)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'movement-what-i-noticed',
            type: 'textarea',
            label: 'What I noticed',
            placeholder:
              "Did anything shift? Were cravings affected? Did anxiety change? Did you feel different in your body? Even 'I don't notice much difference yet' is useful data.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Weekly Pattern',
        content:
          "After you have logged for a week, come back and look at the big picture.",
        optional: true,
        fields: [
          {
            id: 'movement-weekly-pattern',
            type: 'textarea',
            label: "Looking at my logs: what's the relationship between movement and my emotional state?",
            placeholder:
              "What patterns do you see? Does more movement reliably produce better mood? Does skipping movement show up in your numbers? Are certain types of movement more effective? What has this week's data shown you?",
          },
        ],
      },
    ],
  },

  {
    id: 'nutrition-recovery-checkin',
    slug: 'nutrition-recovery-checkin',
    title: 'Nutrition & Recovery Check-In',
    subtitle: 'Nourishing your body is part of healing — not a diet plan',
    description:
      "A weekly self-awareness check-in on eating patterns and how they affect recovery. Not about dieting or perfection — about noticing what your body needs and responding with care.",
    category: 'physical-wellness',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'weekly',
    therapeuticFramework: ['somatic', 'CBT'],
    tags: ['nutrition', 'eating', 'self-care', 'body', 'mood', 'healing', 'nourishment'],
    icon: '🥗',
    color: '#F43F5E',
    version: 1,
    relatedWorksheets: ['movement-mood-log', 'sleep-hygiene', 'sobriety-body-timeline'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Nutrition Is a Recovery Issue',
        content:
          "This is not a diet plan. This worksheet does not tell you what to eat, how much to eat, or what to eliminate. It is a self-awareness tool.\n\nHere is what is worth knowing: active addiction depletes the body. Nutritional deficiencies are extremely common — B vitamins, magnesium, zinc, omega-3s, and protein are frequently affected. Early recovery can bring erratic blood sugar, intense sugar cravings (as the brain seeks dopamine through sugar when it can no longer get it through substances), and eating patterns that swung from barely eating to overeating.\n\nNone of this requires perfection. What it requires is attention. Regular, real food — consistent meals, decent hydration, some protein — supports the brain chemistry that is rebuilding. Skipping meals destabilizes blood sugar and mood, both of which affect cravings.\n\nThis check-in is about noticing, not judging.",
      },
      {
        type: 'scale',
        title: 'This Week in Food',
        content:
          "Rate your patterns this week — not how you'd like them to be, how they actually were.",
        fields: [
          {
            id: 'nutrition-meal-regularity',
            type: 'slider',
            label: 'Regularity of meals (1 = skipping most meals, 10 = eating consistently at regular times)',
            min: 1,
            max: 10,
          },
          {
            id: 'nutrition-hydration',
            type: 'slider',
            label: 'Hydration (1 = barely drinking water, 10 = drinking consistently throughout the day)',
            min: 1,
            max: 10,
          },
          {
            id: 'nutrition-patterns-noticed',
            type: 'textarea',
            label: 'What I noticed about my eating patterns this week',
            placeholder:
              "Any patterns? Skipping meals when stressed? Eating compulsively? Forgetting to eat? Relying on sugar and caffeine? Going for comfort foods? Or eating more consistently than usual? No judgment — just what you noticed.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Mood-Food Connection',
        content:
          "The relationship between what you eat and how you feel is real and bidirectional. Mood affects eating choices. Eating choices affect mood. Both matter in recovery.",
        fields: [
          {
            id: 'mood-food-connection',
            type: 'textarea',
            label: 'Did my mood affect my eating? Did my eating affect my mood?',
            placeholder:
              "Examples: 'I skipped lunch when I was anxious and then my mood tanked around 4pm and cravings spiked.' 'I ate more consistently this week and my energy was noticeably more stable.' 'I turned to sugar when I was stressed and then felt worse an hour later.' What connections did you notice?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Self-Compassion Check',
        content:
          "Most people have complicated relationships with food — including shame, rules, restriction and overindulgence cycles. Recovery is not the time to add another source of self-criticism.",
        fields: [
          {
            id: 'nutrition-self-compassion',
            type: 'textarea',
            label: 'Where am I judging myself about eating? What would I say to a friend instead?',
            placeholder:
              "If a close friend told you they'd been eating the way you ate this week, what would you say to them? Not to excuse harmful patterns, but to respond with the same warmth you'd offer someone you love. Write that version.",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Nourishing Thing',
        content:
          "Not a perfect eating plan. One specific, achievable thing that would nourish your body this week.",
        fields: [
          {
            id: 'nutrition-one-thing',
            type: 'text',
            label: 'One specific thing I will do this week to nourish my body',
            placeholder:
              "e.g., 'Eat breakfast before leaving the house each morning.' 'Keep a water bottle with me.' 'Eat a real lunch three days this week instead of nothing.' Small and specific.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'sobriety-body-timeline',
    slug: 'sobriety-body-timeline',
    title: 'Sobriety & The Body Timeline',
    subtitle: 'Physical healing in recovery is real — here is your evidence',
    description:
      "Map the physical changes your body has experienced since getting sober. A motivation tool for hard days — a reminder that the healing you may have stopped noticing is still happening.",
    category: 'physical-wellness',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['PP', 'somatic'],
    tags: ['body', 'healing', 'timeline', 'motivation', 'sobriety', 'physical', 'progress'],
    icon: '📈',
    color: '#F43F5E',
    version: 1,
    relatedWorksheets: ['movement-mood-log', 'nutrition-recovery-checkin', 'recovery-fitness-vision'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Body Heals — and Keeps Healing',
        content:
          "The physical healing that happens in sobriety is well-documented and often dramatic — particularly in the first two years. Liver function improves. Sleep architecture gradually normalizes. Skin and complexion change. Cognitive clarity returns. Weight often stabilizes. Chronic pain patterns shift.\n\nBut here's the thing: we stop noticing these changes. We adapt to our new baseline and forget what the old one felt like. Then a hard day arrives, and the voice says 'this isn't worth it' — and we don't have access to the evidence.\n\nThis worksheet creates that evidence record. You will map what your body was like in active addiction and what has changed, marker by marker, as sobriety has progressed. Keep it. Read it on the days when the voice says nothing is different.",
      },
      {
        type: 'reflection',
        title: 'Before Recovery',
        content:
          "Go back honestly to the physical reality of active addiction. This part is not meant to be punishing — it's meant to give you a real before to compare against.",
        fields: [
          {
            id: 'physical-before-recovery',
            type: 'textarea',
            label: 'Physical state in active addiction',
            placeholder:
              "Cover whatever is relevant for you: sleep quality, energy levels, skin, weight, digestion, cognitive clarity, chronic pain, withdrawal symptoms, how your body felt waking up each morning, physical health problems. Be honest. You don't have to share this with anyone.",
            required: true,
          },
        ],
      },
      {
        type: 'timeline',
        title: 'Changes Over Time',
        content:
          "For each time marker that applies to your sobriety, note any physical changes you experienced. Not all markers will be relevant — use the ones that match your actual timeline.",
        fields: [
          {
            id: 'body-changes-1-week',
            type: 'textarea',
            label: 'At 1 week sober — physical changes I noticed',
            placeholder:
              "Early changes: sleep disruption, withdrawal symptoms ending, first real food, initial physical discomfort or relief. What do you remember or know about this phase?",
          },
          {
            id: 'body-changes-1-month',
            type: 'textarea',
            label: 'At 1 month sober — physical changes I noticed',
            placeholder:
              "Skin often begins to clear. Sleep slowly improves. Energy begins returning in early ways. Weight may be shifting. What changed in your first month?",
          },
          {
            id: 'body-changes-3-months',
            type: 'textarea',
            label: 'At 3 months sober — physical changes I noticed',
            placeholder:
              "Liver enzymes often begin normalizing around this point. Sleep architecture improving. Cognitive clarity increasing — the 'fog' lifting. What did you notice at 3 months?",
          },
          {
            id: 'body-changes-6-months',
            type: 'textarea',
            label: 'At 6 months sober — physical changes I noticed',
            placeholder:
              "Significant neurological healing underway. Better emotional regulation. More consistent energy. What was different at 6 months?",
          },
          {
            id: 'body-changes-1-year',
            type: 'textarea',
            label: 'At 1 year sober — physical changes I noticed',
            placeholder:
              "Many people describe feeling 'like themselves' physically again around the one-year mark. What was present at one year that wasn't before?",
          },
          {
            id: 'body-changes-now',
            type: 'textarea',
            label: 'Now — my current physical state compared to active addiction',
            placeholder:
              "Right now, today. What is physically different about being in your body now compared to then? Be specific.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: "What's Still Healing",
        content:
          "Healing is not always complete, even years into recovery. Some systems take longer. Acknowledging what is still in process is honest — and it's also motivation to keep going.",
        fields: [
          {
            id: 'body-still-healing',
            type: 'textarea',
            label: "Physical areas that are still recovering",
            placeholder:
              "Liver function, sleep, dental health, weight, chronic pain, digestive issues, cognitive function — what is still in process? This is not a failure. This is the body continuing to work. What is it working on?",
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Your Motivation Drawer',
        content:
          "This section exists to be read on hard days. When you are tempted to forget how far you've come, this is where you come back.",
        fields: [
          {
            id: 'motivation-drawer',
            type: 'textarea',
            label: 'Keep these physical changes here. Read this on hard days.',
            placeholder:
              "Summarize the most significant physical changes from before recovery to now. Write it as a reminder to yourself — the person reading this on a hard day who needs evidence that sobriety has been worth it.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'stress-response-body-map',
    slug: 'stress-response-body-map',
    title: 'Stress Response Body Map',
    subtitle: 'Your body signals stress before your mind knows it',
    description:
      "Map where stress lives in your body, connect physical sensations to emotional states, and build a release toolkit for each area. Earlier body-based warning means earlier intervention.",
    category: 'physical-wellness',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['somatic', 'CBT'],
    tags: ['body', 'stress', 'somatic', 'tension', 'nervous-system', 'self-awareness', 'release'],
    icon: '🧠',
    color: '#F43F5E',
    version: 1,
    relatedWorksheets: ['sleep-hygiene', 'movement-mood-log', 'nutrition-recovery-checkin'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Body Knows First',
        content:
          "Your nervous system processes threat and stress before your conscious mind does. The amygdala — your brain's alarm system — fires and triggers a physical response (muscle tension, shallow breathing, elevated heart rate, gut tightening) before the thinking brain has even registered what's happening.\n\nThis means your body is giving you early warning signals that, if you learn to read them, give you more lead time to intervene before you're in full crisis mode.\n\nMany people in recovery have spent years ignoring or overriding their body's signals — because substances managed those signals for them. Part of recovery is reclaiming access to your body as an information system.\n\nThis worksheet maps your personal stress geography: where it shows up, what it's connected to, and how to release it before it builds.",
      },
      {
        type: 'body-scan',
        title: 'The Body Map',
        content:
          "For each area of the body, notice and select the sensation most present when you are under stress. If you can, bring a recent stressful situation to mind as you work through each area.",
        fields: [
          {
            id: 'body-map-jaw',
            type: 'select',
            label: 'Jaw — sensation most present under stress',
            options: ['Tension', 'Tightness', 'Pain', 'Nausea', 'Heat', 'Cold', 'Trembling', 'Numbness', 'Heaviness', 'Openness / ease', 'Other'],
          },
          {
            id: 'body-map-neck-shoulders',
            type: 'select',
            label: 'Neck and shoulders — sensation most present under stress',
            options: ['Tension', 'Tightness', 'Pain', 'Nausea', 'Heat', 'Cold', 'Trembling', 'Numbness', 'Heaviness', 'Openness / ease', 'Other'],
          },
          {
            id: 'body-map-chest',
            type: 'select',
            label: 'Chest and heart area — sensation most present under stress',
            options: ['Tension', 'Tightness', 'Pain', 'Nausea', 'Heat', 'Cold', 'Trembling', 'Numbness', 'Heaviness', 'Openness / ease', 'Other'],
          },
          {
            id: 'body-map-stomach',
            type: 'select',
            label: 'Stomach and gut — sensation most present under stress',
            options: ['Tension', 'Tightness', 'Pain', 'Nausea', 'Heat', 'Cold', 'Trembling', 'Numbness', 'Heaviness', 'Openness / ease', 'Other'],
          },
          {
            id: 'body-map-hands',
            type: 'select',
            label: 'Hands — sensation most present under stress',
            options: ['Tension', 'Tightness', 'Pain', 'Nausea', 'Heat', 'Cold', 'Trembling', 'Numbness', 'Heaviness', 'Openness / ease', 'Other'],
          },
          {
            id: 'body-map-lower-back',
            type: 'select',
            label: 'Lower back and hips — sensation most present under stress',
            options: ['Tension', 'Tightness', 'Pain', 'Nausea', 'Heat', 'Cold', 'Trembling', 'Numbness', 'Heaviness', 'Openness / ease', 'Other'],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Your Pattern',
        content:
          "Look at what you just mapped. Most people have 1–2 areas where stress reliably concentrates. Knowing your pattern is the first step to catching it early.",
        fields: [
          {
            id: 'stress-body-pattern',
            type: 'textarea',
            label: 'Where stress reliably shows up in my body first',
            placeholder:
              "Which area or areas light up first? What does that feel like? Is it always the same place or does it vary by type of stress?",
            required: true,
          },
          {
            id: 'stress-trigger-body-response',
            type: 'textarea',
            label: 'The emotion or trigger that creates the strongest body response',
            placeholder:
              "e.g., 'When I feel controlled or criticized, my shoulders go straight to my ears and I clench my jaw.' 'Anxiety about money goes straight to my gut.' What triggers your strongest physical stress response?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Your Release Toolkit',
        content:
          "For your top two tension areas, choose techniques that work directly on that area. These are your targeted releases — not generic stress management, but specific interventions for specific body locations.",
        fields: [
          {
            id: 'release-area-1',
            type: 'text',
            label: 'Tension area 1',
            placeholder: 'e.g., Neck and shoulders',
            required: true,
          },
          {
            id: 'release-technique-1',
            type: 'multi-select',
            label: 'Release techniques for this area',
            options: ['Humming', 'Shaking', 'Stretching', 'Heat', 'Cold', 'Self-massage', 'Breath', 'Sound', 'Movement', 'Other'],
          },
          {
            id: 'release-how-to-use-1',
            type: 'textarea',
            label: 'How I will use these techniques',
            placeholder:
              "Specific instructions for yourself: when to use them, for how long, what sequence. e.g., 'As soon as I notice my shoulders are up by my ears, I'll do a slow neck roll followed by 5 deep breaths before I respond to anything.'",
            required: true,
          },
          {
            id: 'release-area-2',
            type: 'text',
            label: 'Tension area 2',
            placeholder: 'e.g., Chest',
          },
          {
            id: 'release-technique-2',
            type: 'multi-select',
            label: 'Release techniques for this area',
            options: ['Humming', 'Shaking', 'Stretching', 'Heat', 'Cold', 'Self-massage', 'Breath', 'Sound', 'Movement', 'Other'],
          },
          {
            id: 'release-how-to-use-2',
            type: 'textarea',
            label: 'How I will use these techniques',
            placeholder:
              "Same format — specific and practical. When does this area need attention? What helps it release?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Daily Practice',
        content:
          "A brief daily body check-in — not to fix anything, just to notice — gives you ongoing access to your early warning system.",
        fields: [
          {
            id: 'daily-body-checkin-time',
            type: 'text',
            label: "I'll check in with my body's stress signals once daily at:",
            placeholder:
              "e.g., 'Every morning in the shower,' 'Before I start my car,' 'Right after lunch.' Pick a time you will actually remember.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'recovery-fitness-vision',
    slug: 'recovery-fitness-vision',
    title: 'Recovery Fitness Vision',
    subtitle: 'Build a relationship with your body as a home, not a burden',
    description:
      "Not about aesthetics or athletic goals — a worksheet for clarifying what physical vitality means to you in recovery, and taking one real step toward it.",
    category: 'physical-wellness',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'one-time',
    therapeuticFramework: ['PP', 'somatic'],
    tags: ['fitness', 'body', 'movement', 'vision', 'recovery', 'self-care', 'beginning'],
    icon: '🌈',
    color: '#F43F5E',
    version: 1,
    relatedWorksheets: ['movement-mood-log', 'sobriety-body-timeline', 'nutrition-recovery-checkin'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'A Different Relationship With Your Body',
        content:
          "Active addiction often creates a difficult, sometimes brutal relationship with the physical body. The body becomes something to override, manage, punish, or ignore. Something that keeps inconveniently demanding things you can't or won't give it.\n\nRecovery offers the possibility of a different relationship — one where the body is a home rather than an inconvenience, a resource rather than a battleground.\n\nThis worksheet is not about fitness goals in the conventional sense — not weight, not appearance, not athletic performance. It is about clarifying what having a capable, cared-for body would mean to you in your life as it is, and taking one real step toward that.\n\nStart where you actually are. All bodies are starting points.",
      },
      {
        type: 'freewrite',
        title: 'What Movement Means Now',
        content:
          "Before thinking about what you'll do, think about why it matters to you. Not 'because I should' — the real reason.",
        fields: [
          {
            id: 'movement-meaning-in-recovery',
            type: 'textarea',
            label: 'What does having a strong, capable body mean to you in recovery?',
            placeholder:
              "Not aesthetics — what does physical capacity and physical care actually mean for the life you are building? What would you be able to do? How would it affect your confidence, your energy, your presence for the people you love? What does it mean to inhabit your body fully?",
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Wish List',
        content:
          "Dream a little. What would you love to be able to do physically — not because it's realistic right now, but because it represents something that matters to you?",
        fields: [
          {
            id: 'movement-wish-list',
            type: 'multi-select',
            label: 'Physical activities or capabilities I would love to explore',
            options: [
              'Walking and hiking',
              'Dancing',
              'Swimming',
              'Yoga and stretching',
              'Cycling',
              'Team sports',
              'Martial arts',
              'Weightlifting',
              'Running',
              'Rock climbing',
              'Gardening',
              'Other',
            ],
          },
          {
            id: 'movement-wish-details',
            type: 'textarea',
            label: "What I'd love to be able to do physically — in my own words",
            placeholder:
              "Expand on what you selected, or describe something not on the list. What does the physical life you want to be living actually look like?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Current Starting Point',
        content:
          "No judgment. Every body is a starting point. Knowing where you actually are is the only honest way to plan the first step.",
        fields: [
          {
            id: 'current-physical-reality',
            type: 'textarea',
            label: "Honestly: where is my body's fitness and health right now?",
            placeholder:
              "What can you do comfortably? What is hard or limited right now? What health factors are in play? Write without apology — this is the starting line, not a verdict.",
            required: true,
          },
          {
            id: 'body-gratitude',
            type: 'text',
            label: "One physical thing my body can already do that I'm grateful for",
            placeholder:
              "Even in early recovery, the body is doing things worth noticing. Walk. Breathe. Hold a child. Taste food. What is already here?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The First Step',
        content:
          "Not the plan for the year. The first small step — small enough that you will actually take it, real enough that it counts.",
        fields: [
          {
            id: 'fitness-first-step',
            type: 'text',
            label: 'One gentle movement practice I will start this week',
            placeholder:
              "No more than 10 minutes to start. Something you can actually do given where your body is right now. e.g., 'A 10-minute walk after dinner.' 'Stretch for 5 minutes before bed.' 'One slow yoga video on YouTube on Sunday morning.'",
            required: true,
          },
        ],
      },
    ],
  },
]
