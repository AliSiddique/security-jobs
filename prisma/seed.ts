const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const jobPosts = [
  {
    title: 'Backend Developer',
    email: 'jobs@company.com',
    description: 'We are hiring a backend developer...',
    department: 'Engineering',
    type: 'Full-time',
    salary: 90000,
    location: 'San Francisco, CA',
    company_name: 'Company XYZ',
    company_logo: 'https://example.com/companyxyz-logo.png',
    company_website: 'https://www.companyxyz.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/companyxyz/',
    apply_link: 'https://www.companyxyz.com/careers',
    featured: true,
    company_color: '#FF0000',
    remote: false,
    color: '#FFA500',
    tags: ['Backend', 'Developer', 'Engineering'],
  },
  {
    title: 'Product Manager',
    email: 'jobs@startup.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Product',
    type: 'Full-time',
    salary: 100000,
    location: 'Austin, TX',
    company_name: 'Startup ABC',
    company_logo: 'https://example.com/startupabc-logo.png',
    company_website: 'https://www.startupabc.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/startupabc/',
    apply_link: 'https://www.startupabc.com/careers',
    featured: false,
    company_color: '#FF4500',
    remote: true,
    color: '#FFA500',
    tags: ['Product Manager', 'Startup', 'Product'],
  },
  // Add more instances...
  {
    title: 'Frontend Developer',
    email: 'jobs@company.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Engineering',
    type: 'Full-time',
    salary: 85000,
    location: 'Seattle, WA',
    company_name: 'Tech Solutions Inc.',
    company_logo: 'https://example.com/techsolutions-logo.png',
    company_website: 'https://www.techsolutions.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/techsolutions/',
    apply_link: 'https://www.techsolutions.com/careers',
    featured: true,
    company_color: '#3366FF',
    remote: true,
    color: '#FFA500',
    tags: ['Frontend', 'Developer', 'Engineering'],
  },
  {
    title: 'Data Scientist',
    email: 'jobs@datasciencecompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Data Science',
    type: 'Full-time',
    salary: 120000,
    location: 'New York, NY',
    company_name: 'Data Science Co.',
    company_logo: 'https://example.com/datascienceco-logo.png',
    company_website: 'https://www.datascienceco.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/datascienceco/',
    apply_link: 'https://www.datascienceco.com/careers',
    featured: true,
    company_color: '#800080',
    remote: false,
    color: '#FFA500',
    tags: ['Data Scientist', 'Data Science'],
  },
  {
    title: 'UX Designer',
    email: 'jobs@designstudio.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Design',
    type: 'Full-time',
    salary: 95000,
    location: 'Los Angeles, CA',
    company_name: 'Design Studio',
    company_logo: 'https://example.com/designstudio-logo.png',
    company_website: 'https://www.designstudio.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/designstudio/',
    apply_link: 'https://www.designstudio.com/careers',
    featured: true,
    company_color: '#FF1493',
    remote: false,
    color: '#FFA500',
    tags: ['UX Designer', 'Design'],
  },
  {
    title: 'Marketing Specialist',
    email: 'jobs@marketingcompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Marketing',
    type: 'Full-time',
    salary: 70000,
    location: 'Chicago, IL',
    company_name: 'Marketing Co.',
    company_logo: 'https://example.com/marketingco-logo.png',
    company_website: 'https://www.marketingco.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/marketingco/',
    apply_link: 'https://www.marketingco.com/careers',
    featured: false,
    company_color: '#FF69B4',
    remote: false,
    color: '#FFA500',
    tags: ['Marketing', 'Specialist', 'Marketing'],
  },
  {
    title: 'Software Engineer Intern',
    email: 'internship@techstartup.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Engineering',
    type: 'Internship',
    salary: 50000,
    location: 'Remote',
    company_name: 'Tech Startup XYZ',
    company_logo: 'https://example.com/techstartupxyz-logo.png',
    company_website: 'https://www.techstartupxyz.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/techstartupxyz/',
    apply_link: 'https://www.techstartupxyz.com/careers',
    featured: true,
    company_color: '#32CD32',
    remote: true,
    color: '#FFA500',
    tags: ['Software Engineer', 'Internship', 'Engineering'],
  },
  {
    title: 'Sales Representative',
    email: 'jobs@salescompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Sales',
    type: 'Full-time',
    salary: 75000,
    location: 'Miami, FL',
    company_name: 'Sales Co.',
    company_logo: 'https://example.com/salesco-logo.png',
    company_website: 'https://www.salesco.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/salesco/',
    apply_link: 'https://www.salesco.com/careers',
    featured: true,
    company_color: '#FFD700',
    remote: false,
    color: '#FFA500',
    tags: ['Sales', 'Representative', 'Sales'],
  },
  {
    title: 'Customer Support Specialist',
    email: 'jobs@supportcompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Customer Support',
    type: 'Full-time',
    salary: 65000,
    location: 'Denver, CO',
    company_name: 'Support Co.',
    company_logo: 'https://example.com/supportco-logo.png',
    company_website: 'https://www.supportco.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/supportco/',
    apply_link: 'https://www.supportco.com/careers',
    featured: false,
    company_color: '#4682B4',
    remote: true,
    color: '#FFA500',
    tags: ['Customer Support', 'Specialist', 'Support'],
  },
  // Add more instances...
  {
    title: 'Graphic Designer',
    email: 'jobs@designcompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Design',
    type: 'Full-time',
    salary: 70000,
    location: 'San Diego, CA',
    company_name: 'Design Co.',
    company_logo: 'https://example.com/designco-logo.png',
    company_website: 'https://www.designco.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/designco/',
    apply_link: 'https://www.designco.com/careers',
    featured: true,
    company_color: '#9932CC',
    remote: true,
    color: '#FFA500',
    tags: ['Graphic Designer', 'Design'],
  },
  {
    title: 'Financial Analyst',
    email: 'jobs@financecompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Finance',
    type: 'Full-time',
    salary: 85000,
    location: 'Boston, MA',
    company_name: 'Finance Co.',
    company_logo: 'https://example.com/financeco-logo.png',
    company_website: 'https://www.financeco.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/financeco/',
    apply_link: 'https://www.financeco.com/careers',
    featured: false,
    company_color: '#8B4513',
    remote: false,
    color: '#FFA500',
    tags: ['Financial Analyst', 'Finance'],
  },
  {
    title: 'Human Resources Manager',
    email: 'jobs@hrcompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Human Resources',
    type: 'Full-time',
    salary: 90000,
    location: 'Houston, TX',
    company_name: 'HR Solutions',
    company_logo: 'https://example.com/hrsolutions-logo.png',
    company_website: 'https://www.hrsolutions.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/hrsolutions/',
    apply_link: 'https://www.hrsolutions.com/careers',
    featured: false,
    company_color: '#FF6347',
    remote: false,
    color: '#FFA500',
    tags: ['Human Resources', 'Manager', 'HR'],
  },
  {
    title: 'Quality Assurance Engineer',
    email: 'jobs@techcompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Engineering',
    type: 'Full-time',
    salary: 85000,
    location: 'Chicago, IL',
    company_name: 'Tech Innovations',
    company_logo: 'https://example.com/techinnovations-logo.png',
    company_website: 'https://www.techinnovations.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/techinnovations/',
    apply_link: 'https://www.techinnovations.com/careers',
    featured: true,
    company_color: '#40E0D0',
    remote: true,
    color: '#FFA500',
    tags: ['Quality Assurance', 'Engineer', 'Engineering'],
  },
  // Add more instances...
  {
    title: 'Content Writer',
    email: 'jobs@contentcompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Content',
    type: 'Full-time',
    salary: 70000,
    location: 'Austin, TX',
    company_name: 'Content Creations',
    company_logo: 'https://example.com/contentcreations-logo.png',
    company_website: 'https://www.contentcreations.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/contentcreations/',
    apply_link: 'https://www.contentcreations.com/careers',
    featured: false,
    company_color: '#9370DB',
    remote: true,
    color: '#FFA500',
    tags: ['Content Writer', 'Content'],
  },
  {
    title: 'Business Analyst',
    email: 'jobs@businesscompany.com',
    description: '- Description of Product Manager - Any additional information about the role. - More details about Product Manager',
    department: 'Business',
    type: 'Full-time',
    salary: 95000,
    location: 'Seattle, WA',
    company_name: 'Business Solutions',
    company_logo: 'https://example.com/businesssolutions-logo.png',
    company_website: 'https://www.businesssolutions.com/',
    company_description: '- Description of Company XYZ - Any additional information about the company. - More details about Company XYZ ',
    linkedin_in: 'https://www.linkedin.com/company/businesssolutions/',
    apply_link: 'https://www.businesssolutions.com/careers',
    featured: true,
    company_color: '#FF8C00',
    remote: false,
    color: '#FFA500',
    tags: ['Business Analyst', 'Business'],
  },
];
async function main() {
  for (const jobPost of jobPosts) {
    await prisma.jobPost.create({
      data: jobPost,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
