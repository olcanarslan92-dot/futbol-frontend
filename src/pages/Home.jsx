import LeagueList from "../components/LeagueList";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t("leagues")}</h1>
        <button
          onClick={toggleLang}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          {t("changeLang")}
        </button>
      </div>
      <LeagueList />
    </div>
  );
}