import os
import re

def main():
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico'}
    search_extensions = {'.tsx', '.ts', '.js', '.jsx', '.css'}
    
    root_dir = os.getcwd()
    assets_dirs = [os.path.join(root_dir, 'src', 'assets'), os.path.join(root_dir, 'public')]
    src_dir = os.path.join(root_dir, 'src')
    
    # 1. Collect all images
    images = []
    for d in assets_dirs:
        if not os.path.exists(d):
            continue
        for root, dirs, files in os.walk(d):
            if 'node_modules' in dirs: dirs.remove('node_modules')
            if '.next' in dirs: dirs.remove('.next')
            for f in files:
                if os.path.splitext(f)[1].lower() in image_extensions:
                    full_path = os.path.join(root, f)
                    rel_path = os.path.relpath(full_path, root_dir)
                    images.append({'name': f, 'rel_path': rel_path, 'full_path': full_path})
    
    if not images:
        print("No images found.")
        return

    # 2. Collect all source files
    source_files = []
    for root, dirs, files in os.walk(src_dir):
        if 'node_modules' in dirs: dirs.remove('node_modules')
        if '.next' in dirs: dirs.remove('.next')
        for f in files:
            if os.path.splitext(f)[1].lower() in search_extensions:
                source_files.append(os.path.join(root, f))
    
    # 3. Read content of all source files once (memory permitting, but let's assume it's okay)
    # If it's too much, we can do it per image, but this is usually faster.
    all_content = ""
    for sf in source_files:
        try:
            with open(sf, 'r', encoding='utf-8', errors='ignore') as f:
                all_content += f.read() + "\n"
        except Exception:
            pass

    # 4. Check for each image if it's used
    unused_images = []
    for img in images:
        # Check for filename in content. 
        # Sometimes images are referenced without extension in imports, 
        # but usually for assets it's full filename or part of it.
        # We'll check for the exact filename first.
        name = img['name']
        if name not in all_content:
            unused_images.append(img)
            
    # 5. Write results
    with open('unused-images.md', 'w', encoding='utf-8') as f:
        f.write("# Unused Images Report\n\n")
        f.write("| Image Name | Path |\n")
        f.write("| --- | --- |\n")
        for img in unused_images:
            f.write(f"| {img['name']} | {img['rel_path']} |\n")
            
    print(f"Found {len(unused_images)} unused images out of {len(images)}.")

if __name__ == "__main__":
    main()
