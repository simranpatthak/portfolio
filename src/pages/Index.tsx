import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12 relative overflow-hidden">
      {/* Left-side Content */}
      <div className="space-y-6 text-left animate-fade-up max-w-lg md:w-1/2 flex flex-col justify-center">
        <p className="text-lg text-muted-foreground">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Simran Pathak</h1>
        <div className="text-xl text-primary h-20">
          <Typewriter
            options={{
              strings: ["I'm a Software Developer", "I'm a Learner", "I'm an Explorer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-gray-600 max-w-md">
          Passionate about building efficient and scalable web applications. Let's work together to create something amazing!
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link to="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button className="hover:bg-[#7b3aed] hover:text-white" variant="outline" onClick={() => setIsModalOpen(true)}>
            Hire Me
          </Button>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="/background.svg" alt="Background Illustration" className="w-4/5 md:w-full max-w-md h-auto object-contain transform scale-x-[-1]" />
      </div>
      
      {/* Hire Me Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hire Me</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Name</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Message</label>
              <textarea className="w-full p-2 border rounded" rows="3" placeholder="Your message" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
