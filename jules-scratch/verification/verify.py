
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f"file://{os.getcwd()}/abiz.html")
        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

if __name__ == "__main__":
    import os
    run()
