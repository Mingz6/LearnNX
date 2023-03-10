@secure() // A function to mark a Bicep variable or parameter as sensitive or secure.
param tags object
param environmentName string
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
