# Bright Future Youth Centre Website

A multi-page website for a non-profit youth centre. Built with HTML5, CSS3 (Grid,
Flexbox, custom properties) and vanilla JavaScript.

All pages share one stylesheet (`css/style.css`) so the Part 2 design (green/amber
colour scheme, type scale, spacing, shadows) is consistent across the whole site,
including the Part 3 pages (gallery, forms, map, accordion).



## Pages
- `index.html` - Home
- `about.html` - About Us (+ FAQ accordion)
- `services.html` - Programmes (dynamically loaded + searchable)
- `gallery.html` - Photo gallery with lightbox
- `enquiry.html` - Volunteer/sponsor enquiry form with validation
- `contact.html` - Branch info, interactive map, message form

## Changelog

### 2026-10-29 - Part 3 edits
| Change | Reason |
|--------|--------|
| Added `alt` text to all images | Part 2 feedback: accessibility & SEO |
| Added FAQ accordion on about.html | Part 3 requirement 2.1 (interactive elements) |
| Added Leaflet interactive map on contact.html | Part 3 requirement 2.1 (location-based features) |
| Added scroll-reveal animations + lightbox gallery | Part 3 requirement 2.1 (animations, gallery/lightbox) |
| Replaced static cards with JS-rendered, searchable list on services.html | Part 3 requirement 2.2 (dynamic content, search) |
| Added client-side validation + AJAX to both forms | Part 3 requirement 4 (form functionality & validation) |
| Added meta descriptions, JSON-LD, robots.txt, sitemap.xml | Part 3 requirement 3 (SEO) |
| Deployed to Netlify with HTTPS | Part 3 requirement (submission & publishing) |

### Part 2 feedback edits

| Change | Reason |
|--------|--------|
| Fixed nav overlap on screens under 480px | Part 2 feedback: mobile layout broke at small widths |

## References
- MDN Web Docs - https://developer.mozilla.org
- Leaflet.js documentation - https://leafletjs.com
- jsonplaceholder.typicode.com - test API for AJAX form submission
- OpenStreetMap tile layer - https://www.openstreetmap.org
- Schema.org LocalBusiness/NGO structured data - https://schema.org
- W3Schools HTML forms & validation - https://www.w3schools.com


## Styling update
The shared `css/style.css` now uses the green-and-orange reference design, responsive navigation, hero banner, cards, forms, and mobile layouts. Core pages missing from the supplied ZIP (index, about, services, contact) were added as starter pages. Check all wording, contact details, and links before submission.
