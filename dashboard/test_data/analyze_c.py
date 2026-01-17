import json
import os

filepath = r'c:\Users\prince_nayakpara\Desktop\B.E\Study\My-Study-Space\dashboard\test_data\c_language.json'

try:
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f"Subject: {data.get('subject_name', 'Unknown')}")
    print("-" * 50)
    
    units = data.get('units', [])
    for i, unit in enumerate(units):
        name = unit.get('unit_name', 'No Name')
        mcqs = unit.get('mcqs', [])
        count = len(mcqs)
        print(f"Unit {i+1}: {name}")
        print(f"  MCQ Count: {count}")
        if count < 30:
            print(f"  *** NEEDS {30 - count} MORE MCQS ***")
        print("-" * 30)

except Exception as e:
    print(f"Error: {e}")
