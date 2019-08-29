module.exports = {
  "title": "optolith.app",
  "name": "optolith.app",
  "description": "Web service infrastructure for the Optolith Character Generator",
  "defaultLocale": "de",
  "locales": [
    {
      "code": "de",
      "iso": "de-DE",
      "name": "Deutsch",
      "file": "de.json"
    },
    { code: 'en', iso: 'en-US', name: 'English' },
  ],
  "content": {
    "frontMatterFormat": "json",
    "systems": ['api', 'update']
    
  },
  notifications: {
    support: {
      en: "https://github.com/elyukai/optolith-client",
      es: "https://github.com/elyukai/optolith-client"
    }
  }
}