import os
import shutil

dpath = os.path.join(os.path.expanduser("~"),"Desktop")

#File categories
ftypes = {"Images": [".png",".jpg",".jpeg", ".gif"],
     "Documents": [".pdf", ".docx",".txt",".xlsx"],
     "Videos": [".mp4",".mov",".avi"],
     "Music": [".mp3",".wav"],
     "Archives":[".zip",".rar"]}

for file in os.listdir(dpath):
    fpath = os.path.join(dpath,file)

    #Skip folders
    if os.path.isdir(fpath):
        continue

    _, ext = os.path.splitext(file)

    for fldr, ex in ftypes.items():
        if ext.lower() in ex:
            fldr_path = os.path.join(dpath, fldr)

            os.makedirs(fldr_path, exist_ok=True)

            os.remove(fpath)
            print(f"Deleted {file}")
            break
print("Desktop cleanup complete!")
