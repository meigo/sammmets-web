/**
 * @typedef {"et"|"en"} Language
 */

/**
 * @typedef {Object} ImageData
 * @property {string} _id
 * @property {string} title
 * @property {string} path
 * @property {number} width
 * @property {number} height
 */

/**
 * @typedef {Object} PictureData
 * @property {string} id
 * @property {{type:string, srcset:string}[]} sources
 * @property {{src:string, alt:string, w:number, h:number}} img
 */

/**
 * @typedef {Object} SiteData
 * @property {string} base
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [keywords]
 * @property {string} [ogImage]
 */

/**
 * @typedef {Object} MenuItem
 * @property {string} title
 * @property {string} target
 * @property {string} url
 */

/**
 * @typedef {MenuItem[]} MenuData
 */

/**
 * @typedef {Object} AboutSectionData
 * @property {string} [title]
 * @property {string} [text]
 * @property {string} [text2]
 * @property {string} [text3]
 * @property {ImageData[]} [images]
 * @property {PictureData[]} [pictures]
 */

/**
 * @typedef {Object} Product
 * @property {string} [title]
 * @property {string} [text]
 * @property {ImageData} [image]
 * @property {PictureData} [picture]
 */

/**
 * @typedef {Object} LumberSectionData
 * @property {string} [title]
 * @property {string} [text]
 * @property {Product[]} [products]
 * @property {string} [text2]
 */

/**
 * @typedef {Object} PelletSectionData
 * @property {string} [title]
 * @property {string} [text]
 * @property {string} [text2]
 * @property {string} [text3]
 * @property {ImageData} [image]
 * @property {PictureData} [picture]
 */

/**
 * @typedef {Object} Paragraph
 * @property {string} [title]
 * @property {string} [text]
 * @property {ImageData} [image]
 * @property {PictureData} [picture]
 */

/**
 * @typedef {Object} TransportSectionData
 * @property {string} [title]
 * @property {string} [text]
 * @property {string} [text2]
 * @property {string} [text3]
 * @property {ImageData[]} [images]
 * @property {PictureData[]} [pictures]
 */

/**
 * @typedef {Object} ForestrySectionData
 * @property {string} [title]
 * @property {string} [text]
 * @property {string} [text2]
 * @property {Paragraph[]} [paragraphs]
 */

/**
 * @typedef {Object} MaterialPurchaseSectionData
 * @property {string} [title]
 * @property {string} [text]
 * @property {string} [text2]
 * @property {string} [text3]
 * @property {ImageData} [image]
 * @property {PictureData} [picture]
 */

/**
 * @typedef {Object} ContactSectionData
 * @property {string} [title]
 * @property {string} [text]
 */

/**
 * @typedef {Object} ImageSectionData
 * @property {PictureData[]} [section1]
 * @property {PictureData[]} [section2]
 */
