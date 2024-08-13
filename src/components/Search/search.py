import re

# Sample data
products = [
    {
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "id": 1,
        "name": "Essence Mascara Lash Princess",
        "tags": [
            {
                "category_id": 1,
                "id": 1,
                "name": "mascara"
            }
        ]
    },
    {
        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        "id": 2,
        "name": "Eyeshadow Palette with Mirror",
        "tags": [
            {
                "category_id": 1,
                "id": 2,
                "name": "eyeshadow"
            }
        ]
    },
    {
        "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        "id": 3,
        "name": "Powder Canister",
        "tags": [
            {
                "category_id": 1,
                "id": 3,
                "name": "face powder"
            }
        ]
    },
    {
        "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        "id": 4,
        "name": "Red Lipstick",
        "tags": [
            {
                "category_id": 1,
                "id": 4,
                "name": "lipstick"
            }
        ]
    }
]

def tokenize(text):
    # Remove punctuation and split into words
    return re.findall(r'\b\w+\b', text.lower())

def search_products(query, products):
    query_tokens = tokenize(query)
    results = []

    for product in products:
        product_name = tokenize(product['name'])
        product_description = tokenize(product['description'])
        product_tags = [tokenize(tag['name']) for tag in product['tags']]

        # Flatten the list of tags
        product_tags_flat = [item for sublist in product_tags for item in sublist]

        # Check if any query tokens are in the product name, description, or tags
        if any(token in product_name for token in query_tokens) or \
           any(token in product_description for token in query_tokens) or \
           any(token in product_tags_flat for token in query_tokens):
            results.append(product)
    
    return results

# Test the search function
query = "long-lasting mascara"
search_results = search_products(query, products)

for result in search_results:
    print(f"Found: {result['name']}")

