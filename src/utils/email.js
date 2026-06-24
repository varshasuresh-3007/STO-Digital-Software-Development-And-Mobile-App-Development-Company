import emailjs from '@emailjs/browser';

/**
 * Sends an enquiry email using EmailJS.
 * 
 * @param {Object} params - The email template parameters (name, email, phone, message, subject, service, etc.).
 * @param {string} [customTemplateId] - Optional custom EmailJS Template ID for different forms.
 * @returns {Promise<Object>} The EmailJS response.
 */
export const sendEnquiryEmail = async (params, customTemplateId = null) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  // Use custom template ID if provided, otherwise fall back to default template ID
  const templateId = customTemplateId || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
    console.warn(
      'EmailJS is not fully configured. Please set the environment variables in your .env file.'
    );
  }

  // Format the parameters and merge all custom fields (like subject, service, company, message)
  const templateParams = {
    to_email: 'info@stodigital.eu',
    lead_url: window.location.pathname,
    
    // Standard mappings for backward compatibility
    from_name: params.name || params.from_name,
    from_email: params.email || params.from_email,
    from_phone: params.phone || params.from_phone,
    message: params.message,
    
    // Spread all parameters so custom fields are available in EmailJS (e.g. {{subject}}, {{service}})
    ...params 
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('Email sent successfully!', response.status, response.text);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
