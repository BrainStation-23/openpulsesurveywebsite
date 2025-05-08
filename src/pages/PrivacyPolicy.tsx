import React from "react";
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout
      title="Privacy Policy - Open Pulse Survey"
      description="Our privacy policy reflects our commitment to data ownership and security. With our self-hosted platform, your data remains exclusively under your control."
    >
      <div className="container-tight py-12 md:py-16">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
            <Shield size={28} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            Our commitment to your data sovereignty and privacy
          </p>
        </div>

        <div className="prose prose-blue mx-auto max-w-3xl">
          <h2>Introduction</h2>
          <p>
            At Open Pulse Survey, we believe your data belongs to you. This privacy policy outlines how our anti-SaaS platform ensures your information remains under your exclusive control.
          </p>

          <h2>Data Ownership Philosophy</h2>
          <p>
            As a self-hosted solution, Open Pulse Survey operates fundamentally differently from SaaS platforms:
          </p>
          <ul>
            <li>All your data is stored exclusively on your infrastructure</li>
            <li>We have zero access to your survey data, responses, or employee information</li>
            <li>No data is transmitted to our servers for processing, analytics, or any other purpose</li>
          </ul>

          <h2>What Data We Don't Collect</h2>
          <p>
            Since Open Pulse Survey runs entirely on your infrastructure, we do not collect:
          </p>
          <ul>
            <li>Employee information or survey responses</li>
            <li>Usage statistics or analytics</li>
            <li>User behavior information</li>
            <li>Internal company data</li>
          </ul>

          <h2>Your Responsibility</h2>
          <p>
            As the operator of the Open Pulse Survey platform, you assume responsibility for:
          </p>
          <ul>
            <li>Securing your infrastructure and deployment</li>
            <li>Implementing appropriate access controls</li>
            <li>Backing up your data</li>
            <li>Complying with applicable privacy regulations in your jurisdiction</li>
          </ul>

          <h2>Limited Information Collection</h2>
          <p>
            We collect minimal information strictly necessary for:
          </p>
          <ul>
            <li>License validation (for enterprise customers)</li>
            <li>Critical security notifications</li>
            <li>Optional update notifications</li>
          </ul>

          <h2>Analytics and Tracking</h2>
          <p>
            Our website uses Facebook Pixel and Google Analytics to help us understand how visitors interact with our site and to optimize our marketing efforts. These services may collect information such as:
          </p>
          <ul>
            <li>Pages you visit on our website</li>
            <li>Actions you take, such as clicking buttons or filling forms</li>
            <li>Basic device information and browser type</li>
          </ul>
          <p>
            We use this information to measure the effectiveness of our ad campaigns and to provide you with more relevant content. These services may use cookies to collect this data. Please note that this tracking is limited to our marketing website only - it is not part of the self-hosted Open Pulse Survey platform that you deploy.
          </p>
          <p>
            <strong>Your Consent Control:</strong> We provide a cookie consent mechanism that allows you to control whether analytics cookies are used. You can change your preferences at any time by clicking the "Cookie Settings" button at the bottom of our website.
          </p>
          <p>
            You can also opt-out of tracking by adjusting your browser settings to reject cookies or by using browser extensions designed to block tracking scripts.
          </p>

          <h2>Security Responsibility Disclaimer</h2>
          <p>
            While we provide a secure platform design and best practices guidance, Open Pulse Survey is not liable for security vulnerabilities resulting from:
          </p>
          <ul>
            <li>Improper deployment configuration</li>
            <li>Failure to apply security updates</li>
            <li>Inadequate infrastructure security measures</li>
            <li>Unauthorized access due to insufficient access controls</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy to reflect changes in our practices or for legal reasons. We will notify customers of significant changes through our website or email.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at:
          </p>
          <p>
            <a href="mailto:privacy@openpulsesurvey.com">privacy@openpulsesurvey.com</a>
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Contact Us With Questions</Link>
          </Button>
        </div>

        <Separator className="my-12" />

        <div className="text-center text-sm text-gray-500">
          <p>Last updated: May 6, 2025</p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
