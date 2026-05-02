import type { Worksheet } from '../types'

export const cognitiveRestructuringWorksheets: Worksheet[] = [
  {
    id: 'thought-record',
    slug: 'thought-record',
    title: 'Thought Record',
    subtitle: 'The gold standard CBT tool — from automatic thought to balanced perspective',
    description:
      "The core cognitive restructuring tool from CBT: map the situation, catch the automatic thought, name the emotion, weigh the evidence, and arrive at a more balanced perspective. Used for any thought driving distress.",
    category: 'cognitive-restructuring',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT'],
    tags: ['thought-record', 'CBT', 'evidence', 'emotions', 'balance', 'restructuring', 'core-skill'],
    icon: '📝',
    color: '#0EA5E9',
    featured: true,
    version: 1,
    relatedWorksheets: ['cognitive-distortion-spotter', 'inner-critic-dialogue', 'probability-vs-possibility'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'How the Thought Record Works',
        content:
          "The thought record is the foundational tool of Cognitive Behavioral Therapy — and it works. Decades of research show it reliably reduces emotional distress when used consistently.\n\nHere's the model: Situations don't cause emotions directly. Thoughts — specifically automatic interpretations we make about situations — create emotions. And emotions drive behavior. If you can change the thought, you change the emotion, and the behavior follows.\n\nAutomatic thoughts are not lies and they are not truths — they are interpretations. They happen fast, below conscious awareness, and they feel like facts. The thought record slows everything down and asks: is this actually true? What is the evidence? Is there another way to see this?\n\nIn recovery, this matters because automatic thoughts are often the invisible link between a triggering situation and picking up. 'Nobody actually cares about me' → 'What's the point' → craving → using. The thought record gives you a place to intervene.",
      },
      {
        type: 'prompt',
        title: 'The Situation',
        content:
          "Describe what actually happened — just the observable facts. Not your interpretation of it. Not how it made you feel. What literally occurred?",
        fields: [
          {
            id: 'situation-description',
            type: 'textarea',
            label: 'What happened? (just facts, no interpretation)',
            placeholder:
              "e.g., 'My supervisor gave me critical feedback in the meeting.' Not 'My supervisor humiliated me in front of everyone' — that's interpretation. Stick to what an objective camera would have recorded.",
            required: true,
          },
          {
            id: 'situation-when-where',
            type: 'text',
            label: 'When and where',
            placeholder: "e.g., 'Tuesday afternoon, work meeting'",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Automatic Thought',
        content:
          "What popped into your mind immediately — the interpretation your brain generated without you asking it to? Be specific. Not the sophisticated story you build later, but the first, raw thought.",
        fields: [
          {
            id: 'automatic-thought',
            type: 'textarea',
            label: 'What immediately went through your mind?',
            placeholder:
              "e.g., 'She hates me.' 'I'm going to get fired.' 'I can't do anything right.' 'Nobody ever gives me credit.' Write the actual thought — not a sanitized version.",
            required: true,
          },
          {
            id: 'thought-belief-level',
            type: 'slider',
            label: 'How much do you believe this thought right now? (0 = not at all, 100 = completely)',
            min: 0,
            max: 100,
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'The Emotion',
        content:
          "Name the emotion the thought created. Be specific — 'bad' is not an emotion. What is the actual feeling?",
        fields: [
          {
            id: 'primary-emotion',
            type: 'select',
            label: 'Primary emotion',
            options: ['Anxious', 'Depressed', 'Angry', 'Ashamed', 'Guilty', 'Sad', 'Other'],
            required: true,
          },
          {
            id: 'emotion-intensity',
            type: 'slider',
            label: 'Intensity of that emotion (1 = mild, 10 = overwhelming)',
            min: 1,
            max: 10,
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Evidence For',
        content:
          "What actually supports this thought being true? Real evidence — facts, specific past events, observable data. Not other interpretations or feelings.",
        fields: [
          {
            id: 'evidence-for',
            type: 'textarea',
            label: "Evidence that supports this thought",
            placeholder:
              "Be honest. If there is real evidence, name it. e.g., 'She has given me negative feedback before.' 'I did make an error last week.' Vague 'it just feels true' does not count as evidence.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Evidence Against',
        content:
          "Now — what contradicts this thought? What doesn't fit the automatic interpretation? This is the harder work and the more important half.",
        fields: [
          {
            id: 'evidence-against',
            type: 'textarea',
            label: "Evidence that contradicts this thought",
            placeholder:
              "What is the full picture? What would a reasonable, non-anxious observer say? Are there past experiences that don't fit this interpretation? Are there other explanations for what happened? Has this catastrophic prediction come true before when you thought it would?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Balanced Thought',
        content:
          "A balanced thought is not a positive affirmation — it's an accurate statement that takes ALL the evidence into account. It acknowledges what's hard and doesn't catastrophize.",
        fields: [
          {
            id: 'balanced-thought',
            type: 'textarea',
            label: 'A more balanced perspective that takes all evidence into account',
            placeholder:
              "e.g., 'My supervisor gave me critical feedback, which is uncomfortable. She has also complimented my work before. I don't have evidence she hates me — she may just be trying to help me improve. I can ask a clarifying question.' Not toxic positivity — just accuracy.",
            required: true,
          },
          {
            id: 'balanced-thought-belief',
            type: 'slider',
            label: 'How much do you believe the balanced thought? (0–100)',
            min: 0,
            max: 100,
          },
        ],
      },
      {
        type: 'scale',
        title: 'Outcome',
        content:
          "After working through this record, check in. The goal is not to feel nothing — it's to feel less flooded and to have a clearer sense of what to do.",
        fields: [
          {
            id: 'emotional-intensity-after',
            type: 'slider',
            label: 'Emotional intensity NOW (after the thought record)',
            min: 1,
            max: 10,
          },
          {
            id: 'what-to-do-now',
            type: 'textarea',
            label: 'What I can do now',
            placeholder:
              "With this clearer perspective, what is the appropriate action? Is there something to address, or to let go? What does a grounded version of you do next?",
          },
        ],
      },
    ],
  },

  {
    id: 'cognitive-distortion-spotter',
    slug: 'cognitive-distortion-spotter',
    title: 'Cognitive Distortion Spotter',
    subtitle: 'Name the pattern — and reduce its power over you',
    description:
      "Learn to recognize the 10 most common cognitive distortions in recovery contexts, identify which ones you use most, and build a personalized challenge for your most persistent pattern.",
    category: 'cognitive-restructuring',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT'],
    tags: ['distortions', 'CBT', 'thinking-patterns', 'awareness', 'challenge', 'self-awareness'],
    icon: '🔍',
    color: '#0EA5E9',
    version: 1,
    relatedWorksheets: ['thought-record', 'challenging-i-cant', 'cognitive-flexibility'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The 10 Most Common Distortions — in Recovery Language',
        content:
          "Cognitive distortions are habitual patterns of inaccurate thinking that reliably produce unnecessary distress. Aaron Beck and David Burns mapped these patterns in CBT research — here they are with recovery-specific examples:\n\n**1. All-or-nothing thinking:** 'I missed one meeting — my whole recovery is falling apart.' Sees in black and white with no middle ground.\n\n**2. Catastrophizing:** 'If I slip, I'll lose everything.' Inflates the probability or severity of the worst outcome.\n\n**3. Mind reading:** 'Everyone at the meeting can tell I'm struggling.' Assumes you know what others think without evidence.\n\n**4. Fortune telling:** 'I know I'll relapse eventually — I always do.' Predicts negative outcomes as certainties.\n\n**5. Emotional reasoning:** 'I feel like a failure, so I must be one.' Treats feelings as facts about reality.\n\n**6. Should statements:** 'I should have my life together by now.' Rigid rules about how you or the world should be that generate shame and resentment.\n\n**7. Personalization:** 'My sponsor seemed distracted during our call — it must be because I'm too much.' Takes too much responsibility for others' states and actions.\n\n**8. Mental filtering:** 'I shared something meaningful in group but stumbled on one sentence — the whole thing was terrible.' Magnifies negatives, filters out positives.\n\n**9. Overgeneralization:** 'This always happens to me.' A single event becomes a universal pattern.\n\n**10. Labeling:** 'I'm a failure' instead of 'I failed at this task.' Applying a global label to yourself based on specific events.",
      },
      {
        type: 'reflection',
        title: 'Distortion Hunt',
        content:
          "Think of a recent thought that caused you distress — something about yourself, your recovery, or another person. Run it through the distortion list.",
        fields: [
          {
            id: 'distortion-thought',
            type: 'textarea',
            label: 'A thought I have had today or this week',
            placeholder:
              "Write the actual thought — not a clean, edited version. What were you thinking when you were most distressed?",
            required: true,
          },
          {
            id: 'distortions-present',
            type: 'multi-select',
            label: 'Distortions present in this thought',
            options: [
              'All-or-nothing thinking',
              'Catastrophizing',
              'Mind reading',
              'Fortune telling',
              'Emotional reasoning',
              'Should statements',
              'Personalization',
              'Mental filtering',
              'Overgeneralization',
              'Labeling',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Your Signature Distortion',
        content:
          "Most people have a signature pattern — the distortion they reach for most reliably when things are hard. Naming it is powerful because you can learn to recognize it faster.",
        fields: [
          {
            id: 'signature-distortion',
            type: 'textarea',
            label: 'The distortion I use most in recovery — with a real example',
            placeholder:
              "Which one shows up most often for you? When does it show up? What does it sound like in your specific mind and life? e.g., 'I mostly fortune-tell. When things are going well, I find myself thinking it's only a matter of time before I relapse — I keep predicting doom even when there's no evidence for it.'",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Challenge It',
        content:
          "Take your most common distortion and argue against it specifically. Not generically — use real evidence from your actual life.",
        fields: [
          {
            id: 'distortion-challenge',
            type: 'textarea',
            label: 'Take your most common distortion and argue against it',
            placeholder:
              "What is the evidence that this distortion is distorting? What facts from your real life contradict it? What would a reasonable person say in response? Be specific — 'that's not true' is not a challenge. 'The last three times I predicted I'd relapse I didn't, and right now I have 47 days — that's evidence' is a challenge.",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Replacement Thought',
        content:
          "What would a more accurate thought sound like? Not a positive affirmation — a realistic, evidence-based alternative.",
        fields: [
          {
            id: 'replacement-thought',
            type: 'text',
            label: 'A more accurate thought to use instead',
            placeholder:
              "Write it in first person, specific to your life. This is the thought you will practice reaching for when the distortion shows up.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'inner-critic-dialogue',
    slug: 'inner-critic-dialogue',
    title: 'The Inner Critic Dialogue',
    subtitle: 'Externalize the voice — and reduce its power',
    description:
      "Identify your inner critic, understand where it learned its lines, write a dialogue between the critic and your compassionate self, and find a phrase that defuses it. Externalizing the critic is one of the most effective ways to reduce its grip.",
    category: 'cognitive-restructuring',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'IFS'],
    tags: ['inner-critic', 'self-compassion', 'IFS', 'shame', 'CBT', 'dialogue', 'defusion'],
    icon: '🗣️',
    color: '#0EA5E9',
    version: 1,
    relatedWorksheets: ['thought-record', 'cognitive-distortion-spotter', 'challenging-i-cant'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Inner Critic — Where It Came From and What to Do With It',
        content:
          "The inner critic is not a character flaw. It is a learned voice — absorbed from parents, teachers, culture, early experiences — that took up residence in your own internal narrative. In Internal Family Systems (IFS) language, it is a 'protector part' that learned at some point that harsh self-criticism was a way to stay safe, motivate behavior, or ward off worse judgment from others.\n\nThe problem is that the inner critic is not very sophisticated. It uses blunt instruments — shame, contempt, catastrophe — regardless of whether the situation calls for them. And in addiction recovery, the shame it generates is genuinely dangerous: shame is one of the most reliable predictors of relapse.\n\nExternalizing the critic — giving it a name, writing it as a separate voice, noticing where it learned its lines — is one of the most effective ways to reduce its power. You cannot argue with a voice you're fused with. You can argue with a character you've separated from yourself and can observe.",
      },
      {
        type: 'prompt',
        title: 'Name It',
        content:
          "Giving the critic a name creates useful distance. It becomes a character rather than the truth.",
        fields: [
          {
            id: 'critic-name',
            type: 'text',
            label: 'What I call my inner critic',
            placeholder:
              "e.g., 'The Judge,' 'The Shame Voice,' 'The Drill Sergeant,' 'The Perfectionist,' 'The Doomsayer' — something that captures its tone and flavor.",
            required: true,
          },
          {
            id: 'critic-typical-lines',
            type: 'textarea',
            label: 'What it typically says to me',
            placeholder:
              "Write the actual lines — the things it says most reliably when you are struggling, when you make a mistake, when things are going well and then you start waiting for the other shoe to drop. Be specific and honest.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Where It Learned Its Lines',
        content:
          "The inner critic is not original — it learned its material from somewhere. Often, these are voices from childhood or formative relationships that became internalized.",
        fields: [
          {
            id: 'critic-origin',
            type: 'textarea',
            label: "Where did this critic learn these lines? Whose voice does it sound like?",
            placeholder:
              "This is not about blame. It's about recognizing that the voice is borrowed — it came from somewhere outside you before it moved inside. Does it sound like a parent? A teacher? A culture? Addiction itself? What context taught you to speak this way to yourself?",
          },
        ],
      },
      {
        type: 'letter',
        title: 'The Dialogue',
        content:
          "Write a conversation between your inner critic and your compassionate self. Let the critic speak first — fully, in its own voice. Then let your compassionate self respond: with honesty, not dismissal, but without capitulating to the shame.",
        fields: [
          {
            id: 'critic-dialogue',
            type: 'textarea',
            label: 'The conversation between the critic and your compassionate self',
            placeholder:
              "Start with the critic. Let it say what it says. Then respond — not to argue that everything is fine, but to offer a truer perspective. e.g.,\n\nCritic: 'You've been in and out of recovery for three years. You're never going to actually change.'\n\nCompassionate self: 'Three years of fighting this is not evidence of failure — it's evidence of effort. The fact that I'm here doing this work right now is proof of something the critic refuses to count.'",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: "What the Critic Actually Wants",
        content:
          "This is perhaps the most important question in IFS work on the inner critic: what is it trying to protect you from? Beneath the cruelty, there is usually a frightened intent.",
        fields: [
          {
            id: 'critic-protective-intent',
            type: 'textarea',
            label: 'Your inner critic believes it is protecting you from something. What is it?',
            placeholder:
              "e.g., 'I think it's trying to protect me from being hurt by someone else's rejection by rejecting myself first.' 'It believes that if it keeps me small, I won't fail publicly.' 'It's terrified that if I believe in myself and relapse, the fall will be worse.' What is the frightened logic underneath the cruelty?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Defusing Phrase',
        content:
          "A defusing phrase acknowledges the critic's presence without letting it drive. The goal is not to silence it — it's to hear it without obeying it.",
        fields: [
          {
            id: 'defusing-phrase',
            type: 'text',
            label: "A phrase I can use to acknowledge the critic without letting it drive",
            placeholder:
              "e.g., 'Thanks for your input — I've got this.' 'I hear you. I'm choosing differently.' 'There's the critic again. I see it.' Something that's genuinely yours — a phrase you'd actually use.",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'challenging-i-cant',
    slug: 'challenging-i-cant',
    title: "Challenging 'I Can't' Beliefs",
    subtitle: "Predictions feel like facts — they aren't",
    description:
      "Challenge the 'I can't stay sober,' 'I can't handle this,' 'I'll never change' beliefs directly. These are predictions, not facts — and predictions can be tested with evidence.",
    category: 'cognitive-restructuring',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT'],
    tags: ['beliefs', 'self-efficacy', 'challenge', 'evidence', 'reframe', 'hope', 'CBT'],
    icon: '🔓',
    color: '#0EA5E9',
    version: 1,
    relatedWorksheets: ['cognitive-distortion-spotter', 'thought-record', 'inner-critic-dialogue'],
    sections: [
      {
        type: 'psychoeducation',
        title: "The Difference Between Facts and Predictions",
        content:
          "'I can't stay sober.' 'I can't handle this without using.' 'I'll never be able to change.' These thoughts feel absolutely true. They arrive with the weight of certainty — the voice of lived experience, self-knowledge, hard evidence.\n\nBut they are not facts. They are predictions.\n\nA fact is: 'I relapsed last month.' A prediction is: 'I will always relapse.' A fact is: 'I am struggling with this craving right now.' A prediction is: 'I can't handle this.' These are different categories — and predictions, unlike facts, can be tested, challenged, and revised.\n\nThe research on self-efficacy — the belief in your ability to succeed — shows consistently that it is one of the most powerful predictors of recovery outcomes. 'I can't' beliefs directly undermine self-efficacy. Challenging them is not just positive thinking — it is evidence-based cognitive work.",
      },
      {
        type: 'reflection',
        title: 'The Belief',
        content:
          "Name the specific 'I can't' thought you are working with right now.",
        fields: [
          {
            id: 'i-cant-belief',
            type: 'textarea',
            label: "The 'I can't' belief I'm carrying right now",
            placeholder:
              "Write it exactly as you think it. e.g., 'I can't stay sober for more than 60 days.' 'I can't handle anxiety without numbing it.' 'I can't change the way I relate to people.' 'I can't ever be the parent I want to be.' Don't soften it — write what the voice actually says.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Evidence Check',
        content:
          "Challenge the belief with evidence — real, specific evidence from your actual life. Not motivation, not affirmations. Facts.",
        fields: [
          {
            id: 'i-cant-contradicting-evidence',
            type: 'textarea',
            label: "Evidence that contradicts this belief from your own life",
            placeholder:
              "What have you actually done that this belief says you can't? Times you stayed sober longer than you expected. Hard emotions you sat with without using. Moments you showed up for someone when everything in you wanted to disappear. Situations you handled better than your inner critic predicted. These are real. Write them down.",
            required: true,
          },
          {
            id: 'difficult-things-handled',
            type: 'textarea',
            label: 'Difficult things you have handled in recovery or before',
            placeholder:
              "This is the deeper evidence: what hard things have you survived? Getting sober at all. Asking for help. Showing up to therapy. Losing something important and not using over it. What is on the list of hard things you have actually done?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Reframe',
        content:
          "Rewrite the 'I can't' not as a false affirmation but as an honest statement that holds both the difficulty and the possibility.",
        fields: [
          {
            id: 'i-cant-reframe',
            type: 'textarea',
            label: "Rewrite the 'I can't' as: 'This is hard AND I can try because:'",
            placeholder:
              "e.g., 'Staying sober long-term is hard, and I can try because I've already had 47 days, I have a sponsor who hasn't given up on me, and I know more about my triggers now than I ever have.' Hold both the difficulty and the capacity.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'A Friend Test',
        content:
          "This is a useful reality check: the self-compassion question.",
        fields: [
          {
            id: 'friend-test',
            type: 'textarea',
            label: "What would you say to a close friend who believed this about themselves?",
            placeholder:
              "If a friend you loved came to you and said 'I can't change — I'll always be this way,' what would you say? Write that response. Notice the difference between what you'd tell a friend and what you tell yourself.",
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Your New Statement',
        content:
          "Two things to write down and actually use — not just to have done the exercise.",
        fields: [
          {
            id: 'new-reframe-statement',
            type: 'text',
            label: 'My reframe:',
            placeholder:
              "The honest, evidence-based version of the belief. Write it in your own voice.",
            required: true,
          },
          {
            id: 'reframe-usage-plan',
            type: 'text',
            label: "I'll say this to myself when the 'I can't' thought shows up:",
            placeholder:
              "Not a vague intention — a specific cue. e.g., 'Every time I catch myself thinking I can't, I'll say: this is hard AND I have done hard things before.'",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'cost-benefit-core-beliefs',
    slug: 'cost-benefit-core-beliefs',
    title: 'Cost-Benefit of Core Beliefs',
    subtitle: 'Every destructive belief has a payoff — finding it is where change begins',
    description:
      "Examine a deep core belief about yourself — 'I'm unlovable,' 'I'm broken,' 'I don't deserve good things' — explore its origins, weigh its costs and payoffs, and begin building a more accurate alternative.",
    category: 'cognitive-restructuring',
    difficulty: 'advanced',
    estimatedMinutes: 25,
    frequency: 'one-time',
    therapeuticFramework: ['CBT', 'ACT'],
    tags: ['core-beliefs', 'schema', 'CBT', 'ACT', 'deep-work', 'origins', 'change'],
    icon: '🏗️',
    color: '#0EA5E9',
    version: 1,
    relatedWorksheets: ['inner-critic-dialogue', 'thought-record', 'cognitive-flexibility'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Are Core Beliefs?',
        content:
          "Core beliefs are the deep, often unconscious convictions you hold about yourself, others, or the world. Unlike automatic thoughts — which are specific to situations — core beliefs are global and absolute. 'I am fundamentally broken.' 'I am unlovable.' 'I don't deserve good things.' 'The world is dangerous and no one can be trusted.'\n\nThese beliefs typically form early in life, often in response to painful or invalidating experiences. They are reinforced over time, including through the experiences of addiction. They are often the invisible engine underneath patterns of behavior that seem irrational from the outside.\n\nHere's what makes them uniquely difficult to change: they are self-confirming. A person who believes they are unlovable will interpret ambiguous social information as rejection, will behave in ways that push people away, and will discount evidence of being cared for. The belief creates the conditions that seem to confirm it.\n\nThe cost-benefit analysis is one of the most effective ways to begin loosening a core belief — because it addresses the question that CBT alone often misses: what purpose does this belief serve? Every destructive belief has a payoff, even if the payoff is painful. Finding it is where real change starts.",
      },
      {
        type: 'prompt',
        title: 'The Belief',
        content:
          "Name the core belief. Say it plainly — not as a thought you're observing but as a statement of how this part of you actually understands the world.",
        fields: [
          {
            id: 'core-belief',
            type: 'textarea',
            label: 'A core belief about yourself that affects your recovery',
            placeholder:
              "e.g., 'I am fundamentally broken.' 'I am unlovable.' 'I don't deserve to be well.' 'I am a burden to everyone around me.' 'I am not capable of lasting change.' Write the belief in the words your internal voice actually uses.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Origins',
        content:
          "Core beliefs are not born with us — they are learned. Understanding where a belief came from reduces its authority. It shifts from 'eternal truth' to 'something I concluded under difficult circumstances.'",
        fields: [
          {
            id: 'belief-origins',
            type: 'textarea',
            label: 'Where did this belief come from? How old were you when you first believed it?',
            placeholder:
              "What happened — or what kept happening — that taught you this was true? It may have been one event, or a pattern over many years, or a message absorbed from family or culture. How old were you when this conclusion formed? What were the circumstances?",
          },
        ],
      },
      {
        type: 'matrix',
        title: 'The Cost-Benefit Analysis',
        content:
          "Destructive beliefs persist because they offer something. Finding the payoff is essential — you cannot give up a belief (or behavior) until you understand what you would be giving up along with it.",
        fields: [
          {
            id: 'belief-benefits',
            type: 'textarea',
            label: 'Benefits of holding this belief (even painful beliefs serve a function)',
            placeholder:
              "e.g., 'If I believe I'm unlovable, I don't have to risk being hurt by trying to connect.' 'If I believe I can't change, I don't have to face the fear of trying and failing.' 'If I believe I'm broken, I have an explanation for everything that has gone wrong.' What does this belief protect you from? What does it give you permission to do or not do?",
            required: true,
          },
          {
            id: 'belief-costs',
            type: 'textarea',
            label: 'Costs of holding this belief',
            placeholder:
              "What does this belief cost you in recovery, in relationships, in how you move through the world? What have you not tried, not reached for, not allowed yourself to receive because of this belief? How has it limited your life?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Evidence Test',
        content:
          "Now run the belief through an evidence test — honestly, in both directions.",
        fields: [
          {
            id: 'belief-evidence-for',
            type: 'textarea',
            label: 'Evidence FOR this belief (hard and honest look)',
            placeholder:
              "What experiences seem to confirm it? What patterns in your life appear to support it? Be real — dismissing the evidence entirely won't work.",
          },
          {
            id: 'belief-evidence-against',
            type: 'textarea',
            label: 'Evidence AGAINST this belief',
            placeholder:
              "This is the harder work. What in your experience contradicts this belief? Times you were genuinely cared for. Moments of real connection. Evidence of capacity and change. Things you accomplished. People who stayed. This evidence exists — even if the belief makes it hard to see.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'A New Belief',
        content:
          "You are not replacing the old belief with a positive affirmation. You are replacing it with something more accurate — something that acknowledges the pain that formed the belief while refusing to let that pain define the whole truth.",
        fields: [
          {
            id: 'new-belief-statement',
            type: 'textarea',
            label: 'A more accurate belief that acknowledges the pain but is not trapped in it',
            placeholder:
              "e.g., 'I grew up in circumstances that made me feel unlovable, and that pain is real. AND the evidence of my life shows people who have stayed, cared, and shown up for me. I can be a person who is hard to love sometimes AND worth loving. Both are true.' This is harder than an affirmation — it holds complexity.",
            required: true,
          },
          {
            id: 'new-belief-readiness',
            type: 'slider',
            label: 'Readiness to try on this new belief (1 = not at all ready, 10 = fully ready)',
            min: 1,
            max: 10,
          },
        ],
      },
    ],
  },

  {
    id: 'worry-postponement',
    slug: 'worry-postponement',
    title: 'The Worry Postponement Experiment',
    subtitle: 'Prove to your brain that you — not the worry — are in charge',
    description:
      "Set a designated daily worry window, practice postponing worry that arises outside it, and discover how many worries dissolve on their own when they don't get immediate attention.",
    category: 'cognitive-restructuring',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'daily',
    therapeuticFramework: ['CBT'],
    tags: ['worry', 'anxiety', 'postponement', 'CBT', 'experiment', 'control', 'rumination'],
    icon: '⏰',
    color: '#0EA5E9',
    version: 1,
    relatedWorksheets: ['thought-record', 'probability-vs-possibility', 'cognitive-distortion-spotter'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Worry Postponement Works',
        content:
          "Worry is seductive because it feels like preparation — like if you think about the bad thing enough, you will be ready for it, or even prevent it. What research consistently shows is that most worry does neither. It does not prepare you. It does not prevent outcomes. It primarily keeps the nervous system activated and depletes the cognitive resources you need for actual problem-solving.\n\nWorry postponement is a CBT technique with strong research support. The setup: designate a specific 15–20 minute window each day as your 'designated worry time.' When worry arises outside that window, write it down and tell yourself you will give it full attention during your window. Then postpone.\n\nTwo things happen: First, you prove to your brain that you control when worry gets processed — not the reverse. This reduces the sense of urgency that keeps worry running continuously. Second, you discover that a significant portion of worries, when not engaged with immediately, dissolve on their own before the window arrives. This is extremely useful data.\n\nIn recovery, anxiety and rumination are high-risk states. Anything that reduces their grip reduces risk.",
      },
      {
        type: 'prompt',
        title: 'Setup',
        content:
          "Choose your worry window now. Be specific — same time every day, 15 minutes, scheduled like any other appointment.",
        fields: [
          {
            id: 'worry-window-time',
            type: 'text',
            label: 'My designated worry time (15 minutes, same time each day)',
            placeholder:
              "e.g., '5:00–5:15pm,' 'After dinner, 7:00–7:15pm.' Not right before bed — ideally not in the last 2 hours before sleep.",
            required: true,
          },
          {
            id: 'worry-postponement-script',
            type: 'textarea',
            label: "When worry arises outside the window, I write it here and postpone it",
            placeholder:
              "This is your staging area. Any worry that comes up outside your window gets written here with a simple note: 'I'll give this full attention at 5pm.' Not dismissing it — postponing it. The act of writing it creates the permission to let it go temporarily.",
          },
        ],
      },
      {
        type: 'prompt',
        title: "Today's Worry List",
        content:
          "Five fields to capture the worries you are postponing today. Write them quickly — just enough to externalize them — then put them down until your worry window.",
        fields: [
          {
            id: 'worry-1',
            type: 'text',
            label: 'Worry 1',
            placeholder: "Write it briefly and postpone it",
          },
          {
            id: 'worry-2',
            type: 'text',
            label: 'Worry 2',
            placeholder: "Write it briefly and postpone it",
          },
          {
            id: 'worry-3',
            type: 'text',
            label: 'Worry 3',
            placeholder: "Write it briefly and postpone it",
          },
          {
            id: 'worry-4',
            type: 'text',
            label: 'Worry 4',
            placeholder: "Write it briefly and postpone it",
          },
          {
            id: 'worry-5',
            type: 'text',
            label: 'Worry 5',
            placeholder: "Write it briefly and postpone it",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'During Your Worry Window',
        content:
          "After your designated worry window: come back and reflect on what happened to the worries you listed.",
        optional: true,
        fields: [
          {
            id: 'worries-dissolved',
            type: 'textarea',
            label: 'After sitting with these worries during the window: which dissolved on their own?',
            placeholder:
              "Look at the list above. Which ones no longer feel urgent or important now that time has passed? Which did not need the worry you were about to give them?",
          },
          {
            id: 'worries-needing-attention',
            type: 'textarea',
            label: 'Which still need real attention?',
            placeholder:
              "Of the remaining worries — the ones that survived your postponement window — which are genuine problems that need actual action? What is the action? Note: a worry that needs a plan is no longer just a worry — it's a problem to solve.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What This Proves',
        content:
          "After a week of this experiment, this question becomes worth asking.",
        optional: true,
        fields: [
          {
            id: 'postponement-learning',
            type: 'textarea',
            label: 'What does the worry postponement experiment tell me about how much I can trust my anxious predictions?',
            placeholder:
              "If most of your worries dissolved before the window — or dissolved during it — what does that tell you about the accuracy of the urgency your anxious mind communicates? How much of what felt like emergency actually was?",
          },
        ],
      },
    ],
  },

  {
    id: 'probability-vs-possibility',
    slug: 'probability-vs-possibility',
    title: 'Probability vs. Possibility',
    subtitle: "Anxiety deals in possibility — reality deals in probability",
    description:
      "Challenge catastrophic thinking by separating what could happen from what is likely to happen, then prepare briefly for the worst and stop rehearsing it.",
    category: 'cognitive-restructuring',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT'],
    tags: ['catastrophizing', 'anxiety', 'probability', 'CBT', 'worst-case', 'realistic-thinking'],
    icon: '📊',
    color: '#0EA5E9',
    version: 1,
    relatedWorksheets: ['thought-record', 'worry-postponement', 'cognitive-flexibility'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Probability-Possibility Confusion',
        content:
          "The anxious mind lives in the realm of possibility. 'This could go wrong.' 'I could relapse.' 'They could leave.' 'I could fail.' And possibility is technically true — almost anything is possible. But 'possible' and 'probable' are very different statements about reality, and anxiety treats them as the same.\n\nCognitive behavioral research shows that anxious people systematically overestimate the probability of negative outcomes AND overestimate how catastrophic those outcomes would actually be. These are two separate distortions, and both can be directly challenged.\n\nThe technique here is simple but requires honest application: estimate the real probability. Not the felt probability — the actual, evidence-based probability. Then work out what the best and most likely realistic outcomes are. And finally, if the bad thing DID happen, answer the question: what would you do? Because you can cope with more than anxiety tells you.\n\nThen stop rehearsing it. Preparation is useful. Rumination is not.",
      },
      {
        type: 'prompt',
        title: 'The Catastrophic Thought',
        content:
          "Name the worst-case scenario your mind is spinning on. Be specific — vague catastrophes are harder to challenge.",
        fields: [
          {
            id: 'catastrophic-thought',
            type: 'textarea',
            label: 'The worst-case scenario my mind is focused on',
            placeholder:
              "Write it in full. What is the specific bad outcome your mind keeps returning to? Be honest about the fear — vague answers produce vague challenges.",
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'Reality Check',
        content:
          "Rate the actual probability — not how it feels, but what the evidence suggests.",
        fields: [
          {
            id: 'actual-probability',
            type: 'slider',
            label: 'How likely is this outcome actually? (0 = impossible, 100 = near-certain)',
            min: 0,
            max: 100,
            required: true,
          },
          {
            id: 'probability-evidence',
            type: 'textarea',
            label: 'Evidence that this probability is accurate — not just feared',
            placeholder:
              "What actual facts support your probability estimate? Has this specific outcome happened before in similar circumstances? What has the base rate been historically? Remember: 'it feels like it will happen' is not evidence. Evidence is specific, observable, factual.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Best and Most Likely',
        content:
          "If worst-case is one end of the spectrum, what is the best realistic outcome and — most importantly — what is the most likely realistic outcome?",
        fields: [
          {
            id: 'best-realistic-outcome',
            type: 'textarea',
            label: 'Best realistic outcome (not wildly optimistic — realistically positive)',
            placeholder:
              "What would the best reasonable outcome actually look like? Not a fantasy — what is the genuinely good version of this situation?",
          },
          {
            id: 'most-likely-realistic-outcome',
            type: 'textarea',
            label: 'Most likely realistic outcome (not worst, not best)',
            placeholder:
              "This is the most important one: given the actual evidence and base rates, what is the most probable outcome? This is where your brain should be living — not the worst case.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Preparation, Not Rumination',
        content:
          "If the bad thing did happen, you would deal with it. This question is worth answering once — and then stopping.",
        fields: [
          {
            id: 'if-worst-happened',
            type: 'textarea',
            label: 'If the worst-case scenario DID happen, what would you actually do?',
            placeholder:
              "Answer it specifically and practically. Not 'I would fall apart' — what would the first real step be? Who would you call? What resources would you draw on? What have you survived before that was hard? Answer this once, know that you have a plan, and then stop rehearsing it.",
          },
        ],
      },
    ],
  },

  {
    id: 'cognitive-flexibility',
    slug: 'cognitive-flexibility',
    title: 'Cognitive Flexibility Training',
    subtitle: 'Recovery needs the ability to hold multiple perspectives and tolerate uncertainty',
    description:
      "Practice holding complexity, finding alternative perspectives, and tolerating uncertainty — the cognitive skills that rigid addiction-era thinking makes hardest and that long-term recovery most needs.",
    category: 'cognitive-restructuring',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'ACT'],
    tags: ['flexibility', 'CBT', 'ACT', 'uncertainty', 'perspective', 'both-and', 'recovery'],
    icon: '🌀',
    color: '#0EA5E9',
    version: 1,
    relatedWorksheets: ['thought-record', 'cognitive-distortion-spotter', 'values-decision-framework'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Flexibility Matters in Recovery',
        content:
          "Addiction is a teacher of rigid thinking. Black-and-white. All-or-nothing. If I can't have everything, I want nothing. If I'm not perfect, I'm worthless. If I can't know the outcome, I can't act. If something is hard, it's wrong.\n\nThis rigidity makes evolutionary sense in certain contexts — clear rules and quick decisions can be lifesaving. But in recovery, cognitive rigidity is dangerous. It is the engine of the Abstinence Violation Effect ('I slipped once, I might as well keep going'). It is the driver of black-and-white relationship thinking. It is what makes uncertainty intolerable.\n\nCognitive flexibility — the ability to hold multiple perspectives simultaneously, tolerate ambiguity, find the both/and in seemingly either/or situations, and sit with not-knowing — is one of the most important cognitive skills for long-term recovery. And like any skill, it can be practiced.\n\nThis worksheet trains three specific flexibility capacities: perspective expansion, both/and thinking, and uncertainty tolerance.",
      },
      {
        type: 'reflection',
        title: 'The Rigid Thought',
        content:
          "Identify a thought about yourself, your recovery, or another person that is currently feeling very black-and-white.",
        fields: [
          {
            id: 'rigid-thought',
            type: 'textarea',
            label: 'A rigid or black-and-white thought you are having',
            placeholder:
              "e.g., 'Either I'm doing recovery perfectly or I'm failing.' 'She either cares about me or she doesn't.' 'I've already come this far so it must mean I'm doing fine — no need to worry.' 'This situation is completely unfair and there's nothing I can do.' Something you're currently holding in absolute terms.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Perspective Expansion',
        content:
          "Generate three different ways to see the same situation. You are not looking for the 'right' answer — you are practicing the capacity to hold more than one perspective at a time.",
        fields: [
          {
            id: 'three-perspectives',
            type: 'textarea',
            label: 'Three other ways to see this situation',
            placeholder:
              "Try to find at least one positive interpretation, one neutral interpretation, and one that considers the other person's perspective if relevant. Write each one as a complete thought. e.g., '1. Maybe what I'm calling failure is actually just non-linear progress, which is how most recovery works. 2. I might be measuring myself against an unrealistic standard rather than my own actual baseline. 3. The person who seems indifferent might be dealing with their own pain and not have the capacity to show up right now.'",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Both/And',
        content:
          "One of the most important cognitive moves in recovery is replacing 'either/or' with 'both/and.' This is not naive positivity — it is a more accurate representation of how most situations actually work.",
        fields: [
          {
            id: 'both-and-statement',
            type: 'textarea',
            label: "Complete: 'This situation is hard AND...'",
            placeholder:
              "e.g., 'This situation is hard AND I have resources I haven't fully used.' 'This situation is hard AND there is something I can do about it.' 'This situation is hard AND I have survived hard things before.' 'This situation is hard AND there is something worth noticing that is also good.' Practice holding both.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Uncertainty Practice',
        content:
          "Uncertainty is one of the most activating states for people in recovery — the need to know, to control outcomes, to eliminate ambiguity. This section is specifically about tolerating it rather than resolving it.",
        fields: [
          {
            id: 'uncertainty-to-tolerate',
            type: 'textarea',
            label: 'Something uncertain in your life right now that you can practice sitting with',
            placeholder:
              "Not something to solve right now — something to practice tolerating. What is genuinely uncertain? A relationship, a work situation, a health question, whether your recovery will hold? Name it. Then, rather than trying to resolve the uncertainty in this moment, practice acknowledging it: 'This is uncertain. I can tolerate uncertainty. I don't need to know the outcome right now to take my next right action.'",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Flexibility in Recovery',
        content:
          "Where, specifically, would more cognitive flexibility serve your recovery right now?",
        fields: [
          {
            id: 'flexibility-in-recovery',
            type: 'textarea',
            label: 'One area of recovery thinking where more flexibility would actually help you',
            placeholder:
              "e.g., 'I'm very rigid about what counts as real recovery — if I'm not doing every element perfectly, I discount the whole thing. More flexibility about progress would help me not blow up my efforts over imperfection.' Where does rigidity get in your way?",
            required: true,
          },
        ],
      },
    ],
  },
]
