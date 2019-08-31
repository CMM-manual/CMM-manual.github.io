module.exports = {
  title: "CEU Mass Mediator",
  description: 'Documentation',
  serviceWorker: true,
  themeConfig: {
    nav: require('./nav/en'),
    sidebar: {
      '/introduction/': getIntroductionSidebar(),
      '/peak-search/': getPeakSearchSidebar(),
      '/browse-search/': getBrowseSearchSidebar(),
      '/oxidised-lipids/': getOxidisedLipidsSidebar(),
      '/spectra-quality-controller/': getSpectraQualityControllerSidebar(),
      '/pathway-displayer/': getPathwayDisplayerSidebar(),
      '/msms-search/': getMsmsSearchSidebar(),
      // '/lcms-search-grouped-by-rt/': getLcmsSearchSidebar(),
      '/restful-api/': getRestfulApiSidebar(),
      '/r-library/': getRLibrarySidebar(),
    },
  },
  markdown: {
    lineNumbers: true
  }
}

function getIntroductionSidebar () {
  return [
    '',
    'system-requirements'
  ]
}

function getPeakSearchSidebar () {
  return [
    '',
    'composite-spectrum',
    'adducts',
    'simple-search',
    'advanced-search',
    'batch-search',
    'batch-advanced-search',
    'annotations-rules',
    'submit-menu',
    'result-list',
  ]
}

function getBrowseSearchSidebar () {
  return [
    '',
    'regular-expressions',
    'escape-characters',
    'browse-search-results',
  ]
}

function getOxidisedLipidsSidebar () {
  return [
    '',
    'long-chain-oxidised-lipids',
    'short-chain-oxidised-lipids',
  ]
}

function getSpectraQualityControllerSidebar () {
  return [
    '',
    'partial-scores',
    'overall-score',
  ]
}

function getPathwayDisplayerSidebar () {
  return [
    '',
    'file-structure',
    'result-list-for-pathways',
  ]
}

function getMsmsSearchSidebar () {
  return [
    '',
    'results-msms-search'
  ]
}
/*
function getLcmsSearchSidebar () {
  return [
    '',
    'result-lcms-search'
  ]
}
*/
function getRestfulApiSidebar () {
  return [
    '',
    'batch-search',
    'batch-advanced-search',
    'browse-search',
    'msms-search',
    'long-chain-oxidation-search',
    'short-chain-oxidation-search',
    'spectral-quality-controller',
    'pathway-displayer',
  ]
}
function getRLibrarySidebar () {
  return [
    '',
    'installation',
    'example',
  ]
}
