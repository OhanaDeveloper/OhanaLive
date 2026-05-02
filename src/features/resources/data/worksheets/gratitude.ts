import type { Worksheet } from '../types'

export const gratitudeWorksheets: Worksheet[] = [
  {
    id: 'gratitude-deep',
    slug: 'gratitude-deep',
    title: 'Deep Gratitude Practice',
    subtitle: 'Go beneath the surface — that\'s where it actually lands',
    description:
      'Surface-level gratitude ("I\'m grateful for my family") doesn\'t activate the neurological benefit researchers talk about. This practice teaches you to go deep with one thing — specific, vivid, real — and let it actually change how you feel.',
    category: 'gratitude',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    frequency: 'daily',
    therapeuticFramework: ['PP', 'MBSR'],
    tags: ['gratitude', 'depth', 'presence', 'daily', 'neuroscience', 'reflection'],
    icon: '💎',
    color: '#A855F7',
    featured: true,
    version: 1,
    relatedWorksheets: ['awe-wonder-journal', 'gratitude-letter-unsent', 'morning-intention'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Depth Matters',
        content:
          'Research by Robert Emmons and others shows that generic gratitude lists ("I\'m grateful for my health, my family, my home") produce some benefit — but not nearly as much as specific, detailed, vivid gratitude.\n\nWhen you name exactly why something matters, what it took to get there, and what your life would look like without it — something different happens in your brain. The emotional centers engage, not just the language centers. It moves from a thought to a feeling.\n\nFor people in recovery, this matters doubly. Addiction narrows the world down to one thing. Gratitude — real gratitude — is one of the most powerful ways to widen it back open. Not by pretending life is perfect. By choosing to see what\'s actually here.',
      },
      {
        type: 'prompt',
        title: 'Choose One Thing',
        content:
          'Not a list. One thing. It can be a person, a relationship, a capacity you have, something small you almost took for granted today. Let it choose you, rather than you picking the "right" answer.',
        fields: [
          {
            id: 'gratitude-subject',
            type: 'text',
            label: 'What I\'m grateful for:',
            placeholder: 'A specific person, moment, quality, or part of your life...',
            required: true,
          },
          {
            id: 'gratitude-why-specifically',
            type: 'textarea',
            label: 'Why specifically — what does this mean to you?',
            placeholder:
              'Don\'t say "because they\'re important to me." Say exactly what they mean — what they do, what they bring, what your life feels like because of them.',
            required: true,
          },
          {
            id: 'gratitude-life-without',
            type: 'textarea',
            label: 'How would your life be different without this?',
            placeholder:
              'Really try to imagine it. This isn\'t morbid — it\'s contrast, and contrast is what makes gratitude feel real rather than obligatory.',
          },
          {
            id: 'gratitude-what-it-took',
            type: 'textarea',
            label: 'What did it take to get here? What or who made it possible?',
            placeholder:
              'Your own choices, someone else\'s grace, a second chance you were given, a moment you almost walked away. What had to happen for this to exist in your life?',
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'Sensory Anchor',
        content:
          'Now go all the way in. Think of a specific memory involving this person, thing, or experience — a real moment you can picture. Reconstruct it through your senses. The more vivid, the more it lands.',
        fields: [
          {
            id: 'sensory-memory',
            type: 'textarea',
            label: 'Describe a specific memory involving this person/thing/experience using as many senses as possible:',
            placeholder:
              'What did it look like? Sound like? Smell or taste like? What did it feel like in your body — the temperature, the texture, the physical sensation of being there? Let yourself go back.',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Honor It',
        content:
          'Gratitude becomes more than a feeling when it shapes your behavior. What would it look like to actually protect or honor this in your life?',
        fields: [
          {
            id: 'honor-action',
            type: 'text',
            label: 'One way I can protect or honor this in the next 7 days:',
            placeholder:
              'Tell them. Spend time with it. Stop taking it for granted. Do something concrete that shows this matters to you.',
            required: true,
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Carry It',
        content:
          'Hard days will come. When they do, you\'ll need something to reach for. Write a sentence — one you actually believe — that you can read back to yourself when the weight gets heavy.',
        fields: [
          {
            id: 'gratitude-carry-reminder',
            type: 'text',
            label: 'A one-sentence reminder of this gratitude to read on hard days:',
            placeholder:
              'Even on the worst day, I have this. Even when nothing else feels okay, this is real.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'weekly-wins',
    slug: 'weekly-wins',
    title: 'Weekly Wins Tracker',
    subtitle: 'The week is full of evidence you\'re doing it — go find it',
    description:
      'Recovery brain loves to catalog failures and skip over the wins. This weekly tracker is an antidote to that: a deliberate, full-week inventory of what you did right. Every size counts. Including just making it to Saturday.',
    category: 'gratitude',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'weekly',
    therapeuticFramework: ['PP'],
    tags: ['wins', 'progress', 'weekly', 'self-compassion', 'momentum', 'tracking'],
    icon: '🏆',
    color: '#A855F7',
    version: 1,
    relatedWorksheets: ['gratitude-deep', 'nightly-wind-down', 'accountability-mirror'],
    sections: [
      {
        type: 'prompt',
        title: 'The Week in Wins',
        content:
          'Go back through each day of this week and name at least one win per day. A win can be anything: staying sober, making a meeting, having a hard conversation, getting out of bed when you didn\'t want to, doing something kind. Nothing is too small here.',
        fields: [
          {
            id: 'win-monday',
            type: 'text',
            label: 'Monday — Win (any size):',
            placeholder: 'What did you do right on Monday?',
          },
          {
            id: 'win-tuesday',
            type: 'text',
            label: 'Tuesday — Win (any size):',
            placeholder: 'What did you do right on Tuesday?',
          },
          {
            id: 'win-wednesday',
            type: 'text',
            label: 'Wednesday — Win (any size):',
            placeholder: 'What did you do right on Wednesday?',
          },
          {
            id: 'win-thursday',
            type: 'text',
            label: 'Thursday — Win (any size):',
            placeholder: 'What did you do right on Thursday?',
          },
          {
            id: 'win-friday',
            type: 'text',
            label: 'Friday — Win (any size):',
            placeholder: 'What did you do right on Friday?',
          },
          {
            id: 'wins-weekend',
            type: 'textarea',
            label: 'Weekend wins:',
            placeholder: 'Saturday and Sunday — anything from both days, big or small.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Categorize Your Wins',
        content:
          'Looking at your wins across the week — what areas of your life were they in? This helps you see where you\'re showing up, and where you might want to put more energy.',
        fields: [
          {
            id: 'win-categories',
            type: 'multi-select',
            label: 'My wins this week fell into these categories:',
            options: [
              'Recovery commitment',
              'Honesty',
              'Relationship',
              'Self-care',
              'Work/responsibility',
              'Personal growth',
              'Physical health',
              'Other',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Win of the Week',
        content:
          'If you had to name one win above all others this week — the one that mattered most, or cost you the most, or that you\'re most proud of — what would it be?',
        fields: [
          {
            id: 'win-of-week',
            type: 'textarea',
            label: 'My biggest win this week, and why it matters:',
            placeholder:
              'Don\'t just name it. Say why it counts. What would the old version of you have done in that moment? Why does this version matter?',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What It Took',
        content:
          'Wins don\'t happen in a vacuum. They cost something — effort, courage, willingness, showing up when you wanted to hide. Name what it took.',
        fields: [
          {
            id: 'win-cost',
            type: 'textarea',
            label: 'The effort or courage behind my win of the week:',
            placeholder:
              'What did it take? What were you up against? What made this hard, and what made you do it anyway?',
          },
        ],
      },
      {
        type: 'affirmation',
        title: 'Momentum',
        content:
          'Recovery is built in one direction: forward. Even if this week was mostly hard, it ended with you doing this exercise, which means something. What are you carrying into next week?',
        fields: [
          {
            id: 'momentum-carry',
            type: 'text',
            label: 'One win I want to carry into next week:',
            placeholder:
              'The energy of a specific win, a habit you started, a relationship you strengthened — what comes with you?',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'gratitude-letter-unsent',
    slug: 'gratitude-letter-unsent',
    title: 'Gratitude Letter (Unsent)',
    subtitle: 'Writing it is enough — the healing happens in the writing',
    description:
      'Research by Martin Seligman shows that writing a gratitude letter produces significant, lasting improvements in wellbeing — even when you never send it. This worksheet walks you through writing a real letter to someone whose presence has shaped your recovery.',
    category: 'gratitude',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'one-time',
    therapeuticFramework: ['PP', 'narrative'],
    tags: ['gratitude', 'letter', 'relationships', 'healing', 'wellbeing', 'narrative'],
    icon: '✉️',
    color: '#A855F7',
    version: 1,
    relatedWorksheets: ['gratitude-deep', 'inner-child-letter', 'finding-the-gift'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Research Behind This',
        content:
          'In 2005, psychologist Martin Seligman ran an experiment: he asked people to write a detailed letter of gratitude to someone who had shaped their lives in a meaningful way — someone they\'d never properly thanked. Then he measured their wellbeing before, immediately after, and weeks later.\n\nThe results were striking. Writing the gratitude letter produced lasting increases in happiness and decreases in depressive symptoms — and notably, these effects appeared whether or not the person ever sent the letter or delivered it in person.\n\nFor people in recovery, this carries particular weight. Recovery often involves damaged relationships — people who stayed, people who tried, people who held you when you couldn\'t hold yourself. Sometimes you can\'t reach them. Sometimes it\'s too complicated. Sometimes the words just haven\'t come.\n\nYou don\'t have to send this letter. You just have to write it.',
      },
      {
        type: 'prompt',
        title: 'Choose Your Person',
        content:
          'Who are you writing to? This should be someone who genuinely affected your recovery journey — positively. Someone whose presence, action, or belief in you mattered. They don\'t need to know they mattered. They just need to have mattered.',
        fields: [
          {
            id: 'letter-recipient',
            type: 'text',
            label: 'Who am I writing to?',
            placeholder: 'A name, or a description if you prefer to keep it private...',
            required: true,
          },
          {
            id: 'letter-recipient-role',
            type: 'select',
            label: 'Their role in my recovery:',
            options: [
              'Sponsor',
              'Therapist/counselor',
              'Parent',
              'Sibling',
              'Friend',
              'Partner',
              'Stranger who helped',
              'Group member',
              'Other',
            ],
            required: true,
          },
        ],
      },
      {
        type: 'letter',
        title: 'The Letter',
        content:
          'Write your letter below. Start with "Dear [name]" and write as though they are reading it. Don\'t summarize — speak directly. Let it be long or short, but let it be real. You might start with: "I\'m writing to tell you what you mean to my recovery..."',
        fields: [
          {
            id: 'letter-body',
            type: 'textarea',
            label: 'Dear [name], I\'m writing to tell you what you mean to my recovery...',
            placeholder:
              'Write as though they\'re reading it. Tell them what they gave you — presence, patience, belief, time. Let the specific memories come. Don\'t filter for what\'s appropriate or grammatically right. Just say what\'s true.',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Specific Moments',
        content:
          'Often the most healing part is naming the specific thing — the exact moment, the exact thing they said or did, that you\'ve carried with you. What are those moments?',
        fields: [
          {
            id: 'letter-specific-moments',
            type: 'textarea',
            label: 'The specific thing(s) they did that I want them to know about:',
            placeholder:
              'The night they picked up the phone at 2am. The thing they said when I wanted to give up. The way they showed up even when I had given them every reason not to.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What You Gave Me',
        content:
          'Because of this person — what do you have? What are you? What do you believe, that you might not believe without them?',
        fields: [
          {
            id: 'letter-what-given',
            type: 'textarea',
            label: 'Because of you, I have / I am / I believe:',
            placeholder:
              'Finish those sentences. Because of you, I have — [something real in your life]. Because of you, I am — [something about who you\'ve become]. Because of you, I believe — [something about yourself or about people].',
          },
        ],
      },
      {
        type: 'freewrite',
        title: 'Close',
        content:
          'How do you want to end this letter? What do you want this person to know about the difference their presence has made on your path?',
        fields: [
          {
            id: 'letter-close',
            type: 'textarea',
            label: 'What I want you to know about how your presence has changed my path:',
            placeholder:
              'Close the letter however it needs to close. There\'s no right ending — just the honest one.',
          },
        ],
      },
    ],
  },

  {
    id: 'finding-the-gift',
    slug: 'finding-the-gift',
    title: 'Finding the Gift in the Struggle',
    subtitle: 'Not bypassing the pain — walking through it to what\'s on the other side',
    description:
      'Post-traumatic growth research shows that real transformation can emerge from real suffering. This worksheet approaches that territory honestly — starting with the pain before asking about what grew from it.',
    category: 'gratitude',
    difficulty: 'advanced',
    estimatedMinutes: 25,
    frequency: 'as-needed',
    therapeuticFramework: ['PP', 'narrative', 'ACT'],
    tags: ['post-traumatic growth', 'meaning', 'narrative', 'resilience', 'advanced', 'healing'],
    icon: '🎁',
    color: '#A855F7',
    version: 1,
    relatedWorksheets: ['posttraumatic-growth', 'gratitude-deep', 'finding-the-gift'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Important Framing Before You Begin',
        content:
          'This is not toxic positivity. This is not "everything happens for a reason" or "you needed to go through that." Those phrases minimize real suffering, and they\'re not what this worksheet is about.\n\nWhat this worksheet is based on is post-traumatic growth research by Tedeschi and Calhoun — the documented phenomenon of genuine personal transformation that can emerge, not despite suffering, but through the process of wrestling with it. Real transformation. Not a silver lining pasted over a wound.\n\nThe structure matters: we go to the pain first. We name it clearly, without reframing it. Only after that do we look at what might have grown in the wreckage. You cannot get to the gift by skipping the struggle. So we won\'t skip it.\n\nIf you feel overwhelmed at any point, stop. You can come back.',
      },
      {
        type: 'freewrite',
        title: 'The Honest Struggle First',
        content:
          'Before anything else: the pain. Don\'t rush to the lesson. Don\'t try to make it make sense yet. Just name what has actually been hard, painful, or devastating about your addiction and recovery journey.',
        fields: [
          {
            id: 'honest-struggle',
            type: 'textarea',
            label: 'What has been genuinely hard, painful, or devastating about your addiction/recovery? Don\'t skip to the lesson. Just name the pain.',
            placeholder:
              'The things you lost. The people you hurt. The version of yourself you grieve. The time. The years. The relationships. The trust. Be honest here — this is where real growth starts.',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What the Struggle Revealed',
        content:
          'When everything else fell away — when the substances, the roles, the masks came off — what was left? What did you discover about yourself that you might never have found in an easier life?',
        fields: [
          {
            id: 'strengths-revealed',
            type: 'textarea',
            label: 'Strengths you didn\'t know you had until you were tested:',
            placeholder:
              'Not traits you always knew you had. Ones that only showed up when things got hard. Endurance. The ability to ask for help. Capacity for honesty. The refusal to stay down. What does the crucible reveal about you?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What Changed',
        content:
          'Closed doors are real losses. And sometimes, only because they closed, other doors opened. Not because pain is secretly good — but because different paths become visible when the original one disappears.',
        fields: [
          {
            id: 'doors-opened',
            type: 'textarea',
            label: 'Doors that opened because old ones closed, even if painfully:',
            placeholder:
              'Relationships, community, purpose, spirituality, honesty, the ability to connect with others in pain. What exists in your life now that wouldn\'t have had the crisis never happened?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'What You Carry',
        content:
          'There\'s a kind of understanding that only comes from certain kinds of suffering. You carry something now — a knowledge, a compassion, a way of seeing — that people who haven\'t been through this don\'t have.',
        fields: [
          {
            id: 'understanding-carried',
            type: 'textarea',
            label: 'Something you understand about human suffering that people who haven\'t been through this don\'t:',
            placeholder:
              'What do you know, in your bones, about how people end up where they end up? About what it takes to change? About compassion for people at their worst? About how fragile life is and how much it matters?',
          },
        ],
      },
      {
        type: 'letter',
        title: 'For Someone Starting the Path',
        content:
          'Imagine someone at the beginning of the journey you\'ve been on — someone sitting where you once sat. What do you want to tell them? Not a pep talk. The real thing, from where you\'re standing now.',
        fields: [
          {
            id: 'message-to-beginner',
            type: 'textarea',
            label: 'If you could say one thing to someone at the beginning of this journey, knowing what you now know:',
            placeholder:
              'They\'re scared. They don\'t know if change is possible. They\'re not sure they\'re worth it. What do you tell them?',
          },
        ],
      },
    ],
  },

  {
    id: 'gratitude-for-body',
    slug: 'gratitude-for-body',
    title: 'Gratitude for Your Body',
    subtitle: 'An act of repair between you and the body that carried you through',
    description:
      'Many people in recovery have a complicated, even hostile relationship with their body. This practice is about repair — not denial of what the body went through, but a recognition of what it has survived and what it\'s doing right now.',
    category: 'gratitude',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'as-needed',
    therapeuticFramework: ['somatic', 'PP'],
    tags: ['body', 'somatic', 'self-compassion', 'healing', 'gratitude', 'physical'],
    icon: '💚',
    color: '#A855F7',
    version: 1,
    relatedWorksheets: ['body-scan-journal', 'self-compassion-break', 'walking-meditation'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Before You Begin',
        content:
          'If you\'ve spent years feeling at war with your body — ashamed of it, numbing it, driving it past its limits, or hating what it\'s become — this exercise might feel strange or even impossible.\n\nThat\'s okay. You don\'t have to love your body to do this practice. You don\'t have to feel warmth you don\'t feel. What this exercise asks is just this: see what your body has actually done. Despite everything. Your body kept you alive through years of active addiction. It carried you to treatment, to meetings, to this moment. It is healing right now, while you do this exercise.\n\nThis is not denial of what your body has been through or what it\'s been put through. It\'s a recognition — maybe the beginning of one — that your body has been on your side, even when you weren\'t on its.',
      },
      {
        type: 'freewrite',
        title: 'What Your Body Has Survived',
        content:
          'Start here, before the gratitude. Your body has a history. It\'s endured things. Name them honestly — not to punish yourself, but to acknowledge what it\'s actually been through.',
        fields: [
          {
            id: 'body-survived',
            type: 'textarea',
            label: 'Your body has carried you through active addiction and into recovery. What has it endured?',
            placeholder:
              'What did you put it through? What did it absorb? What did it survive that maybe it shouldn\'t have? You don\'t have to soften this — just name it plainly.',
            required: true,
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'What It\'s Doing Right Now',
        content:
          'Right now, without you thinking about it, your body is doing extraordinary things. Walk through each area slowly. Place your attention there for a moment before you write.',
        fields: [
          {
            id: 'body-heart',
            type: 'textarea',
            label: 'Heart — Your heart has beat every second of your life without you thinking about it. What do you notice about your heart right now?',
            placeholder:
              'Can you feel it? Can you sense the rhythm? It\'s been going this whole time — through everything.',
          },
          {
            id: 'body-lungs',
            type: 'textarea',
            label: 'Lungs — Your lungs have been breathing for you, automatically. What do you notice when you actually pay attention?',
            placeholder:
              'Notice the breath coming in. The chest or belly rising. The exhale. It\'s been doing this all day without your help.',
          },
          {
            id: 'body-hands',
            type: 'textarea',
            label: 'Hands — What have your hands done today? What can they do?',
            placeholder:
              'Open, close, hold, touch. They\'ve written, typed, cooked, embraced. What do you notice about your hands right now?',
          },
          {
            id: 'body-feet-legs',
            type: 'textarea',
            label: 'Feet and legs — What have they carried you to this week?',
            placeholder:
              'Where have your legs taken you? What have your feet touched? They have moved you through your life.',
          },
          {
            id: 'body-brain',
            type: 'textarea',
            label: 'Brain — Your brain is actively healing right now. What do you notice when you think about that?',
            placeholder:
              'Research shows the brain physically changes in recovery — new connections form, dopamine receptors recover. Your brain is working to heal itself even as you do this exercise.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Thank You Notes',
        content:
          'Write five specific thank-yous to your body. Not vague ones — specific, like "thank you for still being able to taste food" or "thank you for healing my liver" or "thank you for letting me walk to the ocean again."',
        fields: [
          {
            id: 'body-thanks-1',
            type: 'text',
            label: 'I\'m grateful to my body for:',
            placeholder: 'Be specific — the more concrete, the more it lands...',
          },
          {
            id: 'body-thanks-2',
            type: 'text',
            label: 'I\'m grateful to my body for:',
            placeholder: 'Something it can do, something it survived, something it\'s healing...',
          },
          {
            id: 'body-thanks-3',
            type: 'text',
            label: 'I\'m grateful to my body for:',
            placeholder: 'A sense, a capacity, a recovery — anything real...',
          },
          {
            id: 'body-thanks-4',
            type: 'text',
            label: 'I\'m grateful to my body for:',
            placeholder: 'The more specific the better...',
          },
          {
            id: 'body-thanks-5',
            type: 'text',
            label: 'I\'m grateful to my body for:',
            placeholder: 'One more. Go deeper if you can.',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'One Act of Care',
        content:
          'Gratitude without action is just a thought. What is one thing you\'ll do this week to honor your body\'s healing — something that shows you\'re on its side?',
        fields: [
          {
            id: 'body-care-action',
            type: 'text',
            label: 'One thing I\'ll do this week to honor my body\'s healing:',
            placeholder:
              'Sleep a full night. Eat something nourishing. Move in a way that feels good, not punishing. Drink water. Go outside. Your body will notice.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'awe-wonder-journal',
    slug: 'awe-wonder-journal',
    title: 'Awe & Wonder Journal',
    subtitle: 'Recovery can narrow your world — awe expands it back',
    description:
      'Researcher Dacher Keltner found that experiences of awe reduce self-focused rumination, increase prosocial connection, and improve wellbeing. This five-minute daily practice helps you notice the moments of awe that are already there.',
    category: 'gratitude',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    frequency: 'daily',
    therapeuticFramework: ['PP', 'MBSR'],
    tags: ['awe', 'wonder', 'presence', 'daily', 'micro-practice', 'nature'],
    icon: '✨',
    color: '#A855F7',
    version: 1,
    relatedWorksheets: ['mindful-moment-log', 'gratitude-deep', 'daily-meaning-practice'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'What Awe Does for Recovery',
        content:
          'Dacher Keltner at UC Berkeley has spent years studying awe — the emotion we feel when we encounter something vast that doesn\'t fit our current understanding of the world. Sunsets, music that overwhelms you, the birth of a baby, a starfield, an act of unexpected human kindness.\n\nHis research found something remarkable: awe reliably reduces self-focused thinking (the rumination that drives anxiety, cravings, and shame), increases prosocial behavior, and produces measurable improvements in wellbeing. It literally makes you feel less alone.\n\nAddiction tends to narrow the world to one thing. Awe does the opposite — it opens the frame, zooms out, makes the self feel smaller in the most liberating possible way. You\'re still here. The world is still enormous. Something extraordinary is still happening.\n\nThis log is five minutes. It works better than you\'d expect.',
      },
      {
        type: 'prompt',
        title: 'Today\'s Moment of Awe',
        content:
          'Think back through today, or look around you right now. Awe doesn\'t have to be grand. It can be a piece of music, a child\'s face, light through leaves, someone showing unexpected kindness, a sentence in a book, the ocean, your own body still working.',
        fields: [
          {
            id: 'awe-where-when',
            type: 'text',
            label: 'Where/when:',
            placeholder: 'Where were you, and when did this happen?',
            required: true,
          },
          {
            id: 'awe-what-noticed',
            type: 'textarea',
            label: 'What I noticed:',
            placeholder:
              'Describe it — what were you looking at, listening to, experiencing? Use specific detail.',
            required: true,
          },
          {
            id: 'awe-how-felt',
            type: 'textarea',
            label: 'What it made me feel:',
            placeholder:
              'Not just "good" — what specifically? Expanded? Small in a good way? Like something matters? Like you\'re connected to something larger?',
          },
          {
            id: 'awe-reminded',
            type: 'textarea',
            label: 'What it reminded me of:',
            placeholder:
              'Another moment like this. Something you\'d forgotten. A feeling from before addiction changed things.',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'The Smallness Gift',
        content:
          'One of the most healing aspects of awe is that it makes our problems feel smaller — not unreal, not dismissed, but smaller against a larger backdrop. That\'s not denial. That\'s perspective.',
        fields: [
          {
            id: 'awe-smallness',
            type: 'textarea',
            label: 'When you felt awe, how did your problems feel for a moment?',
            placeholder:
              'Did the craving shrink for a moment? Did the worry feel less total? Did you remember there\'s a world beyond your current struggle?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Cultivating More',
        content:
          'Awe isn\'t something that only happens to you. You can put yourself in its path.',
        fields: [
          {
            id: 'awe-reliable-source',
            type: 'select',
            label: 'Where I find awe most reliably:',
            options: [
              'Nature/outdoors',
              'Music',
              'Art',
              'Human kindness',
              'Science/cosmos',
              'Movement/sport',
              'Creativity',
              'Spirituality',
              'Other',
            ],
            required: true,
          },
          {
            id: 'awe-intention',
            type: 'text',
            label: 'One place I\'ll intentionally look for awe this week:',
            placeholder:
              'Specific: a place, a practice, a piece of music you\'ll actually listen to. Make it real.',
            required: true,
          },
        ],
      },
    ],
  },
]
