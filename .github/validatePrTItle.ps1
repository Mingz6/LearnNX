Param(
  [Parameter(Mandatory = $True)]
  [string]$PrTitle,
  [Parameter(Mandatory = $True)]
  [string]$TargetBranch
)

Write-Host -ForegroundColor Yellow "Pull Request Title: $PrTitle"
Write-Host -ForegroundColor Green "The target branch: $TargetBranch"

if (($PrTitle -Match "dev" -And $TargetBranch -Ne "dev") -Or ($PrTitle -Match "test" -And $TargetBranch -Ne "test") -Or ($PrTitle -Match "prod" -And $TargetBranch -Ne "main")) {
  Throw "Your branch name '$PrTitle' does not match the expected target branch $TargetBranch"
}

$Regex="^(demo|bugfix|feature)\s-(?<=-).*(?=-)-\s(dev|test|prod)"

if ($PrTitle -Match $Regex) {
  Write-Host "The PR title complies with conventional PR titles."
}
else {
  Throw "Error : Invalid PR title! Your PR Title must match the format: demo/bugfix/feature - description - dev/test/prod"
}
