"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Arsenal } from "next/font/google";
import {
  FaBriefcase,
  FaBriefcaseMedical,
  FaPen,
  FaShareAlt,
  FaTree,
} from "react-icons/fa";
import { useState } from "react";
const inter = Arsenal({ subsets: ["latin"], weight: "400" });

export default function LandingPage() {
  const [page, setPage] = useState(0);
  const txt1 = `FarmFuture connects rural entrepreneurs and farmers
   directly with consumers through a simple, community-focused social commerce platform.
    Leveraging social media and local networks, we facilitate direct sales, secure transactions, and
   meaningful community engagement. Join us in driving local economic growth and connecting communities.`;
  const txt2 = `फार्मफ्यूचर ग्रामीण उद्यमियों और किसानों को सीधे उपभोक्ताओं से जोड़ता है, एक सरल, सामुदायिक-केंद्रित सोशल
    कॉमर्स प्लेटफॉर्म के माध्यम से। सोशल मीडिया और स्थानीय नेटवर्क का उपयोग करते हुए, हम सीधे बिक्री,
    सुरक्षित लेनदेन और सार्थक सामुदायिक सहभागिता को सुगम बनाते हैं। स्थानीय आर्थिक विकास को बढ़ावा देने और समुदायों को जोड़ने में हमारे साथ जुड़ें।`;
  const txt3 = `ఫార్మ్ ఫ్యూచర్ గ్రామీణ పారిశ్రామికవేత్తలు మరియు రైతులను సాదాసీదా, సముదాయ
   కేంద్రిత సామాజిక వాణిజ్య వేదిక ద్వారా నేరుగా వినియోగదారులతో అనుసంధానిస్తుంది. సామాజిక మాధ్యమాలు
    మరియు స్థానిక నెట్‌వర్క్‌లను ఉపయోగించి, మేము నేరుగా అమ్మకాల కోసం సురక్షిత లావాదేవీలు మరియు ప్రాముఖ్యమైన సముదాయ అనుసంధానాన్ని
   సులభతరం చేస్తాము. స్థానిక ఆర్థిక వృద్ధిని నడిపించడంలో మరియు సముదాయాలను అనుసంధానించడంలో మాతో చేరండి.`;
  const txt4 = `ஊரக  கைஞர்களையும் விவசாயிகளையும் எளிய, சமுதாயத்தை மையமாகக் 
  கொண்ட சமூக வணிக தளத்தின் மூலம் நேரடியாக நுகர்வோருடன் இணைக்கிறது. சமூக ஊடகங்கள்
   மற்றும் உள்ளூர் நெட்வொர்க்குகளை பயன்படுத்தி, நேரடி விற்பனை, பாதுகாப்பான பரிவர்த்தனைகள் 
   மற்றும் பொருத்தமான சமுதாய ஈடுபாட்டை எங்களால் வசதியாக்குகிறோம். உள்ளூர்
   பொருளாதார வளர்ச்சியை இயக்கவும், சமுதாயங்களை இணைக்கவும் எங்களைச் சேருங்கள்.`;
  const txt5 = `ग्रामीण उद्योजक आणि शेतकऱ्यांना थेट ग्राहकांशी जोडते एका साध्या, समुदाय-केंद्रित सामाजिक वाणिज्य मंचाद्वारे. 
  सामाजिक माध्यमे आणि स्थानिक नेटवर्कचा लाभ घेत, आम्ही थेट विक्री, सुरक्षित व्यवहार, आणि अर्थपूर्ण सामुदायिक 
  सहभाग सुलभ करतो. स्थानिक आर्थिक विकासाला गती देण्यासाठी आणि समुदायांना जोडण्यासाठी आमच्यात सामील व्हा.`;
  const langlist = [txt1, txt2, txt3, txt4, txt5];
  const list2 = [
    <p key={1}>
      Connect Farmers <br></br> & Future
    </p>,
    <p key={2}>
      किसानों को जोड़ें <br></br>और भविष्य
    </p>,
    <p key={3}>
      వ్యవసాయులనూ భవిష్యత్తునీ <br></br> అనుసంధానించండి
    </p>,
    <p key={4}>
      விவசாயிகளை மற்றும் <br></br>எதிர்காலத்தை இணைக்கவும்
    </p>,
    <p key={5}>
      शेतकऱ्यांना आणि<br></br> भविष्याला जोडा
    </p>,
  ];
  return (
    <main className={styles.main}>
      <div className={styles.lang}>
        <p
          className={styles.lang1}
          onClick={() => {
            setPage(0);
          }}
        >
          English
        </p>
        <p
          className={styles.lang1}
          onClick={() => {
            setPage(1);
          }}
        >
          हिन्दी
        </p>
        <p
          className={styles.lang1}
          onClick={() => {
            setPage(2);
          }}
        >
          తెలుగు
        </p>
        <p
          className={styles.lang1}
          onClick={() => {
            setPage(3);
          }}
        >
          தமிழ்
        </p>
        <p
          className={styles.lang1}
          onClick={() => {
            setPage(4);
          }}
        >
          मराठी
        </p>
      </div>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <h1
            className={styles.title}
            style={{ fontFamily: inter.style.fontFamily }}
          >
            {list2[page]}
          </h1>
          <p className={styles.p1}>{langlist[page]}</p>
          <button className={styles.btn}>Explore</button>
        </div>
        <div className={styles.div2}>
          <img src="/i4.jpg" className={styles.img}></img>
          <div className={styles.shadow}></div>
        </div>
      </div>
    </main>
  );
}
