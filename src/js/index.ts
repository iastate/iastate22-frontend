import "core-js/stable";

/**
 * Modules
 */
import focusWithin from "focus-within";
import objectFitImages from "object-fit-images";
import { silcCoreInit } from "silc-core";
import { silcAccordionInit } from "silc-accordion";
import modalsInit from "./components/modal";
import siteHeaderInit from "./components/site-header";
import cardsInit from "./components/card";
import subnavInit from "./components/subnav";
import privacyConsentInit from "../components/privacy-consent/privacy-consent";
import accordionsInit from "./components/accordion";
import videoEmbedInit from "./components/video-embed";
import homeInit from "./pages/home";
import initCollegeHeroes from "./pages/college-template";

/**
 * Init
 */
focusWithin(document);
objectFitImages();
silcCoreInit();
silcAccordionInit();
siteHeaderInit();
modalsInit();
cardsInit();
privacyConsentInit();
accordionsInit();
subnavInit();
videoEmbedInit();
homeInit();
initCollegeHeroes();

/**
 * Example VueJS app
 */
import { vueAppInit } from "./vue-app";
vueAppInit("#vue-app");
