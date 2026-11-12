// Service images
import speechImg from '../assets/services/speech-therapy.jpg';
import optImg from '../assets/services/oral-placement.jpg';
import sensoryImg from '../assets/services/sensory-integration.jpg';
import otImg from '../assets/services/occupational-therapy.jpg';
import abaImg from '../assets/services/aba-therapy.jpg';
import groupImg from '../assets/services/group-therapy.jpg';
import neuroImg from '../assets/services/neurological-care.jpg';
import counselImg from '../assets/services/parental-counseling.jpg';
import spedImg from '../assets/services/special-education.jpg';

// Hero image
import heroChildImg from '../assets/hero/hero-child.jpg';

// Facility images
import sensoryGymImg from '../assets/facilities/sensory-gym.jpg';
import speechSuiteImg from '../assets/facilities/speech-suite.jpg';
import otLabImg from '../assets/facilities/occupational-lab.jpg';
import counselRoomImg from '../assets/facilities/counseling-room.jpg';

// Project images
import kalashramImg from '../assets/projects/kalashram.jpg';
import eduCenterImg from '../assets/projects/education-center.jpg';
import navTazImg from '../assets/projects/nav-taz-dham.jpg';
import swayamImg from '../assets/projects/swayamsidha.jpg';
import sevaImg from '../assets/projects/seva-kutir.jpg';

export const HERO_IMAGE = heroChildImg;

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
    line2: "Tech Zone IV",
    city: "Greater Noida West",
    state: "Uttar Pradesh",
    pincode: "201318",
    full: "G-104, Fusion Homes, Tech Zone IV, Greater Noida West 201318",
    lat: 28.5985,
    lng: 77.4472,
    landmark: "Ek Murti Chowk",
    hours: "Monday – Saturday: 9:00 AM – 7:30 PM (Sunday by Appointment)"
  },
  branches: [
    {
      id: "noida",
      name: "Greater Noida West Center",
      address: "G-104, Fusion Homes, Tech Zone IV, Greater Noida West 201318",
      phone: "+91 8650909777",
      lat: 28.5985,
      lng: 77.4472,
      isPrimary: true
    }
  ]
};

export const SERVICES_DATA = [
  {
    id: "speech-therapy",
    title: "Speech Therapy",
    tagline: "Better Communication, Brighter Tomorrow",
    iconName: "RecordVoiceOver",
    image: speechImg,
    color: "#02476c",
    bgLight: "#FFFAEA",
    borderCol: "#F6D469",
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
    image: optImg,
    color: "#59C36A",
    bgLight: "#e8f7ec",
    borderCol: "#c2ebcb",
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
    image: sensoryImg,
    color: "#E76100",
    bgLight: "#fff7ed",
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
    image: otImg,
    color: "#02476c",
    bgLight: "#f0f9ff",
    borderCol: "#bae6fd",
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
    image: abaImg,
    color: "#297fb0",
    bgLight: "#eff6ff",
    borderCol: "#bfdbfe",
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
    image: groupImg,
    color: "#FF1C74",
    bgLight: "#fdf2f8",
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
    image: neuroImg,
    color: "#02476c",
    bgLight: "#e0f2fe",
    borderCol: "#bae6fd",
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
    image: counselImg,
    color: "#59C36A",
    bgLight: "#e8f7ec",
    borderCol: "#c2ebcb",
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
    image: spedImg,
    color: "#E76100",
    bgLight: "#fff7ed",
    borderCol: "#fed7aa",
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
  { value: "1,500+", label: "Children Supported", color: "#02476c" },
  { value: "9+", label: "Specialized Therapies", color: "#59C36A" },
  { value: "15+", label: "Certified Specialists", color: "#E76100" },
  { value: "99%", label: "Parent Satisfaction", color: "#FF1C74" }
];

export const FACILITIES_DATA = [
  {
    id: "sensory-gym",
    title: "Sensory Integration Gym",
    subtitle: "Vestibular & Proprioceptive Development",
    desc: "Equipped with suspension bolster swings, tactile climbing wall, foam crash mats, and sensory light modulation to calm anxiety and enhance sensory processing.",
    image: sensoryGymImg,
    tag: "High Stimulation & Calming Zone",
    color: "#E76100"
  },
  {
    id: "speech-suite",
    title: "Speech & OPT Suite",
    subtitle: "Acoustic Speech & Oral Placement Lab",
    desc: "Acoustically sound-insulated room with specialized jaw grading blocks, therapeutic bubble/straw hierarchies, and mirror drills for clear articulation.",
    image: speechSuiteImg,
    tag: "Acoustically Calibrated",
    color: "#02476c"
  },
  {
    id: "occupational-lab",
    title: "Occupational & Fine Motor Lab",
    subtitle: "Independence & School Readiness",
    desc: "Ergonomic handwriting tables, bilateral manipulation puzzles, sensory tactile bins, and daily living simulations to build strong grasp and confidence.",
    image: otLabImg,
    tag: "ADL Simulation Corner",
    color: "#59C36A"
  },
  {
    id: "counseling-room",
    title: "Quiet Parental Counseling Suite",
    subtitle: "Confidential Family Guidance",
    desc: "Warm, private consulting room designed for compassionate parent guidance, milestone reviews, behavioral debriefs, and emotional support.",
    image: counselRoomImg,
    tag: "Peaceful & Confidential",
    color: "#FF1C74"
  }
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
    q: "How do I know if my child needs Speech or Sensory Therapy?",
    a: "If your child is not speaking single words by 16-18 months, struggles to form 2-word phrases by age 2, frequently has tantrums from loud sounds or specific clothes, avoids eye contact, or cannot sit still for simple tasks, a developmental screening is strongly advised. Early intervention between ages 2–6 yields the most rapid progress."
  },
  {
    q: "What happens during the first clinical assessment session?",
    a: "Our multidisciplinary clinical specialist conducts a friendly, 45-minute play-based screening in our sensory gym or speech room. We observe verbal articulation, oral motor strength, sensory responses, gross/fine motor control, and parent concerns. You will receive an immediate debrief and an 8-week Individualized Education & Therapy Plan (IEP)."
  },
  {
    q: "Where is the Caring Hands therapy center located in Greater Noida West?",
    a: "Our clinic is at G-104, Fusion Homes, Tech Zone IV, Greater Noida West 201318. It is conveniently accessible from Gaur City 1 & 2, Ek Murti Chowk, Crossings Republik, and Noida Sector 52/76 Metro stations."
  },
  {
    q: "Are parents allowed to observe or participate in therapy sessions?",
    a: "Absolutely! We strongly advocate parent empowerment. Parents can observe sessions through one-way viewing setups and receive 10 minutes of debriefing at the end of each session with actionable home activities."
  },
  {
    q: "How many sessions per week are recommended for noticeable improvement?",
    a: "Depending on the clinical assessment, most children attend 2 to 3 sessions per week (45–60 minutes per session). Milestones are re-evaluated every 8 weeks to track quantifiable progress."
  }
];

