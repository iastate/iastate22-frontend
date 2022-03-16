/**
 * Modules
 */
import focusWithin from "focus-within";
import * as objectFitImages from "object-fit-images";

import { silcCoreInit } from "silc-core";
import { silcAccordionInit } from "silc-accordion";
import { silcNavInit } from "silc-nav";
import Modal from "./components/modal";
import lazyLoadInit from "../components/lazyload/_lazyload";
import siteHeaderInit from "./components/site-header";
import cardsInit from "./components/card";
import subnavInit from "./components/subnav";
import privacyConsentInit from "../components/privacy-consent/privacy-consent";
import accordionsInit from "./components/accordion";
import videoEmbedInit from "./components/video-embed";

/**
 * Init
 */
focusWithin(document);
objectFitImages();
silcCoreInit();
silcAccordionInit();
silcNavInit();
siteHeaderInit();
Modal.init();
lazyLoadInit();
cardsInit();
privacyConsentInit();
accordionsInit();
subnavInit();
videoEmbedInit();

/**
 * Example VueJS app
 */
import { vueAppInit } from "./vue-app";
vueAppInit("#vue-app");
