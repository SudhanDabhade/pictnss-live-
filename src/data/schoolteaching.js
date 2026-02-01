/**
 * School Teaching Data
 * Contains records of weekly teaching sessions conducted by NSS volunteers
 * Schedule: Every Saturday
 */

export const teachingSessions = [
  // --- 2026 Sessions ---
  {
    id: 101,
    year: 2026,
    date: "January 24, 2026",
    title: "Republic Day Creative Workshop",
    schoolName: "Z.P. Primary School, Dhankawadi",
    targetClass: "5th - 7th Standard",
    subject: "Arts & Crafts / History",
    thumbnail: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=300&fit=crop",
    volunteers: 15,
    shortDescription: "Crafting decorations and storytelling about Indian freedom fighters.",
    description: `With Republic Day approaching, this Saturday's session was dedicated to instilling patriotism through creativity. Volunteers organized an art workshop where students made tri-color badges, flags, and paper flowers to decorate their classrooms.

    In the second half, a storytelling session was conducted where volunteers narrated inspiring stories of freedom fighters like Bhagat Singh and Subhash Chandra Bose. The session concluded with a group rehearsal of the National Anthem.`,
    learningOutcome: "Students learned about the significance of Republic Day and developed craft skills.",
    gallery: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=400&fit=crop", // Crafting
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop", // Classroom interaction
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", // Kids smiling
    ]
  },
  {
    id: 102,
    year: 2026,
    date: "January 17, 2026",
    title: "Fun with Science: Practical Experiments",
    schoolName: "Z.P. Primary School, Dhankawadi",
    targetClass: "6th - 8th Standard",
    subject: "General Science",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
    volunteers: 12,
    shortDescription: "Demonstrating basic physics and chemistry concepts using household items.",
    description: `To make science more approachable, volunteers demonstrated simple experiments using everyday objects. Topics covered included air pressure, density (oil vs water), and basic chemical reactions (baking soda volcanoes).

    The hands-on approach fascinated the students, who were encouraged to predict the outcomes before each experiment. This inquiry-based learning method helped spark curiosity and critical thinking.`,
    learningOutcome: "Understanding fundamental scientific principles through observation and deduction.",
    gallery: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop", // Science experiment
      "https://images.unsplash.com/photo-1564429238980-16e22e18ff74?w=600&h=400&fit=crop", // Group learning
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", // Teaching
    ]
  },
  {
    id: 103,
    year: 2026,
    date: "January 10, 2026",
    title: "Vedic Maths & Speed Calculation",
    schoolName: "Z.P. Primary School, Dhankawadi",
    targetClass: "5th - 8th Standard",
    subject: "Mathematics",
    thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=300&fit=crop",
    volunteers: 10,
    shortDescription: "Teaching mental math tricks to solve problems faster.",
    description: `Many students fear mathematics. This session aimed to remove that fear by introducing 'Vedic Maths' tricks for multiplication and division. Volunteers taught short-cut methods to square numbers ending in 5 and multiply two-digit numbers mentally.

    We also conducted a 'Math Relay' game where students formed teams to solve problems on the blackboard, turning calculation into a fun competitive sport.`,
    learningOutcome: "Improved calculation speed and reduced anxiety towards mathematics.",
    gallery: [
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=400&fit=crop", // Math board
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop", // Classroom
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", // Happy students
    ]
  },

  // --- 2025 Sessions (Selected Highlights) ---
  {
    id: 104,
    year: 2025,
    date: "December 20, 2025",
    title: "Spoken English & Public Speaking",
    schoolName: "Z.P. Primary School, Dhankawadi",
    targetClass: "7th - 8th Standard",
    subject: "English Language",
    thumbnail: "https://images.unsplash.com/photo-1544367563-12123d8d5e64?w=400&h=300&fit=crop",
    volunteers: 14,
    shortDescription: "Confidence building activities and basic conversation practice.",
    description: `Focusing on communication skills, this session encouraged students to speak in English. Volunteers introduced themselves and asked students to do the same using simple sentence structures.

    Activities included 'Just A Minute' (JAM), where students spoke for one minute on their favorite topics (like 'My Best Friend' or 'My Village'). We focused on vocabulary building and correcting common grammatical errors in a supportive environment.`,
    learningOutcome: "Increased confidence in speaking English and expanded vocabulary.",
    gallery: [
      "https://images.unsplash.com/photo-1544367563-12123d8d5e64?w=600&h=400&fit=crop", // Speaking
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop", // Mentoring
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", // Classroom
    ]
  },
  {
    id: 105,
    year: 2025,
    date: "December 6, 2025",
    title: "Computer Literacy Basics",
    schoolName: "Z.P. Primary School, Dhankawadi",
    targetClass: "5th - 8th Standard",
    subject: "Technology",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
    volunteers: 10,
    shortDescription: "Introduction to parts of a computer and MS Paint.",
    description: `Volunteers carried their laptops to the school to give students a hands-on experience with computers. For many students, this was their first time interacting with a laptop.

    The session covered the basic parts of a computer (Input/Output devices), how to turn it on/off, and using the mouse. The highlight was letting the students draw digital art using MS Paint, which they thoroughly enjoyed.`,
    learningOutcome: "Familiarity with computer hardware and basic interface navigation.",
    gallery: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop", // Kids with laptops
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop", // Digital learning
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=400&fit=crop", // Screen time
    ]
  },
  {
    id: 106,
    year: 2025,
    date: "November 15, 2025",
    title: "Origami & Paper Craft Workshop",
    schoolName: "Z.P. Primary School, Dhankawadi",
    targetClass: "1st - 4th Standard",
    subject: "Arts & Crafts",
    thumbnail: "https://images.unsplash.com/photo-1512130639912-78dc5e923838?w=400&h=300&fit=crop",
    volunteers: 18,
    shortDescription: "Developing fine motor skills through paper folding activities.",
    description: `A fun-filled Saturday dedicated to the younger students (1st to 4th standard). Volunteers taught them the Japanese art of Origami. Students learned to make paper boats, planes, and simple birds.

    This activity was chosen to help improve the children's fine motor skills, patience, and ability to follow instructions. The session ended with a boat racing competition in a water tub.`,
    learningOutcome: "Development of creativity, patience, and fine motor coordination.",
    gallery: [
      "https://images.unsplash.com/photo-1512130639912-78dc5e923838?w=600&h=400&fit=crop", // Craft
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&h=400&fit=crop", // Group fun
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop", // Smiles
    ]
  }
];

// --- Helper Functions ---

// Get sessions by year
export const getTeachingSessionsByYear = (year) => {
  return teachingSessions.filter(session => session.year === parseInt(year));
};

// Get session by ID
export const getTeachingSessionById = (id) => {
  return teachingSessions.find(session => session.id === parseInt(id));
};

// Get distinct years available in data
export const getTeachingYears = () => {
  return [...new Set(teachingSessions.map(s => s.year))].sort((a, b) => b - a);
};

// Get sessions by subject (for filtering)
export const getSessionsBySubject = (subjectFragment) => {
  return teachingSessions.filter(session => 
    session.subject.toLowerCase().includes(subjectFragment.toLowerCase())
  );
};

export default teachingSessions;