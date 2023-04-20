// az deployment group create --resource-group <azure group> --subscription <azure subscription> --template-file main.bicep --parameters paramsDev.json --name <DeploymentName>
@secure() // A function to mark a Bicep variable or parameter as sensitive or secure.
param tags object
param environmentName string
param staticWebAppSku object
param location string = resourceGroup().location

var abbrs = loadJsonContent('./abbreviations.json')

var base = 'learnnx-${environmentName}'
var keyVaultName = '${abbrs.keyVaultVaults}-${base}'
// trigger yml3
module keyVault './core/keyVaultCore.bicep' = {
  name: keyVaultName
  params: {
    name: keyVaultName
    location: location
    tags: tags
  }
}

// Setup the hosting plan for apps - this is a free plan
var hostingPlanName = '${abbrs.webServerFarms}-${base}'
resource hostingPlan 'Microsoft.Web/serverfarms@2021-03-01' = {
  name: hostingPlanName
  location: location
  sku: {
    name: 'F1'
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

var storybookServiceName = 'stapp-${base}-storybook-${environmentName}'
// If environment is dev or test, deploy the storybook.
module storybookWeb './core/staticwebappCore.bicep' = if (environmentName == 'dev' || environmentName == 'test') {
  name: storybookServiceName
  params: {
    staticSiteName: storybookServiceName
    tags: tags
    location: 'westus2'
    staticWebAppSku: staticWebAppSku
  }
}
