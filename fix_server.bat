@echo off
echo ===================================================
echo HALLWAY RELOAD SCRIPT (Fixes the Green Theme Issue)
echo ===================================================
echo.
echo Stopping all running Next.js servers...
taskkill /F /IM node.exe >nul 2>&1
echo Done.
echo.
echo Deleting stale Turbopack cache (.next folder)...
rmdir /s /q .next >nul 2>&1
echo Done.
echo.
echo Please run: npm run dev
echo And wait 5-10 seconds before checking localhost:3000!
echo.
pause
