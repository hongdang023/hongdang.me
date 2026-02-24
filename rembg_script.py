import os
from rembg import remove
from PIL import Image

input_path = 'Hong_photo.png'
output_path = 'Hong_photo_nobg.png'

input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)
print("Finished background removal")
