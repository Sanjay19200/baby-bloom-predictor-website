
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Loader2 } from 'lucide-react';

interface AIChatProps {
  isPreterm: boolean;
  visible: boolean;
}

const AIChat: React.FC<AIChatProps> = ({ isPreterm, visible }) => {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (visible && isPreterm) {
      setIsLoading(true);
      // Simulate AI response with a short delay
      const timeout = setTimeout(() => {
        setMessage(`
          Important precautions for preterm birth:

          1. Immediate medical attention: Consult with a healthcare provider as soon as possible.

          2. Temperature regulation: Maintain proper warmth for the newborn, as preterm babies often struggle with temperature regulation.

          3. Careful feeding: Follow specialized feeding protocols - preterm infants may require specialized nutrition.

          4. Respiratory monitoring: Watch for signs of respiratory distress, which is common in preterm infants.

          5. Infection prevention: Take extra precautions to prevent infections as preterm babies have immature immune systems.

          6. Developmental support: Understand that preterm infants may have different developmental timelines.

          7. Follow-up care: Ensure regular follow-up appointments with healthcare providers.

          8. Skin-to-skin contact: Practice kangaroo care when medically appropriate to help with development and bonding.
        `);
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timeout);
    } else if (visible && !isPreterm) {
      setIsLoading(true);
      // Provide different message for full-term births
      const timeout = setTimeout(() => {
        setMessage(`
          Your measurements indicate a full-term birth. Here are some general recommendations:

          1. Regular check-ups: Continue with scheduled pediatric appointments.

          2. Feeding schedule: Maintain regular feeding times based on your healthcare provider's recommendations.

          3. Sleep safety: Always place baby on back to sleep and follow safe sleep guidelines.

          4. Temperature: Maintain comfortable room temperature and dress baby appropriately.

          5. Bonding: Spend time holding, talking to, and making eye contact with your baby.

          6. Watch for warning signs: Contact your doctor if you notice fever, poor feeding, or unusual irritability.

          7. Vaccination: Follow the recommended vaccination schedule from your healthcare provider.
        `);
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timeout);
    } else {
      setMessage('');
    }
  }, [visible, isPreterm]);

  if (!visible) {
    return null;
  }

  return (
    <Card className="mt-6 border-medical-100">
      <CardHeader className="bg-medical-50 pb-2">
        <CardTitle className="text-lg flex items-center">
          <MessageCircle className="mr-2 h-5 w-5 text-medical-600" />
          AI Health Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-medical-600" />
            <span className="ml-2 text-gray-600">Analyzing results...</span>
          </div>
        ) : (
          <div className="whitespace-pre-line text-gray-700">
            {message}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIChat;
