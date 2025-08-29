
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Database, Shield, Users, BarChart3, Zap, Globe, Building2 } from 'lucide-react';

const DataGovernanceMDM = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-blue-200 border-blue-300">
              Data Governance & Master Data Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Secure & Govern Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Data Assets</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Implement comprehensive data governance frameworks with role-based access, encryption, data catalogs, and lineage tracking to ensure HIPAA, GDPR, and SOC2 compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                Talk to a Data Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enterprise Data Governance Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In today's data-driven world, organizations struggle with disconnected systems, data silos, 
              lack of compliance controls, and difficulty managing data quality across enterprise systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Data Governance Framework</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure & Catalog</h4>
                    <p className="text-gray-600">Role-based access controls with comprehensive data cataloging</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Database className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Master Data Management</h4>
                    <p className="text-gray-600">Centralized master data with lineage tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Compliance Ready</h4>
                    <p className="text-gray-600">HIPAA, GDPR, and SOC2 compliance frameworks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-gray-600">Automated data quality monitoring and validation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Shield className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Security</h4>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Database className="w-8 h-8 text-green-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Data Catalog</h4>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Users className="w-8 h-8 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Access Control</h4>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Compliance</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Data Governance Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive data governance solutions covering enterprise needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Security & Encryption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  End-to-end encryption, role-based access controls, and secure data transmission protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Database className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Data Catalog & Lineage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automated data discovery, cataloging, and comprehensive lineage tracking across systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Compliance Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  HIPAA, GDPR, SOC2, and other regulatory compliance with automated reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-indigo-600 mb-4" />
                <CardTitle>Master Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Centralized master data repository with data quality rules and validation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Data Quality Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automated data quality assessments with anomaly detection and alerting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-600 mb-4" />
                <CardTitle>Policy Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automated policy enforcement and data governance workflows across platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Tailored data governance solutions for specific industry requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Healthcare & Life Sciences</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• HIPAA-compliant patient data governance</li>
                  <li>• Clinical trial data management and lineage</li>
                  <li>• Medical device data integrity and traceability</li>
                  <li>• Pharmaceutical regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Financial Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• SOX compliance and financial data governance</li>
                  <li>• Risk management and regulatory reporting</li>
                  <li>• Customer data privacy and consent management</li>
                  <li>• Anti-money laundering (AML) data controls</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-xl">Manufacturing & IoT</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• IoT sensor data governance and quality</li>
                  <li>• Supply chain data lineage and traceability</li>
                  <li>• Manufacturing process data compliance</li>
                  <li>• Product lifecycle data management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl">Retail & eCommerce</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Customer 360° data governance and privacy</li>
                  <li>• Product catalog master data management</li>
                  <li>• GDPR compliance for customer data</li>
                  <li>• Multi-channel data consistency and quality</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why RTNextGenAI */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose RTNextGenAI?
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Proven expertise in enterprise data governance and compliance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">Full-stack data governance expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">Certified specialists in major cloud platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">Proven compliance framework implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">Industry-specific governance solutions</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Business Outcomes</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-200">Reduced compliance risk and audit costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-200">Improved data quality and consistency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-200">Enhanced security and privacy controls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-200">Accelerated analytics and AI readiness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Govern Your Data Assets?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Transform your data governance with RTNextGenAI's comprehensive solutions. 
              Ensure compliance, security, and quality across your enterprise data ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Governance Journey
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataGovernanceMDM;
