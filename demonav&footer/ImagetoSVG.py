from PIL import Image
import matplotlib.pyplot as plt
import numpy as np
import cv2
import svgwrite

# Load the image
image_path = './logo.png'
image = Image.open(image_path).convert('RGBA')

# Convert image to numpy array
image_np = np.array(image)

# Convert RGBA to RGB
image_rgb = cv2.cvtColor(image_np, cv2.COLOR_RGBA2RGB)

# Convert image to grayscale
gray = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2GRAY)

# Thresholding the image to create a binary image
_, binary = cv2.threshold(gray, 128, 255, cv2.THRESH_BINARY_INV)

# Finding contours
contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Create an SVG drawing
dwg = svgwrite.Drawing('output.svg', profile='tiny')

# Add contours to the SVG
for contour in contours:
    points = [(point[0][0], point[0][1]) for point in contour]
    dwg.add(dwg.polygon(points, fill='red'))

# Save the SVG file
dwg.save()

# Display the SVG content as text
with open('output.svg', 'r') as file:
    svg_content = file.read()

print(svg_content[:1000])  # Print the first 1000 characters of the SVG content
