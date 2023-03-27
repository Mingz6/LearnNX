@secure() // A function to mark a Bicep variable or parameter as sensitive or secure.
param tags object
param environmentName string
param staticWebAppSku object
param location string = resourceGroup().location

var abbrs = loadJsonContent('./abbreviations.json')

var base = 'ming-learnnx-${environmentName}'
var keyVaultName = '${abbrs.keyVaultVaults}-${base}'

module keyVault './core/keyVaultCore.bicep' = {
  name: keyVaultName
  params: {
    name: keyVaultName
    location: location
    tags: tags
  }
}

var hostingPlanName = '${abbrs.webServerFarms}-${base}'
resource hostingPlan 'Microsoft.Web/serverfarms@2021-03-01' = {
  name: hostingPlanName
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {}
}

var serviceName = '${abbrs.webStaticSites}-${base}'
module web './core/staticwebappCore.bicep' = {
  name: serviceName
  params: {
    staticSiteName: serviceName
    tags: tags
    // static web apps are currently only avalible in 
    // limited locations
    location: 'westus2'
    staticWebAppSku: staticWebAppSku
  }
}
