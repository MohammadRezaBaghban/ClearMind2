import "@/styles/globals.css";
import { SurveyProvider } from "@/context/SurveyContext";

export default function App({ Component, pageProps }) {
  return (
    <SurveyProvider>
      <Component {...pageProps} />;
    </SurveyProvider>
  );
}
