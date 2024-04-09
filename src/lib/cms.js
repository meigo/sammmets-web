import { siteData } from "@lib/store";
import ShortcodeParser from "meta-shortcodes";
import { getImagePagePictureData, getSectionPictureData } from "@lib/cms-images";
import { CMS_UPLOAD_PATH, CMS_URL, CMS_API_KEY, API_URL } from "../config.js";

const headers = { "content-type": "application/json", "api-key": CMS_API_KEY };

/**
 * @param {Language} language
 */
export async function getSiteData(language) {
  const res = await fetch(`${API_URL}content/item/site?locale=${language}`, { headers });
  const data = await res.json();
  if (data.ogImage && data.ogImage.path) data.ogImage = CMS_URL + CMS_UPLOAD_PATH + data.ogImage.path;

  siteData.set(data);
  return data;
}

/**
 * @param {Language} language
 */
export async function getMenuData(language) {
  const res = await fetch(`${API_URL}content/item/menu?locale=${language}`, { headers });

  /**
   * @typedef {Object} MenuResponse
   * @property {MenuItem[]} menu
   */
  /** @type {MenuResponse} */
  const data = await res.json();

  /** @type {MenuData} */
  const menu = [];
  for (const item of data.menu) {
    menu.push({ title: item.title, url: item.url, target: item.target });
  }

  return menu;
}

/**
 * @param {Language} language
 */
export async function getAboutSectionData(language) {
  const res = await fetch(`${API_URL}content/item/aboutSection?locale=${language}`, { headers });
  /** @type {AboutSectionData} */
  const data = await res.json();

  if (data.images && data.images.length) {
    const picturesData = [];
    for (const imageData of data.images) {
      const p = await getSectionPictureData(imageData);
      picturesData.push(p);
    }
    data.pictures = picturesData;
  }

  processShortcodes(data);

  return data;
}

/**
 * @param {Language} language
 */
export async function getLumberSectionData(language) {
  const res = await fetch(`${API_URL}content/item/lumberSection?locale=${language}`, { headers });
  /** @type {LumberSectionData} */
  const data = await res.json();

  if (data.products && data.products.length) {
    for (const product of data.products) {
      if (product.image) {
        product.picture = await getSectionPictureData(product.image);
      }
    }
  }

  processShortcodes(data);

  return data;
}

/**
 * @param {Language} language
 */
export async function getPelletsSectionData(language) {
  const res = await fetch(`${API_URL}content/item/pelletsSection?locale=${language}`, { headers });
  const data = await res.json();

  if (data.image) {
    data.picture = await getSectionPictureData(data.image);
  }

  processShortcodes(data);

  return data;
}

/**
 * @param {Language} language
 */
export async function getMaterialPurchaseSectionData(language) {
  const res = await fetch(`${API_URL}content/item/materialPurchaseSection?locale=${language}`, { headers });
  const data = await res.json();

  if (data.image) {
    data.picture = await getSectionPictureData(data.image);
  }

  processShortcodes(data);

  return data;
}

/**
 * @param {Language} language
 */
export async function getForestrySectionData(language) {
  const res = await fetch(`${API_URL}content/item/forestrySection?locale=${language}`, { headers });
  /** @type {ForestrySectionData} */
  const data = await res.json();

  if (data.paragraphs && data.paragraphs.length) {
    for (const paragraph of data.paragraphs) {
      if (paragraph.image) {
        paragraph.picture = await getSectionPictureData(paragraph.image, false);
      }
    }
  }

  processShortcodes(data);

  return data;
}

/**
 * @param {Language} language
 */
export async function getTransportSectionData(language) {
  const res = await fetch(`${API_URL}content/item/transportSection?locale=${language}`, { headers });
  /** @type {TransportSectionData} */
  const data = await res.json();

  if (data.images && data.images.length) {
    const picturesData = [];
    for (const imageData of data.images) {
      const p = await getSectionPictureData(imageData, true, [400, 700]);
      picturesData.push(p);
    }
    data.pictures = picturesData;
  }

  processShortcodes(data);

  return data;
}

export async function getBackgroundsData() {
  const res = await fetch(`${API_URL}content/item/backgrounds`, { headers });
  const data = await res.json();

  /** @type {ImageSectionData} */
  const imageSectionsData = { section1: [], section2: [] };

  if (data.imageSection1 && data.imageSection1.images.length) {
    for (const image of data.imageSection1.images) {
      const p = await getImagePagePictureData(image._id);
      imageSectionsData.section1.push(p);
    }
  }

  if (data.imageSection2 && data.imageSection2.images.length) {
    for (const image of data.imageSection2.images) {
      const p = await getImagePagePictureData(image._id);
      imageSectionsData.section2.push(p);
    }
  }

  return imageSectionsData;
}

/**
 * @param {Language} language
 */
export async function getContactSectionData(language) {
  const res = await fetch(`${API_URL}content/item/contactSection?locale=${language}`, { headers });
  /** @type {AboutSectionData} */
  const data = await res.json();

  return data;
}

//=========================================================================================================

const shortcodeParser = ShortcodeParser();

shortcodeParser.add("kontakt", function (opts, content) {
  return '<a class="contact-form-button" href="#kontakt">' + content + "</a>";
});

/**
 * @param {*} data
 */
export function processShortcodes(data) {
  for (const key in data) {
    if (key.startsWith("text") && typeof data[key] === "string") {
      data[key] = shortcodeParser.parse(data[key]);
    }
  }
}
