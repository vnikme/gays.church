#!/bin/bash

echo "Building gays.church website..."
echo ""

# Compile SCSS to regular CSS
echo "Compiling SCSS to CSS..."
sass public/scss/style.scss public/css/style.css --no-source-map 2>&1 | grep -E "(Error|Successfully compiled)"

# Compile SCSS to minified CSS
echo "Compiling SCSS to minified CSS..."
sass public/scss/style.scss public/css/style.min.css --style=compressed --no-source-map 2>&1 | grep -E "(Error|Successfully compiled)"

echo ""
echo "Build complete!"
echo "Files generated:"
ls -lh public/css/style*.css
