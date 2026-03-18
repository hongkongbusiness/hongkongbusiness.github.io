import { Faculty, News, Institute } from '../types';

export const INSTITUTES: Institute[] = [
  {
    id: 'esg-research',
    name: 'ESG Research Institute',
    description: 'Leading the way in Environmental, Social, and Governance research for sustainable business practices in Asia.',
    dean: 'Prof. Sarah Chen',
    facultyIds: ['sarah-chen', 'david-wong']
  },
  {
    id: 'graduate-school',
    name: 'Graduate School',
    description: 'Nurturing the next generation of business leaders through rigorous academic programs and practical experience.',
    dean: 'Prof. Michael Roberts',
    facultyIds: ['michael-roberts']
  },
  {
    id: 'open-source-business',
    name: 'Open Source Business Research Institute',
    description: 'Exploring the intersection of open-source methodologies and modern business models.',
    dean: 'Prof. Linus Zhang',
    facultyIds: ['linus-zhang']
  },
  {
    id: 'esg-think-tank',
    name: 'ESG Business Think Tank',
    description: 'Providing strategic insights and policy recommendations for ESG integration in corporate strategy.',
    dean: 'Dr. Elena Rossi',
    facultyIds: ['elena-rossi']
  },
  {
    id: 'business-management',
    name: 'Department of Business Management',
    description: 'The core academic department focusing on foundational business principles and innovative management techniques.',
    dean: 'Prof. James Lee',
    facultyIds: ['james-lee', 'sophia-liu']
  },
  {
    id: 'asia-securities',
    name: 'Asia Securities Research Center',
    description: 'In-depth analysis of Asian financial markets and securities for global investors.',
    dean: 'Prof. Robert Tan',
    facultyIds: ['robert-tan']
  },
  {
    id: 'self-media',
    name: 'Self-Media Research Center',
    description: 'Studying the impact of individual content creators and social media on the business landscape.',
    dean: 'Dr. Chloe Wang',
    facultyIds: ['chloe-wang']
  },
  {
    id: 'future-multimedia',
    name: 'Future Multimedia Laboratory',
    description: 'Cutting-edge research into the future of digital communication and multimedia business applications.',
    dean: 'Prof. Alan Turing Jr.',
    facultyIds: ['alan-turing']
  },
  {
    id: 'future-business-foundation',
    name: 'Future Business Foundation',
    description: 'Supporting innovative business ideas and startups through grants and mentorship.',
    dean: 'Mr. Victor Li',
    facultyIds: []
  }
];

export const FACULTY: Faculty[] = [
  {
    id: 'sarah-chen',
    name: 'Prof. Sarah Chen',
    title: 'Dean of ESG Research Institute',
    bio: 'Prof. Chen is a pioneer in sustainable finance with over 20 years of experience in Asian markets.',
    image: 'https://picsum.photos/seed/sarah/400/500',
    specialization: 'Sustainable Finance, Green Bonds'
  },
  {
    id: 'david-wong',
    name: 'Prof. David Wong',
    title: 'Senior Researcher',
    bio: 'Expert in corporate social responsibility and its impact on long-term profitability.',
    image: 'https://picsum.photos/seed/david/400/500',
    specialization: 'CSR, Ethical Leadership'
  },
  {
    id: 'michael-roberts',
    name: 'Prof. Michael Roberts',
    title: 'Dean of Graduate School',
    bio: 'Former CEO of a Fortune 500 company, now dedicated to academic excellence in business education.',
    image: 'https://picsum.photos/seed/michael/400/500',
    specialization: 'Strategic Management, Executive Leadership'
  },
  {
    id: 'linus-zhang',
    name: 'Prof. Linus Zhang',
    title: 'Director of Open Source Business',
    bio: 'Leading researcher in open-source software economics and collaborative business models.',
    image: 'https://picsum.photos/seed/linus/400/500',
    specialization: 'Open Source Economics, Digital Transformation'
  },
  {
    id: 'james-lee',
    name: 'Prof. James Lee',
    title: 'Head of Business Management',
    bio: 'Specializes in organizational behavior and human resource management in the digital age.',
    image: 'https://picsum.photos/seed/james/400/500',
    specialization: 'Organizational Behavior, HR Tech'
  }
];

export const NEWS: News[] = [
  {
    id: '1',
    title: 'HKSB Launches New ESG Executive Program',
    date: '2026-03-15',
    summary: 'The new program aims to equip senior executives with the tools to lead sustainable transitions.',
    image: 'https://picsum.photos/seed/news1/800/400'
  },
  {
    id: '2',
    title: 'Asia Securities Research Center Publishes Annual Report',
    date: '2026-03-10',
    summary: 'The report highlights key trends in the Asian securities market for the upcoming year.',
    image: 'https://picsum.photos/seed/news2/800/400'
  }
];
