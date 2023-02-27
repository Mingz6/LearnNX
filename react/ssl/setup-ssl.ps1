if (Get-Module -ListAvailable -Name PSPKI) {
    Write-Host "PSPKI Installed"
} 
else {
    try {
        Write-Host "PSPKI Not Installed. Installing..."
        Install-Module PSPKI -Scope CurrentUser -Confirm:$false -Force
        Write-Host "PSPKI Installed"
    }
    catch [Exception] {
        $_.message 
        exit
    }
}

Import-Module PSPKI

$cert = @(Get-ChildItem cert:\LocalMachine\My | Where-Object { $_.Subject -eq "CN=localhost" })[0]
if ($cert -eq $null) {
    Write-Host "IIS Express Development Certificate is missing. Run the CollegeConnect.Web.Host project within Visual Studio to set it up."
    exit
}
Convert-PfxToPem -Certificate $cert -OutputFile ($pwd.ToString() + "\ssl.pem")

(Get-Content ($pwd.ToString() + "\ssl.pem") -Raw) -match "(?ms)(\s*((?<privatekey>-----BEGIN PRIVATE KEY-----(?s).+?-----END PRIVATE KEY-----)|(?<certificate>-----BEGIN CERTIFICATE-----(?s).+?-----END CERTIFICATE-----))\s*){2}"

$Matches["privatekey"] | Set-Content ($pwd.ToString() + "\ssl-key.pem")
$Matches["certificate"] | Set-Content ($pwd.ToString() + "\ssl-cert.pem")