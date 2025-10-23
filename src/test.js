// src/data.js
const data = {
  tr: {
    heroSection: {
      name: "Şeyma Ezgi ASILSOY",
      text1: "Web’i canlı hissettiriyorum.",
      description:
        "Tutkulu bir Frontend Developer’ım ve tasarımları hayata geçirmeyi seviyorum. Etkileşimli, responsive ve görsel olarak çekici web deneyimleri yaratmayı seviyorum. Üzerinde çalıştığım her proje, kullanıcıyı etkileyen, sezgisel ve akılda kalıcı olacak şekilde tasarlanır. Amacım, web’i canlı hissettirmek — bir komponent bir komponent.",
      profileImage: "/assets/ProfileImage.png",
      socials: [
        {
          logo: "/assets/LinkedIn.png",
          altText: "LinkedIn",
          text: "LinkedIn",
          link: "https://www.linkedin.com/in/ezgiasilsoy/",
        },
        {
          logo: "/assets/github.png",
          altText: "GitHub",
          text: "GitHub",
          link: "https://github.com/ezgiasilsoy",
        },
      ],
    skillSection: {
  title: "Yetenekler", // TR Başlık
  skills: [
    { 
      name: "HTML", 
      altText: "HTML", 
      text: "Semantik HTML5 yapısını kullanarak erişilebilir ve standartlara uygun web sayfaları oluşturma becerisi." 
    },
    { 
      name: "CSS", 
      altText: "CSS", 
      text: "Modern CSS3 özellikleriyle responsive tasarımlar, animasyonlar ve görsel olarak çekici arayüzler geliştirme yeteneği." 
    },
    { 
      name: "React", 
      altText: "React", 
      text: "Component tabanlı mimariyi anlayarak, etkileşimli ve yeniden kullanılabilir UI bileşenleri oluşturma pratiği." 
    },
    { 
      name: "Redux", 
      altText: "Redux", 
      text: "Uygulama genelinde merkezi state yönetimi için Redux'un temel prensiplerini (store, reducer, action) uygulama bilgisi." 
    },
    { 
      name: "TailwindCSS", 
      altText: "TailwindCSS", 
      text: "Utility-first yaklaşımıyla hızlı ve özelleştirilebilir tasarımlar yapabilme, modern arayüzleri hızla prototipleme." 
    },
    { 
      name: "JavaScript", 
      altText: "JavaScript", 
      text: "ES6+ özelliklerine hakim, DOM manipülasyonu ve temel programlama mantığı ile web sayfalarına işlevsellik katma." 
    },
    { 
      name: "Figma", 
      altText: "Figma", 
      text: "Tasarım dosyalarını okuma, ölçüleri ve stilleri doğru bir şekilde yorumlayarak tasarımları koda aktarma deneyimi." 
    },
  ],
},
    },
    profileSection: {
        title:"Profil",
      profile: {
        birthDate: "28.07.1998",
        rezisdance: "Tekirdağ",
        university: "Ondokuzmayıs Ünv. İnşaat Mühendisliği",
        preferenceRole: "Frontend Developer",
      },
      about: {
        aboutHeader: "Hakkımda",
        aboutText:
          "Ondokuzmayıs Üniversitesi İnşaat Mühendisliği bölümünden mezun olduktan sonra hem yurt içinde hem yurt dışında mesleğimi icra ettim. Fakat bu deneyimlerin sonunda istediğimin bu olmadığını anlayıp kariyer değişikliğine karar verdim. Bu kararımın doğruluğunu kodlama yazarken aldığım keyif ve heyecan tasdikledi. Yeni mesleğimde bu heyecan ve istekle çok iyi işler başaracağıma inanıyorum.",
      },
    },
    projects: {
      pr1: {
        img: "/assets/spğizza.png",
        name: "Statik Pizza Sitesi",
        description: "Sadece HTML ve CSS kullanılarak oluşturulmuş sabit bir pizza tanıtım sitesidir.",
        link: "https://github.com/ezgiasilsoy/Pizza-Restaurant-",
      },
      pr2: {
        img: "/assets/fhs_2.jpg",
        name: "Dinamik Pizza Sitesi",
        description: "React ve JavaScript kullanılarak oluşturulmuş etkileşimli bir pizza sipariş uygulamasıdır.",
        link: "https://github.com/ezgiasilsoy/dinamic-pizza-site",
      },
    },
    footer:{
      github:"https://github.com/ezgiasilsoy",
      linkedin:"https://www.linkedin.com/in/ezgiasilsoy/"
    }
  },

  en: {
    heroSection: {
      name: "Şeyma Ezgi ASILSOY",
      text1: "I make the web feel alive.",
      description:
        "I’m a passionate Frontend Developer who loves bringing designs to life. I create interactive, responsive, and visually engaging web experiences that leave a lasting impression. Every project I work on is designed to be intuitive, user-focused, and memorable. My goal is simple — make the web feel alive, one component at a time.",
      profileImage: "/src/assets/ProfileImage.png",
      socials: [
        {
          logo: "/assets/LinkedIn.png",
          altText: "LinkedIn",
          text: "LinkedIn",
          link: "https://www.linkedin.com/in/ezgiasilsoy/",
        },
        {
          logo: "/assets/github.png",
          altText: "GitHub",
          text: "GitHub",
          link: "https://github.com/ezgiasilsoy",
        },
      ],
      skillSection: {
  title: "Skills",
  skills: [
    { 
      name: "HTML", 
      altText: "HTML", 
      text: "Proficient in using semantic HTML5 structure to build accessible and standards-compliant web pages." 
    },
    { 
      name: "CSS", 
      altText: "CSS", 
      text: "Ability to develop responsive layouts, animations, and visually appealing interfaces using modern CSS3 features." 
    },
    { 
      name: "React", 
      altText: "React", 
      text: "Practical experience in creating interactive and reusable UI components by understanding component-based architecture." 
    },
    { 
      name: "Redux", 
      altText: "Redux", 
      text: "Knowledge of applying core Redux principles (store, reducer, action) for centralized state management across the application." 
    },
    { 
      name: "TailwindCSS", 
      altText: "TailwindCSS", 
      text: "Skilled in rapid prototyping and building highly customizable designs using the utility-first approach." 
    },
    { 
      name: "JavaScript", 
      altText: "JavaScript", 
      text: "A good grasp of ES6+ features, adding dynamic functionality to web pages through DOM manipulation and core logic." 
    },
    { 
      name: "Figma", 
      altText: "Figma", 
      text: "Experienced in interpreting design files, accurately translating measurements and styles into high-fidelity code." 
    },
  ],
},
    },
  profileSection: {
        title:"Profil",
      profile: {
        birthDate: "28.07.1998",
        rezisdance: "Tekirdağ",
        university: "Ondokuzmayıs University, Civil Engineering",
        preferenceRole: "Frontend Developer",
      },
      about: {
        aboutHeader: "About Me",
        aboutText:
          "After graduating from Ondokuzmayıs University with a degree in Civil Engineering, I worked both in Turkey and abroad. However, I eventually realized that this wasn’t what I truly wanted and decided to switch careers. The excitement and joy I feel while coding confirmed that I made the right choice. I truly believe that with this passion and dedication, I will achieve great things in my new profession.",
      },
    },
    projects: {
      pr1: {
        img: "/assets/spğizza.png",
        name: "Static Pizza Website",
        description: "A static pizza introduction website built using only HTML and CSS.",
        link: "https://github.com/ezgiasilsoy/Pizza-Restaurant-",
      },
      pr2: {
        img: "/assets/fhs_2.jpg",
        name: "Dynamic Pizza Website",
        description: "An interactive pizza ordering app built using React and JavaScript.",
        link: "https://github.com/ezgiasilsoy/dinamic-pizza-site",
      },
    },
  },
   footer:{
      github:"https://github.com/ezgiasilsoy",
      linkedin:"https://www.linkedin.com/in/ezgiasilsoy/"
    }
};

export default data;
