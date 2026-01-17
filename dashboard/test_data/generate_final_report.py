import json
filepath = r'c:\Users\prince_nayakpara\Desktop\B.E\Study\My-Study-Space\dashboard\test_data\c_language.json'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
units = data.get('units', [])
report = []
for i, unit in enumerate(units):
    name = unit.get('unit_name')
    mcqs = unit.get('mcqs', [])
    report.append(f"UNIT {i+1}: {name} -> {len(mcqs)} MCQs")

with open(r'c:\Users\prince_nayakpara\Desktop\B.E\Study\My-Study-Space\dashboard\test_data\final_report.txt', 'w', encoding='utf-8') as f:
    f.write("\n".join(report))
print("Report generated.")
