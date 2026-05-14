import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean up duplicate or conflicting bg colors inside className
    # If bg-[var(--card-bg)] or bg-[var(--bg)] is present, remove bg-white, bg-ink etc
    def clean_classes(match):
        class_str = match.group(1)
        words = class_str.split()
        cleaned_words = []
        
        has_theme_bg = any('var(--bg)' in w or 'var(--card-bg)' in w for w in words)
        has_theme_text = any('var(--fg)' in w or 'var(--headline)' in w for w in words)
        
        for w in words:
            # If we already have a theme bg, drop hardcoded basic bgs
            if has_theme_bg and w in ['bg-white', 'bg-ink', 'bg-purpleNight', 'bg-slate-950', 'bg-slate-900', 'bg-bone']:
                continue
            # If we already have theme text, drop hardcoded basic text colors
            if has_theme_text and w in ['text-white', 'text-slate-800', 'text-slate-900', 'text-slate-300', 'text-black', 'text-zinc-800']:
                continue
            
            cleaned_words.append(w)
            
        # De-duplicate remaining identical words
        seen = set()
        final_words = []
        for w in cleaned_words:
            if w not in seen:
                seen.add(w)
                final_words.append(w)
                
        return 'className="' + ' '.join(final_words) + '"'

    content = re.sub(r'className="([^"]*)"', clean_classes, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

component_dir = r"d:\projectcarikarir\sidni-portfolio\src\components"
for root, dirs, files in os.walk(component_dir):
    for file in files:
        if file.endswith('.jsx'):
            process_file(os.path.join(root, file))

print("Cleaned up class strings complete.")
