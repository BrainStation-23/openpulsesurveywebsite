
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TechnicalFAQ = () => {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        Technical FAQ
      </h2>
      
      <div className="mb-16">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold py-4">
              What are the minimum system requirements?
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-0 text-gray-600">
              For small to medium organizations (up to 500 employees), we recommend a minimum of 4 CPU cores, 8GB RAM, and 50GB storage space. For larger organizations or high survey volumes, scaling resources accordingly is advised. The platform is designed to scale horizontally for increased load.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold py-4">
              Can I integrate with our existing LDAP/Active Directory?
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-0 text-gray-600">
              Yes, Open Pulse Survey supports integration with LDAP, Active Directory, and other identity providers through standard protocols like OAuth 2.0 and SAML. Supabase's authentication system makes this integration straightforward, allowing you to use your existing user management systems.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-4" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold py-4">
              What backup and disaster recovery options are available?
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-0 text-gray-600">
              The platform includes built-in backup capabilities that leverage PostgreSQL's native backup features. Backups can be scheduled to run automatically at your preferred intervals and stored locally or to a network location/cloud storage. We recommend implementing redundancy at both the application and database layers for mission-critical deployments.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold py-4">
              How can we customize the platform beyond the provided features?
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-0 text-gray-600">
              As an open-source solution built on React and Supabase, Open Pulse Survey is highly customizable. Enterprise licenses include access to the source code, API documentation, and developer resources. The React component architecture makes UI customization straightforward, while Supabase provides extensive backend customization options through database functions and webhooks.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold py-4">
              What are the benefits of using open-source technologies?
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-0 text-gray-600">
              By leveraging open-source technologies like React and Supabase, Open Pulse Survey provides several advantages: transparency (you can see how the code works), security (community-vetted code), flexibility (extensive customization options), cost efficiency (no ongoing license costs for the core technologies), and future-proofing (you're not locked into proprietary systems).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default TechnicalFAQ;
