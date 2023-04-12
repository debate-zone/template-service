.PHONY: install start test clean

# Set the default target to 'start' when calling `make` with no arguments.
.DEFAULT_GOAL := start

# Install dependencies
install:
	npm ci

# Start the application
start:
	npm start:dev

# Run tests
test:
	npm test

# Clean up the project
clean:
	rm -rf node_modules
