import lxml.etree as ET
import glob

files = glob.glob('*xml')
for file in files:
    tree = ET.parse(file)
    for element in tree.getiterator():
        print(element.tag)
        element.tag = ET.QName(element).localname
    ET.cleanup_namespaces(tree)
    with ET.xmlfile('include/' + file, encoding='utf-8') as xf:
        xf.write(tree.getroot(), pretty_print=True)

