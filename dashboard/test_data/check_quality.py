import json

filepath = r'c:\Users\prince_nayakpara\Desktop\B.E\Study\My-Study-Space\dashboard\test_data\c_language.json'

with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

units = data.get('units', [])
print(f"{'Unit':<40} | {'Total':<6} | {'Real':<6} | {'Placeholder':<11}")
print("-" * 75)

for i, unit in enumerate(units):
    name = unit.get('unit_name')
    mcqs = unit.get('mcqs', [])
    total = len(mcqs)
    
    # Simple heuristic for placeholders based on the pattern I saw
    placeholders = [q for q in mcqs if "Identify the correct statement about" in q.get('question', '')]
    placeholder_count = len(placeholders)
    real_count = total - placeholder_count
    
    print(f"{name[:40]:<40} | {total:<6} | {real_count:<6} | {placeholder_count:<11}")

print("-" * 75)
