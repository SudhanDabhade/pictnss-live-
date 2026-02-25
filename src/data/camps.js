/**
 * Camps Data - Dummy data for NSS camps
 * Contains camp information from 2021-2025 with schedules, testimonials, and activities
 */

export const camps = [
  // 2025 Camp
  {
    id: 1,
    year: 2025,
    title: "NSS special camp at Panvadi, Tal: Purandar, Dist: Pune",
    thumbnail: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
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
    id: 4,
    year: 2022,
    title: "NSS Special Camp 2022 - Bhor Taluka",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    location: "Bhor Taluka, Pune District",
    dates: "January 8-15, 2022",
    volunteers: 90,
    shortDescription: "Post-pandemic recovery camp focusing on health and sanitation.",
    description: `The 2022 camp was designed as a post-pandemic recovery initiative, focusing heavily on health awareness and sanitation infrastructure. Held at Bhor Taluka with 90 volunteers, the camp addressed urgent community health needs.

Volunteers constructed sanitation facilities, conducted extensive health checkups, and trained local health workers. Mental health support sessions were also organized for those affected by pandemic-related losses.

This camp marked NSS's commitment to supporting communities in their recovery from the COVID-19 pandemic.`,
    schedule: [
      { day: "Day 1", summary: "Travel and orientation - journey to Bhor, camp setup, COVID safety protocols briefing, and comprehensive village mapping." },
      { day: "Day 2", summary: "Sanitation focus - village sanitation survey, toilet construction begins, health worker training sessions, evening meditation." },
      { day: "Day 3", summary: "Health initiative - construction continues, health checkup camp for villagers, nutrition awareness sessions, group discussions." },
      { day: "Day 4", summary: "Hygiene day - handwashing stations installation, mental health awareness session, youth engagement activities, cultural exchange." },
      { day: "Day 5", summary: "Wellness focus - waste management training, medical camp, counseling sessions for families, sports activities." },
      { day: "Day 6", summary: "Completion day - project completion, community training on maintenance, awareness rally, farewell program." },
      { day: "Day 7", summary: "Handover day - facility handover to village committee, documentation, closing ceremony, return journey." },
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
      {
        id: 1,
        title: "Sanitation Facilities Construction",
        coverImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
        shortDescription: "Building toilets and sanitation infrastructure for village households.",
        description: `The primary focus of the 2022 camp was constructing proper sanitation facilities. Volunteers built 15 individual household toilets and a community toilet block near the village center.

The project followed Swachh Bharat guidelines, with proper septic systems and ventilation. Local masons supervised the construction while volunteers provided labor support.

Training was provided to families on proper usage and maintenance, significantly improving the village's sanitation index.`,
        photos: [
          "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 2,
        title: "COVID Recovery Health Camp",
        coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
        shortDescription: "Comprehensive health checkups focusing on post-COVID recovery.",
        description: `A specialized health camp addressed post-COVID recovery concerns. Doctors screened over 150 villagers for respiratory issues, diabetes, and other conditions that may have been aggravated during the pandemic.

Special attention was given to long-COVID symptoms. Nutritional supplements and basic medicines were distributed to those in need.

Mental health counselors conducted sessions for families who lost members during the pandemic, providing much-needed emotional support.`,
        photos: [
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
        ]
      },
      {
        id: 3,
        title: "Health Worker Training Program",
        coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
        shortDescription: "Training local youth as community health volunteers.",
        description: `A comprehensive training program equipped 10 local youth with basic health knowledge and first-aid skills. The training was conducted by healthcare professionals from nearby primary health centers.

Topics covered included wound care, recognizing emergency symptoms, proper handwashing techniques, and COVID-appropriate behavior. Participants received certificates and basic first-aid kits.

These trained volunteers now serve as the village's first responders for minor health issues and awareness campaigns.`,
        photos: [
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        ]
      },
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
