import type { Worksheet } from '../types'

export const emotionalRegulationWorksheets: Worksheet[] = [
  {
    id: 'emotion-tracking-log',
    slug: 'emotion-tracking-log',
    title: 'Emotion Tracking Log',
    subtitle: 'You can\'t regulate what you can\'t notice',
    description:
      'The foundation of emotional regulation is awareness — knowing what you\'re actually feeling, when, and what\'s driving it. This daily log builds that awareness muscle. Over time, patterns emerge that help you understand yourself and stay ahead of your most vulnerable moments.',
    category: 'emotional-regulation',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    frequency: 'daily',
    therapeuticFramework: ['DBT', 'CBT'],
    tags: ['tracking', 'emotions', 'daily', 'awareness', 'patterns', 'self-knowledge'],
    icon: '📊',
    color: '#06B6D4',
    featured: true,
    version: 1,
    relatedWorksheets: ['emotion-wheel', 'riding-emotional-wave', 'anger-iceberg'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Track?',
        content:
          "Most people in recovery have years of training in not feeling emotions — or in being overwhelmed by them without understanding what's happening. Emotional awareness is a skill, not a trait. It's built through practice.\n\nThis log asks you to check in three times a day — morning, midday, evening. You don't need to be accurate. You don't need to have the right word. You just need to practice pausing and noticing. Over days and weeks, patterns emerge: the emotions that recur, the triggers you hadn't fully named, the times of day you're most vulnerable. That information is directly useful for your recovery.",
      },
      {
        type: 'scale',
        title: 'Morning Check',
        content:
          "Before the day gets going — how are you, really? Pick the closest option and rate the intensity.",
        fields: [
          {
            id: 'morning-emotion',
            type: 'select',
            label: 'Primary morning emotion:',
            options: [
              'Anxious',
              'Calm',
              'Hopeful',
              'Irritable',
              'Sad',
              'Numb',
              'Grateful',
              'Restless',
              'Peaceful',
              'Overwhelmed',
              'Energized',
              'Lonely',
              'Other',
            ],
            required: true,
          },
          {
            id: 'morning-intensity',
            type: 'slider',
            label: 'Intensity (1 = barely noticeable, 10 = very strong)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'morning-driver',
            type: 'textarea',
            label: 'What\'s driving it?',
            placeholder:
              'A thought you woke up with, something happening today you\'re dreading or anticipating, a dream, a physical feeling. What\'s behind this morning\'s emotional weather?',
          },
        ],
      },
      {
        type: 'scale',
        title: 'Midday Check',
        content:
          "Pause. Take a breath. How has the day changed you so far?",
        fields: [
          {
            id: 'midday-emotion',
            type: 'select',
            label: 'Primary midday emotion:',
            options: [
              'Anxious',
              'Calm',
              'Hopeful',
              'Irritable',
              'Sad',
              'Numb',
              'Grateful',
              'Restless',
              'Peaceful',
              'Overwhelmed',
              'Energized',
              'Lonely',
              'Other',
            ],
          },
          {
            id: 'midday-intensity',
            type: 'slider',
            label: 'Intensity (1 = barely noticeable, 10 = very strong)',
            min: 1,
            max: 10,
          },
          {
            id: 'midday-driver',
            type: 'textarea',
            label: 'What\'s driving it?',
            placeholder:
              'What happened since morning? What shifted? What\'s been building?',
          },
        ],
      },
      {
        type: 'scale',
        title: 'Evening Check',
        content:
          "At the close of the day — where did you land?",
        fields: [
          {
            id: 'evening-emotion',
            type: 'select',
            label: 'Primary evening emotion:',
            options: [
              'Anxious',
              'Calm',
              'Hopeful',
              'Irritable',
              'Sad',
              'Numb',
              'Grateful',
              'Restless',
              'Peaceful',
              'Overwhelmed',
              'Energized',
              'Lonely',
              'Other',
            ],
          },
          {
            id: 'evening-intensity',
            type: 'slider',
            label: 'Intensity (1 = barely noticeable, 10 = very strong)',
            min: 1,
            max: 10,
          },
          {
            id: 'evening-driver',
            type: 'textarea',
            label: 'What\'s driving it?',
            placeholder:
              'What defined the day emotionally? What happened, what you\'re carrying, what brought you down or up.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Today\'s Pattern',
        content:
          "Looking at all three check-ins together — what do you notice?",
        fields: [
          {
            id: 'daily-emotion-pattern',
            type: 'textarea',
            label: 'What pattern do I notice in my emotions today?',
            placeholder:
              'Did you start one way and shift? Stay the same all day? Get triggered at a specific time? Notice what the data is showing you.',
          },
          {
            id: 'daily-top-trigger',
            type: 'text',
            label: 'The trigger I notice most:',
            placeholder:
              'A person, situation, time of day, physical state, thought. What was the most significant driver today?',
          },
        ],
      },
    ],
  },

  {
    id: 'emotion-wheel',
    slug: 'emotion-wheel',
    title: 'The Emotion Wheel Deep Dive',
    subtitle: '"Angry" is too vague — precision is power',
    description:
      'Emotional precision matters. "Angry" tells you almost nothing — "betrayed" or "powerless" gives you something to actually work with. This worksheet guides you from a broad emotion to the specific, nuanced experience underneath it.',
    category: 'emotional-regulation',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'CBT'],
    tags: ['emotions', 'vocabulary', 'precision', 'awareness', 'as-needed', 'naming'],
    icon: '🎨',
    color: '#06B6D4',
    version: 1,
    relatedWorksheets: ['emotion-tracking-log', 'anger-iceberg', 'emotional-needs-inventory'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Precision Matters',
        content:
          "Research by Lisa Feldman Barrett and others shows that people with a larger emotional vocabulary — the ability to distinguish between closely related emotions — tend to have greater emotional regulation, less impulsive behavior, and lower levels of stress.\n\nThis isn't pedantic. 'Angry' is almost too broad to act on. But 'betrayed' tells you something specific: you trusted someone, and they didn't honor that trust. That points to a conversation. 'Powerless' tells you something else: you feel trapped, without options. That points to identifying what you actually can control.\n\nFor people in recovery, emotional precision is especially important. Emotions that stay vague tend to drive behavior without being understood. The more specifically you can name what you're feeling, the more clearly you can see what it needs.",
      },
      {
        type: 'prompt',
        title: 'Start Broad',
        content:
          "Start with the big category — the general emotional family. We'll get more specific from there.",
        fields: [
          {
            id: 'emotion-broad',
            type: 'select',
            label: 'The basic emotion I\'m feeling:',
            options: [
              'Angry',
              'Sad',
              'Scared',
              'Happy',
              'Disgusted',
              'Surprised',
              'Ashamed',
            ],
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Drill Down',
        content:
          "Now go deeper. Look at the options for your basic emotion and pick the word that most accurately captures your specific experience. These aren't just synonyms — they point to different situations and different needs.",
        fields: [
          {
            id: 'emotion-specific-angry',
            type: 'select',
            label: 'If ANGRY — the more specific emotion:',
            options: [
              'Frustrated',
              'Resentful',
              'Contemptuous',
              'Envious',
              'Betrayed',
              'Disgusted',
              'Irritated',
              'Furious',
              'Exasperated',
              'Powerless',
            ],
          },
          {
            id: 'emotion-specific-sad',
            type: 'select',
            label: 'If SAD — the more specific emotion:',
            options: [
              'Lonely',
              'Heartbroken',
              'Grief',
              'Abandoned',
              'Disappointed',
              'Hopeless',
              'Depressed',
              'Bored',
              'Empty',
              'Numb',
            ],
          },
          {
            id: 'emotion-specific-scared',
            type: 'select',
            label: 'If SCARED — the more specific emotion:',
            options: [
              'Anxious',
              'Terrified',
              'Vulnerable',
              'Rejected',
              'Humiliated',
              'Powerless',
              'Inadequate',
              'Inferior',
              'Overwhelmed',
              'Worried',
            ],
          },
          {
            id: 'emotion-specific-happy',
            type: 'select',
            label: 'If HAPPY — the more specific emotion:',
            options: [
              'Content',
              'Hopeful',
              'Proud',
              'Joyful',
              'Grateful',
              'Inspired',
              'Excited',
              'Serene',
              'Loving',
              'Peaceful',
            ],
          },
          {
            id: 'emotion-specific-ashamed',
            type: 'select',
            label: 'If ASHAMED — the more specific emotion:',
            options: [
              'Guilty',
              'Embarrassed',
              'Humiliated',
              'Remorseful',
              'Exposed',
              'Worthless',
            ],
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'Body Location',
        content:
          "Emotions live in the body, not just the mind. Now that you have a more precise word, find it in your body.",
        fields: [
          {
            id: 'emotion-body-location',
            type: 'textarea',
            label: 'Where in your body do you feel this specific emotion?',
            placeholder:
              'Chest? Throat? Stomach? Jaw? Lower back? Does it move? What shape or texture does it have if you pay attention?',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What It Needs',
        content:
          "Every emotion is a signal pointing toward a need. Now that you have the specific emotion — what is it telling you? What does it need?",
        fields: [
          {
            id: 'emotion-message',
            type: 'textarea',
            label: 'This emotion is telling me that I need:',
            placeholder:
              'Betrayal needs acknowledgment and maybe a conversation. Powerlessness needs to identify what you can control. Loneliness needs connection. Grief needs space and witness. What does your specific emotion actually need?',
            required: true,
          },
          {
            id: 'emotion-honor-now',
            type: 'textarea',
            label: 'One way I can honor that need right now:',
            placeholder:
              'One concrete step. Not the full solution — one real thing you can do today for this specific need.',
          },
        ],
      },
    ],
  },

  {
    id: 'riding-emotional-wave',
    slug: 'riding-emotional-wave',
    title: 'Riding the Emotional Wave',
    subtitle: 'The wave always peaks. Then it falls. Always.',
    description:
      'DBT teaches that emotions are temporary — they peak and subside like waves. You don\'t have to act on them at their peak. This worksheet helps you track an emotion in real time, building evidence that you can wait it out.',
    category: 'emotional-regulation',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT'],
    tags: ['DBT', 'distress-tolerance', 'emotions', 'waiting', 'urges', 'as-needed'],
    icon: '🌊',
    color: '#06B6D4',
    version: 1,
    relatedWorksheets: ['sitting-with-discomfort', 'urge-meditation', 'radical-acceptance'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Wave Model',
        content:
          "DBT (Dialectical Behavior Therapy) teaches something counterintuitive: if you don't act on an emotion — don't try to suppress it, don't act out of it, don't flee from it — it tends to peak and then fall on its own. Like a wave.\n\nThis is the basis for urge surfing and distress tolerance skills: the recognition that emotional intensity is temporary. Cravings, rage, grief, panic — they all have a natural arc. They build, they peak, they descend.\n\nThe problem in addiction is that we learned to cut that arc short. The craving builds and we use. The pain rises and we numb. Over time, we lose the evidence that we could have waited it out — because we never do.\n\nThis worksheet tracks an emotion in real time across 20-30 minutes. The goal isn't to feel nothing. The goal is to collect evidence that you survived the wave.",
      },
      {
        type: 'scale',
        title: 'Track the Wave — Start',
        content:
          "Name what you're feeling and rate it. Then set a timer for 10 minutes.",
        fields: [
          {
            id: 'wave-intensity-start',
            type: 'slider',
            label: 'Emotion intensity when I started this worksheet (0 = none, 10 = overwhelming)',
            min: 0,
            max: 10,
            required: true,
          },
          {
            id: 'wave-time-start',
            type: 'text',
            label: 'Time started:',
            placeholder: 'e.g. 2:45pm',
          },
        ],
      },
      {
        type: 'scale',
        title: '10-Minute Check',
        content:
          "10 minutes have passed. Don't rush this — if it hasn't been 10 minutes, wait. Then rate and write.",
        fields: [
          {
            id: 'wave-intensity-10',
            type: 'slider',
            label: 'Intensity now (0 = none, 10 = overwhelming)',
            min: 0,
            max: 10,
          },
          {
            id: 'wave-10-minute-notice',
            type: 'textarea',
            label: 'What I notice:',
            placeholder:
              'Has anything shifted? Is it the same? Different? What are you experiencing in your body right now?',
          },
        ],
      },
      {
        type: 'scale',
        title: '20-Minute Check',
        content:
          "Another 10 minutes. Wait for it. Then rate and write.",
        fields: [
          {
            id: 'wave-intensity-20',
            type: 'slider',
            label: 'Intensity now (0 = none, 10 = overwhelming)',
            min: 0,
            max: 10,
          },
          {
            id: 'wave-20-minute-change',
            type: 'textarea',
            label: 'What changed?',
            placeholder:
              'Is the arc visible yet — did it peak and start to fall? Is it still building? What did the last 10 minutes feel like?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What Happened',
        content:
          "Now look at the full arc. What actually happened to this emotion over 20 minutes?",
        fields: [
          {
            id: 'wave-arc-description',
            type: 'textarea',
            label: 'Describe the arc of this emotion — did it peak and come down?',
            placeholder:
              'Be specific. What was the peak intensity, and when? What was it at the end? What did the descent (if it happened) actually feel like?',
          },
          {
            id: 'wave-what-helped',
            type: 'textarea',
            label: 'What helped?',
            placeholder:
              'Breathing? Staying still? Writing? Movement? Nothing specific — just time? Note what supported you.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'My Wave Data',
        content:
          "Over time, tracking emotional waves builds evidence for your own capacity. This is about building that case — slowly, from your own experience.",
        fields: [
          {
            id: 'wave-pattern-learning',
            type: 'textarea',
            label: 'Looking at the emotions I\'ve tracked: what\'s my average peak duration? What does this prove about my ability to wait it out?',
            placeholder:
              'If you\'ve done this before: how long does your peak usually last before the descent? If this is your first time: what does today\'s data suggest? The wave came down. That\'s evidence. That always counts.',
          },
        ],
      },
    ],
  },

  {
    id: 'emotional-flashback-firstaid',
    slug: 'emotional-flashback-firstaid',
    title: 'Emotional Flashback First Aid',
    subtitle: 'This is from the past. You\'re in the present. Let\'s get you back.',
    description:
      'Adapted from Pete Walker\'s work on complex PTSD: an emotional flashback is when past trauma floods the present, making you feel suddenly very young, very afraid, or overwhelmed beyond what the current situation warrants. This worksheet is for those moments.',
    category: 'emotional-regulation',
    difficulty: 'advanced',
    estimatedMinutes: 10,
    frequency: 'as-needed',
    therapeuticFramework: ['TI', 'somatic'],
    tags: ['trauma', 'flashback', 'grounding', 'first-aid', 'acute', 'PTSD'],
    icon: '🚨',
    color: '#06B6D4',
    version: 1,
    relatedWorksheets: ['safety-stabilization', 'trigger-vs-trauma-response', 'window-of-tolerance'],
    sections: [
      {
        type: 'instruction',
        title: 'Before You Continue',
        content:
          "This worksheet is for moments when past trauma seems to be flooding the present — when your emotional reaction feels much larger than the current situation, when you suddenly feel very young or very unsafe, when you feel frozen, dissociated, or overwhelmed by shame or worthlessness without a clear present-day cause.\n\nAdapted from Pete Walker's work on complex PTSD and emotional flashbacks.\n\n**If you feel unsafe, suicidal, or in crisis, please stop and contact your therapist, sponsor, or a crisis line first.** This worksheet is a support tool, not a replacement for professional care or a crisis plan.\n\nIf you're not in crisis but are experiencing an intense, disproportionate emotional response — you're in the right place. Go slowly.",
      },
      {
        type: 'prompt',
        title: 'Name It',
        content:
          "The first step in Pete Walker's emotional flashback management is recognizing what's happening. Naming it doesn't make it worse — it helps your brain start to locate it in time.",
        fields: [
          {
            id: 'flashback-recognition',
            type: 'select',
            label: 'I think I\'m having an emotional flashback because:',
            options: [
              'I feel suddenly very young or very afraid',
              'My reaction seems much bigger than the situation',
              'I feel like I\'m back in the past',
              'I feel frozen or collapsed',
              'I\'m overwhelmed by shame or worthlessness',
              'Other',
            ],
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Grounding Sequence',
        content:
          "Work through this list one step at a time. Don't rush. Check each step as you complete it. The goal is to bring you back to the present.",
        fields: [
          {
            id: 'flashback-grounding-steps',
            type: 'checkbox',
            label: 'Steps I\'ve completed:',
            options: [
              'I named it as a flashback ("This is a flashback — it is from my past, not the present")',
              'I took 5 slow breaths (in through the nose, out through the mouth)',
              'I feel my feet on the floor (press them down and notice the sensation)',
              'I named 5 things I can see right now',
              'I reminded myself: I am safe right now',
              'I reminded myself: I am an adult — not the child who was in danger',
              'I reminded myself: This feeling is from the past',
              'I reminded myself: It will pass',
            ],
          },
        ],
      },
      {
        type: 'letter',
        title: 'Self-Compassion',
        content:
          "Emotional flashbacks are exhausting, disorienting, and often followed by shame. You don't need a lecture — you need to be held. Write to yourself the way you'd want to be spoken to in this moment.",
        fields: [
          {
            id: 'flashback-self-compassion',
            type: 'textarea',
            label: 'What do I need to hear right now? Write it to yourself.',
            placeholder:
              '"You\'re okay. That was the past and this is now." "You survived this before." "You\'re not crazy — your nervous system is protecting you the only way it knows how." What does the part of you that just went through that need to hear?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'After — When You\'re Ready',
        content:
          "Only when you feel more grounded. This is for understanding, not for processing in the middle of the storm.",
        fields: [
          {
            id: 'flashback-trigger',
            type: 'textarea',
            label: 'What may have triggered this flashback?',
            placeholder:
              'A person, a situation, a tone of voice, a smell, a specific kind of interaction, a feeling of powerlessness. You don\'t have to have a perfect answer — just what you notice.',
          },
          {
            id: 'flashback-tell-someone',
            type: 'text',
            label: 'Who I\'ll tell about this:',
            placeholder: 'Your therapist, sponsor, or trusted support person.',
          },
          {
            id: 'flashback-next-step',
            type: 'text',
            label: 'Next step in my support plan:',
            placeholder:
              'Call my therapist. Go to a meeting. Text my sponsor. Rest. Whatever the real next step is.',
          },
        ],
      },
    ],
  },

  {
    id: 'anger-iceberg',
    slug: 'anger-iceberg',
    title: 'The Anger Iceberg',
    subtitle: 'What\'s above the water is rarely the whole story',
    description:
      'Anger is often the visible tip of a much deeper set of emotions — hurt, fear, shame, grief, powerlessness. Getting to what\'s underneath the anger is where the real work lives. This worksheet goes there.',
    category: 'emotional-regulation',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'DBT'],
    tags: ['anger', 'emotions', 'iceberg', 'vulnerability', 'as-needed', 'insight'],
    icon: '🧊',
    color: '#06B6D4',
    version: 1,
    relatedWorksheets: ['emotion-wheel', 'riding-emotional-wave', 'emotional-needs-inventory'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Iceberg Model',
        content:
          "Anger is often called a 'secondary emotion' — not because it isn't real, but because it typically covers more vulnerable emotions underneath. When we feel hurt, afraid, ashamed, or powerless, those feelings are uncomfortable and exposing. Anger is more controllable, more energizing, more protective.\n\nBut in recovery, unchecked anger is one of the biggest relapse risks. Not because anger is wrong — anger is often entirely valid — but because anger that hasn't been understood tends to grow, isolate, and seek an outlet.\n\nGetting below the surface doesn't mean dismissing the anger. It means understanding its full structure, so you can actually address what's driving it rather than just managing the symptom.",
      },
      {
        type: 'freewrite',
        title: 'The Surface',
        content:
          "Start with what's visible. No need to get beneath it yet. What happened? What are you actually angry about?",
        fields: [
          {
            id: 'anger-surface',
            type: 'textarea',
            label: 'What happened? What am I angry about?',
            placeholder:
              'Just tell it plainly — what occurred, who was involved, what they did or said, why it got you. Don\'t analyze it yet.',
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'Beneath the Surface',
        content:
          "Below the anger, there's usually a mix of these deeper emotions. Rate each one honestly — how much of each is present? — and write about what specifically is driving it.",
        fields: [
          {
            id: 'iceberg-hurt-scale',
            type: 'slider',
            label: 'HURT — how present is hurt underneath this anger?',
            min: 1,
            max: 10,
          },
          {
            id: 'iceberg-hurt-what',
            type: 'textarea',
            label: 'What hurt me?',
            placeholder:
              'What specifically stung? What did this person do or not do that made you feel less than, disrespected, unseen, or wounded?',
          },
          {
            id: 'iceberg-fear-scale',
            type: 'slider',
            label: 'FEAR — how present is fear underneath this anger?',
            min: 1,
            max: 10,
          },
          {
            id: 'iceberg-fear-what',
            type: 'textarea',
            label: 'What am I afraid of?',
            placeholder:
              'That this relationship is over? That you\'re losing control? That something true and painful is being confirmed? Fear often drives anger when we feel threatened.',
          },
          {
            id: 'iceberg-shame-scale',
            type: 'slider',
            label: 'SHAME — is embarrassment or shame part of this?',
            min: 1,
            max: 10,
          },
          {
            id: 'iceberg-shame-what',
            type: 'textarea',
            label: 'Am I embarrassed or ashamed about any part of this?',
            placeholder:
              'Shame can trigger anger as a defense. Is part of the anger protecting you from feeling exposed?',
          },
          {
            id: 'iceberg-grief-scale',
            type: 'slider',
            label: 'GRIEF — is there a loss underneath this?',
            min: 1,
            max: 10,
          },
          {
            id: 'iceberg-grief-what',
            type: 'textarea',
            label: 'Is there a loss underneath this?',
            placeholder:
              'A relationship that used to be different. A version of yourself. An expectation that isn\'t being met. Something you wanted that isn\'t happening.',
          },
          {
            id: 'iceberg-powerless-scale',
            type: 'slider',
            label: 'POWERLESS — where do you feel out of control in this situation?',
            min: 1,
            max: 10,
          },
          {
            id: 'iceberg-powerless-what',
            type: 'textarea',
            label: 'Where do I feel like I have no control?',
            placeholder:
              'Powerlessness is one of the most common anger triggers. What specifically feels out of your hands?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What the Real Emotion Needs',
        content:
          "You've found what's underneath. Now: what does it actually need?",
        fields: [
          {
            id: 'iceberg-real-emotion',
            type: 'textarea',
            label: 'The emotion under the anger that most needs attention is:',
            placeholder:
              'Pick the one from above that felt most true, most heavy, or most avoided. Name it clearly.',
            required: true,
          },
          {
            id: 'iceberg-real-need',
            type: 'textarea',
            label: 'What it needs:',
            placeholder:
              'To be witnessed. To be expressed safely. A conversation. Rest. Distance from the situation. Compassion for yourself. What does this specific emotion actually need from you right now?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Cool-Down Protocol',
        content:
          "Before you act on this anger — or if you're in the middle of it right now — here's your plan.",
        fields: [
          {
            id: 'anger-cooldown-steps',
            type: 'multi-select',
            label: 'My immediate steps:',
            options: [
              'Walk away for 20 minutes',
              'Cold water on face',
              'Physical exercise',
              'Call a support person',
              'Write it out',
              'Sleep on it',
              'Other',
            ],
          },
          {
            id: 'anger-next-30-minutes',
            type: 'textarea',
            label: 'My specific plan for the next 30 minutes:',
            placeholder:
              'Not what you\'ll do about the situation — what you\'ll do for yourself right now to regulate before you do anything else.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'sitting-with-discomfort',
    slug: 'sitting-with-discomfort',
    title: 'Sitting with Discomfort',
    subtitle: 'Building the muscle of not running',
    description:
      'Recovery means developing distress tolerance: the ability to experience uncomfortable feelings without acting to escape them. This is built through graduated practice — and it works. This worksheet is the practice.',
    category: 'emotional-regulation',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'ACT'],
    tags: ['distress-tolerance', 'discomfort', 'DBT', 'sitting', 'cravings', 'practice'],
    icon: '🪑',
    color: '#06B6D4',
    version: 1,
    relatedWorksheets: ['riding-emotional-wave', 'radical-acceptance', 'urge-meditation'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why This Is the Work',
        content:
          "One of the core ways addiction works is by training you to escape discomfort immediately. Uncomfortable feeling arises — you use. Over time, you lose the ability to just sit with difficult feelings. The tolerance muscle atrophies.\n\nRecovery rebuilds it. But rebuilding requires graduated practice — experiencing discomfort in small doses, staying with it, and observing that you survived it. Every time you do this, you get slightly more evidence that you can handle more than you thought.\n\nDBT calls this distress tolerance. ACT calls it willingness. The tradition is ancient. The skill is real. And it is absolutely learnable.",
      },
      {
        type: 'prompt',
        title: 'Identify Your Discomfort',
        content:
          "Name what you're working with today.",
        fields: [
          {
            id: 'discomfort-type',
            type: 'select',
            label: 'Current discomfort type:',
            options: [
              'Emotional pain',
              'Boredom',
              'Social anxiety',
              'Physical discomfort',
              'Craving',
              'Uncertainty',
              'Grief',
              'Other',
            ],
            required: true,
          },
          {
            id: 'discomfort-intensity-before',
            type: 'slider',
            label: 'Intensity right now (1 = mild, 10 = very intense)',
            min: 1,
            max: 10,
            required: true,
          },
        ],
      },
      {
        type: 'instruction',
        title: 'The Sit',
        content:
          "Set a timer for 5 minutes.\n\nDon't try to fix this feeling. Don't try to reason your way out of it. Don't distract yourself. Just be with it.\n\nIf it helps: name the sensation as it changes. Notice where it lives in your body. Watch it like weather.\n\nYou are not in danger. You are practicing.",
        fields: [
          {
            id: 'discomfort-did-it',
            type: 'checkbox',
            label: 'The practice:',
            options: ['I did this — I sat with the discomfort for 5 minutes without acting to escape it'],
          },
          {
            id: 'discomfort-5min-notice',
            type: 'textarea',
            label: 'What I noticed during the 5 minutes:',
            placeholder:
              'What happened in your body, your thoughts, your experience? Did the intensity change? Did anything shift? What was hard? What surprised you?',
          },
        ],
      },
      {
        type: 'scale',
        title: 'After the Timer',
        content:
          "You made it. Now take stock.",
        fields: [
          {
            id: 'discomfort-intensity-after',
            type: 'slider',
            label: 'Intensity now (1 = mild, 10 = very intense)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'discomfort-what-happened',
            type: 'textarea',
            label: 'What happened? Did it change?',
            placeholder:
              'Did it peak and fall? Stay the same? Get worse before it got better? What do you notice having actually stayed with it?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Expanding Tolerance',
        content:
          "Every time you do this, you add to the evidence. What did you prove today?",
        fields: [
          {
            id: 'discomfort-evidence',
            type: 'textarea',
            label: 'Evidence from this practice that I can tolerate more than I thought:',
            placeholder:
              'You stayed. The feeling was uncomfortable. You didn\'t act on it. What does that prove? Build this case slowly, from your own experience.',
          },
          {
            id: 'discomfort-next-time',
            type: 'text',
            label: 'How long will I try sitting with discomfort next time?',
            placeholder:
              '7 minutes? 10? Build slowly. Each time is its own victory.',
          },
        ],
      },
    ],
  },

  {
    id: 'emotional-needs-inventory',
    slug: 'emotional-needs-inventory',
    title: 'Emotional Needs Inventory',
    subtitle: 'Addiction tried to meet real needs. Recovery means finding better ways.',
    description:
      'Addiction is often a misguided attempt to meet genuine human needs — safety, connection, autonomy, meaning. This inventory helps you see which needs are going unmet in your recovery and identify healthier paths toward meeting them.',
    category: 'emotional-regulation',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['ACT', 'CBT'],
    tags: ['needs', 'motivation', 'connection', 'meaning', 'self-awareness', 'values'],
    icon: '🧩',
    color: '#06B6D4',
    version: 1,
    relatedWorksheets: ['emotion-wheel', 'identity-reclamation', 'finding-the-gift'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Needs, Not Weakness',
        content:
          "One of the most important reframes in addiction recovery is this: addiction wasn't a character flaw or a moral failure. It was — at its root — an attempt to meet real human needs that weren't being met in any other way.\n\nMaslow's hierarchy, attachment theory, and self-determination theory all point to the same set of core human needs: safety, belonging, autonomy, competence, love, and meaning. When these go unmet, people suffer. When they go unmet long enough, people do desperate things to fill the gap.\n\nThis inventory asks you to look honestly at how well these needs are currently being met in your recovery — and at the ways addiction tried (and ultimately failed) to meet them. The goal isn't guilt. The goal is clarity: what do you actually need, and how can you get it in a way that doesn't cost you everything?",
      },
      {
        type: 'matrix',
        title: 'The Needs Assessment',
        content:
          "For each core need, rate how well it's currently being met, reflect on how addiction tried to address it, and identify a healthier path forward.",
        fields: [
          {
            id: 'need-safety-rating',
            type: 'slider',
            label: 'SAFETY — How well is this need being met in my recovery? (1 = barely met, 10 = well met)',
            min: 1,
            max: 10,
          },
          {
            id: 'need-safety-addiction',
            type: 'textarea',
            label: 'How addiction tried to meet my need for safety:',
            placeholder:
              'Numbing fear, creating predictability, giving you control over how you felt, reducing vulnerability. How did substances try to make you feel safe?',
          },
          {
            id: 'need-safety-now',
            type: 'textarea',
            label: 'How I can better meet my need for safety now:',
            placeholder:
              'A stable routine, a safe person to call, a grounding practice, a home environment that feels okay. What actual safety do you have, and what could you build?',
          },
          {
            id: 'need-belonging-rating',
            type: 'slider',
            label: 'BELONGING/CONNECTION — How well is this need being met? (1 = barely met, 10 = well met)',
            min: 1,
            max: 10,
          },
          {
            id: 'need-belonging-addiction',
            type: 'textarea',
            label: 'How addiction tried to meet my need for belonging:',
            placeholder:
              'The social world around using, a shared identity, the sense of belonging to something. Where did addiction offer connection?',
          },
          {
            id: 'need-belonging-now',
            type: 'textarea',
            label: 'How I can better meet my need for belonging now:',
            placeholder:
              'Recovery community, a meeting group, a sponsor relationship, family repair, new friendships. Where does real connection exist or could exist for you?',
          },
          {
            id: 'need-autonomy-rating',
            type: 'slider',
            label: 'AUTONOMY — How well is this need being met? (1 = barely met, 10 = well met)',
            min: 1,
            max: 10,
          },
          {
            id: 'need-autonomy-addiction',
            type: 'textarea',
            label: 'How addiction tried to meet my need for autonomy:',
            placeholder:
              'The sense of choosing your own experience, defiance, freedom from constraint. How did substances relate to your need to feel in control of your own life?',
          },
          {
            id: 'need-autonomy-now',
            type: 'textarea',
            label: 'How I can better meet my need for autonomy now:',
            placeholder:
              'Making real choices, setting your own direction, building a life you actually chose. Where do you have genuine agency?',
          },
          {
            id: 'need-competence-rating',
            type: 'slider',
            label: 'COMPETENCE — How well is this need being met? (1 = barely met, 10 = well met)',
            min: 1,
            max: 10,
          },
          {
            id: 'need-competence-addiction',
            type: 'textarea',
            label: 'How addiction tried to meet my need for competence:',
            placeholder:
              'Feeling capable when using, the identity of "knowing how to get what you needed," confidence that disappeared without it. How did substances affect your sense of capability?',
          },
          {
            id: 'need-competence-now',
            type: 'textarea',
            label: 'How I can better meet my need for competence now:',
            placeholder:
              'Skills you\'re building, sobriety itself as evidence of competence, work, creative projects, sponsoring others. Where can you feel genuinely capable?',
          },
          {
            id: 'need-love-rating',
            type: 'slider',
            label: 'LOVE (giving and receiving) — How well is this need being met? (1 = barely met, 10 = well met)',
            min: 1,
            max: 10,
          },
          {
            id: 'need-love-addiction',
            type: 'textarea',
            label: 'How addiction tried to meet my need for love:',
            placeholder:
              'Warmth you couldn\'t get otherwise, filling the loneliness, replacing connections that were absent or painful.',
          },
          {
            id: 'need-love-now',
            type: 'textarea',
            label: 'How I can better meet my need for love now:',
            placeholder:
              'Relationships in recovery, repairing family connections, allowing yourself to be loved and to give it. Where is real love accessible?',
          },
          {
            id: 'need-meaning-rating',
            type: 'slider',
            label: 'MEANING/PURPOSE — How well is this need being met? (1 = barely met, 10 = well met)',
            min: 1,
            max: 10,
          },
          {
            id: 'need-meaning-addiction',
            type: 'textarea',
            label: 'How addiction tried to meet my need for meaning:',
            placeholder:
              'The organizing principle addiction gave your days — getting it, using it, recovering. How did the addiction give structure, even destructive structure?',
          },
          {
            id: 'need-meaning-now',
            type: 'textarea',
            label: 'How I can better meet my need for meaning now:',
            placeholder:
              'Service to others, recovery community, creativity, spiritual practice, work that matters, being present for people who need you. What gives your life meaning?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Most Unmet',
        content:
          "Looking at your ratings — which need is most unmet in your recovery right now?",
        fields: [
          {
            id: 'needs-most-unmet',
            type: 'textarea',
            label: 'The need most unmet in my recovery right now:',
            placeholder: 'Name it and say a bit about why it\'s going unmet.',
            required: true,
          },
          {
            id: 'needs-realistic-step',
            type: 'textarea',
            label: 'One realistic step to better meet it this week:',
            placeholder:
              'Not a complete solution — one step. Specific, achievable, this week.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What Recovery Can Give',
        content:
          "Addiction tried to meet your needs and ultimately failed — costing you far more than it provided. Recovery can actually meet some of these needs in ways addiction never could.",
        fields: [
          {
            id: 'needs-recovery-gives',
            type: 'textarea',
            label: 'Needs that recovery actually meets better than addiction ever did:',
            placeholder:
              'Real connection. Actual safety. Genuine competence. True freedom. The ability to give and receive love without the substance standing between you. What does sobriety give you that using never could?',
          },
        ],
      },
    ],
  },

  {
    id: 'self-compassion-break',
    slug: 'self-compassion-break',
    title: 'Self-Compassion Break',
    subtitle: 'Talk to yourself the way you\'d talk to someone you actually care about',
    description:
      'Based on Kristin Neff\'s research on self-compassion: three components — mindfulness, common humanity, and self-kindness — practiced together produce measurable improvements in emotional regulation and wellbeing. This is the practice.',
    category: 'emotional-regulation',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'as-needed',
    therapeuticFramework: ['PP', 'MBSR'],
    tags: ['self-compassion', 'kindness', 'inner-critic', 'as-needed', 'shame', 'healing'],
    icon: '💗',
    color: '#06B6D4',
    featured: true,
    version: 1,
    relatedWorksheets: ['accountability-mirror', 'self-compassion-break', 'emotional-needs-inventory'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Self-Compassion Actually Is',
        content:
          "Kristin Neff at the University of Texas has spent years researching self-compassion, and her findings consistently show that self-compassion produces better outcomes than self-criticism for motivation, resilience, emotional regulation, and recovery from setbacks.\n\nSelf-compassion has three components:\n\n**Mindfulness** — acknowledging your suffering clearly, without exaggerating it or suppressing it. Not 'this is the worst thing ever' and not 'I'm fine, whatever.' Just: 'this is hard, and I acknowledge it.'\n\n**Common humanity** — recognizing that suffering is part of being human. You are not uniquely broken. You are not alone. Everyone who has ever struggled with addiction, shame, grief, or loss is part of the same human experience you're in.\n\n**Self-kindness** — treating yourself with the warmth and care you'd give a good friend who was going through exactly what you're going through. Not performance. Not false positivity. The actual warmth you'd feel for someone you love who was hurting.\n\nFor people in recovery — who often carry enormous stores of shame and self-criticism — this practice can be genuinely transformative.",
      },
      {
        type: 'freewrite',
        title: 'The Moment of Suffering',
        content:
          "What's happening right now that's difficult? Name it clearly.",
        fields: [
          {
            id: 'sc-suffering',
            type: 'textarea',
            label: 'What\'s happening right now that\'s difficult?',
            placeholder:
              'What are you struggling with? It can be something acute — a craving, a conflict, a shame spiral. Or something slower — a situation you\'re carrying, a grief that\'s been with you. Just name it plainly.',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Mindfulness',
        content:
          "The first step is acknowledging your suffering without drama or dismissal. Just: this is real, and I see it.",
        fields: [
          {
            id: 'sc-mindfulness',
            type: 'textarea',
            label: 'Write: "This is a moment of difficulty. I\'m struggling with [what]. That\'s real, and it\'s okay to acknowledge it."',
            placeholder:
              'Fill in the blank with your specific struggle. Say it plainly, without minimizing or catastrophizing. Just: I am struggling with this. It\'s real. I see it.',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Common Humanity',
        content:
          "You are not uniquely broken. You are not going through this alone. Right now, someone somewhere in the world is in something just like this.",
        fields: [
          {
            id: 'sc-common-humanity',
            type: 'textarea',
            label: 'Who else in the world is going through something like this right now? What would it mean to be connected to them?',
            placeholder:
              'The person who just relapsed and is terrified. The parent who is ashamed of what their addiction cost their kids. The person who has been clean for a month and is white-knuckling it. The one who feels completely alone. They exist. You are not the only one.',
          },
        ],
      },
      {
        type: 'letter',
        title: 'Self-Kindness',
        content:
          "This is the step that feels hardest for most people in recovery. Think of someone you genuinely love — a friend, a sibling, someone whose wellbeing you care about deeply. Imagine they're going through exactly what you just described.",
        fields: [
          {
            id: 'sc-to-friend',
            type: 'textarea',
            label: 'What would you say to a close friend going through exactly this? Write it out.',
            placeholder:
              'Not a lecture. Not false reassurance. The actual words you\'d say — the warmth you\'d have for them. Write it like a message.',
            required: true,
          },
          {
            id: 'sc-to-self',
            type: 'textarea',
            label: 'Now say it to yourself. How does that feel?',
            placeholder:
              'Say the same words to yourself — out loud if you can. What happens? Does it feel foreign? Impossible? Strange? That gap is important data.',
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Your Phrase',
        content:
          "Self-compassion works best when you have a phrase you can return to — something that fits you, that you actually believe when you say it.",
        fields: [
          {
            id: 'sc-personal-phrase',
            type: 'text',
            label: 'A personal self-compassion phrase to use when struggling:',
            placeholder:
              '"This is hard, and I\'m doing my best." "I am allowed to struggle and still be okay." "May I be kind to myself." Find what actually resonates.',
            required: true,
          },
        ],
      },
    ],
  },
]
