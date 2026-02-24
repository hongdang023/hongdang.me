from PIL import Image
import sys

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    # The background is a solid blueish color. Let's sample the top-left pixel.
    bg_color = pixels[0, 0]
    
    # Simple color distance for tolerance
    def color_dist(c1, c2):
        return sum((a - b) ** 2 for a, b in zip(c1[:3], c2[:3])) ** 0.5
        
    tolerance = 80
    
    # We will do a flood fill from the borders to find contiguous background pixels
    to_visit = []
    
    # Add top and bottom border
    for x in range(width):
        to_visit.append((x, 0))
        to_visit.append((x, height - 1))
    
    # Add left and right border
    for y in range(height):
        to_visit.append((0, y))
        to_visit.append((width - 1, y))
        
    visited = set(to_visit)
    
    while to_visit:
        x, y = to_visit.pop()
        
        if color_dist(pixels[x, y], bg_color) <= tolerance:
            pixels[x, y] = (0, 0, 0, 0)
            
            # Add neighbors
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    to_visit.append((nx, ny))

    img.save(output_path, "PNG")

remove_background("hong_photo.png", "hong_photo_nobg.png")
