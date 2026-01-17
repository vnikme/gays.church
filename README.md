# gays.church

Supporting and restoring historic churches in rural Russia through transparent blockchain-based donations.

## About

Inspired by [Lesbians and Gays Support the Miners](https://en.wikipedia.org/wiki/Lesbians_and_Gays_Support_the_Miners), we unite people from diverse backgrounds to preserve Russia's architectural and spiritual heritage. We use blockchain technology to ensure complete transparency in all donations and transfers.

## Current Project

**Church of the Assumption** - Zakobyakino Village, Russia

- Location: [58.1018446, 40.723713](https://maps.google.com/?q=58.1018446,40.723713)
- Donation Fund: [gayschurch.eth](https://etherscan.io/name-lookup-search?id=gayschurch.eth)

## Technology Stack

- **Frontend**: HTML5, Modern CSS (compiled from SCSS)
- **Languages**: English (default) and Russian versions
- **Styling**: Custom dark theme with responsive design
- **JavaScript**: jQuery, AOS (Animate On Scroll)
- **Icons**: Material Design Icons
- **Blockchain**: Ethereum (donations via USDT recommended)

## Languages

The website is available in two languages:

- **English**: `index.html` (default)
- **Russian**: `ru.html`

Language switcher is available in the navigation menu.

## Development

### Prerequisites

- Sass compiler
- Node.js (optional, for development server)

### Building

To compile SCSS to CSS:

```bash
./build.sh
```

Or manually:

```bash
# Regular CSS
sass public/scss/style.scss public/css/style.css --no-source-map

# Minified CSS
sass public/scss/style.scss public/css/style.min.css --style=compressed --no-source-map
```

### Project Structure

```
gays.church/
├── public/
│   ├── css/
│   │   ├── style.css
│   │   └── style.min.css
│   ├── scss/
│   │   ├── style.scss          # Main SCSS file
│   │   ├── _variables.scss     # Color palette and theme
│   │   ├── _typography.scss    # Fonts and text styles
│   │   ├── _navbar.scss        # Navigation bar
│   │   ├── _content.scss       # Main content sections
│   │   ├── _utilities.scss     # Utility classes
│   │   └── components/
│   │       ├── _buttons.scss
│   │       └── _cards.scss
│   ├── js/
│   │   └── landingpage.js      # Main JavaScript
│   ├── images/
│   │   └── flag.png            # Logo
│   ├── vendors/
│   │   ├── aos/               # Animate On Scroll
│   │   ├── bootstrap/         # Bootstrap JS & SCSS
│   │   ├── jquery/            # jQuery
│   │   └── mdi/               # Material Design Icons
│   ├── index.html             # English version
│   └── ru.html                # Russian version
├── firebase.json
├── build.sh
└── README.md
```

## Design

The website features a modern dark theme with:

- Deep blue/purple gradient backgrounds
- Responsive grid layouts
- Smooth animations and transitions
- Glass morphism effects
- Mobile-first responsive design

### Color Palette

- Background: `#0a0e27` (Dark blue)
- Secondary: `#1a1f3a` (Lighter blue)
- Primary Accent: `#3b82f6` (Blue)
- Secondary Accent: `#06b6d4` (Cyan)
- Text: `#e0e0e0` (Light gray)

## Deployment

The site is configured for Firebase Hosting. Deploy with:

```bash
firebase deploy
```

## Transparency

All donations are publicly visible on the Ethereum blockchain. We maintain complete transparency in:

- Donation collection
- Fund transfers to churches
- Project progress reports

## License

Copyright © 2023-2026 gays.church. All rights reserved.

## Contact

- Donation Fund: [gayschurch.eth](https://etherscan.io/name-lookup-search?id=gayschurch.eth)
- Ethereum Network: View all transactions on [Etherscan](https://etherscan.io/name-lookup-search?id=gayschurch.eth)
