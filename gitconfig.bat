FOR /f "tokens=2*delims= " %%b IN ('NET USER %username% /DOMAIN 2^>nul ^|find /I "Full name"') DO SET "DN=%%c"
ECHO Full name : "%DN%"
git config --global user.name "%DN%"
git config --global user.email "%USERNAME%@castleton.edu"
git config --global --add safe.directory *