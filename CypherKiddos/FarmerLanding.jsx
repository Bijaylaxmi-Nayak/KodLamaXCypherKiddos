import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import "./FarmerLanding.css";

const FarmerLanding = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="farmer-landing">
      <div className="language-selector">
        <select onChange={changeLanguage} defaultValue={i18n.language}>
          <option value="en">🇬🇧 English</option>
          <option value="hi">🇮🇳 हिंदी</option>
          <option value="bn">🇧🇩 বাংলা</option>
          <option value="te">🇮🇳 తెలుగు</option>
        </select>
      </div>

      <div className="content">
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>

        <div className="buttons">
          <button>{t("register")}</button>
          <button>{t("dashboard")}</button>
        </div>

        <div className="features">
          <div className="feature">
            <h3>{t("track_stock")}</h3>
            <p>{t("track_desc")}</p>
          </div>
          <div className="feature">
            <h3>{t("investments")}</h3>
            <p>{t("invest_desc")}</p>
          </div>
          <div className="feature">
            <h3>{t("marketplace")}</h3>
            <p>{t("market_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerLanding;
