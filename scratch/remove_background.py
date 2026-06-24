import sys
from PIL import Image

def process_logo(input_path, output_path):
    print(f"Processing {input_path} -> {output_path}")
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    # Let's find the bounding box of non-white pixels
    width, height = img.size
    min_x, min_y = width, height
    max_x, max_y = 0, 0
    
    new_data = []
    for y in range(height):
        for x in range(width):
            pixel = datas[y * width + x]
            # check if pixel is near white
            if pixel[0] > 240 and pixel[1] > 240 and pixel[2] > 240:
                # Make it transparent
                new_data.append((0, 0, 0, 0))
            else:
                # Update bounding box
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y
                new_data.append(pixel)
                
    img.putdata(new_data)
    
    # If a valid bounding box was found, crop the image to it
    if max_x >= min_x and max_y >= min_y:
        # Add 5px padding if possible
        min_x = max(0, min_x - 5)
        min_y = max(0, min_y - 5)
        max_x = min(width, max_x + 5)
        max_y = min(height, max_y + 5)
        
        cropped_img = img.crop((min_x, min_y, max_x, max_y))
        cropped_img.save(output_path, "PNG")
        print(f"Successfully cropped and saved to {output_path}. Bbox: {(min_x, min_y, max_x, max_y)}")
    else:
        img.save(output_path, "PNG")
        print(f"No bounding box found, saved full image to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) > 2:
        process_logo(sys.argv[1], sys.argv[2])
    else:
        # Default run
        process_logo("/Users/renoroy/Desktop/into in 2/public/sto-digital-logo-pdf.png", "/Users/renoroy/Desktop/into in 2/public/debug/img/sto-logo.png")
