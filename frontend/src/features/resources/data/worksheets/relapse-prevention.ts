import type { Worksheet } from '../types'

export const relapsePreventionWorksheets: Worksheet[] = [
  {
    id: 'relapse-prevention-plan',
    slug: 'relapse-prevention-plan',
    title: 'My Relapse Prevention Plan',
    subtitle: 'Build your circuit-breaker before you need it',
    description:
      'A comprehensive, written relapse prevention plan that maps your warning signs, triggers, coping strategies, and support network into a single document. Created before crisis — used when it matters most.',
    category: 'relapse-prevention',
    difficulty: 'intermediate',
    estimatedMinutes: 45,
    frequency: 'one-time',
    therapeuticFramework: ['CBT', 'MI', 'twelve-step'],
    tags: ['planning', 'relapse', 'prevention', 'support', 'triggers', 'coping'],
    icon: '🛡️',
    color: '#3B82F6',
    featured: true,
    version: 1,
    relatedWorksheets: ['recovery-non-negotiables', 'relapse-chain-analysis', 'coping-skills-review'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why You Need This Written Down',
        content:
          "Research is clear: people who have a written relapse prevention plan are significantly less likely to relapse than those who only have one in their head. The reason isn't complicated — when you're in the middle of a craving or a crisis, your brain's decision-making center goes partially offline. You're not going to think your way to a plan in that moment. You'll follow one you already built.\n\nThink of this document as your brain's circuit-breaker. You're building it right now, when you're calm and clear. So that when the power surges — and at some point it will — there's a system in place to interrupt it automatically.\n\nThis plan belongs to you. Nobody else decides what goes in it. Be honest. Be specific. The more real this is, the more it will actually help.",
      },
      {
        type: 'reflection',
        title: 'My Warning Signs',
        content:
          'Warning signs appear before a relapse — sometimes days or weeks before. They show up in behavior, emotion, and thought. Knowing yours is the first line of defense. Most people have patterns; the goal is to name them so you can recognize them in real time.',
        fields: [
          {
            id: 'warning-signs-behavioral',
            type: 'textarea',
            label: 'Behavioral early warning signs',
            placeholder:
              'What do you start doing — or stop doing — when you are drifting? e.g., Skipping meetings, pulling away from sponsor, not sleeping, isolating, picking fights, hanging around old places.',
            required: true,
          },
          {
            id: 'warning-signs-emotional',
            type: 'textarea',
            label: 'Emotional early warning signs',
            placeholder:
              'What emotions show up as warning signs for you? e.g., Prolonged irritability, numbness, unexplained sadness, sudden overconfidence, feeling like nothing matters.',
            required: true,
          },
          {
            id: 'warning-signs-cognitive',
            type: 'textarea',
            label: 'Cognitive warning signs (thought patterns)',
            placeholder:
              "What thoughts tend to show up when you're heading toward relapse? e.g., 'I've been doing so well I can handle it,' 'Nobody would know,' 'What's the point,' 'I deserve a break from recovery.'",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'My Triggers',
        content:
          'Triggers are situations, people, places, emotions, or internal states that reliably increase your craving or risk. Some are obvious. Some are sneaky. The ones you have not named yet are the most dangerous.',
        fields: [
          {
            id: 'top-triggers',
            type: 'textarea',
            label: 'My top 5 situations, people, or emotional states that put me at risk',
            placeholder:
              'Be specific and honest. Generic answers like "stress" are less useful than "when my dad calls and criticizes me" or "Friday nights between 8–11pm when I have no plans."',
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'My Coping Arsenal',
        content:
          "When the warning signs show up, what do you reach for? Select every tool that is available to you, then write about the ones you trust most. A coping skill you've never practiced won't help you in a crisis.",
        fields: [
          {
            id: 'coping-tools-select',
            type: 'multi-select',
            label: 'Coping strategies available to me',
            options: [
              'Deep breathing',
              'Call sponsor',
              'Attend a meeting',
              'Journal',
              'Exercise',
              'Pray/meditate',
              'Call the crisis line',
              'Leave the situation',
              'Other',
            ],
            required: true,
          },
          {
            id: 'coping-tools-top3',
            type: 'textarea',
            label: 'My top 3 coping strategies and when to use each',
            placeholder:
              'Be specific: not just "call someone" but "Call Marcus at (808) 555-0123 when I feel the craving building before it peaks." Include the when, not just the what.',
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'My Support Network',
        content:
          'Recovery is not a solo project. These are the people you will actually call — not the ones you wish you could call. Put real names and real numbers here.',
        fields: [
          {
            id: 'support-person-1-name',
            type: 'text',
            label: 'Support person 1 — Name',
            placeholder: 'First name is fine',
            required: true,
          },
          {
            id: 'support-person-1-phone',
            type: 'text',
            label: 'Support person 1 — Phone',
            placeholder: 'Their number',
          },
          {
            id: 'support-person-1-when',
            type: 'text',
            label: 'Support person 1 — When I will call them',
            placeholder: "e.g., 'When I notice the first warning signs — before I'm in crisis'",
          },
          {
            id: 'support-person-2-name',
            type: 'text',
            label: 'Support person 2 — Name',
            placeholder: 'Your second go-to',
          },
          {
            id: 'support-person-2-phone',
            type: 'text',
            label: 'Support person 2 — Phone',
          },
          {
            id: 'support-person-2-when',
            type: 'text',
            label: 'Support person 2 — When I will call them',
            placeholder: "e.g., 'If person 1 doesn't answer, or if I need a different kind of support'",
          },
          {
            id: 'support-person-3-name',
            type: 'text',
            label: 'Support person 3 — Name',
            placeholder: 'A third option — a backup when others are unavailable',
          },
          {
            id: 'support-person-3-phone',
            type: 'text',
            label: 'Support person 3 — Phone',
          },
          {
            id: 'support-person-3-when',
            type: 'text',
            label: 'Support person 3 — When I will call them',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Emergency Protocol',
        content:
          "This is the section for worst-case. Not 'I'm feeling a little at risk.' This is: 'I am standing outside a bar' or 'I am holding their number and my hand is on the phone.' What happens right now? Write it like you're leaving instructions for yourself.",
        fields: [
          {
            id: 'emergency-protocol',
            type: 'textarea',
            label: 'If I feel like I am about to use: my immediate steps',
            placeholder:
              'Step 1... Step 2... Step 3... Be specific — where do you go, who do you call, what do you say, what do you physically do with your body?',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'My Reasons',
        content:
          "On hard days, reasons matter. Not abstract reasons — real, personal, lived ones. What are you choosing when you choose recovery? Write this for yourself, not for anyone else. You'll want to read it later.",
        fields: [
          {
            id: 'reasons-for-recovery',
            type: 'textarea',
            label: 'Why I am choosing recovery right now',
            placeholder:
              'Relationships, freedom, health, who you are becoming, what you have built, what you almost lost — whatever is true. Be specific. Write from the heart.',
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Professional Contacts',
        content:
          'Your professional supports deserve a permanent place in this plan.',
        fields: [
          {
            id: 'contact-therapist',
            type: 'text',
            label: 'Therapist or counselor (name and contact)',
            placeholder: 'Name, number, or how to reach them',
          },
          {
            id: 'contact-sponsor',
            type: 'text',
            label: 'Sponsor or recovery mentor (name and contact)',
            placeholder: 'Name and number',
          },
          {
            id: 'contact-crisis-line',
            type: 'text',
            label: 'Crisis line I trust',
            placeholder: 'e.g., SAMHSA: 1-800-662-4357, local crisis line, or sponsor hotline',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'relapse-chain-analysis',
    slug: 'relapse-chain-analysis',
    title: 'Relapse Chain Analysis',
    subtitle: 'Map every link — and find where to break it',
    description:
      "A DBT-adapted chain analysis of a relapse or near-relapse, tracing the sequence from vulnerability through consequence. Used not to punish yourself, but to understand your exact pattern and identify the most powerful intervention points.",
    category: 'relapse-prevention',
    difficulty: 'advanced',
    estimatedMinutes: 30,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'CBT'],
    tags: ['chain-analysis', 'relapse', 'pattern', 'DBT', 'understanding', 'intervention'],
    icon: '🔗',
    color: '#3B82F6',
    version: 1,
    relatedWorksheets: ['relapse-prevention-plan', 'post-relapse-recovery', 'abstinence-violation-effect'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Is Chain Analysis?',
        content:
          "DBT's chain analysis is one of the most powerful tools in behavioral therapy because it refuses to settle for vague explanations. 'I relapsed because I was stressed' is not a chain analysis. A chain analysis asks: what type of stress? What happened right before that? What thought did you have? What did you do with that thought? Where were you physically? Who was there? What was the sequence of events, thoughts, feelings, and behaviors that led, link by link, to the outcome?\n\nThe goal is not to shame yourself — it's the opposite. Understanding your exact chain means you can find the specific links where intervention is possible. Sometimes you break it at the beginning. Sometimes you can only break it at link six. Knowing where your leverage points are is the difference between white-knuckling it and having a real strategy.\n\nThis analysis works best done while the event is still fresh — and with honesty. Use it after a relapse or a near-relapse. Use it to build your prevention plan.",
      },
      {
        type: 'reflection',
        title: 'The Starting Point: Vulnerability',
        content:
          "Every chain begins before the first link. Your vulnerability state — the conditions that made you more susceptible than usual — is part of the analysis. Vulnerabilities are not excuses. They are data.",
        fields: [
          {
            id: 'vulnerability-state',
            type: 'textarea',
            label: "What was my vulnerability before this began?",
            placeholder:
              'Was I sleep-deprived? Had I been skipping meetings? Was I under unusual financial or relationship stress? Had I stopped taking medication? What was my emotional baseline in the days leading up to this?',
            required: true,
          },
        ],
      },
      {
        type: 'timeline',
        title: 'The Chain',
        content:
          "Map the sequence that led from your vulnerability state to the outcome. Be specific about the type of each link — was it a thought, a feeling, a behavior, an urge, or an external event? Then describe what actually happened at each step. Most chains have 5–8 links. Fill in what you need.",
        fields: [
          {
            id: 'chain-link-1-type',
            type: 'select',
            label: 'Link 1 — Type',
            options: ['Thought', 'Feeling', 'Behavior', 'Urge', 'External event'],
            required: true,
          },
          {
            id: 'chain-link-1-what',
            type: 'textarea',
            label: 'Link 1 — What happened here?',
            placeholder: 'Be specific. Not "I felt bad" but "I got a text from my ex and felt a wave of shame."',
            required: true,
          },
          {
            id: 'chain-link-2-type',
            type: 'select',
            label: 'Link 2 — Type',
            options: ['Thought', 'Feeling', 'Behavior', 'Urge', 'External event'],
          },
          {
            id: 'chain-link-2-what',
            type: 'textarea',
            label: 'Link 2 — What happened here?',
            placeholder: 'The next step in the sequence.',
          },
          {
            id: 'chain-link-3-type',
            type: 'select',
            label: 'Link 3 — Type',
            options: ['Thought', 'Feeling', 'Behavior', 'Urge', 'External event'],
          },
          {
            id: 'chain-link-3-what',
            type: 'textarea',
            label: 'Link 3 — What happened here?',
          },
          {
            id: 'chain-link-4-type',
            type: 'select',
            label: 'Link 4 — Type',
            options: ['Thought', 'Feeling', 'Behavior', 'Urge', 'External event'],
          },
          {
            id: 'chain-link-4-what',
            type: 'textarea',
            label: 'Link 4 — What happened here?',
          },
          {
            id: 'chain-link-5-type',
            type: 'select',
            label: 'Link 5 — Type',
            options: ['Thought', 'Feeling', 'Behavior', 'Urge', 'External event'],
          },
          {
            id: 'chain-link-5-what',
            type: 'textarea',
            label: 'Link 5 — What happened here?',
          },
          {
            id: 'chain-link-6-type',
            type: 'select',
            label: 'Link 6 — Type',
            options: ['Thought', 'Feeling', 'Behavior', 'Urge', 'External event'],
          },
          {
            id: 'chain-link-6-what',
            type: 'textarea',
            label: 'Link 6 — What happened here?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Where to Intervene',
        content:
          "Now that you can see the whole chain: where could you have broken it? Usually there are multiple intervention points — early ones that require catching warning signs, and later ones that require emergency skills. Both matter.",
        fields: [
          {
            id: 'intervention-link',
            type: 'textarea',
            label: 'At which link could I have broken the chain?',
            placeholder:
              'Look at each link and ask: what skill, decision, or action would have redirected the sequence here? You may find multiple intervention points — list all of them.',
            required: true,
          },
          {
            id: 'intervention-alternative',
            type: 'text',
            label: 'My specific alternative action at the most accessible link',
            placeholder:
              'Pick the link most realistic to intervene at and name the specific action — not just "cope better" but "call my sponsor when I feel shame rather than pulling back."',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What I Learned',
        content:
          "This analysis is worth something only if you take something from it. What does your chain tell you about your specific relapse pattern?",
        fields: [
          {
            id: 'chain-learning',
            type: 'textarea',
            label: 'What this analysis tells me about my relapse pattern',
            placeholder:
              'What did you learn about your vulnerabilities, your trigger sequence, or your specific high-risk links that you did not clearly see before? This is not self-criticism — it is intelligence.',
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Prevention Commitment',
        content:
          "One specific change that would most disrupt this chain at its start.",
        fields: [
          {
            id: 'chain-prevention-change',
            type: 'text',
            label: 'The one change that would most prevent this chain from starting again',
            placeholder:
              "e.g., 'Not having their contact saved in my phone,' 'Calling my sponsor the same day I skip a meeting,' 'Having a plan for Friday nights.'",
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'seemingly-irrelevant-decisions',
    slug: 'seemingly-irrelevant-decisions',
    title: 'Seemingly Irrelevant Decisions',
    subtitle: "Catch the small choices before they add up",
    description:
      "SIDs are the micro-decisions that don't seem like relapse decisions — but are. This worksheet builds awareness of your personal SID patterns before they become a chain you can't stop.",
    category: 'relapse-prevention',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT'],
    tags: ['SID', 'awareness', 'drift', 'decisions', 'triggers', 'early-warning'],
    icon: '🚗',
    color: '#3B82F6',
    version: 1,
    relatedWorksheets: ['relapse-chain-analysis', 'relapse-prevention-plan', 'recovery-non-negotiables'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Are Seemingly Irrelevant Decisions?',
        content:
          "G. Alan Marlatt identified a pattern he called Seemingly Irrelevant Decisions — choices that on their surface have nothing to do with using, but that systematically move a person closer to relapse. They're the small, rationalized steps toward the edge.\n\n'I'll just drive past the old neighborhood — I'm not going to stop.' 'I'll keep their number in my phone just in case something happens.' 'I'll go to the party — I can handle it.' 'I'll just skip this one meeting, I'm really tired.'\n\nNone of these is the relapse decision. But each one moves the needle. And the insidious part: they feel irrelevant. That's by design. Your brain — which wants to use — is very good at generating reasons why these choices are harmless.\n\nBuilding awareness of your personal SID patterns is one of the highest-leverage relapse prevention skills available.",
      },
      {
        type: 'reflection',
        title: 'Identify Your SIDs',
        content:
          "Look back honestly at the past month. This is not about finding something to feel guilty about — it's about pattern recognition. What small choices have you made that, if you're being completely honest with yourself, moved you slightly toward risk?",
        fields: [
          {
            id: 'sids-recent',
            type: 'textarea',
            label: 'Small decisions in the last month that moved me slightly closer to using — even if I barely noticed',
            placeholder:
              "Examples: 'I went to a party where I knew people would be using and told myself I just wanted to socialize.' 'I drove by my old dealer's block twice this week.' 'I stopped calling my sponsor as often and told myself I was doing fine.' 'I saved someone's number who I know I use with.'",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Drift',
        content:
          "SIDs often happen in the context of a broader drift — a gradual loosening of recovery practices without any single 'relapse decision.' Looking at the bigger picture matters.",
        fields: [
          {
            id: 'recovery-drift',
            type: 'textarea',
            label: 'Was I drifting in recovery before I realized it? What were the signs?',
            placeholder:
              "Think back. Were there weeks when meeting attendance dropped? When sponsor calls became less frequent? When recovery felt like maintenance instead of active work? When you stopped being honest in group? What did drift look like for you?",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Your Personal SID Category',
        content:
          "Most people have a primary category — a type of SID that shows up most reliably. Naming it increases your chances of catching it early.",
        fields: [
          {
            id: 'sid-primary-category',
            type: 'text',
            label: 'My most dangerous personal SID category',
            placeholder:
              "e.g., People (keeping old contacts, running into using friends), Places (driving through old neighborhoods, going to bars 'just to hang out'), Things (keeping substances in the house 'for guests'), Thoughts ('I've been doing well enough that I could handle it')",
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Building the Awareness',
        content:
          "Awareness alone won't stop SIDs. You also need accountability — someone who can reflect back what they observe when you can't see it clearly yourself.",
        fields: [
          {
            id: 'sid-awareness-plan',
            type: 'textarea',
            label: 'How I will notice SIDs earlier',
            placeholder:
              "What will you look for? What questions will you ask yourself daily or weekly? e.g., 'Every Sunday I'll ask: what decisions have I made this week that I've been rationalizing?' or 'I'll notice when I start avoiding being honest with my sponsor about my week.'",
            required: true,
          },
          {
            id: 'sid-accountability-person',
            type: 'text',
            label: "Who I'll tell when I notice one",
            placeholder:
              'Naming a real person creates accountability. Who is safe enough to be honest with about these small choices?',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'post-relapse-recovery',
    slug: 'post-relapse-recovery',
    title: 'Post-Relapse Recovery Plan',
    subtitle: 'Start again from right here',
    description:
      'A compassionate, structured plan for the hours and days immediately following a relapse. Addresses safety, next steps, shame, and recommitment — without catastrophizing or giving up.',
    category: 'relapse-prevention',
    difficulty: 'advanced',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT', 'TI', 'MI'],
    tags: ['post-relapse', 'recovery', 'shame', 'restart', 'plan', 'self-compassion'],
    icon: '🔄',
    color: '#3B82F6',
    featured: true,
    version: 1,
    relatedWorksheets: ['abstinence-violation-effect', 'relapse-chain-analysis', 'relapse-prevention-plan'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Start Here',
        content:
          "Relapse is not the end. It is painful, and it is not the end.\n\nThis worksheet is here for exactly this moment. You don't have to have it together right now. You don't have to know what happened or why. You don't have to feel ready. You just have to stay here and work through these questions one at a time.\n\nThe research on long-term recovery is consistent: most people who achieve sustained recovery experienced one or more relapses on the way there. What separates people who get back to recovery from people who don't is not whether they relapsed — it's what they do in the hours and days immediately after.\n\nYou are making that choice right now. Start here.",
      },
      {
        type: 'scale',
        title: 'Right Now',
        content:
          "Before anything else — let's know where you are physically and emotionally.",
        fields: [
          {
            id: 'current-status',
            type: 'select',
            label: 'I am currently:',
            options: [
              'Safe',
              'Not physically safe — please seek medical help first',
              'With someone I trust',
              'Alone but okay',
              'Alone and struggling',
            ],
            required: true,
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Immediate 24 Hours',
        content:
          "Not 'I'll do better forever.' Just the next 24 hours. What are the three most important things that need to happen today?",
        fields: [
          {
            id: 'next-hour-step',
            type: 'textarea',
            label: 'My first step in the next hour',
            placeholder:
              "Something concrete and doable. 'Call my sponsor.' 'Get to a meeting at 7pm.' 'Text someone I trust and tell them what happened.' 'Get out of this location.' Small and real.",
            required: true,
          },
          {
            id: 'who-to-tell-today',
            type: 'textarea',
            label: 'Who I will tell today',
            placeholder:
              "Isolation after a relapse is the highest risk factor for continued use. Who knows? Who needs to know? Who is safe to tell right now?",
            required: true,
          },
          {
            id: 'support-today',
            type: 'textarea',
            label: 'Meetings or support I will access today',
            placeholder:
              "Is there a meeting you can get to today? A crisis line? A recovery center? An online meeting? Sponsor? Peer support?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The 72-Hour Plan',
        content:
          "The first 72 hours after a relapse are the highest-risk period for continued use. Having a plan for this window — even a rough one — significantly reduces that risk.",
        fields: [
          {
            id: 'seventy-two-hour-plan',
            type: 'textarea',
            label: 'My plan for the next 3 days',
            placeholder:
              "Where will you sleep? Who will you be around? What structure can you put in place? What meetings or check-ins can you schedule? What do you need to avoid? Be as specific as your current situation allows.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Working With Shame — Not Against',
        content:
          "Shame is the most common driver of continued use after a relapse. 'I've already blown it. I'm already the person who relapses. I might as well keep going.' This is the shame spiral — and it is the most dangerous part of a relapse.\n\nName it. Then talk back to it.",
        fields: [
          {
            id: 'shame-voice-writing',
            type: 'textarea',
            label: 'The shame voice is saying:',
            placeholder:
              "Write out exactly what the shame voice is telling you. Don't clean it up — write it as it actually sounds in your head.",
            required: true,
          },
          {
            id: 'shame-truth-response',
            type: 'textarea',
            label: 'The truth is:',
            placeholder:
              "What would you say to a close friend who relapsed and was telling you what the shame voice just said? What does the part of you that has survived this before actually know to be true?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What Happened',
        content:
          "Not to punish yourself. Not to relitigate every mistake. But because understanding your chain gives you something useful to work with — information your relapse prevention plan needs.",
        fields: [
          {
            id: 'relapse-learning',
            type: 'textarea',
            label: "What can I learn from this? (Not to punish myself — to understand the chain)",
            placeholder:
              "What was the vulnerability? The trigger? The decision point? What would you do differently if you could rewind 24 or 48 hours? This doesn't need to be complete right now — but write what you can see.",
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Recommitment',
        content:
          "Recovery is not a single decision made once. It is a choice that gets made again and again. This is one of those moments.",
        fields: [
          {
            id: 'recommitment-statement',
            type: 'text',
            label: 'I am choosing recovery again. Starting right now.',
            placeholder:
              'Write anything that makes this real for you. One word. A sentence. Your name. Whatever you need.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'recovery-capital',
    slug: 'recovery-capital',
    title: 'Recovery Capital Inventory',
    subtitle: 'You have more resources than you think',
    description:
      "William White's recovery capital framework applied to your life: map your social, material, human, and cultural resources. See what you have to build on — and where to invest next.",
    category: 'relapse-prevention',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    frequency: 'one-time',
    therapeuticFramework: ['SF', 'PP'],
    tags: ['recovery-capital', 'strengths', 'resources', 'social', 'hope', 'inventory'],
    icon: '💰',
    color: '#3B82F6',
    version: 1,
    relatedWorksheets: ['strength-spotting', 'relapse-prevention-plan', 'life-purpose-exploration'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Is Recovery Capital?',
        content:
          "Researcher and recovery advocate William White defines recovery capital as 'the breadth and depth of internal and external resources that can be drawn upon to initiate and sustain recovery.' It's the sum total of what you have working for you.\n\nPeople often undercount their recovery capital — especially early in recovery, when it's easy to focus only on what's been lost. This inventory is designed to help you see what's actually there.\n\nRecovery capital isn't just about being privileged or 'having it together.' It's about honest accounting. Someone with a decade of sobriety, a strong sponsor relationship, and a skill set developed through years of surviving hard things has significant capital — even if they're also carrying debt and rebuilding family trust.\n\nKnowing what you have tells you what you can use. Knowing what's missing tells you where to invest.",
      },
      {
        type: 'checklist',
        title: 'Social Capital',
        content:
          "The people and communities that support your recovery are some of your most powerful resources.",
        fields: [
          {
            id: 'social-capital-select',
            type: 'multi-select',
            label: 'Social resources I currently have',
            options: [
              'Supportive family member(s)',
              'Sponsor or recovery mentor',
              'Sober friends',
              'Recovery community',
              'Therapist or counselor',
              'Religious or faith community',
              'Other',
            ],
          },
          {
            id: 'social-capital-description',
            type: 'textarea',
            label: 'The people in my corner',
            placeholder:
              "Who specifically? What does their support actually look like? It doesn't have to be a big list — even one genuinely supportive person is significant recovery capital.",
            required: true,
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Physical and Material Capital',
        content:
          "Stability in housing, income, and basic needs significantly impacts recovery outcomes. Take an honest inventory.",
        fields: [
          {
            id: 'material-capital-select',
            type: 'multi-select',
            label: 'Material resources I currently have',
            options: [
              'Stable housing',
              'Employment',
              'Health care access',
              'Phone',
              'Transportation',
              'Other',
            ],
          },
          {
            id: 'material-capital-description',
            type: 'textarea',
            label: 'What stability do I have right now?',
            placeholder:
              "Be honest about both what's in place and what's fragile. Knowing the full picture helps you plan.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Human Capital',
        content:
          "Human capital is what you know, what you can do, and what you understand about yourself and the world. Recovery itself builds significant human capital.",
        fields: [
          {
            id: 'human-capital-skills',
            type: 'textarea',
            label: 'Skills and knowledge I have developed',
            placeholder:
              'Include recovery skills (calling for help, sitting with discomfort, working a step, staying present), as well as practical skills (work, education, communication, etc.).',
          },
          {
            id: 'human-capital-recovery-knowledge',
            type: 'textarea',
            label: 'What I understand about addiction and recovery that is valuable',
            placeholder:
              "The things you've learned through lived experience — about yourself, about how your particular addiction works, about what helps and what doesn't — are hard-won and real.",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Cultural Capital',
        content:
          "Cultural capital includes your values, your sense of identity and belonging, your spiritual or philosophical grounding, and the communities and traditions that hold meaning for you.",
        fields: [
          {
            id: 'cultural-capital',
            type: 'textarea',
            label: 'Values, community, or spiritual practices that ground me',
            placeholder:
              "What beliefs or practices give your recovery meaning? What community do you belong to — recovery, faith, family, cultural — that anchors you? What values do you hold that are stronger than the pull to use?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Where to Build',
        content:
          "You've taken inventory. Now: where is the gap? You can't build everything at once — but you can identify where investment would yield the most for your recovery.",
        fields: [
          {
            id: 'capital-gap',
            type: 'textarea',
            label: 'The area of my recovery capital most in need of development',
            placeholder:
              "Is it social capital (you're isolated)? Material (unstable housing or no income)? Human (you need more coping skills)? Cultural (you've lost touch with what gives your life meaning)? Be honest.",
            required: true,
          },
          {
            id: 'capital-next-step',
            type: 'text',
            label: 'One step I can take this month to build in that area',
            placeholder:
              'Small and concrete. e.g., "Attend the recovery community dinner on Thursday," "Make an appointment with a financial counselor," "Reach out to one person from my faith community."',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'abstinence-violation-effect',
    slug: 'abstinence-violation-effect',
    title: 'Abstinence Violation Effect',
    subtitle: "One slip is not the same as full relapse — challenge the thought",
    description:
      "Marlatt's AVE: the all-or-nothing thinking that turns a slip into full relapse. This worksheet helps you catch the thought, challenge it, and get back immediately rather than letting one moment become many.",
    category: 'relapse-prevention',
    difficulty: 'advanced',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['CBT'],
    tags: ['AVE', 'all-or-nothing', 'slip', 'relapse', 'cognitive', 'challenge'],
    icon: '⚠️',
    color: '#3B82F6',
    version: 1,
    relatedWorksheets: ['post-relapse-recovery', 'cognitive-distortion-spotter', 'thought-record'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Understanding AVE',
        content:
          "Researcher G. Alan Marlatt identified one of the most dangerous cognitive patterns in relapse: the Abstinence Violation Effect (AVE). It works like this:\n\nA person slips — uses once, has one drink, takes one pill. Immediately, a set of catastrophic thoughts arrives: 'I've already ruined everything.' 'Once an addict, always an addict.' 'I knew I couldn't do this.' 'I might as well keep going since I've already blown it.'\n\nThis thought pattern — not the original slip — is what turns a slip into a full relapse. It's the cognitive spiral that says: all or nothing. Perfect or worthless. Sober or completely gone.\n\nAVE is extremely common, understandable, and not true.\n\nOne slip is not the same as a full relapse. One bad day does not erase months of work. The thought 'I might as well keep going' is a thought — not a fact, not a destiny. You can challenge it.",
      },
      {
        type: 'reflection',
        title: 'Catch the Thought',
        content:
          "Name the thought. Write it down exactly as it sounds in your head. You cannot challenge something you haven't named.",
        fields: [
          {
            id: 'ave-thought',
            type: 'textarea',
            label: "The all-or-nothing thought I'm having (or have had after a slip)",
            placeholder:
              "Write it as your mind actually says it. e.g., 'I've ruined everything.' 'I'm back to square one.' 'There's no point, I always end up here.' 'I might as well use until I feel better.' Don't clean it up — write what's actually there.",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Challenge It',
        content:
          "Now challenge it. Not with toxic positivity — with reality. These questions help you find the actual truth under the catastrophe.",
        fields: [
          {
            id: 'ave-challenge-truth',
            type: 'textarea',
            label: "Is this thought true? One slip is not the same as full relapse.",
            placeholder:
              "Work through the logic: What actually happened versus what your mind is claiming happened? What is factually accurate about your situation right now? Is being at day one actually the same as never having had any sober time at all?",
            required: true,
          },
          {
            id: 'ave-still-in-recovery',
            type: 'textarea',
            label: 'Evidence that I am still a person in recovery even after a slip',
            placeholder:
              'What choices have you made in recovery? What have you built? What do you know now that you didn\'t before? What were you protecting when you got sober? That person is still here — what is the evidence?',
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'The Percentage',
        content:
          "Recovery is not a binary. You don't have it until you don't. It's a percentage — and even imperfect recovery is still recovery.",
        fields: [
          {
            id: 'sober-days-estimate',
            type: 'select',
            label: 'Sober days in the past 90 days (approximate)',
            options: [
              '85–90 days',
              '75–85 days',
              '50–75 days',
              '25–50 days',
              'Under 25 days',
            ],
          },
          {
            id: 'percentage-reflection',
            type: 'textarea',
            label: 'Even imperfect recovery is still recovery. What does that percentage tell you?',
            placeholder:
              "If you were sober for 85 out of 90 days and slipped on day 86, you had 85 days of not using. That is not nothing. What does the evidence of your effort and your time actually say about who you are?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Get Back Now',
        content:
          "The window between a slip and a full relapse is where you have the most power. Right now.",
        fields: [
          {
            id: 'ave-next-step',
            type: 'text',
            label: 'Right now, my next step is:',
            placeholder:
              "One specific, immediate, concrete action. Not a plan for the rest of the year. What happens in the next hour?",
            required: true,
          },
          {
            id: 'ave-calling',
            type: 'text',
            label: "I'm calling:",
            placeholder: 'A name and number. Make it real.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'coping-skills-review',
    slug: 'coping-skills-review',
    title: 'Coping Skills Effectiveness Review',
    subtitle: 'Update your toolkit for where you are now',
    description:
      "A monthly review of your active coping skills — what's working, what's faded, what needs to change. Recovery evolves; your toolkit should too.",
    category: 'relapse-prevention',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'weekly',
    therapeuticFramework: ['CBT', 'SF'],
    tags: ['coping', 'review', 'skills', 'toolkit', 'effectiveness', 'update'],
    icon: '🔧',
    color: '#3B82F6',
    version: 1,
    relatedWorksheets: ['relapse-prevention-plan', 'recovery-non-negotiables', 'boredom-purpose-finder'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Your Toolkit Needs Updating',
        content:
          "What worked in your first 30 days of recovery may not be what you need at one year. Coping skills aren't one-size-fits-all, and they're not set-it-and-forget-it.\n\nEarly recovery often relies heavily on white-knuckling, distraction, and emergency tools. Later recovery usually needs more depth — skills for building meaning, managing long-term relationships, tolerating the complexity of a real life lived sober.\n\nA coping skills review isn't an indictment of your toolkit — it's maintenance. The same way you'd rotate your wardrobe or service your car. What's still working well? What have you stopped using? What gaps are appearing? What are you ready for now that you weren't before?\n\nDo this monthly. It takes 15 minutes and keeps your relapse prevention current.",
      },
      {
        type: 'matrix',
        title: 'Review Your Tools',
        content:
          "For up to five coping skills currently in your toolkit, rate how often you're using them and how effective they are. Then decide their status.",
        fields: [
          {
            id: 'skill-1-name',
            type: 'text',
            label: 'Skill 1 — Name',
            placeholder: "e.g., 'Calling my sponsor when triggered,' '5-4-3-2-1 grounding,' 'Daily meeting attendance'",
            required: true,
          },
          {
            id: 'skill-1-frequency',
            type: 'slider',
            label: 'Skill 1 — How often I am actually using this',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-1-effectiveness',
            type: 'slider',
            label: 'Skill 1 — How effective it is when I use it',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-1-status',
            type: 'select',
            label: 'Skill 1 — Status',
            options: ['Keeping', 'Needs more practice', 'Replacing', 'Adding something new'],
          },
          {
            id: 'skill-2-name',
            type: 'text',
            label: 'Skill 2 — Name',
          },
          {
            id: 'skill-2-frequency',
            type: 'slider',
            label: 'Skill 2 — How often I am actually using this',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-2-effectiveness',
            type: 'slider',
            label: 'Skill 2 — How effective it is when I use it',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-2-status',
            type: 'select',
            label: 'Skill 2 — Status',
            options: ['Keeping', 'Needs more practice', 'Replacing', 'Adding something new'],
          },
          {
            id: 'skill-3-name',
            type: 'text',
            label: 'Skill 3 — Name',
          },
          {
            id: 'skill-3-frequency',
            type: 'slider',
            label: 'Skill 3 — How often I am actually using this',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-3-effectiveness',
            type: 'slider',
            label: 'Skill 3 — How effective it is when I use it',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-3-status',
            type: 'select',
            label: 'Skill 3 — Status',
            options: ['Keeping', 'Needs more practice', 'Replacing', 'Adding something new'],
          },
          {
            id: 'skill-4-name',
            type: 'text',
            label: 'Skill 4 — Name',
          },
          {
            id: 'skill-4-frequency',
            type: 'slider',
            label: 'Skill 4 — How often I am actually using this',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-4-effectiveness',
            type: 'slider',
            label: 'Skill 4 — How effective it is when I use it',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-4-status',
            type: 'select',
            label: 'Skill 4 — Status',
            options: ['Keeping', 'Needs more practice', 'Replacing', 'Adding something new'],
          },
          {
            id: 'skill-5-name',
            type: 'text',
            label: 'Skill 5 — Name',
          },
          {
            id: 'skill-5-frequency',
            type: 'slider',
            label: 'Skill 5 — How often I am actually using this',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-5-effectiveness',
            type: 'slider',
            label: 'Skill 5 — How effective it is when I use it',
            min: 1,
            max: 5,
          },
          {
            id: 'skill-5-status',
            type: 'select',
            label: 'Skill 5 — Status',
            options: ['Keeping', 'Needs more practice', 'Replacing', 'Adding something new'],
          },
        ],
      },
      {
        type: 'reflection',
        title: "What's Working",
        content:
          "Acknowledge what's actually working before looking at gaps. This isn't just positive thinking — it's keeping your reliable tools front and center.",
        fields: [
          {
            id: 'skill-most-reliable',
            type: 'textarea',
            label: 'My most reliable coping tool right now and why it works for this season of recovery',
            placeholder:
              "What is it? Why does it work well for you right now specifically — not just in general? What does it do for you that other tools don't?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: "What's Missing",
        content:
          "Gaps in your toolkit don't always announce themselves loudly. Sometimes they show up as 'nothing sounds helpful right now' or 'my usual things aren't cutting it.'",
        fields: [
          {
            id: 'skill-gap',
            type: 'textarea',
            label: 'A type of support or coping skill my recovery is currently lacking',
            placeholder:
              "Are you missing deeper emotional processing? Better physical regulation skills? Social connection? Meaning and purpose? Skills for a specific situation you're facing? What feels absent?",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Update',
        content:
          "One specific addition or strengthening commitment for this month.",
        fields: [
          {
            id: 'skill-update',
            type: 'text',
            label: 'One coping skill I am adding or strengthening this month',
            placeholder:
              'Be specific. Not "use more coping skills" but "practice 4-7-8 breathing three times a day until it becomes automatic" or "add one body-based tool to use when I notice shoulder tension."',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'recovery-non-negotiables',
    slug: 'recovery-non-negotiables',
    title: 'My Recovery Non-Negotiables',
    subtitle: "The commitments you make to yourself — not rules imposed from outside",
    description:
      "Define the core recovery practices you will not compromise on. Not because someone told you to — because you have decided they are the foundation your recovery stands on.",
    category: 'relapse-prevention',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'one-time',
    therapeuticFramework: ['CBT', 'PP', 'twelve-step'],
    tags: ['non-negotiables', 'commitments', 'foundation', 'values', 'structure', 'planning'],
    icon: '🔒',
    color: '#3B82F6',
    featured: true,
    version: 1,
    relatedWorksheets: ['relapse-prevention-plan', 'recovery-capital', 'structure-routine-builder'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Makes Something a Non-Negotiable?',
        content:
          "A recovery non-negotiable is a practice or commitment you decide in advance you will not compromise — not because someone else requires it, but because you have decided it is non-negotiable for you.\n\nThe distinction matters. Rules imposed on you from outside are things you follow until you can argue your way out of them. Commitments you make to yourself are things you honor because violating them means violating your own integrity.\n\nNon-negotiables are usually the basics: meeting attendance, calling your sponsor, taking medication, staying away from specific people or places. But they're specific to you — what your recovery actually requires, not what sounds good in theory.\n\nThey also help when you're drifting. If you have seven non-negotiables and you notice you've been skipping three of them, that's important data — even if nothing dramatic has happened yet.",
      },
      {
        type: 'prompt',
        title: 'Your Non-Negotiables',
        content:
          "Name the recovery practices that are foundational for you. Be specific — 'attend at least three meetings per week' is more useful than 'go to meetings.' Use the placeholders as prompts, but make each one yours.",
        fields: [
          {
            id: 'non-negotiable-1',
            type: 'text',
            label: 'Non-negotiable 1',
            placeholder: 'e.g., Attend at least 3 meetings per week',
            required: true,
          },
          {
            id: 'non-negotiable-2',
            type: 'text',
            label: 'Non-negotiable 2',
            placeholder: 'e.g., Take my medication every morning without exception',
          },
          {
            id: 'non-negotiable-3',
            type: 'text',
            label: 'Non-negotiable 3',
            placeholder: 'e.g., Call my sponsor when I feel at risk — before I make any decisions',
          },
          {
            id: 'non-negotiable-4',
            type: 'text',
            label: 'Non-negotiable 4',
            placeholder: 'e.g., Do not keep substances in the house or in my car',
          },
          {
            id: 'non-negotiable-5',
            type: 'text',
            label: 'Non-negotiable 5',
            placeholder: 'e.g., Be honest with my therapist — no filtering',
          },
          {
            id: 'non-negotiable-6',
            type: 'text',
            label: 'Non-negotiable 6',
            placeholder: 'e.g., Daily prayer or meditation, even for 5 minutes',
          },
          {
            id: 'non-negotiable-7',
            type: 'text',
            label: 'Non-negotiable 7',
            placeholder: 'e.g., No contact with my using friends from before',
          },
          {
            id: 'non-negotiable-8',
            type: 'text',
            label: 'Non-negotiable 8',
            placeholder: 'e.g., Journal when I feel emotionally overwhelmed instead of going quiet',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Why These Matter',
        content:
          "There is usually one non-negotiable you are most tempted to skip — the one that feels optional when things are going well, or the one that requires the most vulnerability. Naming it is important.",
        fields: [
          {
            id: 'non-negotiable-hardest',
            type: 'textarea',
            label: "The non-negotiable I'm most tempted to skip — and why I won't",
            placeholder:
              "Which one is hardest to maintain? What does your brain tell you when you're about to skip it? And what do you know — from experience or from what you've built — about what happens when you do?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'When You Start Drifting',
        content:
          "Non-negotiables are useful as drift detectors. The question isn't just 'am I doing these?' — it's 'what happens right before I stop doing them?' That's your actual early warning system.",
        fields: [
          {
            id: 'non-negotiable-drift-pattern',
            type: 'textarea',
            label: "What tends to happen right before I start breaking my non-negotiables?",
            placeholder:
              "Think about past periods when your recovery practices slipped. What came first — the emotional state? The life circumstance? The rationalization? The relationship change? Knowing the 'before' gives you earlier warning.",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'The Check-In',
        content:
          "A commitment without a review date is just good intentions. Build in a check-in now.",
        fields: [
          {
            id: 'non-negotiable-review-frequency',
            type: 'select',
            label: 'How often I will review this list',
            options: ['Daily', 'Weekly', 'When I feel at risk', 'Monthly', 'Other'],
            required: true,
          },
          {
            id: 'non-negotiable-review-date',
            type: 'date',
            label: 'Next review date',
          },
        ],
      },
    ],
  },
]
