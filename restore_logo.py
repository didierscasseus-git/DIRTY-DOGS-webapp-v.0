from PIL import Image
import os

def process_logo(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert('RGBA')
        
        # Make black transparent
        datas = img.getdata()
        newData = []
        for item in datas:
            # If color is black (or very close to it)
            if item[0] < 30 and item[1] < 30 and item[2] < 30:
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
        img.putdata(newData)
        
        # Crop the image to bounding box of content
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        # Ensure output directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        img.save(output_path, "PNG")
        print(f"Success: Processed {input_path} and saved to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo("ASSETS/logot.png", "public/ASSETS/logotransparent_zoomed.png")
