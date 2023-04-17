// @minLength and @maxLength are used to validate the length of a string value in a Bicep parameter or variable
@minLength(2)
@maxLength(60)
param name string
param location string = resourceGroup().location
param tags object

// Azure Team Object id. 
// Allow this team/user to access this keyvault
var AzureAdObjId = '683ceeb5-9b9c-4a19-b783-819091a4ae53'

resource keyVault 'Microsoft.KeyVault/vaults@2022-07-01' = {
  name: name
  location: location
  tags: tags
  properties: {
    tenantId: subscription().tenantId
    sku: {
      family: 'A'
      name: 'standard'
    }
    accessPolicies:[
      {
        objectId: AzureAdObjId
        tenantId: subscription().tenantId
        permissions: {
          keys: [
            'get'
            'list'
            'update'
            'create'
            'import'
            'delete'
            'recover'
            'backup'
            'restore'
          ]
          secrets: [
            'get'
            'list'
            'set'
            'delete'
            'recover'
            'backup'
            'restore'
          ]
          certificates: [
            'get'
            'list'
            'update'
            'create'
            'import'
            'delete'
            'recover'
            'backup'
            'restore'
            'managecontacts'
            'manageissuers'
            'getissuers'
            'listissuers'
            'setissuers'
            'deleteissuers'
          ]
        }
      }
    ] 
    enabledForDeployment: false
    enabledForDiskEncryption: false
    enabledForTemplateDeployment: true
    enableSoftDelete: true
  }
}

output resourceId string = keyVault.id
