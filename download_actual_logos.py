import urllib.request
import os

reqs = {
    'logo_upyouth_real.png': 'https://images.squarespace-cdn.com/content/v1/64ccaddfbe79ee42b036924b/d4b38d38-2d83-4a09-9b93-b6d3caaff9ce/UpYouth+Black+Logo.png',
    'logo_sunworld_real.png': 'https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-Sun-Group-V.png',
    'logo_base_real.png': 'https://theme.hstatic.net/1000288298/1001020300/14/base-logo.png?v=95',
    'logo_conan_real.png': 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,fit=crop,q=95/mp8P4xKy5vINo6E9/black-dOqaZbyLL0hwB7Dq.png',
    'logo_the1ight_real.png': 'https://shop.the1ight.com/wp-content/uploads/2021/03/Logo-the1ight-Dark-background.png'
}

for filename, url in reqs.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req) as response, open(filename, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
            print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed {filename}: {e}")
