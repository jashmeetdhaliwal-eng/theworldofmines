#!/usr/bin/env python3
"""
Setup script for The World of Mines website
Downloads sample mining industry images for the website
"""

import os
import sys
from datetime import datetime

def create_placeholder_images():
    """Create placeholder images using PIL if available"""
    try:
        from PIL import Image, ImageDraw, ImageFont
        print("Creating placeholder images...")
        
        # Create background image
        img_bg = Image.new('RGB', (1920, 1080), color='#4a4a4a')
        draw = ImageDraw.Draw(img_bg)
        draw.text((100, 500), "Mining Site Background", fill='white')
        img_bg.save('background.jpg')
        print("✓ Created background.jpg")
        
        # Create slideshow images
        colors = ['#333333', '#444444', '#555555', '#666666']
        for i in range(1, 5):
            img = Image.new('RGB', (1200, 500), color=colors[i-1])
            draw = ImageDraw.Draw(img)
            draw.text((400, 220), f"Mining Site {i}", fill='white')
            img.save(f'mining{i}.jpg')
            print(f"✓ Created mining{i}.jpg")
            
        print("\nPlaceholder images created successfully!")
        print("Note: These are placeholder images. Replace them with actual mining site photos.")
        
    except ImportError:
        print("PIL not found. Install with: pip install Pillow")
        print("\nAlternatively, you can manually add JPEG images:")
        print("  - background.jpg (1920x1080)")
        print("  - mining1.jpg, mining2.jpg, mining3.jpg, mining4.jpg (1200x500 each)")
        return False
    
    return True

def verify_files():
    """Verify all project files are present"""
    required_files = ['index.html', 'style.css', 'script.js', 'README.md']
    
    print("\nVerifying project files...")
    all_present = True
    
    for file in required_files:
        if os.path.exists(file):
            print(f"✓ {file}")
        else:
            print(f"✗ {file} - MISSING")
            all_present = False
    
    return all_present

def main():
    """Main setup function"""
    print("=" * 50)
    print("The World of Mines - Website Setup")
    print("=" * 50)
    print()
    
    # Check current directory
    if not os.path.exists('index.html'):
        print("Error: Run this script from the website root directory")
        sys.exit(1)
    
    # Verify files
    if not verify_files():
        print("\nWarning: Some files are missing!")
    
    print("\nSetup Instructions:")
    print("-" * 50)
    print()
    print("1. Image Files (Optional)")
    print("   Add these image files to the current directory:")
    print("   - background.jpg (main background image)")
    print("   - mining1.jpg, mining2.jpg, mining3.jpg, mining4.jpg (slideshow)")
    print()
    
    # Offer to create placeholders
    response = input("Create placeholder images? (y/n): ").lower().strip()
    if response == 'y':
        create_placeholder_images()
    
    print()
    print("2. Run the Website")
    print("   Option A - Python HTTP Server:")
    print("   $ python3 -m http.server 8000")
    print()
    print("   Option B - Node.js HTTP Server:")
    print("   $ npx http-server")
    print()
    print("   Then open: http://localhost:8000")
    print()
    
    print("=" * 50)
    print("Setup Complete!")
    print("=" * 50)

if __name__ == '__main__':
    main()
