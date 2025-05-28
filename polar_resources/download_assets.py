import requests
import os
import time
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Base URL for downloading assets
BASE_URL = "https://app.next.polarr.com/"

# Path to the sw.js file
SW_JS_PATH = "sw.js/app.next.polarr.com/sw.js"

# Directory to save downloaded assets
DOWNLOAD_DIR = "sw_assets"

# New base directory for organized assets
ORGANIZED_DOWNLOAD_DIR = "organized_assets"

# Ensure the download directory exists
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

# Ensure the new base directory exists
os.makedirs(ORGANIZED_DOWNLOAD_DIR, exist_ok=True)

# Function to extract asset paths from the sw.js file
def extract_asset_paths(file_path):
    asset_paths = []
    with open(file_path, 'r') as file:
        lines = file.readlines()
        for line in lines[45:]:  # Start from line 46 (0-indexed)
            if 'url:' in line:
                # Extract the URL path
                path = line.split('"')[1]
                asset_paths.append(path)
    return asset_paths

# Extract asset paths from the sw.js file
asset_paths = extract_asset_paths(SW_JS_PATH)

# Function to list files in the sw_assets directory
def list_downloaded_files(directory):
    return set(os.listdir(directory))

# List of downloaded files
existing_files = list_downloaded_files(DOWNLOAD_DIR)

# List of expected files from asset paths
expected_files = set(asset_path.split('/')[-1] for asset_path in asset_paths)

# Identify missing files
missing_files = expected_files - existing_files

# Print missing files
if missing_files:
    print("Missing files:")
    for missing_file in missing_files:
        print(missing_file)
else:
    print("No files are missing.")

# Function to download a file from a URL
def download_file(url, local_filename, retries=3):
    attempt = 0
    while attempt < retries:
        try:
            logging.info(f"Attempting to download {url} (Attempt {attempt + 1}/{retries})")
            # Send a GET request to the URL
            with requests.get(url, stream=True) as r:
                r.raise_for_status()
                # Open a local file with the same name as the asset
                with open(local_filename, 'wb') as f:
                    for chunk in r.iter_content(chunk_size=8192):
                        f.write(chunk)
            logging.info(f"Successfully downloaded {url}")
            return  # Exit the function if download is successful
        except requests.exceptions.RequestException as e:
            logging.error(f"Error downloading {url}: {e}")
            attempt += 1
            logging.info(f"Retrying {url} ({attempt}/{retries})...")
            time.sleep(2)  # Wait for 2 seconds before retrying
    logging.error(f"Failed to download {url} after {retries} attempts.")

# Function to download a file from a URL and save it in the correct directory
for asset_path in asset_paths:
    print("processing ", asset_path)
    full_url = BASE_URL + asset_path
    
    # Create the full local path, including directories
    local_path = os.path.join(ORGANIZED_DOWNLOAD_DIR, asset_path)
    local_dir = os.path.dirname(local_path)
    os.makedirs(local_dir, exist_ok=True)
    
    # Check if the file already exists
    if os.path.exists(local_path):
        print(f"Skipping {local_path}, already exists.")
        continue
    
    print(f"Downloading {full_url}...")
    download_file(full_url, local_path)
    print(f"Downloaded {local_path}")

print("All files processed.") 