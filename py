import re
import sys

def hex_to_str(match):
    val = int(match.group(0), 16)
    # Check if it falls within standard printable character text spaces
    if 32 <= val <= 126:
        return f"'{chr(val)}'"
    return match.group(0)

if len(sys.argv) < 2:
    print("Usage: python3 decode_hex.py <filename>")
    sys.exit(1)

with open(sys.argv[1], 'r') as f:
    content = f.read()

# Automatically scan code text spaces for hexadecimal strings
cleaned = re.sub(r'0x[0-9a-fA-F]+', hex_to_str, content)

with open('unpacked_hex.js', 'w') as f:
    f.write(cleaned)

print("Hex values evaluated. Checked output written to unpacked_hex.js")
