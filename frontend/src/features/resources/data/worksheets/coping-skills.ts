import type { Worksheet } from '../types'

export const copingSkillsWorksheets: Worksheet[] = [
  {
    id: 'coping-toolbox',
    slug: 'coping-toolbox',
    title: 'My Coping Toolbox',
    subtitle: 'Build your personal crisis kit before you need it',
    description:
      'A structured inventory of your best physical, emotional, social, and environmental coping tools — organized so you can reach for them fast when it matters most.',
    category: 'coping-skills',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'CBT'],
    tags: ['crisis', 'toolbox', 'self-care', 'planning', 'grounding'],
    icon: '🧰',
    color: '#4F86C6',
    featured: true,
    version: 1,
    relatedWorksheets: ['grounding-54321', 'self-soothing-menu', 'distress-tolerance-plan'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Build a Toolbox Now?',
        content:
          "When you're in crisis — craving hard, emotions flooding, thoughts spiraling — your brain's prefrontal cortex (the part that makes good decisions) goes partially offline. That's not a character flaw; it's neuroscience. The problem is that's exactly when you need to choose a coping skill.\n\nThe solution: build your toolbox now, while your brain is working well. Write it down. Know it by heart. So when the wave hits, you're not inventing a plan from scratch — you're just reaching for a tool you already know works.\n\nThis worksheet walks you through four categories of coping tools. The goal isn't to pick the 'right' ones — it's to build YOUR kit, specific to your life, your body, and your recovery.",
      },
      {
        type: 'checklist',
        title: 'Physical Tools',
        content:
          'Physical coping skills work by giving your nervous system something concrete to do — activating the body to interrupt a mental spiral. Check every option you have used or want to try. Then write about your favorite.',
        fields: [
          {
            id: 'physical-tools-select',
            type: 'multi-select',
            label: 'Physical tools I have used or want to try',
            options: [
              'Deep breathing',
              'Cold water on face',
              'Ice cube in hand',
              'Exercise / walk',
              'Progressive muscle relaxation',
              'Dance it out',
              'Shake / tremor release',
              'Yoga stretch',
              'Other',
            ],
            required: true,
          },
          {
            id: 'physical-tools-goto',
            type: 'textarea',
            label: 'My go-to physical tool and how it works for me',
            placeholder:
              'Describe the tool and what happens in your body when you use it. Be specific — this detail will help you remember to use it.',
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Emotional & Mental Tools',
        content:
          'These tools work through your mind and heart — shifting your attention, processing feelings, or giving meaning to the moment. Check what resonates, then write about your most reliable one.',
        fields: [
          {
            id: 'emotional-tools-select',
            type: 'multi-select',
            label: 'Emotional / mental tools I have used or want to try',
            options: [
              'Journaling',
              'Music',
              'Art / drawing',
              'Reading',
              'Meditation',
              'Prayer',
              'Positive self-talk',
              'Distraction',
              'Humor',
              'Crying it out',
              'Other',
            ],
            required: true,
          },
          {
            id: 'emotional-tools-best',
            type: 'textarea',
            label: 'The emotional tool that works best for me',
            placeholder:
              'What do you reach for? What does it feel like when it works? What conditions help it work best?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Social Tools',
        content:
          "Connection is one of the most powerful antidotes to craving and emotional pain. But in crisis, we often isolate instead. Having specific people and numbers written down — not just 'call someone' — makes it real.",
        fields: [
          {
            id: 'social-person-1',
            type: 'text',
            label: 'Person 1 I can call anytime (name + number if helpful)',
            placeholder: 'Name and how to reach them',
            required: true,
          },
          {
            id: 'social-person-2',
            type: 'text',
            label: 'Person 2 I can call anytime',
            placeholder: 'Name and how to reach them',
          },
          {
            id: 'social-crisis-line',
            type: 'text',
            label: 'A crisis or support line I trust',
            placeholder: 'e.g., SAMHSA 1-800-662-4357, local helpline, sponsor hotline',
          },
          {
            id: 'social-home-group',
            type: 'checkbox',
            label: 'I have a home group or meeting I can drop into when I need support',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Safe Places',
        content:
          'Sometimes the most powerful coping tool is a place — physical or imagined. A safe place activates calm in the nervous system. Having both options means you have access anywhere.',
        fields: [
          {
            id: 'safe-place-physical',
            type: 'textarea',
            label: 'A physical place where I feel safe',
            placeholder:
              'Where is it? What does it look, sound, smell like? Why does it feel safe?',
          },
          {
            id: 'safe-place-mental',
            type: 'textarea',
            label: 'A mental or imaginary place I can go to in my mind',
            placeholder:
              'Describe this place in rich sensory detail. The more specific, the more effective it is as a grounding anchor.',
          },
        ],
      },
      {
        type: 'scale',
        title: 'Rate Your Toolkit',
        content:
          "Be honest with yourself here. A toolkit with gaps isn't a failure — it's information. What you notice now, you can strengthen.",
        fields: [
          {
            id: 'toolkit-confidence',
            type: 'slider',
            label: 'How confident am I in my toolkit right now?',
            min: 1,
            max: 10,
            required: true,
          },
          {
            id: 'toolkit-gaps',
            type: 'textarea',
            label: "What's missing or needs strengthening in my toolkit?",
            placeholder:
              'Are there gaps? Things you listed but have never actually tried? Areas of your life not covered?',
          },
        ],
      },
    ],
  },

  {
    id: 'grounding-54321',
    slug: 'grounding-54321',
    title: '5-4-3-2-1 Grounding',
    subtitle: 'Anchor yourself to the present moment using your five senses',
    description:
      'A simple, research-backed grounding technique that interrupts anxiety, craving, and dissociation by deliberately activating each of the five senses. Can be done in under five minutes anywhere.',
    category: 'coping-skills',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'MBSR'],
    tags: ['grounding', 'anxiety', 'craving', 'senses', 'present-moment', 'quick'],
    icon: '🖐️',
    color: '#5BAD8F',
    featured: true,
    version: 1,
    relatedWorksheets: ['coping-toolbox', 'breathing-pattern-library', 'stop-skill'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'How Grounding Works',
        content:
          "When anxiety, craving, or emotional flooding hits, your brain is pulled out of the present — into a feared future, a painful past, or a craving fantasy. Grounding works by doing the opposite: it deliberately anchors you to what is real and happening right now, through your senses.\n\nThe 5-4-3-2-1 technique interrupts the spiral by forcing your attention through each sense channel one at a time. This isn't distraction — it's redirection toward reality. Your brain literally can't be fully in craving mode while it's actively processing sensory input from the present moment.\n\nYou can do this anywhere: on a bus, in a parking lot, in a bathroom stall before a family event. The more you practice it when you're calm, the faster it works when you're not.",
      },
      {
        type: 'prompt',
        title: 'The Practice — Right Now',
        content:
          'Work through each sense slowly. Take your time. Be specific and descriptive — vague answers are less effective. You are training your attention, not just filling in blanks.',
        fields: [
          {
            id: 'five-things-see',
            type: 'textarea',
            label: '5 things you can SEE right now',
            placeholder:
              'Describe them specifically — color, shape, texture, light. Not just "a chair" but "a blue chair with a worn armrest."',
            required: true,
          },
          {
            id: 'four-things-touch',
            type: 'textarea',
            label: '4 things you can TOUCH or feel physically right now',
            placeholder:
              'What textures, temperatures, pressures do you feel? Clothes on skin, floor under feet, air on your hands.',
            required: true,
          },
          {
            id: 'three-things-hear',
            type: 'textarea',
            label: '3 things you can HEAR right now',
            placeholder:
              'Listen carefully. Background sounds you normally filter out. HVAC, distant traffic, your own breath.',
            required: true,
          },
          {
            id: 'two-things-smell',
            type: 'textarea',
            label: '2 things you can SMELL — or imagine a scent you love',
            placeholder:
              "What's in the air around you? If you can't identify anything, bring a scent to mind that you associate with safety or comfort.",
            required: true,
          },
          {
            id: 'one-thing-taste',
            type: 'textarea',
            label: '1 thing you can TASTE — or a flavor you love',
            placeholder:
              'What do you currently taste? Or close your eyes and bring the most comforting flavor you know to mind.',
            required: true,
          },
        ],
      },
      {
        type: 'scale',
        title: 'Body Check',
        content:
          "Rate your distress level before and after. This isn't about grading your performance — it's data. Over time you'll see what works and how fast.",
        fields: [
          {
            id: 'distress-before',
            type: 'slider',
            label: 'Distress level BEFORE the exercise',
            min: 1,
            max: 10,
          },
          {
            id: 'distress-after',
            type: 'slider',
            label: 'Distress level AFTER the exercise',
            min: 1,
            max: 10,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Your Personal Anchors',
        content:
          "Over time you'll discover that certain sensory inputs reliably pull you back into your body. Mapping these now means you can reach for your most powerful anchors first.",
        fields: [
          {
            id: 'anchors-touch',
            type: 'textarea',
            label: 'My most reliable grounding objects or textures',
            placeholder:
              'What specific things feel most grounding to touch or hold? A smooth stone, a specific fabric, cold metal?',
          },
          {
            id: 'anchors-sound',
            type: 'textarea',
            label: 'Sounds that reliably ground me',
            placeholder:
              'A specific song, rain, a certain voice, nature sounds — what pulls you back when you hear it?',
          },
          {
            id: 'anchors-scent',
            type: 'textarea',
            label: 'Scents that calm me',
            placeholder:
              'Smell is the fastest sense pathway to the emotional brain. What scents shift your state?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Your Pocket Version',
        content:
          "Write a one-sentence version of this technique in your own words — something you could whisper to yourself in the middle of a hard moment. It doesn't have to be perfect. It has to be yours.",
        fields: [
          {
            id: 'pocket-version',
            type: 'text',
            label: 'My one-sentence personal version of this technique',
            placeholder: 'e.g., "5 things I can see, 4 I can touch..." or whatever clicks for you',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'distress-tolerance-plan',
    slug: 'distress-tolerance-plan',
    title: 'Distress Tolerance Plan',
    subtitle: 'Build your DBT TIPP skills before you need them',
    description:
      'A deep dive into DBT\'s most powerful biological distress tolerance techniques — Temperature, Intense exercise, Paced breathing, and Progressive relaxation — with a personalized crisis sequence you build in advance.',
    category: 'coping-skills',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    frequency: 'one-time',
    therapeuticFramework: ['DBT'],
    tags: ['DBT', 'TIPP', 'crisis', 'distress', 'biological', 'nervous-system'],
    icon: '🌊',
    color: '#7B68EE',
    version: 1,
    relatedWorksheets: ['coping-toolbox', 'breathing-pattern-library', 'body-based-coping-map'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Understanding TIPP Skills',
        content:
          "TIPP is a set of four DBT skills that work directly on your body chemistry to rapidly reduce overwhelming emotion. When distress is at its peak — 8, 9, or 10 out of 10 — your thinking brain is too flooded to use cognitive strategies. TIPP bypasses thought entirely and works at the biological level.\n\n**T — Temperature:** Cold activates the mammalian dive reflex, rapidly slowing heart rate and nervous system activation. Cold water on the face or an ice cube in the hand can bring down physiological arousal within 30 seconds.\n\n**I — Intense Exercise:** Vigorous physical activity burns through the adrenaline and cortisol flooding your system. Even 5 minutes of intense movement can shift your physiological state.\n\n**P — Paced Breathing:** Slowing your exhale longer than your inhale activates the parasympathetic nervous system — your biological 'brake.' You can reliably shift out of fight-or-flight through breath.\n\n**P — Progressive Muscle Relaxation:** Deliberately tensing and releasing muscle groups releases held tension and signals safety to the nervous system.\n\nThe key: TIPP works best when you've practiced it before crisis. This worksheet is your practice.",
      },
      {
        type: 'reflection',
        title: 'Temperature',
        content:
          "Cold water and ice are some of the fastest-acting biological interventions for acute distress. The mammalian dive reflex — triggered when cold water hits the face — directly activates the vagus nerve and can reduce heart rate in under 30 seconds. This is science, not wishful thinking.",
        fields: [
          {
            id: 'temperature-experience',
            type: 'textarea',
            label: 'What cold water or ice feels like for me — and how I will use it in a crisis',
            placeholder:
              'Have you tried this? What did you notice? Where will you get cold water in your home, car, or workplace when you need it fast?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Intense Exercise',
        content:
          "The goal isn't to get fit — it's to burn through the adrenaline in your system right now. Running stairs, jumping jacks, sprinting in place, push-ups to failure — anything that gets your heart rate up fast for 2–5 minutes.",
        fields: [
          {
            id: 'exercise-goto',
            type: 'text',
            label: 'My go-to intense movement option in a crisis',
            placeholder: 'e.g., 50 jumping jacks, sprint to end of block and back, push-ups, stairs',
            required: true,
          },
          {
            id: 'exercise-availability',
            type: 'slider',
            label: 'How available is this to me in most crisis situations?',
            min: 1,
            max: 5,
          },
        ],
      },
      {
        type: 'instruction',
        title: 'Paced Breathing',
        content:
          "The 4-7-8 technique is one of the most researched paced breathing methods for rapid nervous system regulation:\n\n1. Exhale completely through your mouth.\n2. Close your mouth and inhale quietly through your nose for **4 counts**.\n3. Hold your breath for **7 counts**.\n4. Exhale completely through your mouth for **8 counts**.\n5. Repeat 3–4 cycles.\n\nThe extended exhale is the key. Your exhale activates the parasympathetic nervous system (the calming branch). The longer your exhale relative to your inhale, the stronger the calming effect. You don't have to count exactly — the ratio matters more than precision.",
        fields: [
          {
            id: 'breathing-experience',
            type: 'textarea',
            label: 'My breathing pattern and what I notice when I use it',
            placeholder:
              'Try 4-7-8 right now if you can. What did you notice? Where did you feel it? What happens to your shoulders, jaw, chest?',
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'Progressive Relaxation',
        content:
          "Progressive muscle relaxation (PMR) works by tensing each muscle group deliberately for 5–10 seconds, then releasing completely. The contrast between tension and release is what creates the relaxation response.\n\nMove from feet to head: feet → calves → thighs → stomach → hands → arms → shoulders → face. Or reverse. It doesn't matter as long as you're deliberate.\n\nWith practice, you can do a rapid version in 2 minutes. The goal is to teach your body to recognize what it feels like to release — so you can call that up when you need it.",
        fields: [
          {
            id: 'tension-location',
            type: 'textarea',
            label: 'Where I hold the most tension in my body',
            placeholder:
              'Most people have 2–3 habitual tension spots. Jaw, shoulders, stomach, fists. Where does stress live in your body?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'My Personal Crisis Sequence',
        content:
          "Write your own step-by-step plan. When distress is high, you will not think creatively. You'll follow what you wrote here. Make it specific, make it real, make it yours.",
        fields: [
          {
            id: 'crisis-step-1',
            type: 'textarea',
            label: 'Step 1 — What I do first when distress hits',
            placeholder: 'e.g., Splash cold water on my face for 30 seconds',
            required: true,
          },
          {
            id: 'crisis-step-2',
            type: 'textarea',
            label: 'Step 2 — What I do next',
            placeholder: 'e.g., 50 jumping jacks or run to the mailbox and back',
          },
          {
            id: 'crisis-step-3',
            type: 'textarea',
            label: 'Step 3 — If the first two aren\'t enough',
            placeholder: 'e.g., 4-7-8 breathing for 4 cycles on the floor',
          },
          {
            id: 'crisis-call-human',
            type: 'textarea',
            label: 'When to call a human instead',
            placeholder:
              "What's the signal that tells you this is beyond a solo coping moment? Who do you call? What's their number?",
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Practice Commitment',
        content:
          "TIPP skills require practice to work under pressure. The brain must learn them in a calm state to retrieve them in a crisis state. Committing to a practice date is a concrete act of self-care.",
        fields: [
          {
            id: 'practice-commitment',
            type: 'checkbox',
            label: 'I commit to practicing these skills BEFORE I need them — not just reading about them',
          },
          {
            id: 'practice-date',
            type: 'date',
            label: 'My next scheduled TIPP practice date',
          },
        ],
      },
    ],
  },

  {
    id: 'emotion-naming-dictionary',
    slug: 'emotion-naming-dictionary',
    title: 'Emotion Naming Dictionary',
    subtitle: 'Expand your emotional vocabulary and find the right words',
    description:
      "Many people in early recovery operate with a narrow emotional vocabulary: good, bad, fine, or angry. This worksheet builds precision — because the word you choose for your feeling shapes how you relate to it and what you do with it.",
    category: 'coping-skills',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT', 'CBT'],
    tags: ['emotions', 'vocabulary', 'self-awareness', 'body', 'feelings'],
    icon: '📖',
    color: '#E8956D',
    version: 1,
    relatedWorksheets: ['opposite-action-playbook', 'body-based-coping-map', 'coping-toolbox'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Why Naming Emotions Matters',
        content:
          "Research by neuroscientist Matthew Lieberman at UCLA found that labeling an emotion — putting it into words — actually reduces its intensity in the brain. The act of naming activates the prefrontal cortex (thinking brain) and dampens the amygdala (alarm brain). This is sometimes called 'affect labeling.'\n\nMany people in early recovery have a limited emotional vocabulary, often because substances were used to avoid feeling in the first place. Common defaults: good, bad, fine, stressed, angry. The problem is these words are imprecise — and imprecision means you can't respond effectively.\n\n'Angry' is a category. Inside it might live: resentment, irritation, fury, jealousy, betrayal, contempt, humiliation, or powerlessness. Each of these needs a different response. This worksheet helps you find the right word — and what it feels like in your body.",
      },
      {
        type: 'scale',
        title: 'Where Are You Right Now?',
        content:
          'Rate each of the six core emotions as they exist in you right now. This is not a quiz with right answers. It is a snapshot.',
        fields: [
          {
            id: 'emotion-anger-level',
            type: 'slider',
            label: 'Anger — how much is present right now?',
            min: 0,
            max: 10,
          },
          {
            id: 'emotion-sadness-level',
            type: 'slider',
            label: 'Sadness — how much is present right now?',
            min: 0,
            max: 10,
          },
          {
            id: 'emotion-fear-level',
            type: 'slider',
            label: 'Fear — how much is present right now?',
            min: 0,
            max: 10,
          },
          {
            id: 'emotion-joy-level',
            type: 'slider',
            label: 'Joy — how much is present right now?',
            min: 0,
            max: 10,
          },
          {
            id: 'emotion-disgust-level',
            type: 'slider',
            label: 'Disgust — how much is present right now?',
            min: 0,
            max: 10,
          },
          {
            id: 'emotion-shame-level',
            type: 'slider',
            label: 'Shame — how much is present right now?',
            min: 0,
            max: 10,
          },
          {
            id: 'emotion-body-location',
            type: 'textarea',
            label:
              'For any emotion you rated above 5: where do you feel it in your body? Be specific.',
            placeholder:
              "e.g., 'The anger is in my chest — tight, hot, right behind my sternum.' Or 'Fear sits in my stomach, hollow, with shallow breathing.'",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Drilling Deeper',
        content:
          "Start with the word you usually use — then find what's underneath. Precision is power.",
        fields: [
          {
            id: 'emotion-usual-word',
            type: 'select',
            label: 'The word I usually use for a difficult feeling',
            options: ['Angry', 'Sad', 'Scared', 'Good', 'Bad', 'Fine', 'Stressed'],
          },
          {
            id: 'emotion-specific-words',
            type: 'multi-select',
            label: 'More specific words that might actually fit better',
            options: [
              'Betrayed',
              'Powerless',
              'Frustrated',
              'Jealous',
              'Resentful',
              'Lonely',
              'Grieving',
              'Hopeless',
              'Anxious',
              'Terrified',
              'Ashamed',
              'Guilty',
              'Disgusted',
              'Contemptuous',
              'Joyful',
              'Content',
              'Excited',
              'Proud',
              'Grateful',
              'Hopeful',
            ],
          },
        ],
      },
      {
        type: 'body-scan',
        title: 'Emotion-Body Map',
        content:
          "Your body often knows what you're feeling before your mind names it. Mapping these patterns gives you early warning access — you notice the body signal first and use it to identify the emotion.",
        fields: [
          {
            id: 'body-anxiety-map',
            type: 'textarea',
            label: 'When I am anxious, I notice this in my body:',
            placeholder:
              'e.g., Tight chest, shallow breathing, restless legs, clenched jaw, butterfly sensation in stomach',
          },
          {
            id: 'body-anger-map',
            type: 'textarea',
            label: 'When I am angry, I notice this in my body:',
            placeholder:
              'e.g., Heat in face/chest, clenched fists, increased heart rate, tightness behind eyes',
          },
          {
            id: 'emotion-confusion',
            type: 'textarea',
            label: 'The emotion I most often confuse with another emotion is:',
            placeholder:
              "e.g., 'I often confuse anxiety and excitement — they feel identical in my body until I look at the context.' Or 'I call everything anger but a lot of it is actually shame.'",
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Your Personal Emotion Dictionary',
        content:
          "This is a living document. Return to it when you notice yourself using vague words. Each entry trains your brain to name things more accurately — which means you can respond more skillfully.",
        fields: [
          {
            id: 'emotion-word-1',
            type: 'text',
            label: 'A new emotion word I want to use more often',
            placeholder: 'e.g., Resentful, Melancholy, Overwhelmed, Wistful',
          },
          {
            id: 'emotion-word-1-body',
            type: 'text',
            label: 'Where I feel this emotion in my body',
            placeholder: 'e.g., Tight chest, pit in stomach, tension in shoulders',
          },
          {
            id: 'emotion-word-2',
            type: 'text',
            label: 'Another new emotion word',
            placeholder: 'A second word that\'s more precise than your usual defaults',
          },
          {
            id: 'emotion-word-2-body',
            type: 'text',
            label: 'Where I feel this in my body',
            placeholder: 'Body location and physical sensation',
          },
          {
            id: 'emotion-word-3',
            type: 'text',
            label: 'A third emotion word I am learning to recognize',
            placeholder: 'Especially one that might have been confused with something else before',
          },
          {
            id: 'emotion-word-3-intensity',
            type: 'text',
            label: 'How intense does this emotion usually feel and what triggers it?',
            placeholder: 'Context and typical intensity level',
          },
        ],
      },
    ],
  },

  {
    id: 'opposite-action-playbook',
    slug: 'opposite-action-playbook',
    title: 'Opposite Action Playbook',
    subtitle: 'Break the cycle — do the opposite of what the emotion demands',
    description:
      "DBT's opposite action skill: emotions push us toward specific behaviors, and those behaviors often make things worse. This worksheet maps your personal emotion-behavior patterns and builds a playbook for breaking each cycle.",
    category: 'coping-skills',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'one-time',
    therapeuticFramework: ['DBT'],
    tags: ['DBT', 'opposite-action', 'emotions', 'behavior', 'patterns', 'regulation'],
    icon: '🔄',
    color: '#C0624A',
    version: 1,
    relatedWorksheets: ['emotion-naming-dictionary', 'coping-toolbox', 'stop-skill'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'How Opposite Action Works',
        content:
          "Every emotion carries an action urge — a behavior it pushes you toward. Shame says hide. Anger says attack. Fear says run. Loneliness says isolate or use. These urges make evolutionary sense, but in modern life — and especially in recovery — they often make things dramatically worse.\n\nDBT's opposite action skill is simple in concept: identify what your emotion is urging you to do, then do the opposite. Not to suppress the emotion, but to change the emotional state by changing the action.\n\nThe research is clear: emotions are maintained by their associated behaviors. When you act opposite to the action urge — fully, not half-heartedly — the emotion starts to shift. This doesn't mean ignoring what the emotion is telling you. It means not being ruled by it.\n\nThe key phrase: 'All the way.' Opposite action only works when done completely. A half-hearted attempt maintains the emotion.",
      },
      {
        type: 'matrix',
        title: 'Map Your Impulses',
        content:
          "Work through up to five emotion-behavior pairs that are relevant to your recovery. Be honest — these are the patterns that have caused the most damage and offer the most opportunity.",
        fields: [
          {
            id: 'impulse-1-emotion',
            type: 'select',
            label: 'Emotion 1',
            options: ['Shame', 'Anger', 'Sadness', 'Fear', 'Guilt', 'Loneliness', 'Boredom'],
          },
          {
            id: 'impulse-1-destructive',
            type: 'textarea',
            label: 'Destructive behavior this emotion pushes me toward',
            placeholder: 'Be specific and honest. What does this emotion make you want to do?',
          },
          {
            id: 'impulse-1-opposite',
            type: 'textarea',
            label: 'The opposite action',
            placeholder:
              "What is the direct behavioral opposite? e.g., shame → reach out instead of hide; anger → gentle/avoid instead of attack; loneliness → call someone instead of isolate/use",
          },
          {
            id: 'impulse-1-practice',
            type: 'textarea',
            label: 'How I will practice this',
            placeholder:
              'Specific and concrete. When will you do it? With whom? What does "all the way" look like for this one?',
          },
          {
            id: 'impulse-2-emotion',
            type: 'select',
            label: 'Emotion 2',
            options: ['Shame', 'Anger', 'Sadness', 'Fear', 'Guilt', 'Loneliness', 'Boredom'],
          },
          {
            id: 'impulse-2-destructive',
            type: 'textarea',
            label: 'Destructive behavior this emotion pushes me toward',
            placeholder: 'Be specific and honest.',
          },
          {
            id: 'impulse-2-opposite',
            type: 'textarea',
            label: 'The opposite action',
            placeholder: 'Direct behavioral opposite.',
          },
          {
            id: 'impulse-2-practice',
            type: 'textarea',
            label: 'How I will practice this',
            placeholder: 'Specific and concrete.',
          },
          {
            id: 'impulse-3-emotion',
            type: 'select',
            label: 'Emotion 3',
            options: ['Shame', 'Anger', 'Sadness', 'Fear', 'Guilt', 'Loneliness', 'Boredom'],
          },
          {
            id: 'impulse-3-destructive',
            type: 'textarea',
            label: 'Destructive behavior this emotion pushes me toward',
            placeholder: 'Be specific and honest.',
          },
          {
            id: 'impulse-3-opposite',
            type: 'textarea',
            label: 'The opposite action',
            placeholder: 'Direct behavioral opposite.',
          },
          {
            id: 'impulse-3-practice',
            type: 'textarea',
            label: 'How I will practice this',
            placeholder: 'Specific and concrete.',
          },
        ],
      },
      {
        type: 'ranking',
        title: 'Your Top 3 Patterns',
        content:
          "Of everything you mapped above, which three emotion-behavior patterns are most relevant to your recovery — the ones where breaking the cycle could make the biggest difference?",
        fields: [
          {
            id: 'top-pattern-1',
            type: 'textarea',
            label: '#1 Most important opposite action for my recovery',
            placeholder:
              'Describe the emotion, the old pattern, and what opposite action looks like. Why is this one #1?',
            required: true,
          },
          {
            id: 'top-pattern-2',
            type: 'textarea',
            label: '#2',
            placeholder: 'Second most important pattern and its opposite action.',
          },
          {
            id: 'top-pattern-3',
            type: 'textarea',
            label: '#3',
            placeholder: 'Third most important pattern and its opposite action.',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'This Week\'s Practice Plan',
        content:
          "Pick one. Just one. Make it specific enough that you'll actually do it.",
        fields: [
          {
            id: 'practice-trigger',
            type: 'text',
            label: "I'll practice opposite action this week when I notice:",
            placeholder:
              'A specific emotion, situation, or body signal that will cue you to use the skill',
            required: true,
          },
          {
            id: 'practice-action',
            type: 'text',
            label: 'My specific opposite action will be:',
            placeholder: 'Concrete, observable behavior — not "be less angry" but "go for a walk and text my sponsor"',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Real Life Evidence',
        content:
          "You may have used opposite action without having a name for it. Remembering that it worked before builds confidence in it working again.",
        fields: [
          {
            id: 'opposite-action-evidence',
            type: 'textarea',
            label:
              'Describe a time I successfully did the opposite of what my emotion was telling me to do',
            placeholder:
              "It doesn't have to be dramatic. Even a small example counts. What did you do? What happened? What shifted in how you felt afterward?",
          },
        ],
      },
    ],
  },

  {
    id: 'self-soothing-menu',
    slug: 'self-soothing-menu',
    title: 'Self-Soothing Menu',
    subtitle: 'Activate your nervous system\'s calm through all five senses',
    description:
      'Build a full sensory menu of self-soothing activities that activate the parasympathetic nervous system. Having this list before crisis means you can reach for comfort instead of substances.',
    category: 'coping-skills',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    frequency: 'one-time',
    therapeuticFramework: ['DBT', 'somatic'],
    tags: ['self-soothing', 'senses', 'nervous-system', 'comfort', 'crisis', 'parasympathetic'],
    icon: '🌿',
    color: '#68B89A',
    version: 1,
    relatedWorksheets: ['coping-toolbox', 'body-based-coping-map', 'breathing-pattern-library'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Science of Self-Soothing',
        content:
          "Self-soothing is not weakness or avoidance — it is a deliberate activation of your body's own calming system. The parasympathetic nervous system (sometimes called 'rest and digest') exists in counterbalance to the stress response. You can intentionally activate it.\n\nSensory input is one of the fastest pathways to the parasympathetic system. Warmth, certain textures, specific sounds, familiar scents — all of these send direct signals to the nervous system that say 'you are safe, you can relax.'\n\nSubstances hijack this system. Part of recovery is reclaiming it. Building a detailed, personal self-soothing menu — across all five senses — gives you reliable, healthy access to calm whenever you need it.\n\nBuild this list when you're calm. Use it when you're not.",
      },
      {
        type: 'checklist',
        title: 'Soothing by Sense',
        content:
          'Check everything that has worked or might work for you across each sense. Then note your favorites.',
        fields: [
          {
            id: 'soothe-touch-options',
            type: 'multi-select',
            label: 'TOUCH — what soothes me physically',
            options: [
              'Soft blanket or weighted blanket',
              'Warm bath or shower',
              'Pet an animal',
              'Hug someone I trust',
              'Cold compress on forehead or wrists',
              'Essential oil on hands',
              'Lotion or self-massage',
              'Other',
            ],
          },
          {
            id: 'soothe-touch-favorites',
            type: 'textarea',
            label: 'My favorite touch-based soothing tools',
            placeholder: 'What feels most calming? What have you used that actually shifted your state?',
          },
          {
            id: 'soothe-sound-options',
            type: 'multi-select',
            label: 'SOUND — what soothes me auditorily',
            options: [
              'Music that calms me',
              'Nature sounds',
              'White noise or rain',
              'A podcast I love',
              'Silence',
              'Prayer or chant',
              'Other',
            ],
          },
          {
            id: 'soothe-sound-favorites',
            type: 'textarea',
            label: 'My favorite sound-based soothing tools',
            placeholder: 'Specific songs, playlists, sounds, or environments that work for you',
          },
          {
            id: 'soothe-sight-options',
            type: 'multi-select',
            label: 'SIGHT — what soothes me visually',
            options: [
              'Candle or fire',
              'Being in nature',
              'Stars or sky',
              'Art I love',
              'A comforting movie or show',
              'Reading',
              'Other',
            ],
          },
          {
            id: 'soothe-sight-favorites',
            type: 'textarea',
            label: 'My favorite sight-based soothing tools',
            placeholder: 'What do you look at or watch that reliably calms you?',
          },
          {
            id: 'soothe-taste-options',
            type: 'multi-select',
            label: 'TASTE — what soothes me through flavor',
            options: [
              'Herbal tea',
              'Something sweet',
              'Cold water or sparkling water',
              'A favorite comfort food',
              'Mint or gum',
              'Other',
            ],
          },
          {
            id: 'soothe-taste-favorites',
            type: 'textarea',
            label: 'My favorite taste-based soothing tools',
            placeholder: 'What specific foods or drinks feel like comfort and care?',
          },
          {
            id: 'soothe-smell-options',
            type: 'multi-select',
            label: 'SMELL — what soothes me through scent',
            options: [
              'Essential oil (lavender, eucalyptus, etc.)',
              'Scented candle',
              'Being outdoors',
              'Baking or cooking smells',
              'Coffee',
              'A familiar comforting scent',
              'Other',
            ],
          },
          {
            id: 'soothe-smell-favorites',
            type: 'textarea',
            label: 'My favorite scent-based soothing tools',
            placeholder:
              'Smell is the most direct sense pathway to memory and emotion. What scents feel like home or safety?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Zero-Cost Options',
        content:
          "Crisis doesn't schedule around paydays. Your best options should be free.",
        fields: [
          {
            id: 'soothe-free-options',
            type: 'textarea',
            label: 'My top 3 self-soothing tools that cost nothing',
            placeholder:
              'Deep breathing, a walk outside, a specific song on your phone, calling a friend — what is free and available right now?',
            required: true,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Emergency Option',
        content:
          "If you could only do one thing — right now, immediately, no preparation — what would it be? This is your emergency soothing response.",
        fields: [
          {
            id: 'soothe-emergency-one',
            type: 'text',
            label: 'If I could only do ONE self-soothing thing right now, it would be:',
            placeholder: 'Keep it simple. Make it achievable. Make it yours.',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'thought-defusion',
    slug: 'thought-defusion',
    title: 'Thought Defusion Techniques',
    subtitle: 'Step back from your thoughts — you are not what you think',
    description:
      "ACT's thought defusion: learn to observe your thoughts as mental events rather than facts. This worksheet introduces four defusion techniques and builds your ability to hold difficult thoughts without being controlled by them.",
    category: 'coping-skills',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'as-needed',
    therapeuticFramework: ['ACT'],
    tags: ['ACT', 'defusion', 'thoughts', 'mindfulness', 'cognitive', 'self-compassion'],
    icon: '🍃',
    color: '#8DB87B',
    version: 1,
    relatedWorksheets: ['stop-skill', 'grounding-54321', 'emotion-naming-dictionary'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The Difference Between Fusion and Defusion',
        content:
          "In Acceptance and Commitment Therapy (ACT), 'cognitive fusion' means being tangled up in your thoughts — treating them as absolute truth, as reality itself. When you're fused with a thought, it controls your behavior. 'I don't deserve recovery' isn't a thought you're having; it IS your reality.\n\nDefusion is the ability to step back and see thoughts as mental events — temporary, changeable, not necessarily true. The thought is still there, but you're watching it instead of being it.\n\nThis matters enormously in recovery. The thought 'just one won't hurt' has power when you're fused with it. It loses much of that power when you can observe it: 'I notice my mind is offering me the thought that just one won't hurt. I've heard that one before.'\n\nYou cannot always stop your thoughts. You CAN change your relationship to them.",
      },
      {
        type: 'reflection',
        title: 'Identify a Fused Thought',
        content:
          "Start by naming a thought you tend to treat as absolute truth. Something that shows up repeatedly and controls behavior when it arrives. Be specific.",
        fields: [
          {
            id: 'fused-thought',
            type: 'textarea',
            label: 'A thought I frequently have that I tend to treat as absolute truth',
            placeholder:
              "e.g., 'I am fundamentally broken.' 'I don't deserve this.' 'I'll always relapse eventually.' 'People only tolerate me, they don't actually care.'",
            required: true,
          },
        ],
      },
      {
        type: 'instruction',
        title: 'Four Defusion Techniques',
        content:
          "Try each of these with the thought you identified above. You're not trying to eliminate the thought — you're practicing seeing it differently.\n\n**Technique 1: 'I notice I'm having the thought that...'**\nPrefix the thought with this phrase. Out loud if possible. 'I notice I'm having the thought that I don't deserve recovery.'\n\n**Technique 2: 'My mind is telling me that...'**\nPersonify the thought as your mind generating content. 'My mind is telling me I'll always relapse.' Your mind is doing its thing. You can observe that.\n\n**Technique 3: 'There's that [name] thought again'**\nGive the thought a nickname. 'There's the broken record again.' 'There's the catastrophizer.' Naming it creates distance.\n\n**Technique 4: Silly voice**\nSay the thought in a cartoon voice, or sing it to a silly melody. This sounds ridiculous. It works remarkably well at breaking the spell of a fused thought.",
        fields: [
          {
            id: 'defusion-technique-1',
            type: 'textarea',
            label: 'Using Technique 1: Rewrite your fused thought starting with "I notice I\'m having the thought that..."',
            placeholder: 'Write it out fully. Then notice: does it feel different?',
          },
          {
            id: 'defusion-technique-3',
            type: 'text',
            label: 'Using Technique 3: The nickname I\'ll give this thought',
            placeholder: 'e.g., "The Doom Tape," "The Shame Loop," "Old Reliable Lie"',
          },
        ],
      },
      {
        type: 'visualization',
        title: 'Leaves on a Stream',
        content:
          "Close your eyes if it feels safe. Imagine yourself sitting beside a gently flowing stream. Leaves float past on the surface of the water.\n\nFor the next minute or two, place each thought that comes to mind onto a leaf and watch it float downstream. You're not trying to stop the thoughts. You're not trying to hold them either. Each thought — including distracting thoughts, thoughts about the exercise, thoughts about recovery — goes on a leaf and floats away.\n\nWhen you notice you've gotten pulled into a thought instead of observing it, gently return to the riverbank. This is the practice. Not doing it perfectly — returning when you drift.",
        fields: [
          {
            id: 'leaves-visualization-experience',
            type: 'textarea',
            label: 'After the visualization: describe what you noticed',
            placeholder:
              'What kinds of thoughts came up? What happened when you tried to put them on leaves? Did it get easier? What surprised you?',
          },
        ],
      },
      {
        type: 'checklist',
        title: 'Thought Labeling Practice',
        content:
          "For the next few minutes, notice what kinds of thoughts are showing up. Categorize them. You don't need to engage with their content — just label the type.",
        fields: [
          {
            id: 'thought-types-noticed',
            type: 'multi-select',
            label: 'Types of thoughts I noticed in the last few minutes',
            options: [
              'Planning',
              'Worrying',
              'Judging (myself or others)',
              'Remembering',
              'Fantasizing',
              'Problem-solving',
              'Catastrophizing',
              'Self-criticizing',
            ],
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Fusion vs. Observation',
        content:
          "Sit with this question. There's no right answer — just honest reflection.",
        fields: [
          {
            id: 'fusion-vs-observation',
            type: 'textarea',
            label:
              "What is the difference between being fused with a thought and observing it from a distance?",
            placeholder:
              'In your own words. What does fused feel like in your body, your choices, your mood? What does observing feel like?',
            required: true,
          },
        ],
      },
    ],
  },

  {
    id: 'breathing-pattern-library',
    slug: 'breathing-pattern-library',
    title: 'Breathing Pattern Library',
    subtitle: 'Find the breathing technique that works best for your nervous system',
    description:
      'Explore four evidence-based breathing techniques that activate the vagal brake and shift your nervous system from stress to calm. Practice each one and find your most effective pattern.',
    category: 'coping-skills',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    frequency: 'as-needed',
    therapeuticFramework: ['MBSR', 'DBT', 'somatic'],
    tags: ['breathing', 'nervous-system', 'vagus-nerve', 'anxiety', 'calm', 'somatic'],
    icon: '💨',
    color: '#82AACC',
    version: 1,
    relatedWorksheets: ['distress-tolerance-plan', 'body-based-coping-map', 'grounding-54321'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'How Breathing Regulates Your Nervous System',
        content:
          "Your breath is the only autonomic (automatic) function you can consciously control — and that makes it a direct interface with your nervous system.\n\nThe vagus nerve, which runs from your brainstem to your gut, is the main highway of the parasympathetic nervous system. Slow, extended exhales stimulate the vagal brake — slowing heart rate and signaling safety to the brain. Fast, shallow breathing does the opposite.\n\nThe key principle: **your exhale is calming, your inhale is activating.** To calm down, make your exhale longer than your inhale.\n\nThe four techniques in this worksheet work through different mechanisms but share this principle. Practice them now, when you're relatively calm, so they're available when you're not. Your nervous system learns breathing patterns through repetition — the more you practice, the faster they work.",
      },
      {
        type: 'instruction',
        title: 'Box Breathing (4-4-4-4)',
        content:
          "Used by military special operations for acute stress control. Simple, symmetric, effective.\n\n1. Inhale through your nose for **4 counts**\n2. Hold for **4 counts**\n3. Exhale through your mouth for **4 counts**\n4. Hold empty for **4 counts**\n5. Repeat 4 cycles\n\nVisualize tracing the sides of a box as you go. Each side is 4 counts. Equal duration on all four phases makes this a reliable reset.",
        fields: [
          {
            id: 'box-breathing-distress-before',
            type: 'slider',
            label: 'Distress level BEFORE box breathing',
            min: 1,
            max: 10,
          },
          {
            id: 'box-breathing-experience',
            type: 'textarea',
            label: 'What I noticed during and after box breathing',
            placeholder: 'Body sensations, ease or difficulty, what shifted. Be specific.',
          },
        ],
      },
      {
        type: 'instruction',
        title: '4-7-8 Breathing',
        content:
          "Developed by Dr. Andrew Weil, this technique emphasizes the extended exhale for maximum parasympathetic activation. It is one of the most studied techniques for acute anxiety.\n\n1. Exhale completely through your mouth, making a whoosh sound\n2. Close your mouth and inhale through your nose for **4 counts**\n3. Hold your breath for **7 counts**\n4. Exhale completely through your mouth with a whoosh sound for **8 counts**\n5. Repeat 3–4 cycles\n\nThe 8-count exhale is what makes this so effective. If holding 7 counts feels too long, shorten proportionally but keep the 4:7:8 ratio.",
        fields: [
          {
            id: '478-breathing-distress-before',
            type: 'slider',
            label: 'Distress level BEFORE 4-7-8 breathing',
            min: 1,
            max: 10,
          },
          {
            id: '478-breathing-experience',
            type: 'textarea',
            label: 'What I noticed during and after 4-7-8 breathing',
            placeholder: 'How did the extended exhale feel? What changed in your body?',
          },
        ],
      },
      {
        type: 'instruction',
        title: 'Physiological Sigh',
        content:
          "Identified by neuroscientist Dr. Andrew Huberman as the fastest single technique for reducing stress. Your body does this naturally during sleep — a double inhale followed by a long exhale.\n\n1. Take one full inhale through your nose\n2. At the top of that inhale, **sniff in a second time** to completely fill your lungs\n3. Exhale **slowly and completely** through your mouth — as long as possible\n4. Repeat 1–3 times\n\nThe double inhale fully inflates the alveoli in the lungs (which tend to collapse under stress), and the long exhale maximally activates the vagal brake. Many people feel the shift after just one cycle.",
        fields: [
          {
            id: 'phys-sigh-distress-before',
            type: 'slider',
            label: 'Distress level BEFORE the physiological sigh',
            min: 1,
            max: 10,
          },
          {
            id: 'phys-sigh-experience',
            type: 'textarea',
            label: 'What I noticed during and after the physiological sigh',
            placeholder: 'Did the second sniff feel natural? What happened on the exhale?',
          },
        ],
      },
      {
        type: 'instruction',
        title: 'Coherent Breathing (5-5)',
        content:
          "Coherent breathing synchronizes your heart rate variability and activates a state of physiological coherence — sometimes described as calm but alert. Used in HRV biofeedback training.\n\n1. Inhale through your nose for exactly **5 seconds**\n2. Exhale through your nose or mouth for exactly **5 seconds**\n3. Aim for 10 breaths per minute (5 in, 5 out)\n4. Continue for 3–5 minutes\n\nThis one is slower to start working than the others but creates a deeper, more sustained shift. Ideal for a daily practice rather than emergency use.",
        fields: [
          {
            id: 'coherent-breathing-distress-before',
            type: 'slider',
            label: 'Distress level BEFORE coherent breathing',
            min: 1,
            max: 10,
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Your Winner',
        content:
          "Different nervous systems respond best to different patterns. There is no universally correct answer — there is the one that works for you.",
        fields: [
          {
            id: 'breathing-winner',
            type: 'select',
            label: 'The breathing technique that worked best for me',
            options: [
              'Box breathing (4-4-4-4)',
              '4-7-8 breathing',
              'Physiological sigh',
              'Coherent breathing (5-5)',
              'Other',
            ],
            required: true,
          },
          {
            id: 'breathing-personal-instructions',
            type: 'text',
            label: 'My personal instructions for using it',
            placeholder:
              'Write this as if reminding yourself in a crisis moment. Simple, specific, doable.',
          },
        ],
      },
    ],
  },

  {
    id: 'stop-skill',
    slug: 'stop-skill',
    title: 'The STOP Skill',
    subtitle: 'Interrupt impulsive reactions before they happen',
    description:
      "DBT's STOP skill: a four-step technique for interrupting automatic, impulsive reactions in difficult moments. Stop, Take a breath, Observe, Proceed mindfully. Simple enough to use in seconds.",
    category: 'coping-skills',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    frequency: 'as-needed',
    therapeuticFramework: ['DBT'],
    tags: ['DBT', 'impulse-control', 'mindfulness', 'crisis', 'quick', 'reaction'],
    icon: '✋',
    color: '#D4826A',
    version: 1,
    relatedWorksheets: ['grounding-54321', 'opposite-action-playbook', 'breathing-pattern-library'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'The STOP Skill',
        content:
          "STOP is a DBT skill for the moment when you're about to react automatically — say something you'll regret, send a message in anger, make an impulsive decision that looks a lot like your old patterns.\n\nIt works because it creates a micro-pause between stimulus and response. That pause is where your freedom lives.\n\n**S — Stop.** Don't move. Don't speak. Don't act. Just freeze for a moment.\n\n**T — Take a breath.** One breath. In through the nose, out through the mouth. It resets the nervous system just enough.\n\n**O — Observe.** What is actually happening right now? What are you feeling? What are you thinking? What does the other person's face look like? What's at stake?\n\n**P — Proceed mindfully.** Now act — but from your wise mind, not your reactive mind. What would the version of you who stays in recovery do here?\n\nThe whole thing takes 10–30 seconds. It can save hours or years of damage.",
      },
      {
        type: 'reflection',
        title: 'Practice Scenario 1',
        content:
          "Bring a recent situation to mind where you reacted impulsively — said something you regretted, made an emotionally-driven decision, acted in a way your recovery self wouldn't be proud of.",
        fields: [
          {
            id: 'scenario-1-situation',
            type: 'textarea',
            label: 'Describe a recent situation where you reacted impulsively',
            placeholder:
              "What happened? Who was involved? What did you do or say? What was the cost?",
            required: true,
          },
          {
            id: 'scenario-1-stop',
            type: 'textarea',
            label: 'What STOP would have looked like — the moment you would have stopped',
            placeholder: 'What was the split second when you could have paused instead of reacting?',
          },
          {
            id: 'scenario-1-take-breath',
            type: 'textarea',
            label: 'What taking a breath would have done in that moment',
            placeholder: 'What would have shifted if you had taken 3 seconds before responding?',
          },
          {
            id: 'scenario-1-observe',
            type: 'textarea',
            label: 'What you would have observed if you had paused',
            placeholder:
              'What emotions were actually present? What was the other person communicating? What were you afraid of?',
          },
          {
            id: 'scenario-1-proceed',
            type: 'textarea',
            label: 'How you would have proceeded mindfully instead',
            placeholder:
              'What would your recovery-grounded self have said or done differently?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Practice Scenario 2',
        content:
          'A second scenario. The more you practice mentally, the faster the skill becomes available physically.',
        fields: [
          {
            id: 'scenario-2-situation',
            type: 'textarea',
            label: 'Another recent situation involving impulsive reaction',
            placeholder: 'Different context if possible — different emotion, different relationship.',
          },
          {
            id: 'scenario-2-stop',
            type: 'textarea',
            label: 'The STOP moment in this scenario',
            placeholder: 'Where was the pivot point?',
          },
          {
            id: 'scenario-2-observe',
            type: 'textarea',
            label: 'What observation would have revealed',
            placeholder: 'What were you actually feeling and what was actually happening?',
          },
          {
            id: 'scenario-2-proceed',
            type: 'textarea',
            label: 'Mindful alternative response',
            placeholder: 'What would wise mind have done?',
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Your Next Opportunity',
        content:
          "The STOP skill is most useful when you've identified in advance where you'll likely need it. Anticipation is preparation.",
        fields: [
          {
            id: 'stop-upcoming-situation',
            type: 'textarea',
            label: 'An upcoming situation where I\'ll likely need the STOP skill',
            placeholder:
              'A conversation coming up, a family event, a high-stress situation at work — where do you predict your reactive mind will show up?',
            required: true,
          },
          {
            id: 'stop-commitment',
            type: 'text',
            label: 'My commitment',
            placeholder:
              "e.g., 'Before I respond to anything my mom says at dinner, I will take one full breath first.'",
          },
        ],
      },
    ],
  },

  {
    id: 'body-based-coping-map',
    slug: 'body-based-coping-map',
    title: 'Body-Based Coping Map',
    subtitle: 'Meet stress where it lives — in the body',
    description:
      "Stress and trauma live in the body before they reach conscious awareness. This somatic worksheet maps where you hold tension, identifies release techniques for each area, and builds a daily body-based coping practice.",
    category: 'coping-skills',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    frequency: 'one-time',
    therapeuticFramework: ['somatic', 'DBT'],
    tags: ['somatic', 'body', 'tension', 'nervous-system', 'trauma-informed', 'release'],
    icon: '🧍',
    color: '#A07BBE',
    version: 1,
    relatedWorksheets: ['breathing-pattern-library', 'grounding-54321', 'self-soothing-menu'],
    sections: [
      {
        type: 'psychoeducation',
        title: 'Stress Lives in the Body First',
        content:
          "Long before you consciously register stress, your body knows it. The amygdala — your brain's alarm system — processes threat signals and triggers a physical response before the thinking brain has caught up. This is why you can find yourself with a clenched jaw or tense shoulders without knowing why.\n\nSomatic (body-based) coping approaches this directly: instead of trying to think your way out of stress, you work with the body that's holding it. Research by Peter Levine, Bessel van der Kolk, and others has shown that the body stores unresolved stress and trauma, and that body-based interventions can release it in ways that purely cognitive approaches cannot.\n\nThis worksheet helps you map your personal stress landscape — where tension lives, what emotions are connected to those places, and what release techniques work for you specifically.",
      },
      {
        type: 'body-scan',
        title: 'Body Scan',
        content:
          "Take a moment to settle into your seat. Close your eyes if that feels comfortable. Breathe slowly. Now, as you read each body area below, bring your attention there and notice what's present — tension, tightness, pain, numbness, ease, warmth, or nothing at all. Don't judge. Just notice and describe.",
        fields: [
          {
            id: 'body-scan-head-jaw',
            type: 'textarea',
            label: 'Head and jaw',
            placeholder:
              'Temples, forehead, jaw, teeth. Are you clenching? Where is tension? Or is this area free?',
          },
          {
            id: 'body-scan-neck-shoulders',
            type: 'textarea',
            label: 'Neck and shoulders',
            placeholder:
              'One of the most common tension storage sites. What do you notice? How high are your shoulders right now?',
          },
          {
            id: 'body-scan-chest',
            type: 'textarea',
            label: 'Chest',
            placeholder:
              'Breath quality here. Tightness, restriction, openness? How full does each breath feel?',
          },
          {
            id: 'body-scan-stomach-gut',
            type: 'textarea',
            label: 'Stomach and gut',
            placeholder:
              'Gut feelings are real — the enteric nervous system responds to stress. What is present here?',
          },
          {
            id: 'body-scan-hands-arms',
            type: 'textarea',
            label: 'Hands and arms',
            placeholder:
              'Clenched fists, forearm tension, restless hands? Or calm and heavy?',
          },
          {
            id: 'body-scan-legs-feet',
            type: 'textarea',
            label: 'Legs and feet',
            placeholder:
              'Restless legs, tension in thighs, feet flat and grounded or tense? What do you notice?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Tension Patterns',
        content:
          "Patterns matter more than any single reading. Where does your stress consistently go?",
        fields: [
          {
            id: 'tension-consistent-location',
            type: 'textarea',
            label: 'Where I consistently hold stress in my body',
            placeholder:
              "Think back over the past month. What areas reliably tighten when things get hard? What do the people who know you well notice first?",
            required: true,
          },
          {
            id: 'tension-emotion-connection',
            type: 'textarea',
            label: 'What emotions tend to show up in those areas',
            placeholder:
              "e.g., 'My jaw tightens when I'm angry but can't say anything.' 'My stomach drops with anxiety.' 'My chest tightens with grief.'",
          },
        ],
      },
      {
        type: 'prompt',
        title: 'Release Toolkit',
        content:
          "For your top two tension areas, choose a release technique and describe how you'll use it.",
        fields: [
          {
            id: 'release-area-1',
            type: 'text',
            label: 'Tension area #1',
            placeholder: 'e.g., Neck and shoulders',
          },
          {
            id: 'release-technique-1',
            type: 'select',
            label: 'Release technique for area #1',
            options: [
              'Humming or toning',
              'Shaking',
              'Stretching',
              'Self-massage',
              'Heat (warm pack, shower)',
              'Cold (ice pack, cold water)',
              'Movement (walk, yoga, dance)',
              'Breath',
              'Other',
            ],
          },
          {
            id: 'release-how-1',
            type: 'textarea',
            label: 'How I will specifically use this technique',
            placeholder: 'When? For how long? What does it feel like when it works?',
          },
          {
            id: 'release-area-2',
            type: 'text',
            label: 'Tension area #2',
            placeholder: 'e.g., Chest',
          },
          {
            id: 'release-technique-2',
            type: 'select',
            label: 'Release technique for area #2',
            options: [
              'Humming or toning',
              'Shaking',
              'Stretching',
              'Self-massage',
              'Heat (warm pack, shower)',
              'Cold (ice pack, cold water)',
              'Movement (walk, yoga, dance)',
              'Breath',
              'Other',
            ],
          },
          {
            id: 'release-how-2',
            type: 'textarea',
            label: 'How I will specifically use this technique',
            placeholder: 'When? For how long? What does it feel like when it works?',
          },
        ],
      },
      {
        type: 'reflection',
        title: 'Daily Check-In Commitment',
        content:
          "A 2-minute daily body scan — just noticing where you are — is one of the simplest, highest-leverage habits in recovery. You catch tension before it becomes crisis. You become familiar with your own signals.",
        fields: [
          {
            id: 'daily-body-practice',
            type: 'text',
            label: 'One body-based coping practice I will do daily',
            placeholder:
              "e.g., '60-second body scan every morning before getting out of bed' or '2-minute shoulder release before bed each night'",
            required: true,
          },
        ],
      },
    ],
  },
]
