export const CLINIC_INFO = {
  name: "Caring Hands",
  fullName: "Caring Hands Child Development Center",
  tagline: "Small Steps... Big Futures...",
  subTagline: "We Care For You With ❤️",
  motto: "Every Child Matters ❤️",
  phone: "8650909777",
  displayPhone: "+91 8650909777",
  altPhone: "9011262226",
  displayAltPhone: "+91 9011262226",
  emails: ["caringhandspune@gmail.com", "info@caringhands.org.in"],
  primaryAddress: {
    title: "Greater Noida West Center (Main Therapy Hub)",
    line1: "G-104, Fusion Homes",
    line2: "Amrapali Dream Valley",
    city: "Greater Noida West",
    state: "Uttar Pradesh",
    pincode: "201318",
    full: "G-104, Fusion Homes, Amrapali Dream Valley, Greater Noida West 201318",
    lat: 28.5985,
    lng: 77.4472,
    landmark: "Near Gaur City 2 & Char Murti Chowk",
    hours: "Monday – Saturday: 9:00 AM – 7:30 PM (Sunday by Appointment)"
  },
  branches: [
    {
      id: "noida",
      name: "Greater Noida West Center",
      address: "G-104, Fusion Homes, Amrapali Dream Valley, Greater Noida West 201318",
      phone: "+91 8650909777",
      lat: 28.5985,
      lng: 77.4472,
      isPrimary: true
    },
    {
      id: "pune",
      name: "Pune Child & Community Center",
      address: "Ambi, Near Talegaon MIDC Rd, Dist Pune, Maharashtra 410507",
      phone: "+91 9011262226",
      lat: 18.7238,
      lng: 73.6826,
      isPrimary: false
    }
  ]
};

