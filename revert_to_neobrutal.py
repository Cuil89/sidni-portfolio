import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Common glassmorphism classes to remove
    glass_classes = [
        r'backdrop-blur-md',
        r'backdrop-blur-lg',
        r'backdrop-blur-sm',
        r'bg-white/5',
        r'bg-white/10',
        r'bg-white/20',
        r'bg-indigo-500/10',
        r'bg-cyan-500/10',
        r'bg-blue-500/10',
        r'border-white/10',
        r'border-white/5',
        r'shadow-black/20',
        r'shadow-cyan-500/20'
    ]
    
    for cls in glass_classes:
        content = re.sub(r'\b' + cls + r'\b', '', content)
        
    # Replace soft shadows and borders with neo-brutal ones
    content = re.sub(r'\bshadow-md\b', 'shadow-brutalSm', content)
    content = re.sub(r'\bshadow-xl\b', 'shadow-brutal', content)
    content = re.sub(r'\bshadow-2xl\b', 'shadow-brutalLg', content)
    
    # Enforce thick borders
    content = re.sub(r'\bborder\b(?!-)', 'border-2 border-[var(--border-color)]', content)
    
    # Enforce strong background for small cards/badges if they lost their background
    # Since we removed bg-white/5, we should put bg-[var(--card-bg)]
    # but only on elements that have rounded corners
    content = re.sub(r'rounded-(xl|lg|2xl|md)', r'rounded-\1 bg-[var(--card-bg)] text-[var(--fg)]', content)
    
    # Clean up double spaces
    content = re.sub(r'\s{2,}', ' ', content)
    # Fix spacing inside class strings
    content = re.sub(r'className="\s+', 'className="', content)
    content = re.sub(r'\s+"', '"', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

component_dir = r"d:\projectcarikarir\sidni-portfolio\src\components"
for root, dirs, files in os.walk(component_dir):
    for file in files:
        if file.endswith('.jsx'):
            process_file(os.path.join(root, file))

print("Reverted to Neo-Brutalism complete.")
