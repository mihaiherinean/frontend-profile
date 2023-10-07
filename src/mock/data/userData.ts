export const userData = {
  id: 1,
  firstName: "Mihai",
  lastName: "Herinean",
  position: "Frontend Developer",
  generalInfo: {
    age: 24,
    experience: 1,
    email: "mihai_herinean@yahoo.com",
    location: "Cluj-Napoca, Romania",
    phone: "+40 7455 34 398",
    linkedin: "linkedin.com/in/mihaiherinean/",
  },
  description:
    "Results-driven Front-end Developer with expertise in creating reusable React and TypeScript components, maintaining legacy projects using Sitecore, jQuery, HTML and SASS. Experienced in working collaboratively within Agile development teams to deliver high-quality software solutions.",
  routes: [
    {
      name: "Profile",
      title: "Profile page",
      component: "Profile",
      path: "/",
    },
    {
      name: "Projects",
      title: "Projects page",
      component: "Projects",
      path: "/projects",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Figma",
    "Adobe XD",
  ],
  imgUrl:"https://media.licdn.com/dms/image/D4D03AQHq6jr4MfWlfQ/profile-displayphoto-shrink_800_800/0/1688819795003?e=2147483647&v=beta&t=BVXZL2eJPI8I9yCG3STa-hRVb9EDMkKRsiGEj4KyWE4",
  favoriteImage: "https://i.pinimg.com/originals/21/11/61/21116158daaeb1459b4ec0758505e1ad.gif",
  assets: [
    {
      name: "Education",
      title: "Technical University of Cluj-Napoca",
      subtitle: "Faculty of Electronics, Telecommunications and Information Technology - Bachelor Degree",
      image: 'https://doctorat.utcluj.ro/images/utcn-logo.png',
      period: {
        start: "2018",
        end: "2022"
      }
    },
    {
      name: "Experience",
      title: "Wavemyth Global SRL",
      subtitle: "Frontend Developer",
      image: 'https://media.licdn.com/dms/image/C4E0BAQGCHXetSpQtNw/company-logo_200_200/0/1637597403938?e=2147483647&v=beta&t=Rc1xiT6l1gDl8FE5lvjK0aAQsTyH6-3cveeqi3r5SaI',
      period: {
        start: "Nov 2022",
        end: "present"
      }
    }
  ]
};
