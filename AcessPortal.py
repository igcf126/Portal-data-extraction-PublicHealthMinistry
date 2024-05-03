import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select

# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.chrome.options import Options

# from webdriver_manager.chrome import ChromeDriveManager


username = os.getenv('KFF_Portal_User')
password = os.getenv('KFF_Portal_Password')
chrome_driver_path = r'C:\Drivers\chromedriver.exe'


# Setup Chrome and navigate to the page
driver = webdriver.Chrome()

'''
# Create a ChromeOptions object and specify the executable path
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

# Pass the ChromeOptions object to the ChromeDriver constructor
driver = webdriver.Chrome(options=chrome_options)

'''


driver.get('https://servicios.msp.gob.do/Portal/Account/Login')
title = driver.title

driver.implicitly_wait(3)  # adjust timing based on your network speed

# Find the username and password fields
username_field = driver.find_element(By.ID, "UserId")
username_field.send_keys(username)

password_field = driver.find_element(By.ID, "Password")
password_field.send_keys(password)
# password_field.send_keys(Keys.RETURN)

# Submit the form (alternative to send_keys(Keys.RETURN))
password_field.submit()

########## SELECCIONAR CATEGORÍA ##########

# Locate the dropdown menu
dropdown = driver.find_element(By.CLASS_NAME, "services")

# Create a Select object for the dropdown
select = Select(dropdown)
select.select_by_value('/portal/home/documents/S02')

page_content = driver.page_source


# Wait for page load (simplified example)
driver.implicitly_wait(10)  # adjust timing based on your network speed

print(page_content)

'''
okay, we're almost there, look, in the page we are in i have a list of 10 of my products, but i want to access all my products, let me show you the HMTL of the page so you can image it's structure. REMEMBER, i want a quick way to access all product data related to my accound without the need of going on every page.
'''