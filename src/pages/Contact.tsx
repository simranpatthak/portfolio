
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const contacts = [
  {
    icon: <Github className="h-8 w-8" />,
    label: "GitHub",
    value: "@simranpatthak",
    link: "https://github.com/simranpatthak",
  },
  {
    icon: <Linkedin className="h-8 w-8" />,
    label: "LinkedIn",
    value: "Simran pathak",
    link: "https://linkedin.com/in/simran-pathak-0a98a82b1",
  },
  {
    icon: <Instagram className="h-8 w-8" />,
    label: "Instagram",
    value: "@simran",
    link: "https://instagram.com/simran",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    label: "Email",
    value: "simran@gmail.com",
    link: "mailto:simran@gmail.com",
  }
];

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
<main className="pt-24"><div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out through any of these platforms or fill out the form below. 
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
                <Card className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Project Discussion"
                {...register("subject", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="min-h-[150px]"
                {...register("message", { required: true })}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow flex items-center gap-4">
                <div className="text-primary">{contact.icon}</div>
                <div>
                  <h3 className="font-semibold">{contact.label}</h3>
                  <p className="text-muted-foreground">{contact.value}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div></main>

  );
};

export default Contact;
