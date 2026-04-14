import { useEffect } from "react";
import { Container, Section, Text } from "./components/ui";
import { type Language, locales } from "./locales";
import SingleColumnLayout from "./layouts/SingleColumnLayout";

const getLanguageFromQuery = (): Language => {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");

  if (queryLanguage === "kr" || queryLanguage === "en") {
    return queryLanguage;
  }

  return "en";
};

const PrintApp = () => {
  const language = getLanguageFromQuery();
  const locale = locales[language];

  useEffect(() => {
    const handleAfterPrint = () => {
      window.close();
    };

    window.addEventListener("afterprint", handleAfterPrint);

    const printTimer = window.setTimeout(() => {
      window.print();
    }, 250);

    return () => {
      window.removeEventListener("afterprint", handleAfterPrint);
      window.clearTimeout(printTimer);
    };
  }, []);

  return (
    <Container className="print-desktop-container">
      <Section className="flex justify-end mx-auto w-full max-w-[1200px] h-[60px]">
        <Text variant="section-body-small">
          본 이력서는 "resume.junbyeol.me"에서도 확인 가능합니다.
        </Text>
      </Section>
      <SingleColumnLayout locale={locale} isPrintView />
    </Container>
  );
};

export default PrintApp;
