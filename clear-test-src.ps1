# PowerShell script to clear and recreate the test src folder for Svelte Artisan

$src = "src"

# Remove all files and subfolders in src (but not src itself)
if (Test-Path $src) {
    Get-ChildItem -Path $src -Force | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
}

# Recreate the src folder if it does not exist
if (-not (Test-Path $src)) {
    New-Item -ItemType Directory -Path $src | Out-Null
}

Write-Host "Test src folder cleared and ensured: $src" -ForegroundColor Green
