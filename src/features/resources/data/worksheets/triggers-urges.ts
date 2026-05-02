import type { Worksheet } from '../types'

export const triggersUrgesWorksheets: Worksheet[] = [
  {
    id: 'personal-trigger-map',
    slug: 'personal-trigger-map',
    title: 'Personal Trigger Map',
    subtitle: 'Know what pulls you — before it catches you off guard',
    description:
      'A comprehensive mapping of your personal triggers across people, places, times, and emotions — with a priority action plan for your highest-risk exposures. Triggers aren\'t weaknesses; they\'re patterns. Mapping them is power.',
    category: 'triggers-urges',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'MI'],
    tags: ['triggers', 'awareness', 'relapse-prevention', 'planning', 'high-risk'],
    icon: '🗺️',
    color: '#C0624A',
    featured: true,
    version: 1,
    relatedWorksheets: ['urge-surfing', 'relapse-warning-signs', 'high-risk-situation-planner'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Triggers Are Learned Associations',
        content:
          "A trigger is not a flaw in your character. It is a learned association in your brain — a neural pathway that was wired during your using days that links a specific person, place, time, emotion, or situation to the thought or feeling of using.\n\nThink of it as your brain's filing system misfiring. The smell of a bar, the voice of an old using friend, a certain time on a Friday evening — these activate the pathway, which generates craving, which feels like 'you' wanting to use. But it isn't you. It's a pattern.\n\nHere's why this matters: you cannot consistently avoid what you haven't named. Mapping your triggers gives you something to work with. It means the first time you encounter a trigger, it won't also be the first time you've thought about how to respond to it.",
      },
      {
        type: 'checklist',
        title: 'People Triggers',
        content:
          'People can be powerful triggers — especially those connected to your using history or who create strong emotional reactions. Check everyone who applies, then write about your specific situation.',
        fields: [
          {
            id: 'people-triggers-select',
            type: 'multi-select',
            label: 'People-related triggers that apply to me',
            options: [
              'Old using friends',
              'Family members in conflict',
              'Romantic partner stress',
              'People who remind me of my using days',
              'Authority figures',
              'Isolation / being alone too long',
              'Other',
            ],
          },
          {
            id: 'people-triggers-specific',
            type: 'textarea',
            label: 'The specific people in my life who trigger me',
            placeholder:
              "You don't need full names. Initials or roles work. Describe what it is about each person that creates a pull.",
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Place and Time Triggers',
        content:
          'Places and times can be among the most powerful triggers — your brain maps the environment to memory automatically. Check what applies, then get specific.',
        fields: [
          {
            id: 'place-time-triggers-select',
            type: 'multi-select',
            label: 'Place and time triggers that apply to me',
            options: [
              'Bars or liquor stores',
              'Old neighborhoods',
              'Driving past a dealer\'s house or familiar route',
              'Home alone at night',
              'After work or end of shift',
              'Weekends',
              'Anniversaries of loss or trauma',
              'Holidays',
              'Other',
            ],
          },
          {
            id: 'place-time-triggers-specific',
            type: 'textarea',
            label: 'My specific places and times',
            placeholder:
              'Name the specific locations and clock/calendar moments that are high-risk for you. The more specific you are, the more useful this map is.',
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Emotional Triggers',
        content:
          'Emotional states are often the most powerful and least recognized triggers. Substances were used to manage feeling — so the feelings themselves can become the cue.',
        fields: [
          {
            id: 'emotional-triggers-select',
            type: 'multi-select',
            label: 'Emotional triggers that apply to me',
            options: [
              'Anger / resentment',
              'Loneliness',
              'Boredom',
              'Anxiety',
              'Depression',
              'Shame',
              'Excitement or celebration',
              'Physical pain',
              'Overwhelm',
              'Other',
            ],
          },
          {
            id: 'emotional-triggers-specific',
            type: 'textarea',
            label: 'My most dangerous emotional triggers — and what situations produce them',
            placeholder:
              "e.g., 'Loneliness hits hardest after arguments with my partner.' 'Boredom on Sunday nights is when I'm most vulnerable.' Be specific.",
            required: true,
          },
        ],
      },
      {
        type: 'matrix',
        title: 'Priority Trigger Matrix',
        content:
          "From everything you mapped above, select your top 5 triggers and assess each one. This creates your priority list for action.",
        fields: [
          {
            id: 'trigger-1-name',
            type: 'text',
            label: 'Trigger #1',
            placeholder: 'Name it specifically',
            required: true,
          },
          {
            id: 'trigger-1-intensity',
            type: 'slider',
            label: 'Intensity of this trigger',
            min: 1,
            max: 10,
          },
          {
            id: 'trigger-1-strategy',
            type: 'select',
            label: 'Current strategy for this trigger',
            options: ['Avoid it entirely', 'Have a plan when I encounter it', 'Still figuring it out'],
          },
          {
            id: 'trigger-2-name',
            type: 'text',
            label: 'Trigger #2',
            placeholder: 'Name it specifically',
          },
          {
            id: 'trigger-2-intensity',
            type: 'slider',
            label: 'Intensity of this trigger',
            min: 1,
            max: 10,
          },
          {
            id: 'trigger-2-strategy',
            type: 'select',
            label: 'Current strategy for this trigger',
            options: ['Avoid it entirely', 'Have a plan when I encounter it', 'Still figuring it out'],
          },
          {
            id: 'trigger-3-name',
            type: 'text',
            label: 'Trigger #3',
            placeholder: 'Name it specifically',
          },
          {
            id: 'trigger-3-intensity',
            type: 'slider',
            label: 'Intensity of this trigger',
            min: 1,
            max: 10,
          },
          {
            id: 'trigger-3-strategy',
            type: 'select',
            label: 'Current strategy for this trigger',
            options: ['Avoid it entirely', 'Have a plan when I encounter it', 'Still figuring it out'],
          },
          {
            id: 'trigger-4-name',
            type: 'text',
            label: 'Trigger #4',
            placeholder: 'Name it specifically',
          },
          {
            id: 'trigger-4-intensity',
            type: 'slider',
            label: 'Intensity of this trigger',
            min: 1,
            max: 10,
          },
          {
            id: 'trigger-4-strategy',
            type: 'select',
            label: 'Current strategy for this trigger',
            options: ['Avoid it entirely', 'Have a plan when I encounter it', 'Still figuring it out'],
          },
          {
            id: 'trigger-5-name',
            type: 'text',
            label: 'Trigger #5',
            placeholder: 'Name it specifically',
          },
          {
            id: 'trigger-5-intensity',
            type: 'slider',
            label: 'Intensity of this trigger',
            min: 1,
            max: 10,
          },
          {
            id: 'trigger-5-strategy',
            type: 'select',
            label: 'Current strategy for this trigger',
            options: ['Avoid it entirely', 'Have a plan when I encounter it', 'Still figuring it out'],
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Top Priority Action Plan',
        content:
          "Choose the single trigger with the highest intensity and the least developed strategy. Build a real, specific plan for it.",
        fields: [
          {
            id: 'top-trigger-action-plan',
            type: 'textarea',
            label: 'For my highest-intensity trigger, my specific management plan is:',
            placeholder:
              "Include: how I will recognize it early, what I will do in the first 5 minutes of exposure, who I will contact, what my exit strategy is if needed. Write as if briefing yourself before it happens.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'urge-surfing',
    slug: 'urge-surfing',
    title: 'Urge Surfing',
    subtitle: 'Ride the wave without acting on it',
    description:
      "Urges are like ocean waves — they build, peak, and pass. This mindfulness-based technique teaches you to observe an urge without fighting or feeding it, using it as a practice moment rather than a crisis. Average peak duration: 15–20 minutes.",
    category: 'triggers-urges',
    difficulty: 'intermediate',
    estimatedMinutes: 5,
    frequency: 'as-needed',
    therapeuticFramework: ['MBSR', 'CBT'],
    tags: ['urge-surfing', 'craving', 'mindfulness', 'impulsive', 'waves', 'present-moment'],
    icon: '🌊',
    color: '#4F86C6',
    featured: true,
    version: 1,
    relatedWorksheets: ['craving-anatomy', 'playing-tape-forward', 'grounding-54321'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Wave Model of Urges',
        content:
          "Most people treat an urge like a straight line — it starts, it grows, and it keeps growing until you either act on it or white-knuckle through it indefinitely. This is exhausting, and it often ends in acting out.\n\nThe reality: urges are waves. Research consistently shows that the average craving peaks and begins to decline within 15–20 minutes, regardless of whether you act on it. The problem is that fighting the wave — tensing against it, arguing with it, beating yourself up for having it — actually prolongs and intensifies it.\n\nUrge surfing, developed by psychologist Alan Marlatt, is a mindfulness approach: you observe the urge with curiosity rather than fighting it. You notice it building, peaking, and passing. You don't have to act. You don't have to resist. You just have to stay on the board.\n\nThis worksheet is used IN REAL TIME, while an urge is active. Fill it out during the wave.",
      },
      {
        type: 'scale',
        title: 'Right Now — Catching the Wave',
        content:
          "You're in the wave right now. Use this section to anchor the moment.",
        fields: [
          {
            id: 'urge-intensity-now',
            type: 'slider',
            label: 'Urge intensity right now (0 = none, 10 = overwhelming)',
            min: 0,
            max: 10,
            required: true,
          },
          {
            id: 'urge-time-started',
            type: 'text',
            label: 'Time the urge started (or when you noticed it)',
            placeholder: 'e.g., 3:45pm',
          },
          {
            id: 'urge-trigger-type',
            type: 'select',
            label: 'What seems to have triggered this urge?',
            options: [
              'An emotional state',
              'A physical environment or place',
              'A specific person or interaction',
              'A memory',
              'Unknown',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Observing Without Acting',
        content:
          "Instead of fighting the urge or feeding it, become a curious observer. What does it actually feel like? Where does it live? What is it asking for?",
        fields: [
          {
            id: 'urge-physical-sensation',
            type: 'textarea',
            label: 'Physical sensations of this urge — where, texture, temperature',
            placeholder:
              "e.g., 'Tight, hollow feeling in my chest. Restlessness in my legs. A pulling sensation in my throat. Warmth spreading through my stomach.'",
            required: true,
          },
          {
            id: 'urge-behavior-demand',
            type: 'textarea',
            label: 'What is the urge telling you to do? What is it asking for?',
            placeholder:
              "Describe it as if the urge has a voice. What is it saying? What promise is it making?",
          },
          {
            id: 'urge-observation-experience',
            type: 'textarea',
            label: 'What do you notice when you just watch it instead of fighting or feeding it?',
            placeholder:
              "Stay with the observation posture. What happens to the intensity? What do you notice in your body when you stop struggling with the urge?",
          },
        ],
      },
      {
        type: 'scale',
        title: '15–20 Minutes Later',
        content:
          "After the peak has passed — or at least shifted — check back in. This data is important. It builds your evidence base that urges pass.",
        fields: [
          {
            id: 'urge-intensity-after',
            type: 'slider',
            label: 'Urge intensity now (15–20 minutes later)',
            min: 0,
            max: 10,
          },
          {
            id: 'urge-wave-experience',
            type: 'textarea',
            label: 'What happened? Describe the arc of the wave.',
            placeholder:
              "Did it build and fall? Did it plateau? Did something shift it? Did you get through it? What did you notice as the intensity changed?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Pattern Data',
        content:
          "Each time you complete this, you add to your personal evidence base. Over time, patterns emerge that make urge surfing easier and more automatic.",
        fields: [
          {
            id: 'urge-peak-duration',
            type: 'textarea',
            label: 'Looking at urges you\'ve surfed: what\'s your average peak duration?',
            placeholder:
              "If this is your first time, make a note to track this. If you've done it before — what have you learned about how long your peaks typically last?",
          },
          {
            id: 'urge-peak-coping',
            type: 'textarea',
            label: 'What coping helps most during the peak moment?',
            placeholder:
              "Physical movement? Breath? Calling someone? Distraction? The specific thing that helps you stay on the board at the hardest moment.",
          },
        ],
      },
    ],
  },

  {
    id: 'craving-anatomy',
    slug: 'craving-anatomy',
    title: 'Craving Anatomy',
    subtitle: 'Break a craving apart and weaken its grip',
    description:
      'A craving is not a single thing — it is a layered event with physical, emotional, cognitive, and environmental components. Understanding its anatomy weakens it. This worksheet dissects a craving as it happens, or in the aftermath.',
    category: 'triggers-urges',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT'],
    tags: ['craving', 'anatomy', 'CBT', 'awareness', 'thought-patterns', 'play-tape-forward'],
    icon: '🔍',
    color: '#8B6FAB',
    version: 1,
    relatedWorksheets: ['urge-surfing', 'playing-tape-forward', 'euphoric-recall-antidote'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What a Craving Actually Is',
        content:
          "A craving is not a simple urge. It is a complex, multi-layered event happening simultaneously across your body, emotions, thoughts, and environment. Understanding each layer separately gives you more places to intervene.\n\n**The physical layer:** Cravings have real physiological components — physical sensations, autonomic nervous system activation, neurochemical changes. These can feel overwhelming partly because they are very real in the body.\n\n**The emotional layer:** Underneath almost every craving is an emotion being avoided or sought. The substance wasn't just about chemistry — it was about feeling different than you felt. What was the feeling you were managing?\n\n**The cognitive layer:** Cravings come with automatic thoughts — often distorted, often familiar. 'I deserve this.' 'Just one won't hurt.' 'I can control it this time.' These thoughts feel compelling because your brain generates them with emotional urgency.\n\n**The environmental layer:** Something triggered this craving in the first place. A person, place, time, smell, sensation. Identifying the trigger is part of the anatomy.\n\nDissect the craving. The more clearly you see it, the less power it has.",
      },
      {
        type: 'body-scan',
        title: 'The Physical Layer',
        content:
          "Where is this craving in your body? Treat it like a physical object. Describe it.",
        fields: [
          {
            id: 'craving-body-sensations',
            type: 'textarea',
            label: 'Body sensations when this craving hits',
            placeholder:
              "Location, quality, intensity. e.g., 'A hollow pulling in my chest. Restless energy in my legs. Dry mouth. A buzzing in my head.' Be as specific as possible.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Emotional Layer',
        content:
          "Cravings are often about feeling something — or not feeling something. What was the emotional weather before this craving arrived?",
        fields: [
          {
            id: 'craving-underlying-emotion',
            type: 'select',
            label: 'The primary emotion underneath this craving',
            options: [
              'Anxiety',
              'Loneliness',
              'Anger',
              'Boredom',
              'Sadness',
              'Shame',
              'Excitement',
              'Physical pain',
              'Other',
            ],
          },
          {
            id: 'craving-emotion-before',
            type: 'textarea',
            label: 'What was I really feeling before the craving hit?',
            placeholder:
              "Tell the emotional backstory. What had just happened? What was I thinking about? What need was going unmet?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Thought Layer',
        content:
          "Every craving comes with cognitive fuel — familiar distorted thoughts that make using seem logical. Naming them strips them of some power.",
        fields: [
          {
            id: 'craving-thought-distortions',
            type: 'multi-select',
            label: 'Thoughts running in my head with this craving',
            options: [
              "Just one won't hurt",
              'I deserve this',
              'I can control it this time',
              "Everyone else is fine — I'm the only one struggling",
              "Recovery isn't working anyway",
              "I'm different now",
              'No one will know',
              'Other',
            ],
          },
          {
            id: 'craving-specific-thought',
            type: 'textarea',
            label: 'The specific thought running in my head right now',
            placeholder:
              "Write it out in full — exactly what your mind is saying. The more honestly you name it, the easier it is to challenge.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Fantasy vs. Reality',
        content:
          "Addiction is a master storyteller. It sells you the preview, not the full film. This section is about playing the whole tape.",
        fields: [
          {
            id: 'craving-fantasy',
            type: 'textarea',
            label: 'What my mind says using will feel like — the fantasy, the promise',
            placeholder:
              "Describe the idealized version addiction is selling you. What does it promise? What problem does it claim to solve?",
            required: true,
          },
          {
            id: 'craving-reality',
            type: 'textarea',
            label: 'What it will actually feel like after — the full tape, played forward',
            placeholder:
              "An hour after. The morning after. A week after. What actually happens? What does the shame feel like? What do you have to rebuild? What do you lose?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Exit Ramp',
        content:
          "You have one action available right now that isn't using. One concrete, doable thing.",
        fields: [
          {
            id: 'craving-exit-ramp',
            type: 'text',
            label: 'One thing I can do RIGHT NOW instead',
            placeholder:
              "Make it specific, achievable, and immediate. 'Text my sponsor.' 'Walk around the block.' 'Make a cup of tea.' Simple works.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'playing-tape-forward',
    slug: 'playing-tape-forward',
    title: 'Playing the Tape Forward',
    subtitle: 'See the full movie, not just the trailer',
    description:
      "Addiction sells you the highlight reel — the first feeling, the relief, the escape. Your job is to play the full tape. This CBT/MI technique interrupts romanticized thinking by walking through the complete consequences, in sequence.",
    category: 'triggers-urges',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'MI'],
    tags: ['play-the-tape', 'consequences', 'craving', 'MI', 'motivation', 'decision-making'],
    icon: '📽️',
    color: '#D49B54',
    version: 1,
    relatedWorksheets: ['craving-anatomy', 'euphoric-recall-antidote', 'decision-matrix'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Addiction Shows You a Trailer',
        content:
          "When a craving hits, your brain does something predictable and treacherous: it shows you the good parts. The first hit, the relief, the warmth, the escape from whatever you were feeling. It curates a highlight reel — vivid, sensory, compelling.\n\nWhat it doesn't show you is everything that comes next. The progression. The aftermath. The faces of the people you'll have to deal with. The version of yourself at 2am that you don't want to be.\n\nPlaying the tape forward is about forcing the full movie to play, not just the trailer. This is a Motivational Interviewing and CBT technique used widely in addiction treatment. It works best done with honesty — not to scare yourself, but to access the full picture your craving brain is hiding from you.\n\nDo this now, while the craving is active or fresh. The specific timing matters.",
      },
      {
        type: 'freewrite',
        title: 'The Romanticized Version',
        content:
          "First, let the craving speak. Write out what it's promising you. Give it its full say here, in the safety of this page.",
        fields: [
          {
            id: 'tape-fantasy',
            type: 'textarea',
            label: 'What my mind is telling me it will feel like — the fantasy',
            placeholder:
              "Describe the idealized story addiction is telling you. The relief, the good feeling, what it 'solves.' Let it be honest.",
            required: true,
          },
        ],
      },
      {
        type: 'timeline',
        title: 'The Full Tape',
        content:
          "Now play the complete film. Be as honest and specific as you can. Vague answers won't help you — you need the specifics your craving brain is hiding.",
        fields: [
          {
            id: 'tape-2-hours',
            type: 'textarea',
            label: 'If I use: what happens in the next 2 hours?',
            placeholder:
              "Be specific. What actually happens physically, emotionally, situationally? Not a generalization — your specific next two hours.",
            required: true,
          },
          {
            id: 'tape-24-hours',
            type: 'textarea',
            label: 'The next 24 hours?',
            placeholder:
              "Morning after. How do you wake up? What is different? What conversations happen? What do you feel in your body and your chest?",
            required: true,
          },
          {
            id: 'tape-week',
            type: 'textarea',
            label: 'The next week?',
            placeholder:
              "One use rarely stays one use. What happens in the week after? What decisions get made? What do you lose or have to explain?",
          },
          {
            id: 'tape-month',
            type: 'textarea',
            label: 'The next month?',
            placeholder:
              "Where does the trajectory go? What does a month down this road look like for your recovery, relationships, work, self-respect?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Real Cost Reel',
        content:
          "This is the part addiction hides most carefully. The real costs are relational and internal.",
        fields: [
          {
            id: 'tape-relationships',
            type: 'textarea',
            label: 'The relationship(s) most affected — specifically',
            placeholder:
              "Name the person. What does their face look like when they find out? What do they lose? What do you have to say to them?",
            required: true,
          },
          {
            id: 'tape-self-respect',
            type: 'textarea',
            label: 'How I will feel about myself',
            placeholder:
              "Not in general — specifically. What does that voice in your head say? What do you feel in your chest when you look in the mirror the day after?",
            required: true,
          },
          {
            id: 'tape-rebuild',
            type: 'textarea',
            label: 'What I will have to rebuild',
            placeholder:
              "Trust, days sober, a conversation, an explanation. What specific work does this create that you don't currently have to do?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Sober Alternative',
        content:
          "You needed this craving to be showing you something. There's a real need underneath it. What can meet that need right now, without the cost?",
        fields: [
          {
            id: 'tape-sober-alternative',
            type: 'textarea',
            label: 'What can I do right now that will give me something real?',
            placeholder:
              "What real need is the craving pointing to? How can you meet that need in a way that doesn't blow up your recovery? Be honest and specific.",
          },
          {
            id: 'tape-choosing',
            type: 'text',
            label: "I'm choosing this instead:",
            placeholder: 'Write it as a commitment. One specific thing. Right now.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'high-risk-situation-planner',
    slug: 'high-risk-situation-planner',
    title: 'High-Risk Situation Planner',
    subtitle: 'Walk into hard situations with a real plan',
    description:
      "Some situations are reliably high-risk for people in recovery. This advanced worksheet helps you build specific, detailed plans for your top three most challenging upcoming situations — pre-game, in-the-moment, exit, and aftermath.",
    category: 'triggers-urges',
    difficulty: 'advanced',
    estimatedMinutes: 30,
    frequency: 'one-time',
    therapeuticFramework: ['CBT', 'MI'],
    tags: ['high-risk', 'planning', 'relapse-prevention', 'situations', 'strategy', 'advanced'],
    icon: '🎯',
    color: '#5A7FA8',
    version: 1,
    relatedWorksheets: ['personal-trigger-map', 'relapse-warning-signs', 'decision-matrix'],
    sections: [
      {
        type: 'checklist',
        title: 'Identify Your High-Risk Situations',
        content:
          "Some situations are predictably harder than others. Rather than hoping for the best, this worksheet helps you build a complete game plan before you walk in — so you're not figuring it out in real time under pressure.",
        fields: [
          {
            id: 'high-risk-situations-select',
            type: 'multi-select',
            label: 'High-risk situations I face or will face',
            options: [
              'Holidays with family',
              'Gatherings with old friends',
              'Weddings or parties',
              'Work events where alcohol is present',
              'Anniversaries of loss',
              'Times when boredom peaks',
              'After major stress or conflict',
              'Other',
            ],
          },
          {
            id: 'high-risk-situations-specific',
            type: 'textarea',
            label: 'My top 5 specific high-risk situations',
            placeholder:
              "Name them specifically — not 'parties' but 'my college friend group's July 4th gathering.' Specific is actionable.",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Situation Plan 1',
        content:
          "Choose the highest-risk upcoming situation you face and build a complete plan. Be detailed — vague plans don't hold up under pressure.",
        fields: [
          {
            id: 'situation-1-name',
            type: 'text',
            label: 'Situation #1 — name it specifically',
            placeholder: 'e.g., "Sister\'s wedding reception, 8/15, open bar, 4 hours"',
            required: true,
          },
          {
            id: 'situation-1-pregame',
            type: 'textarea',
            label: 'Pre-game plan — what I do BEFORE this situation',
            placeholder:
              "Talk to sponsor? Meeting beforehand? Set an intention? Tell someone where you're going? Make an agreement with yourself?",
            required: true,
          },
          {
            id: 'situation-1-in-the-moment',
            type: 'textarea',
            label: 'In-the-moment tools — while I\'m there',
            placeholder:
              "Specific coping tools: what you'll drink (water, soda), who you'll stick with, what you'll say when offered alcohol, what you'll do if you feel pulled.",
          },
          {
            id: 'situation-1-exit-strategy',
            type: 'textarea',
            label: 'Exit strategy — how I leave if I need to',
            placeholder:
              "Exact words you can use. Your own car or a ride? A time you give yourself permission to leave by? No explanations needed — just how.",
          },
          {
            id: 'situation-1-call-person',
            type: 'text',
            label: 'Who I will call if I need support during or after',
            placeholder: 'Name and how to reach them',
          },
          {
            id: 'situation-1-morning-after',
            type: 'textarea',
            label: 'Morning-after plan — how I take care of myself after this',
            placeholder:
              "Check-in with someone? Journal? Meeting? Reward yourself for navigating it successfully? What do you do the morning after?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Situation Plan 2',
        content:
          "Build a complete plan for your second highest-risk situation.",
        fields: [
          {
            id: 'situation-2-name',
            type: 'text',
            label: 'Situation #2 — name it specifically',
            placeholder: 'Be specific',
          },
          {
            id: 'situation-2-pregame',
            type: 'textarea',
            label: 'Pre-game plan',
            placeholder: 'What do you do before?',
          },
          {
            id: 'situation-2-in-the-moment',
            type: 'textarea',
            label: 'In-the-moment tools',
            placeholder: 'Specific coping tools while you\'re there',
          },
          {
            id: 'situation-2-exit-strategy',
            type: 'textarea',
            label: 'Exit strategy',
            placeholder: 'How and when you\'ll leave if needed',
          },
          {
            id: 'situation-2-call-person',
            type: 'text',
            label: 'Who I will call for support',
            placeholder: 'Name and contact',
          },
          {
            id: 'situation-2-morning-after',
            type: 'textarea',
            label: 'Morning-after plan',
            placeholder: 'How you\'ll care for yourself afterward',
          },
        ],
        optional: true,
      },
      {
        type: 'prompt',
        title: 'Situation Plan 3',
        content:
          "Third high-risk situation.",
        fields: [
          {
            id: 'situation-3-name',
            type: 'text',
            label: 'Situation #3 — name it specifically',
            placeholder: 'Be specific',
          },
          {
            id: 'situation-3-pregame',
            type: 'textarea',
            label: 'Pre-game plan',
            placeholder: 'What do you do before?',
          },
          {
            id: 'situation-3-in-the-moment',
            type: 'textarea',
            label: 'In-the-moment tools',
            placeholder: 'Specific coping tools',
          },
          {
            id: 'situation-3-exit-strategy',
            type: 'textarea',
            label: 'Exit strategy',
            placeholder: 'How and when to leave',
          },
          {
            id: 'situation-3-morning-after',
            type: 'textarea',
            label: 'Morning-after plan',
            placeholder: 'Recovery and self-care after',
          },
        ],
        optional: true,
      },
      {
        type: 'checklist',
        title: 'Non-Negotiables',
        content:
          "Some rules protect you regardless of the specific situation. Check the ones that apply to you as personal non-negotiables.",
        fields: [
          {
            id: 'non-negotiables',
            type: 'multi-select',
            label: 'My personal non-negotiables for high-risk situations',
            options: [
              'I will tell someone where I am going and when I expect to be back',
              'I will have my own transportation so I can leave when I need to',
              'I will set a time limit in advance and honor it',
              'I will have an exit excuse ready and not feel obligated to explain',
              'I will check in with my sponsor or support person before and after',
              'I will not go alone',
              'I will have sober support on speed dial',
              'Other',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'relapse-warning-signs',
    slug: 'relapse-warning-signs',
    title: 'Relapse Warning Signs',
    subtitle: 'Recognize the drift before it becomes a fall',
    description:
      "Relapse usually starts weeks or months before the first drink or drug — in subtle behavioral, emotional, and cognitive changes. This worksheet maps your personal early warning system so you and your support network can catch the drift early.",
    category: 'triggers-urges',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'twelve-step'],
    tags: ['relapse-prevention', 'warning-signs', 'early-warning', 'behavioral', 'emotional'],
    icon: '⚠️',
    color: '#D4826A',
    featured: true,
    version: 1,
    relatedWorksheets: ['personal-trigger-map', 'high-risk-situation-planner', 'decision-matrix'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Relapse Begins Long Before the First Use',
        content:
          "One of the most important things to understand about relapse is that the first drink or drug is rarely the beginning. For most people, relapse begins days, weeks, or even months earlier — in small, often overlooked shifts in behavior, emotion, and thinking.\n\nThis progression is sometimes called the 'relapse process.' It often follows a pattern: emotional relapse (neglecting self-care, isolating, white-knuckling) comes before mental relapse (romanticizing, planning, negotiating) which comes before physical relapse (the first use).\n\nThe good news: earlier stages are far easier to interrupt than later ones. Catching the drift at the behavioral level — skipping meetings, isolating from support, irregular sleep — gives you maximum leverage. By the time you're in active mental relapse, the pull is much stronger.\n\nThis worksheet maps your personal early warning system. Share it with people who care about your recovery — sometimes they see the early signs before you do.",
      },
      {
        type: 'checklist',
        title: 'Behavioral Warning Signs',
        content:
          "Behavioral changes are often the earliest and most visible indicators. Check what has appeared in your own relapse patterns — past or present.",
        fields: [
          {
            id: 'behavioral-warning-signs',
            type: 'multi-select',
            label: 'Behavioral warning signs I recognize in myself',
            options: [
              'Skipping meetings or group',
              'Isolating from support network',
              'Stopping or avoiding therapy/treatment',
              'Irregular or disrupted sleep',
              'Skipping meals or not caring for physical health',
              'Returning to old hangouts or neighborhoods',
              'Reconnecting with using friends',
              'Stopping medication',
              'Neglecting self-care routines',
              'Other',
            ],
          },
          {
            id: 'behavioral-warning-specific',
            type: 'textarea',
            label: 'My specific behavioral warning signs — the ones that actually appear for me',
            placeholder:
              "Which of these have you seen in yourself before a relapse or close call? What are YOUR early behavioral tells? Be as specific as possible.",
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Emotional Warning Signs',
        content:
          "Emotional shifts precede behavioral ones. What internal states indicate you're drifting?",
        fields: [
          {
            id: 'emotional-warning-signs',
            type: 'multi-select',
            label: 'Emotional warning signs I recognize in myself',
            options: [
              'Increasing irritability or short temper',
              'Feeling emotionally numb or flat',
              'Anxiety ramping up without clear cause',
              'Depression deepening',
              'Romanticizing using or the past',
              'Resentment building',
              'Feeling like nothing matters',
              'Secretly feeling superior to others in recovery',
              'Other',
            ],
          },
          {
            id: 'emotional-warning-specific',
            type: 'textarea',
            label: 'My specific emotional warning signs',
            placeholder:
              "What does your internal weather look like in the early stages of drift? What emotions show up — and how do they feel different from your recovery baseline?",
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Cognitive Warning Signs',
        content:
          "Thinking changes are often subtle and deceptive — the mind is good at justifying drift. Check what has appeared in your thinking before close calls.",
        fields: [
          {
            id: 'cognitive-warning-signs',
            type: 'multi-select',
            label: 'Cognitive warning signs I recognize in myself',
            options: [
              'Minimizing consequences ("It wasn\'t that bad")',
              'Magical thinking about control ("I could handle it now")',
              'Catastrophic thinking that makes sobriety feel hopeless',
              'Telling myself I\'m fixed and no longer need support',
              "Thinking 'just one' or 'just this once'",
              'Other',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Your Personal First Signal',
        content:
          "Of everything above — and anything not listed — what is the very first sign that you are drifting? The earliest indicator, before everything else builds. This is your most important data point.",
        fields: [
          {
            id: 'first-warning-sign',
            type: 'textarea',
            label: 'The very first sign that I\'m drifting — before anything else',
            placeholder:
              "This is deeply personal and often subtle. 'I stop making eye contact in meetings.' 'I stop calling my sponsor back quickly.' 'I start listening to certain music.' 'I get quieter.' What's yours?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Early Warning Action Plan',
        content:
          "Knowing your warning signs is only half. The other half is having a clear response ready for when you notice them.",
        fields: [
          {
            id: 'warning-action-call-person',
            type: 'text',
            label: 'When I notice my early warning signs, the first person I call is:',
            placeholder: 'Name and number',
            required: true,
          },
          {
            id: 'warning-action-steps',
            type: 'textarea',
            label: 'My immediate action steps when I notice I\'m drifting',
            placeholder:
              "List 3–5 specific actions you commit to taking when the first warning sign appears. Not when it's bad — when it's early.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'decision-matrix',
    slug: 'decision-matrix',
    title: 'The Decision Matrix',
    subtitle: 'See your ambivalence clearly — both sides',
    description:
      "Motivational Interviewing's decisional balance exercise. Ambivalence about sobriety is normal — pretending it isn't makes it more powerful. Seeing the full four-quadrant picture honestly is itself a therapeutic act.",
    category: 'triggers-urges',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['MI'],
    tags: ['MI', 'decisional-balance', 'ambivalence', 'motivation', 'pros-cons', 'recovery'],
    icon: '⚖️',
    color: '#7B8FAB',
    version: 1,
    relatedWorksheets: ['playing-tape-forward', 'relapse-warning-signs', 'euphoric-recall-antidote'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Ambivalence Is Normal',
        content:
          "Motivational Interviewing (MI) starts with a radical observation: ambivalence about change is not a character flaw or a sign of weak commitment. It is a completely normal part of the human change process. You can be genuinely committed to recovery AND simultaneously have real, honest reasons you miss using. Both are true.\n\nThe problem with unexamined ambivalence is that the parts of you that want to use make their case underground — in cravings, rationalizations, and moments of weakness. When you bring ambivalence into the open and look at all four sides clearly, it loses some of its underground power.\n\nThe decisional balance is a four-quadrant exercise from MI: the benefits of using, the costs of using, the benefits of NOT using, and the costs of NOT using. All four quadrants deserve honest reflection. Skimping on the 'benefits of using' quadrant is common — but it undermines the exercise.\n\nBe honest. No one is grading this.",
      },
      {
        type: 'matrix',
        title: 'The Four Quadrants',
        content:
          "Complete all four with honesty. The quadrants that make you uncomfortable are usually the most important ones.",
        fields: [
          {
            id: 'matrix-benefits-using',
            type: 'textarea',
            label: 'Benefits of using (what it gives me, relieves, or provides)',
            placeholder:
              "Be honest. What does it actually do for you — relief, escape, belonging, numbness, excitement? This isn't permission — it's honesty. The parts you never say out loud.",
            required: true,
          },
          {
            id: 'matrix-costs-using',
            type: 'textarea',
            label: 'Costs of using (what it takes from me)',
            placeholder:
              "Health, relationships, money, self-respect, opportunities, sleep, clarity — what does using actually cost you? Be specific.",
            required: true,
          },
          {
            id: 'matrix-benefits-not-using',
            type: 'textarea',
            label: 'Benefits of NOT using (what sobriety gives me)',
            placeholder:
              "What is present in your life in recovery that wasn't there before? What do you get to keep? What is possible now?",
            required: true,
          },
          {
            id: 'matrix-costs-not-using',
            type: 'textarea',
            label: 'Costs of NOT using (what sobriety asks of me)',
            placeholder:
              "This is the honest one. Sobriety has real costs — discomfort, effort, confronting things you used to avoid, social cost with some people. What is hard about not using?",
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'Honest Weight',
        content:
          "Now step back from the quadrants and check in with yourself honestly.",
        fields: [
          {
            id: 'matrix-motivation-rating',
            type: 'slider',
            label: 'If I\'m completely honest, my motivation to stay sober right now is:',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'matrix-pull-directions',
            type: 'textarea',
            label: 'What\'s pulling me in each direction right now?',
            placeholder:
              "Don't summarize the quadrants — reflect on what is actually most compelling to you today. What is the weight behind each pull?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Long View',
        content:
          "Step out of today for a moment. Look further down both roads.",
        fields: [
          {
            id: 'matrix-long-view',
            type: 'textarea',
            label: 'When I imagine my life 5 years from now — which path leads where I actually want to go?',
            placeholder:
              "Not which path is easier. Not which path feels better today. The path that leads to the life and person you actually want to be. Describe what each 5-year version looks like.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Update Log',
        content:
          "Ambivalence shifts over time. Return to this exercise when you're questioning your recovery — or just monthly as a check-in. The pattern of your ratings over time is informative.",
        fields: [
          {
            id: 'matrix-update-date',
            type: 'date',
            label: 'Date of this reflection',
          },
          {
            id: 'matrix-update-notes',
            type: 'textarea',
            label: 'What has changed since I last did this exercise?',
            placeholder:
              "What's shifted in your motivation, your reasons, or your circumstances? What's the same?",
          },
        ],
        optional: true,
      },
    ],
  },

  {
    id: 'euphoric-recall-antidote',
    slug: 'euphoric-recall-antidote',
    title: 'Euphoric Recall Antidote',
    subtitle: 'Counter the highlight reel with the whole story',
    description:
      "Euphoric recall is addiction's editor — it shows you the best moments while hiding the full truth. This worksheet walks you through a specific memory your mind keeps replaying and counters it with what actually happened and what it cost.",
    category: 'triggers-urges',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT'],
    tags: ['euphoric-recall', 'memory', 'craving', 'CBT', 'cognitive', 'relapse-prevention'],
    icon: '🎞️',
    color: '#9E7BAA',
    version: 1,
    relatedWorksheets: ['playing-tape-forward', 'craving-anatomy', 'decision-matrix'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'How Euphoric Recall Works',
        content:
          "Euphoric recall is a well-documented phenomenon in addiction: the brain preferentially recalls positive memories of using while suppressing or minimizing the negative ones. It isn't intentional dishonesty — it is a neurological bias built partly by the dopamine system itself.\n\nAddiction reshapes memory encoding. Substances flood the dopamine system during use, and the brain stamps those moments with 'this was important and good.' The consequences — the shame, the physical aftermath, the damage to relationships — don't get the same neurological emphasis. So they fade faster.\n\nThe result: when a craving hits or when boredom/stress triggers nostalgia, the mind shows you the highlight reel. The first time it worked. The best party. The one night that felt perfect.\n\nThe antidote is not willpower. It is deliberately and specifically remembering the rest of the story. Not in a self-punishing way — in a clear-eyed, full-truth way. This worksheet helps you do that and then store the full story somewhere you can return to.",
      },
      {
        type: 'freewrite',
        title: 'The Memory Your Mind Keeps Showing You',
        content:
          "Let it speak first. Write down the specific memory — the one your brain returns to when it wants to make a case for using.",
        fields: [
          {
            id: 'euphoric-memory',
            type: 'textarea',
            label: 'The "good time" memory — the highlight reel version',
            placeholder:
              "What specific memory does your mind keep showing you? Describe it as your addictive brain presents it — the good feelings, the appeal, the edited version.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Rest of the Story',
        content:
          "Now tell the full truth. Not to torture yourself — to give your brain the complete file, not just the edited preview.",
        fields: [
          {
            id: 'euphoric-after',
            type: 'textarea',
            label: 'What happened right after that "good" time?',
            placeholder:
              "An hour later. The next morning. The specific things that happened that the highlight reel cuts out. What did it actually look like?",
            required: true,
          },
          {
            id: 'euphoric-cost',
            type: 'textarea',
            label: 'What did it cost you?',
            placeholder:
              "Financially, physically, emotionally, relationally. What did you lose or damage as a result of that time — or that period of using?",
            required: true,
          },
          {
            id: 'euphoric-others-cost',
            type: 'textarea',
            label: 'Who else paid a price?',
            placeholder:
              "Name the people if you can. What did your using cost the people around you — even if they never said so? Even if they tried not to show it?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Pattern',
        content:
          "Zoom out from this one memory to the larger pattern.",
        fields: [
          {
            id: 'euphoric-pattern',
            type: 'textarea',
            label: 'How many of these "good times" actually ended well — when you play the full tape?',
            placeholder:
              "Be honest. Not to punish yourself, but to see the real ratio. What percentage of the times your mind calls 'good' actually were, from start to finish?",
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Your Reality-Check Library',
        content:
          "This is a document to keep and return to. The next time euphoric recall shows you the highlight reel, you have the full story written down in your own words.",
        fields: [
          {
            id: 'reality-check-library',
            type: 'textarea',
            label: 'Your full-truth entry — keep this and reread it when the trailer starts playing',
            placeholder:
              "Write a summary of this memory in full-truth form — including what it felt like, what it cost, and what you know now that your using brain hides. Write it as a letter to the version of you who will need to read this.",
            required: true,
          },
        ],
      },
    ],
  },
]
