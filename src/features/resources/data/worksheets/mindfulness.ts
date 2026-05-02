import type { Worksheet } from '../types'

export const mindfulnessWorksheets: Worksheet[] = [
  {
    id: 'beginners-mind-meditation',
    slug: 'beginners-mind-meditation',
    title: "Beginner's Mind Meditation Log",
    subtitle: 'Show up like it\'s the first time, every time',
    description:
      "In Zen, beginner's mind means approaching each meditation as if you've never done it before — no expectations, no judgment, no 'I should be better at this by now.' This log tracks your practice and builds the habit without the pressure.",
    category: 'mindfulness',
    difficulty: 'beginner',
    estimatedMinutes: 8,
    frequency: 'daily',
    therapeuticFramework: ['MBSR'],
    tags: ['meditation', 'daily', 'beginner', 'habit', 'awareness', 'presence'],
    icon: '🧘',
    color: '#14B8A6',
    featured: true,
    version: 1,
    relatedWorksheets: ['thought-labeling', 'mindful-moment-log', 'body-scan-journal'],
    sections: [
      {
        type: 'scale',
        title: 'Pre-Meditation Check',
        content:
          "Before you sit, take stock of where you are right now. This isn't a test — it's data. You're not trying to be calm before you meditate. You're just noticing what you're bringing to the cushion.",
        fields: [
          {
            id: 'pre-mind-busyness',
            type: 'slider',
            label: 'Mind busyness right now (1 = very quiet, 10 = completely full)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'pre-primary-emotion',
            type: 'select',
            label: 'Primary emotion before I sit:',
            options: [
              'Anxious',
              'Calm',
              'Restless',
              'Sad',
              'Neutral',
              'Tired',
              'Hopeful',
              'Other',
            ],
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'The Sit',
        content:
          "This section is simple. You fill it in after you meditate — or, if today was the day you planned but didn't, you note that too. No judgment. Just honesty. Consistency matters more than perfection.",
        fields: [
          {
            id: 'meditation-duration',
            type: 'select',
            label: 'How long I sat:',
            options: [
              '2 minutes',
              '5 minutes',
              '10 minutes',
              '15 minutes',
              '20+ minutes',
            ],
            required: true,
          },
          {
            id: 'meditation-style',
            type: 'select',
            label: 'Style I used:',
            options: [
              'Breath focus',
              'Body scan',
              'Open awareness',
              'Guided (app/recording)',
              'Prayer',
              'Other',
            ],
          },
          {
            id: 'meditation-actually-did',
            type: 'checkbox',
            label: 'I actually did this (not just planned it)',
            options: ['Yes — I sat down and did the practice'],
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'What Came Up',
        content:
          "The point of meditation in recovery isn't to have a blank mind. That's not what it is. It's to watch what comes up without being swept away by it. What visited you during your sit?",
        fields: [
          {
            id: 'meditation-thoughts',
            type: 'textarea',
            label: 'Thoughts that showed up:',
            placeholder:
              'Planning, worrying, memories, random images, recovery-related fears, hopes. You don\'t have to explain them — just name them.',
          },
          {
            id: 'meditation-emotions',
            type: 'textarea',
            label: 'Emotions that moved through:',
            placeholder:
              'Did something surface that you hadn\'t quite felt yet today? Did something soften? Did something tighten?',
          },
          {
            id: 'meditation-body-sensations',
            type: 'textarea',
            label: 'Body sensations I noticed:',
            placeholder:
              'Restlessness, warmth, tightness, the urge to move, stillness, heaviness. Your body is always talking — meditation is when you can finally hear it.',
          },
        ],
      },
      {
        type: 'scale',
        title: 'Post-Meditation Check',
        content:
          "Now take stock of where you are. Not to evaluate whether it 'worked' — just to notice the before and after.",
        fields: [
          {
            id: 'post-mind-busyness',
            type: 'slider',
            label: 'Mind busyness now (1 = very quiet, 10 = completely full)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'post-meditation-noticing',
            type: 'textarea',
            label: 'One thing I noticed today that I wouldn\'t have without this practice:',
            placeholder:
              'It might be subtle — a feeling, a thought pattern, a moment of actual stillness. Even one second of real presence counts.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Streak and Learning',
        content:
          'Tracking builds momentum. And honest reflection on your practice over time reveals things you can\'t see day-to-day.',
        fields: [
          {
            id: 'meditation-streak',
            type: 'text',
            label: 'Consecutive days meditating:',
            placeholder: 'Even if it\'s 1 — that\'s today, and today counts.',
          },
          {
            id: 'meditation-learning',
            type: 'textarea',
            label: 'What I\'m learning about my mind through this practice:',
            placeholder:
              'Over days and weeks, patterns emerge. What is your mind like? What does it return to? What helps it settle?',
          },
        ],
      },
    ],
  },

  {
    id: 'urge-meditation',
    slug: 'urge-meditation',
    title: 'Urge Meditation',
    subtitle: 'Surf it instead of fighting it — that\'s what actually works',
    description:
      "Based on G. Alan Marlatt's urge surfing research: sitting with a craving as an observer, rather than fighting or fleeing it, is one of the most powerful skills in recovery. This worksheet walks you through the practice.",
    category: 'mindfulness',
    difficulty: 'intermediate',
    estimatedMinutes: 10,
    frequency: 'as-needed',
    therapeuticFramework: ['MBSR', 'CBT'],
    tags: ['cravings', 'urge-surfing', 'mindfulness', 'as-needed', 'acute', 'urges'],
    icon: '🌊',
    color: '#14B8A6',
    version: 1,
    relatedWorksheets: ['radical-acceptance', 'sitting-with-discomfort', 'halt-scanner'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Urge Surfing Actually Is',
        content:
          "G. Alan Marlatt, a researcher at the University of Washington, developed urge surfing as part of mindfulness-based relapse prevention. The core insight is counterintuitive: fighting a craving often makes it stronger. The more you try to push a craving away, the more attention you give it.\n\nUrge surfing works differently. Instead of fighting the craving or fleeing from it, you get curious about it. You observe it — where it lives in your body, what shape it would have, what texture. You watch it like a wave from the shore rather than trying to stop the ocean.\n\nHere's what the research shows: when people observe their cravings this way rather than battling them, the cravings tend to peak and subside within 15-30 minutes. They pass. They always have been passing. The suffering comes from the resistance, not just the craving itself.\n\nYou don't have to like the craving. You don't have to welcome it. You just have to watch it.",
      },
      {
        type: 'scale',
        title: 'Enter the Practice',
        content:
          "Take a breath before you rate this. You're here, you're doing the practice — that already matters.",
        fields: [
          {
            id: 'urge-intensity-before',
            type: 'slider',
            label: 'Urge intensity right now (0 = none, 10 = overwhelming)',
            min: 0,
            max: 10,
            required: true,
          },
          {
            id: 'urge-trigger',
            type: 'textarea',
            label: 'What triggered it?',
            placeholder:
              'A person, place, emotion, time of day, memory, sensation? Name it as specifically as you can. You don\'t have to understand it fully — just name what you noticed.',
          },
        ],
      },
      {
        type: 'visualization',
        title: 'The Meditation',
        content:
          "Read through this once, then close your eyes and do it.\n\nClose your eyes. Take three slow breaths — in through the nose, out through the mouth.\n\nNow find the craving in your body. Don't look for it with your head — scan your body. Where does it live? Your chest? Your throat? Your stomach? Your hands? Somewhere less obvious?\n\nOnce you've found it — don't touch it. Don't try to push it away. Just observe it. If the craving had a shape, what shape would it be? If it had a color, what color? What texture? Is it moving or still? Hot or cold?\n\nWatch it. Keep watching it. Does it change when you pay attention to it? Does it get bigger? Smaller? Shift location?\n\nYou are not the craving. You are the one watching it. It is a wave. You are standing on the shore.\n\nStay with this for at least three to five minutes before you continue.",
        fields: [],
      },
      {
        type: 'reflection',
        title: 'Observations',
        content:
          "Now write about what you experienced. The more specific, the more useful this becomes as a tool over time.",
        fields: [
          {
            id: 'urge-body-location',
            type: 'textarea',
            label: 'Where in my body was the craving?',
            placeholder:
              'Chest? Throat? Stomach? Hands? Head? More than one place? Did it move?',
            required: true,
          },
          {
            id: 'urge-observation-experience',
            type: 'textarea',
            label: 'What did it feel like to observe rather than fight it?',
            placeholder:
              'Strange? Impossible at first? Did something shift when you stopped fighting? Did observing it change it?',
          },
          {
            id: 'urge-intensity-change',
            type: 'textarea',
            label: 'Did the intensity change? How?',
            placeholder:
              'Peak and drop? Stay the same? Get worse before it got better? Whatever actually happened — that\'s data.',
          },
        ],
      },
      {
        type: 'scale',
        title: 'After',
        content:
          "Rate the intensity now, then write down what this practice is teaching you about your cravings.",
        fields: [
          {
            id: 'urge-intensity-after',
            type: 'slider',
            label: 'Urge intensity now (0 = none, 10 = overwhelming)',
            min: 0,
            max: 10,
            required: true,
          },
          {
            id: 'urge-learning',
            type: 'textarea',
            label: 'What this practice teaches me about cravings:',
            placeholder:
              'That they pass. That observing them is different from fighting them. That you\'re bigger than the craving. That it lives in your body and you can watch it. Whatever is true for you.',
          },
        ],
      },
    ],
  },

  {
    id: 'mindful-eating',
    slug: 'mindful-eating',
    title: 'Mindful Eating Practice',
    subtitle: 'A doorway back to your senses, starting with food',
    description:
      'Addiction disrupts our relationship with food and eating — numbing, rushing, not noticing. Mindful eating is a practical, accessible doorway back to presence. This practice turns a meal into a meditation.',
    category: 'mindfulness',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'weekly',
    therapeuticFramework: ['MBSR', 'somatic'],
    tags: ['eating', 'mindfulness', 'body', 'presence', 'senses', 'weekly'],
    icon: '🍎',
    color: '#14B8A6',
    version: 1,
    relatedWorksheets: ['body-scan-journal', 'gratitude-for-body', 'mindful-moment-log'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why This Matters in Recovery',
        content:
          "Addiction tends to hijack our relationship with pleasure, hunger, and satisfaction — not just with substances, but across the board. Many people in recovery notice they eat without tasting, rush through meals without registering them, or use food to numb just as they used to use substances.\n\nMindful eating is one of the simplest available practices for rebuilding the connection between your body's signals and your experience. It asks you to slow down, pay attention, and actually be present for one of the most ordinary things you do every day.\n\nThis practice isn't about eating less or eating 'right.' It's about actually experiencing what's in front of you.",
      },
      {
        type: 'checklist',
        title: 'Set the Conditions',
        content:
          "The practice only works if you're actually present for it. Make one small commitment before you start.",
        fields: [
          {
            id: 'mindful-eating-item',
            type: 'text',
            label: 'What I\'m eating:',
            placeholder: 'A meal, a snack, a piece of fruit — doesn\'t need to be fancy.',
            required: true,
          },
          {
            id: 'mindful-eating-location',
            type: 'text',
            label: 'Where I am:',
            placeholder: 'Seated at a table, on a bench outside, wherever you are.',
          },
          {
            id: 'mindful-eating-commitment',
            type: 'checkbox',
            label: 'Before I start:',
            options: ['No screens, no multitasking — just the food and this practice'],
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'Before the First Bite',
        content:
          "Take a full minute before you eat anything. Just observe. This is the part that feels the strangest at first — and does the most.",
        fields: [
          {
            id: 'eating-pre-hunger',
            type: 'textarea',
            label: 'What I notice about hunger in my body right now:',
            placeholder:
              'Where is hunger? Is it in your stomach, your throat, your energy level? Is it physical, emotional, or habitual? Don\'t judge it — just notice.',
          },
          {
            id: 'eating-pre-senses',
            type: 'textarea',
            label: 'What the food looks like, smells like, feels like before tasting:',
            placeholder:
              'Color, texture, temperature, steam, aroma. Look at it like you\'ve never seen food before. What do you actually notice?',
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'The Experience',
        content:
          "Eat slowly. Chew more than you normally would. Put your fork down between bites. Write as you go, or remember and write after.",
        fields: [
          {
            id: 'eating-flavors-textures',
            type: 'textarea',
            label: 'Flavors and textures as I eat slowly:',
            placeholder:
              'What actually hits your tongue first? What changes as you chew? What do you notice when you slow down?',
          },
          {
            id: 'eating-fullness-signals',
            type: 'textarea',
            label: 'When fullness signals start to appear:',
            placeholder:
              'When do you first notice "I\'m getting satisfied"? What does that feel like? Most people eating normally never catch this moment.',
          },
          {
            id: 'eating-emotions',
            type: 'textarea',
            label: 'Any emotions that come up:',
            placeholder:
              'This is where it gets interesting — sometimes eating slowly surfaces feelings we normally eat through. What\'s here?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Reflection',
        content:
          "After the practice: what happened?",
        fields: [
          {
            id: 'eating-difference',
            type: 'textarea',
            label: 'How eating this way felt different from usual:',
            placeholder:
              'Did you taste more? Notice more? Feel more? Was it uncomfortable to slow down? Did anything surprise you?',
          },
          {
            id: 'eating-carry-forward',
            type: 'text',
            label: 'One thing to carry into my next meal:',
            placeholder:
              'One small practice — putting the phone away, taking a breath before eating, eating the first three bites slowly. Choose one real thing.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'walking-meditation',
    slug: 'walking-meditation',
    title: 'Walking Meditation Guide',
    subtitle: 'Meditation for the people who can\'t sit still — which is most of us',
    description:
      'Walking meditation is ideal for people who find seated practice impossible when agitated or restless. Recovery can make you physically restless — this practice channels that energy rather than fighting it.',
    category: 'mindfulness',
    difficulty: 'beginner',
    estimatedMinutes: 12,
    frequency: 'as-needed',
    therapeuticFramework: ['MBSR'],
    tags: ['walking', 'movement', 'mindfulness', 'body', 'as-needed', 'agitation'],
    icon: '🚶',
    color: '#14B8A6',
    version: 1,
    relatedWorksheets: ['beginners-mind-meditation', 'urge-meditation', 'body-scan-journal'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Walking Meditation Works in Recovery',
        content:
          "One of the most common barriers to seated meditation in early recovery is physical restlessness — the body is literally recalibrating its nervous system, and sitting still can feel impossible, even maddening.\n\nWalking meditation isn't a second-best option. It's a completely valid and historically deep practice. Many Buddhist traditions consider walking meditation the primary practice. The body's movement becomes the object of attention instead of the breath.\n\nFor people dealing with agitation, anxiety, or strong cravings, walking meditation has one additional advantage: it channels the physical energy rather than fighting it. You don't have to suppress the restlessness — you walk with it until it transforms.",
      },
      {
        type: 'scale',
        title: 'Setup',
        content:
          "Note where you are before you start, so you can compare after.",
        fields: [
          {
            id: 'walking-location',
            type: 'select',
            label: 'Location:',
            options: [
              'Outdoors in nature',
              'City sidewalk',
              'Parking lot',
              'Inside my home',
              'Mall/large indoor space',
              'Other',
            ],
            required: true,
          },
          {
            id: 'walking-agitation-before',
            type: 'slider',
            label: 'Agitation level before walking (1 = very calm, 10 = extremely agitated)',
            min: 1,
            max: 10,
            required: true,
          },
        ],
      },
      {
        type: 'instruction',
        title: 'The Practice',
        content:
          "Read this through fully once before you start walking.\n\n**PREPARATION**\nFind a path you can walk back and forth on — about 10-20 paces is enough. You can walk in a loop, or just one stretch back and forth.\n\n**THE WALK**\nBegin walking more slowly than usual — about half your normal pace.\n\n*Feet:* Bring your full attention to your feet. Feel the heel make contact first. Then the middle of the foot. Then the ball. Then the push-off from the toe. Heel, middle, ball, toe. Lifting, moving, placing. Over and over.\n\n*Weight shift:* Notice how your weight shifts from one side to the other with each step. The body is doing something complex and completely automatic. You're just watching it.\n\n*Arms and body:* Let your arms swing naturally. Notice your posture without correcting it — just observe what it's doing.\n\n*Breathing:* If it feels natural, let your breath coordinate with your steps. Breathe in for two or three steps, breathe out for two or three steps. Don't force it.\n\n*When the mind wanders:* It will. That's normal. Each time you notice it has wandered — to plans, worries, cravings, anything — gently bring your attention back to your feet. Heel. Middle. Ball. Toe.\n\n**DURATION**\nAim for at least 10 minutes. If you can do 20, do 20. The first few minutes often feel restless. Stay with it — something usually shifts around the 4-5 minute mark.",
        fields: [],
      },
      {
        type: 'reflection',
        title: 'What I Noticed',
        content:
          "After your walk — or during a break — write about what you experienced.",
        fields: [
          {
            id: 'walking-body-noticed',
            type: 'textarea',
            label: 'What I noticed in my body as I walked:',
            placeholder:
              'The weight of each step, the feeling of the ground, tension releasing in your shoulders, energy draining from your legs. What happened in your body?',
          },
          {
            id: 'walking-surroundings-noticed',
            type: 'textarea',
            label: 'What I noticed in my surroundings that I normally miss:',
            placeholder:
              'Sounds, smells, light, temperature, other people, the way the air feels. When you slow down, what appears?',
          },
          {
            id: 'walking-mind-behavior',
            type: 'textarea',
            label: 'How my mind behaved:',
            placeholder:
              'Did it quiet down? Keep pulling you somewhere? Did you bring it back many times or a few? What was it most drawn to?',
          },
        ],
      },
      {
        type: 'scale',
        title: 'After',
        content:
          "Now take stock.",
        fields: [
          {
            id: 'walking-agitation-after',
            type: 'slider',
            label: 'Agitation level now (1 = very calm, 10 = extremely agitated)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'walking-vs-seated',
            type: 'textarea',
            label: 'What this kind of movement-based practice gives me that seated meditation doesn\'t:',
            placeholder:
              'For many people: a way in when the body won\'t be still. A practice you can do anywhere. The feeling that the body itself is the path. What is it for you?',
          },
        ],
      },
    ],
  },

  {
    id: 'observing-self',
    slug: 'observing-self',
    title: 'The Observing Self',
    subtitle: 'You are the camera, not the movie',
    description:
      'In ACT, the Observing Self is the part of you that watches your thoughts, feelings, and memories — the stable witness that never changes. This worksheet helps you access and strengthen that part of yourself.',
    category: 'mindfulness',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['ACT'],
    tags: ['ACT', 'observing-self', 'defusion', 'identity', 'stability', 'values'],
    icon: '👁️',
    color: '#14B8A6',
    version: 1,
    relatedWorksheets: ['radical-acceptance', 'thought-labeling', 'sitting-with-discomfort'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Observing Self',
        content:
          "In Acceptance and Commitment Therapy, there's a distinction between two parts of you: the conceptualized self (the story you tell about who you are — your history, your diagnoses, your roles, your failures) and the Observing Self (the awareness that notices the story).\n\nThe Observing Self is the part of you that watches your thoughts without being them. It's the camera, not the movie. It watches the craving without being the craving. It watches the shame without being the shame. It watches the grief without being consumed.\n\nHere's the thing about the Observing Self: it never changes. Your thoughts change constantly. Your emotions rise and fall. Your circumstances shift. But the part of you doing the noticing — that awareness — is the same today as it was ten years ago. It watched you through active addiction. It's watching you now.\n\nFor people in recovery, this concept can be genuinely stabilizing. You have been many things — active addict, person in crisis, person in early recovery. But underneath all of those roles, something in you was watching. That's still here. That's what we're working with.",
      },
      {
        type: 'reflection',
        title: 'Noticing Content vs. Observer',
        content:
          "The difference between being fused with a thought and observing it is a small shift that changes everything.",
        fields: [
          {
            id: 'observing-tangled-thought',
            type: 'textarea',
            label: 'A thought you had recently that you got very tangled in:',
            placeholder:
              '"I\'m never going to be able to do this." "Everyone is judging me." "What\'s the point?" Whatever it was — the thought you got lost inside.',
            required: true,
          },
          {
            id: 'observing-defusion-shift',
            type: 'textarea',
            label: 'Now write: "I notice I\'m having the thought that..." — how does that feel different?',
            placeholder:
              '"I notice I\'m having the thought that I\'m never going to be able to do this." How does adding that prefix change the experience of the thought? Can you feel the distance it creates?',
          },
        ],
      },
      {
        type: 'visualization',
        title: 'Accessing the Observer',
        content:
          "Read this through once, then set down the worksheet, close your eyes, and do the practice for a few minutes. Then return and write.\n\nImagine you're sitting in a large, comfortable theater. The screen in front of you is showing the movie of your mind right now — your thoughts, your feelings, your memories, your worries, your cravings, your doubts. All of it is playing on the screen.\n\nYou are in a seat in the audience. You are watching the screen, not in it.\n\nThe movie can be anything — calm, chaotic, beautiful, difficult. It doesn't matter. You are watching it from your seat.\n\nNotice: no matter what plays on the screen, the seat doesn't change. You don't have to get up and run when the scary parts come. You don't have to go into the screen when the good parts come. You can watch.\n\nNow return here and write what you noticed.",
        fields: [
          {
            id: 'observing-screen-description',
            type: 'textarea',
            label: 'Describe what you saw on the screen right now:',
            placeholder:
              'What was playing? Thoughts, images, emotions? What did it look like from the seat in the audience rather than inside it?',
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'The Unchanging Witness',
        content:
          "You have been through a great deal. Think about the storms of your recovery — the cravings you survived, the hard moments, the setbacks, the grief, the doubt. Through all of it, something in you was watching, and that something is still here.",
        fields: [
          {
            id: 'observing-unchanging-witness',
            type: 'textarea',
            label: 'Through all the storms of your recovery, something in you watched and survived. What is that?',
            placeholder:
              'This isn\'t about being strong or having it together. It\'s about noticing that something has persisted — the awareness, the witness — through everything. What words come when you try to describe it?',
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Using This in Hard Moments',
        content:
          "The Observing Self isn't just a concept — it's a resource you can access when you're overwhelmed. A phrase, a gesture, a breath. Something that helps you step back to the seat.",
        fields: [
          {
            id: 'observing-self-phrase',
            type: 'text',
            label: 'A phrase I can say to myself to access the Observing Self when I\'m overwhelmed:',
            placeholder:
              '"I am the one watching." "Step back to the seat." "I am bigger than this thought." Find what actually lands for you.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'thought-labeling',
    slug: 'thought-labeling',
    title: 'Thought Labeling Practice',
    subtitle: 'Name it and it loses some of its grip',
    description:
      'Labeling thoughts by type creates a tiny but critical distance between you and your mental weather. This simple practice — from both MBSR and ACT — is one of the most effective tools for reducing reactivity and building self-awareness.',
    category: 'mindfulness',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'daily',
    therapeuticFramework: ['MBSR', 'ACT'],
    tags: ['thoughts', 'labeling', 'defusion', 'daily', 'awareness', 'CBT'],
    icon: '🏷️',
    color: '#14B8A6',
    version: 1,
    relatedWorksheets: ['beginners-mind-meditation', 'observing-self', 'riding-emotional-wave'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Labeling Does',
        content:
          "When you're in the grip of a powerful thought — a craving, a worry, a shame spiral — it feels like the thought is reality. Like it's you. Like it's true.\n\nThought labeling is based on a well-established finding in neuroscience: when you name an emotion or a thought pattern, you activate the prefrontal cortex (the reasoning part of the brain) and reduce activity in the amygdala (the alarm system). Naming literally changes what happens in your brain.\n\nThe practice is simple: when a thought arises, instead of following it, you label what kind of thought it is. 'There's a planning thought.' 'There's a worry thought.' 'There's that craving thought again.'\n\nThe 'again' is important. Labeling helps you notice patterns — the same thought types that show up again and again — so you stop being surprised by your own mind.",
      },
      {
        type: 'checklist',
        title: '5-Minute Practice',
        content:
          "Set a timer for 5 minutes. Sit quietly or keep doing what you're doing. When thoughts arise, gently label them — 'planning,' 'worrying,' 'judging' — and return to your breath or your present activity. After the timer, check all the types you noticed.",
        fields: [
          {
            id: 'thought-types-noticed',
            type: 'multi-select',
            label: 'Thought types I noticed in my 5 minutes:',
            options: [
              'Planning',
              'Worrying',
              'Judging',
              'Remembering',
              'Fantasizing',
              'Problem-solving',
              'Comparing',
              'Criticizing (self)',
              'Craving',
              'Other',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Most Frequent Type',
        content:
          "Your mind has favorite channels. What's yours right now?",
        fields: [
          {
            id: 'thought-most-common',
            type: 'text',
            label: 'My most common thought category:',
            placeholder:
              'Worrying? Judging? Planning? Craving? What did your mind keep returning to?',
            required: true,
          },
          {
            id: 'thought-pattern-meaning',
            type: 'textarea',
            label: 'What does this tell me about my mind\'s current preoccupation?',
            placeholder:
              'If you were mostly worrying: what are you afraid of right now? If mostly judging: what standard are you holding yourself or others to? If craving: what might be underneath that pull?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Labeling in Daily Life',
        content:
          "Thought labeling becomes most useful not in formal meditation but in the middle of hard moments — when you can say 'there's that worry thought again' and step back rather than getting swept away.",
        fields: [
          {
            id: 'thought-labeling-real-life',
            type: 'textarea',
            label: 'A recent situation where labeling a thought ("there\'s that worry thought again") would have helped:',
            placeholder:
              'A conversation that spiraled. A moment you got pulled into a craving. A shame thought you followed for longer than it deserved. How might labeling have helped?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Practice Commitment',
        content:
          "Thought labeling is more useful as a real-life tool than a meditation exercise. When will you actually use it?",
        fields: [
          {
            id: 'thought-labeling-commitment',
            type: 'select',
            label: 'I\'ll practice thought labeling:',
            options: [
              'In formal meditation only',
              'When I notice strong emotions',
              'Throughout my day',
              'In recovery-related situations',
              'Other',
            ],
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'body-scan-journal',
    slug: 'body-scan-journal',
    title: 'Body Scan Journal',
    subtitle: 'A reunion with the body you\'ve been living in',
    description:
      'Many people in recovery are disconnected from their bodies — numbing was often the point. The body scan practice is a reunion. This journal walks you through a full head-to-toe scan and helps you make sense of what you find.',
    category: 'mindfulness',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'weekly',
    therapeuticFramework: ['MBSR', 'somatic'],
    tags: ['body-scan', 'somatic', 'body', 'trauma', 'awareness', 'weekly'],
    icon: '🫁',
    color: '#14B8A6',
    version: 1,
    relatedWorksheets: ['gratitude-for-body', 'window-of-tolerance', 'mindful-eating'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Coming Home to Your Body',
        content:
          "For many people, addiction was partly about not being in the body. Not feeling it. Not hearing it. Getting away from it. Years of that leaves a kind of disconnection — a sense of living from the neck up, or on autopilot, or slightly outside your own physical experience.\n\nThe body scan is one of the oldest and most studied practices in MBSR (Mindfulness-Based Stress Reduction). It asks you to move your attention through your body slowly, region by region, without trying to change anything — just noticing.\n\nFor people in recovery, this practice serves multiple functions: it reconnects you to physical signals you may have been ignoring, it helps you locate where you hold tension and emotional energy, and it is itself a form of healing — the act of paying loving attention to something you may have been at war with.\n\nThere's no 'right' thing to find. Numbness is fine. Pain is fine. Warmth is fine. Whatever's there is what you're working with.",
      },
      {
        type: 'body-scan',
        title: 'The Scan (Head to Toe)',
        content:
          "Move through each area slowly. Rest your attention there for at least 30 seconds before writing. You don't have to name everything — just what you actually notice.",
        fields: [
          {
            id: 'scan-head-face-jaw',
            type: 'textarea',
            label: 'Head / face / jaw — what I notice:',
            placeholder:
              'Tension in the jaw or forehead? Heaviness around the eyes? Tightness at the temples? Relaxation? Numbness? Just notice.',
          },
          {
            id: 'scan-neck-shoulders-chest',
            type: 'textarea',
            label: 'Neck / shoulders / chest — what I notice:',
            placeholder:
              'This is where many people carry a lot. Tight shoulders? An ache in the chest? Constriction or openness? What\'s here?',
          },
          {
            id: 'scan-arms-hands',
            type: 'textarea',
            label: 'Arms / hands — what I notice:',
            placeholder:
              'Tingling? Heaviness? Restlessness? What do your hands feel like right now if you just pay attention?',
          },
          {
            id: 'scan-stomach-core',
            type: 'textarea',
            label: 'Stomach / core — what I notice:',
            placeholder:
              'Tightness? Emptiness? The knot of anxiety? Hunger? Something unsettled? The gut holds a lot.',
          },
          {
            id: 'scan-hips-pelvis-lower-back',
            type: 'textarea',
            label: 'Hips / pelvis / lower back — what I notice:',
            placeholder:
              'Tension? Ache? Collapsed? Grounded? This area often holds a lot that doesn\'t get named.',
          },
          {
            id: 'scan-legs-feet',
            type: 'textarea',
            label: 'Legs / feet — what I notice:',
            placeholder:
              'Restless? Heavy? Tingling? The feeling of being connected to the ground? What\'s happening in your legs and feet?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What I Found',
        content:
          "Look at your scan. What stands out?",
        fields: [
          {
            id: 'scan-sensations-found',
            type: 'multi-select',
            label: 'Sensations I noticed in my scan:',
            options: [
              'Tension',
              'Numbness',
              'Pain',
              'Warmth',
              'Tingling',
              'Tightness',
              'Openness',
              'Neutrality',
              'Other',
            ],
          },
          {
            id: 'scan-most-held',
            type: 'textarea',
            label: 'Where I hold the most tension or disconnection:',
            placeholder:
              'Name the specific area and describe what it feels like. This is probably where you need the most attention.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Emotion Underneath',
        content:
          "Body sensations and emotions are deeply connected. Tension in the chest is often grief or anxiety. Tightness in the throat is often an unexpressed word. What emotional name fits what you found?",
        fields: [
          {
            id: 'scan-emotion-underneath',
            type: 'textarea',
            label: 'If those physical sensations had an emotional name, what would it be?',
            placeholder:
              'The tight chest might be grief. The restless legs might be anxiety or suppressed anger. The numbness might be protection. What emotion lives in what you found?',
          },
        ],
      },
      {
        type: 'letter',
        title: 'The Conversation',
        content:
          "If your body has been trying to tell you something — and it usually has — what is it? And what do you want to say back?",
        fields: [
          {
            id: 'body-speaks',
            type: 'textarea',
            label: 'If your body could talk, what would it say to you right now?',
            placeholder:
              '"Slow down." "I\'m tired." "I need you to stop pushing me." "I\'m healing." "I need more sleep." "I need someone to hold me." What is it actually saying?',
          },
          {
            id: 'body-response',
            type: 'textarea',
            label: 'What do you want to say back?',
            placeholder:
              'This can be an apology, a commitment, a thank you, an acknowledgment that you hear it. What does your body deserve to hear from you?',
          },
        ],
      },
    ],
  },

  {
    id: 'radical-acceptance',
    slug: 'radical-acceptance',
    title: 'Radical Acceptance',
    subtitle: 'You can\'t change what happened. You can stop fighting what is.',
    description:
      'From DBT: radical acceptance is the practice of accepting reality exactly as it is, without fighting it. Suffering equals pain multiplied by resistance. This worksheet helps you work with — not around — the most difficult realities of your life and recovery.',
    category: 'mindfulness',
    difficulty: 'advanced',
    estimatedMinutes: 25,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'ACT'],
    tags: ['radical-acceptance', 'DBT', 'suffering', 'resistance', 'advanced', 'surrender'],
    icon: '🌊',
    color: '#14B8A6',
    featured: true,
    version: 1,
    relatedWorksheets: ['sitting-with-discomfort', 'observing-self', 'finding-the-gift'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Radical Acceptance Is — and Isn\'t',
        content:
          "In DBT, Marsha Linehan describes suffering as pain multiplied by resistance. Pain is unavoidable. Resistance — refusing to accept what is real — multiplies it.\n\nRadical acceptance means accepting reality completely, deeply, and without reservation — not because you agree with it, not because it's fair, not because you deserved it. But because it IS. Fighting reality doesn't change reality. It just adds the suffering of the fight.\n\nThis is not the same as:\n- **Approval.** You can accept something without condoning it.\n- **Resignation.** Accepting reality is the prerequisite for changing it — you can't change something you won't look at.\n- **Giving up.** It's not passive. It's the courageous choice to face what's true.\n\nFor recovery, this practice applies to the unchangeable: the years lost, the damage done, the person you were, the past you can't rewrite. Radical acceptance doesn't say it was okay. It says it happened, and your energy is better spent on what comes next than on resisting a past that cannot be changed.",
      },
      {
        type: 'freewrite',
        title: 'What I\'m Resisting',
        content:
          "Name it directly. What is the reality you've been refusing to accept — about your life, your past, your recovery, your present circumstances?",
        fields: [
          {
            id: 'acceptance-resisting',
            type: 'textarea',
            label: 'Something real about my life, my past, or my recovery that I haven\'t been able to accept:',
            placeholder:
              'The years I lost. The relationships I broke. The person I became. The diagnosis. The fact that I have this disease at all. That someone is gone. That certain things can\'t be undone. Name the specific reality you\'ve been fighting.',
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'The Cost of Non-Acceptance',
        content:
          "Non-acceptance is not free. It costs you. Name what it's actually costing you to keep refusing to accept this reality.",
        fields: [
          {
            id: 'acceptance-resistance-cost-energy',
            type: 'slider',
            label: 'Energy this resistance takes from me (1 = minimal, 10 = enormous)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'acceptance-resistance-cost-named',
            type: 'textarea',
            label: 'What has it cost me to refuse to accept this?',
            placeholder:
              'Relationships? Peace? Energy for my actual recovery? Presence with the people I love? The ability to move forward? Name the real costs.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Acceptance ≠ Approval',
        content:
          "This is the part people get stuck on. They think acceptance means saying 'what happened was okay.' It doesn't. You can hold both: this is real, AND I don't have to like it, AND I can still work toward change.",
        fields: [
          {
            id: 'acceptance-not-approval',
            type: 'textarea',
            label: 'Write: "I can accept [thing] AND I don\'t have to like it AND I can still work toward change." Fill in your thing.',
            placeholder:
              'I can accept that I lost years of my relationship with my children to addiction, AND I don\'t have to feel okay about that, AND I can still do the work to repair what\'s repairable from here.',
            required: true,
          },
        ],
      },
      {
        type: 'instruction',
        title: 'Acceptance Phrases',
        content:
          "These phrases come from DBT and from centuries of contemplative practice. Read each one slowly. Breathe. Let them land.\n\n\"It is what it is.\"\n\n\"I cannot change the past.\"\n\n\"This is my reality right now.\"\n\n\"I can accept this reality and still feel pain about it.\"\n\n\"Accepting what is doesn't mean I give up on what could be.\"\n\nSay them out loud if you can. Notice which one creates resistance in you — that's usually the most important one.",
        fields: [
          {
            id: 'acceptance-phrase-resonance',
            type: 'textarea',
            label: 'Which phrase helps? What comes up when you say it?',
            placeholder:
              'What resistance arises? What in you doesn\'t want to say "it is what it is"? What does that resistance protect?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Small Acceptance',
        content:
          "Radical acceptance doesn't have to be forever. It can be today. Just today.",
        fields: [
          {
            id: 'acceptance-today',
            type: 'text',
            label: 'One thing I\'m willing to practice accepting today — not forever, just today:',
            placeholder:
              'Not tomorrow, not as a permanent stance — just for today. What can you set down for one day?',
            required: true,
          },
        ],
      },
    ],
  },
]
