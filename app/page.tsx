export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For remote workers in large Slack teams
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Never miss a Slack mention again
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          SlackDigest collects every mention, reply, and DM you missed and delivers a clean daily email digest — with full context — every morning.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get started for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔔", title: "Mentions & Replies", desc: "Every @mention and thread reply captured automatically." },
            { icon: "✉️", title: "DMs Included", desc: "Direct messages summarized alongside channel activity." },
            { icon: "📋", title: "Full Context", desc: "See the surrounding conversation, not just the ping." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$8<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6">Everything included, one workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect unlimited Slack channels",
              "Daily email digest at your chosen time",
              "Mentions, replies & DMs in one place",
              "Full message context included",
              "Slack OAuth — no bot tokens to manage",
              "Cancel anytime"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Start for $8/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does SlackDigest connect to my Slack?",
              a: "You authorize SlackDigest via Slack OAuth. We request read-only scopes to collect mentions and messages — no admin permissions needed."
            },
            {
              q: "When is the digest sent?",
              a: "By default, your digest arrives every morning at 8 AM in your timezone. You can adjust the delivery time from your dashboard."
            },
            {
              q: "Is my Slack data stored?",
              a: "We store only the messages needed to build your digest and delete them after delivery. We never sell or share your data."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} SlackDigest. Not affiliated with Slack Technologies.
      </footer>
    </main>
  );
}
