@echo off
echo Starting Prescripto Medical App...
echo.
echo This will start:
echo - Backend API on http://localhost:4000
echo - Frontend on http://localhost:5173  
echo - Admin Panel on http://localhost:5174
echo.
echo Press Ctrl+C to stop all services
echo.

REM Install concurrently if not already installed
npm install concurrently --save-dev

REM Start all services
npm run dev
