import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Aashvee Tech Solutions</title>
        <meta name="description" content="Terms of Service for Aashvee Tech Solutions - Read our terms and conditions for using our services." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground mb-6">Last updated: February 12, 2026</p>

            <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using the services provided by Aashvee Tech Solutions ("Company", "we", "our", or "us"), including our website, mobile applications, content management systems (CMS), dashboards, AI-powered products, and any related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Description of Services</h2>
                <p>Aashvee Tech Solutions provides the following digital products and services:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>CMS Software:</strong> Custom content management systems for businesses, including multi-user content management, workflow automation, and digital publishing platforms</li>
                  <li><strong>Mobile Application Development:</strong> Native and cross-platform mobile applications for Android and iOS</li>
                  <li><strong>Web Development:</strong> Custom business websites, e-commerce platforms, progressive web applications, and API development</li>
                  <li><strong>Dashboard Solutions:</strong> Real-time analytics dashboards, data visualization tools, KPI tracking systems, and custom reporting solutions</li>
                  <li><strong>AI Products:</strong> Machine learning models, natural language processing solutions, predictive analytics, and AI-powered automation including our Data Learning platform</li>
                  <li><strong>Cloud Solutions:</strong> Cloud migration, scalable hosting, data backup, and monitoring services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">3. User Accounts</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>You must provide accurate, complete, and current information during registration</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You are responsible for all activities that occur under your account</li>
                  <li>You must notify us immediately of any unauthorized use of your account</li>
                  <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Payment Terms</h2>
                <h3 className="font-semibold text-foreground mb-2">4.1 Pricing and Billing</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All prices are listed in Indian Rupees (INR) unless otherwise stated</li>
                  <li>Prices are exclusive of applicable taxes (GST) unless explicitly mentioned</li>
                  <li>We reserve the right to modify pricing with prior notice to existing customers</li>
                  <li>Subscription services are billed on a recurring basis as per the selected plan</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">4.2 Payment Methods</h3>
                <p>We accept payments through the following methods via our authorized payment gateway partners:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Credit Cards (Visa, MasterCard, American Express, RuPay)</li>
                  <li>Debit Cards</li>
                  <li>Net Banking</li>
                  <li>UPI (Unified Payments Interface)</li>
                  <li>Digital Wallets</li>
                  <li>Bank Transfer / NEFT / RTGS</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">4.3 Payment Processing</h3>
                <p>All online payments are processed through PCI-DSS compliant payment gateways. We do not store your complete payment card information on our servers. All transactions are encrypted using industry-standard SSL/TLS protocols.</p>

                <h3 className="font-semibold text-foreground mb-2 mt-4">4.4 Failed Transactions</h3>
                <p>In the event of a failed transaction, the debited amount (if any) will be refunded to the original payment method within 5-7 business days. If the amount is not refunded within this timeframe, please contact our support team.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Refund and Cancellation Policy</h2>
                <h3 className="font-semibold text-foreground mb-2">5.1 Software Products and Subscriptions</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Subscription cancellations must be initiated at least 7 days before the next billing cycle</li>
                  <li>Refunds for annual subscriptions are prorated based on the remaining subscription period</li>
                  <li>Monthly subscription fees are non-refundable once the billing cycle has begun</li>
                  <li>Free trial periods do not require payment and can be cancelled at any time</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">5.2 Custom Development Services</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Refund eligibility for custom development projects is governed by the specific project agreement</li>
                  <li>Milestone-based payments are refundable only for undelivered milestones</li>
                  <li>Completed and approved work is non-refundable</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">5.3 Refund Process</h3>
                <p>To request a refund, contact us at info@aashveetech.com with your order details. Approved refunds will be processed within 7-10 business days to the original payment method.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All content, software, designs, logos, and trademarks on our platform are the property of Aashvee Tech Solutions or its licensors</li>
                  <li>You may not reproduce, distribute, modify, or create derivative works without written permission</li>
                  <li>For custom development projects, intellectual property rights transfer upon full payment as specified in the project agreement</li>
                  <li>Our proprietary AI models, algorithms, and underlying technology remain the property of Aashvee Tech Solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Acceptable Use</h2>
                <p>You agree not to use our Services to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Upload or distribute malicious software, viruses, or harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Use our platform for fraudulent activities or money laundering</li>
                  <li>Send unsolicited communications or spam</li>
                  <li>Interfere with the proper functioning of our Services</li>
                  <li>Reverse engineer, decompile, or disassemble any of our software</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Service Availability and SLA</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>We strive to maintain 99.9% uptime for our hosted services</li>
                  <li>Scheduled maintenance will be communicated in advance via email</li>
                  <li>We are not liable for downtime caused by factors beyond our reasonable control</li>
                  <li>Service credits may be issued for extended outages as per individual service agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Data Protection</h2>
                <p>Your use of our Services is also governed by our Privacy Policy. We comply with applicable data protection laws including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (as applicable). We implement appropriate technical and organizational measures to protect your data.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Aashvee Tech Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our Services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim in the 12 months preceding the claim.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">11. Indemnification</h2>
                <p>You agree to indemnify and hold harmless Aashvee Tech Solutions, its directors, officers, employees, and agents from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from your use of our Services, violation of these Terms, or infringement of any third-party rights.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">12. Termination</h2>
                <p>We may terminate or suspend your access to our Services at any time, with or without cause, upon notice. Upon termination, your right to use the Services ceases immediately. Data export options will be provided for a reasonable period following termination.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">13. Dispute Resolution</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>These Terms are governed by the laws of India</li>
                  <li>Any disputes shall first be attempted to be resolved through mediation</li>
                  <li>If mediation fails, disputes shall be subject to the exclusive jurisdiction of the courts in Rajahmundry, Andhra Pradesh, India</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">14. Modifications to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. Material changes will be notified via email or through a prominent notice on our platform. Continued use of our Services after changes constitutes acceptance of the modified Terms.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">15. Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us:</p>
                <ul className="list-none space-y-1 mt-2">
                  <li><strong>Company:</strong> Aashvee Tech Solutions</li>
                  <li><strong>Address:</strong> Rajahmundry, Andhra Pradesh, India</li>
                  <li><strong>Email:</strong> info@aashveetech.com</li>
                  <li><strong>Phone:</strong> +91 98765 43210</li>
                </ul>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
