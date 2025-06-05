
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Our Services',
      'nav.training': 'Training',
      'nav.careers': 'Careers',
      'nav.sectors': 'Sectors',
      
      // Hero Section
      'hero.title': 'Solar Energy Solutions',
      'hero.subtitle': 'Leading the way to a sustainable future',
      
      // Careers
      'careers.title': 'Job Application',
      'careers.subtitle': 'You can apply for a job and we will contact you',
      'careers.form.name': 'Name',
      'careers.form.email': 'Email',
      'careers.form.phone': 'Phone Number',
      'careers.form.specialization': 'Specialization',
      'careers.form.cv': 'Upload CV/Resume',
      'careers.form.additional': 'Additional Information You Want to Mention',
      'careers.form.submit': 'Submit',
      'careers.form.submitting': 'Submitting...',
      'careers.form.namePlaceholder': 'Enter your full name',
      'careers.form.emailPlaceholder': 'example@email.com',
      'careers.form.phonePlaceholder': '9xxxxxxxx',
      'careers.form.cvPlaceholder': 'Choose your CV file',
      'careers.form.additionalPlaceholder': 'Add any additional information you would like to share...',
      'careers.success.title': 'Application Submitted Successfully',
      'careers.success.description': 'We will review your application and contact you soon',
      'careers.error.title': 'Error Occurred',
      'careers.error.description': 'Please try again',
      'careers.whyWorkWithUs': 'Why Work With Us?',
      'careers.growthOpportunities': 'Growth Opportunities',
      'careers.growthDesc': 'Join a growing company in the renewable energy sector',
      'careers.sustainableImpact': 'Sustainable Impact',
      'careers.sustainableDesc': 'Make a positive impact on the environment and society',
      'careers.teamEnvironment': 'Team Environment',
      'careers.teamDesc': 'Work with a passionate and dedicated team',
      
      // Contact
      'contact.title': 'Contact Us',
      'contact.subtitle': "Let's stay in touch",
      'contact.location': 'Our Location',
      'contact.email': 'Email Us',
      'contact.phone': 'Call Us',
      'contact.callQuote': 'Call for Free Quote',
      'contact.emailConsultation': 'Email Consultation',
      
      // Common
      'common.customers': 'Our Customers',
      'common.ambitions': 'Our Ambitions',
      'common.reviews': 'Customer Reviews',
      'common.message': 'Our Message',
      'common.vision': 'Our Vision',
      'common.objectives': 'Objectives',
    },
    ar: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.services': 'خدماتنا',
      'nav.training': 'التدريب',
      'nav.careers': 'الوظائف',
      'nav.sectors': 'القطاعات',
      
      // Hero Section
      'hero.title': 'حلول الطاقة الشمسية',
      'hero.subtitle': 'نقود الطريق نحو مستقبل مستدام',
      
      // Careers
      'careers.title': 'طلب وظيفة',
      'careers.subtitle': 'يمكنك التقدم للوظيفة وسنتواصل معك',
      'careers.form.name': 'الاسم',
      'careers.form.email': 'البريد الإلكتروني',
      'careers.form.phone': 'رقم الهاتف',
      'careers.form.specialization': 'التخصص',
      'careers.form.cv': 'رفع السيرة الذاتية',
      'careers.form.additional': 'معلومات إضافية تريد ذكرها',
      'careers.form.submit': 'إرسال',
      'careers.form.submitting': 'جاري الإرسال...',
      'careers.form.namePlaceholder': 'أدخل اسمك الكامل',
      'careers.form.emailPlaceholder': 'example@email.com',
      'careers.form.phonePlaceholder': '9xxxxxxxx',
      'careers.form.cvPlaceholder': 'اختر ملف السيرة الذاتية',
      'careers.form.additionalPlaceholder': 'أضف أي معلومات إضافية تود مشاركتها...',
      'careers.success.title': 'تم إرسال الطلب بنجاح',
      'careers.success.description': 'سنراجع طلبك ونتواصل معك قريباً',
      'careers.error.title': 'حدث خطأ',
      'careers.error.description': 'يرجى المحاولة مرة أخرى',
      'careers.whyWorkWithUs': 'لماذا تعمل معنا؟',
      'careers.growthOpportunities': 'فرص النمو',
      'careers.growthDesc': 'انضم إلى شركة متنامية في قطاع الطاقة المتجددة',
      'careers.sustainableImpact': 'التأثير المستدام',
      'careers.sustainableDesc': 'احدث تأثيراً إيجابياً على البيئة والمجتمع',
      'careers.teamEnvironment': 'بيئة الفريق',
      'careers.teamDesc': 'اعمل مع فريق متحمس ومتفانٍ',
      
      // Contact
      'contact.title': 'اتصل بنا',
      'contact.subtitle': 'دعنا نبقى على تواصل',
      'contact.location': 'موقعنا',
      'contact.email': 'راسلنا',
      'contact.phone': 'اتصل بنا',
      'contact.callQuote': 'اتصل للحصول على عرض سعر مجاني',
      'contact.emailConsultation': 'استشارة عبر البريد الإلكتروني',
      
      // Common
      'common.customers': 'عملاؤنا',
      'common.ambitions': 'طموحاتنا',
      'common.reviews': 'آراء العملاء',
      'common.message': 'رسالتنا',
      'common.vision': 'رؤيتنا',
      'common.objectives': 'الأهداف',
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
