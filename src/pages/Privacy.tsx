import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-luxury-dark mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4 className="text-lg font-semibold mb-2">Personal Information</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Date of birth and driver's license information</li>
                <li>Payment and billing information</li>
                <li>Government-issued ID for verification</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 mt-4">Usage Information</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Booking history and preferences</li>
                <li>App usage and interaction data</li>
                <li>Device information and IP address</li>
                <li>Location data (with permission)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process bookings and payments</li>
                <li>Verify identity and driving eligibility</li>
                <li>Provide customer support</li>
                <li>Send booking confirmations and updates</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal requirements</li>
                <li>Prevent fraud and ensure platform safety</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We may share your information with:</p>
              
              <h4 className="text-lg font-semibold mb-2 mt-4">Car Owners and Renters</h4>
              <p>
                Limited contact information necessary for coordination of bookings, 
                including name, phone number, and pickup/delivery details.
              </p>
              
              <h4 className="text-lg font-semibold mb-2 mt-4">Service Providers</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processors (Stripe, PayPal)</li>
                <li>Insurance providers</li>
                <li>Identity verification services</li>
                <li>Email and SMS communication providers</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 mt-4">Legal Requirements</h4>
              <p>
                When required by law, regulation, or court order, or to protect 
                our rights and the safety of our users.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We implement industry-standard security measures including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL encryption for all data transmission</li>
                <li>Secure data storage with regular backups</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
                <li>PCI DSS compliance for payment processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Under GDPR and UK data protection laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your data (subject to legal requirements)</li>
                <li>Restrict or object to data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              
              <p className="mt-4">
                To exercise these rights, contact us at <strong>privacy@cruzo.co.uk</strong>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We use cookies and similar technologies for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essential platform functionality</li>
                <li>User authentication and security</li>
                <li>Analytics and performance monitoring</li>
                <li>Personalized content and recommendations</li>
              </ul>
              
              <p className="mt-4">
                You can control cookie preferences through your browser settings or 
                our cookie management tool.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We retain your information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Active accounts: Duration of account plus 7 years</li>
                <li>Booking records: 7 years for legal compliance</li>
                <li>Payment data: As required by financial regulations</li>
                <li>Marketing data: Until you opt out</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. International Transfers</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Your data may be processed outside the UK/EU by our service providers. 
                We ensure adequate protection through approved transfer mechanisms 
                including Standard Contractual Clauses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Our services are not intended for users under 18. We do not knowingly 
                collect personal information from children. If we discover such 
                information has been provided, we will delete it promptly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We may update this privacy policy periodically. Significant changes 
                will be communicated via email or platform notification. Continued 
                use of our services constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>For privacy-related questions or concerns:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> privacy@cruzo.co.uk</p>
                <p><strong>Address:</strong> Cruzo Ltd, 123 Business Street, London, UK</p>
                <p><strong>Data Protection Officer:</strong> dpo@cruzo.co.uk</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12 p-6 bg-luxury-light rounded-lg">
            <p className="text-muted-foreground">
              We are committed to protecting your privacy and maintaining your trust. 
              If you have any questions about this policy, please don't hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;