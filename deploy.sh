#!/usr/bin/env bash

cd dashboard
yarn build
echo "|^^^^^^|^^^^^| Generating minified file for UI (admin)"
cd ..

mvn clean package
echo "|^^^^^^|^^^^^| Generating war file"
echo "The application admin (Fileserver + Dashboard) is READY to be deployed."
