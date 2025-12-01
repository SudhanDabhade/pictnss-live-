/**
 * Team Data - Dummy data for NSS team members
 * Contains Program Officers, Student Leaders, and Volunteers
 */

export const teamMembers = {
  // Program Officers
  programOfficers: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "NSS Program Officer",
      department: "Computer Engineering",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote: "Service to humanity is service to God. NSS provides the platform for students to become responsible citizens.",
      email: "rajesh.kumar@pict.edu",
      experience: "15+ years in NSS",
    },
    {
      id: 2,
      name: "Prof. Meera Sharma",
      role: "Assistant Program Officer",
      department: "Electronics & Telecommunication",
      profilePic: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      quote: "Empowering youth through social service creates leaders who can transform society.",
      email: "meera.sharma@pict.edu",
      experience: "8 years in NSS",
    },
  ],

  // Student Leaders (Current Year 2025)
  studentLeaders: [
    {
      id: 3,
      name: "Arjun Patel",
      role: "NSS Secretary",
      year: "Final Year - IT",
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      quote: "Leading NSS has taught me that true leadership is about serving others selflessly.",
    },
    {
      id: 4,
      name: "Priya Deshmukh",
      role: "Joint Secretary",
      year: "Third Year - Computer",
      profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      quote: "Every small act of kindness creates ripples of positive change in society.",
    },
    {
      id: 5,
      name: "Rohit Singh",
      role: "Activities Coordinator",
      year: "Third Year - E&TC",
      profilePic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      quote: "Organizing activities that bring smiles to people's faces is the best feeling.",
    },
    {
      id: 6,
      name: "Ananya Kulkarni",
      role: "Documentation Head",
      year: "Third Year - IT",
      profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      quote: "Capturing moments of service preserves the spirit of NSS for generations.",
    },
    {
      id: 7,
      name: "Vikram Joshi",
      role: "Camp Coordinator",
      year: "Final Year - Computer",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote: "NSS camps are where bonds are formed and lives are transformed.",
    },
    {
      id: 8,
      name: "Sneha Patil",
      role: "Social Media Head",
      year: "Second Year - IT",
      profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      quote: "Spreading awareness through social media amplifies our impact exponentially.",
    },
  ],

  // Active Volunteers
  volunteers: [
    {
      id: 9,
      name: "Amit Kumar",
      role: "Volunteer",
      year: "Second Year - Computer",
      profilePic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      quote: "Volunteering has made me a better person.",
    },
    {
      id: 10,
      name: "Riya Sharma",
      role: "Volunteer",
      year: "Second Year - IT",
      profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      quote: "Service before self is my mantra.",
    },
    {
      id: 11,
      name: "Karan Mehta",
      role: "Volunteer",
      year: "Third Year - E&TC",
      profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      quote: "Every activity teaches me something new.",
    },
    {
      id: 12,
      name: "Pooja Gaikwad",
      role: "Volunteer",
      year: "Second Year - Computer",
      profilePic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face",
      quote: "NSS gave me a purpose beyond academics.",
    },
    {
      id: 13,
      name: "Rahul Jadhav",
      role: "Volunteer",
      year: "Third Year - IT",
      profilePic: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
      quote: "Making a difference one activity at a time.",
    },
    {
      id: 14,
      name: "Neha Pawar",
      role: "Volunteer",
      year: "Second Year - E&TC",
      profilePic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      quote: "Community service is my happy place.",
    },
    {
      id: 15,
      name: "Aditya Bhosle",
      role: "Volunteer",
      year: "Third Year - Computer",
      profilePic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face",
      quote: "Together we can achieve anything.",
    },
    {
      id: 16,
      name: "Sakshi Kamble",
      role: "Volunteer",
      year: "Second Year - IT",
      profilePic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face",
      quote: "NSS is more than volunteering, it's a family.",
    },
  ],
};

// Helper function to get all team members as flat array
export const getAllMembers = () => {
  return [
    ...teamMembers.programOfficers,
    ...teamMembers.studentLeaders,
    ...teamMembers.volunteers,
  ];
};

// Get members by role category
export const getMembersByCategory = (category) => {
  return teamMembers[category] || [];
};

export default teamMembers;
