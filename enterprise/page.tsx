import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function EnterprisePage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Enterprise-ready AI for Email Management</h2>
        <p className="text-lg text-gray-600 mb-8">
          Scale your email workflows with enterprise-grade AI agents. Handle massive volumes with intelligent automation, advanced infrastructure, and dedicated team support. Deliver exceptional experiences with unmatched reliability.
        </p>
        <Button className="mb-12">Contact us</Button>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <Image src="/logos/siemens.svg" alt="Siemens" height={48} width={120} />
          <Image src="/logos/pwc.svg" alt="PwC" height={48} width={120} />
          <Image src="/logos/postman.svg" alt="Postman" height={48} width={120} />
          <Image src="/logos/alpian.svg" alt="Alpian" height={48} width={120} />
          <Image src="/logos/opal.svg" alt="Opal" height={48} width={120} />
          <Image src="/logos/albaraka.svg" alt="Al Baraka" height={48} width={120} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-16">
          {[
            {
              title: "Dedicated account manager",
              text: "Enjoy 24/7 support, monitoring, and guidance from your expert.",
            },
            {
              title: "Custom integrations",
              text: "Tailored integrations to fit your email tools and workflows.",
            },
            {
              title: "SLA guarantees",
              text: "Enterprise-grade uptime and reliability backed by SLAs.",
            },
            {
              title: "Advanced security features",
              text: "SSO, detailed audit logs, and enterprise controls for compliance.",
            },
            {
              title: "Roadmap influence",
              text: "Shape future features based on your organization’s needs.",
            },
            {
              title: "Higher usage limits",
              text: "Scale across users, agents, and email volume.",
            },
          ].map(({ title, text }, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
        <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
          “EmailAssist is a strong signal of how email management will evolve. It's an early adopter of agentic automation—intelligent, reliable, and trusted.”
          <br />
          <span className="font-semibold">— Marc Manara, OpenAI</span>
        </blockquote>
        <div className="mt-16 text-left max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Enterprise-grade security & privacy</h3>
          <p className="text-gray-600 mb-6">
            We take security and compliance seriously. EmailAssist is SOC 2 Type II and GDPR compliant, trusted by thousands to manage email securely.
          </p>
          <ul className="space-y-4 text-gray-600 list-disc list-inside">
            <li><strong>Your data stays yours:</strong> Only accessible to your AI assistant, never used to train external models.</li>
            <li><strong>End-to-end encryption:</strong> Data encrypted at rest and in transit.</li>
            <li><strong>Secure integrations:</strong> Integrate safely with your systems while maintaining data boundaries.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
