import type { Worksheet } from '../types'

export const traumaProcessingWorksheets: Worksheet[] = [
  {
    id: 'safety-stabilization',
    slug: 'safety-stabilization',
    title: 'Safety & Stabilization Plan',
    subtitle: 'Before any trauma work, you need a solid foundation to stand on',
    description:
      'The first phase of trauma therapy isn\'t processing — it\'s building safety. This worksheet helps you identify your external and internal resources, establish grounding practices, and create a containment strategy for when difficult material comes up.',
    category: 'trauma-processing',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    frequency: 'one-time',
    therapeuticFramework: ['TI', 'somatic'],
    tags: ['safety', 'stabilization', 'grounding', 'foundation', 'trauma', 'one-time'],
    icon: '🛖',
    color: '#10B981',
    featured: true,
    version: 1,
    relatedWorksheets: ['window-of-tolerance', 'trigger-vs-trauma-response', 'emotional-flashback-firstaid'],
    sections: [
      {
        type: 'instruction',
        title: 'Before You Begin',
        content:
          "These worksheets complement professional trauma therapy — they don't replace it. Go at your own pace. You control what you share. If you feel overwhelmed at any point, stop and use your grounding tools.\n\nIf you don't have a therapist or counselor who specializes in trauma, this worksheet can still help — but please also consider reaching out to one. Trauma responds well to treatment. You don't have to work through it alone.",
      },
      {
        type: 'psychoeducation',
        title: 'Why Safety Comes First',
        content:
          "In trauma therapy, there's a well-established phase model: safety and stabilization must come before any exploration of traumatic material. This isn't about avoiding — it's about having a strong enough foundation that when difficult things come up, you have the resources to work with them rather than be flooded by them.\n\nPhase One is always this: know where your safe ground is, know how to get back to it, and practice getting there before you need it urgently.\n\nThis worksheet is your Phase One foundation. Return to it whenever you need to.",
      },
      {
        type: 'prompt',
        title: 'External Safety',
        content:
          "External safety means knowing where to go and who to call when things get hard. These should be real, specific, accessible.",
        fields: [
          {
            id: 'safety-places',
            type: 'text',
            label: 'Safe places I can physically go:',
            placeholder:
              'A specific room in your home, a friend\'s house, a coffee shop, a meeting location, a park. Real places with real addresses.',
          },
          {
            id: 'safety-people',
            type: 'text',
            label: 'Safe people I can contact:',
            placeholder: 'Name(s) and how to reach them — phone number saved in your contacts.',
          },
          {
            id: 'safety-crisis-numbers',
            type: 'text',
            label: 'Crisis/support numbers in my phone:',
            placeholder:
              'Your therapist\'s number, sponsor\'s number, 988 Suicide and Crisis Lifeline, SAMHSA (1-800-662-4357), any crisis line you\'d actually call.',
          },
        ],
      },
      {
        type: 'visualization',
        title: 'Internal Safety',
        content:
          "Your internal safe place is an imagined location — somewhere you can go in your mind when external safety isn't immediately available. It should be a place (real or imagined) that feels genuinely safe and calm when you picture it.\n\nTake a moment to bring this place to mind before you write. Let it become real in your body — the light, the air, the sense of being held or protected.",
        fields: [
          {
            id: 'safety-inner-place',
            type: 'textarea',
            label: 'A safe place in my imagination — describe it in detail:',
            placeholder:
              'What does it look, sound, smell, and feel like? Is it indoors or outdoors? Is it somewhere from your past, somewhere from a dream, or entirely invented? The more specific you make it, the more reliably you can return to it.',
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Grounding Techniques That Work for Me',
        content:
          "Grounding techniques are practices that bring you back to the present moment when trauma material or overwhelming emotions pull you out of it. Not all of them work for everyone — you need to know which ones actually work for you.",
        fields: [
          {
            id: 'grounding-techniques',
            type: 'multi-select',
            label: 'Grounding techniques I\'ve tried and found helpful:',
            options: [
              '5-4-3-2-1 senses',
              'Cold water',
              'Deep breathing',
              'Grounding with feet',
              'Orienting to the room',
              'Body movement',
              'Other',
            ],
          },
          {
            id: 'grounding-most-reliable',
            type: 'textarea',
            label: 'My most reliable grounding technique — and exactly how I do it:',
            placeholder:
              'Describe your best grounding technique in enough detail that you could follow the instructions in a moment of distress. Specificity matters.',
          },
        ],
      },
      {
        type: 'visualization',
        title: 'Containment Practice',
        content:
          "Containment is a skill from trauma therapy: the ability to temporarily place difficult material into an imagined container so you're not carrying it constantly. This doesn't mean burying it forever — it means choosing when to work on it, rather than being ambushed.\n\nImagine a container that feels strong enough to hold difficult things. A safe, a box, a vault, a jar sealed tight, a chest at the bottom of a deep lake. Whatever imagery resonates. The container holds the material until you choose to return to it with support.",
        fields: [
          {
            id: 'containment-description',
            type: 'textarea',
            label: 'Describe your containment container:',
            placeholder:
              'What does it look like? What is it made of? Is it locked? Where do you imagine keeping it? Make it real enough that you can use it when you need to.',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'My Signal',
        content:
          "Trauma work can overwhelm your window of tolerance — especially at first. You need to know your own signal that you're getting too activated, and have a plan for what to do when that happens.",
        fields: [
          {
            id: 'overwhelm-signal',
            type: 'text',
            label: 'If I\'m getting too overwhelmed during trauma work, the sign I\'ll watch for is:',
            placeholder:
              'Feeling very young, dissociating, heart racing, shutting down completely, wanting to run. What\'s your personal signal that you\'ve hit your edge?',
            required: true,
          },
          {
            id: 'overwhelm-response',
            type: 'text',
            label: 'And I\'ll stop and:',
            placeholder:
              'Close the worksheet. Use my grounding technique. Call my therapist. Return to my safe place. Name the specific action.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'window-of-tolerance',
    slug: 'window-of-tolerance',
    title: 'Window of Tolerance Tracker',
    subtitle: 'The goal is to widen the window — one day at a time',
    description:
      'Dan Siegel\'s window of tolerance describes the zone where you can think and feel without being overwhelmed. This tracker helps you identify which zone your nervous system is in and use targeted tools to regulate.',
    category: 'trauma-processing',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'daily',
    therapeuticFramework: ['TI', 'somatic'],
    tags: ['nervous system', 'regulation', 'trauma', 'daily', 'somatic', 'window-of-tolerance'],
    icon: '📐',
    color: '#10B981',
    version: 1,
    relatedWorksheets: ['safety-stabilization', 'body-scan-journal', 'emotional-flashback-firstaid'],
    sections: [
      {
        type: 'instruction',
        title: 'Before You Begin',
        content:
          "These worksheets complement professional trauma therapy — they don't replace it. Go at your own pace. You control what you share. If you feel overwhelmed at any point, stop and use your grounding tools.",
      },
      {
        type: 'psychoeducation',
        title: 'Your Window of Tolerance',
        content:
          "Psychiatrist and researcher Dan Siegel coined the term 'window of tolerance' to describe the zone of arousal in which a person can function effectively — where they can think and feel at the same time, process information, and relate to others.\n\nWhen your nervous system is pushed **above** the window, you enter hyperarousal: fight-or-flight. Racing heart, anxiety, irritability, reactivity, feeling like you\'re about to explode or bolt.\n\nWhen pushed **below** the window, you enter hypoarousal: freeze or collapse. Numbness, flatness, disconnection, the inability to think clearly, feeling like you\'ve checked out of your own life.\n\nFor people with trauma histories — which includes most people with severe addiction — the window is often narrow. The goal of trauma-informed recovery is to widen it, gradually, through practice, safety, and support. Tracking where you are helps you use the right tools.",
      },
      {
        type: 'prompt',
        title: 'Morning Check',
        content:
          "Where is your nervous system right now? Read the options carefully — the specific state matters for knowing which tools to use.",
        fields: [
          {
            id: 'wot-morning-state',
            type: 'select',
            label: 'My nervous system state right now:',
            options: [
              'In my window — thinking clearly, can feel emotions without being overwhelmed',
              'Hyperaroused — racing heart, anxiety, reactivity, irritability',
              'Hypoaroused — numb, flat, disconnected, shut down, checked out',
            ],
            required: true,
          },
          {
            id: 'wot-morning-driver',
            type: 'textarea',
            label: 'What\'s driving this state?',
            placeholder:
              'Sleep, what happened yesterday, something you\'re anticipating, a persistent stress, a trigger you\'re aware of. What\'s setting the dial this morning?',
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'What My Body Says',
        content:
          "Your nervous system state lives in your body first — before you have words for it. Notice what\'s actually there.",
        fields: [
          {
            id: 'wot-physical-activation',
            type: 'slider',
            label: 'Physical activation right now (1 = collapsed/numb, 5 = regulated/centered, 10 = overwhelmed/flooded)',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'wot-body-sensations',
            type: 'textarea',
            label: 'Physical sensations I notice:',
            placeholder:
              'Heart rate, breath, tension, temperature, restlessness, heaviness, tightness, numbness. What is your body actually doing?',
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Regulation Tools',
        content:
          "Different states need different tools. Hyperarousal (too much activation) needs to come down. Hypoarousal (too little) needs to come up. What do you need today?",
        fields: [
          {
            id: 'wot-tools-hyperarousal',
            type: 'multi-select',
            label: 'For hyperarousal (if I need to come down):',
            options: [
              'Cold water on face or wrists',
              'Slow, extended exhale (longer out-breath)',
              'Slow walk',
              'Calming music',
              'Lower the lights',
              'Slow, deliberate movements',
            ],
          },
          {
            id: 'wot-tools-hypoarousal',
            type: 'multi-select',
            label: 'For hypoarousal (if I need to come up):',
            options: [
              'Brisk walk or physical movement',
              'Cold shower',
              'Strong tastes (citrus, peppermint)',
              'Upbeat music',
              'Social contact',
              'Sunlight',
              'Vigorous exercise',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Learning Over Time',
        content:
          "The window doesn\'t widen overnight. But it widens. And you can track it.",
        fields: [
          {
            id: 'wot-window-changes',
            type: 'textarea',
            label: 'How has my window changed since early recovery? What\'s widened it?',
            placeholder:
              'Think back to where your window was in early recovery — how much it took to overwhelm you, how hard it was to come back. What do you notice now? What practices, relationships, or time has widened it? Even small change is real.',
          },
        ],
      },
    ],
  },

  {
    id: 'trauma-addiction-connection',
    slug: 'trauma-addiction-connection',
    title: 'Trauma & Addiction Connection Map',
    subtitle: 'Understanding the link between what happened and how you coped',
    description:
      'Research is clear: trauma and addiction are deeply linked. This worksheet helps you gently explore that connection — not to explain away responsibility, but to understand more fully so you can heal more completely.',
    category: 'trauma-processing',
    difficulty: 'advanced',
    estimatedMinutes: 30,
    frequency: 'one-time',
    therapeuticFramework: ['TI', 'narrative'],
    tags: ['trauma', 'addiction', 'connection', 'understanding', 'healing', 'advanced'],
    icon: '🗺️',
    color: '#10B981',
    version: 1,
    relatedWorksheets: ['safety-stabilization', 'inner-child-letter', 'posttraumatic-growth'],
    sections: [
      {
        type: 'instruction',
        title: 'Before You Begin',
        content:
          "These worksheets complement professional trauma therapy — they don't replace it. Go at your own pace. You control what you share. If you feel overwhelmed at any point, stop and use your grounding tools.\n\nThis particular worksheet touches directly on the relationship between your trauma history and your addiction. It\'s one of the more significant worksheets in this collection. Please only do it when you have time, privacy, and access to support. If you have a therapist, consider doing it with them or immediately before a session.",
      },
      {
        type: 'psychoeducation',
        title: 'The Research',
        content:
          "The connection between trauma and addiction is one of the most consistent findings in addiction research. The ACE (Adverse Childhood Experiences) study found that people with high ACE scores were dramatically more likely to develop substance use disorders. Studies consistently show that 60-80% of people seeking treatment for addiction have significant trauma histories.\n\nThis is not to say that trauma causes addiction in every case, or that everyone with addiction has trauma, or that trauma is an excuse for anything. It\'s to say: for many people, the substances were doing something specific — numbing pain that had nowhere else to go, creating the calm or numbness or aliveness that trauma had taken away, making an unbearable internal world bearable for a few hours.\n\nUnderstanding this connection is not about blame — not of yourself, not of others. It\'s about seeing the full picture so you can address it fully. Treating the addiction without addressing the trauma means treating only part of what\'s there.",
      },
      {
        type: 'reflection',
        title: 'The Connection (Gently)',
        content:
          "You don\'t need to tell the full story here. You don\'t need to name everything. This question asks only for the broad shape of it.",
        fields: [
          {
            id: 'trauma-connection-escape',
            type: 'textarea',
            label: 'Without going into detail: what were you most trying to escape, numb, or cope with?',
            placeholder:
              'This can be as general as you need it to be. "A childhood I couldn\'t name but couldn\'t carry." "Something that happened." "A feeling I\'d had since I was very young." You don\'t have to explain it all. Just name the shape of it.',
          },
          {
            id: 'trauma-connection-when',
            type: 'select',
            label: 'When did you first notice this connection:',
            options: [
              'Before I started using',
              'During active addiction',
              'In recovery',
              'Right now',
              'I\'m not sure yet',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Function',
        content:
          "This question asks you to look honestly at what substances actually did for you — without shame, without the reflex to say 'nothing, it was stupid.' It wasn\'t nothing. It was something. Understanding what it was doing is part of the path forward.",
        fields: [
          {
            id: 'trauma-substance-function',
            type: 'textarea',
            label: 'What did substances do for you that nothing else seemed to?',
            placeholder:
              'Made you feel safe when nothing was safe. Stopped the memories. Let you sleep. Quieted the noise. Made you feel something when you were numb. Made you feel nothing when you were overwhelmed. Let you be with people you couldn\'t be with sober. Whatever the honest answer is.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What Recovery Is Doing',
        content:
          "Recovery, at its best, begins to meet some of the same needs that substances met — more sustainably, more safely, in ways that don\'t cost you everything. What is it offering you now?",
        fields: [
          {
            id: 'trauma-recovery-provides',
            type: 'textarea',
            label: 'How is recovery providing safety/relief in ways substances did?',
            placeholder:
              'Community that knows what you\'ve been through. A routine that gives structure. A sense of capability you earn rather than chemically induce. The genuine peace of honest relationships. What is actually filling some of what substances tried to fill?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Next Step',
        content:
          "You\'ve looked at something significant today. What feels right as a next step?",
        fields: [
          {
            id: 'trauma-connection-next',
            type: 'select',
            label: 'What feels right for next steps:',
            options: [
              'Talk to my therapist about this',
              'Join a trauma-informed support group',
              'Start working with a trauma-specialized counselor',
              'Read about trauma and addiction',
              'Just sit with this for now — that\'s enough',
            ],
            required: true,
          },
        ],
      },
      {
        type: 'letter',
        title: 'Close with Care',
        content:
          "You just did something hard. You looked at the connection between some of the most painful parts of your life. Before you close this worksheet, offer something to the part of you that needed to cope the way you did.",
        fields: [
          {
            id: 'trauma-connection-self-compassion',
            type: 'textarea',
            label: 'What do you want to say to the part of you that needed to cope this way?',
            placeholder:
              'Not a lecture. Not minimizing. What does that part of you deserve to hear? What would you say to someone you loved who had survived what you survived and done what you did to make it through?',
          },
        ],
      },
    ],
  },

  {
    id: 'inner-child-letter',
    slug: 'inner-child-letter',
    title: 'Inner Child Letter',
    subtitle: 'The younger version of you needed someone. You can be that now.',
    description:
      'Many people in recovery carry a younger self who needed protection, safety, or love that didn\'t come. Writing to that younger self — from the adult you\'ve become — is a genuinely healing act, supported by IFS, narrative, and trauma-informed approaches.',
    category: 'trauma-processing',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    frequency: 'one-time',
    therapeuticFramework: ['TI', 'IFS', 'narrative'],
    tags: ['inner-child', 'IFS', 'letter', 'healing', 'narrative', 'one-time'],
    icon: '🧸',
    color: '#10B981',
    version: 1,
    relatedWorksheets: ['safety-stabilization', 'trauma-addiction-connection', 'posttraumatic-growth'],
    sections: [
      {
        type: 'instruction',
        title: 'Before You Begin',
        content:
          "These worksheets complement professional trauma therapy — they don't replace it. Go at your own pace. You control what you share. If you feel overwhelmed at any point, stop and use your grounding tools.\n\nThis worksheet can bring up strong feelings — grief, anger, tenderness, sadness. That\'s normal. It means something real is happening. Go at your own pace. You don\'t have to say everything in one sitting.",
      },
      {
        type: 'psychoeducation',
        title: 'About Inner Child Work',
        content:
          "The concept of the inner child shows up in many frameworks — Jungian psychology, IFS (Internal Family Systems), trauma-informed therapy, and spiritual traditions. The basic idea is this: within each adult is a history of younger selves, formed at different stages of development, who needed certain things that they may or may not have received.\n\nFor many people in recovery, a significant younger self was formed in circumstances of neglect, instability, abuse, chaos, or simply unrecognized pain. That younger self made adaptations — ways of surviving — that may have led, in part, down the path toward addiction.\n\nWriting a letter to that younger self is a way of doing something the child couldn\'t do then: be witnessed, be loved, be told the truth about what happened and what it wasn\'t their fault. It\'s a healing act. Many people find it one of the most significant things they\'ve ever written.",
      },
      {
        type: 'prompt',
        title: 'Meet Your Younger Self',
        content:
          "Think about which age you want to write to. It might be obvious — a particular difficult period, a specific memory, a child you can picture clearly. Or it might be a felt sense rather than a specific image.",
        fields: [
          {
            id: 'inner-child-age',
            type: 'text',
            label: 'Age of your inner child you\'ll write to:',
            placeholder:
              'This can be a single age, a range, or just "young." Trust what comes.',
          },
          {
            id: 'inner-child-context',
            type: 'textarea',
            label: 'What was life like for them at that age? What were they dealing with?',
            placeholder:
              'Paint the picture of their world — their home, their fears, what they wished for, what was hard. You don\'t have to tell a complete story. Just what you know.',
          },
        ],
      },
      {
        type: 'letter',
        title: 'The Letter',
        content:
          "Write your letter below. Start with 'Dear younger me' and write as though speaking directly to that child.\n\nYou might include:\n- What they deserved that they didn\'t get\n- What wasn\'t their fault\n- What you want them to know about how they survived\n- What\'s different now, that they can\'t yet see\n- What you\'ll protect them from, as the adult you\'ve become\n- What you love about them, specifically\n\nLet it be as long or as short as it needs to be. You don\'t have to explain everything or get it right. Just write.",
        fields: [
          {
            id: 'inner-child-letter-body',
            type: 'textarea',
            label: 'Dear younger me,',
            placeholder:
              'Begin wherever you need to begin. Let yourself feel what comes up. This letter is only for you.',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What They Needed',
        content:
          "Looking back at what that younger version of you was dealing with — what did they need most that they didn\'t get?",
        fields: [
          {
            id: 'inner-child-unmet-need',
            type: 'textarea',
            label: 'What did your inner child need most that they didn\'t get?',
            placeholder:
              'Safety. To be seen. Stability. Someone to believe them. Protection. Love without conditions. Permission to be a child. Name what was missing.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What You Can Offer',
        content:
          "You can\'t go back. But you can do something meaningful from where you stand now.",
        fields: [
          {
            id: 'inner-child-offer-now',
            type: 'textarea',
            label: 'As the adult you\'ve become, what can you offer that younger version of you — even symbolically?',
            placeholder:
              'Witnessing. Acknowledgment. Saying out loud that it wasn\'t their fault. Choosing recovery as an act of protecting them. Giving that child what they needed, now, in how you live. What can you offer?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Grounding Close',
        content:
          "After this letter, take care of yourself. This kind of work deserves a gentle landing.",
        fields: [
          {
            id: 'inner-child-self-care',
            type: 'text',
            label: 'After this letter, one thing I\'ll do to care for myself:',
            placeholder:
              'A walk, a cup of tea, calling someone safe, resting, being around people you love. What does this moment call for?',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'trigger-vs-trauma-response',
    slug: 'trigger-vs-trauma-response',
    title: 'Trigger vs. Trauma Response',
    subtitle: 'Learning to tell the difference helps you respond instead of react',
    description:
      'Sometimes what feels like a present-day trigger is actually a trauma echo: the past flooding the present, making your reaction much larger than the current situation warrants. This worksheet helps you distinguish between the two.',
    category: 'trauma-processing',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['TI', 'CBT'],
    tags: ['triggers', 'trauma', 'response', 'awareness', 'grounding', 'as-needed'],
    icon: '⚡',
    color: '#10B981',
    version: 1,
    relatedWorksheets: ['emotional-flashback-firstaid', 'safety-stabilization', 'window-of-tolerance'],
    sections: [
      {
        type: 'instruction',
        title: 'Before You Begin',
        content:
          "These worksheets complement professional trauma therapy — they don't replace it. Go at your own pace. You control what you share. If you feel overwhelmed at any point, stop and use your grounding tools.",
      },
      {
        type: 'psychoeducation',
        title: 'Triggers and Trauma Echoes',
        content:
          "A trigger is something in the present — a person, situation, word, smell, tone of voice — that activates a strong emotional response. Triggers are normal and everyone has them.\n\nA trauma echo is something different: it\'s when a present-day trigger activates a response that belongs, in whole or in part, to a past experience. Your nervous system encounters something in the present that resembles something dangerous or painful from the past, and responds as though you\'re back there — the threat level, the emotional intensity, sometimes even the age.\n\nThe difference matters because the response to each is different. A present trigger can often be addressed directly. A trauma echo needs to be named as such first — recognized as coming from the past — so you don\'t act on past-threat levels in a present situation that doesn\'t warrant them.",
      },
      {
        type: 'freewrite',
        title: 'The Present Situation',
        content:
          "Name what happened or is happening. Keep it factual for now — just what occurred.",
        fields: [
          {
            id: 'trigger-present-situation',
            type: 'textarea',
            label: 'What happened or is happening right now?',
            placeholder:
              'Who, what, where. Just the facts of the present situation before you interpret it.',
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Reality Check',
        content:
          "Check the ones that are true right now.",
        fields: [
          {
            id: 'trigger-reality-check',
            type: 'checkbox',
            label: 'What\'s true about this situation right now:',
            options: [
              'The threat is actually present right now',
              'My reaction feels proportionate to the situation',
              'I feel calm enough to think clearly',
              'I\'m responding to what\'s happening, not a memory',
            ],
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Signs It Might Be a Trauma Echo',
        content:
          "Check the ones that feel true. If you check two or more, you may be dealing with a trauma echo rather than (or in addition to) a present-day trigger.",
        fields: [
          {
            id: 'trauma-echo-signs',
            type: 'multi-select',
            label: 'Signs present in my reaction:',
            options: [
              'My reaction feels much bigger than the situation',
              'I suddenly feel much younger',
              'I feel frozen or dissociated',
              'My body is responding as if I\'m in danger even if I\'m not',
              'This feeling feels familiar in a deep, old way',
              'I\'m responding to someone who isn\'t the person who originally hurt me',
            ],
          },
        ],
      },
      {
        type: 'instruction',
        title: 'Return to Now',
        content:
          "If you recognized a trauma echo — here is your return path.\n\n**Step 1: Name it.** Say to yourself: 'This is a trauma echo. Part of what I\'m feeling is from the past, not just the present.'\n\n**Step 2: Ground.** Feel your feet on the floor. Press them down. Name five things you can see right now — out loud if possible.\n\n**Step 3: Orient.** Look around the room slowly. Name where you are, what year it is, how old you are. Your nervous system may need to be told: you are here, now, and you are safe.\n\n**Step 4: Breathe.** Slow exhale, longer than the inhale. Do this three times.\n\n**Step 5: Note the difference.** The past situation was dangerous. The present situation may or may not be — but it\'s separate. You can respond to what\'s actually here.",
        fields: [
          {
            id: 'trauma-echo-return',
            type: 'textarea',
            label: 'What I need to return to the present:',
            placeholder:
              'After grounding — what do you need right now? A moment of quiet, contact with a safe person, a specific action, rest?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'For Later',
        content:
          "Don\'t try to process everything right now. Note what you\'ll share with your support.",
        fields: [
          {
            id: 'trauma-echo-therapist',
            type: 'text',
            label: 'What I\'ll tell my therapist or sponsor about this:',
            placeholder:
              'The situation, the echo you recognized, what you noticed. This is data worth bringing to your next session.',
          },
        ],
      },
    ],
  },

  {
    id: 'posttraumatic-growth',
    slug: 'posttraumatic-growth',
    title: 'Post-Traumatic Growth Inventory',
    subtitle: 'What has genuinely grown in the wreckage — not what should have, what actually has',
    description:
      'Based on Tedeschi & Calhoun\'s post-traumatic growth research: this inventory helps you identify the real, documented ways that profound personal transformation can emerge through surviving and processing trauma and addiction.',
    category: 'trauma-processing',
    difficulty: 'advanced',
    estimatedMinutes: 30,
    frequency: 'one-time',
    therapeuticFramework: ['PP', 'TI', 'narrative'],
    tags: ['post-traumatic growth', 'meaning', 'healing', 'narrative', 'strength', 'advanced'],
    icon: '🌱',
    color: '#10B981',
    featured: true,
    version: 1,
    relatedWorksheets: ['finding-the-gift', 'inner-child-letter', 'trauma-addiction-connection'],
    sections: [
      {
        type: 'instruction',
        title: 'Before You Begin',
        content:
          "These worksheets complement professional trauma therapy — they don't replace it. Go at your own pace. You control what you share. If you feel overwhelmed at any point, stop and use your grounding tools.\n\nThis worksheet is for people who have been in recovery long enough to have some distance from the acute crisis — who are far enough along to begin examining what has grown. If you\'re in early recovery, this can wait. There\'s no rush.",
      },
      {
        type: 'psychoeducation',
        title: 'What Post-Traumatic Growth Actually Is',
        content:
          "Psychologists Richard Tedeschi and Lawrence Calhoun spent decades researching what they called post-traumatic growth — the documented phenomenon of positive psychological change that can emerge through the struggle with highly challenging life circumstances.\n\nImportant: this is not the same as toxic positivity or the belief that suffering is secretly good. Tedeschi and Calhoun were careful to say this: post-traumatic growth does not mean the trauma was good. It does not mean the person is glad it happened. The pain is real, the damage is real, the loss is real.\n\nWhat they found is that some people, after working through profound suffering — not bypassing it, but genuinely wrestling with it — find that they have changed in ways that matter. Deeper relationships. A sense of new possibilities. Personal strength they didn\'t know they had. A different appreciation for life. A shift in spiritual or existential understanding.\n\nThese changes are not automatic. They\'re not universal. But they are real, they are documented, and if you\'re in recovery, there\'s a good chance some of them are yours already — even if you haven\'t named them yet.",
      },
      {
        type: 'freewrite',
        title: 'Personal Strength',
        content:
          "One of the most consistently reported domains of post-traumatic growth is the recognition of strength you didn\'t know you had until you were tested.",
        fields: [
          {
            id: 'ptg-personal-strength',
            type: 'textarea',
            label: 'Ways you are stronger than before. Not despite what you went through — because of what you survived.',
            placeholder:
              'What can you handle now that you couldn\'t before? What did the crisis reveal about your capacity? What do you know you\'re capable of, with evidence from your own life?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'New Possibilities',
        content:
          "When certain paths close — sometimes violently — other paths can become visible. This doesn\'t mean the closing was okay. It means you\'re here now, and some doors are open that weren\'t before.",
        fields: [
          {
            id: 'ptg-new-possibilities',
            type: 'textarea',
            label: 'Paths, relationships, or purposes that opened up only because the old ones closed.',
            placeholder:
              'Recovery community. A vocation in service. Relationships built on honesty rather than performance. A creative practice. A spiritual life. Work with meaning. What exists in your life now that couldn\'t have existed on the old path?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Relating to Others',
        content:
          "People who have suffered and survived tend to carry a particular kind of knowledge — a capacity for compassion and genuine understanding that only comes from having been through it.",
        fields: [
          {
            id: 'ptg-relating-others',
            type: 'textarea',
            label: 'How has your suffering deepened your capacity to connect with or understand other people?',
            placeholder:
              'What do you understand about how people end up in dark places that you couldn\'t before? How does being in a room with someone struggling feel different, to you, than it would to someone who hasn\'t been through this?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Appreciation of Life',
        content:
          "Research consistently shows that people who have been close to losing everything often develop a heightened appreciation for the ordinary — a capacity to notice and value what they couldn\'t see before.",
        fields: [
          {
            id: 'ptg-appreciation',
            type: 'textarea',
            label: 'Things you notice and value now that you couldn\'t before.',
            placeholder:
              'The ordinary. Being sober for a Tuesday. The ability to taste food. A conversation that goes nowhere in particular. Waking up in your own bed. What has become beautiful, or precious, that you couldn\'t have valued before?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Spiritual or Existential Change',
        content:
          "The fifth domain of post-traumatic growth is often the most difficult to articulate: a shift in how you understand life, meaning, or your place in the larger picture. No religious framework required.",
        fields: [
          {
            id: 'ptg-spiritual-change',
            type: 'textarea',
            label: 'How has your sense of meaning, purpose, or understanding of life shifted? (No religious requirement — this can be purely humanistic.)',
            placeholder:
              'What do you believe now that you didn\'t? What have you stopped believing? What do you understand about life and suffering and time that you couldn\'t have grasped before? What, if anything, feels sacred to you now?',
          },
        ],
      },
      {
        type: 'letter',
        title: 'Integration',
        content:
          "This is the final question, and it\'s worth sitting with before you write. Everything you\'ve been through. Everything you\'ve grown. The whole arc.",
        fields: [
          {
            id: 'ptg-integration',
            type: 'textarea',
            label: 'If you could tell one person what you\'ve learned from walking this path — what would you say?',
            placeholder:
              'It could be someone starting the journey. Someone who doesn\'t believe change is possible. Someone who thinks they\'re too far gone. Someone you love. What do you know now that you want to pass on?',
            required: true,
          },
        ],
      },
    ],
  },
]
