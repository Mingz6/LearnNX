param ($resourceGroup, $parametersFileName) # Target Resource Group name, FIlename for template parameters

az deployment group create --resource-group $resourceGroup --subscription "CRNA - CSP" --template-file ./main.bicep --parameters $parametersFileName --name ($resourceGroup + (Get-Date -Format "MMM-dd-yyyy.hh.mm.tt"))