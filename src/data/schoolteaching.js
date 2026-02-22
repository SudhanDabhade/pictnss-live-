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
    date: "Feburay 1, 2026", // Approximate Saturday for Week 18
    weekLabel: "Week 1",
    title: "Active Learning & Logical Reasoning",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "1st - 7th Standard",
    subject: "Holistic Development",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop", // Smiling kids
    volunteers: 18,
    shortDescription: "A productive session covering basic literacy, scholarship math, and logical reasoning across all batches.",
    description: `This week’s session focused on active learning across all classes. 1st standard students practiced English alphabets and numbers with a fun 'Chinese Whisper' activity. 
    
    Scholarship students (5th & 8th) worked on logical reasoning and geometry for their upcoming exams. The session ended with a high-energy recap where students shared what they learned.`,
    learningOutcome: "Strengthened core concepts in Math and Logic; improved vocabulary through interactive games.",
    // NEW FIELD: Class-wise breakdown for the "Register" view
    classActivities: [
      { standard: "1st Std", activity: "English alphabets, Numbers, Chinese Whisper Game" },
      { standard: "2nd - 3rd Std", activity: "Maths (Sum & Product), Logical Reasoning" },
      { standard: "4th Std", activity: "Geometry & Scholarship Preparation" },
      { standard: "5th Std", activity: "English Grammar & Logical Reasoning" },
      { standard: "6th Std", activity: "LCM, HCF, and History" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 102,
    year: 2026,
    date: "January 03, 2026", // Savitribai Phule Jayanti (Approx)
    weekLabel: "Week 17",
    title: "Savitribai Phule Jayanti & Food Fest",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "All Standards",
    subject: "Value Education & Celebration",
    thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop", // Celebration/Books
    volunteers: 20,
    shortDescription: "Celebrating the pioneer of girls' education followed by a student-led Food Festival.",
    description: `The session began with a tribute to Savitribai Phule. Students delivered short speeches about her contribution to girls' education. 
    
    Later, volunteers participated in the 'School Food Festival' where students prepared and sold food at stalls, learning real-world management skills. Regular teaching continued for Scholarship batches.`,
    learningOutcome: "Inspiration from history and entrepreneurial skills through the food stall activity.",
    classActivities: [
      { standard: "All Students", activity: "Speeches on Savitribai Phule & Food Festival" },
      { standard: "1st - 2nd Std", activity: "Self-Introduction in English" },
      { standard: "4th - 5th Std", activity: "Scholarship Practice (English)" },
      { standard: "7th Std", activity: "Computer Lab: File & Folder Operations" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564429238980-16e22e18ff74?w=600&h=400&fit=crop"
    ]
  },
  
  // --- 2025 Sessions ---
  {
    id: 103,
    year: 2025,
    date: "December 20, 2025",
    weekLabel: "Week 15",
    title: "Computer Awareness & AI Learning",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "2nd - 7th Standard",
    subject: "Technology",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop", // Computer
    volunteers: 12,
    shortDescription: "Bridging the digital divide with basics of Hardware and Introduction to AI.",
    description: `A tech-focused Saturday! We introduced students to computer hardware components. The highlight was a live demonstration of AI tools like ChatGPT.
    
    We explained how AI can be a 'Study Buddy' and the importance of using technology responsibly. The curiosity in the room was electric!`,
    learningOutcome: "Digital literacy and awareness of modern AI tools.",
    classActivities: [
      { standard: "2nd - 7th Std", activity: "Computer Hardware Basics & Networking" },
      { standard: "Senior Group", activity: "Intro to AI (ChatGPT) & Responsible Use" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 104,
    year: 2025,
    date: "December 06, 2025",
    weekLabel: "Week 12",
    title: "Mahaparinirvan Diwas & NMMS Prep",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "1st - 7th Standard",
    subject: "Social Awareness & Comp Exams",
    thumbnail: "https://images.unsplash.com/photo-1544367563-12123d8d5e64?w=400&h=300&fit=crop",
    volunteers: 15,
    shortDescription: "Tribute to Dr. Babasaheb Ambedkar and starting the new NMMS Exam batch.",
    description: `We observed Mahaparinirvan Diwas with a session on Dr. Babasaheb Ambedkar's role in shaping the Constitution.
    
    Academically, we launched the new NMMS preparation batch for 7th standard, starting with MAT (Mental Ability Test) questions.`,
    learningOutcome: "Social awareness regarding the Constitution and competitive exam readiness.",
    classActivities: [
      { standard: "All Students", activity: "Tribute to Dr. Babasaheb Ambedkar" },
      { standard: "4th - 5th Std", activity: "Mental Ability: Calendar & Date Concepts" },
      { standard: "7th Std", activity: "NMMS Batch: Intro to MAT" },
      { standard: "6th Std", activity: "Computer Lab Session" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544367563-12123d8d5e64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop"
    ]
  }
];

// --- Helper Functions ---

// Get sessions by year (Sorted by Week/Date descending)
export const getTeachingSessionsByYear = (year) => {
  return teachingSessions
    .filter(session => session.year === parseInt(year))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Get session by ID
export const getTeachingSessionById = (id) => {
  return teachingSessions.find(session => session.id === parseInt(id));
};

// Get distinct years available in data
export const getTeachingYears = () => {
  return [...new Set(teachingSessions.map(s => s.year))].sort((a, b) => b - a);
};

// Get sessions by subject
export const getSessionsBySubject = (subjectFragment) => {
  return teachingSessions.filter(session => 
    session.subject.toLowerCase().includes(subjectFragment.toLowerCase())
  );
};

export default teachingSessions;