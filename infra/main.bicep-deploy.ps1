# .\main.bicep-deploy.ps1 development-ming paramsDev.json

# Target Resource Group name, FIlename for template parameters
param ($resourceGroup, $parametersFileName) 

az deployment group create --resource-group $resourceGroup --subscription "CRNA - CSP" --template-file ./main.bicep --parameters $parametersFileName --name ($resourceGroup + "-" + (Get-Date -Format "MMM-dd-yyyy.hh.mm.tt"))

# Delete a resource if fail. E.g. Static Web App
# az resource delete --resource-group development-ming --name stapp-learnnx-dev --resource-type "Microsoft.Web/staticSites" --verbose
