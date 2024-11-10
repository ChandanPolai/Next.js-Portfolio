import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Alpha-Ai Library',
        description: "Alpha-AI is a free-to-use library that allows you to generate responses to any kind of question without the need for an API key..",
        tools: ['Express', 'Javascript', 'OpenAI API', 'Gemini-API'],
        role: 'Backend Developer',
        code: 'https://github.com/ChandanPolai/alpha-ai-',
        demo: 'www.npmjs.com/package/alpha-ai',
        image: crefin,
    },
    {
        id: 2,
        name: 'Uchiha-Tube',
        description: 'Uchiha-Tube (YOUTUBE + TWITTER) is an innovative project combining the functionality of a video hosting platform like YouTube with micro-blogging features similar to Twitter. Built on a robust tech stack including Node.js, Express.js, React.js, and MongoDB, this platform offers a seamless user experience with modern features.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: 'https://github.com/ChandanPolai/UCHIHA-TUBE',
        demo: 'uchiha-tube.vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'Stylo-Resume-Builder',
        description: 'My team built an AI-based resume builder using Replicate API and OpenAI. We used Express, TypeScript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based authentication, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: 'https://github.com/ChandanPolai/Stylo-Resume-Builder',
        role: 'Backend Developer',
        demo: 'stylo-resume-builder.vercel.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Gen-Z Ecommerce Store',
        description: "Created an e-commerce platform tailored for Gen-Z with a modern, interactive design. Used Next.js for the front end, integrated Stripe for payment processing, and built APIs with NestJS and TypeORM. The app includes dynamic product filtering, cart management, and user authentication using JWT. Deployed the platform using Vercel for the front end and AWS EC2 for the backend.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: 'https://github.com/sajalagrawal/LifestyleStore',
        demo: 'https://shoplane-by-lassie.netlify.app/',
        image: ayla,
        role: 'Full Stack Developer',
    }
];



// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },