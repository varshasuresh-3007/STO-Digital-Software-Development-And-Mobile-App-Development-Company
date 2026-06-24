import sys
from PIL import Image

def remove_background(input_path, output_path):
    print(f"Removing background from {input_path} and writing to {output_path}")
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    width, height = img.size
    
    # Load pixels as an array for faster manipulation
    pixels = img.load()
    
    # Bounding box coordinates
    min_x, min_y = width, height
    max_x, max_y = 0, 0
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # If it's near-white, make it transparent
            if r > 240 and g > 240 and b > 240:
                pixels[x, y] = (0, 0, 0, 0)
            else:
                # Update bounding box of non-white pixels
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y
                
    # If a valid bounding box was found, crop the image
    if max_x >= min_x and max_y >= min_y:
        # Add 10px padding for safety
        min_x = max(0, min_x - 10)
        min_y = max(0, min_y - 10)
        max_x = min(width, max_x + 10)
        max_y = min(height, max_y + 10)
        
        cropped_img = img.crop((min_x, min_y, max_x, max_y))
        cropped_img.save(output_path, "PNG")
        print(f"Background removed. Cropped to bounding box: {(min_x, min_y, max_x, max_y)}")
    else:
        img.save(output_path, "PNG")
        print("No bounding box found, saved full transparent image.")

if __name__ == "__main__":
    if len(sys.argv) > 2:
        remove_background(sys.argv[1], sys.argv[2])
    else:
        remove_background(
            "/Users/renoroy/Desktop/into in 2/public/sto-digital-logo-pdf.png",
            "/Users/renoroy/Desktop/into in 2/public/debug/img/sto-logo-new.png"
        )
