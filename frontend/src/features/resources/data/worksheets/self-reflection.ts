import type { Worksheet } from '../types'

export const selfReflectionWorksheets: Worksheet[] = [
  {
    id: 'values-compass',
    slug: 'values-compass',
    title: 'Values Compass',
    subtitle: 'Find true north when you don\'t know which way to go',
    description:
      "When you don't know what to do, your values do. This worksheet helps you identify the values that are most deeply yours — not the ones you think you should have — and then use them as a compass for decisions you're actually facing.",
    category: 'self-reflection',
    difficulty: 'intermediate',
    estimatedMinutes: 30,
    frequency: 'as-needed',
    therapeuticFramework: ['ACT', 'narrative'],
    tags: ['values', 'identity', 'ACT', 'decision-making', 'compass', 'authenticity'],
    icon: '🧭',
    color: '#10B981',
    featured: true,
    version: 1,
    relatedWorksheets: ['identity-reclamation', 'radical-honesty-inventory', 'letter-to-future-self'],
    sections: [
      {
        type: 'prompt',
        title: 'Values Card Sort',
        content:
          "These are not the values you think a good person is supposed to have. They're the values that feel most like YOU — the ones that, when they're violated, make you feel like you've betrayed yourself.\n\nRead through the full list slowly. Select everything that resonates. Then we'll narrow it down to your real top five.",
        fields: [
          {
            id: 'values-initial-sort',
            type: 'multi-select',
            label: 'Select every value that feels genuinely like you:',
            options: [
              'Honesty',
              'Family',
              'Courage',
              'Freedom',
              'Health',
              'Loyalty',
              'Creativity',
              'Service',
              'Growth',
              'Spirituality',
              'Humor',
              'Achievement',
              'Connection',
              'Peace',
              'Justice',
              'Integrity',
              'Adventure',
              'Kindness',
              'Wisdom',
              'Authenticity',
              'Responsibility',
              'Compassion',
              'Resilience',
              'Independence',
              'Community',
            ],
            required: true,
          },
          {
            id: 'values-top-5',
            type: 'textarea',
            label: 'Now narrow to your actual top 5. List them here:',
            placeholder:
              'Look at everything you selected. Which five feel essential — the ones you couldn\'t live without being guided by? List them.',
            required: true,
          },
        ],
      },
      {
        type: 'ranking',
        title: 'Your Top 5 — In Your Own Words',
        content:
          "For each of your top values, write why it's on the list. Not the dictionary definition — why this particular value matters to you, in your life, right now.",
        fields: [
          {
            id: 'value-1-name',
            type: 'text',
            label: 'Value 1:',
            placeholder: 'e.g. Honesty',
            required: true,
          },
          {
            id: 'value-1-why',
            type: 'textarea',
            label: 'Why this value matters to me:',
            placeholder:
              "Where does this come from? What happens inside you when this value is violated or honored?",
          },
          {
            id: 'value-2-name',
            type: 'text',
            label: 'Value 2:',
            placeholder: 'e.g. Family',
            required: true,
          },
          {
            id: 'value-2-why',
            type: 'textarea',
            label: 'Why this value matters to me:',
            placeholder:
              "Where does this come from? What happens inside you when this value is violated or honored?",
          },
          {
            id: 'value-3-name',
            type: 'text',
            label: 'Value 3:',
            placeholder: 'e.g. Growth',
            required: true,
          },
          {
            id: 'value-3-why',
            type: 'textarea',
            label: 'Why this value matters to me:',
            placeholder:
              "Where does this come from? What happens inside you when this value is violated or honored?",
          },
          {
            id: 'value-4-name',
            type: 'text',
            label: 'Value 4:',
            placeholder: 'e.g. Loyalty',
          },
          {
            id: 'value-4-why',
            type: 'textarea',
            label: 'Why this value matters to me:',
            placeholder:
              "Where does this come from? What happens inside you when this value is violated or honored?",
          },
          {
            id: 'value-5-name',
            type: 'text',
            label: 'Value 5:',
            placeholder: 'e.g. Courage',
          },
          {
            id: 'value-5-why',
            type: 'textarea',
            label: 'Why this value matters to me:',
            placeholder:
              "Where does this come from? What happens inside you when this value is violated or honored?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Values in Action',
        content:
          "Your values are real because you've actually lived them — maybe only in flashes, maybe under tremendous pressure, but they're there in your history. Dig up an example.",
        fields: [
          {
            id: 'values-in-action',
            type: 'textarea',
            label: 'A real moment from my life when I actually lived one of these values:',
            placeholder:
              "Even under hard circumstances. Even imperfectly. Tell the story — what happened, what choice you made, what it cost or gave you.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Values-Behavior Gap',
        content:
          "This is the hardest question in the worksheet, and the most important one. Addiction widens the gap between who you are and how you're living. Where is that gap biggest for you right now?",
        fields: [
          {
            id: 'values-gap',
            type: 'textarea',
            label: 'Where is the gap between my values and my current behavior or situation the biggest?',
            placeholder:
              "I value family, but I've been absent. I value honesty, but I'm still hiding things. I value growth, but I've been standing still. Name it without turning it into a verdict against yourself — this is just data.",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Compass Check',
        content:
          "The whole point of knowing your values is using them when you have to decide something. Apply yours right now.",
        fields: [
          {
            id: 'compass-decision',
            type: 'textarea',
            label: 'One real decision I\'m facing right now, and what my values say about it:',
            placeholder:
              "It doesn't have to be huge. A relationship, a treatment decision, a living situation, whether to tell someone the truth. What do your values say?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Quarterly Revisit',
        content:
          "Values shift as you heal and grow. Come back to this in a few months and see what's changed.",
        fields: [
          {
            id: 'revisit-date',
            type: 'date',
            label: 'Date to review this worksheet:',
          },
          {
            id: 'revisit-note',
            type: 'textarea',
            label: 'What I want to remember about who I am today:',
            placeholder:
              "Write something for your future self — the version of you who will read this in a few months. What\'s true about you right now that you want them to know?",
          },
        ],
      },
    ],
  },

  {
    id: 'letter-to-future-self',
    slug: 'letter-to-future-self',
    title: 'Letter to Future Self',
    subtitle: 'Write to the version of you who needs to hear this',
    description:
      "Somewhere ahead of you is a version of yourself who will face hard days and need to remember why they kept going. This is your letter to them. Write it honestly — the hard parts, the hope, the proof, the promise.",
    category: 'self-reflection',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    frequency: 'one-time',
    therapeuticFramework: ['narrative', 'PP'],
    tags: ['letter', 'future', 'hope', 'narrative', 'reflection', 'one-time'],
    icon: '✉️',
    color: '#6366F1',
    featured: true,
    version: 1,
    relatedWorksheets: ['values-compass', 'identity-reclamation', 'recovery-story-timeline'],
    sections: [
      {
        type: 'instruction',
        title: 'Before You Begin',
        content:
          "This letter is for you. Not a therapist, not a group, not anyone else — just the version of you who will read this someday when things get hard.\n\nWrite it like you mean it. Be as honest as you can. There's no right way to do this. You can skip any section that doesn't feel right. You can come back and add to it later.\n\nWhen you're done, set a date to open it — three months from now, six months, a year. Some people print it and put it somewhere only they know. Others email it to themselves using a time-delay service. It's yours. Keep it where it'll reach you when you need it.",
      },
      {
        type: 'letter',
        title: 'Opening — Right Now',
        content:
          "Start by telling your future self where you are today. What's happening, how you're feeling, what's real.",
        fields: [
          {
            id: 'letter-opening',
            type: 'textarea',
            label: 'Dear future me,\n\nRight now I am...',
            placeholder:
              "Tell them what today looks like. The hard parts and the hopeful parts. Where you are in recovery, what you\'re struggling with, what you\'re fighting for. Don\'t perform it. Just tell them.",
            required: true,
          },
        ],
      },
      {
        type: 'letter',
        title: 'What to Remember',
        content:
          "What do you need your future self to remember about today? About who you were in this moment?",
        fields: [
          {
            id: 'letter-remember',
            type: 'textarea',
            label: 'What I need you to remember about today, even if today is hard:',
            placeholder:
              "What matters about this moment — this choice, this attempt, this version of you who showed up anyway? Tell them.",
            required: true,
          },
        ],
      },
      {
        type: 'letter',
        title: 'The Lie and the Truth',
        content:
          "Addiction lies. It will try again. Write the lie down — and the counter-truth.",
        fields: [
          {
            id: 'letter-lie-truth',
            type: 'textarea',
            label: 'The lie that addiction will try to tell you — and the truth you know right now:',
            placeholder:
              "\"The lie is: it was never really that bad. You can handle just one. Nobody actually cares. The truth is: you know exactly how bad it got. You know what it costs. And people do care — I can list them.\"",
            required: true,
          },
        ],
      },
      {
        type: 'letter',
        title: 'Proof of Strength',
        content:
          "Future you needs receipts. Give them evidence from your own life.",
        fields: [
          {
            id: 'letter-proof',
            type: 'textarea',
            label: 'Evidence from your own life that you are strong enough:',
            placeholder:
              "Times you got back up. Things you survived. Choices you made under pressure. People you showed up for. Moments of courage that maybe nobody saw but you. Give future you the proof.",
            required: true,
          },
        ],
      },
      {
        type: 'letter',
        title: 'Permission Slip',
        content:
          "Give your future self permission to let something go. Something they might be punishing themselves for that you, today, want to release.",
        fields: [
          {
            id: 'letter-permission',
            type: 'textarea',
            label: 'What I give you permission to let go of:',
            placeholder:
              "The shame from that relapse. The years you lost. The version of yourself you used to be. A relationship that couldn't survive your addiction. What do they need to be released from? Grant it.",
          },
        ],
      },
      {
        type: 'letter',
        title: 'The Promise',
        content:
          "Close the letter with something real — not a wish, a promise. Something you're willing to be held to.",
        fields: [
          {
            id: 'letter-promise',
            type: 'textarea',
            label: 'What I promise to work toward for you:',
            placeholder:
              "\"I promise to keep showing up. I promise to call for help before I pick up. I promise to keep choosing you.\" Make it yours.",
            required: true,
          },
          {
            id: 'letter-open-date',
            type: 'date',
            label: 'Date to open this letter:',
          },
        ],
      },
    ],
  },

  {
    id: 'recovery-story-timeline',
    slug: 'recovery-story-timeline',
    title: 'My Recovery Story',
    subtitle: 'You are the author — not just the main character',
    description:
      "Your story isn't over. Narrative therapy teaches us that the way we tell our story shapes who we become — and that we have more authorship than we realize. This worksheet helps you trace the arc of your story and find the strength thread running through all of it.",
    category: 'self-reflection',
    difficulty: 'intermediate',
    estimatedMinutes: 40,
    frequency: 'one-time',
    therapeuticFramework: ['narrative', 'TI'],
    tags: ['story', 'narrative', 'trauma-informed', 'timeline', 'identity', 'one-time'],
    icon: '📖',
    color: '#F59E0B',
    version: 1,
    relatedWorksheets: ['letter-to-future-self', 'before-after-inventory', 'addiction-autopsy'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'You Are the Author',
        content:
          "Narrative therapy starts from a simple premise: the stories we tell about ourselves have power. Not because they change the facts — but because the meaning we make from events shapes what we believe is possible.\n\nToo often in recovery, the story we tell goes like this: \"I ruined my life. I wasted years. I am an addict.\" That story has an ending built into it.\n\nBut here's what narrative therapy knows: that's one version of the story. There's another version — one that includes the same events but also includes your resistance, your survival, your capacity to change. Both versions contain the same facts. They lead to very different futures.\n\nThis worksheet asks you to trace your story with honesty — including the hard parts — and find the different throughline. Not to rewrite history. To see more of what actually happened.",
      },
      {
        type: 'timeline',
        title: 'The Timeline',
        content:
          "You don't need to cover every year. Just the moments that shaped the arc. Go at your own pace. It's okay if some of these are hard to write.",
        fields: [
          {
            id: 'timeline-rock-bottom',
            type: 'textarea',
            label: 'Rock bottom moment:',
            placeholder:
              "The moment — or the period — where you knew something had to change. You don\'t have to write it in detail. Just what happened and what it felt like.",
          },
          {
            id: 'timeline-turning-point',
            type: 'textarea',
            label: 'First turning point:',
            placeholder:
              "The first time something shifted — a decision, a moment of clarity, a person who reached you, a treatment you tried, something that cracked the door open.",
          },
          {
            id: 'timeline-breakthrough',
            type: 'textarea',
            label: 'A major breakthrough:',
            placeholder:
              "Something that changed — a new understanding, a relationship repaired, a milestone hit, a skill learned, a day you made it through that you didn\'t think you could.",
          },
          {
            id: 'timeline-setback',
            type: 'textarea',
            label: 'A setback I survived:',
            placeholder:
              "A relapse, a loss, a hard season. What happened — and how did you come back from it?",
          },
          {
            id: 'timeline-now',
            type: 'textarea',
            label: 'Where I am now:',
            placeholder:
              "Not where you wish you were. Where you actually are. What does today look like? What have you built, even if it\'s fragile?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Strength Thread',
        content:
          "Look at everything you wrote. Look at the whole arc. There is a quality in you — some stubborn, specific strength — that runs through all of it. Find it.",
        fields: [
          {
            id: 'strength-thread',
            type: 'textarea',
            label: 'Looking at my story, the strength that runs through all of it is:',
            placeholder:
              "Not a generic quality. The specific thing that kept showing up. Stubbornness. Love for your kids. Refusal to give up entirely. Capacity to ask for help, even late. What is it?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What the Story Proves',
        content:
          "Your story — the real one, with all of it in it — is proof of something. What does it prove about you?",
        fields: [
          {
            id: 'story-proof',
            type: 'textarea',
            label: 'My story proves that I am capable of:',
            placeholder:
              "Starting over. Surviving things that would have broken other people. Choosing differently. Loving even when I was in pain. What does your story actually prove?",
            required: true,
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'The Next Chapter',
        content:
          "You are the author. Write the next chapter — not as a wish, but as a declaration. What happens next?",
        fields: [
          {
            id: 'next-chapter',
            type: 'textarea',
            label: 'If I could write the next chapter of my story, it would include:',
            placeholder:
              "What you build, who you become, what you repair, what you let go of, who stays in the story with you. Write it forward.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'the-masks-i-wear',
    slug: 'the-masks-i-wear',
    title: 'The Masks I Wear',
    subtitle: 'What are you protecting, and what is it costing you?',
    description:
      "Everyone wears masks. In recovery, they can be lifesavers early on — and obstacles to real healing later. This worksheet helps you see the masks you've been wearing, understand what fear is underneath them, and take one step toward being known.",
    category: 'self-reflection',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['IFS', 'narrative', 'TI'],
    tags: ['masks', 'authenticity', 'IFS', 'vulnerability', 'identity', 'trauma-informed'],
    icon: '🎭',
    color: '#EC4899',
    version: 1,
    relatedWorksheets: ['parts-of-me', 'shame-guilt-separator', 'radical-honesty-inventory'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why We Wear Masks',
        content:
          "Masks are not weakness. They're intelligence. At some point in your life, showing your real self was dangerous — emotionally, relationally, sometimes physically. You learned that certain versions of yourself were safer to present. That adaptation kept you okay.\n\nBut masks have a cost. When you only show the world what you've curated, you can never be truly known — and being unknown is its own kind of loneliness. For many people in addiction, the mask-wearing and the using were doing the same job: helping you function in a world where your real self didn't feel safe.\n\nThis worksheet isn't about ripping your masks off. It's about seeing them — understanding what they're for, what they're protecting, and whether there's one place in your life where you might be able to be a little more real.",
      },
      {
        type: 'reflection',
        title: 'Mask Inventory',
        content:
          "Identify up to three masks you regularly wear. Give each one a name — the way you'd describe the character (\"The One Who Has It Together,\" \"The Funny One,\" \"The Person Who Doesn't Need Help\"). Then describe what it shows the world, and what's underneath.",
        fields: [
          {
            id: 'mask-1-name',
            type: 'text',
            label: 'Mask 1 — name for this mask:',
            placeholder: 'e.g. The One Who Has It All Together',
            required: true,
          },
          {
            id: 'mask-1-shows',
            type: 'textarea',
            label: 'What this mask shows the world:',
            placeholder:
              "Confidence, competence, calm. The appearance that everything is fine. What do people see when this mask is on?",
          },
          {
            id: 'mask-1-fear',
            type: 'textarea',
            label: 'The fear underneath it:',
            placeholder:
              "That if people saw the real me, they\'d leave. That I\'d be a burden. That I don\'t actually have it together at all. What\'s the fear the mask is protecting?",
          },
          {
            id: 'mask-2-name',
            type: 'text',
            label: 'Mask 2 — name for this mask:',
            placeholder: 'e.g. The One Who Doesn\'t Need Anyone',
          },
          {
            id: 'mask-2-shows',
            type: 'textarea',
            label: 'What this mask shows the world:',
            placeholder: "Independence, self-sufficiency, not asking for help...",
          },
          {
            id: 'mask-2-fear',
            type: 'textarea',
            label: 'The fear underneath it:',
            placeholder: "That needing people means being vulnerable to being abandoned or hurt again...",
          },
          {
            id: 'mask-3-name',
            type: 'text',
            label: 'Mask 3 — name for this mask (optional):',
            placeholder: 'e.g. The Funny One Who Never Takes Anything Seriously',
          },
          {
            id: 'mask-3-shows',
            type: 'textarea',
            label: 'What this mask shows the world:',
          },
          {
            id: 'mask-3-fear',
            type: 'textarea',
            label: 'The fear underneath it:',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Cost',
        content:
          "Masks are a transaction. What have you traded away by wearing them?",
        fields: [
          {
            id: 'mask-cost',
            type: 'textarea',
            label: 'What wearing these masks has cost me in recovery and in my life:',
            placeholder:
              "Real intimacy. The ability to ask for help when I needed it. Letting people love the actual me. Energy I spent maintaining the performance. What has it actually cost?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Risk of Removing One',
        content:
          "You don't have to drop all your masks at once. But what if one person — just one — saw a bit more of the real you?",
        fields: [
          {
            id: 'mask-remove-risk',
            type: 'textarea',
            label: 'What might happen if one person saw more of the real me?',
            placeholder:
              "Be honest about both the fear and the hope. What\'s the worst that could happen? What\'s the best?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Brave Step',
        content:
          "You don't have to be fully known by everyone. But somewhere, one step toward realness is available to you.",
        fields: [
          {
            id: 'mask-brave-step',
            type: 'text',
            label: 'One person I could be more real with, and how:',
            placeholder:
              "e.g. Tell my sponsor what I\'m actually afraid of, not just what I\'ve already figured out...",
          },
        ],
      },
    ],
  },

  {
    id: 'shame-guilt-separator',
    slug: 'shame-guilt-separator',
    title: 'Shame vs. Guilt Separator',
    subtitle: 'What you did is not who you are',
    description:
      "Guilt says 'I did something bad.' Shame says 'I am bad.' They feel similar but they lead to completely different outcomes. This worksheet helps you untangle the two — process guilt toward repair, and dismantle shame before it sends you back.",
    category: 'self-reflection',
    difficulty: 'advanced',
    estimatedMinutes: 30,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'TI', 'PP'],
    tags: ['shame', 'guilt', 'self-compassion', 'advanced', 'healing', 'trauma-informed'],
    icon: '⚖️',
    color: '#F97316',
    version: 1,
    relatedWorksheets: ['the-masks-i-wear', 'parts-of-me', 'radical-honesty-inventory'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Guilt vs. Shame — Why It Matters in Recovery',
        content:
          "Researcher Brené Brown has spent decades studying shame, and one of her most important findings is this: guilt is associated with recovery and resilience. Shame is associated with relapse and self-destruction.\n\n**Guilt** says: \"I did something that went against my values.\" It's uncomfortable, but it points toward repair — I can make amends, I can do better, I can fix the specific thing.\n\n**Shame** says: \"I am fundamentally defective. I am the bad thing.\" It doesn't point anywhere except inward — toward hiding, numbing, or disappearing. Substances do that very efficiently.\n\nFor people in recovery, shame is often baked into the experience. The stigma of addiction, the wreckage left behind, the things done while using — all of it can collapse into a single toxic belief: \"I am a bad person.\"\n\nThis worksheet separates them. Guilt gets processed. Shame gets challenged. Both deserve your honest attention.",
      },
      {
        type: 'reflection',
        title: 'Guilt Inventory',
        content:
          "Guilt is workable. Name what you genuinely regret — the specific actions, not the verdict on who you are — and look at what repair, if any, is available.",
        fields: [
          {
            id: 'guilt-inventory',
            type: 'textarea',
            label: 'Things I did that I genuinely regret — specific actions or behaviors:',
            placeholder:
              "Not who you are. What you did. The lies, the missed moments, the people you hurt, the things you broke. Be specific, not catastrophic.",
            required: true,
          },
          {
            id: 'guilt-repair',
            type: 'textarea',
            label: 'How I can — or already have — made repair:',
            placeholder:
              "Some things can be made right. Some can only be learned from. Some need an amends. What\'s available to you here? What\'s already happened?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Shame Identification',
        content:
          "Shame is trickier because it masquerades as truth. These are the messages you carry about who you ARE — not what you did.",
        fields: [
          {
            id: 'shame-messages',
            type: 'textarea',
            label: 'Messages I carry about who I AM (not what I did):',
            placeholder:
              "\"I am broken.\" \"I am unlovable.\" \"I am a disappointment.\" \"I am weak.\" \"I am the addict — that\'s all I am.\" Write the ones you actually carry, even if you hate them.",
            required: true,
          },
          {
            id: 'shame-origins',
            type: 'multi-select',
            label: 'Where these messages came from:',
            options: [
              'Messages from my family growing up',
              'The experience of addiction itself',
              'Social stigma and how people treated me',
              'Religious or moral teachings',
              'Past relationships',
              'My own inner critic',
              'Trauma I experienced',
              'Not sure — it just lives in me',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Challenging Shame',
        content:
          "Shame survives in silence and darkness. It struggles in the light. Pick one shame belief and actually look at it.",
        fields: [
          {
            id: 'shame-challenge-belief',
            type: 'textarea',
            label: 'The shame belief I\'m going to examine:',
            placeholder: 'e.g. "I am fundamentally broken and unworthy of good things."',
            required: true,
          },
          {
            id: 'shame-evidence-against',
            type: 'textarea',
            label: 'What is the actual evidence against this belief?',
            placeholder:
              "People who have stood by you. Choices you\'ve made. Ways you\'ve shown care, strength, or love. Times the belief was proven wrong. What actually contradicts it?",
            required: true,
          },
          {
            id: 'shame-compassion-response',
            type: 'textarea',
            label: 'What would I say to someone I love who believed this about themselves?',
            placeholder:
              "Not a pep talk. What would you actually say? Would you let them believe it? What would you want them to know?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Path Forward',
        content:
          "You can't release shame all at once. But you can pick one belief to start loosening.",
        fields: [
          {
            id: 'shame-release',
            type: 'textarea',
            label: 'One shame belief I\'m willing to start releasing:',
            placeholder:
              "You don\'t have to believe it\'s gone. You just have to be willing to start questioning it.",
          },
          {
            id: 'shame-first-step',
            type: 'text',
            label: 'My first step:',
            placeholder:
              "Talk to my therapist about this. Share it in a group. Write about where it came from. Name it out loud to someone I trust.",
          },
        ],
      },
    ],
  },

  {
    id: 'parts-of-me',
    slug: 'parts-of-me',
    title: 'Parts of Me',
    subtitle: 'No part of you is the enemy',
    description:
      "You're not one single person with one set of feelings — you're a whole inner community. Internal Family Systems therapy teaches that even the parts that create problems are trying to protect you. This worksheet helps you meet them.",
    category: 'self-reflection',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    frequency: 'as-needed',
    therapeuticFramework: ['IFS', 'TI'],
    tags: ['IFS', 'parts-work', 'inner-critic', 'self-compassion', 'trauma-informed', 'advanced'],
    icon: '🧩',
    color: '#8B5CF6',
    version: 1,
    relatedWorksheets: ['the-masks-i-wear', 'shame-guilt-separator', 'identity-reclamation'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Internal Family Systems — A Quick Introduction',
        content:
          "Internal Family Systems (IFS) is a therapeutic model developed by Richard Schwartz. Its central insight is radical: there are no bad parts inside you.\n\nAll of your inner parts — even the ones that cause you problems — developed to protect you from something. The inner critic? Trying to keep you from being hurt by saying harsh things first. The addict part? Found a way to relieve pain that cost too much. The protector who shuts down emotion? Learned that feelings were dangerous.\n\nIn IFS, the goal isn't to get rid of difficult parts — it's to build a relationship with them from your \"Self\" (the calm, wise core at the center of you) so that they no longer have to run the show.\n\nThis worksheet is not a full IFS session. But it's an introduction to meeting your parts with curiosity instead of warfare.",
      },
      {
        type: 'reflection',
        title: 'Meet Your Parts',
        content:
          "Describe up to four parts of yourself. Some may be familiar; others you might be meeting for the first time. For each one, ask: what does this part want for me? What is it afraid of?",
        fields: [
          {
            id: 'part-1-type',
            type: 'select',
            label: 'Part 1 — this part is:',
            options: [
              'The Protector — keeps danger at a distance',
              'The Inner Critic — keeps standards ruthlessly high',
              'The Wounded Child — carries old pain',
              'The Achiever — drives success to earn worth',
              'The Rebel — resists control',
              'The Caretaker — gives to avoid being given to',
              'The Addict Part — reaches for relief',
              'My Wise Self — calm, grounded, rarely in charge',
              'Other',
            ],
            required: true,
          },
          {
            id: 'part-1-name',
            type: 'text',
            label: 'What I call this part:',
            placeholder: 'e.g. The Armor, The Little One, The Driver...',
          },
          {
            id: 'part-1-wants',
            type: 'textarea',
            label: 'What does this part want for me?',
            placeholder:
              "Even the hard parts want something for you. What is it? Safety? Control? Relief from pain? To matter?",
          },
          {
            id: 'part-1-fears',
            type: 'textarea',
            label: 'What is this part afraid of?',
            placeholder:
              "What does it believe will happen if it stops doing its job?",
          },
          {
            id: 'part-2-type',
            type: 'select',
            label: 'Part 2 — this part is:',
            options: [
              'The Protector — keeps danger at a distance',
              'The Inner Critic — keeps standards ruthlessly high',
              'The Wounded Child — carries old pain',
              'The Achiever — drives success to earn worth',
              'The Rebel — resists control',
              'The Caretaker — gives to avoid being given to',
              'The Addict Part — reaches for relief',
              'My Wise Self — calm, grounded, rarely in charge',
              'Other',
            ],
          },
          {
            id: 'part-2-name',
            type: 'text',
            label: 'What I call this part:',
          },
          {
            id: 'part-2-wants',
            type: 'textarea',
            label: 'What does this part want for me?',
          },
          {
            id: 'part-2-fears',
            type: 'textarea',
            label: 'What is this part afraid of?',
          },
          {
            id: 'part-3-type',
            type: 'select',
            label: 'Part 3 — this part is (optional):',
            options: [
              'The Protector — keeps danger at a distance',
              'The Inner Critic — keeps standards ruthlessly high',
              'The Wounded Child — carries old pain',
              'The Achiever — drives success to earn worth',
              'The Rebel — resists control',
              'The Caretaker — gives to avoid being given to',
              'The Addict Part — reaches for relief',
              'My Wise Self — calm, grounded, rarely in charge',
              'Other',
            ],
          },
          {
            id: 'part-3-name',
            type: 'text',
            label: 'What I call this part:',
          },
          {
            id: 'part-3-wants',
            type: 'textarea',
            label: 'What does this part want for me?',
          },
          {
            id: 'part-3-fears',
            type: 'textarea',
            label: 'What is this part afraid of?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Conflict',
        content:
          "Which two of your parts are most in conflict right now — especially around your recovery?",
        fields: [
          {
            id: 'parts-conflict',
            type: 'textarea',
            label: 'The two parts most in conflict in my recovery right now:',
            placeholder:
              "The part of me that wants to be sober and the part that reaches for relief when things get hard. The achiever who wants to perform recovery perfectly and the wounded part that just wants to rest. What\'s the real tension?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Making Peace',
        content:
          "You don't have to pick a side. Both parts are trying to take care of you. Is there a way to honor both?",
        fields: [
          {
            id: 'parts-peace',
            type: 'textarea',
            label: 'What does each conflicting part actually need? Is there a way to honor both?',
            placeholder:
              "What if the addict part needs relief and you could give it something less destructive? What if the inner critic needs reassurance that you\'re going to be okay? What would it look like to give both parts what they actually need?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Wise Self',
        content:
          "Underneath all the noise of your parts, there is a version of you that is calm, clear, and already knows what you need. It doesn't always get to drive. But it's there.",
        fields: [
          {
            id: 'wise-self-message',
            type: 'textarea',
            label: 'What does my wisest, most grounded self want to say to all these parts?',
            placeholder:
              "If you could step back from the noise and speak from your deepest center — the part that loves you, sees you clearly, and isn\'t afraid — what would it say? To the critic. To the wounded child. To the addict part. To all of them.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'before-after-inventory',
    slug: 'before-after-inventory',
    title: 'Before & After Inventory',
    subtitle: 'Evidence of growth for the days you can\'t see it',
    description:
      "On hard days, the mind tends to erase all proof of growth. This worksheet builds an evidence file — a concrete record of who you were and who you're becoming — for the moments when your brain tries to tell you nothing has changed.",
    category: 'self-reflection',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['narrative', 'PP'],
    tags: ['growth', 'evidence', 'before-and-after', 'narrative', 'hope', 'resilience'],
    icon: '📈',
    color: '#14B8A6',
    version: 1,
    relatedWorksheets: ['recovery-story-timeline', 'identity-reclamation', 'letter-to-future-self'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Evidence Matters',
        content:
          "The brain in depression or shame has a well-documented bias: it filters for evidence of failure and filters out evidence of growth. This isn't a character flaw — it's neurology. But it means that on your hardest days, you genuinely can't see how much you've changed.\n\nThis worksheet builds an evidence file that exists outside of your mood. When things are clear, you fill it in honestly. When things are dark, you can come back to it and see what's true — even if you can't feel it right now.",
      },
      {
        type: 'matrix',
        title: 'The Comparison',
        content:
          "For each dimension, write honestly about where you were in active addiction versus where you are now. \"Now\" doesn't mean perfect. It means compared to then.",
        fields: [
          {
            id: 'compare-physical-before',
            type: 'textarea',
            label: 'Physical health — in active addiction:',
            placeholder: 'Sleep, body, how I physically felt, what I neglected...',
          },
          {
            id: 'compare-physical-after',
            type: 'textarea',
            label: 'Physical health — now / becoming:',
            placeholder: 'Even small changes count. Sleep getting better, eating something, moving my body...',
          },
          {
            id: 'compare-emotional-before',
            type: 'textarea',
            label: 'Emotional life — in active addiction:',
            placeholder: 'Emotional numbness, volatility, what I couldn\'t feel or felt too much of...',
          },
          {
            id: 'compare-emotional-after',
            type: 'textarea',
            label: 'Emotional life — now / becoming:',
            placeholder: 'What you can feel now. The emotions that have space. The ones less in control of you.',
          },
          {
            id: 'compare-relationships-before',
            type: 'textarea',
            label: 'Key relationships — in active addiction:',
            placeholder: 'Who was affected, what was broken or absent, the isolation...',
          },
          {
            id: 'compare-relationships-after',
            type: 'textarea',
            label: 'Key relationships — now / becoming:',
            placeholder: 'What\'s being repaired, what\'s new, who\'s still there, how presence has changed...',
          },
          {
            id: 'compare-selfrespect-before',
            type: 'textarea',
            label: 'Self-respect — in active addiction:',
            placeholder: 'Shame, self-betrayal, the things I did that I\'m not proud of...',
          },
          {
            id: 'compare-selfrespect-after',
            type: 'textarea',
            label: 'Self-respect — now / becoming:',
            placeholder: 'Choices you\'ve made that align with your values. Things you\'re not doing anymore.',
          },
          {
            id: 'compare-functioning-before',
            type: 'textarea',
            label: 'Daily life and functioning — in active addiction:',
            placeholder: 'Work, home, basic tasks, showing up for life...',
          },
          {
            id: 'compare-functioning-after',
            type: 'textarea',
            label: 'Daily life and functioning — now / becoming:',
            placeholder: 'What you\'re showing up for now. Small functional wins count.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Most Proud Of',
        content:
          "In all of what you just wrote, what stands out? What's the change you're most proud of — even if it seems small?",
        fields: [
          {
            id: 'most-proud',
            type: 'textarea',
            label: 'The change I\'m most proud of, even if it\'s small:',
            placeholder:
              "It doesn\'t have to be dramatic. Showing up for your kids. Not lying about something. Getting through a hard week without picking up. Name the one that matters most.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Hard Truth',
        content:
          "Growth doesn't mean complete. Where is there still real work to do? And can you hold that without it erasing everything else?",
        fields: [
          {
            id: 'hard-truth',
            type: 'textarea',
            label: 'The area where I still have the most work to do — and that\'s okay because:',
            placeholder:
              "Name the honest gap. Then finish the sentence: \"...and that\'s okay because\" — because you\'re working on it, because growth takes time, because you\'re still here.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Evidence Drawer',
        content:
          "Three specific moments you can return to on your darkest days. Receipts. Proof that you are not standing still.",
        fields: [
          {
            id: 'evidence-1',
            type: 'textarea',
            label: 'Evidence moment 1:',
            placeholder:
              "A specific scene — where you were, what happened, what it proved. The more specific the better.",
            required: true,
          },
          {
            id: 'evidence-2',
            type: 'textarea',
            label: 'Evidence moment 2:',
            placeholder: "Another real moment. Another proof.",
            required: true,
          },
          {
            id: 'evidence-3',
            type: 'textarea',
            label: 'Evidence moment 3:',
            placeholder: "One more. Keep these close.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'addiction-autopsy',
    slug: 'addiction-autopsy',
    title: 'The Addiction Autopsy',
    subtitle: 'Understand it — not to excuse it, but to be free of it',
    description:
      "This is one of the most difficult and most important worksheets in the library. It asks you to look honestly at what your addiction was actually doing for you, what it cost, and what you'll do with those same needs now. Go slowly.",
    category: 'self-reflection',
    difficulty: 'advanced',
    estimatedMinutes: 45,
    frequency: 'one-time',
    therapeuticFramework: ['MI', 'CBT', 'narrative'],
    tags: ['addiction', 'understanding', 'needs', 'cost', 'advanced', 'MI', 'one-time'],
    icon: '🔬',
    color: '#F43F5E',
    version: 1,
    relatedWorksheets: ['shame-guilt-separator', 'recovery-story-timeline', 'radical-honesty-inventory'],
    sections: [
      {
        type: 'instruction',
        title: 'A Note Before You Begin',
        content:
          "This worksheet asks you to look honestly at your relationship with addiction — what it gave you, what it took, and what it means for your recovery going forward.\n\nThis is not an easy exercise. Some of what comes up may be painful. Please go at your own pace. Skip anything that doesn't feel safe right now. Come back to it when you're ready.\n\nIf you're doing this as part of your work with a counselor or sponsor, consider sharing what you write with them. This kind of honesty lands better when it's witnessed by someone who already knows you're worth the work.",
      },
      {
        type: 'reflection',
        title: 'What Addiction Gave You',
        content:
          "This question surprises people. But here's what's true: nobody keeps doing something unless it's working somehow. Addiction was meeting real needs — imperfectly, destructively, but meeting them. What were yours?",
        fields: [
          {
            id: 'addiction-gave',
            type: 'textarea',
            label: 'What needs was my addiction meeting?',
            placeholder:
              "Connection when I was lonely. Numbness when the pain was too much. Confidence to be in social situations. A sense of belonging. Escape from trauma, from boredom, from anxiety. Relief from physical or emotional pain. What was it doing for you?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What It Took',
        content:
          "The other side of the ledger. This is the part you know, and the part that matters for your recovery.",
        fields: [
          {
            id: 'cost-physical',
            type: 'textarea',
            label: 'Physical cost — what it did to my body and health:',
            placeholder: 'Health consequences, sleep, appearance, chronic conditions, hospitalizations...',
          },
          {
            id: 'cost-relationships',
            type: 'textarea',
            label: 'Relationship cost — what it damaged or destroyed:',
            placeholder: 'Family relationships, friendships, romantic partnerships, trust that broke...',
          },
          {
            id: 'cost-financial',
            type: 'textarea',
            label: 'Financial cost — what it took from my resources:',
            placeholder: 'Money spent, jobs lost, opportunities missed, debt created...',
          },
          {
            id: 'cost-self-respect',
            type: 'textarea',
            label: 'Self-respect cost — what it took from my sense of self:',
            placeholder: 'Things I did that I\'m not proud of, who I became that wasn\'t me, shame I carry...',
          },
          {
            id: 'cost-time',
            type: 'textarea',
            label: 'Lost time and opportunities — years, experiences, versions of life I didn\'t get:',
            placeholder: 'The birthdays you weren\'t present for, the career, the experiences, the years...',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Math',
        content:
          "Now look at both sides of the ledger. You've named what addiction gave and what it took. What do you see when you look at the full picture?",
        fields: [
          {
            id: 'addiction-math',
            type: 'textarea',
            label: 'Looking at what it gave vs. what it took — what do I see?',
            placeholder:
              "Not a verdict. An honest accounting. What does the math actually look like? What did you pay for what you got?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Unmet Needs — Now',
        content:
          "This is the most important question in the worksheet, and it's the reason this isn't just an autopsy. Those needs you identified — connection, numbness, confidence, escape, relief — they didn't disappear with sobriety. They're still real. How are you meeting them now?",
        fields: [
          {
            id: 'unmet-needs-now',
            type: 'textarea',
            label: 'Those needs are still real. How am I meeting them in recovery? How could I meet them better?',
            placeholder:
              "What are you using instead of substances to feel connected, to find relief, to manage pain? What\'s working? What\'s still a gap? What would meet the real need more fully?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Closing Compassion',
        content:
          "You've done a hard thing in this worksheet. Close with the thing that's hardest and most important.",
        fields: [
          {
            id: 'closing-compassion',
            type: 'textarea',
            label: 'What would I say to the version of myself who first turned to substances?',
            placeholder:
              "What do you know now that they didn\'t know then? What were they trying to survive? What would you want them to hear?",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'identity-reclamation',
    slug: 'identity-reclamation',
    title: 'Identity Reclamation',
    subtitle: 'You are more than your relationship with substances',
    description:
      "Addiction has a way of becoming the whole identity. This worksheet is about taking it back — remembering who you were before, finding what survived, and building toward who you actually are.",
    category: 'self-reflection',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['ACT', 'narrative', 'PP'],
    tags: ['identity', 'ACT', 'narrative', 'self-concept', 'recovery', 'reclamation'],
    icon: '🌱',
    color: '#84CC16',
    version: 1,
    relatedWorksheets: ['values-compass', 'before-after-inventory', 'parts-of-me'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Who Are You, Full Stop?',
        content:
          "Here's the problem with making addiction the center of your identity: it makes recovery about subtraction. \"I'm an addict who doesn't use.\" That's a life defined by absence.\n\nACT (Acceptance and Commitment Therapy) and narrative therapy both point toward the same insight: you are not your diagnosis, your history, or your struggle. You are a whole person — with preferences, passions, capacities, ways of being — and those things were always there, even when the addiction tried to crowd them out.\n\nThis worksheet is an act of reclamation. Not denial — reclamation. You're not pretending the addiction wasn't real. You're insisting that it isn't the whole story.",
      },
      {
        type: 'reflection',
        title: 'Before Addiction',
        content:
          "Think back to before — or to any version of yourself that felt more like you. What was there?",
        fields: [
          {
            id: 'before-addiction',
            type: 'textarea',
            label: 'What did I love before? What lit me up? How did I move through the world?',
            placeholder:
              "Interests, passions, ways of being. Things you were curious about, good at, drawn toward. Things that felt like you. Even childhood ones.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What Survived',
        content:
          "Addiction takes a lot. But it doesn't take everything. What parts of you are still there — unchanged, protected, still alive?",
        fields: [
          {
            id: 'what-survived',
            type: 'textarea',
            label: 'What parts of me did addiction never touch? What\'s still there?',
            placeholder:
              "Your humor. Your love for your kids. Your eye for beauty. Your stubbornness. Your curiosity. Your capacity for loyalty. What did it leave intact?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Curious Now',
        content:
          "Recovery opens space. What would you explore if shame wasn't a factor? What are you curious about — even tentatively, even just a flicker?",
        fields: [
          {
            id: 'curious-now',
            type: 'textarea',
            label: 'What am I curious about now that I\'m in recovery? What would I try if shame wasn\'t a factor?',
            placeholder:
              "A hobby, a skill, a place, a kind of work, a way of being. What pulls at you even a little? What comes up when you allow yourself to imagine a full life?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Identity Words',
        content:
          "Reclaim your vocabulary. Fill in who you are — with nothing related to substances or recovery.",
        fields: [
          {
            id: 'identity-words',
            type: 'textarea',
            label: 'Words I use to describe myself that have nothing to do with addiction:',
            placeholder:
              "Father. Artist. Fighter. Loyal. Funny. Stubborn in a good way. Good with my hands. Someone who notices beauty. A person who always shows up for the people I love. List them. All of them.",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Step Toward the Real Me',
        content:
          "Identity isn't just what you think — it's what you do. What's one concrete, real-world step you'll take this week that expresses who you actually are?",
        fields: [
          {
            id: 'identity-step',
            type: 'text',
            label: 'One thing I\'ll do this week that expresses who I actually am:',
            placeholder:
              "Sign up for the class. Call the old friend. Make the thing. Show up for the thing you care about. Go to the place. Be the person.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'radical-honesty-inventory',
    slug: 'radical-honesty-inventory',
    title: 'Radical Honesty Inventory',
    subtitle: 'The truth that makes you free — if you can face it',
    description:
      "This is the hard one. Not self-attack — self-honesty. Where are you lying to yourself? Performing recovery instead of living it? Avoiding what you know you need to face? This worksheet won't let you off the hook. But it does it with care.",
    category: 'self-reflection',
    difficulty: 'advanced',
    estimatedMinutes: 30,
    frequency: 'weekly',
    therapeuticFramework: ['MI', 'ACT', 'CBT'],
    tags: ['honesty', 'self-deception', 'advanced', 'MI', 'ACT', 'avoidance', 'weekly'],
    icon: '🔦',
    color: '#0EA5E9',
    version: 1,
    relatedWorksheets: ['accountability-mirror', 'shame-guilt-separator', 'addiction-autopsy'],
    sections: [
      {
        type: 'instruction',
        title: 'A Note Before You Begin',
        content:
          "This is a courageous worksheet. It asks you to be radically honest — with yourself, about yourself. That means naming the things that are convenient to not look at directly.\n\nA few ground rules:\n\n**This is not a shame exercise.** You're not here to prove you're bad. You're here to see clearly.\n\n**Honesty and self-compassion go together.** The goal is to be as honest as a good friend — one who tells you the truth because they're on your side.\n\n**You don't have to fix everything today.** Just see it. That's enough for now.\n\nIf this brings up something heavy, please talk to someone you trust after you finish.",
      },
      {
        type: 'freewrite',
        title: 'Self-Deception Check',
        content:
          "Everyone in recovery has some degree of self-deception — it's how we manage hard truths until we're ready. The question is whether it's serving your recovery or working against it.",
        fields: [
          {
            id: 'self-deception',
            type: 'textarea',
            label: 'Where am I lying to myself right now? (Even the small stuff.)',
            placeholder:
              "\"My drinking is under control.\" \"I don\'t really need to go to meetings.\" \"That relationship isn\'t affecting my recovery.\" \"I\'ve got more time.\" \"It wasn\'t that bad.\" What are the stories you tell yourself that you suspect aren\'t quite true?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Performance vs. Reality',
        content:
          "Performing recovery and living it are different things. Performing looks right from the outside. Living it feels different on the inside.",
        fields: [
          {
            id: 'performance-vs-reality',
            type: 'textarea',
            label: 'Where am I performing recovery instead of actually living it? What\'s the difference?',
            placeholder:
              "Saying the right things in meetings without really meaning them. Going through the motions. Looking good on the outside while privately struggling. Where is there a gap between your public recovery and your private one?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Avoidance Audit',
        content:
          "What are you not looking at? Avoidance is almost always about fear — and naming the thing you're avoiding is often the most important step.",
        fields: [
          {
            id: 'avoidance',
            type: 'textarea',
            label: 'What am I most avoiding facing right now?',
            placeholder:
              "A relationship. A past action. A part of my story. A conversation I need to have. A decision I keep postponing. A feeling I\'m numbing. What is it?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What It\'s Costing',
        content:
          "Avoidance always has a price. Sometimes it's obvious. Sometimes it's subtle — a low-grade anxiety, a distance in relationships, a ceiling you keep hitting.",
        fields: [
          {
            id: 'avoidance-cost',
            type: 'textarea',
            label: 'What is this avoidance or self-deception costing me?',
            placeholder:
              "In my recovery. In my relationships. In my sense of self. In the kind of life I\'m building. What\'s the real cost of not looking at this?",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Honest Step',
        content:
          "You've looked at the hard stuff. Now close with something actionable — one thing you're willing to be more honest about, and what you need to do it.",
        fields: [
          {
            id: 'honest-step',
            type: 'text',
            label: 'One thing I\'m willing to be more honest about this week:',
            placeholder:
              "With myself, with my sponsor, in my group, with a family member. Just one thing. Make it real.",
            required: true,
          },
          {
            id: 'honest-support',
            type: 'textarea',
            label: 'What support do I need to do that?',
            placeholder:
              "Someone to tell it to. A session with my therapist. A conversation I need to have first. What would make this step possible?",
          },
        ],
      },
    ],
  },
]
