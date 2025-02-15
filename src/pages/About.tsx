import { Card } from "@/components/ui/card";
import { SiTypescript, SiNodedotjs, SiExpress, SiMicrodotblog, SiRedis, SiMongodb, SiPostgresql, SiGraphql, SiGit, SiLinux,  } from "react-icons/si";
import { FcMindMap } from "react-icons/fc";
const skills = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-12 h-12 text-[#3178C6]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-12 h-12 text-[#539E43]" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-12 h-12 text-[#000000]" />,
  },
  {
    name: "Microservices",
    icon: <SiMicrodotblog className="w-12 h-12 text-[#FF9800]" />,
  },
  {
    name: "Redis",
    icon: <SiRedis className="w-12 h-12 text-[#DC382D]" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-12 h-12 text-[#47A248]" />,
  },
  {
    name: "RDBMS",
    icon: <SiPostgresql className="w-12 h-12 text-[#336791]" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="w-12 h-12 text-[#E535AB]" />,
  },
  {
    name: "Git",
    icon: <SiGit className="w-12 h-12 text-[#F05032]" />,
  },
  {
    name: "Linux",
    icon: <SiLinux className="w-12 h-12 text-[#FCC624]" />,
  },
  {
    name: "Networking",
    icon: <FcMindMap className="w-12 h-12 text-[#1BA0D7]" />, 
  },
];


const About = () => {
  return (
    <main className="pt-24">
      {" "}
      <div className="container mx-auto  px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>

          <div className="prose prose-lg">
            <p className="text-muted-foreground">
              I am a commerce graduate, born and raised in Surat. After completing
              my education, I built my career in programming, starting with
              JavaScript. As a local freelancer, I have contributed to various
              projects and enjoy learning, reading, and continuously upgrading
              my skills. <br />
              &nbsp; &nbsp; &nbsp; I began my journey in backend development
              with Node.js, gaining knowledge in networking protocols, DBMS, and
              different Node.js architectures. I also learned how to build
              scalable and optimized backend systems. My goal is to secure a
              great job, develop strong full-stack expertise, and eventually
              transition into DevOps in the coming years.
              <br />
              &nbsp; &nbsp; &nbsp; Beyond technology, I have a passion for
              content creation and music.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Skills & Technologies</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
