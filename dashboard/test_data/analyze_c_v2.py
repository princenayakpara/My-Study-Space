import json
filepath = r'c:\Users\prince_nayakpara\Desktop\B.E\Study\My-Study-Space\dashboard\test_data\c_language.json'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
for i, unit in enumerate(data.get('units', [])):
    mcqs = unit.get('mcqs', [])
    if len(mcqs) < 30:
        print(f"U{i+1}: {unit.get('unit_name')} - {len(mcqs)} MCQs (Need {30-len(mcqs)})")
    else:
        print(f"U{i+1}: {unit.get('unit_name')} - {len(mcqs)} MCQs (OK)")
