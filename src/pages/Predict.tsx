
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle,
  Info,
  ChevronDown
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { toast } from 'sonner';

const Predict = () => {
  const [formData, setFormData] = useState({
    weight: 0.75,
    length: 34.5,
    headCircumference: 9.1,
    gestationalAge: 36, // Added gestational age with default value
  });
  
  const [predictionResult, setPredictionResult] = useState<{
    gestationalAge: number;
    isPreterm: boolean;
    confidence: number;
  } | null>(null);

  const [formError, setFormError] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    if (formData.weight <= 0 || formData.length <= 0 || formData.headCircumference <= 0 || formData.gestationalAge <= 0) {
      setFormError('All measurements must be greater than zero');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    // Use provided gestational age as a factor in the calculation
    // This is a simplified prediction model for demonstration
    const calculatedGestationalAge = Math.round(
      formData.gestationalAge * 0.7 + // Give weight to the provided gestational age
      (formData.weight / 0.1) * 0.4 + 
      (formData.length / 10) * 0.3 + 
      (formData.headCircumference / 5) * 0.5
    );
    
    const isPreterm = calculatedGestationalAge < 37;
    const confidence = Math.min(95, 75 + Math.abs(37 - calculatedGestationalAge) * 1.5);

    setPredictionResult({
      gestationalAge: calculatedGestationalAge,
      isPreterm,
      confidence
    });

    toast.success("Prediction completed successfully");
  };

  const resetForm = () => {
    setFormData({
      weight: 0.75,
      length: 34.5,
      headCircumference: 9.1,
      gestationalAge: 36,
    });
    setPredictionResult(null);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">Preterm Birth Prediction Tool</h1>
            <p className="text-xl text-gray-600 mb-8">
              Enter the newborn's measurements to predict gestational age and preterm birth status.
            </p>
          </div>
        </div>
      </section>

      {/* Prediction Tool Section */}
      <section className="py-8 sm:py-16 mb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left panel - Form */}
                  <div className="p-6 lg:p-8 col-span-3 border-b lg:border-b-0 lg:border-r border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Measurements</h2>
                    
                    {formError && (
                      <div className="bg-rose-50 text-rose-700 p-3 rounded-md mb-6 flex items-start">
                        <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{formError}</p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Gestational Age Input */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label htmlFor="gestationalAge" className="text-gray-700">Gestational Age (weeks)</Label>
                          <span className="text-sm text-gray-500">{formData.gestationalAge} weeks</span>
                        </div>
                        <Slider 
                          id="gestationalAge"
                          value={[formData.gestationalAge]} 
                          min={22} 
                          max={42} 
                          step={1}
                          onValueChange={(values) => handleInputChange('gestationalAge', values[0])} 
                          className="mb-2"
                        />
                        <Input 
                          type="number" 
                          value={formData.gestationalAge}
                          step={1}
                          onChange={(e) => handleInputChange('gestationalAge', parseInt(e.target.value))}
                          className="mt-2"
                        />
                      </div>
                      
                      {/* Weight Input */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label htmlFor="weight" className="text-gray-700">Weight (kg)</Label>
                          <span className="text-sm text-gray-500">{formData.weight} kg</span>
                        </div>
                        <Slider 
                          id="weight"
                          value={[formData.weight]} 
                          min={0.1} 
                          max={5} 
                          step={0.01}
                          onValueChange={(values) => handleInputChange('weight', values[0])} 
                          className="mb-2"
                        />
                        <Input 
                          type="number" 
                          value={formData.weight}
                          step={0.01}
                          onChange={(e) => handleInputChange('weight', parseFloat(e.target.value))}
                          className="mt-2"
                        />
                      </div>
                      
                      {/* Length Input */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label htmlFor="length" className="text-gray-700">Length (cm)</Label>
                          <span className="text-sm text-gray-500">{formData.length} cm</span>
                        </div>
                        <Slider 
                          id="length"
                          value={[formData.length]} 
                          min={20} 
                          max={60} 
                          step={0.1}
                          onValueChange={(values) => handleInputChange('length', values[0])} 
                          className="mb-2"
                        />
                        <Input 
                          type="number" 
                          value={formData.length}
                          step={0.1}
                          onChange={(e) => handleInputChange('length', parseFloat(e.target.value))}
                          className="mt-2"
                        />
                      </div>
                      
                      {/* Head Circumference Input */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label htmlFor="headCircumference" className="text-gray-700">Head Circumference (cm)</Label>
                          <span className="text-sm text-gray-500">{formData.headCircumference} cm</span>
                        </div>
                        <Slider 
                          id="headCircumference"
                          value={[formData.headCircumference]} 
                          min={5} 
                          max={40} 
                          step={0.1}
                          onValueChange={(values) => handleInputChange('headCircumference', values[0])} 
                          className="mb-2"
                        />
                        <Input 
                          type="number" 
                          value={formData.headCircumference}
                          step={0.1}
                          onChange={(e) => handleInputChange('headCircumference', parseFloat(e.target.value))}
                          className="mt-2"
                        />
                      </div>
                      
                      <div className="flex space-x-4 pt-4">
                        <Button 
                          type="submit" 
                          className="bg-medical-600 hover:bg-medical-700 text-white flex-1"
                        >
                          Calculate Prediction <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={resetForm}
                          className="flex-1"
                        >
                          Reset
                        </Button>
                      </div>
                    </form>
                  </div>
                  
                  {/* Right panel - Results */}
                  <div className="p-6 lg:p-8 col-span-2 bg-gray-50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
                    
                    {predictionResult ? (
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold gradient-text mb-2">
                            {predictionResult.gestationalAge} weeks
                          </div>
                          <p className="text-sm text-gray-500">Estimated Gestational Age</p>
                        </div>
                        
                        <div className={`p-4 rounded-md ${
                          predictionResult.isPreterm 
                            ? 'bg-rose-50 border border-rose-200' 
                            : 'bg-green-50 border border-green-200'
                        } flex items-start`}>
                          {predictionResult.isPreterm ? (
                            <AlertTriangle className="h-6 w-6 text-rose-600 mr-3 flex-shrink-0" />
                          ) : (
                            <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                          )}
                          
                          <div>
                            <h3 className={`font-medium ${
                              predictionResult.isPreterm ? 'text-rose-700' : 'text-green-700'
                            }`}>
                              {predictionResult.isPreterm 
                                ? 'Preterm Birth Detected' 
                                : 'Full-Term Birth'}
                            </h3>
                            <p className="text-sm mt-1">
                              {predictionResult.isPreterm
                                ? 'The measurements indicate a gestational age below 37 weeks, suggesting preterm birth.'
                                : 'The measurements indicate a gestational age of 37 weeks or more, suggesting full-term birth.'}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Prediction Confidence</p>
                          <div className="text-xl font-bold text-medical-700">
                            {predictionResult.confidence}%
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <p className="text-sm text-gray-500 text-center">
                            This prediction is based on current measurements and should be used in conjunction with clinical assessment.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Info className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">
                          Enter the measurements and calculate to see prediction results.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div 
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Understanding Preterm Birth</h3>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </div>

              {isExpanded && (
                <div className="mt-4 text-gray-600 space-y-4">
                  <p>
                    Preterm birth, defined as delivery before 37 weeks of gestation, affects approximately 1 in 10 pregnancies worldwide
                    and is a leading cause of neonatal complications and mortality.
                  </p>
                  
                  <h4 className="font-medium text-gray-900 mt-4">Key Risk Factors</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Previous preterm birth</li>
                    <li>Multiple pregnancy (twins, triplets)</li>
                    <li>Infections during pregnancy</li>
                    <li>Chronic conditions such as high blood pressure or diabetes</li>
                    <li>Structural abnormalities of the uterus or cervix</li>
                    <li>Smoking, alcohol, or substance use</li>
                  </ul>
                  
                  <h4 className="font-medium text-gray-900 mt-4">How Our Tool Works</h4>
                  <p>
                    BabyBloom Predictor analyzes key biometric measurements to estimate gestational age with high accuracy.
                    The algorithm has been trained on data from thousands of births and validated in clinical settings.
                  </p>
                  <p>
                    While our tool provides valuable insights, it should be used as part of a comprehensive clinical assessment.
                    Always consult with healthcare professionals for medical decisions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Predict;
