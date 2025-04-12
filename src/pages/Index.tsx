import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, ChartBar, Activity, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/PageLayout';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                Early Detection of{' '}
                <span className="gradient-text">Preterm Birth</span>
              </h1>
              <p className="text-lg text-gray-600">
                Our AI-powered prediction tool helps healthcare professionals identify potential preterm birth risks with higher accuracy, allowing for earlier interventions and better outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/predict">
                  <Button className="bg-medical-600 hover:bg-medical-700 text-white">
                    Try Prediction Tool <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline">Learn More About Us</Button>
                </Link>
              </div>
            </div>
            <div className="lg:flex justify-end">
              <div className="relative">
                <div className="absolute -z-10 rounded-full w-72 h-72 bg-gradient-radial from-medical-100 to-transparent blur-3xl opacity-70 bottom-0 right-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-medical-600 to-medical-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to improve maternal care?</h2>
          <p className="text-medical-50 mb-8 max-w-2xl mx-auto">
            Join healthcare professionals worldwide using our prediction tool to reduce preterm birth complications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/predict">
              <Button className="bg-white text-medical-700 hover:bg-medical-50">
                Try Prediction Tool
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
