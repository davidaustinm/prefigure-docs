import glob
import subprocess
files = glob.glob('*svg')

for file in files:
    print(file)
    subprocess.run(['prefig', 'pdf', file])
