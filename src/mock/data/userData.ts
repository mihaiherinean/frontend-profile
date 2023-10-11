export const userData = {
  id: 1,
  firstName: "Mihai",
  lastName: "Herinean",
  position: "Frontend Developer",
  generalInfo: {
    age: 24,
    location: "Cluj-Napoca, Romania",
    email: "mihai_herinean@yahoo.com",
    phone: "+40 7455 34 398",
    github: "github.com/mihaiherinean",
  },
  description: [
    "Hey there! I'm a Frontend Developer based in Cluj-Napoca with a bit over a year of hands-on experience working with React and TypeScript. I'm all about creating cool user experiences on the web.",
    "Beyond that, I'm a motivated individual who's dedicated to continuous improvement. Each day, I'm hard at work, learning and practicing new things in the ever-evolving world of web development.",
    "I'm also open to exciting opportunities to apply my skills and passion. If you'd like to know more about my work or have a chat about web development, feel free to reach out. Together, we can create some remarkable web experiences.",
  ],
  routes: [
    {
      name: "Profile",
      title: "Profile page",
      component: "Profile",
      path: "/",
    }
  ],
  skills: [
    "HTML",
    "CSS",
    "SCSS",
    "jQuery",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Storybook",
    "Sitecore",
    "Figma",
    "Adobe XD",
  ],
  imgUrl:
    "https://media.licdn.com/dms/image/D4D03AQHq6jr4MfWlfQ/profile-displayphoto-shrink_800_800/0/1688819795003?e=2147483647&v=beta&t=BVXZL2eJPI8I9yCG3STa-hRVb9EDMkKRsiGEj4KyWE4",
  favoriteImage:
    "https://i.pinimg.com/originals/21/11/61/21116158daaeb1459b4ec0758505e1ad.gif",
  assets: [
    {
      name: "Education",
      info: [
        {
          title: "Technical University of Cluj-Napoca",
          subtitle:
            "Faculty of Electronics, Telecommunications and Information Technology - Bachelor Degree",
          image: "https://doctorat.utcluj.ro/images/utcn-logo.png",
          period: {
            start: "2018",
            end: "2022",
          },
          description: [],
        },
      ],
    },
    {
      name: "Experience",
      info: [
        {
          title: "Wavemyth Global SRL",
          subtitle: "Frontend Developer",
          image:
            "https://media.licdn.com/dms/image/C4E0BAQGCHXetSpQtNw/company-logo_200_200/0/1637597403938?e=2147483647&v=beta&t=Rc1xiT6l1gDl8FE5lvjK0aAQsTyH6-3cveeqi3r5SaI",
          period: {
            start: "Nov 2022",
            end: "present",
          },
          description: [
            "As a Frontend Developer at Wavemyth, my time is mainly dedicated to outsourcing for a company that leads six different food brands. In this role, I am responsible for maintaining, redesigning, and developing their websites to ensure they deliver engaging and user-friendly online experiences.",
            "My toolkit includes HTML, CSS, SCSS, and jQuery, which I skillfully employ to implement dynamic and interactive features on the websites. This technology stack enables me to create visually appealing and highly functional web interfaces.",
            "I am an integral part of an Agile team, collaborating alongside Business Analysts, Project Managers, Quality Assurance professionals, Designers, and fellow Developers. This collaborative environment allows us to effectively manage and prioritize tasks, ensuring the successful execution of projects.",
            "In addition to external client work, I actively contribute to internal projects, where I utilize cutting-edge technologies, such as React and TypeScript to develop modern web applications. This experience keeps me at the forefront of web development trends and allows me to apply the latest innovations to our projects.",
            "Overall, my role as a Frontend Developer at Wavemyth combines a strong focus on website development with active participation in an Agile team, ensuring that our clients' websites provide exceptional online experiences while staying up to date with industry advancements.",
          ],
        },
      ],
    },
  ],
};