export const SERVICES_DATA = [
  {
    id: "speech-therapy",
    title: "Speech Therapy",
    tagline: "Better Communication, Brighter Tomorrow",
    iconName: "RecordVoiceOver",
    color: "#0284c7",
    bgLight: "#e0f2fe",
    borderCol: "#bae6fd",
    shortDesc: "Specialized clinical therapy empowering children with speech delays, articulation issues, stammering, and receptive-expressive communication difficulties.",
    overview: "At Caring Hands, our Speech-Language Pathologists design joyful, play-based interventions that stimulate early vocalization, vocabulary acquisition, clarity of pronunciation, and confidence.",
    indications: [
      "Speech delay or difficulty speaking age-appropriate words",
      "Stammering, stuttering or disfluent speech",
      "Difficulty understanding questions or following directions",
      "Unclear pronunciation making it hard for peers and family to understand",
      "Social communication and conversational turn-taking challenges"
    ],
    techniques: [
      "Articulation & Phonological Therapy",
      "Auditory Processing Enhancement",
      "AAC (Augmentative and Alternative Communication) devices & picture cards",
      "Interactive conversational play drills"
    ],
    outcomes: "Enhanced verbal fluency, expanded vocabulary, clearer articulation, and empowered social interaction."
  },
  {
    id: "oral-placement-therapy",
    title: "Oral Placement Therapy",
    tagline: "Stronger Muscles, Clearer Speech",
    iconName: "SentimentSatisfiedAlt",
    color: "#16a34a",
    bgLight: "#dcfce7",
    borderCol: "#bbf7d0",
    shortDesc: "Tactile-proprioceptive approach targeting jaw stability, lip rounding, tongue movement, and oral muscle coordination for clear speech and safe feeding.",
    overview: "Oral Placement Therapy (OPT) bridges the gap between motor mechanics and speech sound production using therapeutic horns, bubbles, straws, and jaw grading bite blocks.",
    indications: [
      "Weak oral muscle tone or excessive drooling",
      "Difficulty with chewing, swallowing, or picky eating textures",
      "Inability to close lips or position tongue for specific speech sounds (R, S, L, K)",
      "Open mouth posture at rest"
    ],
    techniques: [
      "Jaw grading & stability bite blocks",
      "Therapeutic straw and horn hierarchy protocols",
      "Tongue tip dissociation and lateralization exercises",
      "Sensory feeding desensitization"
    ],
    outcomes: "Strong oral musculature, reduced drooling, normalized chewing/swallowing, and precise speech motor control."
  },
  {
    id: "sensory-integration-therapy",
    title: "Sensory Integration Therapy",
    tagline: "Calmer Mind, Better Focus",
    iconName: "PanTool",
    color: "#ea580c",
    bgLight: "#ffedd5",
    borderCol: "#fed7aa",
    shortDesc: "Comprehensive sensory gym therapies balancing vestibular, proprioceptive, and tactile systems for emotional regulation and sharper focus.",
    overview: "Our state-of-the-art sensory gym features specialized swings, crash pads, climbing walls, and sensory lights that help children process environmental sensory input comfortably.",
    indications: [
      "Extreme sensitivity or avoidance of loud sounds, bright lights, or textures",
      "Constant restlessness, spinning, jumping, or crashing into furniture",
      "Poor balance, clumsiness, or fear of swings and heights",
      "Frequent emotional meltdowns triggered by sensory overload"
    ],
    techniques: [
      "Suspended sensory swings (bolster, hammock, platform swings)",
      "Deep pressure proprioceptive therapy & weighted modalities",
      "Tactile desensitization bins and textures",
      "Vestibular balance and motor planning obstacles"
    ],
    outcomes: "Improved emotional self-regulation, reduced anxiety, sustained classroom focus, and joyful body awareness."
  },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    tagline: "Build Skills, Gain Independence",
    iconName: "Work",
    color: "#7c3aed",
    bgLight: "#f3e8ff",
    borderCol: "#e9d5ff",
    shortDesc: "Helping children master everyday milestones—from pencil grip and scissors to self-dressing, hand-eye coordination, and school readiness.",
    overview: "Pediatric Occupational Therapy at Caring Hands enables children to participate fully in daily life activities, school tasks, and autonomous self-care through tailored skill-building games.",
    indications: [
      "Weak pencil grip, handwriting fatigue, or poor scissor skills",
      "Struggles with buttoning shirts, zipping pants, or tying shoe laces",
      "Poor bilateral coordination (using both hands together)",
      "Difficulty organizing desk space or completing classroom worksheets"
    ],
    techniques: [
      "Fine motor manipulation boards and pincer strengthening tools",
      "Visual-motor integration and tracking exercises",
      "Activities of Daily Living (ADL) simulation stations",
      "Core stability and postural endurance activities"
    ],
    outcomes: "Independent self-care routines, confident handwriting and drawing, improved motor planning, and school confidence."
  },
  {
    id: "aba-therapy",
    title: "ABA Therapy",
    tagline: "Positive Behaviour, Lasting Progress",
    iconName: "Extension",
    color: "#0d9488",
    bgLight: "#ccfbf1",
    borderCol: "#99f6e4",
    shortDesc: "Applied Behavior Analysis driven by positive reinforcement to teach meaningful communication, social skills, and replace challenging behaviors.",
    overview: "Rooted in scientific behavioral psychology, our ABA specialists break down complex everyday behaviors into small, achievable steps, celebrating every milestone with positive encouragement.",
    indications: [
      "Tantrums, aggression, or self-injurious behavior",
      "Difficulty tolerating changes in routine or transitions",
      "Limited eye contact or lack of interest in shared engagement",
      "Repetitive behavioral patterns or difficulty responding to verbal prompts"
    ],
    techniques: [
      "Discrete Trial Training (DTT) & Natural Environment Teaching (NET)",
      "Functional Behavior Assessments (FBA)",
      "Positive Reinforcement Token Economies",
      "Functional Communication Replacement Training (FCT)"
    ],
    outcomes: "Drastic reduction in challenging behaviors, boosted compliance, adaptive social behavior, and self-advocacy."
  },
  {
    id: "group-therapy",
    title: "Group Therapy",
    tagline: "Together We Grow",
    iconName: "Groups",
    color: "#db2777",
    bgLight: "#fce7f3",
    borderCol: "#fbcfe8",
    shortDesc: "Engaging structured peer sessions fostering sharing, empathy, cooperative playtime, and readiness for mainstream schooling.",
    overview: "Our child-friendly group sessions recreate a welcoming peer ecosystem where children practice taking turns, reading social cues, collaborating on group challenges, and forming genuine friendships.",
    indications: [
      "Child prefers to play in isolation and avoids peer interaction",
      "Difficulty sharing toys, taking turns, or accepting losing in games",
      "Social anxiety in preschool or playground settings",
      "Trouble interpreting body language and facial expressions"
    ],
    techniques: [
      "Structured collaborative circle games & board games",
      "Social story modeling and role-playing scenarios",
      "Collaborative creative art and LEGO team building",
      "Guided emotional expression and peer conflict resolution"
    ],
    outcomes: "Confident peer friendships, spontaneous sharing, empathetic communication, and comfortable school integration."
  },
  {
    id: "neurological-conditions",
    title: "Neurological Conditions",
    tagline: "Special Care for Unique Needs",
    iconName: "Psychology",
    color: "#4f46e5",
    bgLight: "#e0e7ff",
    borderCol: "#c7d2fe",
    shortDesc: "Holistic, multidisciplinary pediatric care for Cerebral Palsy, Autism Spectrum Disorder, ADHD, Down Syndrome, and neurodevelopmental delays.",
    overview: "Every child with a neurological difference has limitless potential. Our collaborative team of pediatric specialists creates customized therapeutic roadmaps for physical, cognitive, and sensory well-being.",
    indications: [
      "Autism Spectrum Disorder (ASD)",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Cerebral Palsy and pediatric movement disorders",
      "Down Syndrome & Genetic Conditions",
      "Global Developmental Delay (GDD)"
    ],
    techniques: [
      "Multidisciplinary integrated neuro-rehabilitation protocols",
      "Neurodevelopmental Treatment (NDT) approaches",
      "Adaptive equipment, positioning and postural aids",
      "Cognitive stimulation and attention-training drills"
    ],
    outcomes: "Optimized mobility, functional cognitive gains, sensory equilibrium, and compassionate lifelong growth."
  },
  {
    id: "parental-counseling",
    title: "Parental Counseling",
    tagline: "Guidance Today, Confidence Tomorrow",
    iconName: "FamilyRestroom",
    color: "#0891b2",
    bgLight: "#cffafe",
    borderCol: "#a5f3fc",
    shortDesc: "Empowering parents with compassionate emotional support, milestone tracking, home therapy routines, and practical parenting strategies.",
    overview: "Parents are a child's greatest champions. Our child psychologists and family counselors walk hand-in-hand with parents, turning confusion into confidence and stress into loving clarity.",
    indications: [
      "Parental stress, burnout, or emotional overwhelm following a diagnosis",
      "Uncertainty about how to handle tantrums or sensory meltdowns at home",
      "Need for structured home routine and sibling harmony strategies",
      "Questions regarding school admissions and rights for children with special needs"
    ],
    techniques: [
      "One-on-one psychological parent counseling",
      "Home sensory environment auditing & co-regulation workshops",
      "Parent-Mediated Intervention training sessions",
      "Milestone tracking and positive parenting toolkits"
    ],
    outcomes: "Rejuvenated parental confidence, peaceful home environments, unified family dynamics, and joyful parenting."
  },
  {
    id: "special-education",
    title: "Special Education",
    tagline: "Inclusive Learning for Every Child",
    iconName: "MenuBook",
    color: "#e11d48",
    bgLight: "#ffe4e6",
    borderCol: "#fecdd3",
    shortDesc: "Personalized Individualized Education Plans (IEP), remedial learning, multisensory reading, math concepts, and inclusive school readiness.",
    overview: "Our certified Special Educators tailor academic curricula to each child's individual learning pace, unlocking literacy, numeracy, attention span, and cognitive readiness.",
    indications: [
      "Learning disabilities like Dyslexia, Dyscalculia, or Dysgraphia",
      "Difficulty remembering letters, numbers, phonics, or sight words",
      "Short attention span during desk-based academic tasks",
      "Need for shadow teaching support or school readiness bridge programs"
    ],
    techniques: [
      "Customized Individualized Education Plan (IEP)",
      "Orton-Gillingham multisensory literacy methods",
      "Concrete-Representational-Abstract (CRA) math instruction",
      "Executive function and memory strategy coaching"
    ],
    outcomes: "Academic confidence, functional literacy and math fluency, independent study habits, and smooth school participation."
  }
];

