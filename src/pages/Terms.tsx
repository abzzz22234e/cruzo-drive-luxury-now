import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-luxury-dark mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                By accessing and using Cruzo's platform, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Platform Services</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Cruzo operates as a peer-to-peer car rental platform connecting car owners with renters. 
                We facilitate bookings but are not directly involved in the rental transactions between parties.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Booking and payment processing</li>
                <li>Identity verification services</li>
                <li>Insurance coordination</li>
                <li>Customer support</li>
                <li>Delivery services (where applicable)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>To use Cruzo, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 25 years old</li>
                <li>Hold a valid UK or international driving license for minimum 2 years</li>
                <li>Provide accurate and complete registration information</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Booking and Payment</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4 className="text-lg font-semibold mb-2">Booking Process</h4>
              <p>
                All bookings are subject to availability and owner approval. Prices include basic insurance 
                but exclude fuel and optional services like delivery.
              </p>
              
              <h4 className="text-lg font-semibold mb-2 mt-4">Payment Terms</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is due at time of booking</li>
                <li>Security deposits are held during rental period</li>
                <li>Cancellations must be made 24+ hours in advance</li>
                <li>Late returns incur additional charges</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Insurance and Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                All rentals include comprehensive insurance coverage. However, renters remain liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Damage exceeding insurance coverage</li>
                <li>Traffic violations and fines</li>
                <li>Loss of keys or documents</li>
                <li>Misuse or negligent operation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Car Owner Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Car owners must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate vehicle information and photos</li>
                <li>Maintain vehicles in excellent condition</li>
                <li>Ensure all documentation is current</li>
                <li>Be available for handover arrangements</li>
                <li>Report any issues promptly</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>The following activities are strictly prohibited:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Commercial use (taxi, delivery, ride-sharing)</li>
                <li>Racing or competitive driving</li>
                <li>Off-road driving</li>
                <li>Smoking or drug use in vehicles</li>
                <li>Subletting to third parties</li>
                <li>Cross-border travel without permission</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Cancellation Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4 className="text-lg font-semibold mb-2">By Renters</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>24+ hours: Full refund minus processing fee</li>
                <li>6-24 hours: 50% refund</li>
                <li>Less than 6 hours: No refund</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-2 mt-4">By Car Owners</h4>
              <p>
                Owners canceling confirmed bookings may face penalties and account restrictions. 
                Emergency cancellations will be reviewed case by case.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Platform Fees</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Cruzo charges the following fees:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Renter service fee: 10-15% of booking value</li>
                <li>Owner commission: 15-25% of earnings</li>
                <li>Payment processing: 2.9% + £0.30 per transaction</li>
                <li>Delivery service: £80 per delivery (optional)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Disputes between users should first be addressed through our customer service team. 
                Unresolved matters may be subject to binding arbitration under UK law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Cruzo's liability is limited to the fees paid for our services. We are not liable for 
                indirect, incidental, or consequential damages arising from platform use.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We reserve the right to modify these terms at any time. Users will be notified of 
                significant changes via email or platform notification.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-12 p-6 bg-luxury-light rounded-lg">
            <p className="text-muted-foreground">
              For questions about these terms, contact us at <strong>legal@cruzo.co.uk</strong>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;