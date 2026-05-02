import type { Worksheet } from '../types'

export const identityValuesWorksheets: Worksheet[] = [
  {
    id: 'who-am-i-without',
    slug: 'who-am-i-without',
    title: 'Who Am I Without Substances?',
    subtitle: 'An exploration, not a test',
    description:
      "One of the deepest wounds of addiction is the erosion of identity. This worksheet is not about who you should be — it's about rediscovering who you actually are beneath the years of using.",
    category: 'identity-values',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    frequency: 'as-needed',
    therapeuticFramework: ['ACT', 'narrative'],
    tags: ['identity', 'self', 'rediscovery', 'becoming', 'values', 'recovery'],
    icon: '🦋',
    color: '#84CC16',
    featured: true,
    version: 1,
    relatedWorksheets: ['authenticity-audit', 'strength-spotting', 'life-purpose-exploration'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Identity Is Not Gone — It Is Buried',
        content:
          "Identity is one of the deepest wounds of addiction. Substances become the organizing force of a life — what you do, who you're with, how you spend money, how you feel about yourself. When they're gone, there's often a disorienting question underneath: who am I without this?\n\nThat question is terrifying and necessary at the same time.\n\nHere's what the research on recovery tells us: your sense of self before addiction — the interests, values, ways of being, and things that mattered to you — did not disappear. They got buried. Some got distorted. But people in long-term recovery consistently report that pieces of their pre-addiction identity resurface, often alongside new parts that grew directly from the recovery experience.\n\nThis worksheet is not a test. It is not asking you to have a polished answer or a fully formed identity. It is an exploration. Stay curious. There is no wrong response here.",
      },
      {
        type: 'freewrite',
        title: 'Rediscovery',
        content:
          "Addiction often starts young — or at a time when identity was still being formed. Before it took hold, there was a version of you with interests, preferences, and ways of being in the world. Some of those things may feel distant or even embarrassing to remember. Let them come up anyway.",
        fields: [
          {
            id: 'before-substances',
            type: 'textarea',
            label: 'What did you love before substances took over?',
            placeholder:
              "Interests, hobbies, ways of being, things that made you feel alive — no matter how old you were or how long ago. What lit you up? What could you get absorbed in? What made you feel like you were being yourself? Don't edit — just write.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What Survived',
        content:
          "Addiction is destructive, but it is not all-consuming. Some parts of who you are — values, relationships, ways of caring for others, things you love — were never fully touched by it. These are worth naming.",
        fields: [
          {
            id: 'what-survived',
            type: 'textarea',
            label: "What parts of you addiction never fully touched? What's still there?",
            placeholder:
              "Your sense of humor? Your loyalty to people you love? A skill you held onto? A way of seeing the world that substances couldn't reach? Your faith or spiritual sense? Your love for your kids, your animals, your people? What's still yours?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Curiosity Now',
        content:
          "Recovery creates space — literal time and mental bandwidth — that using was consuming. In that space, curiosity can come back. What is genuinely interesting to you, right now, in this season of life?",
        fields: [
          {
            id: 'curiosity-now',
            type: 'textarea',
            label: 'What are you curious about now? What would you try if shame was not a factor?',
            placeholder:
              "Shame often blocks us from acknowledging what we actually want to explore. 'I'm too old for that.' 'That's not who I am.' 'People would think it's weird.' Set those aside. What genuinely interests you? What have you been drawn to but dismissed?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Identity Words',
        content:
          "Your identity in recovery does not have to be built around your addiction or even around your recovery. You are more than a diagnosis and more than a story of surviving.",
        fields: [
          {
            id: 'identity-words',
            type: 'textarea',
            label: 'Words I use to describe myself that have nothing to do with addiction or recovery:',
            placeholder:
              "e.g., Parent. Loyal friend. Someone who makes people laugh. A person who cares about justice. Someone who notices beauty. A good cook. A hard worker. A survivor. Someone with faith. Be generous with yourself — write more than feels comfortable.",
            required: true,
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'The Becoming',
        content:
          "Identity in recovery is not a fixed destination — it's an ongoing process. You are becoming someone. That someone is being shaped by every choice, every sober day, every hard conversation, every moment you chose differently.",
        fields: [
          {
            id: 'becoming-statement',
            type: 'textarea',
            label: 'I am becoming the kind of person who:',
            placeholder:
              "Not who you were. Not who you think you should be. Who you are actively becoming right now. Write from what's actually true, even if it's still early. \"I am becoming the kind of person who shows up even when it's hard.\" \"I am becoming someone my kids can count on.\" \"I am becoming someone who asks for help.\"",
            required: true,
          },
          {
            id: 'identity-expression-this-week',
            type: 'text',
            label: 'One concrete expression of this identity this week',
            placeholder:
              "Not a big declaration — a small, specific action that lives this identity out. e.g., \"I will call my sister just to check in.\" \"I will try the drawing class I've been thinking about.\" \"I will tell my sponsor something real.\"",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'life-purpose-exploration',
    slug: 'life-purpose-exploration',
    title: 'Life Purpose Exploration',
    subtitle: 'Recovery creates the space — this worksheet helps you find what to put in it',
    description:
      "A structured exploration of purpose using the Ikigai framework: the intersection of what you love, what you're good at, what the world needs, and what can sustain you. Recovery often opens this question for the first time.",
    category: 'identity-values',
    difficulty: 'intermediate',
    estimatedMinutes: 30,
    frequency: 'one-time',
    therapeuticFramework: ['ACT', 'PP'],
    tags: ['purpose', 'meaning', 'ikigai', 'values', 'vocation', 'direction'],
    icon: '🌟',
    color: '#84CC16',
    featured: true,
    version: 1,
    relatedWorksheets: ['legacy-letter', 'who-am-i-without', 'strength-spotting'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Recovery Opens the Purpose Question',
        content:
          "Addiction narrows life. It compresses goals, relationships, and meaning into a single organizing principle: the substance. Recovery does something interesting to that — it removes the organizing center and leaves a question: now what?\n\nFor some people this is terrifying. For others it becomes the most important question they've ever had the space to ask.\n\nThe Japanese concept of Ikigai (ee-kee-guy) describes the convergence of four elements: what you love, what you're good at, what the world needs, and what can sustain you. At their intersection lies something that functions as purpose — not in an abstract spiritual sense, but as a practical answer to the question of how to spend a life.\n\nYou don't need to have this figured out. This worksheet is about exploration, not answers. Many people in long-term recovery say that discovering or re-discovering purpose was what finally made recovery feel like living rather than just not using.",
      },
      {
        type: 'freewrite',
        title: 'What You Love',
        content:
          "Not what you think you should love or what looks good. What actually makes you lose track of time? What do you come back to even when life gets hard?",
        fields: [
          {
            id: 'what-you-love',
            type: 'textarea',
            label: 'Activities, topics, or experiences that make you lose track of time',
            placeholder:
              "Think broadly — creative work, physical activity, conversation, learning, making things, being in nature, helping specific kinds of people, solving certain kinds of problems. When were you most absorbed? What were you doing?",
            required: true,
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'What You Are Good At',
        content:
          "Skills, gifts, and natural abilities — including ones you might take for granted because they come easily to you. Often our greatest gifts are invisible to us precisely because they feel effortless.",
        fields: [
          {
            id: 'what-youre-good-at',
            type: 'textarea',
            label: "Skills, gifts, and abilities that come naturally or that you've developed",
            placeholder:
              "What do others come to you for? What do you do well without thinking much about it? Include practical skills, interpersonal gifts (listening, leadership, making people feel safe), creative abilities, hard-won skills developed through surviving. Recovery itself builds real skills: perseverance, empathy, self-awareness, helping others.",
            required: true,
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'What the World Needs',
        content:
          "This doesn't have to be global or dramatic. 'The world needs' can mean your neighborhood, your family, your recovery community, or one specific population of people who experience the exact pain you've been through.",
        fields: [
          {
            id: 'what-world-needs',
            type: 'textarea',
            label: 'Problems or pain in the world that you feel pulled toward (big or small)',
            placeholder:
              "What injustice or suffering do you find yourself thinking about? What group of people do you feel a particular pull toward helping? What would you want to fix if you could? Many people in recovery find they are uniquely equipped to help others who are still struggling.",
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'What Can Sustain You',
        content:
          "Purpose that can't pay the bills creates a different kind of suffering. This isn't about being mercenary — it's about building a life, not just a vision.",
        fields: [
          {
            id: 'what-can-sustain',
            type: 'textarea',
            label: 'Ways you could imagine contributing that could also support your life',
            placeholder:
              "What kind of work — paid or volunteer — could you see yourself doing that connects to any of the above? This doesn't need to be a complete plan. It's about beginning to see where your gifts and interests could overlap with what's sustainable.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Intersection',
        content:
          "Most people won't find a perfect answer here. But looking at what you've written in the four sections above, patterns usually emerge. Where do these circles overlap?",
        fields: [
          {
            id: 'ikigai-intersection',
            type: 'textarea',
            label: 'Where do these four circles overlap for you? What does that suggest?',
            placeholder:
              "Look for themes. If you love storytelling, are good at listening, see a need in your community for someone who can bridge gaps, and could potentially build a career around communication — that's a pattern worth noticing. What do your four answers have in common?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Recovery as Portal',
        content:
          "This is worth asking directly: how has your specific experience of addiction and recovery — the hard parts, the loss, the survival, the learning — prepared you in some way for this purpose?",
        fields: [
          {
            id: 'recovery-as-portal',
            type: 'textarea',
            label: 'How has your recovery journey specifically prepared you for this purpose?',
            placeholder:
              "What do you understand about suffering, resilience, or the human condition that you could not have understood otherwise? How does your particular journey equip you for what you feel called toward? This doesn't have to be 'everything happens for a reason' — it can be simpler: 'I've been where they are and I know what helped.'",
          },
        ],
      },
    ],
  },

  {
    id: 'values-decision-framework',
    slug: 'values-decision-framework',
    title: 'Values-Based Decision Framework',
    subtitle: 'When life is confusing, your values are your compass',
    description:
      "An ACT-based tool for making decisions that align with your values rather than your fears, avoidance patterns, or what other people want from you. Use it for any real decision you are facing.",
    category: 'identity-values',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['ACT'],
    tags: ['values', 'decision-making', 'ACT', 'alignment', 'recovery', 'clarity'],
    icon: '⚖️',
    color: '#84CC16',
    version: 1,
    relatedWorksheets: ['authenticity-audit', 'who-am-i-without', 'difficult-conversation-planner'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Values as a Compass',
        content:
          "In Acceptance and Commitment Therapy, values are not goals — they are directions. A goal is 'I will get a job this month.' A value is 'I care about being a person who contributes and takes responsibility for my life.' Goals can be achieved or failed. Values are ongoing directions you move toward.\n\nWhen facing a difficult decision, most people run it through filters like: 'What will others think?' 'What's the least risky option?' 'What do I want right now?' These filters are real, but they're not always the most useful. Fear and short-term desire both distort decision-making in recovery.\n\nValues are a different filter. When you ask 'which option moves me toward the kind of person I want to be?', you often find that clarity arrives faster than you expected. Your values already know. You just need to consult them.\n\nThis worksheet walks through the decision with three options — but the structure works with two, or with one option you're trying to evaluate.",
      },
      {
        type: 'prompt',
        title: 'The Decision',
        content:
          "Name the actual decision. Be specific. Not 'what to do with my life' but the concrete choice in front of you right now.",
        fields: [
          {
            id: 'decision-description',
            type: 'textarea',
            label: 'What decision am I facing right now?',
            placeholder:
              "Write it out clearly. Who is involved? What are the options? What is the timeline? What makes it hard? Getting it out of your head and onto the page often clarifies it immediately.",
            required: true,
          },
        ],
      },
      {
        type: 'matrix',
        title: 'Option A',
        content:
          "Evaluate the first option through the lens of your values — not your fears, not what others expect, not what is easiest.",
        fields: [
          {
            id: 'option-a-description',
            type: 'text',
            label: 'Option A:',
            placeholder: 'Name this option clearly',
            required: true,
          },
          {
            id: 'option-a-values-alignment',
            type: 'textarea',
            label: 'Does this option move me toward or away from my values? How?',
            placeholder:
              "Think about your core values — honesty, family, growth, responsibility, freedom, connection, integrity. Does choosing this option mean being the person you want to be? Or does it involve compromising something important?",
            required: true,
          },
          {
            id: 'option-a-slider',
            type: 'slider',
            label: 'Alignment with my values',
            min: 1,
            max: 10,
          },
        ],
      },
      {
        type: 'matrix',
        title: 'Option B',
        content:
          "Now evaluate the second option through the same lens.",
        fields: [
          {
            id: 'option-b-description',
            type: 'text',
            label: 'Option B:',
            placeholder: 'Name this option clearly',
            required: true,
          },
          {
            id: 'option-b-values-alignment',
            type: 'textarea',
            label: 'Does this option move me toward or away from my values? How?',
            placeholder:
              "Apply the same honest values lens. Don't just pick the 'good-looking' option — actually sit with how each one feels against what you know matters to you.",
            required: true,
          },
          {
            id: 'option-b-slider',
            type: 'slider',
            label: 'Alignment with my values',
            min: 1,
            max: 10,
          },
        ],
      },
      {
        type: 'matrix',
        title: 'Option C',
        content:
          "If there is a third option — including doing nothing, or a creative alternative you haven't fully considered.",
        optional: true,
        fields: [
          {
            id: 'option-c-description',
            type: 'text',
            label: 'Option C:',
            placeholder: 'Name this option if applicable',
          },
          {
            id: 'option-c-values-alignment',
            type: 'textarea',
            label: 'Does this option move me toward or away from my values? How?',
          },
          {
            id: 'option-c-slider',
            type: 'slider',
            label: 'Alignment with my values',
            min: 1,
            max: 10,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'My Values Verdict',
        content:
          "Now step back and look at what you've written. Your values have weighed in on each option. What are they saying?",
        fields: [
          {
            id: 'values-verdict-reflection',
            type: 'textarea',
            label: 'What my values are clearly saying about this decision',
            placeholder:
              "If you were advising a close friend who had written down everything you just wrote, what would you tell them? The answer is usually clearer than it feels from inside the decision.",
            required: true,
          },
          {
            id: 'values-verdict-decision',
            type: 'text',
            label: 'My decision:',
            placeholder:
              "You don't have to be certain. You just need to be honest about which direction your values are pointing.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'strength-spotting',
    slug: 'strength-spotting',
    title: 'Strength Spotting',
    subtitle: 'Your character strengths are already here — let\'s find them',
    description:
      "Based on VIA character strengths research: identify your signature strengths, find evidence of them in your recovery, and build a specific plan for using them deliberately.",
    category: 'identity-values',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['PP'],
    tags: ['strengths', 'VIA', 'character', 'self-awareness', 'positive', 'identity'],
    icon: '💪',
    color: '#84CC16',
    version: 1,
    relatedWorksheets: ['who-am-i-without', 'life-purpose-exploration', 'authenticity-audit'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Science of Character Strengths',
        content:
          "Martin Seligman and Christopher Peterson's VIA Character Strengths project spent years identifying 24 universal human character strengths — positive traits that are morally valued across cultures and that research shows are connected to wellbeing, resilience, and meaning.\n\nEveryone has a unique signature profile — typically 5–7 'top' strengths that feel most natural and energizing. These are not the same as skills (things you've practiced) — they're closer to aspects of your character that are genuinely yours.\n\nAddiction is very good at hiding strengths. Shame, trauma, and years of destructive patterns can make it genuinely hard to see what's good in yourself. This worksheet is specifically designed to cut through that noise.\n\nImportant: you don't have to be in perfect recovery to have character strengths. The strengths that helped you survive, seek treatment, maintain relationships through hard times, show up for your kids — those are real. Let's find them.",
      },
      {
        type: 'checklist',
        title: 'Your Signature Strengths',
        content:
          "From the 24 VIA character strengths below, select your top 5 — the ones that feel most like you, not the ones you aspire to or think you should have. Trust your gut.",
        fields: [
          {
            id: 'via-strengths-select',
            type: 'multi-select',
            label: 'My top 5 character strengths',
            options: [
              'Creativity',
              'Curiosity',
              'Open-mindedness',
              'Love of learning',
              'Perspective / wisdom',
              'Bravery / valor',
              'Persistence',
              'Integrity / honesty',
              'Vitality / zest',
              'Love',
              'Kindness',
              'Social intelligence',
              'Teamwork',
              'Fairness',
              'Leadership',
              'Forgiveness',
              'Humility',
              'Prudence',
              'Self-regulation',
              'Awe / appreciation of beauty',
              'Gratitude',
              'Hope / optimism',
              'Humor',
              'Spirituality',
            ],
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Evidence in Recovery',
        content:
          "A strength only becomes real when you can point to it showing up in your actual life. Think about your recovery journey and find the evidence.",
        fields: [
          {
            id: 'strength-evidence-1',
            type: 'textarea',
            label: 'My top strength showing up in recovery — a specific example',
            placeholder:
              "e.g., 'My persistence showed up when I relapsed and got back to recovery instead of giving up — I kept coming back even when it felt pointless.' Be specific about what happened, not just 'I have this strength.'",
            required: true,
          },
          {
            id: 'strength-evidence-2',
            type: 'textarea',
            label: 'A second strength with a recovery-specific example',
            placeholder:
              "Another strength from your list with a real moment where you saw it. Could be from early recovery, or from right now.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Using Your Strengths',
        content:
          "Research shows that people who deliberately use their signature strengths report higher wellbeing, more engagement, and greater resilience. This is not automatic — you have to be intentional about it.",
        fields: [
          {
            id: 'strength-in-recovery-now',
            type: 'textarea',
            label: 'How my top strength helps me in recovery right now',
            placeholder:
              "Specifically: how does this particular strength help you stay sober, navigate hard moments, build relationships, or sustain motivation? Make the connection explicit.",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'This Week',
        content:
          "Name one specific way to deploy a strength deliberately this week. Deliberate use of strengths is different from strengths showing up passively — you're choosing to bring it forward.",
        fields: [
          {
            id: 'strength-use-this-week',
            type: 'text',
            label: 'One way I will deliberately use a strength this week',
            placeholder:
              "e.g., 'I'll use my kindness strength by checking in on the person who just came back to my home group.' 'I'll use my curiosity by starting the art class I've been putting off.' Be specific.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'legacy-letter',
    slug: 'legacy-letter',
    title: 'Legacy Letter',
    subtitle: 'What do you want your life to mean?',
    description:
      "A values clarification exercise using the lens of legacy — not in a morbid way, but as one of the clearest tools for understanding what actually matters to you and whether you are living toward it.",
    category: 'identity-values',
    difficulty: 'advanced',
    estimatedMinutes: 30,
    frequency: 'one-time',
    therapeuticFramework: ['ACT', 'narrative', 'PP'],
    tags: ['legacy', 'values', 'meaning', 'purpose', 'future', 'self'],
    icon: '📜',
    color: '#84CC16',
    version: 1,
    relatedWorksheets: ['life-purpose-exploration', 'authenticity-audit', 'who-am-i-without'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Think About Legacy?',
        content:
          "Thinking about your legacy is not morbid — it is one of the most clarifying things you can do. Viktor Frankl, who survived the Holocaust and founded logotherapy, wrote that meaning is one of the most powerful motivators in human life. Knowing what you want your life to mean gives you a direction to move toward — and a standard against which to evaluate whether what you are doing right now is actually aligned with who you want to be.\n\nFor people in recovery, this question has particular power. Addiction narrows the horizon to the immediate. Recovery opens it back up. The legacy question asks: given that horizon is now open again, what do you want to do with it?\n\nThis is not a performance review. It is not about achievements or accolades. It's about the people you touched, the way you showed up, what you were made of when things were hard. Let yourself think about that honestly.",
      },
      {
        type: 'freewrite',
        title: 'What I Want to Be Remembered For',
        content:
          "Not your job title, your income, or your accomplishments. The things that speak to character — how you made people feel, what you stood for, how you loved.",
        fields: [
          {
            id: 'legacy-remembered-for',
            type: 'textarea',
            label: 'Not job titles or achievements — but who I was and how I made people feel',
            placeholder:
              "Write freely. What do you want to have been, not just done? When the people who know you best describe you after you're gone, what do you want them to say about your character, your presence, the quality of your love and friendship?",
            required: true,
          },
        ],
      },
      {
        type: 'letter',
        title: 'The Legacy Question',
        content:
          "These three areas are the core of most legacy thinking: character, love, and how you handled hard things. Recovery lives right in the third one.",
        fields: [
          {
            id: 'legacy-character',
            type: 'textarea',
            label: 'What I would want said about the kind of person I was',
            placeholder:
              "Write this in the third person if it helps: 'She was the kind of person who...' or 'He never let someone struggle alone.' What values and ways of being do you want to have actually lived?",
            required: true,
          },
          {
            id: 'legacy-love',
            type: 'textarea',
            label: 'What I would want said about the way I loved',
            placeholder:
              "Who did you love, and how did you love them? What kind of parent, partner, child, friend, sponsor did you want to be? What does love in action look like for you?",
          },
          {
            id: 'legacy-hard-times',
            type: 'textarea',
            label: 'What I would want said about how I handled hard times',
            placeholder:
              "Recovery is evidence that you can handle hard things. What do you want your relationship with adversity to say about your character? 'He fell down but always got back up.' 'She was honest about her struggles and that honesty helped other people.' What's true for you?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Working Backward',
        content:
          "You've written what you want your legacy to be. Now work backward: what does your daily life need to look like in order for that to actually be true?",
        fields: [
          {
            id: 'legacy-life-requirements',
            type: 'textarea',
            label: 'Given that answer: what does my life need to look like for that to be true?',
            placeholder:
              "If you want to be remembered as someone who was present for your family, what does that require of your Tuesday evening? If you want to be remembered as someone who helped others through addiction, what does that mean for how you engage in your recovery community today? Work backward from legacy to present.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Gap',
        content:
          "This is the honest part. No judgment — just clear seeing. Where is there distance between the legacy you wrote and how you're actually living right now?",
        fields: [
          {
            id: 'legacy-gap',
            type: 'textarea',
            label: 'Where is there a gap between that vision and where I am today?',
            placeholder:
              "Be honest without being brutal. You don't have to be living your full legacy right now — recovery is a process and you're in it. But name the gap clearly, because you can't close a gap you won't look at.",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The First Step',
        content:
          "One concrete step. Not a life transformation plan — just one real thing you can do this week that begins closing the gap between the legacy you wrote and how you're living.",
        fields: [
          {
            id: 'legacy-first-step',
            type: 'text',
            label: 'One concrete step toward living into my legacy, starting this week',
            placeholder:
              "Small, specific, doable. e.g., 'Call my son and tell him what I appreciate about him.' 'Show up for someone new at my meeting this Thursday.' 'Stop saying I'll make time and actually make time.'",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'authenticity-audit',
    slug: 'authenticity-audit',
    title: 'The Authenticity Audit',
    subtitle: 'Are you actually showing up as yourself?',
    description:
      "A domain-by-domain audit of where you are living authentically and where you are performing, hiding, or managing impressions. Inauthenticity is exhausting — this worksheet finds where it's costing you most.",
    category: 'identity-values',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'weekly',
    therapeuticFramework: ['ACT', 'narrative'],
    tags: ['authenticity', 'integrity', 'identity', 'relationships', 'self', 'honesty'],
    icon: '🎭',
    color: '#84CC16',
    version: 1,
    relatedWorksheets: ['who-am-i-without', 'values-decision-framework', 'difficult-conversation-planner'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Authenticity Actually Means',
        content:
          "Authenticity doesn't mean radical honesty in every interaction — saying everything you think to everyone regardless of context. That's not authenticity, that's dysregulation.\n\nAuthenticity is alignment: your inner life and your outer presentation are not wildly at odds with each other. You are not performing a role that has nothing to do with who you actually are. You are not hiding so thoroughly that the people around you have no real access to you.\n\nAddiction often creates profound inauthenticity: maintaining a 'normal' front while everything is falling apart, performing wellness, playing roles to manage other people's perceptions. Recovery is supposed to move in the opposite direction — toward more realness, more self-disclosure, more willingness to be seen.\n\nBut recovery also creates its own authenticity challenges: the pressure to perform recovery, to seem more together than you are, to project strength in front of people who might judge your struggle.\n\nThis audit looks at five life domains. No domain needs a perfect score — you're looking for where inauthenticity is costing you the most.",
      },
      {
        type: 'scale',
        title: 'Authenticity Inventory',
        content:
          "For each of the five life domains, rate how authentic you feel and then describe what you hide or perform. Be honest — you don't have to share this with anyone.",
        fields: [
          {
            id: 'auth-recovery-community-score',
            type: 'slider',
            label: 'Recovery community — How authentic am I here?',
            min: 1,
            max: 10,
          },
          {
            id: 'auth-recovery-community-hiding',
            type: 'textarea',
            label: 'Recovery community — What I hide or perform here',
            placeholder:
              "e.g., 'I perform more certainty and strength than I actually feel.' 'I don't tell people when I'm struggling because I don't want to seem like I'm not progressing.' 'I hide how lonely I still am.'",
          },
          {
            id: 'auth-family-score',
            type: 'slider',
            label: 'Family — How authentic am I here?',
            min: 1,
            max: 10,
          },
          {
            id: 'auth-family-hiding',
            type: 'textarea',
            label: 'Family — What I hide or perform here',
            placeholder:
              "What roles do you play in your family of origin or immediate family? What do you suppress or manage? What do they not actually know about you?",
          },
          {
            id: 'auth-work-school-score',
            type: 'slider',
            label: 'Work or school — How authentic am I here?',
            min: 1,
            max: 10,
          },
          {
            id: 'auth-work-school-hiding',
            type: 'textarea',
            label: 'Work or school — What I hide or perform here',
            placeholder:
              "The gap between who you are at work and who you are internally. What do you conceal? What professional persona are you maintaining?",
          },
          {
            id: 'auth-friendships-score',
            type: 'slider',
            label: 'Friendships — How authentic am I here?',
            min: 1,
            max: 10,
          },
          {
            id: 'auth-friendships-hiding',
            type: 'textarea',
            label: 'Friendships — What I hide or perform here',
            placeholder:
              "Are there friends who know the real you? What do even close friends not know? What would you never say to a friend that you actually think or feel?",
          },
          {
            id: 'auth-alone-score',
            type: 'slider',
            label: 'Alone with myself — How authentic am I here?',
            min: 1,
            max: 10,
          },
          {
            id: 'auth-alone-hiding',
            type: 'textarea',
            label: 'Alone with myself — What I hide or avoid even in my own mind',
            placeholder:
              "This is the most interesting one. What do you not let yourself fully think about? What truths do you push away when you're alone? What do you distract yourself from knowing?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Cost',
        content:
          "Inauthenticity has a price. It takes energy to maintain. It creates distance from people. It reinforces shame. It makes recovery harder because recovery requires honesty.",
        fields: [
          {
            id: 'auth-highest-cost',
            type: 'textarea',
            label: 'Where is inauthenticity costing me the most energy right now?',
            placeholder:
              "Look at your five domain ratings and reflections. Which domain's inauthenticity is the most exhausting, the most isolating, or the most incompatible with the recovery you are trying to build?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: "What's Holding You Back",
        content:
          "Inauthenticity usually comes from something — fear, shame, old patterns, not being sure who the real you actually is. Naming what's underneath it is important.",
        fields: [
          {
            id: 'auth-block-select',
            type: 'multi-select',
            label: "What's holding me back from being more authentic",
            options: [
              'Fear of judgment',
              'Old habits and roles I learned young',
              'Shame',
              "Not sure who I really am yet — still figuring it out",
              'Other',
            ],
          },
          {
            id: 'auth-story',
            type: 'textarea',
            label: "The story I tell myself about why I can't be real here",
            placeholder:
              "e.g., 'If people knew how much I'm still struggling, they'd think I'm failing at recovery.' 'My family needs me to be the strong one.' 'I've never been someone people actually liked — they like the version I perform.' What does the internal justification sound like?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Brave Move',
        content:
          "Not a complete authenticity overhaul. Just one domain, one small increase in realness, one moment of less performance.",
        fields: [
          {
            id: 'auth-brave-domain',
            type: 'text',
            label: "One domain where I'll risk a little more authenticity this week",
            placeholder:
              "Name the specific domain — recovery community, family, work, friendship, or yourself.",
            required: true,
          },
          {
            id: 'auth-brave-action',
            type: 'text',
            label: "What I'll actually do",
            placeholder:
              "One specific, concrete action. e.g., 'I'll tell my sponsor I'm not doing as well as I said last week.' 'I'll stop pretending to my sister that everything is fine.' 'I'll allow myself to actually sit with what I've been avoiding thinking about.'",
            required: true,
          },
        ],
      },
    ],
  },
]
