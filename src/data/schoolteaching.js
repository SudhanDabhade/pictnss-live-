/**
 * Magazine Data
 * NSS Year-wise digital magazine/yearbook content
 * Each magazine contains pages with images, articles, and highlights
 */

export const magazines = [
  {
    id: 'mag-2025',
    year: 2025,
    title: 'Samarpan 2025',
    subtitle: 'Journey of Service Excellence',
    coverImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400',
    accentColor: '#1E40AF', // NSS Blue
    secondaryAccent: '#DC2626', // NSS Red
    totalPages: 24,
    publishDate: 'March 2025',
    description: 'Celebrating another remarkable year of service, compassion, and community building by PICT NSS Unit.',
    pages: [
      {
        pageNum: 1,
        type: 'title',
        title: 'Samarpan 2025',
        subtitle: 'PICT NSS Unit Annual Magazine',
        content: 'Not Me, But You',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600'
      },
      {
        pageNum: 2,
        type: 'message',
        title: "Principal's Message",
        author: 'Dr. Rajesh Kumar',
        designation: 'Principal, PICT',
        content: 'It gives me immense pleasure to present the 2025 edition of Samarpan. The NSS unit of PICT has consistently demonstrated exceptional commitment to community service. This year saw record-breaking participation in various social initiatives, from blood donation drives to environmental campaigns. I congratulate the entire team for their dedication and urge them to continue inspiring others.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      {
        pageNum: 3,
        type: 'message',
        title: "Program Officer's Note",
        author: 'Prof. Sneha Patil',
        designation: 'NSS Program Officer',
        content: 'The journey of 2024-25 has been extraordinary. Our volunteers have touched countless lives through 50+ activities, 3 special camps, and numerous awareness programs. From plantation drives to health camps, from literacy programs to disaster relief, our students have shown that youth can be the catalyst for positive change.',
        image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400'
      },
      {
        pageNum: 4,
        type: 'article',
        title: 'Year in Numbers',
        content: 'This year witnessed phenomenal growth in NSS activities.',
        stats: [
          { label: 'Volunteers', value: '500+' },
          { label: 'Activities', value: '50+' },
          { label: 'Service Hours', value: '15,000+' },
          { label: 'Lives Impacted', value: '10,000+' }
        ]
      },
      {
        pageNum: 5,
        type: 'gallery',
        title: 'Memorable Moments',
        images: [
          { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300', caption: 'Blood Donation Camp' },
          { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300', caption: 'Tree Plantation' },
          { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300', caption: 'Village Outreach' },
          { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=300', caption: 'Awareness Rally' }
        ]
      },
      {
        pageNum: 6,
        type: 'article',
        title: 'Special Camp 2025',
        subtitle: 'Village Adoption Program - Wagholi',
        content: 'The 7-day special camp at Wagholi was a transformative experience. 120 volunteers worked tirelessly on sanitation, education, and health initiatives. Highlights included construction of 5 soak pits, teaching 200+ students, and conducting health checkups for 500+ villagers. The camp fostered lasting bonds between students and the community.',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600'
      },
      {
        pageNum: 7,
        type: 'gallery',
        title: 'Camp Highlights',
        images: [
          { src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300', caption: 'Community Work' },
          { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300', caption: 'Teaching Session' },
          { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300', caption: 'Health Camp' },
          { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300', caption: 'Shramdan' }
        ]
      },
      {
        pageNum: 8,
        type: 'article',
        title: 'Blood Donation Drives',
        content: 'Our blood donation campaigns collected 450+ units of blood this year across 4 mega drives. Partnership with Sassoon Hospital and Jankalyan Blood Bank ensured maximum reach and impact. Special recognition to 25 regular donors who have donated more than 5 times.',
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600'
      },
      {
        pageNum: 9,
        type: 'article',
        title: 'Environmental Initiatives',
        subtitle: 'Go Green Campaign',
        content: 'The Go Green campaign planted 2000+ saplings across Pune. Weekly cleanliness drives at Mula-Mutha river, plastic-free campus initiatives, and e-waste collection drives marked our commitment to environmental sustainability. The "Say No to Single-Use Plastic" campaign reduced plastic usage on campus by 40%.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600'
      },
      {
        pageNum: 10,
        type: 'team',
        title: 'Core Committee 2024-25',
        members: [
          { name: 'Aarav Sharma', role: 'President', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
          { name: 'Priya Deshmukh', role: 'Vice President', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
          { name: 'Rahul Mehta', role: 'Secretary', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
          { name: 'Sneha Kulkarni', role: 'Treasurer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' }
        ]
      },
      {
        pageNum: 11,
        type: 'article',
        title: 'Awards & Recognition',
        content: 'PICT NSS Unit received the "Best NSS Unit" award from Savitribai Phule Pune University for the third consecutive year. Five volunteers received state-level recognition for exceptional service. The unit was also appreciated by district administration for flood relief work.',
        image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600'
      },
      {
        pageNum: 12,
        type: 'closing',
        title: 'Looking Ahead',
        content: 'As we conclude this year, we look forward to expanding our reach and impact. New initiatives in digital literacy, mental health awareness, and skill development are planned. Together, we will continue to embody the spirit of "Not Me, But You".',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600'
      }
    ]
  },
  {
    id: 'mag-2024',
    year: 2024,
    title: 'Samarpan 2024',
    subtitle: 'Serving with Purpose',
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400',
    accentColor: '#1E40AF',
    secondaryAccent: '#DC2626',
    totalPages: 20,
    publishDate: 'March 2024',
    description: 'A year of resilience, dedication, and meaningful community engagement.',
    pages: [
      {
        pageNum: 1,
        type: 'title',
        title: 'Samarpan 2024',
        subtitle: 'PICT NSS Unit Annual Magazine',
        content: 'Not Me, But You',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600'
      },
      {
        pageNum: 2,
        type: 'message',
        title: "Principal's Message",
        author: 'Dr. Rajesh Kumar',
        designation: 'Principal, PICT',
        content: 'The NSS unit continues to be the pride of PICT. Their unwavering commitment to social service inspires the entire college community. This year marked a return to full-scale activities post-pandemic, and our volunteers exceeded all expectations.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      {
        pageNum: 3,
        type: 'article',
        title: 'Year Highlights',
        content: 'From conducting the largest blood donation camp in PICT history to organizing skill development workshops for rural youth, 2023-24 was a year of firsts and achievements.',
        stats: [
          { label: 'Volunteers', value: '450+' },
          { label: 'Activities', value: '45+' },
          { label: 'Service Hours', value: '12,000+' },
          { label: 'Blood Units', value: '380+' }
        ]
      },
      {
        pageNum: 4,
        type: 'article',
        title: 'Special Camp - Uruli Kanchan',
        content: 'The village adoption camp at Uruli Kanchan focused on water conservation and sanitation. Construction of check dams, cleaning of wells, and awareness programs on water harvesting were the highlights. The camp also featured a medical camp serving 300+ villagers.',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600'
      },
      {
        pageNum: 5,
        type: 'gallery',
        title: 'Activity Snapshots',
        images: [
          { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300', caption: 'Shramdan' },
          { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300', caption: 'Blood Donation' },
          { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=300', caption: 'Rally' },
          { src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300', caption: 'Construction' }
        ]
      },
      {
        pageNum: 6,
        type: 'team',
        title: 'Core Committee 2023-24',
        members: [
          { name: 'Vikram Joshi', role: 'President', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
          { name: 'Ananya Nair', role: 'Vice President', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150' },
          { name: 'Rohan Pawar', role: 'Secretary', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150' },
          { name: 'Kavya Shah', role: 'Treasurer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' }
        ]
      },
      {
        pageNum: 7,
        type: 'closing',
        title: 'Gratitude',
        content: 'We thank all volunteers, faculty advisors, and college administration for their continued support. Special thanks to our partner NGOs and government bodies who made our initiatives successful.',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600'
      }
    ]
  },
  {
    id: 'mag-2023',
    year: 2023,
    title: 'Samarpan 2023',
    subtitle: 'Rising Together',
    coverImage: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400',
    accentColor: '#1E40AF',
    secondaryAccent: '#DC2626',
    totalPages: 18,
    publishDate: 'March 2023',
    description: 'Post-pandemic resurgence of community service and social responsibility.',
    pages: [
      {
        pageNum: 1,
        type: 'title',
        title: 'Samarpan 2023',
        subtitle: 'PICT NSS Unit Annual Magazine',
        content: 'Not Me, But You',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600'
      },
      {
        pageNum: 2,
        type: 'message',
        title: "Program Officer's Note",
        author: 'Prof. Anil Desai',
        designation: 'NSS Program Officer',
        content: 'After two years of restricted activities due to the pandemic, 2022-23 marked our triumphant return to full-fledged community service. Our volunteers showed remarkable enthusiasm and dedication.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      {
        pageNum: 3,
        type: 'article',
        title: 'Back in Action',
        content: 'The year began with orientation programs for 200+ new volunteers. Workshops on leadership, first aid, and disaster management equipped our team for the challenges ahead.',
        stats: [
          { label: 'New Volunteers', value: '200+' },
          { label: 'Activities', value: '35+' },
          { label: 'Service Hours', value: '8,000+' }
        ]
      },
      {
        pageNum: 4,
        type: 'article',
        title: 'Health Awareness Campaign',
        content: 'COVID recovery support, vaccination drives, and mental health awareness programs were our priority. We organized 10+ health camps reaching 2000+ beneficiaries.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600'
      },
      {
        pageNum: 5,
        type: 'gallery',
        title: 'Moments to Remember',
        images: [
          { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300', caption: 'Education Drive' },
          { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300', caption: 'Tree Plantation' },
          { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300', caption: 'Blood Donation' },
          { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300', caption: 'Camp Activities' }
        ]
      },
      {
        pageNum: 6,
        type: 'closing',
        title: 'Moving Forward',
        content: 'As we look back at a year of recovery and growth, we are committed to expanding our impact and reaching more communities in need.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600'
      }
    ]
  },
  {
    id: 'mag-2022',
    year: 2022,
    title: 'Samarpan 2022',
    subtitle: 'Service Beyond Boundaries',
    coverImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400',
    accentColor: '#1E40AF',
    secondaryAccent: '#DC2626',
    totalPages: 16,
    publishDate: 'March 2022',
    description: 'Virtual volunteering and innovative community service during challenging times.',
    pages: [
      {
        pageNum: 1,
        type: 'title',
        title: 'Samarpan 2022',
        subtitle: 'PICT NSS Unit Annual Magazine',
        content: 'Not Me, But You',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600'
      },
      {
        pageNum: 2,
        type: 'article',
        title: 'Adapting to Change',
        content: 'The pandemic taught us that service knows no boundaries. Virtual volunteering became our new normal as we conducted online tutoring, digital literacy programs, and mental health support sessions.',
        stats: [
          { label: 'Online Sessions', value: '100+' },
          { label: 'Students Tutored', value: '500+' },
          { label: 'Webinars', value: '25+' }
        ]
      },
      {
        pageNum: 3,
        type: 'article',
        title: 'COVID Relief Work',
        content: 'Distribution of ration kits, medicines, and sanitizers to underprivileged families. Our volunteers also helped in vaccination registration and awareness.',
        image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600'
      },
      {
        pageNum: 4,
        type: 'gallery',
        title: 'Virtual & On-Ground',
        images: [
          { src: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=300', caption: 'Online Teaching' },
          { src: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300', caption: 'Relief Work' },
          { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300', caption: 'Health Camp' },
          { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300', caption: 'Donation Drive' }
        ]
      },
      {
        pageNum: 5,
        type: 'closing',
        title: 'Resilience',
        content: 'Despite limitations, our spirit remained unbroken. We learned that true service is about intention and impact, not just physical presence.',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600'
      }
    ]
  },
  {
    id: 'mag-2021',
    year: 2021,
    title: 'Samarpan 2021',
    subtitle: 'Hope in Adversity',
    coverImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400',
    accentColor: '#1E40AF',
    secondaryAccent: '#DC2626',
    totalPages: 14,
    publishDate: 'March 2021',
    description: 'Finding ways to serve when the world stood still.',
    pages: [
      {
        pageNum: 1,
        type: 'title',
        title: 'Samarpan 2021',
        subtitle: 'PICT NSS Unit Annual Magazine',
        content: 'Not Me, But You',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600'
      },
      {
        pageNum: 2,
        type: 'message',
        title: 'A Year Like No Other',
        content: 'The COVID-19 pandemic challenged us in unprecedented ways. But our volunteers rose to the occasion, finding innovative ways to serve from home while supporting frontline workers.',
        image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600'
      },
      {
        pageNum: 3,
        type: 'article',
        title: 'Virtual Volunteering',
        content: 'Online tutoring for students whose education was disrupted, digital literacy for senior citizens, and COVID awareness campaigns through social media.',
        stats: [
          { label: 'Online Volunteers', value: '150+' },
          { label: 'Awareness Posts', value: '200+' },
          { label: 'Families Helped', value: '300+' }
        ]
      },
      {
        pageNum: 4,
        type: 'article',
        title: 'Frontline Support',
        content: 'Providing meals and supplies to healthcare workers, assisting in hospital logistics, and creating awareness materials in multiple languages.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600'
      },
      {
        pageNum: 5,
        type: 'closing',
        title: 'Hope Prevails',
        content: 'Through the darkness of the pandemic, our volunteers became beacons of hope. We proved that the spirit of service cannot be quarantined.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600'
      }
    ]
  }
];

// Helper function to get magazine by year
export const getMagazineByYear = (year) => {
  return magazines.find(mag => mag.year === parseInt(year));
};

// Helper function to get all years
export const getMagazineYears = () => {
  return magazines.map(mag => mag.year).sort((a, b) => b - a);
};

export default magazines;
