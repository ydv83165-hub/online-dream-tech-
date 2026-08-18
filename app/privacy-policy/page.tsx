import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${BRAND.name} (${BRAND.domain}).`,
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 8, 2026";

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Privacy Policy"
          subtitle={`Last updated: ${lastUpdated}`}
          align="left"
        />

        <div className="space-y-8 text-cream/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              1. Introduction
            </h2>
            <p>
              {BRAND.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
              operates the website {BRAND.domain}. This Privacy Policy explains
              how we collect, use, and protect your information when you visit
              our website or place an order via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              As a frontend-only website without user accounts, we collect
              minimal information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-cream/90">Order information:</strong>{" "}
                When you place an order via WhatsApp, you voluntarily share
                your name, address, phone number, and order details through
                WhatsApp messaging.
              </li>
              <li>
                <strong className="text-cream/90">Cart data:</strong> Product
                selections are stored locally in your browser (localStorage) and
                are not transmitted to our servers.
              </li>
              <li>
                <strong className="text-cream/90">Analytics:</strong> We may use
                standard web analytics in the future to understand site usage.
                No personal data is collected without your consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To process and fulfill your orders</li>
              <li>To communicate with you about your order via WhatsApp</li>
              <li>To arrange delivery to your address</li>
              <li>To improve our products and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              4. Third-Party Services
            </h2>
            <p>
              When you click &quot;Order on WhatsApp&quot; or &quot;Send Order on
              WhatsApp&quot;, you are redirected to WhatsApp (a service operated
              by Meta Platforms, Inc.). Your communication on WhatsApp is
              governed by WhatsApp&apos;s own privacy policy. We do not control
              how WhatsApp handles your data.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              5. Data Security
            </h2>
            <p>
              We take reasonable measures to protect order information shared
              with us via WhatsApp. However, no method of electronic
              transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              6. Cookies
            </h2>
            <p>
              Our website may use essential cookies for basic functionality. Cart
              data is stored in your browser&apos;s localStorage. You can clear
              this data at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              7. Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data by contacting us at {BRAND.email} or via WhatsApp at{" "}
              {BRAND.whatsappDisplay}.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">9. Contact</h2>
            <p>
              For privacy-related questions, contact us at:
              <br />
              Email: {BRAND.email}
              <br />
              WhatsApp: {BRAND.whatsappDisplay}
              <br />
              Website: {BRAND.domain}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
