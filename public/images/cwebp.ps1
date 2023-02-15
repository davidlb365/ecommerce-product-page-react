# Copy this file to any directory containing images & then run this script in powershell
# Get all png images in the current directory & convert it to webp format
# $images = Get-ChildItem -Path (Get-Location) -Filter *.png, *.jpg
$images = Get-ChildItem -Path (Get-Location) -recurse -force -include *.jpg, *.png
foreach ($image in $images) {
  $fileName = $image.DirectoryName + "\" + $image.BaseName
  cwebp.exe $image.FullName -o ($fileName + ".webp") # -q 80
}
avif --input="**/*.{png,jpg}"  # --quality=X
# $imagespng = Get-ChildItem -Path (Get-Location) -recurse -force -include *.png
# foreach ($image in $imagespng) {
#  	$fileName = $image.DirectoryName + "\" + $image.BaseName
#	magick convert ($fileName + ".png") ($fileName + ".jpg")
# }