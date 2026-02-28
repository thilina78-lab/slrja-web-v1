import React, { useState, useEffect } from 'react';
import C03 from '../assets/Circulars/03.pdf';
import { 
  Scale, Users, BookOpen, Award, Calendar, FileText, 
  Download, Bell, GraduationCap, ChevronDown, Menu, X,
  Mail, Phone, MapPin, ExternalLink
} from 'lucide-react';
//import { href } from 'react-router-dom';
const handleDownloadPDF2 = () => {
    const pdfPath = '/Application form.pdf'; // Path to PDF in public folder
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Application form.pdf'; // Downloaded filename
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const handleDownloadPDF = () => {
    const pdfPath = '/constitution.pdf'; // Path to PDF in public folder
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Constitution.pdf'; // Downloaded filename
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const JudicialRegistrarsWebsite = () => {
  const [language, setLanguage] = useState('si');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    si: {
      title: 'ශ්‍රී ලංකා අධිකරණ රෙජිස්ට්‍රාර්වරුන්ගේ සංගමය',
      nav: {
       
        history: 'ඉතිහාසය',
        seniority: 'ජ්‍යෙෂ්ඨතා ලැයිස්තුව',
        circulars: 'චක්‍රලේඛ',
        guidelines: 'මාර්ගෝපදේශ',
        benefits: 'ප්‍රතිලාභ',
        training: 'පුහුණු වැඩසටහන්',
        news: 'පුවත් සහ සිදුවීම්'
      },
      hero: {
        title: 'අධිකරණ පරිපාලනයේ විශිෂ්ටත්වයට කැපවී සිටිමු',
        subtitle: 'ශ්‍රී ලංකාවේ සියලුම අධිකරණවල අධිකරණ රෙජිස්ට්‍රාර්වරුන් නියෝජනය කරමින්, වඩා හොඳ සේවා කොන්දේසි සහ වෘත්තීය සංවර්ධනය සඳහා කටයුතු කිරීම හා අධිකරණ පද්ධතිය තුළ විශිෂ්ටත්වය ප්‍රවර්ධනය කිරීම',
        cta: 'තව දැනගන්න'
      },
      about: {
        title: 'අපි ගැන',
        content: 'ශ්‍රී ලංකා අධිකරණ රෙජිස්ට්‍රාර් සේවය යනු අධිකරණ පද්ධතියේ කොඳු නාරටියයි. 1978 ආණ්ඩුක්‍රම ව්‍යවස්ථාව 111 ඕ (අ) වගන්තිය යටතේ අධිකරණ සේවා කොමිෂන් සභාව යටතේ ආයතනයක් ලෙස පිහිටුවා ඇත. ශ්‍රි ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදි ජනරජයේ 1978 ආණ්ඩුක්‍රම ව්‍යවස්ථාවේ 114 ව්‍යවස්ථාව මගින් නිරූපිත ආණ්ඩුක්‍රම ව්‍යවස්ථා සදහා කරන ලද සංශෝධන අනුව වර්තමානයේ 1978 ආණ්ඩුක්‍රම ව්‍යවස්ථාවේ XV පරිචි‌‌ෙජ්දයේ 111 ඕ (අ) වගන්තිය මගින් අර්ථදක්වා ඇති අධිකරණයේ ස්වාධිනත්වය ආරක්ෂා කිරීම සදහා සංස්ථාපිත සංවෘත සේවාවකි'
      },
      contact: {
        title: 'අප හා සම්බන්ධ වන්න',
        chairman: 'ගරු සභාපති',
        secretary: 'ගරු ලේකම්',
        treasurer: 'ගරු භාණ්ඩාගාරික'
      }
    },
    en: {
      title: 'Sri Lanka Judicial Registrars\' Association',
      nav: {
        
        history: 'History',
        seniority: 'Seniority List',
        circulars: 'Circulars',
        guidelines: 'Official Guidelines',
       
        benefits: 'Benefits',
        training: 'Training Programs',
        news: 'News & Events'
      },
      hero: {
        title: 'Dedicated to Excellence in Judicial Administration',
        subtitle: 'Representing judicial registrars across all courts in Sri Lanka, working towards better service conditions and professional development & Promoting Excellence in the Judicial System',
        cta: 'Learn More'
      },
      about: {
        title: 'About Us',
        content: 'The Sri Lanka Judicial Registrar Service is the backbone of the judicial system. Established as an institution under the Judicial Service Commission pursuant to Article 111 O (a) of the 1978 Constitution.As per the amendment made to the Constitution represented by Article 114 of the 1978 Constitution of the Democratic Socialist Republic of Sri Lanka, the present.A closed service established to protect the independence of the judiciary as defined by Article 111O(a) of Schedule XV of the 1978 Constitution.'
      },
      contact: {
        title: 'Contact Us',
        chairman: 'Hon. Chairman',
        secretary: 'Hon. Secretary',
        treasurer: 'Hon. Treasurer'
      }
    },
    ta: {
      title: 'இலங்கை நீதித்துறை பதிவாளர்கள் சங்கம்',
      nav: {
       
        history: 'வரலாறு',
        seniority: 'மூத்த பட்டியல்',
        circulars: ' சுற்றறிக்கைகள்',
        guidelines: 'வழிகாட்டுதல்கள்',
        
        benefits: 'நலன்கள்',
        training: 'பயிற்சி திட்டங்கள்',
        news: 'செய்திகள் மற்றும் நிகழ்வுகள்'
      },
      hero: {
        title: 'நீதித்துறை நிர்வாகத்தில் சிறப்பிற்கு அர்ப்பணிப்பு',
        subtitle: 'இலங்கையின் அனைத்து நீதிமன்றங்களிலும் நீதித்துறை பதிவாளர்களை பிரதிநிதித்துவப்படுத்தி, சிறந்த சேவை நிபந்தனைகள் மற்றும் தொழில்முறை மேம்பாட்டிற்காக செயல்படுகிறோம்.|நீதித்துறை அமைப்பில் சிறப்பை மேம்படுத்துதல்',
        cta: 'மேலும் அறிக'
      },
      about: {
        title: 'எங்களை பற்றி',
        content: 'இலங்கை நீதித்துறை பதிவாளர் சேவை நீதித்துறை அமைப்பின் முதுகெலும்பு ஆகும். 1978 அரசியலமைப்பின் 111 ஓ (அ) பிரிவின் கீழ் நீதித்துறை சேவை ஆணைக்குழுவின் கீழ் ஒரு நிறுவனமாக நிறுவப்பட்டது. ஸ்ரீலங்கா பிரஜாதான் சமூகவாதி ஜனரஜயே 1978 அரசாங்கச் சட்டம் 114 சட்டப்படி நிரூபித்த அரசாங்கக் கட்டமைப்பு தற்போது நடைமுறைப்படுத்தப்பட்ட சன்சோதன 1978 அரசாங்கக் கட்டமைப்பு XV பரிச்சியெஜ்தயே 111 ஓ (அ) வகந்தியினால் பொருளடக்வா உள்ள நீதிமன்றத்தின் ஸ்வாதீனத் தன்மையைப் பாதுகாப்பதற்காக சந்ஸ்தாபித சந்வத்ர சேவைகி'
      },
      contact: {
        title: 'எங்களை தொடர்பு கொள்ளவும்',
        chairman: 'மாண்புமிகு தலைவர்',
        secretary: 'மாண்புமிகு செயலாளர்',
        treasurer: 'மாண்புமிகு பொருளாளர்'
      }
    }
  };

  const t = translations[language];

  const historyData = {
    si: [
      {
        period: 'පෘතුගීසි යුගය (1505-1658)',
        description: 'පෘතුගීසීන් ශ්‍රී ලංකාව මුලික අධිකරණ පද්ධතියක් ස්ථාපිත කළත්, වර්තමාන ජාත්‍යන්තර විධිවිධාන ක්‍රියාවලිය කාර්යභාරය ඉටු කරමින් භූමි පද්ධතක් තිබුණි.'
      },
      {
        period: 'ඕලන්ද යුගය (1658-1796)',
        description: 'ඕලන්දයින් වඩාත් අධිකරණ පද්ධතියක් සඳහන් කළේය, මූලික විධිවිධාන භූමි පද සහ ලේඛන කළමනාකරණ පද්ධතිය ගොඩනගා ගත්තේය.'
      },
      {
        period: 'බ්‍රිතාන්‍ය යුගය (1796-1948)',
        description: 'බ්‍රිතාන්‍යයන් තවදුරටත් අධිකරණ පද්ධතිය වැඩි දියුණු කළ අතර, වර්තමාන විධිවිධාන ක්‍රියාවලිය සහ ලේඛන කළමනාකරණ පද්ධති ස්ථාපිත කළහ.'
      },
      {
        period: 'ස්වාධීනත්වය (1948)',
        description: 'ස්වාධීනත්වය ලැබීමෙන් පසු, ශ්‍රී ලංකාව බ්‍රිතාන්‍ය අධිකරණ ව්‍යුහ බහුතරයක් පවත්වා ගෙන යන අතර, මෙම විධිවිධාන ක්‍රියාවලිය අනුව විධිවිධාන ක්‍රියාවලිය භූමි පද සංස්ථාපනය කර තිබේ.'
      },
      {
        period: 'ස්වාධීන ශ්‍රී ලංකාව තුළ සංවර්ධනය (1972)',
        description: '1972 දී අධිකරණ සේවා කොමිෂන් සභාව (JSC) ස්ථාපිත කිරීමත් සමඟ, අධිකරණ ක්‍රියාවලිය පත්කිරීම සහ ක්‍රියාවන් සංවර්ධනය කිරීම වඩාත් රාජ්‍ය ස්වාධීනීකරණය වී තිබේ.'
      },
      {
        period: 'ස්වාධීන ශ්‍රී ලංකාව අනුගමනය 2 (1978)',
        description: 'ශ්‍රී ලංකාව අධිකරණයේ විධිවිධාන ක්‍රියාවලිය සඳහා විශිෂ්ඨයන්, ජැජිස්ට්‍රාර්වරුන්, අධිකරණ ලේඛකයන්, මූලික ක්‍රියාකරු, සහ අනෙකුත් ලේඛන කළමණාකරණ පර්යාය ජාණ්ඩකයන් ඇතුළු සමස්ත අයිති කර තිබේ.'
      }
    ],
    en: [
      {
        period: 'Portuguese Era (1505-1658)',
        description: 'The Portuguese established a basic judicial system in Sri Lanka, with various administrative roles managing land and revenue collection.'
      },
      {
        period: 'Dutch Era (1658-1796)',
        description: 'The Dutch introduced a more developed judicial system, establishing systematic record-keeping and administrative procedures.'
      },
      {
        period: 'British Era (1796-1948)',
        description: 'The British further developed the judicial system, introducing modern administrative practices and establishing formal judicial officer roles.'
      },
      {
        period: 'Independence (1948)',
        description: 'After independence, Sri Lanka retained much of the British judicial structure while adapting systems to local needs, maintaining judicial administrative positions.'
      },
      {
        period: 'Post-Independence Development (1972)',
        description: 'The establishment of the Judicial Service Commission (JSC) in 1972 marked a significant milestone in standardizing appointments and career progression for judicial officers.'
      },
      {
        period: 'Constitutional Framework (1978)',
        description: 'The 1978 Constitution formalized the judicial service structure, including Justices, Registrars, Judicial Clerks, and other administrative staff under comprehensive legal framework.'
      }
    ],
    ta: [
      {
        period: 'போர்த்துக்கேய காலம் (1505-1658)',
        description: 'போர்த்துக்கேயர்கள் இலங்கையில் அடிப்படை நீதித்துறை அமைப்பை நிறுவினர், பல்வேறு நிர்வாக பாத்திரங்கள் நிலம் மற்றும் வருவாய் சேகரிப்பை நிர்வகித்தன.'
      },
      {
        period: 'ஒல்லாந்த காலம் (1658-1796)',
        description: 'ஒல்லாந்தர்கள் மேலும் மேம்பட்ட நீதித்துறை அமைப்பை அறிமுகப்படுத்தினர், முறையான பதிவு மற்றும் நிர்வாக நடைமுறைகளை நிறுவினர்.'
      },
      {
        period: 'பிரித்தானிய காலம் (1796-1948)',
        description: 'பிரித்தானியர்கள் நீதித்துறை அமைப்பை மேலும் மேம்படுத்தி, நவீன நிர்வாக நடைமுறைகளை அறிமுகப்படுத்தி, முறையான நீதித்துறை அதிகாரி பாத்திரங்களை நிறுவினர்.'
      },
      {
        period: 'சுதந்திரம் (1948)',
        description: 'சுதந்திரத்திற்குப் பிறகு, இலங்கை பிரித்தானிய நீதித்துறை கட்டமைப்பின் பெரும்பகுதியை தக்க வைத்துக் கொண்டது, உள்ளூர் தேவைகளுக்கு அமைப்புகளை மாற்றியமைத்தது.'
      },
      {
        period: 'சுதந்திரத்திற்குப் பிந்தைய மேம்பாடு (1972)',
        description: '1972 இல் நீதித்துறை சேவை ஆணைக்குழுவின் (JSC) நிறுவனம் நீதித்துறை அதிகாரிகளுக்கான நியமனங்கள் மற்றும் தொழில் முன்னேற்றத்தை தரநிலைப்படுத்துவதில் ஒரு முக்கிய மைல்கல்லாக அமைந்தது.'
      },
      {
        period: 'அரசியலமைப்பு கட்டமைப்பு (1978)',
        description: '1978 அரசியலமைப்பு நீதிபதிகள், பதிவாளர்கள், நீதித்துறை எழுத்தர்கள் மற்றும் பிற நிர்வாக ஊழியர்கள் உள்ளடக்கிய நீதித்துறை சேவை கட்டமைப்பை முறைப்படுத்தியது.'
      }
    ]
  };

  const benefits = {
    si: [
      'සාමාජිකයින් සඳහා නීතිමය උපදෙස්',
      'වෘත්තීය සංවර්ධන වැඩසටහන්',
      'සමාජ සුභසාධන වැඩසටහන්',
      'වාර්ෂික රැස්වීම් සහ සම්මන්ත්‍රණ',
      'ජාල සහ විශේෂඥ සේවා',
      'ජ්‍යෙෂ්ඨත්ව හා උපකාර සේවා'
    ],
    en: [
      'Legal Consultation for Members',
      'Professional Development Programs',
      'Social Welfare Initiatives',
      'Annual Meetings and Conferences',
      'Networking and Expert Services',
      'Seniority and Support Services'
    ],
    ta: [
      'உறுப்பினர்களுக்கு சட்ட ஆலோசனை',
      'தொழில்முறை மேம்பாட்டு திட்டங்கள்',
      'சமூக நலத்திட்டங்கள்',
      'வருடாந்திர கூட்டங்கள் மற்றும் மாநாடுகள்',
      'வலைப்பின்னல் மற்றும் நிபுணர் சேவைகள்',
      'மூத்தமை மற்றும் ஆதரவு சேவைகள்'
    ]
  };

  const renderHome = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 rounded-b-3xl shadow-lg">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 my-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-fadeIn">
            <img className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-white shadow-lg" src="/public/logo.png" alt="logo" />
            
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeIn" style={{
            fontFamily: 'Poppins, sans-serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            animationDelay: '0.1s'
          }}>
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 animate-fadeIn" style={{
            animationDelay: '0.2s'
          }}>
            {t.hero.subtitle}
          </p>
          <button 
            onClick={() => setActiveSection('history')}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105 animate-fadeIn shadow-lg"
            style={{ animationDelay: '0.3s' }}
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-100 rounded-lg">
              <BookOpen className="w-8 h-8 text-red-800" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t.about.title}
            </h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {t.about.content}
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
              <Users className="w-10 h-10 mx-auto mb-3 text-red-700" />
              <div className="text-3xl font-bold text-red-900 mb-1">234</div>
              <div className="text-sm text-red-700">{language === 'si' ? 'සාමාජිකයින්' : language === 'ta' ? 'உறுப்பினர்கள்' : 'Members'}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
              <Award className="w-10 h-10 mx-auto mb-3 text-amber-700" />
              <div className="text-3xl font-bold text-amber-900 mb-1">5</div>
              <div className="text-sm text-amber-700">{language === 'si' ? 'ශ්‍රේණි' : language === 'ta' ? 'தரங்கள்' : 'Grades'}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <GraduationCap className="w-10 h-10 mx-auto mb-3 text-green-700" />
              <div className="text-3xl font-bold text-green-900 mb-1">12+</div>
              <div className="text-sm text-green-700">{language === 'si' ? 'පුහුණු වැඩසටහන්' : language === 'ta' ? 'பயிற்சி திட்டங்கள்' : 'Training Programs'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t.contact.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-xl shadow-lg">
            <div className="text-amber-400 font-semibold mb-2">{t.contact.chairman}</div>
            <div className="text-xl font-bold mb-4">Mr. THILINA RATHNAYAKE</div>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span> HIGH COURT - COLOMBO 12</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+94 70 329 0266</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-800 to-red-900 text-white p-8 rounded-xl shadow-lg">
            <div className="text-amber-400 font-semibold mb-2">{t.contact.secretary}</div>
            <div className="text-xl font-bold mb-4">Mr. AMILA MAHAWATTA</div>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>HIGH COURT - EMBILIPITIYA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+94 71 110 5136</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white p-8 rounded-xl shadow-lg">
            <div className="text-amber-100 font-semibold mb-2">{t.contact.treasurer}</div>
            <div className="text-xl font-bold mb-4">Mr.SAJEEWA KOSGOLLAWATTA</div>
            <div className="space-y-2 text-sm text-amber-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>DISTRICT COURT - KEGALLE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+94 70 679 1145</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-red-700" />
            <span className="font-semibold text-red-900">
              {language === 'si' ? 'විද්‍යුත් තැපෑල' : language === 'ta' ? 'மின்னஞ்சல்' : 'Email'}
            </span>
          </div>
          <a href="mailto:sjregiassociation@gmail.com" className="text-red-700 hover:text-red-900 transition-colors">
            sjregiassociation@gmail.com
          </a>
        </div>
      </section>
    </div>
  );

  const renderHistory = () => (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-slate-800 mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {language === 'si' ? 'ඉතිහාසය' : language === 'ta' ? 'வரலாறு' : 'History'}
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12">
        {language === 'si' 
          ? 'ශ්‍රී ලංකා අධිකරණ රෙජිස්ට්‍රාර් සේවයේ පරිණාමය'
          : language === 'ta'
          ? 'இலங்கை நீதித்துறை பதிவாளர் சேவையின் பரிணாமம்'
          : 'Evolution of Sri Lanka Judicial Registrar Service'}
      </p>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-amber-500 to-green-600"></div>
        
        {historyData[language].map((item, index) => (
          <div key={index} className="relative pl-20 pb-12 group">
            <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-white border-4 border-red-600 group-hover:scale-125 transition-transform"></div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-slate-200 group-hover:border-red-400">
              <h3 className="text-2xl font-bold text-red-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {item.period}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSeniority = () => (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-slate-800 mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {t.nav.seniority}
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12">
        {language === 'si' 
          ? 'ශ්‍රේණි අනුව සංවිධානය කරන ලද රෙජිස්ට්‍රාර්වරුන්'
          : language === 'ta'
          ? 'தரங்களின்படி ஒழுங்கமைக்கப்பட்ட பதிவாளர்கள்'
          : 'Registrars Organized by Grade'}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Grade III */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-green-800">
              {language === 'si' ? 'III ශ්‍රේණිය (MN-7-2025)' : language === 'ta' ? 'III தரம் (MN-7-2025)' : 'Grade III (MN-7-2025)'}
            </h3>
            <div className="bg-green-700 text-white px-4 py-2 rounded-lg font-bold">234</div>
          </div>
          <p className="text-green-700">
            {language === 'si' ? 'ප්‍රවේශ මට්ටම - මූලික කාර්යභාරය' : language === 'ta' ? 'நுழைவு நிலை - அடிப்படை கடமைகள்' : 'Entry Level - Basic Duties'}
          </p>
            <a className="text-green-700 mt-4 block hover:underline" href="https://jsc.gov.lk/web/images/pdf/transfers/2026/Transfer/01-regi-2026.pdf" target="_blank" rel="noopener noreferrer">
            {language === 'si' ? 'ජ්‍යෙෂ්ඨතා ලැයිස්තුව' : language === 'ta' ? 'மூத்த பட்டியல்' : 'Seniority List'}
          </a>
        </div>

        {/* Grade II-II */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-red-800">
              {language === 'si' ? 'II-II ශ්‍රේණිය (SL-1-2025)' : language === 'ta' ? 'II-II தரம் (SL-1-2025)' : 'Grade II-II (SL-1-2025)'}
            </h3>
            <div className="bg-red-700 text-white px-4 py-2 rounded-lg font-bold">150</div>
          </div>
          <p className="text-red-700">
            {language === 'si' ? 'අතරමැදි මට්ටම - වැඩි කාර්යභාරය' : language === 'ta' ? 'இடைநிலை - அதிக கடமைகள்' : 'Intermediate Level - Enhanced Duties'}
          </p>
           <a className="text-red-700 mt-4 block hover:underline" href="https://jsc.gov.lk/web/images/pdf/transfers/2026/Transfer/01-regi-2026.pdf" target="_blank" rel="noopener noreferrer">
            {language === 'si' ? 'ජ්‍යෙෂ්ඨතා ලැයිස්තුව' : language === 'ta' ? 'மூத்த பட்டியல்' : 'Seniority List'}
          </a>
        </div>

        {/* Grade II-I */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border-2 border-indigo-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-indigo-800">
              {language === 'si' ? 'II-I ශ්‍රේණිය (SL-2-2025)' : language === 'ta' ? 'II-I தரம் (SL-2-2025)' : 'Grade II-I (SL-2-2025)'}
            </h3>
            <div className="bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold">97</div>
          </div>
          <p className="text-indigo-700">
            {language === 'si' ? 'ජ්‍යෙෂ්ඨ මට්ටම - අධිකරණ ප්‍රවීණත්වය' : language === 'ta' ? 'மூத்த நிலை - நீதித்துறை நிபுணத்துவம்' : 'Senior Level - Judicial Expertise'}
          </p>
            <a className="text-indigo-700 mt-4 block hover:underline" href="https://jsc.gov.lk/web/images/pdf/transfers/2026/Transfer/01-regi-2026.pdf" target="_blank" rel="noopener noreferrer">
            {language === 'si' ? 'ජ්‍යෙෂ්ඨතා ලැයිස්තුව' : language === 'ta' ? 'மூத்த பட்டியல்' : 'Seniority List'}
          </a>
        </div>

        {/* Grade I */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-purple-800">
              {language === 'si' ? 'I ශ්‍රේණිය (SL-1-2025)' : language === 'ta' ? 'I தரம் (SL-1-2025)' : 'Grade I (SL-1-2025)'}
            </h3>
            <div className="bg-purple-700 text-white px-4 py-2 rounded-lg font-bold">81</div>
          </div>
          <p className="text-purple-700">
            {language === 'si' ? 'ප්‍රධාන මට්ටම - පරිපාලන සහ අධීක්ෂණ' : language === 'ta' ? 'முதன்மை நிலை - நிர்வாக மற்றும் மேற்பார்வை' : 'Principal Level - Administrative & Supervisory'}
          </p>
            <a className="text-purple-700 mt-4 block hover:underline" href="https://jsc.gov.lk/web/images/pdf/transfers/2026/Transfer/01-regi-2026.pdf" target="_blank" rel="noopener noreferrer">
            {language === 'si' ? 'ජ්‍යෙෂ්ඨතා ලැයිස්තුව' : language === 'ta' ? 'மூத்த பட்டியல்' : 'Seniority List'}
          </a>
        </div>
      </div>

      {/* Special Grade */}
      <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Award className="w-10 h-10" />
            <h3 className="text-3xl font-bold">
              {language === 'si' ? 'විශේෂ ශ්‍රේණිය (යෝජිත) (SL-3-2025)' : language === 'ta' ? 'சிறப்பு தரம் (முன்னுரைக்கப்பட்ட) (SL-3-2025)' : 'Special Grade (Proposed) (SL-3-2025)'}
            </h3>
          </div>
          <div className="bg-white text-amber-700 px-6 py-3 rounded-lg font-bold text-2xl">30</div>
        </div>
        <p className="text-amber-50 text-lg">
          {language === 'si' 
            ? 'ඉහළම මට්ටම - උපාධිධාරීන්, විශේෂ කාර්ය භාරය සහ අධීක්ෂණ වගකීම් සහිතය. අධිකරණ රෙජිස්ට්‍රාර් 1 ශ්‍රේණියේ සිටින වර්ෂ  5 ක් එම ශ්‍රේණියේ සේවා කාලයක් ඇති නිලධාරීන්ට ලබාගන්නා ලද උසස් අධ්‍යාපන සුදුසුකම් හා හෝ කුසලතා සලකා බලා විශේෂ ශ්‍රේණියේ උසස්වීම්  ලබාදීමට යෝජනා කරමු. තවද මෙම විශේෂ ශ්‍රේණියේ සදහා SL-3-2025  වැටුප් කේතය ලබාදීමට යෝජනා කරමු.'
            : language === 'ta'
            ? 'உயர்ந்த நிலை - பட்டதாரிகள், சிறப்பு கடமைகள் மற்றும் மேற்பார்வை பொறுப்புகள்.நாம் பிரத்தியேக தர வரவுகளை வழங்க பரிந்துரை செய்யலாம், தகுதியான கல்வி மற்றும்/அல்லது திறன்களை கருத்தில் கொண்டு, தரம் 1 நீதிமன்ற பதிவாளராக ஐந்து ஆண்டுகள் பணியாற்றிய அதிகாரிகளுக்கு. மேலும், இந்த பிரத்தியேக தரத்திற்காக SL-3-2025 சம்பள குறியீட்டை வழங்க பரிந்துரை செய்யலாம்.'
            : 'Highest Level - Graduates, Special Duties and Supervisory Responsibilities.Let us propose to grant special grade promotions to officers who have five years of service in the Grade 1 Court Registrar, taking into account their higher educational qualifications and/or skills. Furthermore, let us propose to provide the SL-3-2025 salary code for this special grade.'}
        </p>
          <a className="text-amber-50 mt-4 block hover:underline" href="https://jsc.gov.lk/web/images/pdf/transfers/2026/Transfer/01-regi-2026.pdf" target="_blank" rel="noopener noreferrer">
            {language === 'si' ? 'ජ්‍යෙෂ්ඨතා ලැයිස්තුව' : language === 'ta' ? 'மூத்த பட்டியல்' : 'Seniority List'}
          </a>
      </div>

      <div className="mt-12 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
        <p className="text-red-900">
          <strong>{language === 'si' ? 'සටහන:' : language === 'ta' ? 'குறிப்பு:' : 'Note:'}</strong>{' '}
          {language === 'si'
            ? 'වත්මන් දත්ත 2024 අනුගමනය කරයි සහ සංවිධානය මත පදනම් වේ'
            : language === 'ta'
            ? 'தற்போதைய தரவு 2024 படி மற்றும் அமைப்பை அடிப்படையாகக் கொண்டது'
            : 'Current data as of 2024 based on organizational structure'}
        </p>
      </div>
    </div>
  );

  const renderBenefits = () => (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-slate-800 mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {t.nav.benefits}
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12">
        {language === 'si' 
          ? 'සංගම් සාමාජිකයින් සඳහා විශේෂ ප්‍රතිලාභ'
          : language === 'ta'
          ? 'சங்க உறுப்பினர்களுக்கான சிறப்பு நன்மைகள்'
          : 'Exclusive Benefits for Association Members'}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits[language].map((benefit, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-red-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{benefit}</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-amber-500 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Membership Fees Section */}
      <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {language === 'si' ? 'සාමාජික ගාස්තු' : language === 'ta' ? 'உறுப்பினர் கட்டணங்கள்' : 'Membership Fees'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="text-amber-400 font-semibold mb-2">
              {language === 'si' ? 'ප්‍රවේශ ගාස්තුව' : language === 'ta' ? 'நுழைவு கட்டணம்' : 'Entrance Fee'}
            </div>
            <div className="text-4xl font-bold mb-2">Rs. 500/=</div>
            <div className="text-slate-300 text-sm">
              {language === 'si' ? 'එක් වරක් පමණක්' : language === 'ta' ? 'ஒரு முறை மட்டும்' : 'One-time payment'}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="text-amber-400 font-semibold mb-2">
              {language === 'si' ? 'මාසික දායකත්වය' : language === 'ta' ? 'மாதாந்திர பங்களிப்பு' : 'Monthly Contribution'}
            </div>
            <div className="text-4xl font-bold mb-2">Rs. 100/=</div>
            <div className="text-slate-300 text-sm">
              {language === 'si' ? 'මාසිකව' : language === 'ta' ? 'மாதாந்திரம்' : 'Per month'}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="text-amber-400 font-semibold mb-2">
              {language === 'si' ? 'වාර්ෂික දායකත්වය' : language === 'ta' ? 'வருடாந்திர பங்களிப்பு' : 'Annual Contribution'}
            </div>
            <div className="text-4xl font-bold mb-2">Rs. 1,200/=</div>
            <div className="text-slate-300 text-sm">
              {language === 'si' ? 'වාර්ෂිකව' : language === 'ta' ? 'வருடாந்திரம்' : 'Per year'}
            </div>
          </div>

         
        </div>

         <div className="buttons flex gap-10 justify-center item-center mt-8">
            <button onClick={handleDownloadPDF2 } className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-200 transition-colors">
            <Download size={20} />
            Download Membership Application (PDF)

          </button>
          <button onClick={handleDownloadPDF} className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-200 transition-colors">
            <Download size={20} />
            Download Society Constitution (PDF)

          </button>
          </div>
      </div>
    </div>
  );

  const renderCirculars = () => (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-slate-800 mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {t.nav.circulars}
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12">
        {language === 'si' 
          ? 'අධිකරණ සේවා කොමිෂන් සභාව, අධිකරණ අමාත්‍යාංශය විසින් නිකුත් කරන ලද චක්‍රලේඛ සහ අදාළ නියාමයන්'
          : language === 'ta'
          ? 'நீதித்துறை சேவை ஆணைக்குழுவால் வெளியிடப்பட்ட சுற்றறிக்கைகள்'
          : 'Circulars Issued by Judicial Service Commission, Ministry of Justice and Related Regulations'}
      </p>
      
      <div className="space-y-4">
        {[
        { no: '17/2009', year: '2009 | PUB AD', title: language === 'si' ? 'රාජ්‍ය පරිපාලන චක්‍රලේඛය' : 'Public Administration Circular' },
          { no: '05/2010', year: '2010 | MOJ', title: language === 'si' ? 'අන්තර්ගමන මාර්ගෝපදේශ' : 'Integration Guidelines' },
          { no: '90|', year: '1982 | JSC', title: language === 'si' ? 'අධිකරණ සේවා කොමිෂන් සභාව ස්ථාපිතය' : 'JSC Establishment' },
          { no: '92', year: '1982 | JSC', title: language === 'si' ? 'උප ලේඛන සේවා නියාමන' : 'Sub-Registrar Service Regulations' },
          { no: '93', year: '1982 | JSC', title: language === 'si' ? 'උප ලේඛන සේවය අන්තර්ගමනය' : 'Sub-Registrar Service Integration' },
          { no: '03', year: '1982 | JSC', title: language === 'si' ? 'අධිකරණ පරිපාලන නියාමයන්' :language === 'ta' ? 'JSC நிர்வாக விதிமுறைகள்' : 'JSC Administrative Regulations' },
       
        ].map((circular, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-1 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors">
                  <FileText className="w-6 h-6 text-red-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-red-700 bg-red-100 px-3 py-1 rounded-full">
                      {language === 'si' ? 'චක්‍ර. ලේ.' : language === 'ta' ? 'சுற் அறி.' : 'Circular'} {circular.no}
                    </span>
                    <span className="text-sm text-slate-500">{circular.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{circular.title}</h3>
                </div>
              </div>
              <button onClick={()=>window.open(`/${circular.no}.pdf`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors cursor-pointer">
                <Download className="w-4 h-4" />
                <span className="hidden md:inline">
                  {language === 'si' ? 'බාගන්න' : language === 'ta' ? 'பதிவிறக்கு' : 'Download'}
                </span>
              </button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGuidelines = () => (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-slate-800 mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {t.nav.guidelines}
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12">
        {language === 'si' 
          ? 'රෙජිස්ට්‍රාර්වරුන් සඳහා නිල මාර්ගෝපදේශ'
          : language === 'ta'
          ? 'பதிவாளர்களுக்கான அதிகாரப்பூர்வ வழிகாட்டுதல்கள்'
          : 'Official Guidelines for Registrars'}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: language === 'si' ? 'අධිකරණ කටයුතු' : language === 'ta' ? 'நீதித்துறை கடமைகள்' : 'Judicial Duties',
            icon: Scale,
            items: language === 'si' 
              ? ['නීතිමය ප්‍රාථිකතා', 'ලේඛන කළමනාකරණය', 'මුද්‍රාව සහ සහතික']
              : ['Legal Priorities', 'Record Management', 'Seal & Certification']
          },
          {
            title: language === 'si' ? 'පරිපාලන කටයුතු' : language === 'ta' ? 'நிர்வாக கடமைகள்' : 'Administrative Tasks',
            icon: FileText,
            items: language === 'si'
              ? ['කාර්ය මණ්ඩල කළමනාකරණය', 'ප්‍රතිවේදන ඉදිරිපත් කිරීම', 'සම්බන්ධීකරණය']
              : ['Staff Management', 'Report Submission', 'Coordination']
          },
          {
            title: language === 'si' ? 'ජඩු කළමනාකරණය' : language === 'ta' ? 'வழக்கு மேலாண்மை' : 'Case Management',
            icon: BookOpen,
            items: language === 'si'
              ? ['නඩු වාර්තා ලියාපදිංචිය', 'දින නියම කිරීම', 'තොරතුරු සම්බන්ධය']
              : ['Case Registration', 'Scheduling', 'Information Liaison']
          },
          {
            title: language === 'si' ? 'වෘත්තීය ප්‍රමිතීන්' : language === 'ta' ? 'தொழில்முறை தரநிலைகள்' : 'Professional Standards',
            icon: Award,
            items: language === 'si'
              ? ['ආචාර සංග්‍රහය', 'රහස්‍යභාවය', 'අඛණ්ඩ ඉගෙනුම']
              : ['Code of Conduct', 'Confidentiality', 'Continuous Learning']
          }
        ].map((guideline, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <guideline.icon className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{guideline.title}</h3>
            </div>
            <ul className="space-y-3">
              {guideline.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTraining = () => (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-slate-800 mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {t.nav.training}
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12">
        {language === 'si' 
          ? 'වෘත්තීය සංවර්ධනය සහ කුසලතා වැඩිදියුණු කිරීම'
          : language === 'ta'
          ? 'தொழில்முறை மேம்பாடு மற்றும் திறன் மேம்பாடு'
          : 'Professional Development and Skill Enhancement'}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: language === 'si' ? 'මූලික පුහුණුව' : language === 'ta' ? 'அடிப்படை பயிற்சி' : 'Basic Training',
            duration: language === 'si' ? '3 මාස' : language === 'ta' ? '3 மாதங்கள்' : '3 Months',
            color: 'green'
          },
          {
            title: language === 'si' ? 'උසස් පුහුණුව' : language === 'ta' ? 'மேம்பட்ட பயிற்சி' : 'Advanced Training',
            duration: language === 'si' ? '6 මාස' : language === 'ta' ? '6 மாதங்கள்' : '6 Months',
            color: 'red'
          },
          {
            title: language === 'si' ? 'විශේෂඥ පුහුණුව' : language === 'ta' ? 'நிபுணர் பயிற்சி' : 'Specialist Training',
            duration: language === 'si' ? '1 වර්ෂය' : language === 'ta' ? '1 வருடம்' : '1 Year',
            color: 'purple'
          }
        ].map((program, index) => (
          <div key={index} className={`bg-gradient-to-br from-${program.color}-50 to-${program.color}-100 rounded-xl p-6 border-2 border-${program.color}-300`}>
            <GraduationCap className={`w-12 h-12 text-${program.color}-700 mb-4`} />
            <h3 className={`text-2xl font-bold text-${program.color}-800 mb-2`}>{program.title}</h3>
            <div className={`text-${program.color}-600 font-semibold`}>{program.duration}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {language === 'si' ? 'පුහුණු මාතෘකා' : language === 'ta' ? 'பயிற்சி தலைப்புகள்' : 'Training Topics'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(language === 'si' 
            ? ['ඉංග්‍රීසි භාෂා ප්‍රවීණතාවය', 'ශ්‍රී ලංකා නීති ක්‍රමය', 'අපරාධ සහ සිවිල් කාර්ය පටිපාටිය', 'ආයතන සංවර්ධනය', 'කථන සංවර්ධනය', 'පරිගණක සාක්ෂරතාවය', 'අධිකරණ ආචාර ධර්ම', 'නඩු වාර්තා කළමනාකරණය']
            : language === 'ta'
            ? ['ஆங்கில மொழி திறன்', 'இலங்கை சட்ட அமைப்பு', 'குற்றவியல் மற்றும் சிவில் நடைமுறை', 'நிறுவன மேம்பாடு', 'முகவரி செய்தல்', 'கணினி எழுத்தறிவு', 'நீதித்துறை நெறிமுறைகள்', 'வழக்கு மேலாண்மை']
            : ['English Proficiency', 'Sri Lankan Legal System', 'Criminal & Civil Procedure', 'Institutional Development', 'Public Speaking', 'Computer Literacy', 'Judicial Ethics', 'Case Management']
          ).map((topic, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <span className="text-slate-700 font-medium">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-slate-800 mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {t.nav.news}
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12">
        {language === 'si' 
          ? 'නවතම පුවත් සහ ඉදිරි සිදුවීම්'
          : language === 'ta'
          ? 'சமீபத்திய செய்திகள் மற்றும் வரவிருக்கும் நிகழ்வுகள்'
          : 'Latest News and Upcoming Events'}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            date: '2025-11-20',
            title: language === 'si' ? 'වාර්ෂික රැස්වීම 2025' : language === 'ta' ? 'வருடாந்திர கூட்டம் 2025' : 'Annual General Meeting 2025',
            description: language === 'si' ? 'සංගම් සාමාජිකයින් සඳහා වාර්ෂික රැස්වීමසංගම් සාමාජිකයින් සඳහා වාර්ෂික රැස්වීම  කොළඹ මහාධිකරණයේදී පැවැත්වේ' : language === 'ta' ? 'கொழும்பு உயர் நீதிமன்றத்தில் சங்க உறுப்பினர்களுக்கான வருடாந்திர கூட்டம், சங்க உறுப்பினர்களுக்கான வருடாந்திர கூட்டம். ' : 'Annual gathering for association members,Annual gathering for association members at Colombo High Court',
            type: language === 'si' ? 'සිදුවීම' : language === 'ta' ? 'நிகழ்வு' : 'Event',
            color: 'red'
          },
          {
            date: '2025-12-08',
            title: language === 'si' ? 'වැටුප් විෂමතා නිරාකරණය සඳහා යෝජනාව' : language === 'ta' ? 'சம்பள முரண்பாடுகள் தீர்க்க முன்மொழிவு' : 'Proposal for Salary Anomalies Resolution',
             description: language === 'si' ? 'රා.ප.ච.3/2025 අනුව බදවා ගැනීමේ ශ්‍රේණිය වන අධිකරණ රෙජිස්ට්‍රාර් 111 වන ශ්‍රේණිය SL-1-2025 1 වත පියවර ද, 11 - ශ්‍රේණිය 11 පංතියට පත් කල රෙජිස්ට්‍රාර්වරුන් සදහා SL-1-2015  වැටුප් කේතය 4 වන පියවර ද, 11 ශ්‍රේණිය 1 පන්තියට උසස් කරන ලද නිලධාරීන් සදහා SL-1-2025  වැටුප් කේතයේ 12 වන වැටුප් පියවර ද , 1 - ශ්‍රේණියට පත් කල රෙජිස්ට්‍රාර්වරුන් සදහා SL-1-2015  වැටුප් කේතය 20 වන පියවර ද, අධිකරණ රෙජිස්යට්‍රාර් 1 ශ්‍රේණියේ සිටින වර්ෂ  5 ක් එම ශ්‍රේණියේ සේවා කාලයක් ඇති නිලධාරීන්ට ලබාගන්නා ලද උසස් අධ්‍යාපන සුදුසුකම් හා හෝ කුසලතා සලකා බලා විශේෂ ශ්‍රේණියේ උසස්වීම්  ලබාදීමට යෝජනා කර ඇත. තවද මෙම විශේෂ ශ්‍රේණියේ සදහා SL-3-2025  වැටුප් කේතය ලබාදීමට යෝජනා කර ඇත. ' : language === 'ta' ? 'Pub.Ad.3/2025ஆகியதைப் பொறுத்து, ஆட்சியாளர் பணியிடத் தரவின் வகை நீதிமன்ற பதிவாளர் தரம் 111, படி 1 SL-1-2025; தரம் 11க்கு நியமிக்கப்பட்ட பதிவாளர்களுக்கு, படி 4 SL-1-2015 சம்பள குறியீடு; தரம் 11க்கு பதவியேற்றப்பட்ட அதிகாரிகளுக்கு, படி 12 SL-1-2025 சம்பள குறியீடு; தரம் 1க்கு நியமிக்கப்பட்ட பதிவாளர்களுக்கு, படி 20 SL-1-2015 சம்பள குறியீடு. நீதிமன்ற பதிவாளர் தரம் 1-ல் 5 ஆண்டுகள் பணியாற்றிய அதிகாரிகளுக்கு மேல்நிலை கல்வித் தகுதிகள் மற்றும்/அல்லது திறன்களை கருத்தில்கொண்டு சிறப்புப் பதவியளிப்பு வழங்க பரிந்துரைக்கப்படுகிறது. மேலும், இந்த சிறப்பு தரத்திற்கு SL-3-2025 சம்பள குறியீட்டை வழங்க பரிந்துரைக்கப்படுகிறது.' : 'According to Pub.Ad 3/2025, the recruitment grade is Judicial Registrar Grade 111, step 1 of SL-1-2025; for Registrars appointed to Grade 11, step 4 of SL-1-2015 salary code; for officers promoted to Grade 11, step 12 of SL-1-2025 salary code; for Registrars appointed to Grade 1, step 20 of SL-1-2015 salary code. It is proposed to grant special grade promotions to officers who have 5 years of service in Judicial Registrar Grade 1, taking into account their higher educational qualifications and/or competencies. Furthermore, it is proposed to assign the SL-3-2025 salary code for this special grade.',
            type: language === 'si' ? 'පුවත' : language === 'ta' ? 'செய்தி' : 'News',
            color: 'green'
          },
          {
            date: '2026-03-15',
            title: language === 'si' ? 'පුහුණු වැඩසටහන - කළමනාකරණ සංකල්ප හා අධිකරණ පරිපාලනය' : language === 'ta' ? 'பயிற்சி திட்டம் - மேலாண்மை கருத்துகள் மற்றும் நீதிமன்ற நிர்வாகம்' : 'Training Program - Management Concepts & Court Administration',
             description: language === 'si' ? 'සංගම් සාමාජිකයින් සඳහා පුහුණු වැඩසටහනක් විශ්ව විද්‍යාල ආචාරවරුන් මගින් පැවැත්වීමට කටයුතු සූදානම් කරමින් පවතී.' : language === 'ta' ? 'பல்கலைக்கழக பேராசிரியர்களால் கிளப் உறுப்பினர்களுக்கான பயிற்சி நிகழ்ச்சி நடத்துவதற்கான ஏற்பாடுகள் நடைபெற்று வருகின்றன.' : 'Preparations are underway to conduct a training program for  members by university lecturers.',
            type: language === 'si' ? 'පුහුණුව' : language === 'ta' ? 'பயிற்சி' : 'Training',
            color: 'purple'
          },
          {
            date: '2026-03-05',
            title: language === 'si' ? 'නව සාමාජික ලියාපදිංචිය' : language === 'ta' ? 'புதிய உறுப்பினர் பதிவு' : 'New Member Registration',
             description: language === 'si' ? 'සංගම් සාමාජිකයින් සඳහා නව ලියාපදිංචියක් පවත්වන ලද පරිදි සංගමයට එකතුවන සාමාජිකයන්ට ප්‍රතිලාභ රැසක් හිමිවේ. ප්‍රවර්ධන වැඩසටහන ඉදිරි සති කීපය තුළ ක්‍රියාත්මකයි. ' : language === 'ta' ? 'சங்கத்துடன் சேரும் உறுப்பினர்கள், சங்க உறுப்பினர்களுக்காக புதிய பதிவு நடத்தும்போது, பலவகை நன்மைகளை பெறுவர். பிரச்சாரத் திட்டம் அடுத்த சில வாரங்களில் அமல்படுத்தப்படும். சங்க உறுப்பினர்கள்.' : 'Members who join the association, as a new registration is held for union members, receive a variety of benefits.The promotional program will be implemented within the next few weeks. association members.',
            type: language === 'si' ? 'දැනුම්දීම' : language === 'ta' ? 'அறிவிப்பு' : 'Announcement',
            color: 'amber'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className={`p-3 bg-${item.color}-100 rounded-lg`}>
                {item.type === (language === 'si' ? 'සිදුවීම' : language === 'ta' ? 'நிகழ்வு' : 'Event') ? (
                  <Calendar className={`w-6 h-6 text-${item.color}-700`} />
                ) : (
                  <Bell className={`w-6 h-6 text-${item.color}-700`} />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold text-${item.color}-700 bg-${item.color}-100 px-2 py-1 rounded-full`}>
                    {item.type}
                  </span>
                  <span className="text-sm text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-red-900 mb-2">{item.title}</h3>
                <p className="text-md text-slate-800 mb-2">{item.description}</p>
                <button className="text-red-600 hover:text-red-800 font-semibold text-sm flex items-center gap-1">
                  {language === 'si' ? 'වැඩිදුර කියවන්න' : language === 'ta' ? 'மேலும் வாசிக்க' : 'Read More'}
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 ">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 rounded-t-lg z-50 transition-all duration-300 ${
        scrolled ? 'bg-red-900 shadow-lg' : 'bg-red-900 backdrop-blur'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveSection('home')}>
              <div className="bg-red-900 rounded-lg">
               
                <img className="w-15 h-15 rounded-full" src="/logo.png" alt="logo" />
              
              </div>
              <div className="hidden md:block">
                <div className="text-lg font-bold text-slate-800 text-white/95" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {language === 'si' ? 'SLJRA' : language === 'ta' ? 'SLJRA' : 'SLJRA'}
                </div>
                <div className="text-xs text-slate-600 text-white/95">
                  {language === 'si' ? 'ශ්‍රී ලංකා' : language === 'ta' ? 'இலங்கை' : 'Sri Lanka'}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 ">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`text-md font-medium transition-colors relative group ${
                    activeSection === key ? 'text-white/95' : 'text-white/95 hover:text-red-200 hover:cursor-pointer'
                  }`}
                >
                  {value}
                  {activeSection === key && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-3">
              <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                {['si', 'en', 'ta'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 rounded-md text-sm font-semibold transition-all ${
                      language === lang
                        ? 'bg-red-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-red-600'
                    }`}
                  >
                    {lang === 'si' ? 'සිං' : lang === 'en' ? 'EN' : 'தமி'}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-2">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === key
                      ? 'bg-red-100 text-red-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'history' && renderHistory()}
        {activeSection === 'seniority' && renderSeniority()}
        {activeSection === 'circulars' && renderCirculars()}
        {activeSection === 'guidelines' && renderGuidelines()}
        {activeSection === 'membership' && renderBenefits()}
        {activeSection === 'benefits' && renderBenefits()}
        {activeSection === 'training' && renderTraining()}
        {activeSection === 'news' && renderNews()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-8 h-8 text-amber-400" />
                <h3 className="text-xl font-bold">SLJRA</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {language === 'si'
                  ? 'ශ්‍රී ලංකා අධිකරණ රෙජිස්ට්‍රාර්වරුන්ගේ සංගමය - යුක්තිය සහ විශිෂ්ටත්වය ප්‍රවර්ධනය කිරීම'
                  : language === 'ta'
                  ? 'இலங்கை நீதித்துறை பதிவாளர்கள் சங்கம் - நீதி மற்றும் சிறப்பை மேம்படுத்துதல்'
                  : 'Sri Lanka Judicial Registrars\' Association - Promoting Justice and Excellence'}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">
                {language === 'si' ? 'ඉක්මන් සබැඳි' : language === 'ta' ? 'விரைவு இணைப்புகள்' : 'Quick Links'}
              </h4>
              <div className="space-y-2">
                {Object.entries(t.nav).slice(0, 4).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveSection(key);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="block text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">
                {language === 'si' ? 'සම්බන්ධ වන්න' : language === 'ta' ? 'தொடர்பு' : 'Contact'}
              </h4>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>sjregiassociation@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+94 70 329 0266</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{language === 'si' ? 'කොළඹ, ශ්‍රී ලංකා' : language === 'ta' ? 'கொழும்பு, இலங்கை' : 'Colombo, Sri Lanka'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 {language === 'si' ? 'ශ්‍රී ලංකා අධිකරණ රෙජිස්ට්‍රාර්වරුන්ගේ සංගමය' : language === 'ta' ? 'இலங்கை நீதித்துறை பதிவாளர்கள் சங்கம்' : 'Sri Lanka Judicial Registrars\' Association'}. {language === 'si' ? 'සියලුම හිමිකම් ඇවිරිණි.| නිර්මාණය - තිළිණ රත්නායක, රෙජිස්ට්‍රාර්(තොරතුරු තාක්ෂණ), මහාධිකරණය, කොළඹ 12.' : language === 'ta' ? 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. | கொழும்பு உயர் நீதிமன்ற பதிவாளர் (தகவல் தொழில்நுட்பம்) திலின ரத்நாயக்க அவர்களால் இயக்கப்படுகிறது.' : 'All rights reserved.| Powered by Thilina Rathnayake, Registrar(IT), High Court Colombo'}</p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default JudicialRegistrarsWebsite;