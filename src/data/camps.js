/**
 * Camps Data - Dummy data for NSS camps
 * Contains camp information from 2021-2025 with schedules, testimonials, and activities
 */

export const camps = [
  // 2025 Camp
  {
    id: 1,
    year: 2025,
    title: "NSS special camp at Panvadi",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    location: "Panvadi, Tal: Purandar, Dist: Pune",
    dates: "January 20-26, 2025",
    volunteers: 120,
    shortDescription: "A 7-day special camp featuring 48 activities focused on community development, education, health, and environmental sustainability.",
    description: `The NSS Special Camp 2024-25 was successfully conducted at Panvadi Village, Purandar, from January 20th to 26th, 2025. A dedicated team of 120 volunteers spent a transformative week executing 48 diverse activities aimed at holistic community development and rural empowerment.

The camp's initiatives spanned several crucial areas of village life. Volunteers focused heavily on educational outreach by inaugurating a new school library, teaching Vedic mathematics, and conducting interactive science workshops for the local children. Environmental conservation was another major priority, driven by extensive tree plantation efforts, plastic waste recycling campaigns, and soil erosion prevention projects like 'Chari Khodane'. Furthermore, the team championed health and social welfare by organizing free medical and eye check-up camps, facilitating over 100 registrations for government schemes including Ayushman and E-shram cards, and raising awareness about digital literacy and women's empowerment through street plays.

Beyond infrastructure and education, the camp fostered deep cultural bonds through community events, such as a traditional Haldi Kunku, a Bhajan Sandhya, and interactive sports competitions. This impactful week culminated in a vibrant Republic Day Prabhat Feri and flag-hoisting ceremony alongside the local school and Grampanchayat, leaving a lasting legacy of unity, awareness, and development in Panvadi.`,
    schedule: [
      { day: "Day 1", summary: "The camp commenced with a grand Inauguration Ceremony attended by college dignitaries and village officials, where volunteers presented their 7-day action plan to the community. Later in the afternoon, the 50 volunteers participated in a comprehensive Team-Building session featuring ice-breaking exercises, Tug of War, Kho Kho, and strategic planning activities to foster unity and leadership for the week ahead." },
      { day: "Day 2", summary: "Day 2 was action-packed, starting with a motivational session on the 'Role of Youth in Nation Building' and a calming meditation session for the volunteers. The team then focused on education by setting up and inaugurating a new library for the local Z.P. School , which was followed by interactive activities including a Solar System guide , a 'Magic of Science' workshop , and an educational Treasure Hunt for the children. The day concluded with a strong emphasis on environmental responsibility, featuring a Swachhta Awareness Rally and a hands-on cleanliness drive to collect and recycle plastic garbage." },
      { day: "Day 3", summary: "Day 3 focused heavily on community welfare and women's empowerment. The day featured a Health and Eye Check-up Camp that provided free medical consultations to villagers. The team also organized a traditional Haldi Kunku and 'Home Minister' event for the village women, followed by a powerful street play raising awareness about women's rights and entrepreneurship. Educational initiatives continued with Navodaya exam preparation for school children, while volunteers began a door-to-door campaign for Ayushman, ABHA, and E-shram card registrations, and educated villagers on compost fertilizer methods." },
      { day: "Day 4", summary: "Day 4 was dedicated to awareness and holistic development. Volunteers engaged villagers through door-to-door campaigns focusing on wet and dry garbage management, online banking security, and government schemes. The schedule also included an 'Art of Investment' session, a thought-provoking talk on Science and Spirituality, and a crucial 'Good Touch Bad Touch' awareness workshop for school children. The day featured eco-friendly paper bag making and concluded with a soulful Bhajan Sandhya and a special dinner treat hosted by the PICT E&TC staff." },
      { day: "Day 5", summary: "Day 5 blended education, environment, and culture. The team promoted sustainability through a major tree plantation drive and physically demanding 'Chari Khodane' (digging trenches) to prevent soil erosion. School children enjoyed Vedic Math lessons, origami workshops, a general knowledge quiz, sports competitions, and career guidance sessions. The evening was highly interactive, featuring a street play on digital literacy, a collaborative cultural event with school kids, and a memorable Camp Fire highlighting the volunteers' talents." },
      { day: "Day 6", summary: "Day 6 prioritized infrastructure, safety, and physical fitness. Volunteers undertook a road beautification drive (Rasta Sushobhikaran), painted trees for conservation, and installed radium stickers on the Ghat roads to improve nighttime safety. The day also included an adventurous trek with villagers, aerobics, and self-defense training for school children. Crucial health and hygiene sessions were held, including a dedicated menstrual hygiene awareness workshop for school girls and a handwriting competition." },
      { day: "Day 7", summary: "The final day was a grand celebration of Republic Day, beginning with an early morning Prabhat Feri (rally) spreading patriotic messages. This was followed by a formal flag-hoisting ceremony in collaboration with the local school and Grampanchayat. The camp concluded with a touching Closing Ceremony attended by local dignitaries, featuring student performances, volunteer speeches sharing their transformative experiences, and a prize distribution recognizing the achievements made throughout the week." },
    ],
    testimonials: [
      { name: "Priya Sharma", role: "Volunteer", quote: "This camp changed my perspective on life. Working alongside villagers taught me the value of community and hard work." },
      { name: "Rahul Deshmukh", role: "Team Leader", quote: "Leading a team in such meaningful work was the most fulfilling experience of my college life." },
      { name: "Sunita Patil", role: "Village Resident", quote: "The students brought energy and hope to our village. We are grateful for their efforts." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
    ],
    activities: [
      {
        id: 1,
        title: "Road Repair & Infrastructure",
        coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        shortDescription: "Volunteers repaired damaged village roads and improved connectivity.",
        description: `The road repair project was one of the major initiatives undertaken during the camp. Volunteers worked alongside local villagers to repair over 500 meters of damaged roads that had been neglected for years.

The team used locally sourced materials and learned traditional road-building techniques from experienced village workers. The project improved accessibility for farmers transporting their produce and made it easier for emergency vehicles to reach the village.

This activity not only improved infrastructure but also created a lasting bond between volunteers and villagers who worked shoulder to shoulder under the sun.`,
        photos: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 2,
        title: "School Painting Project",
        coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
        shortDescription: "Transforming the village school with vibrant colors and educational murals.",
        description: `The school painting project transformed the dull village school into a vibrant learning space. Volunteers painted classrooms with bright, cheerful colors and created educational murals on the walls.

The murals included alphabets, numbers, maps of India, and inspirational quotes. Art students among the volunteers created beautiful illustrations depicting stories of famous Indian freedom fighters and scientists.

Children from the village actively participated, learning about colors and art while helping with simpler tasks. The school principal expressed that attendance improved significantly after the transformation.`,
        photos: [
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 3,
        title: "Health Checkup Camp",
        coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
        shortDescription: "Free medical checkups and health awareness for villagers.",
        description: `A comprehensive health checkup camp was organized in collaboration with local healthcare providers. Over 200 villagers received free medical consultations, basic health screenings, and medicines.

The camp included eye checkups, blood pressure monitoring, diabetes screening, and dental consultations. Volunteers assisted doctors, managed patient queues, and helped with medicine distribution.

Health awareness sessions were conducted on topics like hygiene, nutrition, and preventive healthcare. Pamphlets in local language were distributed to ensure the message reached everyone.`,
        photos: [
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 4,
        title: "Tree Plantation Drive",
        coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
        shortDescription: "Planting 500+ saplings to green the village surroundings.",
        description: `The tree plantation drive was a significant environmental initiative where volunteers planted over 500 saplings of various native species around the village.

Trees were planted along roads, near the school, around the community hall, and in degraded areas. Each volunteer was assigned specific saplings to care for, creating a sense of ownership and responsibility.

Local forest department officials provided guidance on proper planting techniques and species selection. The village committed to maintaining the saplings, with each family adopting a few trees.`,
        photos: [
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 5,
        title: "Cultural Exchange Program",
        coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
        shortDescription: "Celebrating diversity through performances and cultural sharing.",
        description: `The cultural exchange program was the highlight of the camp's evening activities. Volunteers and villagers shared their traditions, songs, dances, and stories in a beautiful display of cultural harmony.

Students performed folk dances from different states while villagers taught them local traditional dances. The program included singing sessions, storytelling by village elders, and a talent show.

This exchange fostered mutual respect and understanding between urban students and rural communities. Many volunteers expressed that these cultural interactions were the most memorable part of the camp.`,
        photos: [
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
        ]
      },
    ]
  },

  // 2024 Camp
  {
    id: 2,
    year: 2024,
    title: "NSS Special Camp 2024 - Velhe Taluka",
    thumbnail: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=400&h=300&fit=crop",
    location: "Velhe Taluka, Pune District",
    dates: "January 5-12, 2024",
    volunteers: 100,
    shortDescription: "Focused on environmental conservation and sustainable living practices.",
    description: `NSS Special Camp 2024 at Velhe Taluka emphasized environmental conservation and sustainable practices. The camp location, nestled in the Western Ghats, provided the perfect backdrop for nature-centric activities.

Volunteers participated in watershed management projects, organic farming demonstrations, and wildlife conservation awareness programs. The local tribal community shared their traditional knowledge about medicinal plants and forest conservation.

This camp left a lasting impact on both volunteers and the local community, with several sustainable initiatives continuing even after the camp ended.`,
    schedule: [
      { day: "Day 1", summary: "Arrival day - journey to camp site, setting up accommodations, welcome ceremony by tribal elders, and night trek orientation." },
      { day: "Day 2", summary: "Nature immersion - sunrise yoga, comprehensive watershed survey, tree plantation in degraded areas, and tribal folklore session." },
      { day: "Day 3", summary: "Water conservation - dam construction work, medicinal plant identification walk with tribal guides, sustainable agriculture workshop." },
      { day: "Day 4", summary: "Environmental action - river cleaning drive, wildlife awareness session, teaching at local school, traditional cooking demo." },
      { day: "Day 5", summary: "Community service - check dam repair, health camp for villagers, composting workshop, and cultural night performances." },
      { day: "Day 6", summary: "Celebration day - forest conservation work, Western Ghats documentary screening, sports competitions, community feast." },
      { day: "Day 7", summary: "Departure day - project handover to village committee, closing ceremony, feedback collection, and return journey." },
    ],
    testimonials: [
      { name: "Amit Kumar", role: "Volunteer", quote: "Living with nature for a week taught me more than a semester of environmental studies." },
      { name: "Dr. Meera Joshi", role: "Program Officer", quote: "The volunteers showed exemplary dedication in understanding and preserving local ecosystems." },
      { name: "Govind Gaikwad", role: "Tribal Elder", quote: "Young people caring for our forests gives us hope for the future." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop",
    ],
    activities: [
      {
        id: 1,
        title: "Watershed Management Project",
        coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        shortDescription: "Building check dams and improving water conservation in the region.",
        description: `The watershed management project was the cornerstone of the 2024 camp. Volunteers worked on building and repairing check dams to improve water retention in the drought-prone region.

Under the guidance of water conservation experts, students learned about contour trenching, percolation tanks, and rainwater harvesting. The project directly benefited over 50 farming families who depend on groundwater for irrigation.

The tribal community shared their ancestral knowledge about water sources and seasonal patterns, enriching the volunteers' understanding of sustainable water management.`,
        photos: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 2,
        title: "Medicinal Plants Documentation",
        coverImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        shortDescription: "Learning and documenting traditional medicinal plant knowledge.",
        description: `One of the most unique activities was the medicinal plants documentation project conducted with tribal elders. Volunteers learned to identify over 40 medicinal plants native to the Western Ghats.

The tribal Vaidyas (traditional healers) shared their ancestral knowledge about plant properties, preparation methods, and healing applications. Students created a comprehensive photo documentation with botanical information.

This initiative helped preserve traditional knowledge while creating awareness about the importance of forest conservation for medicinal biodiversity.`,
        photos: [
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 3,
        title: "River Cleaning Initiative",
        coverImage: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=300&fit=crop",
        shortDescription: "Cleaning local streams and raising awareness about water pollution.",
        description: `The river cleaning initiative focused on removing plastic waste and debris from local streams that serve as the village's primary water source.

Volunteers collected over 200 kg of waste, including plastic bottles, bags, and other non-biodegradable materials. The activity was accompanied by awareness sessions on proper waste disposal and the impact of pollution on aquatic ecosystems.

Local youth joined the initiative, forming an ongoing river guardians group to continue the cleanup efforts throughout the year.`,
        photos: [
          "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 4,
        title: "Sustainable Agriculture Workshop",
        coverImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop",
        shortDescription: "Learning organic farming and composting techniques.",
        description: `The sustainable agriculture workshop introduced volunteers and local farmers to organic farming practices. Experts demonstrated composting techniques, natural pest control, and crop rotation methods.

Hands-on sessions included preparing vermicompost beds, making organic fertilizers, and understanding soil health. Farmers shared their challenges and learned about government schemes supporting organic farming.

The workshop resulted in five farmers committing to transition to organic practices, with NSS volunteers pledging to provide ongoing support and market linkages.`,
        photos: [
          "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
        ]
      },
    ]
  },

  // 2023 Camp
  {
    id: 3,
    year: 2023,
    title: "NSS Special Camp 2023 - Mulshi Region",
    thumbnail: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop",
    location: "Mulshi Region, Pune District",
    dates: "December 20-27, 2023",
    volunteers: 110,
    shortDescription: "Community development camp with focus on education and infrastructure.",
    description: `The 2023 NSS Special Camp was held in the scenic Mulshi region, focusing on educational upliftment and infrastructure development. The camp brought together 110 enthusiastic volunteers ready to serve.

Major projects included constructing a library for the village school, setting up a computer center, and creating a playground for children. Evening sessions featured skill development workshops for local youth.

The camp fostered strong bonds between volunteers and villagers, with many volunteers returning individually to continue their support.`,
    schedule: [
      { day: "Day 1", summary: "Arrival and setup day - reached Mulshi, accommodation arrangements, village exploration tour, and team formations for various projects." },
      { day: "Day 2", summary: "Library work begins - foundation laying ceremony, book collection and cataloging, children's activity sessions, local music night." },
      { day: "Day 3", summary: "Digital initiative - computer center setup, basic computer training for villagers, health awareness talk, drama rehearsals." },
      { day: "Day 4", summary: "Sports infrastructure - playground construction work, sports coaching for village children, women's SHG meeting, movie screening." },
      { day: "Day 5", summary: "Beautification day - library painting and decoration, reading sessions with kids, career counseling for youth, talent show." },
      { day: "Day 6", summary: "Community engagement - final project touches, awareness rally, feedback collection, farewell cultural program." },
      { day: "Day 7", summary: "Inauguration day - grand opening of library and computer center, media coverage, certificate distribution, departure." },
    ],
    testimonials: [
      { name: "Sneha Kulkarni", role: "Volunteer", quote: "Building a library was not just physical work; it was building dreams for village children." },
      { name: "Prof. Rajesh Patil", role: "Program Officer", quote: "The dedication shown by students in this camp was truly inspiring." },
      { name: "Kamala Devi", role: "School Teacher", quote: "Our children now have a proper place to study. Thank you, NSS!" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    ],
    activities: [
      {
        id: 1,
        title: "Village Library Construction",
        coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
        shortDescription: "Building a community library to promote reading and education.",
        description: `The library construction project was the flagship initiative of the 2023 camp. Volunteers built a dedicated space for books and learning, complete with shelves, reading tables, and proper lighting.

Over 500 books were collected through donation drives before the camp. Volunteers catalogued each book, created a simple lending system, and trained local youth to manage the library.

The library now serves as the intellectual hub of the village, with students and adults regularly using it for study and leisure reading.`,
        photos: [
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 2,
        title: "Computer Center Setup",
        coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
        shortDescription: "Establishing digital literacy infrastructure for the village.",
        description: `A computer center with 5 workstations was set up at the village school. The equipment was sourced through donations from corporate sponsors and alumni networks.

Volunteers conducted basic computer training sessions for students and teachers. Topics included typing, using educational software, basic internet navigation, and MS Office fundamentals.

The center continues to operate with support from a trained local youth volunteer who conducts weekly sessions.`,
        photos: [
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 3,
        title: "Children's Playground",
        coverImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
        shortDescription: "Creating a safe play area for village children.",
        description: `The village lacked a proper playground for children. Volunteers cleared an area near the school, leveled the ground, and installed basic play equipment including swings and slides.

Local materials were used wherever possible, and the design prioritized safety. A small sandpit area was created for younger children.

The playground has become the favorite gathering spot for children after school hours, promoting physical activity and social interaction.`,
        photos: [
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1564429238980-16e22e18ff74?w=600&h=400&fit=crop",
        ]
      },
    ]
  },

  // 2022 Camp
  {
    id: 2022,
    year: 2022,
    title: "NSS Special Camp at Khopi",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    location: "Khopi, Tal: Bhor, Dist: Pune",
    dates: "December 15-21, 2022",
    volunteers: 50,
    shortDescription: "A 7-day winter special camp at Khopi village focused on social engineering, digital literacy, and community infrastructure maintenance under the 'Not Me But You' motto.",
    description: `The 2022 NSS Special Camp at Khopi was a meaningful project that helped students connect what they learn in college with the real-life needs of a village. For seven days, volunteers lived in the village and worked hard to improve it. They painted a major river bridge and more than 150 trees to make them look better and last longer.

Beyond physical work, the students helped the people of Khopi in other important ways. They helped over 100 villagers sign up for their Voter IDs using a mobile app. They also went door-to-door to teach people how to stay safe from online scams on WhatsApp and Facebook.

The best part of the camp happened at the local school. Volunteers taught science and math through fun games to help children stop being afraid of these subjects. They also organized a "Home Minister" event for the village women, giving them a fun break from their busy daily chores. By the end of the week, the village was safer, cleaner, and more connected, and the students truly lived by the NSS motto: "Not Me, But You".`,
    schedule: [
      {
        day: "Day 1",
        summary: "Arrival, camp setup, and 'Science with Fun' workshop involving live experiments like steganography for Zilla Parishad school students."
      },
      {
        day: "Day 2",
        summary: "Inauguration ceremony, Women's Empowerment street play, and a massive Voter ID registration drive for 100+ villagers."
      },
      {
        day: "Day 3",
        summary: "Shramdaan focused on bridge cleaning and temple deep-cleaning, alongside door-to-door surveys for Government schemes and digital literacy."
      },
      {
        day: "Day 4",
        summary: "Tree painting for conservation and the 'Home Minister' event for village women, followed by a motivational talk on Social Engineering."
      },
      {
        day: "Day 5",
        summary: "Continuation of tree painting and an evening Cultural Program featuring performances by both volunteers and school children."
      },
      {
        day: "Day 6",
        summary: "Free Health Camp for 80 patients, village water tank cleaning/disinfection, and JEE-NEET career guidance for junior college students."
      },
      {
        day: "Day 7",
        summary: "Morning trek through Khopi hills, followed by facility handover, closing ceremony, and return journey."
      },
    ],
    testimonials: [
      { name: "Vikram Singh", role: "Volunteer", quote: "Helping the community recover from COVID was the most meaningful work I've ever done." },
      { name: "Dr. Anita Bhosle", role: "Medical Officer", quote: "The volunteers showed exceptional commitment to public health." },
      { name: "Ramesh Jadhav", role: "Village Head", quote: "The sanitation facilities have transformed our village's health standards." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    ],
    activities: [
      /* --- DAY 1 ACTIVITIES --- */
      {
        id: 1,
        title: "Science with Fun",
        coverImage: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=400&h=300&fit=crop",
        shortDescription: "Interactive science experiments to spark curiosity in school children.",
        description: `"The induction of science in kids gives birth to miracles."\n\nThe Science with Fun was the first and kick-off activity at Khopi village organised at the Zilla Parishad School. This school runs from class 1 to class 7 with a staff of 5 teachers and about 80 students. The activities were performed live in front of the students and were a part of the curriculum. They were simple yet conceptual and could be performed easily at home. For example – the extinguishing of candle in absence of oxygen, the steganography using the lemon juice, density difference of clear and salty water etc. The response by the students was very great and they had enough pre-requisite for the experiments.\n\nIt was a two-sided communication and the students answered almost all the questions. At places where they were structed, there the volunteers helped them out of the doubt. The headmistress and teachers adorned the activity with their presence and guidance. The first activity with such a success was very motivating and therefore kept the whole PICT NSS team up on adrenaline throughout the 7 days course.\n\nOutcome of the Activity:\n- Induction of science and without fear into the students\n- Conceptual along with practical demonstration of the science experiments\n- Motivation and high spirit for the PICT NSS team`,
        date: "15 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=600&h=400&fit=crop"
        ]
      },
      /* --- DAY 2 ACTIVITIES --- */
      {
        id: 2,
        title: "Voter ID Registration and Corrections",
        coverImage: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=400&h=300&fit=crop",
        shortDescription: "Helping 100+ villagers sign up for and update their Voter IDs using a mobile app.",
        description: `"Voting is not only our right; it is our power. When we vote, we take back our power to choose, to speak up, and to stand with those who support us and each other."\n\nVoting is a fundamental process in a democratic system. It is a chance for the citizens of a country to have a say in the people who represent them or an issue that impacts them. Informed voting and participating in elections are one of the responsibilities of citizens of a country.\n\nOnly individuals who possess a voter ID card will be allowed to cast their votes. The voter ID card is an identity document issued by the Election Commission of India to adult domiciles of India who have reached the age of 18. A voter ID card is very essential as it not only allows one to vote but also acts as a valid and unique identity proof.\n\nPICT NSS organized an activity for Voter ID registration under Khopi sarpanch for people of Khopi village (Tal. Bhor, Dist Pune). The villagers were briefed about the process of registering for a voter ID and our team completed the full process of Voter ID registration for villagers. Earlier the process of registration was very lengthy and time-consuming but now it can be done online through the app "Voter Helpline." The NSS volunteers successfully uploaded the necessary documents of villagers on the app and initiated the process.\n\nThe volunteers interacted with the villagers and Sarpanch of Khopi present there and the activity was successfully completed.\n\nOutcome of the Activity:\n- Villagers learnt about the process of creating an election card\n- Villagers learnt how to apply for online registration for election card\n- Enlightenment by the Sarpanch\n- Successfully completed Voter ID Registration of 100+ Villagers using Voter Helpline App.`,
        date: "16 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 3,
        title: "Speech Competition for school kids",
        coverImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
        shortDescription: "An activity to enhance speaking and communication skills of students at ZP school, Khopi.",
        description: `"Let the speech be better than silence, or be silent."\n\nPICT NSS organized an activity to enhance speaking and communication skills of students at ZP school, Khopi. Total 10 volunteers were present at the school for the activity. A few topics were decided and were written down on folded papers and each student had a chance to pick a random folded paper and speak a few lines on the given topic. Some of the topics included 'Zade lava Zade vachva', 'Maze swapna', 'Me mukhyamantri zalo tar' etc. Many students actively participated in the activity and enjoyed a lot. Winners were decided after the activity was taken. Komal Gore and Shrutika Gore were the two winners of the competition.\n\nObjective:\n\n1. To build confidence and remove stage fear from students.\n\n2. To develop the skill of impromptu speaking in students.\n\n3. To enhance thinking and imagination skills in students.\n\n4. To give students liberty to explore ideas, opinions and perspectives while sharing them with audience.`,
        date: "16 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 4,
        title: "School teaching at Dahngarvasti school",
        coverImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
        shortDescription: "Volunteers visited three settlements, conducted a survey, and interacted with students at a primary school.",
        description: `We visited three settlements that were below the poverty line and consisted of approximately 200 residents. It is an area which is situated in the foothills of the ranges and is quite far away from the main highway and the village too.\n\nThe resources present in the locality were scarce. The common occupation was dairying and some practiced farming too, yet the mean income was below or close to the average income across the country, being around 23,000 per year.\n\nWe as NSS Volunteers did our bit. We did a survey of the village and understood their daily routines and activities and hence were able to understand their difficulties.\n\nIn our survey, we understood the villagers' mindset and what matters to them the most. They lacked basic information about documentation needed for identity verification and the latest updates regarding mandatory rules passed by the government. The importance of linking Aadhar cards to their Voting card made no significant difference to their lives, as having enough to feed their families thrice a day was an urgent matter. They were not aware of the government schemes, which were designed to support them and their families.\n\nWe paid a brief visit to the primary school present, and encountered some disturbing problems, for instance, the students till the age of 5 studied together and the age group between 6-10 were taught together. This made it difficult for each student to enhance his/her performance in academics. Secondly, the school being at about 2-4km for some students affected the daily attendance. Also, their families get these students involved in their family occupation from a tender age, thus not having a conducive environment at home to encourage their academic/career-oriented progress.\n\nWe interacted with these students and did activities to bond with them. We understood their career aspirations and encouraged them to move on to pursue their dreams and not stop mid-way.\n\nOutcome of the Activity:\n- Students interacted with villagers and understood their activities and livelihood\n- Students did spread awareness about the importance of voting\n- Students encouraged the women of these settlements to attend the voter-id registration camp set up in the village by us\n- Students bonded with the school students and motivated them to dream big and take all the efforts required to achieve success`,
        date: "16 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 5,
        title: "Street play and inauguration",
        coverImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
        shortDescription: "Inauguration ceremony of the 7-day NSS Camp and a street play on Women Empowerment.",
        description: `An inauguration ceremony for a 7-day NSS Camp for the academic year 2022–2023 was organized on December 16, 2022 instead of 15th December due to the sad demise of a Khopi resident. Around 50 NSS volunteers participated in the inauguration ceremony that was held in front of the temple chowk. Mr. Amol Ingole, the NSS Program Officer, welcomed the gathering and the chief guest Mrs. Savita Itkarkar with a bouquet of flowers. The volunteers understood the importance of the NSS unit and were very proud to be part of it. They confirmed that they would work diligently for the welfare of society. Ex-PICT NSS volunteers shared their experience as NSS volunteers and mentored the volunteers on how to work better for the Society.\n\nVolunteers were also given an outline of various activities to be conducted, such as social awareness of government schemes, digital literacy, health camp, voter registration drive, career guidance, tree painting, various competitions for school kids, self-defense (Karate), village cleaning, bridge painting, etc.\n\nThe welcome was then followed by an inspirational speech by the chief guest, which filled the volunteers with enthusiasm. Mr. Sunil Khot, the former PO of PICT NSS, reminded volunteers of the NSS motto, "NOT ME BUT YOU". During the meeting, all volunteers were reminded to work for the advancement of society rather than for personal gain.\n\nA Street play themed 'How Education Plays a Role in the Empowerment of Women' was performed which helped spread awareness about Importance of Education and Women Empowerment among the Villagers.\n\nOutcome of the Activity:\n- Volunteers were made aware of various activities that were to be conducted.\n- Volunteers understood the importance of the NSS unit.\n- Volunteers were reminded to work for the advancement of society rather than for personal gain.\n- Villagers were made aware about the Importance of Women Education.`,
        date: "16 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop"
        ]
      },
      /* --- DAY 3 ACTIVITIES --- */
      {
        id: 6,
        title: "Temple and surrounding cleaning",
        coverImage: "https://images.unsplash.com/photo-1548625361-ec85361427b5?w=400&h=300&fit=crop",
        shortDescription: "Cleaning effort by NSS volunteers at the local temples and surrounding areas.",
        description: `"When your environment is clean you feel happy motivated and healthy."\n\nSo firstly, we gathered the required tools for cleaning the temple. We divided all participants into 5 groups.\n\n1st group: Cleaned the roof top of all 4 temples.\n2nd group: Cleaned every wall of each temple from inside.\n3rd group: Cleaned every wall of each temple from outside.\n4th group: Cleaned the floor of each temple.\n5th group: Cleaned the outside area around the temple.\n\nWe started from the Mahadev's Temple in which we had so much difficulty cleaning the roof because its roof top is so high & we had only 2 heighted people. But, then we collected some chairs & tables from villagers & they were so much helpful. We even washed the mirrors & floor with cleaner.\n\nEvery person doing his/her work was very up to point & efficiently done. We PICT NSS group was doing all the good work in cleaning the temple & its surroundings. All BE students were leading each group followed by TE volunteers.\n\nSome TE students were so involved in doing the activity that they even didn't want to give a turn to another person. This shows the involvement & enthusiasm of our volunteers in doing good work.\n\nAt the end, we cleaned all 3 temples along with the nearby area around the temple with enthusiasm by maintaining its spirituality & prosperity of the temple. The collected garbage was burnt safely and then we gave all gathered tools to their owners & returned to camp.\n\nOutcome of the Activity:\n- Students cleaned the temple and also understood the importance of cleanliness.\n- Students learnt about unity.\n- Students learnt about Team management.\n- Appreciation by the Grampanchayat.`,
        date: "17 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1548625361-ec85361427b5?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 7,
        title: "Awareness of various Govt. schemes",
        coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop", // Placeholder image, replace if needed
        shortDescription: "Door-to-door campaign to educate villagers about beneficial government schemes.",
        description: `Government Schemes in India are launched by the government to address the social and economic welfare of the citizens of this nation. These schemes play a crucial role in solving many socio-economic problems that beset Indian society. Thus, their awareness is a must for any concerned citizen.\n\nPICT NSS organized an activity related to spread awareness of various government schemes among villagers. In this activity we did a survey about enrollments of villagers in several government schemes and inspect about the schemes which are rarely known and highly beneficial to the villagers. Groups of 4-5 volunteers went to each house of Khopi village and delivered the information and encouraged them to take benefits of these schemes. The information includes the Benefits, Eligibility criteria, documents required, application process about the schemes.\n\nFollowing schemes were covered under the activity:\n\n1. Jivan Jyoti Bima Yojna\n\n2. Eshram Card\n\n3. Aayushman Bharat Yojna\n\n4. PM Free Shillai Machine Yojna\n\n5. Mahatma Fule Jan Aarogya Yojna\n\nObjective:\n- Villagers were informed about the various government programmes and had their questions answered by volunteers.\n- Volunteers learnt about several government schemes and got a chance to communicate with the villagers and acknowledge their problems and to find the solution with reference to the government schemes.`,
        date: "17 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 8,
        title: "Digital literacy",
        coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop", // Placeholder image, replace if needed
        shortDescription: "Interactive sessions to enhance digital literacy and awareness about cyber frauds among villagers.",
        description: `Digital literacy means understanding technology and using it appropriately.\n\nThe digital world offers enormous benefits and advantages to everyone, however, without proper use and understanding of technology, the digital world can be overwhelming, and even dangerous.\n\nPICT NSS organized an activity for enhancement of digital literacy among the villagers of Khopi village. The Activity was a part of NSS Special Camp. The volunteers of Third and final year were briefed about the topics and points to be covered under digital literacy. Volunteers were divided into groups of 4-5 volunteers.\n\nFollowing topics were discussed under digital literacy:\n\n1) WhatsApp fraud\n- Video call\n- Money transfer from army (qr code)\nRemedy - army never demands money\n\n2) Facebook\n- Facebook video call\n- Facebook duplicate profile\nRemedy - profile lock\n\n3) Lottery, anniversary links (otp scam)\nRemedy - don't click on any link\n\n4) Universal Charging\nRemedy - use another mobile even if its dead (Ex. Railway station)\n\nOutcome of the Activity:\n- Villagers learnt about ways they can be digitally cheated.\n- Villagers also learnt about the ways they can prevent digital fraud.\n- Volunteers also learnt about how they can spread awareness regarding digital literacy.`,
        date: "17 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 9,
        title: "Drawing and colouring competition for school kids",
        coverImage: "https://images.unsplash.com/photo-1513364776144-60967fc0f804?w=400&h=300&fit=crop", // Placeholder image, replace if needed
        shortDescription: "A painting competition to encourage creativity and artistic expression among ZP primary school students.",
        description: `The reward of creating visually appealing artwork that others admire gives the painter a sense of pride and happiness in the work which helps boosts self-esteem and inspires people to reach new levels of skill. Painting helps build strong mental health at every age and it is never too late to start a new hobby.\n\nPICT NSS organized an activity for Painting in Zilla Parishad Primary school Khopi. NSS volunteers from TE and BE took part in the activity. Firstly, we developed the excitements among the students for Drawing and Colouring activity. The painting competition was organized for 1st to 7th std students and students were asked to submit their paintings within 2 hrs. The students were provided Drawing Sheets and Colours (Pencil colour, Water colour, Crayons, Oil pastels). Almost 50 students took part in the activity! Students were asked to draw picture of their choice.\n\nActivities taught to students:\n\n1. Drawing Circles, Borders, Nature Drawings, etc\n\n2. Teaching use of Colour pencils and Water colours.\n\nObjectives:\n\n1. To bring out the creative expression, artistic skills of the students and also to gauge their awareness quotient.\n\n2. The aim of this competition was not merely to see the creative aspect but also to trigger the thought.\n\n3. Process of the students and sensitize them towards these burning & serious issues such as violence against women.\n\n4. Competitions of the sort increase the observational skills, response to thoughts and awareness concern of the students towards global issues.\n\nOutcome of the Activity:\n- This competition kept the students engaged, it was organized to explore and encourage creativity in students and offer them a platform to showcase their skills.\n- It inspired them to think and to work creatively to promote artistic excellence.\n- It inspired the artistic endeavours of the students was highly praised and encouraged by the Volunteers.`,
        date: "17 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1513364776144-60967fc0f804?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 10,
        title: "Handwriting competition for school kids",
        coverImage: "https://images.unsplash.com/photo-1581447109200-bf2769116351?w=400&h=300&fit=crop", // Placeholder image, replace if needed
        shortDescription: "A handwriting contest to emphasize the importance of good handwriting and its impact on learning.",
        description: `"The beautiful thing about learning is that no one can take it away from you."\n\nMahatma Gandhiji said that "I saw that bad handwriting should be regarded as a sign of an imperfect education."\n\nIn keeping with the Gandhiji quotation, Our Volunteers conducted a handwriting contest for the students of Zila Parishad (ZP) School. The value of having good handwriting and how it helps with reading fluency were stressed to the children. Because having good handwriting affects grades, they were given advice on how to do it as well as lessons on how it predicts success in other areas.\n\nWinners received prizes, and everyone who participated was recognised.\n\nOutcome of the Activity:\n- Students learnt the importance of good handwriting.\n- Reading fluency of students was increased.`,
        date: "17 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1581447109200-bf2769116351?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 11,
        title: "Karate training for school kids",
        coverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop", // Placeholder image, replace if needed
        shortDescription: "Self-defense and Taekwondo sessions to improve physical fitness and mental discipline.",
        description: `Self-defense is not just a set of techniques, it's a state of mind that begins with the belief that you are worth defending.\n\nAn unarmed combat style used for self-defense, Taekwondo involves skillfully applying techniques that include punching, jumping kicks, blocks, dodges, and actions with hands and feet to evade any physical assault. It is more than a mere physical fighting skill and represents a way of thinking and lifestyle that requires strict discipline. It is a system of training both mind and body, placing great emphasis on developing one's character.\n\nAs a martial art, Taekwondo has a set of guidelines called tenets which students and instructors are expected to observe.\n\nThe five tenets of Taekwondo are:\n1. Courtesy\n2. Integrity\n3. Perseverance\n4. Self-control\n5. Indomitable spirit\n\nAs part of self-defence the moto of conducting the session was to inculcate some of the daily lifestyle habits to keep both mental and physical health good. The session helped the participants improve their muscle toning, increase stamina, better flexibility, muscle relaxation, and enhanced cognitive abilities. Along with that volunteer also gained more self-confidence, improved concentration and focus to have a strong mindset in day-to-day life. Reflexes are something which is least talked about. Karate and Taekwondo, where reflexes and spontaneity are a major part of winning the sport, participants explored their hidden reflexes and enhance them to use in daily life.\n\nOutcome of the Activity:\n- Explored the sport as a form of self defence and discipline.\n- Active participation in daily sessions improved their stamina and activeness.\n- Learned something new which increased their area of interest.\n- Practicing daily increased their muscle strength.\n- Benefitted from lecture over balanced diet and healthy food.\n- Girls actively participated in self defence making them self-efficient to tackle challenges.`,
        date: "17 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 12,
        title: "Bridge cleaning and painting",
        coverImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop", // Placeholder image
        shortDescription: "Volunteers cleaned and painted the village bridge to improve aesthetics and protect it from corrosion.",
        description: `Shramdaan means a voluntary contribution of people to any physical activity that requires physical effort. Shramdaan is made of two words. "Shram" means labour and "daan" means contribution. It is a way of helping our community and contributing to help and change the environment around us for better.\n\nVoting is a fundamental process in a democratic system. It is a chance for the citizens of a country to have a say in the people who represent them or an issue that impacts them. Informed voting and participating in elections are one of the responsibilities of citizens of a country.\n\nThe concept of Shramdaan has been prevalent for a long time in India. Shramdaan is also related to the dignity of labour and the more profound claim that all labour is equally socially necessary. Religious harmony, equality of all religions and acceptance of diversity in the society are the basis for Shramdaan activities. A hundred years ago, Mahatma Gandhi began to move Indian society in the direction of nationhood, and no doubt Shramdaan is a great way to achieve it. Voluntarily providing help to any individual, group or community is also a part of Shramdaan, and we at PICT NSS strive to carry forward this legacy.\n\nShramdaan is the social service within the society and community for development. Shramdaan activities may include cleaning of outside areas, village colonies and public places including cleaning of tanks, waste collection drives, and awareness campaigns and our team chosen Bridge Painting as a task for shramdaan.\n\nWhen we visited khopi village for the first time we came across the bridge which is situated on the river which flows from khopi village and we observed that the condition of bridge was not so good , the steel rods were corroded and were getting damaged due to moisture content in the air so here comes the idea to paint the bridge and make it attract in the eyes of visitors and in turn also increasing the life span of the metal rods by avoiding corrosion.\n\nWe started from gathering required tools for cleaning bridge & its surroundings. So, we made groups of 3 people and gathered tools from house of villagers. Then, we started from cleaning the poles of bridge so that one team can start painting those poles. Then we cleaned the floor of the bridge which was the most time consuming and exhausting work.\n\nWe even used Spade & Hoe to remove the solid mud from the surface of the bridge so that the water coming from top goes to the river and should not stuck on the bridge. After removing the dirt we started to fill the pit holes with stones & cover it with smaller stones so the it won't fade away easily.\n\nWe were painting the bridge simultaneously some people were giving white colour & some were black. After painting the whole bridge, we started to paint the blocks of the bridge with white colour.\n\nEach and every student was doing his work with full enthusiasm and neatness. After cleaning the bridge we all clean ourselves with water of the river and had a little fun moments.\n\nGrampanchayat thanks us for doing the extraordinary work & we were happy to do the service for the villagers .\n\nObjective :\n1. To paint the bridge and increase its attraction.\n2. To protect the iron rods by painting and hence increasing the life span of the rods.\n3. To make volunteers realize the importance of labour work.\n4. To gain attraction of the village leaders and villagers for condition and reconstruction of the bridge.`,
        date: "17 December - 18 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      /* --- DAY 4 ACTIVITIES --- */
      {
        id: 13,
        title: "Home Minister for village women",
        coverImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop", // Placeholder image, replace if needed
        shortDescription: "A fun-filled 'Home Minister' event organized to entertain and engage the female population of the village.",
        description: `"The world needs strong women. Women who will lift and build others, who will love and be loved, women who live bravely, both tender and fierce, women of indomitable will."\n\nEvery day female from the village is engaged in different tasks like household chores, farming, etc. The main aim of this activity was to unite the female population of the village and to freshen their minds by keeping them engaged in fun activities that they would enjoy. There were 4 different games that were played during the Home Minister Activity. In each round of 4 games participants were eliminated and based on the last round which was Musical Chair, winners were declared.\n\nThe name of that game is as follows:\n1. Limbu chamcha (Round 1)\n2. Ball bucket throw (Round 2)\n3. Paper cup building (Round 3)\n4. Musical chair (Round 4)\n\nThe activity Home Minister was the best activity loved by entire village women. The winners were given the gift hamper by the Special Guest Mr. Gouss.\n\nWinner: Rupali Shivarkar\n1st Runner up: Shital Khutwal\n\nShruti Kadam and Dahnanjay Kadam hosted the show.\n\nOutcome of the Activity:\n- Overcoming tiredness and daily routine of female villagers\n- Interaction with villagers\n- Unity among villagers through games`,
        date: "18 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 14,
        title: "Social Engineering",
        coverImage: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=400&h=300&fit=crop", // Placeholder image, replace if needed
        shortDescription: "A motivational talk on Social Engineering by Mr. Gauss Shabbir Sayyad, inspiring volunteers to give back to the community.",
        description: `After the program of Home-Minister we arranged the session of Mr. Gauss Shabbir Sayyad (A motivational Speaker) on the Topic Social Engineering. The session began with 2 basic Questions 1) why is it so important to give back to your community? 2) What are the benefits of volunteering?\n\nThe NSS Committee of PICT conducted a Talk on "Social Engineering" on 18th December (Sunday), 2022 in Khopi Pune on the social Ground Khopi.\n\nThe speaker of this program was Mr. Gauss Shabbir Sayyad who is awarded by National Human Welfare Council as an India's "Youth Icon". He has 30+ achievements and have Visited nearly 150 schools, colleges, universities and institutes imparting training on personality development, leadership skills, time management, career guidance, stress management, life skill technics and practical Value education.\n\nThe presenter who himself is a source of motivation to students gave encouraging examples from his own life and inspired students to give back to society through their deeds. He discussed the importance of Social Activities and attitude which brings optimism into life and such constructive changes can make one brighter and more successful. This program helped students to be guided by a positive mind and also changed the perspective to look towards society.\n\nThe presenter asked students two questions:\n1) What are benefits of Volunteering?\n2) Why is it necessary to give back to community?\n\nWith these two Questions he explained his Journey of how he has achieved huge success from Car washer boy to the Global Achiever. He inspired students the importance of social engineering. He further explained how giving back is also a great way to get to know your community and its citizens. Donating your time to support those around you is extremely beneficial, both for you and your community. Spending time enriching community is a great way to broaden our perceptions of the world.\n\nOutcome of the Activity:\n- The main Aim of the talk was to give back to society through any deeds.\n- Sensitizing the students towards society was achieved.`,
        date: "18 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 15,
        title: "Tree painting on Khed shivapur to khopi road",
        coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop", // Placeholder image, replace if needed
        shortDescription: "Volunteers painted over 150 trees to extend their lifespan, prevent insects, and improve road aesthetics.",
        description: `"Despite having roots in the ground, a tree can reach the sky."\n\nThe fourth day of the camp was kicked off by our volunteers painting the trees in brown and white. Starting from the bridge, the trees were painted.\n\nPainting the trees makes them stronger. The longevity of the trees is also extended by paint. The prevention of insects or termites is another reason trees are painted. These insects can penetrate any tree from the inside out, but the paint prevents them from doing so. On the fifth day after the activity began, our volunteers kept painting the trees until they reached the village's entrance. The trees' safety is increased by painting them. This is a sign that the forest department considers those trees to be protected and prohibits their extraction.\n\nThe remaining trees around the mandir and in the village were painted on day six, effectively completing the activity.\n\nThe colours, brushes and other accessories were provided by Gram panchayat, Khopi.\n\nAround 150+ trees were painted for in three days, which improved the look of the entry road to Khopi and also increased the life of the trees. We are thankful to Gram Panchayat Khopi specially Sarpanch Mr. Kamble and Upsarpanch Mr. Sunny Shivarkar for providing the color and other accessories required.\n\nOutcome of the Activity:\n- All trees of the village were painted by volunteers with brown and white colour.\n- This activity increases the lifespan of the trees.\n- Areas near the trees were also cleaned by our volunteers.`,
        date: "18 December - 20 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      /* --- DAY 5 ACTIVITIES --- */
      {
        id: 16,
        title: "Cultural Program for villagers by school kids",
        coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop", // Placeholder image, replace if needed
        shortDescription: "A vibrant cultural event featuring dance and performances by ZP school children and NSS volunteers.",
        description: `PICT NSS organised a cultural program for the students of the Zilla Parishad School in Khopi village during the special seven-day NSS Camp. It was a great opportunity for all the volunteers to bond with these children who wholeheartedly participated in the program with great zeal and enthusiasm. The volunteers spent 3-4 days in preparation of the performances to be performed for the cultural event. The program was organized on 19th of December 2022 at 8:30 pm in front of the village temple in Khopi.\n\nThe program started with few dance performances set by the volunteers of NSS with school children like a 'Karate Pyramid Demonstration', 'Lalatti Bhandar', 'Navrai Majhi Ladachi' and a few performances by the volunteers and individual performances of children from the audience. The audience encouraged the students by applauding and cheering for the children. The program ended with a prize distribution ceremony for these school students for various competitions organized by PICT NSS throughout the week.\n\nOutcome of the Activity:\n- Taught students to dance.\n- Great opportunity for volunteers to bond with the students.\n- An event for all the villagers to get together and enjoy.\n- Boosting the confidence of students.`,
        date: "19 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      /* --- DAY 6 ACTIVITIES --- */
      {
        id: 17,
        title: "Art and craft activity for school kids",
        coverImage: "https://images.unsplash.com/photo-1513364776144-60967fc0f804?w=400&h=300&fit=crop", // Placeholder image
        shortDescription: "Volunteers taught simple art and craft works to students of classes 1st to 5th.",
        description: `"Art washes from the soul the dust of everyday life."\n\nThe Art and Craft Activity at Khopi village was organised at the Zilla Parishad School. This school runs from class 1 to class 7 with a staff of 5 teachers and about 80 students. The activity was for the students of class 1st to 5th class. There were 6 volunteers who did simple, yet astonishing art and craft works. The drawing and painting of different forms was taught, by holding the students' hands, if needed. Every student was given colours and drawing sheets to give life to their ideas in form for the paintings. The response of the students was very great, and they had shown great interest in the activities.\n\nLater, the craft activity was demonstrated with simple craft and paper cutting etc. works. This activity was simple and could be easily reproduced at homes without the use of any special items.\n\nOverall, it was a great success with the best performing students awarded and honoured. The teachers at the school greatly helped the volunteers wherever they needed.\n\nOutcome of the Activity:\n- Induction of art and craft skills in the students\n- Interesting along with practical demonstration of the craft activity\n- Interaction with small kids increased the bonding and trust of the students and teachers.`,
        date: "20 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1513364776144-60967fc0f804?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 19,
        title: "Water tank cleaning",
        coverImage: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=300&fit=crop", // Placeholder image
        shortDescription: "Cleaning of the village's central water tank to provide safe and clean drinking water.",
        description: `"Water is life, and clean water means health."\n\nSafe and readily available water is important for public health, whether it is used for drinking, domestic use, food production, etc. PICT NSS volunteers identified a tank in the middle of the village, near the temple, in front of the Gram Panchayat which was in a poor and unhygienic state. The water in the tank was used by villagers for various purposes including washing and drinking. Students of anganwadi also used the water from the tank for drinking purposes. Keeping in mind, health of villagers, PICT NSS volunteers decided to clean the tank.\n\nTank cleaning process began with removing the excess water inside the tank. However, this excess water was not wasted but was used to water the plants nearby and the marigold garden besides the temple. The marigold garden was in a barren state and the flowers were drying because of lack of water. The water was also used to clean the temple premises. Volunteers went inside the tank and cleaned it thoroughly with detergent and potassium permanganate (used to control bacterial growth inside the tank).\n\nIt was a successful activity which allowed small children and other villagers to access clean water for drinking and other domestic purposes.\n\nOutcome of the Activity:\n- Cleaned the water tank.\n- Access of clean water for drinking and other domestic purposes for the villagers.\n- Revitalized the drying marigold garden\n- Cleaned the premises near tank.\n- Reduced diseases among the villagers.`,
        date: "20 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 20,
        title: "Health camp in association with Bharti Ayurvedik college",
        coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop", // Placeholder image
        shortDescription: "Free medical check-up camp in the village catering to general health issues.",
        description: `The day started with "Dawandi" in the Khopi Village meant to publicize the Health camp. As Villagers leave their home early in the morning for farm work, our volunteers did the job early in the morning by moving to every corner of Khopi.\n\nThe main aim of Health camp is to spread medical awareness and provide free health check-ups, advices and treatment to people. Through this camp, the underprivileged people of village can be benefitted to get free health check-up through which possible symptoms of diseases can be detected at an early stage and further treatment can be directed. Lot of people don't tend properly towards their health, but through health camp, overall check-up can be done and diseases can be prevented and cured before it goes too far.\n\nPICT NSS organized an activity for Health Camp under the government of khopi. For this activity a team of specialized doctors from Bharti Vidyapeeth of Ayurveda participated. The health camp provided general check-up for all diseases, free blood pressure check, and treatment for different diseases related to surgery, medicine, gynac, ENT, paediatrics, opterm etc. Total 80 patients from village visited the camp. The volunteers interacted with doctors present there and provided proper arrangement for the camp, also volunteers spread the news of free health camp in the entire village for the people to be benefitted from it.\n\nThus through this camp, health awareness was spread in the village and the activity was successfully completed.\n\nOutcome of the Activity:\n- Students learnt about health awareness.\n- Students enhanced their social and soft skills by interacting with villagers and doctors.\n- Students learnt about managing an event at runtime`,
        date: "20 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 21,
        title: "Math fun games for school kids",
        coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop", // Placeholder image
        shortDescription: "Interactive math games to reduce the fear of mathematics among students.",
        description: `"Pure Mathematics is, in its way, the poetry of logical ideas."\n\nLearn Mathematics in a Fun Way last and concluding activity at the ZP School in Khopi. This school runs from class 1 to class 7 with a staff of 5 teachers and about 80 students. Fun yet challenging Math games were presented before students of classes 5, 6 and 7. Students were excited to play the games which also helped them like Mathematics. The response by the students was great and they had fun during the activity.\n\nIt was a two-sided communication and almost all students answered correctly. The fastest ones were given a prize in the end. The teachers adorned the activity with their presence and guidance. The last activity was a great success and very helpful for the students as it took away all their stress after a long tiring day at school and also took away the fear of mathematics from their minds.\n\nOutcome of the Activity:\n- Induction of mathematical ideas among students.\n- Conceptual understanding of mathematical questions.\n- Smiles and satisfaction among the students and the volunteers.`,
        date: "20 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      {
        id: 22,
        title: "JEE-NEET guidance for Flora valley Jr. College (CBSC)",
        coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop", // Placeholder image
        shortDescription: "Guidance on preparation strategies for JEE-NEET examination for high school students.",
        description: `"LEAD TO LEARN, LEARN TO LEAD".\n\nWe PICT NSS volunteers realized the importance of guidance to Flora CBSE School students for preparation of JEE-NEET Examination.\n\nFor school preparation, student may manage by themselves, but for JEE Main and JEE Advanced, they need guidance. It's not just for helping in solving problems or clearing doubts, but to keep a constant watch on preparation level. But student hesitate in asking doubts and taking help from outside. We tried to implant those reinforcements that encourage hard work and discipline.\n\nThe complete session flows with:\n1. Initially, we tried to understand their level of preparations by asking few questions.\n2. Then we started about how to create habits, Making them aware that they should know exam pattern and entire syllabus.\n3. How to use reference, understand questions thoroughly and solve previous year questions.\n4. Importance of Time management, doubts clearing, Group study, staying motivated and many more things were covered.\n5. Later 30 min Q&A session to clear their doubts and make complete use of session.\n\nOutcome of the Activity:\n- Students learnt about the complete roadmap for preparation.\n- Students learnt how to solve PYQ's and other questions.\n- Students learnt about use of proper references and making proper routines.\n- Students understand the Importance of time and JEE examination.`,
        date: "20 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop" // Placeholder image
        ]
      },
      /* --- DAY 7 ACTIVITIES --- */
      {
        id: 23,
        title: "Trekking for volunteers",
        coverImage: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=400&h=300&fit=crop", // Placeholder image
        shortDescription: "An adventurous trekking activity for the volunteers at the Khopi hills.",
        description: `Trekking is the activity of going for long walks, especially across valleys and hills. It is a kind of adventurous sports which refreshes our mind and helps to improve our physical and mental fitness. It gives us an idea about the geographical and historical culture of the village where the hill is located.\n\nAs NSS volunteers we got a chance for such an adventure in the form of one of the activity of PICT NSS Camp 2022.\n\nPICT NSS organized an activity for Trekking at one of the hills in Khopi village. NSS volunteers from TE and BE took part in the activity. Firstly two of our volunteers explored few hills a day before the activity (20/12/2022) to get an exact idea of trekking time and to finalize the route of climbing and descending.\n\nThe trekking activity was planned for 4 hours in the morning time from 7am to 11am. All the volunteers were asked to bring water bottle and other necessary belongings with them as per their need. For the emergency purpose we were well equipped with first aid kits and other necessary medicines. All the 50 volunteers and staff took part in the activity.\n\nObjective :\n- To promote adventure activities among volunteers.\n- To broaden volunteers' horizons and knowledge through this camp.\n- To inculcate interest in and love of nature with its myriad living forms.\n- To promote awareness of the biodiversity among the youth and involve them in community conservation efforts.`,
        date: "21 December 2022",
        photos: [
          "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&h=400&fit=crop" // Placeholder image
        ]
      }
    ]
  },

  // 2021 Camp (Virtual + Limited Physical)
  {
    id: 5,
    year: 2021,
    title: "NSS Special Camp 2021 - Virtual + Hybrid Mode",
    thumbnail: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop",
    location: "Online + Katraj Area, Pune",
    dates: "February 1-7, 2021",
    volunteers: 150,
    shortDescription: "Innovative hybrid camp adapting to pandemic restrictions.",
    description: `The 2021 NSS Camp was a groundbreaking hybrid event, combining virtual activities with limited physical engagement due to pandemic restrictions. This innovative approach ensured continuity of NSS traditions while prioritizing safety.

Online activities included webinars, virtual skill workshops, and digital awareness campaigns. Small groups of volunteers conducted socially-distanced service activities in nearby areas of Katraj.

This camp demonstrated NSS's adaptability and commitment to service even during challenging times.`,
    schedule: [
      { day: "Day 1", summary: "Virtual launch - online inauguration ceremony, ice-breaking sessions via video calls, digital tools orientation, e-volunteer registration." },
      { day: "Day 2", summary: "Wellness focus - virtual yoga session, pandemic response webinar, online content creation workshops, small group local activity." },
      { day: "Day 3", summary: "Digital outreach - digital literacy workshop, social media campaign launch, village adoption discussions online, local mask distribution." },
      { day: "Day 4", summary: "Skill building - online skill development sessions, virtual health awareness programs, awareness content creation, food kit distribution." },
      { day: "Day 5", summary: "Learning & culture - e-learning support sessions, virtual cultural performances, online competitions, local cleanliness drive." },
      { day: "Day 6", summary: "Assessment - impact measurement, virtual feedback collection, campaign results analysis, documentation of activities." },
      { day: "Day 7", summary: "Closing - online valedictory function, virtual certificate distribution, future planning discussions, closing remarks." },
    ],
    testimonials: [
      { name: "Pooja Mehta", role: "Volunteer", quote: "Even virtually, the camp spirit was incredible. We proved that service knows no boundaries." },
      { name: "Prof. Suresh Naik", role: "Program Officer", quote: "Our volunteers adapted brilliantly to the hybrid format." },
      { name: "Arun Pawar", role: "Online Coordinator", quote: "Technology enabled us to reach more people than ever before." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1609921205586-7e8a57516512?w=600&h=400&fit=crop",
    ],
    activities: [
      {
        id: 1,
        title: "Digital Awareness Campaign",
        coverImage: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop",
        shortDescription: "Creating and sharing COVID awareness content on social media.",
        description: `The digital awareness campaign reached over 50,000 people through social media. Volunteers created infographics, short videos, and informative posts about COVID safety, vaccination, and mental health.

Content was created in multiple languages including Marathi, Hindi, and English. The campaign trended locally with hashtags like #NSSSafety and #TogetherAgainstCOVID.

The success of this campaign established NSS's digital outreach capabilities for future initiatives.`,
        photos: [
          "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 2,
        title: "Mask Distribution Drive",
        coverImage: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=400&h=300&fit=crop",
        shortDescription: "Distributing masks and sanitizers to underprivileged communities.",
        description: `Small teams of volunteers conducted socially-distanced mask distribution drives in the Katraj area. Over 2000 masks and 500 sanitizer bottles were distributed to daily wage workers, street vendors, and homeless individuals.

Volunteers also demonstrated proper mask usage and hand sanitization techniques. The activity was coordinated with local municipal health officials.

This initiative provided essential protection to the most vulnerable members of the community during the pandemic's peak.`,
        photos: [
          "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1609921205586-7e8a57516512?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 3,
        title: "Virtual Skill Development Workshops",
        coverImage: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?w=400&h=300&fit=crop",
        shortDescription: "Online workshops teaching digital skills to volunteers and community.",
        description: `A series of virtual workshops enhanced digital skills of participants. Sessions covered video editing, social media management, online collaboration tools, and basic graphic design.

Expert speakers from various fields conducted webinars on career guidance, entrepreneurship, and personal development. Over 200 participants attended these sessions.

These skills proved valuable for volunteers in their academic and professional pursuits beyond the camp.`,
        photos: [
          "https://images.unsplash.com/photo-1609921205586-7e8a57516512?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
        ]
      },
    ]
  },
];

// Helper function to get camps by year
export const getCampsByYear = (year) => {
  return camps.filter(camp => camp.year === parseInt(year));
};

// Helper function to get camp by ID
export const getCampById = (id) => {
  return camps.find(camp => camp.id === parseInt(id));
};

// Helper function to get activity by camp ID and activity ID
export const getCampActivity = (campId, activityId) => {
  const camp = getCampById(campId);
  if (!camp || !camp.activities) return null;
  return camp.activities.find(activity => activity.id === parseInt(activityId));
};

// Get all available years
export const getCampYears = () => {
  return [...new Set(camps.map(c => c.year))].sort((a, b) => b - a);
};

export default camps;
