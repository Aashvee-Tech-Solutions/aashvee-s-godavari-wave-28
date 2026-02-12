import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Aashvee Tech Solutions</title>
        <meta name="description" content="Privacy Policy of Aashvee Tech Solutions - Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">Last updated: February 12, 2026</p>

            <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Introduction</h2>
                <p>Aashvee Tech Solutions ("we", "our", or "us"), headquartered in Rajahmundry, Andhra Pradesh, India, is committed to protecting the privacy of our users and customers. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile applications, content management systems (CMS), dashboards, or any of our digital products and services.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
                <h3 className="font-semibold text-foreground mb-2">2.1 Personal Information</h3>
                <p>We may collect the following personal information when you register, make a purchase, subscribe to our services, or interact with our platform:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full name and contact details (email address, phone number, mailing address)</li>
                  <li>Billing and payment information (credit/debit card details, UPI, net banking details processed through secure payment gateways)</li>
                  <li>Business name and GST number (for B2B clients)</li>
                  <li>Account credentials (username and encrypted password)</li>
                  <li>Government-issued identification (when required for KYC compliance)</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">2.2 Non-Personal Information</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Browser type, operating system, device information</li>
                  <li>IP address and geolocation data</li>
                  <li>Pages visited, time spent, and navigation patterns</li>
                  <li>Cookies, pixels, and similar tracking technologies</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-2 mt-4">2.3 Payment Information</h3>
                <p>All payment transactions are processed through PCI-DSS compliant third-party payment gateways. We do not store your full credit card or debit card numbers on our servers. Payment data is encrypted using SSL/TLS technology and processed securely by our payment partners.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To provide, operate, and maintain our services including CMS platforms, mobile applications, web applications, dashboards, and AI-powered products</li>
                  <li>To process transactions and send related information including purchase confirmations, invoices, and receipts</li>
                  <li>To manage user accounts, provide customer support, and respond to inquiries</li>
                  <li>To send administrative information, service updates, and security alerts</li>
                  <li>To personalize user experience and deliver relevant content</li>
                  <li>To process payments through integrated payment gateways</li>
                  <li>To comply with legal obligations and regulatory requirements</li>
                  <li>To detect, prevent, and address fraud, security breaches, and technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Data Sharing and Disclosure</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Payment Processors:</strong> To facilitate secure payment transactions (e.g., Razorpay, Stripe, PayU, or other authorized payment gateways)</li>
                  <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in operating our platform, conducting business, or servicing you</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Data Security</h2>
                <p>We implement industry-standard security measures to protect your personal information:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>256-bit SSL/TLS encryption for all data transmissions</li>
                  <li>PCI-DSS compliant payment processing</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Encrypted data storage with regular backups</li>
                  <li>Firewall protection and intrusion detection systems</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Cookies Policy</h2>
                <p>We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Types of cookies we use:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our platform</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Your Rights</h2>
                <p>Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Data Retention</h2>
                <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Payment transaction records are retained as required by applicable financial regulations and tax laws.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Third-Party Links</h2>
                <p>Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services before providing your information.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Children's Privacy</h2>
                <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided personal information, we will take steps to delete such information promptly.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">11. Changes to This Policy</h2>
                <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">12. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
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

export default Privacy;