export const STATS_DATA = [
  { value: "1,500+", label: "Children Supported", color: "#0284c7" },
  { value: "9+", label: "Specialized Therapies", color: "#16a34a" },
  { value: "15+", label: "Certified Specialists", color: "#ea580c" },
  { value: "99%", label: "Parent Satisfaction", color: "#db2777" }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "When our 3-year-old was diagnosed with speech delay, we were devastated. Within 4 months of Speech & OPT at Caring Hands Greater Noida West, he started forming complete sentences. The therapists treat him like family!",
    parent: "Pooja & Amit Sharma",
    childAge: "Mother of Reyansh (4 yrs)",
    service: "Speech Therapy & OPT",
    rating: 5
  },
  {
    quote: "The sensory gym at Fusion Homes is incredible! My daughter had severe sensory overload with sounds and crowds. Sensory Integration therapy helped her calm down and focus. Now she loves going to preschool.",
    parent: "Dr. Vikram & Neha Sen",
    childAge: "Parents of Ananya (5 yrs)",
    service: "Sensory Integration",
    rating: 5
  },
  {
    quote: "The parental counseling sessions gave us our peace of mind back. They taught us exact home routines and co-regulation strategies. Every child truly matters here.",
    parent: "Sunita Verma",
    childAge: "Mother of Kabir (6 yrs)",
    service: "Parental Counseling & ABA",
    rating: 5
  }
];

