import React from "react";
import { useLanguage } from '../context/LanguageContext'; 

const Profile = () => {

  const { content, language } = useLanguage(); 

  const { title, profile, about } = content.profileSection; 

  
  const profileLabels = {
    profileHeader: language === 'tr' ? 'Profil' : 'Profile',
    birthDate: language === 'tr' ? 'Doğum Tarihi' : 'Birth Date',
    residence: language === 'tr' ? 'İkamet Şehri' : 'Residence',
    university: language === 'tr' ? 'Eğitim Durumu' : 'Education Status',
    preferenceRole: language === 'tr' ? 'Tercih Ettiği Rol' : 'Preference Role',
  };

  return (
    <section className="mx-auto container px-6 md:px-20 py-16 bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-900 dark:text-white dark:border-gray-700">
        {title}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[#4338CA] mb-4 dark:text-indigo-400">{profileLabels.profileHeader}</h3>
          
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>{profileLabels.birthDate}:</strong> {profile.birthDate}</li>
            <li><strong>{profileLabels.residence}:</strong> {profile.rezisdance}</li>
            <li><strong>{profileLabels.university}:</strong> {profile.university}</li>
            <li><strong>{profileLabels.preferenceRole}:</strong> {profile.preferenceRole}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#4338CA] mb-4 dark:text-indigo-400">{about.aboutHeader}</h3>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{about.aboutText}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;