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
    title: "Advice from the experts: Top traits of a winning bid team",
    date: "March 19, 2025",
    hero: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "A winning bid team is built on clarity, ownership, and a shared narrative — here’s how to structure the people and processes that deliver results.",
    content: `
<p><strong>Overview</strong></p>
<p>Building a reliable bid function is about more than strong writing. It’s about structuring roles, creating repeatable processes, and making sure every contributor understands the evaluation criteria and win themes.</p>

<p><strong>Key roles</strong></p>
<ul>
  <li><strong>Bid Lead:</strong> Responsible for strategy, decision-making, and submission sign-off.</li>
  <li><strong>Subject Matter Experts:</strong> Provide technical detail and evidence of capability.</li>
  <li><strong>Writers:</strong> Craft persuasive, compliant responses aligned with evaluator needs.</li>
  <li><strong>Reviewers:</strong> Ensure compliance, tone, and scoring potential.</li>
</ul>

<p><strong>Team insights</strong></p>
<p>Top-performing teams operate on a shared schedule and communication rhythm. Regular review gates and consistent messaging allow multiple contributors to work efficiently without compromising quality.</p>
`,
  },
  {
    id: 2,
    title: "How to Win Bids and Tenders – Tips and Tricks",
    date: "January 29, 2025",
    hero: "https://images.unsplash.com/photo-1581091012184-7d8b3b50a6a1?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Practical, evaluator-focused techniques that turn compliant documents into persuasive wins.",
    content: `
<p><strong>Executive Summary</strong></p>
<p>Winning bids combine compliance with clear, evidence-based storytelling. Here are proven techniques to help your proposals stand out.</p>

<h4>Checklist for success</h4>
<ul>
  <li>Answer each question precisely in the requested order.</li>
  <li>Highlight measurable results from past projects.</li>
  <li>Focus on benefits, not just features.</li>
  <li>Include visuals like infographics or tables where permitted.</li>
</ul>

<p><strong>Final tip:</strong> A clear, concise structure improves readability and makes it easier for evaluators to score your responses quickly.</p>
`,
  },
  {
    id: 3,
    title: "Bidding for Government Contracts – Expert Tips",
    date: "December 2, 2024",
    hero: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Public sector bids require precision, compliance, and a clear value proposition. Here’s how to build trust with evaluators.",
    content: `
<p><strong>Understand the framework</strong></p>
<p>Government tenders often come with strict rules. Understanding how public procurement works will help you tailor responses that meet both technical and ethical expectations.</p>

<p><strong>Preparation is key</strong></p>
<p>Track upcoming tenders early, register on relevant portals, and have standard documentation (insurance, policies, financials) ready before submission windows open.</p>

<p><strong>Compliance first</strong></p>
<p>Non-compliance—even small formatting errors—can disqualify an otherwise strong proposal. Always perform a compliance matrix check before submission.</p>
`,
  },
  {
    id: 4,
    title: "‘Can you find us tenders?’",
    date: "September 19, 2024",
    hero: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "The secret to finding the right tender isn’t about volume — it’s about alignment, relevance, and strategy.",
    content: `
<p><strong>Where to start</strong></p>
<p>Identifying the right tenders requires a clear view of your strengths, preferred contract size, and target sectors. Focus your search on opportunities that match your capacity and experience.</p>

<h4>Sources of opportunity</h4>
<ul>
  <li>Official government tender portals.</li>
  <li>Industry-specific procurement bulletins.</li>
  <li>Networking and partnerships with prime contractors.</li>
</ul>

<p>Investing time in building search filters, tracking keywords, and setting alerts ensures you never miss opportunities that truly fit your profile.</p>
`,
  },
  {
    id: 5,
    title: "Improving your bidding – lessons from tennis",
    date: "July 5, 2024",
    hero: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Discipline, consistency, and adaptability — lessons from the tennis court that apply directly to winning bids.",
    content: `
<p><strong>Match strategy</strong></p>
<p>In both bidding and tennis, preparation defines performance. Study your competitors, understand the evaluation structure, and plan your responses accordingly.</p>

<p><strong>Practice makes perfect</strong></p>
<p>Conduct regular post-bid reviews to analyze what worked and what didn’t. Every bid is a chance to refine your approach.</p>

<p><strong>Stay focused</strong></p>
<p>When deadlines approach, clarity and composure matter more than speed. A calm, structured process produces higher-quality submissions every time.</p>
`,
  },
  {
    id: 6,
    title: "How to improve your bidding and work winning",
    date: "March 20, 2024",
    hero: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Success in bidding requires evolution. Here’s how to transform lessons into lasting competitive advantage.",
    content: `
<p><strong>Continuous improvement</strong></p>
<p>Winning organizations invest in data-driven improvement. Track bid success rates, identify weak points, and address them through training and structured review sessions.</p>

<p><strong>Learning culture</strong></p>
<p>Encourage open feedback from bid writers, reviewers, and even clients. This transparency promotes collective learning and sharper strategies.</p>

<p><strong>Build momentum</strong></p>
<p>Establish a consistent rhythm of review, training, and strategic updates. Over time, this approach compounds into significant competitive advantage.</p>
`,
  },
  {
    id: 7,
    title: "How to properly review your bid",
    date: "August 15, 2023",
    hero: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "A disciplined review process ensures compliance, clarity, and persuasion — three ingredients that win marks.",
    content: `
<p><strong>Review frameworks</strong></p>
<p>Implement a multi-stage review process focusing on structure, content quality, and evaluator alignment. Involve fresh reviewers who can assess the bid objectively.</p>

<p><strong>Compliance assurance</strong></p>
<p>Use checklists to confirm that every question has been answered in full, in the correct format, and with supporting evidence.</p>

<p><strong>Final polish</strong></p>
<p>After compliance, refine tone and readability. Ensure the language speaks to the client’s priorities rather than internal jargon.</p>
`,
  },
];

export default function MagazinePostPage({ params }) {
  const post = posts.find((p) => p.id.toString() === params.id);
  if (!post) return notFound();

  return (
    <BlogLayout
      title={post.title}
      subtitle={post.date}
      slides={["Bid Process", "Expert Insights", "Practical Advice"]}
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
                Insight
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
              <li>Define roles and ownership early.</li>
              <li>Use a simple, repeatable review process.</li>
              <li>Make evidence scannable for evaluators.</li>
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
                      href={`/blog/bid-process/${related.id}`}
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
              <p className="text-gray-300 text-sm mt-1">
                Senior Bid Consultant
              </p>
              <p className="text-gray-400 text-xs mt-3">
                With over 15 years in public sector procurement, the author has
                led and reviewed hundreds of successful bids across industries.
              </p>
              <button className="mt-4 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg text-sm hover:bg-blue-500/30 transition">
                View more articles →
              </button>
            </div>
          </div>
        </motion.aside>
      </motion.article>
    </BlogLayout>
  );
}
