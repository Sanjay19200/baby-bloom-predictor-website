
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const formObject = Object.fromEntries(formData.entries());
      
      // This simulates a form submission without needing the website URL
      // In a real app, you would send this to your backend API
      console.log('Form data submitted:', formObject);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear the form
      e.currentTarget.reset();
      
      toast.success('Thank you for your message! We will get back to you shortly.');
    } catch (error) {
      toast.error('There was an error submitting your message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about our prediction technology? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-medical-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                      <Input id="subject" name="subject" placeholder="How can we help you?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">Message</Label>
                      <Textarea id="message" name="message" placeholder="Type your message here..." rows={5} required />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-medical-600 hover:bg-medical-700 text-white w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>Send Message <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold gradient-text mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're always looking to help healthcare providers implement our prediction technology. 
                  Reach out to us with your questions or schedule a demo with our team.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600">sanjaygn689@gmail.com</p>
                      <p className="text-gray-600">info@babybloom.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">+91 7899778511</p>
                      <p className="text-gray-600">+91 6360783296</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-600">
                    </p>
                      <p className="text-gray-600">Our College:

CSE dept
Dayanand Sagar Academy of Technology and Management

INDIA</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                      <p className="text-gray-600">Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-4">Schedule a Demo</h3>
                <p className="text-gray-600 mb-4">
                  Interested in seeing how our prediction tool works in a clinical setting? 
                  Schedule a personalized demo with our team.
                </p>
                <Button className="bg-medical-600 hover:bg-medical-700 text-white w-full">
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default Contact;
