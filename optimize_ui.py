import os
import re
import glob

components_dir = r'd:\Project\Office\Revive\components'
tsx_files = glob.glob(os.path.join(components_dir, '**', '*.tsx'), recursive=True)

for file_path in tsx_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    # 1. Expand max-w-7xl and adjust common paddings
    new_content = new_content.replace('max-w-7xl mx-auto px-6 md:px-12', 'max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16')
    new_content = new_content.replace('max-w-7xl mx-auto px-4 md:px-8', 'max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 2xl:px-12')
    # 2. General max-w-7xl to max-w-[1600px]
    new_content = new_content.replace('max-w-7xl', 'max-w-[1600px]')
    # 3. Expand max-w-6xl
    new_content = new_content.replace('max-w-6xl', 'max-w-[1440px]')
    # 4. Expand max-w-5xl
    new_content = new_content.replace('max-w-5xl', 'max-w-7xl')
    
    # 5. Enhance AnimatedSectionTitle typography for 2xl screens
    # In AnimatedSectionTitle.tsx specifically:
    if 'AnimatedSectionTitle' in file_path:
        new_content = new_content.replace('text-3xl md:text-5xl lg:text-6xl', 'text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl')

    # 6. Hero typographies 
    if 'Hero.tsx' in file_path or 'TreatmentsHero.tsx' in file_path or 'AboutHero.tsx' in file_path:
        new_content = new_content.replace('lg:text-7xl', 'lg:text-7xl 2xl:text-[5.5rem]')
        new_content = new_content.replace('text-4xl md:text-5xl lg:text-6xl', 'text-4xl md:text-6xl lg:text-7xl 2xl:text-[5.5rem]')

    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {file_path}")
