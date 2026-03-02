import urllib.request
import os

reqs = {
    'logo_upyouth.png': 'https://www.google.com/s2/favicons?domain=upyouth.org&sz=128',
    'logo_sunworld.png': 'https://www.google.com/s2/favicons?domain=sunworld.vn&sz=128',
    'logo_base.png': 'https://www.google.com/s2/favicons?domain=base.vn&sz=128',
    'logo_conan.png': 'https://www.google.com/s2/favicons?domain=conan.school&sz=128',
    'logo_the1ight.png': 'https://www.google.com/s2/favicons?domain=the1ight.com&sz=128'
}

for filename, url in reqs.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(filename, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
            print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed {filename}: {e}")
