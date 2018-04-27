:TOP
IF "%~1"=="" (
   call :ERROR
) ELSE (
    call :BUILD %1
)

:ERROR
ECHO ERROR:   YOU MUST SUPPLY A GIT COMMIT MESSAGE
EXIT /B 0

:BUILD
call gulp
call git add . -A
call git commit -m "%~1"
call git push origin master
EXIT /B 0
