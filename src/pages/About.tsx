
import React from 'react';
import { Shield, Award, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">About BabyBloom Predictor</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to reduce preterm births through advanced prediction technology 
              and empower healthcare providers with actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  BabyBloom Predictor was born from a collaboration between medical researchers and 
                  AI specialists who recognized the need for better preterm birth prediction tools.
                </p>
                <p>
                  After years of research and development, our team created an algorithm that 
                  analyzes multiple risk factors to provide healthcare providers with early 
                  warnings for potential preterm births.
                </p>
                <p>
                  Since our launch, we've helped thousands of healthcare professionals make 
                  more informed decisions, resulting in better outcomes for mothers and babies worldwide.
                </p>
              </div>
            </div>
            <div className="lg:flex justify-end">
              <div className="relative">
                <div className="absolute -z-10 rounded-full w-72 h-72 bg-gradient-radial from-medical-100 to-transparent blur-3xl opacity-70 bottom-0 left-0"></div>
                <img
                  src="https://images.unsplash.com/photo-1516645429142-f458ca520de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                  alt="Healthcare professionals collaborating"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              The principles that guide our research, development, and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-medical-100 flex items-center justify-center mb-5">
                  <BookOpen className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Evidence-Based</h3>
                <p className="text-gray-600 text-sm">
                  All our predictions and recommendations are grounded in rigorous scientific research and continuously updated.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-medical-100 flex items-center justify-center mb-5">
                  <Shield className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Privacy-First</h3>
                <p className="text-gray-600 text-sm">
                  We maintain the highest standards of data privacy and security in all our operations and technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-medical-100 flex items-center justify-center mb-5">
                  <Award className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We strive for excellence in every aspect of our work, from research to user experience and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -z-10 rounded-full w-72 h-72 bg-gradient-radial from-medical-100 to-transparent blur-3xl opacity-70 top-0 right-0"></div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                  alt="Medical technology"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Technology</h2>
              <div className="space-y-4">
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-medical-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">Machine Learning Models:</span>{" "}
                    Trained on anonymous data from over 50,000 pregnancies to identify subtle patterns and risk factors.
                  </p>
                </div>
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-medical-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">Multiple Inputs:</span>{" "}
                    Analyzes maternal health history, current vital signs, and biometric measurements for comprehensive assessment.
                  </p>
                </div>
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-medical-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">Continuous Improvement:</span>{" "}
                    Our algorithm is updated regularly with new medical research findings and feedback from healthcare providers.
                  </p>
                </div>
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-medical-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">User-Friendly Interface:</span>{" "}
                    Designed with input from medical professionals to ensure ease of use in clinical settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-medical-600 to-medical-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience the difference yourself</h2>
          <p className="text-medical-50 mb-8 max-w-2xl mx-auto">
            Try our prediction tool and see how it can enhance your maternal care practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/predict">
              <Button className="bg-white text-medical-700 hover:bg-medical-50">
                Try Prediction Tool <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
