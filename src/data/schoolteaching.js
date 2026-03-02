/**
 * School Teaching Data
 * Contains records of weekly teaching sessions conducted by NSS volunteers
 * Schedule: Every Saturday
 */

export const teachingSessions = [
  // --- 2026 Sessions ---
  {
    id: "2026_week_1",
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
    id: "2026_week_17",
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
    id: "2025_week_1",
    year: 2025,
    date: "July 05, 2025",
    weekLabel: "Week 1",
    title: "Computer Awareness & Basic English",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "2nd - 7th Standard",
    subject: "Technology & Language",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    volunteers: 5,
    shortDescription: "The first NSS school teaching session of 2025 covering computer basics, mathematical shapes, and English fundamentals.",
    description: `For the first NSS school teaching activity, a total of 5 volunteers were present and actively involved throughout the session. Responsibilities were shared among the volunteers, including classroom teaching, student interaction, guidance, and maintaining discipline.

    The 7th class students were introduced to the computer laboratory, where they learned basic awareness about computers and their usage. The 2nd class students were taught basic shapes in Mathematics through simple explanations and examples. Students from Classes 3rd to 6th were taught basic English, focusing on simple vocabulary, sentence formation, and daily-use words. The activity contributed positively to the academic development and confidence of the students.`,
    learningOutcome: "Digital literacy for senior students; foundational math concepts through shapes; improved English vocabulary and comprehension skills.",
    classActivities: [
      { standard: "7th Std", activity: "Computer Lab: Basic Computer Awareness & Usage" },
      { standard: "2nd Std", activity: "Mathematics: Basic Shapes" },
      { standard: "3rd - 6th Std", activity: "Basic English: Vocabulary, Sentence Formation & Daily-use Words" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "2025_week_2",
    year: 2025,
    date: "July 12, 2025",
    weekLabel: "Week 2",
    title: "Sports Week: Physical Fitness & Outdoor Games",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "All Standards",
    subject: "Physical Education & Health",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
    volunteers: 4,
    shortDescription: "This week session promoted physical fitness, healthy habits, and teamwork through traditional outdoor games.",
    description: ` NSS School Teaching Activity was conducted during week with the aim of promoting physical fitness and healthy habits among school students. Volunteers explained the importance of regular physical exercise and how daily workouts help in maintaining good health, improving concentration, and building discipline.

    To make the session engaging, the volunteers organized outdoor games including traditional games such as kho-kho. The rules were explained in a simple and clear manner so that students from all classes could participate comfortably. The volunteers guided the students throughout, ensured proper coordination, and maintained discipline and safety. At the end of the session, small gifts in the form of flowers were distributed to appreciate and motivate the students.`,
    learningOutcome: "Understanding of physical fitness importance; improved teamwork, sportsmanship, discipline, and confidence through active participation in outdoor games.",
    classActivities: [
      { standard: "All Students", activity: "Physical Fitness Awareness & Importance of Daily Exercise" },
      { standard: "All Students", activity: "Outdoor Games: Kho-Kho & Traditional Games" },
      { standard: "All Students", activity: "Gift Distribution (Flowers) for Motivation" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461896836934-bd45ba8f8e7a?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "2025_week_3",
    year: 2025,
    date: "July 19, 2025",
    weekLabel: "Week 3",
    title: "Computer Skills, Maths & English Chaudakhadi",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "1st - 7th Standard",
    subject: "Technology, Maths & Language",
    thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=300&fit=crop",
    volunteers: 4,
    shortDescription: "Subject-wise academic support covering computer skills with Paint, basic Maths, and English Chaudakhadi.",
    description: `The third NSS School Teaching Activity was conducted with the aim of providing subject-wise academic support to students of different classes. Volunteers taught basic computer skills to 7th standard students in the computer laboratory, including simple drawing activities using the Paint application to develop practical understanding.

    Basic Mathematics concepts were taught to 1st and 2nd standard students using simple examples to strengthen their numerical foundation. For students from 3rd to 6th standard, English teaching sessions were conducted with a focus on English Chaudakhadi, which helped in building a strong foundation for English reading and pronunciation.`,
    learningOutcome: "Digital learning through Paint for seniors; improved numerical foundation for juniors; strengthened English reading and pronunciation through Chaudakhadi.",
    classActivities: [
      { standard: "7th Std", activity: "Computer Lab: Drawing with MS Paint & Basic Computer Skills" },
      { standard: "1st - 2nd Std", activity: "Basic Mathematics Concepts" },
      { standard: "3rd - 6th Std", activity: "English Chaudakhadi: Reading & Pronunciation Foundation" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "2025_week_4",
    year: 2025,
    date: "August 02, 2025",
    weekLabel: "Week 4",
    title: "Computer Concepts & English Learning",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "1st - 7th Standard",
    subject: "Technology & Language",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    volunteers: 4,
    shortDescription: "Strengthening computer knowledge through Paint activities and English language skills through Chaudakhadi revision.",
    description: `The fourth NSS School Teaching Activity was conducted with the objective of strengthening computer knowledge and English language skills among students. Volunteers taught basic computer concepts to fourth standard students along with simple practical activities using the Paint application to help them understand computer usage in an interactive manner.

    For first standard students, English teaching was conducted through fun-based learning methods by introducing English letters using words and images. Students from second to seventh standard were given revision of Chaudakhadi and were guided in basic English word spelling formation to strengthen their reading and writing foundation.`,
    learningOutcome: "Improved understanding of basic computer concepts; familiarity with English letters for juniors; strengthened English reading, writing, and pronunciation through Chaudakhadi revision.",
    classActivities: [
      { standard: "4th Std", activity: "Basic Computer Concepts & Paint Application" },
      { standard: "1st Std", activity: "English Letters through Words & Images" },
      { standard: "2nd - 7th Std", activity: "Chaudakhadi Revision & English Word Spelling Formation" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "2025_week_5",
    year: 2025,
    date: "August 15, 2025",
    weekLabel: "Week 5",
    title: "Independence Day Celebration",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "All Standards",
    subject: "Value Education & Patriotism",
    thumbnail: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=300&fit=crop",
    volunteers: 5,
    shortDescription: "Independence Day celebration with flag hoisting, physical exercises, and felicitation of NSS volunteers by the school principal.",
    description: `The fifth NSS School Teaching Activity was conducted on the occasion of Independence Day at the school premises. The flag hoisting ceremony was carried out by the chief guest in the presence of the principal, school teachers, students, and NSS volunteers.

    Before the flag hoisting ceremony, NSS volunteers conducted physical exercises with the students to promote physical fitness and instill a sense of discipline. The chief guest and the principal addressed the students and NSS volunteers, highlighting the importance of Independence Day and encouraging them to follow the values of unity, responsibility, and patriotism. The NSS volunteers were felicitated by the school principal in appreciation of their continuous contribution and dedicated service.`,
    learningOutcome: "Awareness about the significance of Independence Day; values of unity, responsibility, and patriotism; boosted volunteer morale through felicitation.",
    classActivities: [
      { standard: "All Students", activity: "Flag Hoisting Ceremony & Independence Day Address" },
      { standard: "All Students", activity: "Physical Exercises & Discipline Training" },
      { standard: "NSS Volunteers", activity: "Felicitation by School Principal" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "2025_week_6",
    year: 2025,
    date: "August 23, 2025",
    weekLabel: "Week 6",
    title: "Scholarship Prep & Computer Education",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "1st - 7th Standard",
    subject: "Mental Ability, Technology & Language",
    thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
    volunteers: 4,
    shortDescription: "Scholarship Mental Ability prep for 4th-5th std, computer practicals with Paint & MS Word for seniors, and English basics for juniors.",
    description: `The sixth NSS School Teaching Activity was conducted with the objective of providing academic support based on syllabus requirements. Volunteers taught Mental Ability syllabus to fourth and fifth standard students preparing for scholarship examinations, with concepts explained in a simple manner to improve logical thinking and problem-solving skills.

    For sixth and seventh standard students, basic computer education was provided, including practical sessions on Paint and basic operations of MS Word. First standard students were taught basic English letters using images and words. English order and action words were taught to second and third standard students to improve their understanding of sentence formation and basic language usage.`,
    learningOutcome: "Improved logical thinking for scholarship students; practical knowledge of Paint and MS Word; familiarity with English letters, order words, and action words.",
    classActivities: [
      { standard: "4th - 5th Std", activity: "Mental Ability Syllabus for Scholarship Preparation" },
      { standard: "6th - 7th Std", activity: "Computer Lab: Paint & MS Word Basics" },
      { standard: "1st Std", activity: "English Letters through Images & Words" },
      { standard: "2nd - 3rd Std", activity: "English Order Words & Action Words" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "2025_week_7",
    year: 2025,
    date: "September 13, 2025",
    weekLabel: "Week 7",
    title: "English Self-Introduction Practice",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "2nd - 7th Standard",
    subject: "English Communication",
    thumbnail: "https://images.unsplash.com/photo-1544367563-12123d8d5e64?w=400&h=300&fit=crop",
    volunteers: 3,
    shortDescription: "Building confidence in English speaking through self-introduction practice for all students from 2nd to 7th standard.",
    description: `The seventh NSS School Teaching Activity was conducted with the objective of improving English speaking skills and building confidence among students. Volunteers taught students from second to seventh standard how to introduce themselves in English. Simple sentence structures and commonly used expressions were explained to help students understand the basics of self-introduction.

    Each student was given an opportunity to introduce themselves individually in English. Volunteers guided and corrected students wherever required, helping them gain confidence and overcome hesitation while speaking in English.`,
    learningOutcome: "Improved English speaking skills; confidence in communication; ability to use simple English sentences correctly; reduced fear of speaking English.",
    classActivities: [
      { standard: "2nd - 7th Std", activity: "English Self-Introduction: Sentence Formation & Practice" },
      { standard: "2nd - 7th Std", activity: "Individual Speaking Practice with Volunteer Guidance" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544367563-12123d8d5e64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "2025_week_8",
    year: 2025,
    date: "September 20, 2025",
    weekLabel: "Week 8",
    title: "Scholarship Batch Launch & MAT Prep",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "4th - 5th Standard",
    subject: "Competitive Exam Preparation",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    volunteers: 5,
    shortDescription: "Dedicated scholarship batch started for 4th-5th std with exam pattern orientation and Mental Ability Test syllabus teaching.",
    description: `The eighth NSS School Teaching Activity focused on academic guidance for scholarship aspirants. A dedicated scholarship batch was started for fourth and fifth standard students to provide focused preparation for competitive examinations. Volunteers explained the structure of the scholarship examination, including the paper pattern and marking scheme, to help students understand the examination format clearly.

    After the orientation session, teaching of the Mental Ability Test syllabus was started. Volunteers explained basic concepts in a simple and step-by-step manner to develop logical thinking and problem-solving skills among students. Students were encouraged to ask questions to clarify their doubts.`,
    learningOutcome: "Clear understanding of scholarship exam pattern; increased motivation towards exam preparation; strengthened logical reasoning skills through MAT syllabus.",
    classActivities: [
      { standard: "4th - 5th Std", activity: "Scholarship Exam Pattern & Marking Scheme Orientation" },
      { standard: "4th - 5th Std", activity: "Mental Ability Test (MAT) Syllabus Teaching" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "2025_week_9",
    year: 2025,
    date: "September 27, 2025",
    weekLabel: "Week 9",
    title: "Subject-wise Teaching & Activity-based Learning",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "1st - 7th Standard",
    subject: "Maths, Science & Language",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    volunteers: 6,
    shortDescription: "Activity-based learning with Mental Ability for scholarship students, solar system for 3rd std, and interactive games for juniors.",
    description: `The ninth NSS School Teaching Activity was conducted with a focus on subject-wise teaching and activity-based learning. Volunteers taught Mental Ability concepts to fourth and fifth standard students to support their scholarship preparation. Multiplication and division were taught to sixth and seventh standard students using simple explanations and practice examples.

    For second standard students, a fun learning activity was conducted by giving basic shapes and asking them to write their spellings. Third standard students were taught basic concepts of the solar system. First standard students participated in interactive games involving English letters and shapes to make learning enjoyable.`,
    learningOutcome: "Improved Mental Ability concepts for scholarship students; strengthened multiplication and division skills; spelling improvement through shapes; basic understanding of the solar system.",
    classActivities: [
      { standard: "4th - 5th Std", activity: "Mental Ability Concepts for Scholarship Preparation" },
      { standard: "6th - 7th Std", activity: "Mathematics: Multiplication & Division" },
      { standard: "2nd Std", activity: "Fun Activity: Shapes & Spelling" },
      { standard: "3rd Std", activity: "Science: Basic Concepts of the Solar System" },
      { standard: "1st Std", activity: "Interactive Games: English Letters & Shapes" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "2025_week_10",
    year: 2025,
    date: "October 04, 2025",
    weekLabel: "Week 10",
    title: "Holistic Academic Support & Storytelling",
    schoolName: "Vimlabai Lunkad Vidyalaya, Gultekadi",
    targetClass: "1st - 7th Standard",
    subject: "English, Maths, History & Technology",
    thumbnail: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
    volunteers: 6,
    shortDescription: "Comprehensive academic support with English storytelling for 4th std, phonics for juniors, and scholarship English prep for 5th std.",
    description: `The tenth NSS School Teaching Activity focused on subject-wise academic support for students of different classes. First standard students were taught English alphabets and basic word formation. Sixth and seventh standard students were taught Mathematics and basic computer concepts.

    Second and third standard students were engaged in English learning through words from all alphabets, drawing activities, pronunciation, and phonics. Fourth standard students were taught English through storytelling, including the stories of the rabbit and the tortoise and Maya the milkmaid, followed by question and answers, along with reading of History Chapter 1. Fifth standard scholarship students were taught the English syllabus as part of their scholarship preparation.`,
    learningOutcome: "Improved English alphabets and word formation; strengthened Maths and computer knowledge for seniors; better pronunciation and phonics; enhanced comprehension through storytelling; scholarship English syllabus clarity.",
    classActivities: [
      { standard: "1st Std", activity: "English Alphabets & Basic Word Formation" },
      { standard: "6th - 7th Std", activity: "Mathematics & Basic Computer Concepts" },
      { standard: "2nd - 3rd Std", activity: "English: Alphabets, Drawing, Pronunciation & Phonics" },
      { standard: "4th Std", activity: "English Storytelling (Rabbit & Tortoise, Maya the Milkmaid) & History Ch.1" },
      { standard: "5th Std", activity: "Scholarship Preparation: English Syllabus" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"
    ]
  }
];

// --- Helper Functions ---

// Get sessions by year (Sorted by Week/Date ascending - chronological)
export const getTeachingSessionsByYear = (year) => {
  return teachingSessions
    .filter(session => session.year === parseInt(year))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};

// Get session by ID
export const getTeachingSessionById = (id) => {
  return teachingSessions.find(session => String(session.id) === String(id));
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