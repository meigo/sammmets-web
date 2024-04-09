import { favicons } from "favicons";
import fs from "fs-extra";
import path from "path";

const source = "icons/favicon.png"; // Source image(s). `string`, `buffer` or array of `string`
const htmlFilePath = "icons/temp/icons-index.html"; // HTML file.
const dest = "./public/"; // Output directory path.

const metaDescription =
  "Samm Mets OÜ - saematerjali ja puidugraanulite tootmine, metsa ülestöötamine ja hooldamine, metsamaterjali veoteenus, metsamaterjali ja -kinnistute ost.";

const configuration = {
  path: "/", // Path for overriding default icons path. `string`
  appName: "Samm mets OÜ", // Your application's name. `string`
  appShortName: null, // Your application's short_name. `string`. Optional. If not set, appName will be used
  appDescription: metaDescription, // Your application's description. `string`
  developerName: "Meigo Kukk", // Your (or your developer's) name. `string`
  developerURL: "https://animal.ee", // Your (or your developer's) URL. `string`
  dir: "auto", // Primary text direction for name, short_name, and description
  lang: "et_EE", // Primary language for name and short_name
  background: "#FFF", // Background colour for flattened icons. `string`
  theme_color: "#FFF", // Theme color user for example in Android's task switcher. `string`
  appleStatusBarStyle: "black-translucent", // Style for Apple status bar: "black-translucent", "default", "black". `string`
  display: "browser", // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
  orientation: "any", // Default orientation: "any", "natural", "portrait" or "landscape". `string`
  scope: "/", // set of URLs that the browser considers within your app
  start_url: "/", // Start URL when launching the application from a device. `string`
  preferRelatedApplications: false, // Should the browser prompt the user to install the native companion app. `boolean`
  relatedApplications: undefined, // Information about the native companion apps. This will only be used if `preferRelatedApplications` is `true`. `Array<{ id: string, url: string, platform: string }>`
  version: "1.0", // Your application's version string. `string`
  pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
  loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
  manifestMaskable: false, // Maskable source image(s) for manifest.json. "true" to use default source. More information at https://web.dev/maskable-icon/. `boolean`, `string`, `buffer` or array of `string`
  icons: {
    // Platform Options:
    // - offset - offset in percentage
    // - background:
    //   * false - use default
    //   * true - force use default, e.g. set background for Android icons
    //   * color - set background for the specified icons
    //
    android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
    appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
    appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
    favicons: { background: false }, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
    windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
    yandex: false, // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
  },
};

try {
  clearOldFiles();

  const iconsData = await favicons(source, configuration);

  await fs.mkdir(dest, { recursive: true });

  iconsData.images.map((image) => {
    fs.outputFileSync(path.join(dest, image.name), image.contents);
  });

  iconsData.files.map((file) => {
    fs.outputFileSync(path.join(dest, file.name), file.contents);
  });

  fs.outputFileSync(htmlFilePath, iconsData.html.join("\n"));
} catch (error) {
  console.log(error.message);
}

async function clearOldFiles() {
  fs.readdirSync(dest).forEach((file) => {
    if (isIconImageFile(file)) fs.removeSync(path.join(dest, file));
  });
  fs.removeSync(path.join(dest, "manifest.webmanifest"));
  fs.removeSync(path.join(dest, "browserconfig.xml"));
  fs.removeSync(htmlFilePath);
}

function isIconImageFile(name) {
  const starts = ["android-chrome", "apple-touch", "mstile", "favicon"];
  if (/\.(png|ico)$/.test(name)) {
    return starts.some((item) => name.startsWith(item));
  }
  return false;
}
