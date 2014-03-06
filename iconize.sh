#!/bin/bash

basedir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
imgDir=$basedir/images
echo $imgDir

inFile=$imgDir/logo.png
outFile=$imgDir/favicon.ico

echo -e "Converting \n\t $inFile \n to \n\t $outFile"

#uses ImageMagick to resize logo and conert it to .ico format
convert -resize x16 -gravity center -crop 16x16+0+0 $inFile \
-flatten -colors 256 $outFile


