# my_dot_env
Custom Dotenv Implementation in Node.js
Overview
This Node.js script provides a custom implementation of dotenv functionality, allowing you to load environment variables from a specified file into the process.env object. The implementation is designed to be lightweight and easy to use, enabling the organization and management of key-value pairs for your Node.js applications.

Features
Custom Implementation: A simple and lightweight script for loading environment variables from a data file.

User-friendly: Follows a key-value pair format in a plain text file for easy configuration.

Usage
Create a Data File:

Create a file (e.g., .data) with key-value pairs, each on a new line:

plaintext
Copy code
DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=secret
Run the Script:

Execute the Node.js script (e.g., node my_dot_env.js). The script reads the data file, parses the key-value pairs, and sets them as properties on process.env.

Access Environment Variables:

Use the environment variables in your application as follows:

javascript
Copy code
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
Notes
Ensure that the file path to the data file is correct relative to the script.

Environment variable names are case-sensitive.

Handle sensitive information securely, especially in production environments.

Example
bash
Copy code
node my_dot_env.js
License
This project is licensed under the MIT License.

Acknowledgments
Inspired by the concept of dotenv for managing environment variables in Node.js applications.
Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.
