 Custom Dotenv Implementation in Node.js

## Overview

This Node.js script provides a custom implementation of dotenv functionality, allowing you to load environment variables from a specified file into the `process.env` object. The implementation is designed to be lightweight and easy to use, enabling the organization and management of key-value pairs for your Node.js applications.

## Features 

- **Custom Implementation:** A simple and lightweight script for loading environment variables from a data file.
- **User-friendly:** Follows a key-value pair format in a plain text file for easy configuration.

## Usage

### 1. Create a Data File

Create a file (e.g., `.env`) with key-value pairs, each on a new line:

```plaintext
DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=secret