export const FAQ_DATA = [
  {
    question: "When should I consult a child development specialist?",
    answer: "If you notice delays in speech (not speaking single words by 15-18 months), lack of eye contact, extreme sensitivity to sounds or touch, difficulty with motor coordination, or frequent severe meltdowns, an early assessment makes a world of difference."
  },
  {
    question: "What is Oral Placement Therapy (OPT) and how does it differ from regular Speech Therapy?",
    answer: "Traditional speech therapy works on auditory and visual imitation of sounds. OPT specifically strengthens the muscles of the jaw, lips, and tongue using tactile tools (horns, straws, bite blocks) when muscle weakness or motor planning is preventing clear speech."
  },
  {
    question: "Where is Caring Hands Child Development Center located?",
    answer: "Our primary center is at G-104, Fusion Homes, Amrapali Dream Valley, Greater Noida West 201318. We are easily accessible from Gaur City, Crossing Republik, Noida Sector 76/52, and Indirapuram. We also operate in Pune (Ambi, Talegaon)."
  },
  {
    question: "How long does each therapy session last?",
    answer: "Standard sessions typically last 45 to 60 minutes of intensive 1-on-1 therapeutic engagement, followed by a 10-minute briefing with parents to discuss progress and home practice activities."
  },
  {
    question: "Do you offer combined multidisciplinary therapy programs?",
    answer: "Yes! Many children benefit from integrated therapies (e.g. Speech Therapy + Sensory Integration + Occupational Therapy). We design coordinated Individualized Education Plans (IEP) where all therapists align on shared goals."
  }
];
