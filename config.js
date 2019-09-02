module.exports = {
  "title": "optolith.app",
  "name": "optolith.app",
  "description": "Web service infrastructure for the Optolith Character Generator",
  "defaultLocale": "en",
  "locales": [
    { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.json' },
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.json'  },
    { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json'  },
    { code: 'nl', iso: 'nl-NL', name: 'Nederlands', file: 'nl.json'  },
    { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json'  }
  ],
  "content": {
    "frontMatterFormat": "json",
    "systems": ['api', 'update']
    
  },
  notifications: {
    support: {
      de: "https://www.ulisses-ebooks.de/product/209711/Optolith-Heldenverwaltung",
      en: "http://www.drivethrurpg.com/product/220253"
    }
  }
}