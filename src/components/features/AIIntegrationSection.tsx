
import React from "react";
import { Server, Cog, WandSparkles } from "lucide-react";

const AIIntegrationSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl my-16">
      <div className="mx-auto max-w-2xl md:text-center mb-12">
        <h2 className="text-base font-semibold leading-7 text-purple-600">
          AI Integration
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Connect with powerful AI models
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Integrate with leading AI services or use your own models while maintaining complete data sovereignty.
        </p>
      </div>

      {/* Public API Models */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Public API Providers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-google-plain colored text-4xl"></i>
            </div>
            <h4 className="text-lg font-medium text-gray-900">Google Gemini</h4>
            <p className="mt-2 text-gray-600">Access Gemini's powerful models with simple API key configuration.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <svg viewBox="0 0 40 40" className="w-12 h-12">
                <path fill="#000000" d="M29.63,12.24c-0.66-1.73-3.05-1.73-3.71,0L12.51,37.58c-0.66,1.73,0.66,3.46,2.56,1.14c2.73-2.35,11.37-8.8,17.12-14.27C36.06,21.05,32.86,16.87,29.63,12.24z M28.44,23.08L18.3,31.9l6.05-16.36c0.19-0.48,0.76-0.48,0.95,0l4.07,7.54C29.56,23.47,29.33,23.12,28.44,23.08z"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-900">Anthropic Claude</h4>
            <p className="mt-2 text-gray-600">Utilize Claude's nuanced understanding for detailed survey insights.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-openai-plain colored text-4xl"></i>
            </div>
            <h4 className="text-lg font-medium text-gray-900">OpenAI</h4>
            <p className="mt-2 text-gray-600">Connect to GPT models with your organization's API key.</p>
          </div>
        </div>
      </div>

      {/* Self-Hosted Solutions */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Self-Hosted Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Server className="h-10 w-10 text-purple-600" />
            </div>
            <h4 className="text-lg font-medium text-gray-900">Ollama</h4>
            <p className="mt-2 text-gray-600">Run open source models locally with Ollama's simple deployment.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <svg viewBox="0 0 80 80" className="w-12 h-12">
                <path fill="#4A33FB" d="M39.5,11c-12.15,0-22,8.39-22,18.74c0,5.23,2.35,9.97,6.19,13.47l-6.54,18.25l17.7-11.33c1.5,0.23,3.04,0.35,4.64,0.35c12.15,0,22-8.39,22-18.74S51.65,11,39.5,11z"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-900">LM Studio</h4>
            <p className="mt-2 text-gray-600">Test and deploy various language models with intuitive interface.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Cog className="h-10 w-10 text-purple-600" />
            </div>
            <h4 className="text-lg font-medium text-gray-900">Custom Endpoints</h4>
            <p className="mt-2 text-gray-600">Connect any LLM model with our flexible API integration system.</p>
          </div>
        </div>
      </div>

      {/* Cloud-Hosted Private Models */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Enterprise Cloud Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-amazonwebservices-plain-wordmark colored text-4xl"></i>
            </div>
            <h4 className="text-lg font-medium text-gray-900">AWS Bedrock</h4>
            <p className="mt-2 text-gray-600">Enterprise-grade AI infrastructure with compliant hosting.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-azure-plain colored text-4xl"></i>
            </div>
            <h4 className="text-lg font-medium text-gray-900">Azure OpenAI</h4>
            <p className="mt-2 text-gray-600">Microsoft's secure cloud deployment of OpenAI models.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-vercel-plain colored text-4xl"></i>
            </div>
            <h4 className="text-lg font-medium text-gray-900">Vercel AI</h4>
            <p className="mt-2 text-gray-600">Streamlined AI deployment with Vercel's edge infrastructure.</p>
          </div>
        </div>
      </div>

  );
};

export default AIIntegrationSection;
