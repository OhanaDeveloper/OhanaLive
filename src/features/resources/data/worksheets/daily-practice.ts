import type { Worksheet } from '../types'

export const dailyPracticeWorksheets: Worksheet[] = [
  {
    id: 'morning-intention',
    slug: 'morning-intention',
    title: 'Morning Intention Setter',
    subtitle: 'Start the day with purpose, not panic',
    description:
      'Before your feet hit the floor and the noise starts, this worksheet helps you get grounded, set a direction, and remind yourself why today matters. Eight minutes to anchor the whole day.',
    category: 'daily-practice',
    difficulty: 'beginner',
    estimatedMinutes: 8,
    frequency: 'daily',
    therapeuticFramework: ['PP', 'MBSR', 'CBT'],
    tags: ['morning', 'intention', 'gratitude', 'daily', 'grounding', 'affirmation'],
    icon: '🌅',
    color: '#F59E0B',
    featured: true,
    version: 1,
    relatedWorksheets: ['nightly-wind-down', 'daily-sobriety-check-in', 'twenty-four-hour-plan'],
    sections: [
      {
        type: 'body-scan',
        title: 'Body Check-In',
        content:
          'Before anything else — before checking your phone, before making plans — just land in your body. How are you actually doing right now? Not how you think you should be doing. How you actually are.',
        fields: [
          {
            id: 'morning-mood',
            type: 'mood-picker',
            label: 'My mood right now',
            options: ['😔 Heavy', '😐 Flat', '🙂 Okay', '😊 Good', '🌟 Great'],
            required: true,
          },
          {
            id: 'energy-level',
            type: 'slider',
            label: 'Energy level (1 = running on fumes, 10 = ready to move)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'body-notes',
            type: 'textarea',
            label: 'Anything else you notice in your body this morning?',
            placeholder: 'Tight shoulders, restless, rested, anxious stomach — whatever is true...',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Gratitude Opening',
        content:
          'Not "three things" — one real thing, gone deep. Gratitude that actually touches something is more powerful than a list. Think of one specific moment, person, or detail from your life right now and let it land.',
        fields: [
          {
            id: 'morning-gratitude',
            type: 'textarea',
            label: 'One specific thing I\'m grateful for this morning, and why it actually matters to me:',
            placeholder:
              'Be specific. Not "my health" — but "the fact that I woke up in my own bed, sober, and the sun is coming through the window." The more concrete, the more it lands.',
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: "Today's Three Intentions",
        content:
          "Intentions are different from a to-do list. They're about who you want to be and how you want to move through the day — not just what needs to get done. Pick three things that actually matter, small or big.",
        fields: [
          {
            id: 'intention-1',
            type: 'text',
            label: 'Intention 1',
            placeholder: 'e.g. Stay present at my meeting instead of zoning out...',
            required: true,
          },
          {
            id: 'intention-1-why',
            type: 'textarea',
            label: 'Why this matters today:',
            placeholder: "What's at stake? Who does this serve, including yourself?",
          },
          {
            id: 'intention-2',
            type: 'text',
            label: 'Intention 2',
            placeholder: 'e.g. Check in on my brother instead of waiting for him to call...',
            required: true,
          },
          {
            id: 'intention-2-why',
            type: 'textarea',
            label: 'Why this matters today:',
            placeholder: "What's at stake? Who does this serve, including yourself?",
          },
          {
            id: 'intention-3',
            type: 'text',
            label: 'Intention 3',
            placeholder: 'e.g. Take a real lunch break and not eat at my desk...',
            required: true,
          },
          {
            id: 'intention-3-why',
            type: 'textarea',
            label: 'Why this matters today:',
            placeholder: "What's at stake? Who does this serve, including yourself?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Potential Challenge',
        content:
          "Pretend you can see today before it happens. Where might it get hard? Naming it now doesn't make it worse — it means you're not blindsided. And having a plan before the moment arrives is the difference between a slip and a choice.",
        fields: [
          {
            id: 'potential-challenge',
            type: 'textarea',
            label: 'What might be hard today? (a situation, a person, a feeling, a time of day)',
            placeholder:
              "Be honest. The commute, that meeting, coming home to an empty house, that particular craving that always hits at 4pm...",
            required: true,
          },
          {
            id: 'challenge-plan',
            type: 'select',
            label: 'My plan if that happens:',
            options: [
              'Take a breath and pause before I react',
              'Call my sponsor or a support person',
              'Use a grounding technique (5-4-3-2-1, box breathing, cold water)',
              'Go to a meeting or call a meeting friend',
              'Journal about what I\'m feeling',
              'Walk it off — get my body moving',
              'Other (write it below)',
            ],
            required: true,
          },
          {
            id: 'challenge-plan-detail',
            type: 'textarea',
            label: "More detail on that plan (optional):",
            placeholder: 'The more specific your plan, the more likely you\'ll actually use it...',
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Morning Affirmation',
        content:
          "This isn't a pep talk you don't believe. It's a true thing you need to hear today — something grounded in real evidence from your own life. Finish the statement, then back it up.",
        fields: [
          {
            id: 'affirmation-statement',
            type: 'text',
            label: 'Today I choose to remember:',
            placeholder: 'I am stronger than I think. I have gotten through hard days before. I am worth fighting for...',
            required: true,
          },
          {
            id: 'affirmation-evidence',
            type: 'textarea',
            label: 'Evidence from my own life that this is true:',
            placeholder:
              "Specific moments, things you survived, choices you made, people who believe in you. Make it real.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'nightly-wind-down',
    slug: 'nightly-wind-down',
    title: 'Nightly Wind-Down',
    subtitle: 'Close the day with intention, not just exhaustion',
    description:
      "The way you end the day matters. This isn't about performing gratitude or pretending today was fine if it wasn't. It's about closing the loop honestly, releasing what you're carrying, and setting yourself up for tomorrow.",
    category: 'daily-practice',
    difficulty: 'beginner',
    estimatedMinutes: 12,
    frequency: 'daily',
    therapeuticFramework: ['PP', 'MBSR'],
    tags: ['evening', 'reflection', 'closure', 'sleep', 'gratitude', 'daily'],
    icon: '🌙',
    color: '#6366F1',
    version: 1,
    relatedWorksheets: ['morning-intention', 'daily-sobriety-check-in', 'mindful-moment-log'],
    sections: [
      {
        type: 'reflection',
        title: 'Rose / Thorn / Bud',
        content:
          "A simple but powerful way to process the whole day — the good, the hard, and what's still unfolding. Don't skip the thorn. That's often where the real learning is.",
        fields: [
          {
            id: 'rose',
            type: 'textarea',
            label: '🌹 Rose — something good that happened today (any size):',
            placeholder:
              "A conversation, a quiet moment, something you did right, a small win. It counts even if it was small.",
            required: true,
          },
          {
            id: 'thorn',
            type: 'textarea',
            label: '🌵 Thorn — something that was hard, painful, or disappointing:',
            placeholder:
              "Be honest here. You don't have to reframe it yet. Just name what was hard.",
            required: true,
          },
          {
            id: 'bud',
            type: 'textarea',
            label: '🌱 Bud — something you\'re looking forward to or a seed of hope:',
            placeholder:
              "Tomorrow, this week, something growing. Even if today was rough, what\'s still possible?",
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'Recovery Temperature Check',
        content:
          "Honest inventory. Not to judge yourself — to know where you actually are so you can take care of yourself accordingly.",
        fields: [
          {
            id: 'craving-intensity',
            type: 'slider',
            label: 'Craving intensity today (0 = none at all, 10 = overwhelming)',
            min: 0,
            max: 10,
            required: true,
          },
          {
            id: 'recovery-confidence',
            type: 'slider',
            label: 'Confidence in my recovery right now (1 = shaky, 10 = solid)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'emotional-state-today',
            type: 'textarea',
            label: 'What I noticed about my emotional state today:',
            placeholder:
              "What feelings moved through you? What stayed? What surprised you? No need to explain or justify it — just notice.",
          },
        ],
      },
      {
        type: 'visualization',
        title: 'Letting Go',
        content:
          "You don't have to carry today's weight into tomorrow. Take a moment to name what you're bringing to bed with you — worry, regret, frustration, tension — and then intentionally release it. You can pick it up tomorrow if you still need it. But tonight, try to set it down.\n\nClose your eyes for a moment if you can. Breathe in for four counts, hold for four, out for four. Imagine placing what you're carrying into a container — a box, a jar, the ocean. You're not throwing it away. You're just giving yourself a rest from holding it.",
        fields: [
          {
            id: 'letting-go',
            type: 'textarea',
            label: 'Something I need to release before sleep:',
            placeholder:
              'A worry, a resentment, something I said or didn\'t say, something I\'m afraid of. Write it out so your mind can stop cycling on it.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Gratitude Close',
        content:
          'Three specific things. Not big abstract ones — small and real. The warmer and more concrete, the more your brain will actually absorb it as you sleep.',
        fields: [
          {
            id: 'gratitude-1',
            type: 'text',
            label: 'Grateful for:',
            placeholder: 'e.g. The way my dog looked at me this evening...',
            required: true,
          },
          {
            id: 'gratitude-2',
            type: 'text',
            label: 'Grateful for:',
            placeholder: 'e.g. That I made it through a hard conversation without walking out...',
            required: true,
          },
          {
            id: 'gratitude-3',
            type: 'text',
            label: 'Grateful for:',
            placeholder: 'e.g. A hot shower and a quiet house...',
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Tomorrow Prep',
        content:
          "Check in with yourself before you close your eyes. Not to add pressure — just to feel a little more settled going into sleep.",
        fields: [
          {
            id: 'tomorrow-prep-checks',
            type: 'checkbox',
            label: 'Before I sleep:',
            options: [
              'I know where my support is if tomorrow gets hard',
              'I have a rough plan for tomorrow\'s challenges',
              "I've identified at least one thing to look forward to tomorrow",
              'I\'ve done something kind for my body tonight (ate something, drank water, not staring at a screen)',
              "I'm going to bed at a decent hour",
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'daily-sobriety-check-in',
    slug: 'daily-sobriety-check-in',
    title: 'Daily Sobriety Check-In',
    subtitle: 'Five minutes of honesty that might save your day',
    description:
      "Short, honest, no fluff. This is your daily temperature check — where you are emotionally, where your cravings are at, what's working and what isn't. Five minutes. Every day.",
    category: 'daily-practice',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    frequency: 'daily',
    therapeuticFramework: ['CBT', 'PP'],
    tags: ['check-in', 'sobriety', 'daily', 'cravings', 'emotions', 'tools'],
    icon: '📋',
    color: '#10B981',
    featured: true,
    version: 1,
    relatedWorksheets: ['morning-intention', 'halt-scanner', 'nightly-wind-down'],
    sections: [
      {
        type: 'prompt',
        title: 'Emotional Weather Report',
        content:
          "What's the forecast inside you right now? Pick the one that fits best — not the one you wish fit.",
        fields: [
          {
            id: 'emotional-weather',
            type: 'select',
            label: 'Right now I feel like:',
            options: [
              '☀️ Sunny — clear, grounded, and feeling okay',
              '🌤️ Partly cloudy — mostly okay, but something is shadowing me',
              '⛅ Overcast — heavy and low energy, just moving through it',
              '🌧️ Rainy — tears are close to the surface, things feel tender',
              '⛈️ Stormy — overwhelmed, reactive, or spinning',
              '🌫️ Foggy — numb, checked out, or disconnected from myself',
            ],
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'Craving Check',
        content:
          "Cravings aren't failures. They're data. Naming them is the first step to not being controlled by them.",
        fields: [
          {
            id: 'craving-level',
            type: 'slider',
            label: 'Craving intensity right now (0 = none, 10 = really strong)',
            min: 0,
            max: 10,
            required: true,
          },
          {
            id: 'craving-driver',
            type: 'textarea',
            label: "What's driving it, if anything? (situation, emotion, memory, person, place):",
            placeholder:
              "You don't have to know. But if you do know, write it. Awareness is the circuit breaker.",
          },
        ],
      },
      {
        type: 'reflection',
        title: "Today's Win",
        content:
          "This is non-negotiable. There was something today — at least one thing — that you did right. Even if today was a bad day. Find it.",
        fields: [
          {
            id: 'todays-win',
            type: 'textarea',
            label: 'One thing I did well today (any size counts):',
            placeholder:
              "Getting out of bed, not picking up when you wanted to, saying something honest, making a meeting, feeding yourself. It all counts.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: "Today's Challenge",
        content:
          "What was hard? Not to punish yourself — but because naming the hard thing is how you learn from it and let it go.",
        fields: [
          {
            id: 'todays-challenge',
            type: 'textarea',
            label: 'What was hard today? How did I handle it?',
            placeholder:
              "Be honest. If you didn't handle it perfectly, that's okay. What happened, and what do you see now looking back?",
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Tools Check',
        content:
          "What did you use today? Recovery is built in the small acts, not just the big moments.",
        fields: [
          {
            id: 'tools-used',
            type: 'multi-select',
            label: 'Recovery tools I used today:',
            options: [
              'Attended a meeting',
              'Called my sponsor or a support person',
              'Used a coping skill intentionally',
              'Journaled or used a worksheet',
              'Exercised or moved my body',
              'Meditated, prayed, or did breathwork',
              'Reached out to my recovery community',
              'Read recovery literature',
              'Cooked a real meal or took care of my body',
              'Other',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'halt-scanner',
    slug: 'halt-scanner',
    title: 'The HALT Scanner',
    subtitle: 'Check under the hood before the engine stalls',
    description:
      "HALT stands for Hungry, Angry, Lonely, Tired — four states that dramatically increase your vulnerability to relapse. This quick scan helps you catch what's really going on so you can actually address it.",
    category: 'daily-practice',
    difficulty: 'beginner',
    estimatedMinutes: 4,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'DBT'],
    tags: ['HALT', 'triggers', 'urges', 'relapse-prevention', 'quick', 'self-awareness'],
    icon: '⚡',
    color: '#EF4444',
    version: 1,
    relatedWorksheets: ['daily-sobriety-check-in', 'energy-mapping', 'twenty-four-hour-plan'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Is HALT?',
        content:
          "HALT comes from addiction recovery and it's one of the most practical tools out there. The idea is simple: when you're in the grip of a craving or about to do something you'll regret, one of four basic needs is usually underneath it.\n\n**H — Hungry.** Not just physically. Emotional hunger, spiritual hunger, the hunger for connection or meaning — they all make you more reactive and more vulnerable.\n\n**A — Angry.** Resentment, frustration, feeling unheard, disrespected, or wronged. Anger that hasn't been named has a way of finding an outlet — and sometimes that outlet is a drink or a drug.\n\n**L — Lonely.** Isolation is one of the biggest relapse triggers that exists. Loneliness doesn't always look like being alone — it can feel like being surrounded by people and still invisible.\n\n**T — Tired.** Sleep deprivation, emotional exhaustion, running on empty. Willpower and decision-making fall apart when you're depleted.\n\nThe scan below takes two minutes. Use it whenever you feel off, reactive, or like a craving is building.",
      },
      {
        type: 'scale',
        title: 'Run the Scan',
        content:
          "Rate each one honestly. 1 means it's not a factor. 5 means it's significant right now.",
        fields: [
          {
            id: 'halt-hungry',
            type: 'slider',
            label: 'H — Hungry (physically, emotionally, or spiritually)',
            min: 1,
            max: 5,
            required: true,
          },
          {
            id: 'halt-angry',
            type: 'slider',
            label: 'A — Angry (frustrated, resentful, feeling wronged)',
            min: 1,
            max: 5,
            required: true,
          },
          {
            id: 'halt-lonely',
            type: 'slider',
            label: 'L — Lonely (isolated, invisible, disconnected)',
            min: 1,
            max: 5,
            required: true,
          },
          {
            id: 'halt-tired',
            type: 'slider',
            label: 'T — Tired (physically exhausted, emotionally depleted)',
            min: 1,
            max: 5,
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: "What's Highest?",
        content:
          "Now that you can see it — what's actually driving this moment?",
        fields: [
          {
            id: 'halt-highest',
            type: 'select',
            label: 'What scored highest in my scan:',
            options: [
              'Hungry — I need to eat or feed something deeper',
              'Angry — there\'s something I need to name or process',
              'Lonely — I need connection',
              'Tired — I need rest',
              'Multiple things — it\'s a combination',
              'Honestly not sure — I just know something feels off',
            ],
            required: true,
          },
          {
            id: 'halt-contributing',
            type: 'textarea',
            label: "What's contributing to this? (the specific situation, feeling, or thought):",
            placeholder:
              "The more specific you can get, the more useful this is. What happened today, or what are you dreading?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Action Step',
        content:
          "You know what you need. Now name one concrete thing you'll do in the next 30 minutes to actually address it. Not tomorrow. Right now.",
        fields: [
          {
            id: 'halt-action',
            type: 'textarea',
            label: 'One thing I\'ll do in the next 30 minutes to address this:',
            placeholder:
              "Eat something. Text a friend. Lie down for 20 minutes. Call my sponsor. Take a walk. Go to a meeting. Write about the anger. Whatever it actually is.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'twenty-four-hour-plan',
    slug: 'twenty-four-hour-plan',
    title: '24-Hour Plan',
    subtitle: 'One day at a time — planned, not hoped',
    description:
      "Recovery lives in the twenty-four hours in front of you. Not in the whole year — in today. This worksheet helps you map the day intentionally: anchor your commitment, plan the risk windows, and lock in your support.",
    category: 'daily-practice',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'daily',
    therapeuticFramework: ['CBT', 'SF'],
    tags: ['planning', 'structure', 'daily', 'support', 'self-care', '24-hours'],
    icon: '🗓️',
    color: '#3B82F6',
    version: 1,
    relatedWorksheets: ['morning-intention', 'daily-sobriety-check-in', 'energy-mapping'],
    sections: [
      {
        type: 'reflection',
        title: 'Anchor Moment',
        content:
          "Before you plan anything, drop into why today matters. Not in a general way — specifically. What is your recovery commitment for today? Name it like it's a promise to yourself.",
        fields: [
          {
            id: 'anchor-commitment',
            type: 'textarea',
            label: 'My most important recovery commitment for today is:',
            placeholder:
              "I will not pick up. I will go to my meeting. I will call my sponsor if I feel pulled. I will stay honest with myself. Start with your real commitment.",
            required: true,
          },
        ],
      },
      {
        type: 'timeline',
        title: 'Time Blocks',
        content:
          "Map out the general shape of your day. You don't need a minute-by-minute schedule — just a loose plan for each part of the day. Unstructured time is a higher-risk window for most people in recovery.",
        fields: [
          {
            id: 'time-morning',
            type: 'text',
            label: 'Morning',
            placeholder: 'e.g. 7am wake up, meeting at 9, then work from 10...',
          },
          {
            id: 'time-afternoon',
            type: 'text',
            label: 'Afternoon',
            placeholder: 'e.g. Work until 3, gym at 4, pick up kids at 5...',
          },
          {
            id: 'time-evening',
            type: 'text',
            label: 'Evening',
            placeholder: 'e.g. Dinner, check in with my sponsor, in bed by 10...',
          },
          {
            id: 'time-night',
            type: 'text',
            label: 'Overnight / Before bed',
            placeholder: 'e.g. Wind-down routine, no phone in bed, in bed by 10:30...',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Risk Windows',
        content:
          "Every day has its high-risk moments — times when the pull is stronger, the support is thinner, or the emotional temperature is higher. Name them now, so you're not caught off guard.",
        fields: [
          {
            id: 'risk-windows',
            type: 'textarea',
            label: 'Times or situations today that might be challenging:',
            placeholder:
              "After work when I\'m alone. Driving past my old neighborhood. That family dinner. 3pm slump. Coming home to an empty house. Whatever it is for you.",
          },
          {
            id: 'backup-plan',
            type: 'select',
            label: 'My backup plan if I feel pulled:',
            options: [
              'Pause and use the HALT scanner before acting',
              'Call my sponsor or a support person immediately',
              'Get to a meeting, virtual or in-person',
              'Use a grounding technique to ride the craving out',
              'Get my body moving — walk, run, gym',
              'Journal or use a worksheet',
              'Other (write below)',
            ],
          },
          {
            id: 'specific-action',
            type: 'textarea',
            label: 'Specific action I\'ll take if I feel pulled today:',
            placeholder:
              "The more specific, the better. \"I\'ll call Marcus\" beats \"I\'ll call someone.\" Know the next step before you need it.",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Support Check',
        content:
          "Who is in your corner today? Recovery is not a solo sport. Name someone who knows you're in it, and how you'll actually make contact.",
        fields: [
          {
            id: 'support-person',
            type: 'text',
            label: 'Name and how I\'ll check in with them today:',
            placeholder: 'e.g. Marcus — texting him after my morning meeting...',
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Self-Care Lock-In',
        content:
          "These aren't luxuries — they're recovery infrastructure. Check in at the end of the day.",
        fields: [
          {
            id: 'self-care-checks',
            type: 'checkbox',
            label: 'Today I will (or did):',
            options: [
              'Eat something real and nourishing',
              'Get outside or get some fresh air',
              'Get to sleep before midnight',
              'Talk to at least one person who actually knows me',
              'Do one thing just for me — not for productivity, not for anyone else',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'mindful-moment-log',
    slug: 'mindful-moment-log',
    title: 'Mindful Moment Log',
    subtitle: 'Pocket-sized presence for the rest of your day',
    description:
      "You don't need a meditation cushion or thirty minutes of silence. This three-minute practice captures a single moment of real presence — and over time, these moments add up into a different relationship with your own life.",
    category: 'daily-practice',
    difficulty: 'beginner',
    estimatedMinutes: 3,
    frequency: 'daily',
    therapeuticFramework: ['MBSR', 'ACT'],
    tags: ['mindfulness', 'presence', 'micro-practice', 'daily', 'grounding', 'awareness'],
    icon: '🧘',
    color: '#14B8A6',
    version: 1,
    relatedWorksheets: ['morning-intention', 'nightly-wind-down', 'daily-meaning-practice'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Micro-Mindfulness',
        content:
          "Mindfulness doesn't require a retreat or an app. It means choosing, for a moment, to be exactly where you are. Research consistently shows that brief, regular moments of present-moment awareness are more valuable than occasional long sessions.\n\nFor people in recovery, this practice has a specific power: cravings are almost always about the past (memory) or the future (anxiety). Being in the present moment — really in it — is one of the few places a craving can't fully follow you.\n\nThis log is simple. Pick any moment from your day — an ordinary one is fine, better even — and follow the prompts.",
      },
      {
        type: 'prompt',
        title: 'The Moment',
        content:
          "What moment are you capturing? It doesn't need to be special. Washing dishes, walking to your car, sitting at a stoplight, drinking coffee.",
        fields: [
          {
            id: 'moment-context',
            type: 'text',
            label: 'Where I was and what I was doing:',
            placeholder: 'e.g. Sitting on the back porch after dinner, watching the sky...',
            required: true,
          },
          {
            id: 'moment-time',
            type: 'time',
            label: 'Time of day (optional):',
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'What I Noticed',
        content:
          "Now walk through the senses that were present. You don't have to use all of them — just the ones that were alive in that moment.",
        fields: [
          {
            id: 'sense-sight',
            type: 'textarea',
            label: 'What I saw:',
            placeholder: 'Colors, light, movement, shapes...',
          },
          {
            id: 'sense-sound',
            type: 'textarea',
            label: 'What I heard:',
            placeholder: 'Distant traffic, wind, silence, music...',
          },
          {
            id: 'sense-touch',
            type: 'textarea',
            label: 'What I felt physically (touch, temperature, texture):',
            placeholder: 'The chair against my back, cold air on my face, warmth of the cup...',
          },
          {
            id: 'sense-smell',
            type: 'textarea',
            label: 'What I smelled or tasted (optional):',
            placeholder: 'Coffee, rain, food, fresh air...',
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'Body and Emotion',
        content:
          "What was happening inside you during this moment?",
        fields: [
          {
            id: 'body-feeling',
            type: 'textarea',
            label: 'How my body felt in this moment:',
            placeholder:
              "Tense shoulders softening. Breath slowing down. Stomach tight. Feet on the ground. Whatever was true.",
          },
          {
            id: 'emotion-present',
            type: 'select',
            label: 'The emotion most present in this moment:',
            options: [
              'Calm',
              'Grateful',
              'Peaceful',
              'Sad',
              'Lonely',
              'Anxious',
              'Hopeful',
              'Tired',
              'Content',
              'Melancholy',
              'Present / Just here',
              'Something I can\'t name yet',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Insight',
        content:
          "What did this moment give you? It might be a feeling, a thought, a memory, or just a breath of something real.",
        fields: [
          {
            id: 'moment-insight',
            type: 'textarea',
            label: 'What this moment taught me, gave me, or reminded me of:',
            placeholder:
              "Maybe nothing profound — maybe just that the world is still here, still moving, and so are you.",
          },
        ],
      },
    ],
  },

  {
    id: 'recovery-affirmation-builder',
    slug: 'recovery-affirmation-builder',
    title: 'Recovery Affirmation Builder',
    subtitle: 'Build statements you actually believe',
    description:
      "Empty positivity doesn't stick. But affirmations rooted in real evidence from your own life — ones that name the struggle and the strength in the same breath — those land differently. This worksheet builds the kind of affirmations that actually hold.",
    category: 'daily-practice',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'weekly',
    therapeuticFramework: ['CBT', 'PP'],
    tags: ['affirmation', 'self-compassion', 'strengths', 'weekly', 'mindset', 'recovery'],
    icon: '💬',
    color: '#A855F7',
    version: 1,
    relatedWorksheets: ['morning-intention', 'accountability-mirror', 'identity-reclamation'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Hollow Affirmations Don\'t Work',
        content:
          "\"I am worthy of love and happiness.\" You've probably heard this one. And if you're in recovery — carrying shame, regret, maybe some wreckage — repeating it might feel like lying.\n\nResearch on affirmations shows that they work best when they're specific, grounded in real experience, and acknowledge contrast rather than erasing it. \"I am strong\" doesn't land the same way as \"Even though I've failed before, I have also gotten back up every single time.\"\n\nThe format we'll use: **Even though [honest struggle], I [true thing about my strength].** This holds the tension, which is where the real power lives.",
      },
      {
        type: 'freewrite',
        title: 'Raw Truth',
        content:
          "Before you build something strong, you have to be honest about what you're actually carrying. This isn't wallowing — it's clearing the ground.",
        fields: [
          {
            id: 'raw-struggle',
            type: 'textarea',
            label: 'An honest struggle I\'m carrying right now:',
            placeholder:
              "Fear, shame, a specific behavior, doubt, a relationship, a memory. Don't dress it up. What's the real thing?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Counter-Evidence',
        content:
          "Now look at your own life for proof that you're stronger than this struggle. Not proof that the struggle isn't real — proof that you've survived hard things, made it through, showed up anyway.",
        fields: [
          {
            id: 'counter-evidence',
            type: 'textarea',
            label: 'Real proof from my own life that I am stronger than this struggle:',
            placeholder:
              "Times you got back up. People who believe in you. Things you survived that you weren't sure you could. Choices you made. Moments of courage, even small ones.",
            required: true,
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Build Your Affirmation',
        content:
          "Now put it together. Start with the honest struggle, then pivot to the true strength. Yours doesn't have to match the formula exactly — but it should hold both things.",
        fields: [
          {
            id: 'affirmation-draft',
            type: 'textarea',
            label: 'My affirmation (Even though [struggle], I [true strength]):',
            placeholder:
              "Even though I've relapsed before, I have also chosen recovery more than once — and every time I've come back, I've come back stronger. Even though I carry shame, I know I am more than my worst moments. Even though I'm scared, I keep showing up.",
            required: true,
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Your Top 5',
        content:
          "Now build out your full set. These are yours — pull from what you know about yourself, your history, what you need to hear when things get hard. You can revise these over time.",
        fields: [
          {
            id: 'affirmation-1',
            type: 'text',
            label: 'Affirmation 1:',
            placeholder: 'Even though...',
            required: true,
          },
          {
            id: 'affirmation-2',
            type: 'text',
            label: 'Affirmation 2:',
            placeholder: 'I choose...',
          },
          {
            id: 'affirmation-3',
            type: 'text',
            label: 'Affirmation 3:',
            placeholder: 'I am capable of...',
          },
          {
            id: 'affirmation-4',
            type: 'text',
            label: 'Affirmation 4:',
            placeholder: 'My recovery proves that...',
          },
          {
            id: 'affirmation-5',
            type: 'text',
            label: 'Affirmation 5:',
            placeholder: 'The truth about me is...',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Commitment',
        content:
          "These are only useful if you actually use them. When will you return to them?",
        fields: [
          {
            id: 'review-commitment',
            type: 'select',
            label: 'I will review these affirmations:',
            options: [
              'Every morning as part of my routine',
              'Every night before bed',
              'Whenever I feel weak or doubting myself',
              'Once a week when I revisit this worksheet',
              'Other',
            ],
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'accountability-mirror',
    slug: 'accountability-mirror',
    title: 'Accountability Mirror',
    subtitle: 'Honest self-review without self-destruction',
    description:
      "The mirror doesn't lie, but it also doesn't hate you. This daily practice asks you to look honestly at how you lived your values today — including where you fell short — and respond with the same compassion you'd offer a friend.",
    category: 'daily-practice',
    difficulty: 'intermediate',
    estimatedMinutes: 12,
    frequency: 'daily',
    therapeuticFramework: ['CBT', 'PP'],
    tags: ['accountability', 'values', 'self-compassion', 'daily', 'growth', 'honesty'],
    icon: '🪞',
    color: '#EC4899',
    version: 1,
    relatedWorksheets: ['nightly-wind-down', 'shame-guilt-separator', 'values-compass'],
    sections: [
      {
        type: 'scale',
        title: "Today's Values Check",
        content:
          "Rate how fully you lived each of these values today. Not how you wish you had — how you actually did. 1 means you were far from it. 10 means you really showed up.",
        fields: [
          {
            id: 'value-recovery',
            type: 'slider',
            label: 'Recovery commitment — I showed up for my sobriety today',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'value-honesty',
            type: 'slider',
            label: 'Honesty — I told the truth (to myself and others)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'value-relationships',
            type: 'slider',
            label: 'Showing up for my relationships — I was present for the people I care about',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'value-self-care',
            type: 'slider',
            label: 'Self-care — I treated my body and mind with some basic respect',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'value-growth',
            type: 'slider',
            label: 'Growth — I took at least one step in the direction I want to go',
            min: 1,
            max: 10,
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Where I Fell Short',
        content:
          "This is not a shame exercise. It's an inventory. Where was there a gap today between who you want to be and how you actually showed up?",
        fields: [
          {
            id: 'fell-short',
            type: 'textarea',
            label: 'One place I didn\'t fully live my values today — what actually happened:',
            placeholder:
              "I snapped at my sister. I avoided calling my sponsor when I should have. I ate garbage and didn't sleep. I was dishonest about where I was. Whatever it is, name it plainly.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Self-Compassion Pause',
        content:
          "Before you move to action, sit in this for a moment. Accountability without compassion tends to spiral into shame, and shame is a relapse risk. You're going to answer the same question about yourself that you'd answer for someone you love.",
        fields: [
          {
            id: 'self-compassion',
            type: 'textarea',
            label: 'What would I tell a close friend who did exactly what I did today?',
            placeholder:
              "Not a lecture. Not minimizing. What would you actually say to them? Would you forgive them? Would you help them see it clearly without crushing them?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Repair or Learn',
        content:
          "Some gaps need repair. Others just need to be learned from and released. Figure out which one this is.",
        fields: [
          {
            id: 'repair-or-learn',
            type: 'textarea',
            label: 'Is there something I need to repair, or just something I need to learn from and let go?',
            placeholder:
              "If repair: who do I owe something to, and what's one concrete step? If learn: what does this teach me, and how do I carry that without the shame?",
          },
        ],
      },
      {
        type: 'prompt',
        title: "Tomorrow's Intention",
        content:
          "One specific way to close the loop and move forward.",
        fields: [
          {
            id: 'tomorrow-values',
            type: 'text',
            label: 'One way I\'ll live my values more fully tomorrow:',
            placeholder: 'e.g. I\'ll call before I need to. I\'ll be honest with my partner. I\'ll actually rest.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'energy-mapping',
    slug: 'energy-mapping',
    title: 'Energy Mapping',
    subtitle: 'Know your vulnerability windows before they know you',
    description:
      "Your energy moves in patterns. Your risk windows are predictable. This worksheet helps you map when you're most vulnerable — physically, emotionally, and in your recovery — so you can build protection where you actually need it.",
    category: 'daily-practice',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'weekly',
    therapeuticFramework: ['CBT', 'somatic'],
    tags: ['energy', 'patterns', 'vulnerability', 'weekly', 'planning', 'somatic'],
    icon: '📊',
    color: '#F97316',
    version: 1,
    relatedWorksheets: ['twenty-four-hour-plan', 'halt-scanner', 'daily-sobriety-check-in'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Vulnerability Windows',
        content:
          "Every person in recovery has a vulnerability pattern — specific times of day, emotional states, or physical conditions that make the pull toward substances stronger and the resistance weaker. Most people don't discover these patterns until after a slip. This worksheet helps you map them proactively.\n\nResearch on the body's energy rhythms shows that willpower, decision-making, and emotional regulation all fluctuate throughout the day — and they're deeply affected by sleep, food, social connection, and stress. Knowing when you're running on empty lets you bolster those windows before they become crises.",
      },
      {
        type: 'timeline',
        title: "Today's Energy Timeline",
        content:
          "Think back through your day. At each time point, note roughly where your energy and emotional state were. Rate each on a scale of 1-10 (1 = completely depleted, 10 = resourced and present).",
        fields: [
          {
            id: 'energy-morning',
            type: 'slider',
            label: 'Morning energy (when I first woke up to noon)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'energy-morning-notes',
            type: 'text',
            label: 'What was happening / how I felt in the morning:',
            placeholder: 'Anxious, rested, rushed, calm, already dreading something...',
          },
          {
            id: 'energy-midday',
            type: 'slider',
            label: 'Midday energy (noon to 2pm)',
            min: 1,
            max: 10,
          },
          {
            id: 'energy-midday-notes',
            type: 'text',
            label: 'What was happening / how I felt at midday:',
            placeholder: 'After work stress, hunger, a hard conversation, feeling okay...',
          },
          {
            id: 'energy-afternoon',
            type: 'slider',
            label: 'Afternoon energy (2pm to 6pm)',
            min: 1,
            max: 10,
          },
          {
            id: 'energy-afternoon-notes',
            type: 'text',
            label: 'What was happening / how I felt in the afternoon:',
            placeholder: 'The 4pm dip, work ending, transition time, commute...',
          },
          {
            id: 'energy-evening',
            type: 'slider',
            label: 'Evening energy (6pm onward)',
            min: 1,
            max: 10,
          },
          {
            id: 'energy-evening-notes',
            type: 'text',
            label: 'What was happening / how I felt in the evening:',
            placeholder: 'Coming home, alone time, social, exhausted, wired...',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Lowest Point',
        content:
          "Look at your timeline. Find the low point. What was actually happening — and what did you need that you either didn't have or didn't give yourself?",
        fields: [
          {
            id: 'lowest-point',
            type: 'textarea',
            label: 'What was happening at my lowest energy point today?',
            placeholder:
              "The situation, the feeling, what triggered the drop. Be specific — this is where your vulnerability window lives.",
            required: true,
          },
          {
            id: 'unmet-need',
            type: 'select',
            label: 'What I needed in that moment but didn\'t have:',
            options: [
              'Sleep — I was running on too little',
              'Food — I hadn\'t eaten properly',
              'Human connection — I needed someone',
              'Time alone — I was overstimulated and had no quiet',
              'Movement — my body needed to discharge energy',
              'Emotional support — I was carrying something alone',
              'A meeting or recovery touchpoint',
              'Other',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Pattern',
        content:
          "This one day is a data point. But most people find their low point is relatively consistent. What pattern are you noticing?",
        fields: [
          {
            id: 'energy-pattern',
            type: 'textarea',
            label: 'The recurring energy pattern I\'m noticing in my life:',
            placeholder:
              "I always crash on Sunday evenings. I\'m most vulnerable late afternoons after work. I do best when I\'ve slept seven hours. When I skip meetings on Fridays, my weekend goes sideways. What do you actually see?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Protective Plan',
        content:
          "Based on what you now know, what one change will you make this week to protect your most vulnerable window?",
        fields: [
          {
            id: 'protective-plan',
            type: 'textarea',
            label: 'One change I\'ll make this week to strengthen my vulnerable window:',
            placeholder:
              "Build in a meeting for Sunday evenings. Eat before 4pm. Schedule a check-in with my sponsor on the day I usually isolate. Plan something to look forward to during my low point. Whatever is real for your pattern.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'daily-meaning-practice',
    slug: 'daily-meaning-practice',
    title: 'Daily Meaning Practice',
    subtitle: 'Connect to something bigger than the hard day',
    description:
      "Recovery without meaning is just white-knuckling it. Connection to something beyond yourself — whether that's community, nature, purpose, creativity, or something you can't quite name — is one of the most powerful recovery anchors there is. This practice helps you find and feel that connection every day.",
    category: 'daily-practice',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'daily',
    therapeuticFramework: ['ACT', 'PP', 'MBSR'],
    tags: ['meaning', 'purpose', 'spirituality', 'connection', 'daily', 'values'],
    icon: '✨',
    color: '#8B5CF6',
    version: 1,
    relatedWorksheets: ['morning-intention', 'values-compass', 'daily-sobriety-check-in'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Connection as Recovery Anchor',
        content:
          "The science on this is clear: people who feel connected to something beyond themselves — a community, a cause, a spiritual belief, the natural world, the act of creation — are significantly more resilient in recovery. This connection provides what substances seemed to provide: a feeling of mattering, belonging, being part of something.\n\nThis practice is non-denominational. You don't need a religion. You don't need a belief system. You just need to notice where you feel that pull toward something bigger — and then lean into it.\n\nSome people find it in prayer. Others find it in the ocean, in music, in sponsoring someone, in watching their kid laugh, in showing up for their community. There's no wrong answer. There's only yours.",
      },
      {
        type: 'prompt',
        title: 'Connection Today',
        content:
          "Where did you feel connected to something beyond yourself today? Or where do you plan to feel it?",
        fields: [
          {
            id: 'connection-source',
            type: 'select',
            label: 'Where my sense of connection lives today:',
            options: [
              'Nature — the sky, ocean, trees, creatures',
              'Community — my people, my group, my family',
              'Music or art — something made with soul',
              'Purpose or mission — a cause bigger than me',
              'Spirituality or prayer — whatever I believe in',
              'Creativity — making something, expressing something',
              'Service to others — giving what I have',
              'The universe or cosmos — the simple fact of existing',
              'Something I can\'t name but I feel',
              'Other',
            ],
            required: true,
          },
          {
            id: 'connection-experience',
            type: 'textarea',
            label: 'How I felt that connection today, or how I plan to:',
            placeholder:
              "Describe the moment, the plan, or the feeling. Even a small flicker of it counts — a song that got you, a conversation that mattered, five minutes outside with your face to the sun.",
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'Reading and Reflection',
        content:
          "Recovery literature, poetry, song lyrics, philosophy, scripture, a quote you stumbled on — what spoke to you today? Capture it here and write a sentence about why it landed.",
        fields: [
          {
            id: 'reading-reflection',
            type: 'textarea',
            label: 'A passage, lyric, quote, or idea that spoke to me today:',
            placeholder:
              "Copy it here. Even if it\'s just a line. Then write a sentence below about what it gave you or reminded you of.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Gratitude for the Intangible',
        content:
          "Not things you own. Not people you can list. Something you can't hold — but that you're glad exists.",
        fields: [
          {
            id: 'intangible-gratitude',
            type: 'textarea',
            label: 'Something I can\'t touch but I\'m grateful exists:',
            placeholder:
              "Music. Loyalty. The instinct to protect someone you love. The fact that things can change. Whatever comes to you.",
            required: true,
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Closing Intention',
        content:
          "How are you giving today meaning? Not the meaning it arrived with — the meaning you choose to put into it.",
        fields: [
          {
            id: 'closing-intention',
            type: 'text',
            label: 'I give this day meaning by:',
            placeholder: 'showing up. being honest. staying sober. loving the people I love. still being here.',
            required: true,
          },
        ],
      },
    ],
  },
]