export const WE_CARE_ABOUT = [
  {
    title: "Child Development",
    desc: "Nurturing cognitive, sensory, and motor milestones in early childhood to lay lifelong foundations.",
    icon: "ChildFriendly",
    color: "#02476c",
    bg: "#FFFAEA"
  },
  {
    title: "Special Education",
    desc: "Inclusive curricula, remedial learning, and IEPs ensuring every child thrives in classroom environments.",
    icon: "MenuBook",
    color: "#59C36A",
    bg: "#e8f7ec"
  },
  {
    title: "Communication & Speech",
    desc: "Fostering speech, articulation, oral motor development, and confident expression for every child.",
    icon: "RecordVoiceOver",
    color: "#E76100",
    bg: "#fff7ed"
  },
  {
    title: "Healthcare & Nutrition",
    desc: "Delivering community medical camps, nutritional guidance, and holistic sensory well-being.",
    icon: "Spa",
    color: "#297fb0",
    bg: "#eff6ff"
  },
  {
    title: "Parent Empowerment",
    desc: "Guiding parents with co-regulation strategies, empathetic counseling, and loving clarity.",
    icon: "FamilyRestroom",
    color: "#FF1C74",
    bg: "#fdf2f8"
  }
];

export const TRUST_PROJECTS = [
  {
    id: "child-development-center",
    title: "Child Development Center (Gr. Noida West)",
    tag: "Main Clinical Hub",
    desc: "State-of-the-art clinical center providing 9 specialized pediatric therapies: Speech, Sensory Gym, OT, ABA & Special Education.",
    location: "G-104, Fusion Homes, Tech Zone IV, Greater Noida West 201318",
    image: speechImg,
    color: "#02476c"
  },
  {
    id: "kalashram",
    title: "Kalashram Project",
    tag: "Children's Shelter & Care",
    desc: "Providing safe residential shelter, quality education, healthcare, and loving care for rescued and abandoned children.",
    location: "Ambi Village, Talegaon Dabhade, Pune",
    image: kalashramImg,
    color: "#E76100"
  },
  {
    id: "center-for-education",
    title: "Caring Hands Center for Education",
    tag: "Inclusive Schooling",
    desc: "Dedicated to providing inclusive, high-quality foundational education for children from underprivileged backgrounds.",
    location: "Pune & Regional Centers",
    image: eduCenterImg,
    color: "#59C36A"
  },
  {
    id: "naval-taj-dham",
    title: "Nav-Taz Dham",
    tag: "Elderly Care Center",
    desc: "A 50-bed compassionate residential care home ensuring dignity, medical attention, and community for senior citizens.",
    location: "Talegaon, Pune",
    image: navTazImg,
    color: "#297fb0"
  },
  {
    id: "swayamsidha",
    title: "Swayamsidha",
    tag: "Women Empowerment",
    desc: "Counseling, vocational skill training, and livelihood generation enabling women in crisis to gain financial independence.",
    location: "Maharashtra Communities",
    image: swayamImg,
    color: "#FF1C74"
  },
  {
    id: "seva-kutir",
    title: "Adv. Ramrao Chogale Seva Kutir",
    tag: "Youth Empowerment",
    desc: "Empowering young boys through academic support, computer literacy, vocational mentorship, and moral leadership.",
    location: "Pali Village, Mira-Bhayandar",
    image: sevaImg,
    color: "#FCB720"
  }
];
