import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const ToggleSiteTheme = () => {
  const [siteTheme, setSiteTheme] = useState<string | undefined>();

  useEffect(() => {
    Cookies.get("SiteTheme") === undefined && Cookies.set("SiteTheme", "dark");

    setSiteTheme(Cookies.get("SiteTheme"));
  }, []);

  const handleToggleSiteTheme = () => {
    Cookies.get("SiteTheme") === "dark"
      ? Cookies.set("SiteTheme", "light", { expires: 30 })
      : Cookies.set("SiteTheme", "dark", { expires: 30 });

    setSiteTheme(Cookies.get("SiteTheme"));
    console.log(siteTheme);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: siteTheme === "light" ? "#000" : "unset",
          color: siteTheme === "light" ? "#fff" : "unset",
        }}
      >
        <input type="checkbox" onChange={handleToggleSiteTheme} />
        <p>Text</p>
      </div>
    </>
  );
};
