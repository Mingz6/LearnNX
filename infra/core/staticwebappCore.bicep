@minLength(2)
@maxLength(60)
param staticSiteName string
param tags object
@allowed([
  {
    name: 'Free'
    tier: 'Free'
  }
  {
    name: 'Standard'
    tier: 'Standard'
  }
])
param staticWebAppSku object
param location string

resource staticSite 'Microsoft.Web/staticSites@2022-03-01' = {
  name: staticSiteName
  location: location
  tags: tags
  sku: staticWebAppSku
  properties: {}
}

output name string = staticSite.name
output uri string = 'https://${staticSite.properties.defaultHostname}'
