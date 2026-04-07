/**
 * Blog Data - NSS Volunteer Experiences
 * Stores blog posts with localStorage persistence
 */

const STORAGE_KEY = 'pict_nss_blogs';

const seedBlogs = [
  {
    id: "rushikesh_nss_camp_2026",
    title: "My Unforgettable NSS Camp Experience at Mangdari",
    author: "Rushikesh Bhabad",
    date: "2026-01-28",
    category: "Experience",
    excerpt: "My experience at the NSS camp held at Mangdari was truly unforgettable and special, especially because it was my first-ever NSS camp.",
    image: "/blog_images/Rushikesh/camp-6.jpeg",
    coverImage: "/blog_images/Rushikesh/camp-6.jpeg",
    content: `My experience at the NSS camp held at Mangdari was truly unforgettable and special, especially because it was my first-ever NSS camp. As soon as I entered the village, I felt a unique sense of excitement and curiosity. Everything was new to me—the environment, the people, and the responsibilities we were about to take on. I wasn't sure how we would manage cooking, cleaning, and living independently for several days, but that uncertainty soon turned into confidence as our journey began.

On the first day, we reached the village and settled into the school where we were going to stay. After arranging our belongings, the camp officially began with an inauguration ceremony, which filled us with enthusiasm and a sense of purpose. From the very next day, we actively started participating in various social activities.

Our daily routine included contributing to the village in meaningful ways. We were involved in teaching school students, spreading awareness about cleanliness, and actively participating in cleaning drives. I personally contributed to cleaning the Vittal Mandir and the surrounding areas near the temple, which gave me a deep sense of satisfaction and responsibility towards the community.

One of the most significant roles I took on during the camp was being the Activity Lead for Cards and Government Schemes. Along with my friends from the 2nd and 3rd year, I worked on helping villagers access important government benefits. We assisted them in applying for schemes like Ayushman cards, Kisan cards, and Job cards. Not only did we help them with the application process, but we also explained the benefits of these schemes so they could make better use of them. Altogether, we successfully helped around 140 villagers, which was a proud and fulfilling achievement for me.

Apart from social work, one of the most unique experiences was managing our daily life independently. Cooking our own meals, preparing lunch and dinner together, and sharing responsibilities taught us teamwork, patience, and self-reliance. These small daily tasks became moments of bonding and enjoyment.

On the final day of the camp, we went trekking together. That experience, combined with all the memories we had created throughout the camp, made the ending very emotional yet joyful. Spending time with friends, working together for a cause, and living a simple village life made this journey incredibly meaningful.

Overall, this NSS camp was not just an activity—it was a life-changing experience. It taught me the importance of social service, teamwork, leadership, and gratitude. The memories, lessons, and friendships I gained during this camp will always stay with me.`,
    images: [
      "/blog_images/Rushikesh/camp-1.jpeg",
      "/blog_images/Rushikesh/camp-2.jpeg",
      "/blog_images/Rushikesh/camp-3.jpeg",
      "/blog_images/Rushikesh/camp-4.jpeg",
      "/blog_images/Rushikesh/camp-5.jpeg",
      "/blog_images/Rushikesh/camp-6.jpeg",
    ],
    likes: 12,
  },
];

// Load blogs from localStorage or use seed data
const loadBlogs = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge: ensure seed blogs are always present
      const seedIds = seedBlogs.map(b => b.id);
      const userBlogs = parsed.filter(b => !seedIds.includes(b.id));
      return [...seedBlogs, ...userBlogs];
    }
  } catch (e) {
    console.warn('Failed to load blogs from localStorage:', e);
  }
  return [...seedBlogs];
};

const saveBlogs = (blogs) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  } catch (e) {
    console.warn('Failed to save blogs to localStorage:', e);
  }
};

// Initialize
let blogs = loadBlogs();

export const getAllBlogs = () => {
  blogs = loadBlogs();
  return blogs;
};

export const latestBlogs = getAllBlogs();

export const getBlogById = (id) => {
  blogs = loadBlogs();
  return blogs.find(b => b.id === id);
};

export const addBlog = (blogData) => {
  blogs = loadBlogs();
  const newBlog = {
    ...blogData,
    id: blogData.id || `blog_${Date.now()}`,
    likes: 0,
  };
  blogs = [newBlog, ...blogs];
  saveBlogs(blogs);
  return newBlog;
};

export const toggleLike = (id) => {
  blogs = loadBlogs();
  const blog = blogs.find(b => b.id === id);
  if (blog) {
    blog.likes = (blog.likes || 0) + 1;
    saveBlogs(blogs);
  }
  return blog;
};
