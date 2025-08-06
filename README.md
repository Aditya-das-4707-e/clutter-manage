# Clutter Manage

A simple Node.js script to automatically organize files in a given directory by their file extension.

## Features

- Scans a target directory for files.
- Moves each file into a folder named after its extension (except `.js` and `.json` files).
- Automatically creates folders for new extensions as needed.
- Helps keep your directories neat and organized.

## How It Works

Place your files in the specified directory. When you run the script, it will:

1. Read all files in the given directory (`basepath`).
2. For each file (excluding `.js` and `.json`):
   - Move it into a subfolder named after its file extension.
   - Create the subfolder if it doesn’t already exist.
3. If some files are not moved on the first run, running the script again will solve the problem.

## Usage

1. **Set the Target Directory:**
   - Open `index.js`.
   - Change the `basepath` variable to the path of the directory you want to organize:
     ```js
     const basepath = "/your/target/directory/path";
     ```

2. **Install Node.js (if not already installed):**
   - Download and install from [nodejs.org](https://nodejs.org/).

3. **Run the Script:**
   - Open a terminal.
   - Navigate to this project’s directory.
   - Run the script with:
     ```bash
     node index.js
     ```

## Example

Suppose your directory contains:
```
image1.png
doc1.pdf
script.js
notes.txt
```
After running the script, the structure will be:
```
png/image1.png
pdf/doc1.pdf
js/script.js
txt/notes.txt
```
(`.js` files are not moved but you can easily adjust this by editing the script.)

## Requirements

- Node.js v14 or later

## Notes

- Only files with extensions other than `.js` and `.json` are moved by default.
- If some files are not moved on the first run, run the script again.
- Make sure you have the necessary permissions to create folders and move files in the target directory.

## License

This project is open-source and free to use.

---

*Automatically organize your cluttered directories with Clutter Manage!*