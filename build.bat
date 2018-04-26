:TOP
IF "%~1"=="" (
    ECHO.
    ECHO ERROR:
    ECHO YOU MUST SUPPLY A GIT COMMIT MESSAGE
    ECHO.
) ELSE (
    call gulp
    call git add . -A
    git commit -m %1
    git push origin master
)
