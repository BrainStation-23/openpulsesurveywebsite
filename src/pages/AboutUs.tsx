
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Book } from "lucide-react";
import Markdown from "markdown-to-jsx";

const aboutUsMarkdown = `
## 🚀 Our Story: Born From a Real Need, Built With Purpose

I'm **Tanimul Haque Khan**, and I lead the **Innovation Department at Brain Station 23**. This journey started with a simple, thought-provoking conversation with our CTO, **Mizanur Rahman**.

He shared a concern that many leaders today quietly carry:  
> "Most pulse survey platforms are **SaaS-based**, and we have **no control** over our data. Even if they promise data isolation, we can't verify it. On top of that, the pricing grows with each user – it's invasive and unfair."

This struck a chord. We both knew that as organizations grow, these platforms become not only **increasingly expensive**, but also **compliance nightmares** – storing sensitive HR data in shared environments without true transparency.

### 🧩 The HR Perspective

I took this concern to our **Senior HR Manager, Abdul Motaleb Sohel**, and asked:  
> "What's missing from your current pulse survey tools?"

He opened up about the everyday pain of using tools that weren't built for **real HR needs** – tools that lacked empathy, customization, and practical features that matter most during execution.

We realized something profound:  
🛠️ **HR needs a product designed *with* them, not *for* them.**

---

## 🌱 The Birth of *Open Pulse Survey*

Out of this collaboration came **Open Pulse Survey** –  
a tool shaped by those who **needed it most**, not by what the market was selling.

### Why We Built It:
- ✅ **Self-hosted or isolated per-client**, giving full control over data.
- 💸 **No invasive per-user/month pricing.** Growth shouldn't feel like a penalty.
- ❤️ **Co-designed with HR**, ensuring it solves real, everyday problems.
- 🔄 **Transparent, flexible, and built with compliance in mind.**

> _This isn't just another survey platform._  
> It's a rebellion against the exploitative pricing and black-box policies of typical SaaS solutions.

---

## ✊ Built for People, Not Just Profit

At its core, Open Pulse Survey is about **empowering organizations** to take back ownership of their data, processes, and employee experience.

It's not built for mass market exploitation.  
It's built for **teams that care**, by a team that does.

Welcome to the future of people-first feedback.
`;

const AboutUs = () => {
  return (
    <Layout
      title="About Open Pulse Survey | Our Story"
      description="Learn about the team behind Open Pulse Survey and how our self-hosted employee feedback platform came to be."
    >
      <section className="container-tight py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Our Story</h1>
            <p className="text-xl text-gray-600">
              The journey behind Open Pulse Survey and our mission to transform employee feedback
            </p>
          </div>

          <Card className="p-8 mb-12">
            <div className="prose prose-blue max-w-none">
              <h2 className="flex items-center text-2xl font-semibold text-gray-900 mb-6">
                <Book className="mr-2 h-5 w-5 text-blue-500" />
                Our Journey
              </h2>
              
              <Markdown
                options={{
                  overrides: {
                    h2: {
                      component: "h2",
                      props: {
                        className: "text-2xl font-semibold text-gray-900 mt-8 mb-4",
                      },
                    },
                    h3: {
                      component: "h3",
                      props: {
                        className: "text-xl font-semibold text-gray-900 mt-8 mb-4",
                      },
                    },
                    p: {
                      component: "p",
                      props: {
                        className: "my-4 text-gray-700",
                      },
                    },
                    ul: {
                      component: "ul",
                      props: {
                        className: "list-disc pl-5 my-4 text-gray-700",
                      },
                    },
                    li: {
                      component: "li",
                      props: {
                        className: "mb-2",
                      },
                    },
                    blockquote: {
                      component: "blockquote",
                      props: {
                        className: "border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600",
                      },
                    },
                    hr: {
                      component: "hr",
                      props: {
                        className: "my-8 border-t border-gray-200",
                      },
                    },
                  },
                }}
              >
                {aboutUsMarkdown}
              </Markdown>
            </div>
          </Card>

          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-gray-700 mb-6">
              We're always looking to improve Open Pulse Survey and would love to hear your feedback or answer any questions.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
