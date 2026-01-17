import json
filepath = r'c:\Users\prince_nayakpara\Desktop\B.E\Study\My-Study-Space\dashboard\test_data\c_language.json'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
units = data.get('units', [])
print(f"Total Units: {len(units)}")
for i, unit in enumerate(units):
    name = unit.get('unit_name')
    mcqs = unit.get('mcqs', [])
    print(f"UNIT {i+1}: {name} -> {len(mcqs)} MCQs")
