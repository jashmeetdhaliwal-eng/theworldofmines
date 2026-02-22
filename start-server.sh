#!/bin/bash
# Start the website server

echo "================================"
echo "The World of Mines - Web Server"
echo "================================"
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    PORT=${1:-8000}
    echo "Starting Python server on http://localhost:$PORT"
    echo "Press Ctrl+C to stop"
    echo ""
    python3 -m http.server $PORT
else
    echo "Error: Python 3 not found"
    echo ""
    echo "Please install Python 3 or use:"
    echo "  npx http-server"
    exit 1
fi
