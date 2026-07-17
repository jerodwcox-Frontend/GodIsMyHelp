#!/bin/bash
cd /Users/jerodcox/god-is-my-help
source ~/.nvm/nvm.sh
nvm use 20 > /dev/null
exec npm run dev -- --port 5180 --strictPort
