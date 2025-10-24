"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import BlogLayout from "@/app/blog/_components/bloglayout";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const posts = [
  {
    id: 1,
    title: "Becoming a More Effective Leader in Modern Teams",
    date: "May 14, 2025",
    hero: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "True leadership in today’s workplace means empowering others, embracing adaptability, and leading with emotional intelligence.",
    content: `
<p><strong>Overview</strong></p>
<p>Modern leadership is about influence, not authority. Empower teams by fostering psychological safety, enabling collaboration, and giving ownership of results.</p>

<p><strong>Core principles</strong></p>
<ul>
  <li>Communicate with empathy and clarity.</li>
  <li>Encourage autonomy and accountability.</li>
  <li>Recognize effort and celebrate growth, not just outcomes.</li>
</ul>

<p><strong>Practical tip:</strong> Schedule regular one-on-ones focused on coaching, not just reporting.</p>
`,
  },
  {
    id: 2,
    title: "How to Build a Growth Mindset Culture in Your Team",
    date: "April 4, 2025",
    hero: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "When teams adopt a growth mindset, innovation and resilience follow naturally. Here's how to make it part of your everyday culture.",
    content: `
<p><strong>Culture shift</strong></p>
<p>Organizations that reward learning rather than perfection build stronger, more creative teams. Encourage experimentation and normalize constructive feedback.</p>

<p><strong>Key practices</strong></p>
<ul>
  <li>Celebrate lessons learned, not just success stories.</li>
  <li>Include “what we learned” sections in project reviews.</li>
  <li>Model curiosity as a leader—ask questions openly.</li>
</ul>

<p><strong>Outcome:</strong> Teams develop resilience and ownership that fuels long-term success.</p>
`,
  },
  {
    id: 3,
    title: "The Art of Time Management for Busy Professionals",
    date: "February 12, 2025",
    hero: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Mastering time management isn’t about doing more—it’s about doing what matters most efficiently.",
    content: `
<p><strong>Understanding priorities</strong></p>
<p>Not all tasks are equal. Use frameworks like Eisenhower’s Matrix to distinguish between urgent and important activities.</p>

<p><strong>Strategies</strong></p>
<ul>
  <li>Block focus time for deep work—no notifications.</li>
  <li>Batch similar tasks to reduce context switching.</li>
  <li>Set realistic daily goals rather than long to-do lists.</li>
</ul>

<p><strong>Tip:</strong> Reflect weekly on where your time went versus where it should go.</p>
`,
  },
  {
    id: 4,
    title: "Communicating with Impact: How to Be Heard at Work",
    date: "January 3, 2025",
    hero: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Clear communication builds trust, credibility, and influence. Here’s how to make your message resonate.",
    content: `
<p><strong>Key techniques</strong></p>
<ul>
  <li>Structure your message with purpose, data, and action.</li>
  <li>Adapt your tone and delivery to your audience.</li>
  <li>Practice active listening—understanding before replying.</li>
</ul>

<p><strong>Bonus:</strong> Confidence grows through clarity. Preparation turns anxiety into authority.</p>
`,
  },
  {
    id: 5,
    title: "Mastering Emotional Intelligence in the Workplace",
    date: "October 21, 2024",
    hero: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Emotional intelligence (EQ) is the cornerstone of effective collaboration and leadership. Learn how to strengthen it.",
    content: `
<p><strong>What is EQ?</strong></p>
<p>It’s the ability to recognize, understand, and manage emotions—both yours and others’. High EQ correlates with strong relationships and performance.</p>

<p><strong>Ways to improve EQ</strong></p>
<ul>
  <li>Pause before reacting under stress.</li>
  <li>Seek feedback to uncover blind spots.</li>
  <li>Show genuine empathy in conversations.</li>
</ul>

<p><strong>Result:</strong> Better teamwork, less conflict, and higher job satisfaction.</p>
`,
  },
];

export default function ProfessionalDevelopmentPost({ params }) {
  const post = posts.find((p) => p.id.toString() === params.id);
  if (!post) return notFound();

  return (
    <BlogLayout
      title={post.title}
      subtitle={post.date}
      slides={["Professional Growth", "Leadership", "Team Success"]}
      backgroundImage={post.hero}
    >
      <motion.article
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3 px-4 sm:px-6 lg:px-8"
      >
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            variants={fadeUp}
            className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10"
          >
            <Image
              src={post.hero}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <header className="mb-4 border-b border-gray-700 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-3">
              {post.title}
            </h1>
            <p className="text-gray-400 mb-2 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="inline-block bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full font-medium border border-blue-400/40">
                Leadership
              </span>
              <span>{post.date}</span>
            </div>
          </header>

          <motion.div
            variants={fadeUp}
            className="prose prose-invert max-w-none text-gray-300 prose-headings:text-blue-300 prose-strong:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeUp}
          className="lg:col-span-1 space-y-6 lg:pl-6"
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/60 p-6 rounded-2xl backdrop-blur-md hover:border-blue-500/40 transition">
            <h4 className="text-blue-400 font-bold mb-3 text-lg">
              Key Takeaways
            </h4>
            <ul className="text-gray-300 list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>Invest in emotional intelligence and communication.</li>
              <li>Lead with empathy and growth mindset.</li>
              <li>Structure time around impact, not busyness.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/60 p-6 rounded-2xl backdrop-blur-md hover:border-blue-500/40 transition">
            <h4 className="text-blue-400 font-bold mb-3 text-lg">
              Related Reads
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {posts
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((related) => (
                  <li key={related.id}>
                    <a
                      href={`/blog/professional-development/${related.id}`}
                      className="text-blue-300 hover:text-blue-400 hover:underline"
                    >
                      {related.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="relative bg-gradient-to-tr from-gray-900 to-gray-800 border border-gray-700/60 rounded-2xl p-6 overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />
            <div className="relative">
              <h5 className="text-blue-300 font-semibold">Author</h5>
              <p className="text-gray-300 text-sm mt-1">Leadership Coach</p>
              <p className="text-gray-400 text-xs mt-3">
                A leadership development specialist helping teams and executives
                grow through evidence-based coaching and professional training.
              </p>
              <button className="mt-4 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg text-sm hover:bg-blue-500/30 transition">
                Explore more insights →
              </button>
            </div>
          </div>
        </motion.aside>
      </motion.article>
    </BlogLayout>
  );
}
