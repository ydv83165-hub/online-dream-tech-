import type { Metadata } from "next";
import { BRAND, DELIVERY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ordering from ${BRAND.name} (${BRAND.domain}).`,
};

export default function TermsPage() {
  const lastUpdated = "July 8, 2026";

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Terms & Conditions"
          subtitle={`Last updated: ${lastUpdated}`}
          align="left"
        />

        <div className="space-y-8 text-cream/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              1. General
            </h2>
            <p>
              These Terms and Conditions govern your use of the {BRAND.domain}{" "}
              website and your purchase of products or services from {BRAND.legalName}{" "}
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By placing
              an order, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              2. Products & Pricing
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                All prices displayed on the website are Maximum Retail Price
                (MRP) inclusive of applicable GST.
              </li>
              <li>
                Product images are for illustrative purposes. Actual packaging
                may vary slightly.
              </li>
              <li>
                We reserve the right to modify prices without prior notice.
                Confirmed orders will be honored at the price agreed upon at the
                time of order confirmation.
              </li>
              <li>
                Product descriptions, ingredients, and nutritional information
                are provided in good faith and to the best of our knowledge.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              3. Ordering Process
            </h2>
            <p className="mb-3">
              Orders are placed exclusively via WhatsApp ({BRAND.whatsappDisplay}
              ). The process is as follows:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Browse products on our website and add items to your cart.</li>
              <li>
                Click &quot;Send Order on WhatsApp&quot; to open WhatsApp with a
                pre-filled order summary.
              </li>
              <li>
                Provide your name, delivery address, and pincode in the
                WhatsApp conversation.
              </li>
              <li>
                We will confirm availability, total amount, and delivery timeline
                via WhatsApp.
              </li>
              <li>
                Payment and delivery details will be shared upon order
                confirmation.
              </li>
            </ol>
            <p className="mt-3">
              An order is considered confirmed only after we acknowledge and
              confirm it via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              4. Delivery
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We deliver <strong className="text-cream/90">{DELIVERY.coverage}</strong>.
              </li>
              <li>
                Orders confirmed before the cut-off time are eligible for{" "}
                <strong className="text-cream/90">{DELIVERY.dispatch}</strong>.
              </li>
              <li>
                Delivery timelines vary by location and will be communicated at
                the time of order confirmation.
              </li>
              <li>
                Shipping charges, if applicable, will be communicated before
                order confirmation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              5. Returns & Refunds
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Due to the perishable nature of food products, returns are
                accepted only for damaged, defective, or incorrect items
                received.
              </li>
              <li>
                Please report any issues within 24 hours of delivery with
                photographic evidence via WhatsApp.
              </li>
              <li>
                Approved refunds will be processed within 7–10 business days via
                the original payment method.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              6. Food Safety
            </h2>
            <p>
              {BRAND.legalName} products are manufactured and packed under FSSAI License
              No. {BRAND.fssai}. Store products in a cool, dry place. Check the
              packaging for best-before date and storage instructions.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              7. Allergen Information
            </h2>
            <p>
              Our products contain tree nuts and seeds. They may also be
              processed in facilities that handle other allergens. Customers
              with food allergies should review ingredient lists carefully before
              ordering.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              {BRAND.legalName} shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our products or
              website. Our liability is limited to the value of the product
              purchased.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              9. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall
              be subject to the jurisdiction of courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-gold font-display text-xl mb-3">
              10. Contact
            </h2>
            <p>
              For questions about these terms, contact us at:
              <br />
              {BRAND.legalName}
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
